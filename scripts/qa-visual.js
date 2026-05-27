import { mkdir } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const host = '127.0.0.1';
const port = 4173;
const baseUrl = `http://${host}:${port}`;
const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const artifactRoot = new URL('../qa-artifacts/visual/', import.meta.url);
const tolerance = 2;
const meaningfulCardArea = 25000;
const blankStoryArea = 50000;
const previewCommand = `npm.cmd run preview -- --host ${host} --port ${port}`;

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-412', width: 412, height: 915 },
];

const checks = [];
const artifacts = [];

const record = (ok, name, detail = '') => {
  checks.push({ ok, name, detail });
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForPreview = async (timeoutMs = 30000) => {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // Preview server is still starting.
    }

    await wait(500);
  }

  throw new Error(`Preview server did not respond at ${baseUrl}`);
};

const stopPreview = (server) => {
  if (!server.pid || server.killed) return;

  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
    return;
  }

  server.kill('SIGTERM');
};

const screenshotPath = (name) => new URL(`${name}.png`, artifactRoot);

const saveScreenshot = async (page, name, options = {}) => {
  const fileUrl = screenshotPath(name);
  const filePath = fileURLToPath(fileUrl);
  await page.screenshot({ path: filePath, fullPage: false, ...options });
  artifacts.push(filePath);
};

const getPageText = (page) => page.evaluate(() => document.body.innerText || '');

const hasNoHorizontalOverflow = (page) => page.evaluate(
  (allowedTolerance) => document.documentElement.scrollWidth <= window.innerWidth + allowedTolerance,
  tolerance,
);

const scrollToStoryProgress = async (page, progress) => {
  const didScroll = await page.evaluate((targetProgress) => {
    const exhibit = document.querySelector('.scene-container-exhibit');
    if (!exhibit) return false;

    const rect = exhibit.getBoundingClientRect();
    const exhibitTop = window.scrollY + rect.top;
    const scrollDistance = Math.max(exhibit.offsetHeight - window.innerHeight, 1);
    const boundaryOffset = targetProgress >= 1 ? 2 : 0;

    window.scrollTo({
      top: exhibitTop + scrollDistance * targetProgress - boundaryOffset,
      behavior: 'instant',
    });

    return true;
  }, progress);

  record(didScroll, `desktop Story Track: progress ${progress} scroll target exists`);
  await page.waitForTimeout(1200);
};

const getStoryTrackState = (page) => page.evaluate((minArea) => {
  const cards = Array.from(document.querySelectorAll('.archive-study'));
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const visibleCards = cards.map((element, index) => {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    const opacity = Number.parseFloat(style.opacity || '1');
    const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    const area = Math.round(visibleWidth * visibleHeight * opacity);

    return {
      index,
      title: element.querySelector('.study-title')?.textContent?.trim() || `Archive card ${index}`,
      area,
      opacity,
    };
  });

  const meaningfulCards = visibleCards.filter((card) => card.area >= minArea);
  const totalVisibleArea = visibleCards.reduce((sum, card) => sum + card.area, 0);

  return {
    cardCount: cards.length,
    totalVisibleArea,
    meaningfulCards,
    firstVisible: meaningfulCards.some((card) => card.index === 0),
    middleVisible: meaningfulCards.some((card) => card.index === Math.floor((cards.length - 1) / 2) || card.index === Math.ceil((cards.length - 1) / 2)),
    lastVisible: meaningfulCards.some((card) => card.index === cards.length - 1),
  };
}, meaningfulCardArea);

const assertStoryCheckpoint = async (page, checkpoint) => {
  await scrollToStoryProgress(page, checkpoint.progress);

  const state = await getStoryTrackState(page);
  const visibleTitles = state.meaningfulCards.map((card) => `${card.index}:${card.title}`).join(', ') || 'none';

  record(
    state.meaningfulCards.length > 0,
    `desktop Story Track ${checkpoint.name}: meaningful archive card visible`,
    visibleTitles,
  );
  record(
    state.totalVisibleArea >= blankStoryArea,
    `desktop Story Track ${checkpoint.name}: viewport is not effectively blank`,
    `visible area ${state.totalVisibleArea}`,
  );

  if (checkpoint.required === 'first') {
    record(state.firstVisible, 'desktop Story Track start: first archive card visible', visibleTitles);
  }

  if (checkpoint.required === 'middle') {
    record(state.middleVisible, 'desktop Story Track mid: middle archive card visible', visibleTitles);
  }

  if (checkpoint.required === 'last') {
    record(state.lastVisible, 'desktop Story Track end: last archive card visible', visibleTitles);
  }

  await saveScreenshot(page, checkpoint.screenshot);
};

const sectionChecks = [
  { name: 'Obsidian / hero', pattern: /Obsidian/i },
  { name: 'Exhibit / archive', pattern: /Exhibit|Archive/i },
  { name: 'Studio Trust / ledger', pattern: /Studio Trust|Trust|Ledger/i },
  { name: 'Intake', pattern: /Intake/i },
  { name: 'Secure Session', pattern: /Secure\s*Session/i },
];

const storyCheckpoints = [
  { name: 'start', progress: 0, required: 'first', screenshot: 'desktop-story-start' },
  { name: 'mid', progress: 0.5, required: 'middle', screenshot: 'desktop-story-mid' },
  { name: 'end', progress: 1, required: 'last', screenshot: 'desktop-story-end' },
];

await mkdir(artifactRoot, { recursive: true });

const preview = spawn('cmd.exe', ['/d', '/s', '/c', previewCommand], {
  cwd: projectRoot,
  stdio: ['ignore', 'pipe', 'pipe'],
  windowsHide: true,
});

let previewOutput = '';
preview.stdout.on('data', (chunk) => {
  previewOutput += chunk.toString();
});
preview.stderr.on('data', (chunk) => {
  previewOutput += chunk.toString();
});

let browser;

try {
  await waitForPreview();
  record(true, 'Production preview started', baseUrl);

  browser = await chromium.launch();
  const page = await browser.newPage();

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForSelector('main', { state: 'visible', timeout: 10000 });

    const bodyText = await getPageText(page);
    record(bodyText.trim().length > 0, `${viewport.name}: body is not blank`);

    const noOverflow = await hasNoHorizontalOverflow(page);
    record(noOverflow, `${viewport.name}: no horizontal overflow`);

    for (const section of sectionChecks) {
      record(section.pattern.test(bodyText), `${viewport.name}: ${section.name} marker present`);
    }

    await saveScreenshot(page, viewport.name);
  }

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForSelector('.scene-container-exhibit', { state: 'attached', timeout: 10000 });

  for (const checkpoint of storyCheckpoints) {
    await assertStoryCheckpoint(page, checkpoint);
  }
} catch (error) {
  record(false, 'Visual QA runtime', error.message);
} finally {
  if (browser) await browser.close();
  stopPreview(preview);
}

const failures = checks.filter((check) => !check.ok);

console.log('QA Visual');
for (const check of checks) {
  console.log(`${check.ok ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
}

if (artifacts.length > 0) {
  console.log('');
  console.log('Artifacts');
  for (const artifact of artifacts) {
    console.log(artifact);
  }
}

if (failures.length > 0) {
  if (previewOutput.trim()) {
    console.log('');
    console.log('Preview output');
    console.log(previewOutput.trim());
  }

  console.log(`Result: FAIL (${failures.length} issue${failures.length === 1 ? '' : 's'})`);
  process.exit(1);
}

console.log('Result: PASS');
