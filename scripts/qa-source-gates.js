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

const requiredSections = [
  { name: 'hero', patterns: ['HeroArtifact', 'hero-artifact'] },
  { name: 'exhibit/archive', patterns: ['SceneExhibit', 'exhibit-archive', 'EXHIBIT_ARCHIVE'] },
  { name: 'trust ledger', patterns: ['StudioTrustLedger', 'studio-trust-ledger', 'PRIVATE_LEDGER'] },
  { name: 'intake', patterns: ['IntakeProtocolPanel', 'intake-protocol-panel', 'INTAKE_PROTOCOL'] },
  { name: 'secure session', patterns: ['SceneThreshold', 'Secure<br />Session', 'portal-threshold'] },
];

const missingSections = requiredSections
  .filter((section) => !section.patterns.some((pattern) => allSource.includes(pattern)))
  .map((section) => section.name);

if (missingSections.length === 0) {
  pass('Key sections exist: hero, exhibit/archive, trust ledger, intake, secure session');
} else {
  fail('Key sections exist: hero, exhibit/archive, trust ledger, intake, secure session', missingSections.join(', '));
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
