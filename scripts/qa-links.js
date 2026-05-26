import { readFile } from 'node:fs/promises';

import { INTAKE_PROTOCOL } from '../src/data/demoData.js';

const checks = [];

const pass = (name) => checks.push({ name, ok: true });
const fail = (name, detail) => checks.push({ name, ok: false, detail });

const hasContent = (value) => typeof value === 'string' && value.trim().length > 0;

const whatsappSource = await readFile(new URL('../src/lib/whatsapp.js', import.meta.url), 'utf8');
const appSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');

if (
  whatsappSource.includes('getWhatsAppUrl') &&
  whatsappSource.includes('encodeURIComponent') &&
  whatsappSource.includes('https://wa.me/')
) {
  pass('WhatsApp URL helper still creates encoded wa.me links');
} else {
  fail('WhatsApp URL helper still creates encoded wa.me links', 'Expected getWhatsAppUrl, encodeURIComponent, and https://wa.me/.');
}

if (appSource.includes('getWhatsAppUrl(')) {
  pass('App still routes CTA links through getWhatsAppUrl');
} else {
  fail('App still routes CTA links through getWhatsAppUrl', 'No getWhatsAppUrl call found in src/App.jsx.');
}

if (Array.isArray(INTAKE_PROTOCOL) && INTAKE_PROTOCOL.length === 5) {
  pass('Intake protocol contains 5 actions');
} else {
  fail('Intake protocol contains 5 actions', `Found ${Array.isArray(INTAKE_PROTOCOL) ? INTAKE_PROTOCOL.length : 'no'} actions.`);
}

const emptyIntakeFields = INTAKE_PROTOCOL
  .flatMap((item, index) => [
    hasContent(item?.label) ? null : `action ${index + 1} label`,
    hasContent(item?.message) ? null : `action ${index + 1} message`,
  ])
  .filter(Boolean);

if (emptyIntakeFields.length === 0) {
  pass('No empty intake CTA labels or messages');
} else {
  fail('No empty intake CTA labels or messages', emptyIntakeFields.join(', '));
}

const failures = checks.filter((check) => !check.ok);

console.log('QA Links');
for (const check of checks) {
  console.log(`${check.ok ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
}

if (failures.length > 0) {
  console.log(`Result: FAIL (${failures.length} issue${failures.length === 1 ? '' : 's'})`);
  process.exit(1);
}

console.log('Result: PASS');
