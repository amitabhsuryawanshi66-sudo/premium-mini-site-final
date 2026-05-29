import { readFile } from 'node:fs/promises';

import { SITE_PRESETS } from '../src/data/sitePresets.js';

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

const presetsMissingIntake = SITE_PRESETS
  .filter((preset) => !Array.isArray(preset.intakeProtocol) || preset.intakeProtocol.length < 1)
  .map((preset) => preset.id);

if (presetsMissingIntake.length === 0) {
  pass('Registered presets declare at least one intake action');
} else {
  fail('Registered presets declare at least one intake action', presetsMissingIntake.join(', '));
}

const emptyIntakeFields = SITE_PRESETS
  .flatMap((preset) => (preset.intakeProtocol || []).flatMap((item, index) => [
    hasContent(item?.label) ? null : `${preset.id} action ${index + 1} label`,
    hasContent(item?.message) ? null : `${preset.id} action ${index + 1} message`,
  ]))
  .filter(Boolean);

if (emptyIntakeFields.length === 0) {
  pass('No empty registered intake CTA labels or messages');
} else {
  fail('No empty registered intake CTA labels or messages', emptyIntakeFields.join(', '));
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
