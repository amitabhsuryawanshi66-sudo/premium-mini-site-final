import { spawnSync } from 'node:child_process';

const checks = [
  ['qa:links', 'scripts/qa-links.js'],
  ['qa:source', 'scripts/qa-source-gates.js'],
  ['qa:assets', 'scripts/qa-assets.js'],
];

const results = [];

console.log('QA Report');
console.log('Browser automation: not included in v1');
console.log('');

for (const [name, script] of checks) {
  const result = spawnSync(process.execPath, [script], {
    cwd: new URL('..', import.meta.url),
    encoding: 'utf8',
    shell: false,
  });

  results.push({ name, status: result.status ?? 1 });
  console.log(`--- ${name} ---`);
  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);
  console.log('');
}

const failed = results.filter((result) => result.status !== 0);

console.log('Summary');
for (const result of results) {
  console.log(`${result.status === 0 ? 'PASS' : 'FAIL'} ${result.name}`);
}

if (failed.length > 0) {
  console.log(`Result: FAIL (${failed.length} check${failed.length === 1 ? '' : 's'})`);
  process.exit(1);
}

console.log('Result: PASS');
