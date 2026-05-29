import { mkdir } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { DEFAULT_SITE_ID, SITE_PRESETS } from '../src/data/sitePresets.js';

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

const legacyStoryTrackInteraction = {
  type: 'legacy-story-track',
  label: 'Story Track',
};

const defaultInteractionChecksByPreset = new Map([
  ['obsidian-ink', [legacyStoryTrackInteraction]],
  ['velour-house', [legacyStoryTrackInteraction]],
]);

const getPresetInteractionChecks = (preset) => {
  if (Array.isArray(preset.qaInteractionChecks)) return preset.qaInteractionChecks;
  if (Array.isArray(preset.interactionChecks)) return preset.interactionChecks;
  return defaultInteractionChecksByPreset.get(preset.id) || [];
};

const defaultPreset = SITE_PRESETS.find((preset) => preset.id === DEFAULT_SITE_ID);

const routeChecks = [
  {
    name: 'default',
    query: '',
    expectedSiteId: DEFAULT_SITE_ID,
    interactionChecks: defaultPreset ? getPresetInteractionChecks(defaultPreset) : [],
  },
  ...SITE_PRESETS
    .filter((preset) => preset.id !== DEFAULT_SITE_ID)
    .map((preset) => ({
      name: preset.id,
      query: `?site=${encodeURIComponent(preset.id)}`,
      expectedSiteId: preset.id,
      interactionChecks: getPresetInteractionChecks(preset),
    })),
  {
    name: 'unknown-fallback',
    query: '?site=unknown-test',
    expectedSiteId: DEFAULT_SITE_ID,
    interactionChecks: defaultPreset ? getPresetInteractionChecks(defaultPreset) : [],
  },
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

const getRouteUrl = (route) => `${baseUrl}/${route.query}`;

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

const getRouteState = (page) => page.evaluate(() => {
  const appRoot = document.querySelector('.app-root');
  const main = document.querySelector('main');
  const mainRect = main?.getBoundingClientRect();

  return {
    dataSite: appRoot?.getAttribute('data-site') || '',
    hasAppRoot: Boolean(appRoot),
    hasMain: Boolean(main),
    mainChildCount: main?.children.length || 0,
    mainRenderedArea: mainRect ? Math.round(Math.max(0, mainRect.width) * Math.max(0, mainRect.height)) : 0,
    bodyLength: (document.body.innerText || '').trim().length,
    ctaCount: document.querySelectorAll('a[href^="https://wa.me/"]').length,
  };
});

const getLegacyStoryTrackState = (page) => page.evaluate(() => {
  const container = document.querySelector('.scene-container-exhibit');

  return {
    hasContainer: Boolean(container),
    cardCount: container?.querySelectorAll('.archive-study').length || 0,
  };
});

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
  const container = document.querySelector('.scene-container-exhibit');
  const cards = Array.from(container?.querySelectorAll('.archive-study') || []);
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

const assertSelectorInteraction = async (page, route, interaction) => {
  const selector = interaction.selector;
  const label = interaction.label || selector;
  const exists = await page.locator(selector).first().count();

  record(exists > 0, `${route.name} desktop ${label}: selector exists`, selector);

  if (exists > 0 && interaction.screenshot) {
    await saveScreenshot(page, `${route.name}-${interaction.screenshot}`);
  }
};

const assertRouteInteraction = async (page, route, interaction) => {
  if (interaction.type === 'legacy-story-track') {
    const legacyStoryTrack = await getLegacyStoryTrackState(page);

    record(
      legacyStoryTrack.hasContainer,
      `${route.name} desktop Story Track: declared interaction container exists`,
      '.scene-container-exhibit',
    );
    record(
      legacyStoryTrack.cardCount >= 1,
      `${route.name} desktop Story Track: declared interaction cards exist`,
      `${legacyStoryTrack.cardCount} cards`,
    );

    if (!legacyStoryTrack.hasContainer || legacyStoryTrack.cardCount < 1) {
      return;
    }

    for (const checkpoint of storyCheckpoints) {
      await assertStoryCheckpoint(page, {
        ...checkpoint,
        screenshot: `${route.name}-${checkpoint.screenshot}`,
      });
    }
    return;
  }

  if (interaction.type === 'selector') {
    await assertSelectorInteraction(page, route, interaction);
    return;
  }

  record(false, `${route.name} desktop interaction check type is supported`, interaction.type || 'missing type');
};

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

  for (const route of routeChecks) {
    const routeUrl = getRouteUrl(route);

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(routeUrl, { waitUntil: 'networkidle' });
      await page.waitForSelector('main', { state: 'visible', timeout: 10000 });

      const bodyText = await getPageText(page);
      record(bodyText.trim().length > 0, `${route.name} ${viewport.name}: body is not blank`);

      const routeState = await getRouteState(page);
      record(
        routeState.dataSite === route.expectedSiteId,
        `${route.name} ${viewport.name}: expected site preset renders`,
        `expected ${route.expectedSiteId}, got ${routeState.dataSite || 'none'}`,
      );
      record(routeState.hasAppRoot, `${route.name} ${viewport.name}: app root exists`);
      record(routeState.hasMain, `${route.name} ${viewport.name}: main landmark exists`);
      record(routeState.bodyLength > 0, `${route.name} ${viewport.name}: route text is present`);
      record(
        routeState.mainChildCount >= 1 && routeState.mainRenderedArea > 0,
        `${route.name} ${viewport.name}: route content is rendered`,
        `${routeState.mainChildCount} main children, area ${routeState.mainRenderedArea}`,
      );
      record(
        routeState.ctaCount >= 1,
        `${route.name} ${viewport.name}: WhatsApp CTA exists`,
        `${routeState.ctaCount} links`,
      );

      const noOverflow = await hasNoHorizontalOverflow(page);
      record(noOverflow, `${route.name} ${viewport.name}: no horizontal overflow`);

      await saveScreenshot(page, `${route.name}-${viewport.name}`);
    }

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(routeUrl, { waitUntil: 'networkidle' });
    await page.waitForSelector('main', { state: 'visible', timeout: 10000 });

    if (!route.interactionChecks || route.interactionChecks.length === 0) {
      record(
        true,
        `${route.name} desktop key interaction proof: not declared`,
        'Generic route health checks only.',
      );
      continue;
    }

    for (const interaction of route.interactionChecks) {
      await assertRouteInteraction(page, route, interaction);
    }
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
