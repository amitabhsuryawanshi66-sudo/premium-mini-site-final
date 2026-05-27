import { readFile } from 'node:fs/promises';

import { EXHIBIT_ARCHIVE } from '../src/data/demoData.js';

const contractUrl = new URL('../docs/asset-contracts/obsidian-ink.json', import.meta.url);

const allowedSourceTypes = new Set([
  'client-provided',
  'generated-bespoke',
  'licensed-stock',
  'deterministic-artifact',
]);

const requiredFields = [
  'section',
  'title',
  'serviceValue',
  'requiredSubject',
  'forbiddenSubjects',
  'assetSourceType',
  'assetSource',
  'assetBinding',
  'semanticFit',
  'fallbackMode',
  'fallbackSubject',
  'visualProofNote',
];

const claimedVisualFields = [
  'requiredSubject',
  'assetSource',
  'semanticFit',
  'fallbackSubject',
];

const genericSubjectTerms = [
  'laptop',
  'office',
  'doctor',
  'business meeting',
  'generic lifestyle',
  'corporate',
  'desk',
  'conference',
];

const labelRelianceTerms = [
  'badge',
  'caption',
  'label',
  'metadata',
  'meta text',
  'text explains',
];

const artifactSubjectTerms = [
  'anatom',
  'body',
  'placement',
  'stencil',
  'map',
  'blueprint',
  'linework',
  'pigment',
  'ink',
  'tool',
  'skin',
  'sterile',
  'tattoo',
  'transfer',
  'flow',
  'craft',
];

const checks = [];

const pass = (name) => checks.push({ name, ok: true });
const fail = (name, detail) => checks.push({ name, ok: false, detail });

const isNonEmpty = (value) => {
  if (Array.isArray(value)) {
    return value.length > 0 && value.every((item) => typeof item === 'string' && item.trim().length > 0);
  }

  if (value && typeof value === 'object') {
    return Object.keys(value).length > 0;
  }

  return typeof value === 'string' && value.trim().length > 0;
};

const normalize = (value) => String(value ?? '').toLowerCase();

const findTerms = (text, terms) => {
  const normalizedText = normalize(text);
  return terms.filter((term) => normalizedText.includes(term));
};

const summarizeItems = (items) => items.join(', ');

const contract = JSON.parse(await readFile(contractUrl, 'utf8'));
const visualItems = Array.isArray(contract.visualItems) ? contract.visualItems : [];

if (visualItems.length > 0) {
  pass('Asset contract has visualItems');
} else {
  fail('Asset contract has visualItems', 'docs/asset-contracts/obsidian-ink.json must include visualItems.');
}

const contractsByTitle = new Map();
const duplicateTitles = [];

for (const item of visualItems) {
  if (typeof item.title !== 'string') {
    continue;
  }

  if (contractsByTitle.has(item.title)) {
    duplicateTitles.push(item.title);
  }

  contractsByTitle.set(item.title, item);
}

if (duplicateTitles.length === 0) {
  pass('Asset contract titles are unique');
} else {
  fail('Asset contract titles are unique', summarizeItems(duplicateTitles));
}

const missingContracts = EXHIBIT_ARCHIVE
  .filter((item) => !contractsByTitle.has(item.title))
  .map((item) => item.title);

const archiveTitles = new Set(EXHIBIT_ARCHIVE.map((item) => item.title));
const orphanContracts = visualItems
  .filter((item) => typeof item.title === 'string' && !archiveTitles.has(item.title))
  .map((item) => item.title);

if (missingContracts.length === 0) {
  pass('Every EXHIBIT_ARCHIVE item has an asset contract');
} else {
  fail('Every EXHIBIT_ARCHIVE item has an asset contract', summarizeItems(missingContracts));
}

if (orphanContracts.length === 0) {
  pass('Asset contract has no orphan visual items');
} else {
  fail('Asset contract has no orphan visual items', summarizeItems(orphanContracts));
}

const missingFields = [];
const invalidSourceTypes = [];
const weakArtifactFallbacks = [];
const weakStockFits = [];
const labelReliance = [];
const forbiddenPositiveClaims = [];
const serviceValueMismatches = [];
const assetBindingMismatches = [];

for (const archiveItem of EXHIBIT_ARCHIVE) {
  const contractItem = contractsByTitle.get(archiveItem.title);

  if (!contractItem) {
    continue;
  }

  for (const field of requiredFields) {
    if (!isNonEmpty(contractItem[field])) {
      missingFields.push(`${archiveItem.title}.${field}`);
    }
  }

  if (!allowedSourceTypes.has(contractItem.assetSourceType)) {
    invalidSourceTypes.push(`${archiveItem.title}: ${contractItem.assetSourceType}`);
  }

  if (contractItem.serviceValue !== archiveItem.serviceValue) {
    serviceValueMismatches.push(archiveItem.title);
  }

  const binding = contractItem.assetBinding;
  if (binding && typeof binding === 'object' && !Array.isArray(binding)) {
    if (contractItem.assetSourceType === 'deterministic-artifact') {
      if (binding.visualMode !== archiveItem.visualMode || binding.visualVariant !== archiveItem.visualVariant) {
        assetBindingMismatches.push(
          `${archiveItem.title}: expected visualMode=${archiveItem.visualMode}, visualVariant=${archiveItem.visualVariant}`,
        );
      }
    } else if (binding.image !== archiveItem.image) {
      assetBindingMismatches.push(`${archiveItem.title}: expected image=${archiveItem.image}`);
    }
  }

  const claimedText = claimedVisualFields.map((field) => contractItem[field]).join(' ');
  const forbiddenSubjects = Array.isArray(contractItem.forbiddenSubjects) ? contractItem.forbiddenSubjects : [];
  const forbiddenTerms = [...new Set([...genericSubjectTerms, ...forbiddenSubjects.map(normalize)])];
  const forbiddenHits = findTerms(claimedText, forbiddenTerms);

  if (forbiddenHits.length > 0) {
    forbiddenPositiveClaims.push(`${archiveItem.title}: ${summarizeItems(forbiddenHits)}`);
  }

  const labelHits = findTerms(
    [contractItem.requiredSubject, contractItem.semanticFit, contractItem.fallbackSubject].join(' '),
    labelRelianceTerms,
  );

  if (labelHits.length > 0) {
    labelReliance.push(`${archiveItem.title}: ${summarizeItems(labelHits)}`);
  }

  if (contractItem.assetSourceType === 'deterministic-artifact') {
    const fallbackText = normalize(contractItem.fallbackSubject);
    const hasSubjectTerm = artifactSubjectTerms.some((term) => fallbackText.includes(term));

    if (!hasSubjectTerm || fallbackText.split(/\s+/).filter(Boolean).length < 4) {
      weakArtifactFallbacks.push(archiveItem.title);
    }
  }

  if (contractItem.assetSourceType === 'licensed-stock') {
    const semanticFit = normalize(contractItem.semanticFit);
    const hasContractTerm = [
      contractItem.title,
      contractItem.serviceValue,
      contractItem.requiredSubject,
    ]
      .join(' ')
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length >= 5)
      .some((word) => semanticFit.includes(word));

    if (semanticFit.length < 80 || !hasContractTerm) {
      weakStockFits.push(archiveItem.title);
    }
  }
}

if (missingFields.length === 0) {
  pass('Required asset contract fields are present');
} else {
  fail('Required asset contract fields are present', summarizeItems(missingFields));
}

if (invalidSourceTypes.length === 0) {
  pass('Asset source types are allowed');
} else {
  fail('Asset source types are allowed', summarizeItems(invalidSourceTypes));
}

if (serviceValueMismatches.length === 0) {
  pass('Asset contracts match archive service values');
} else {
  fail('Asset contracts match archive service values', summarizeItems(serviceValueMismatches));
}

if (assetBindingMismatches.length === 0) {
  pass('Asset bindings match current archive data');
} else {
  fail('Asset bindings match current archive data', summarizeItems(assetBindingMismatches));
}

if (forbiddenPositiveClaims.length === 0) {
  pass('Forbidden generic subjects are not used as positive visual claims');
} else {
  fail('Forbidden generic subjects are not used as positive visual claims', summarizeItems(forbiddenPositiveClaims));
}

if (labelReliance.length === 0) {
  pass('Asset contracts do not rely on labels or metadata as the visual subject');
} else {
  fail('Asset contracts do not rely on labels or metadata as the visual subject', summarizeItems(labelReliance));
}

if (weakArtifactFallbacks.length === 0) {
  pass('Deterministic artifacts have subject-led fallback descriptions');
} else {
  fail('Deterministic artifacts have subject-led fallback descriptions', summarizeItems(weakArtifactFallbacks));
}

if (weakStockFits.length === 0) {
  pass('Licensed stock entries include meaningful semantic fit notes');
} else {
  fail('Licensed stock entries include meaningful semantic fit notes', summarizeItems(weakStockFits));
}

const failures = checks.filter((check) => !check.ok);

console.log('QA Assets');
for (const check of checks) {
  console.log(`${check.ok ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
}

if (failures.length > 0) {
  console.log(`Result: FAIL (${failures.length} issue${failures.length === 1 ? '' : 's'})`);
  process.exit(1);
}

console.log('Result: PASS');
