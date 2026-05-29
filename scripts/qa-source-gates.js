import { readdir, readFile } from 'node:fs/promises';

const srcRoot = new URL('../src/', import.meta.url);
const sourceExtensions = new Set(['.js', '.jsx', '.css']);

const checks = [];

const pass = (name) => checks.push({ name, ok: true });
const fail = (name, detail) => checks.push({ name, ok: false, detail });

const getExtension = (fileName) => {
  const dotIndex = fileName.lastIndexOf('.');
  return dotIndex === -1 ? '' : fileName.slice(dotIndex);
};

const collectSourceFiles = async (directoryUrl) => {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryUrl = new URL(entry.name, directoryUrl);
    if (entry.isDirectory()) {
      files.push(...await collectSourceFiles(new URL(`${entry.name}/`, directoryUrl)));
    } else if (sourceExtensions.has(getExtension(entry.name))) {
      files.push(entryUrl);
    }
  }

  return files;
};

const sourceFiles = await collectSourceFiles(srcRoot);
const fileContents = await Promise.all(
  sourceFiles.map(async (fileUrl) => ({
    path: fileUrl.pathname.replace(/^\/([A-Za-z]:)/, '$1'),
    text: await readFile(fileUrl, 'utf8'),
  })),
);

const allSource = fileContents.map((file) => file.text).join('\n');
const readProjectFile = (relativePath) => readFile(new URL(`../${relativePath}`, import.meta.url), 'utf8');

const findPatternHits = (patterns) => {
  const hits = [];

  for (const file of fileContents) {
    const lines = file.text.split(/\r?\n/);
    lines.forEach((line, index) => {
      for (const pattern of patterns) {
        if (pattern.test(line)) {
          hits.push(`${file.path}:${index + 1}`);
          break;
        }
      }
    });
  }

  return hits;
};

const imagePlaceholderHits = findPatternHits([
  /placehold\.co/i,
  /via\.placeholder/i,
  /placeholder-image/i,
  /image-placeholder/i,
  /broken-image/i,
  /missing-image/i,
]);

if (imagePlaceholderHits.length === 0) {
  pass('No obvious broken image placeholder strings');
} else {
  fail('No obvious broken image placeholder strings', imagePlaceholderHits.join(', '));
}

const todoHits = findPatternHits([/\bTODO\b/i, /\bFIXME\b/i, /\blorem\b/i]);
if (todoHits.length === 0) {
  pass('No TODO, FIXME, or lorem text');
} else {
  fail('No TODO, FIXME, or lorem text', todoHits.join(', '));
}

const debugHits = findPatternHits([
  /\bconsole\.(log|debug|trace)\s*\(/,
  /\bdebugger\b/,
  /\bDEBUG\b/,
  /\bTEST_ONLY\b/,
  /\bDUMMY\b/,
]);

if (debugHits.length === 0) {
  pass('No accidental debug text');
} else {
  fail('No accidental debug text', debugHits.join(', '));
}

const sitePresetsSource = await readProjectFile('src/data/sitePresets.js');
const appSource = await readProjectFile('src/App.jsx');
const whatsappSource = await readProjectFile('src/lib/whatsapp.js');
const qaAssetsSource = await readProjectFile('scripts/qa-assets.js');

const sourceContracts = [
  {
    name: 'Route preset registry exists',
    ok: sitePresetsSource.includes('SITE_PRESETS') && sitePresetsSource.includes('SITE_PRESETS_BY_ID'),
    detail: 'Expected SITE_PRESETS and SITE_PRESETS_BY_ID in src/data/sitePresets.js.',
  },
  {
    name: 'Default route preset exists',
    ok: sitePresetsSource.includes('DEFAULT_SITE_ID') && sitePresetsSource.includes('getSitePreset'),
    detail: 'Expected DEFAULT_SITE_ID and getSitePreset in src/data/sitePresets.js.',
  },
  {
    name: 'Registered presets are discoverable from the site query',
    ok: sitePresetsSource.includes('URLSearchParams') && sitePresetsSource.includes('getSelectedSitePreset'),
    detail: 'Expected getSelectedSitePreset to resolve the site query through URLSearchParams.',
  },
  {
    name: 'App has a renderable route root',
    ok: appSource.includes('data-site=') && appSource.includes('<main>'),
    detail: 'Expected App.jsx to render an app root with data-site and a main landmark.',
  },
  {
    name: 'WhatsApp CTA helper is available',
    ok: whatsappSource.includes('getWhatsAppUrl') && allSource.includes('getWhatsAppUrl('),
    detail: 'Expected getWhatsAppUrl helper and at least one app usage.',
  },
  {
    name: 'Asset contract QA path exists',
    ok: qaAssetsSource.includes('docs/asset-contracts/') && qaAssetsSource.includes('contractFile'),
    detail: 'Expected qa-assets to validate docs/asset-contracts against preset contractFile values.',
  },
];

for (const contract of sourceContracts) {
  if (contract.ok) {
    pass(contract.name);
  } else {
    fail(contract.name, contract.detail);
  }
}

const failures = checks.filter((check) => !check.ok);

console.log('QA Source Gates');
for (const check of checks) {
  console.log(`${check.ok ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
}

if (failures.length > 0) {
  console.log(`Result: FAIL (${failures.length} issue${failures.length === 1 ? '' : 's'})`);
  process.exit(1);
}

console.log('Result: PASS');
