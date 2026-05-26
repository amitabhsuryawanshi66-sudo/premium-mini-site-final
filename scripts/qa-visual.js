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

const hasVisibleStoryTrackContent = (page) => page.evaluate(() => {
  const candidates = document.querySelectorAll('.story-track, .archive-study, .exhibit-header, .exhibit-footer');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  return Array.from(candidates).some((element) => {
    const rect = element.getBoundingClientRect();
    const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    return visibleWidth * visibleHeight > 1000;
  });
});

const sectionChecks = [
  { name: 'Obsidian / hero', pattern: /Obsidian/i },
  { name: 'Exhibit / archive', pattern: /Exhibit|Archive/i },
  { name: 'Studio Trust / ledger', pattern: /Studio Trust|Trust|Ledger/i },
  { name: 'Intake', pattern: /Intake/i },
  { name: 'Secure Session', pattern: /Secure\s*Session/i },
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
  await page.evaluate(() => {
    const exhibit = document.querySelector('.scene-container-exhibit');
    const rect = exhibit.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + rect.top + window.innerHeight * 0.75, behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const storyVisible = await hasVisibleStoryTrackContent(page);
  record(storyVisible, 'desktop: Story Track/exhibit viewport is not blank');
  await saveScreenshot(page, 'desktop-story-track');
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
