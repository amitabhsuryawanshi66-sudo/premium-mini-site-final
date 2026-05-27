import { EXHIBIT_ARCHIVE, INTAKE_PROTOCOL, PRIVATE_LEDGER, STUDIO_INFO } from './demoData.js';

export const DEFAULT_SITE_ID = 'obsidian-ink';

export const OBSIDIAN_SITE_PRESET = {
  id: DEFAULT_SITE_ID,
  label: 'Obsidian Ink Studio',
  contractFile: 'obsidian-ink.json',
  studioInfo: STUDIO_INFO,
  exhibitArchive: EXHIBIT_ARCHIVE,
  privateLedger: PRIVATE_LEDGER,
  intakeProtocol: INTAKE_PROTOCOL,
  copy: {
    nav: {
      logo: 'Obsidian',
      meta: 'Pune — Studio 07',
    },
    hero: {
      topNote: '[ ARTIST-LED / PRIVATE STUDIO / 18.53°N 73.89°E ]',
      referenceSlip: {
        index: '00',
        label: 'STATION_INIT',
        variant: 'header',
      },
      materialAlt: 'Premium Tattoo Process',
      materialVariant: 'inkCraft',
      materialMode: 'hybrid',
      shieldAnnotation: '[ ARCHIVE_REF_01 ]',
      placementArea: 'PRIMARY_DESIRE',
      desktopTitle: 'Obsidian',
      mobileTitleParts: ['OBSID', 'IAN'],
      mobileTitleSuffix: 'INK STUDIO',
      statusItems: [
        {
          label: 'Location',
          value: 'Koregaon Park, Pune',
        },
        {
          label: 'Access',
          value: 'Premium Appointment-Only',
        },
      ],
      archiveLabel: 'Archive: Studio 07 / Pune',
      protocolStatus: 'PROTOCOL: ENTRY_VALIDATED',
    },
    stance: {
      headingStart: 'Custom design.',
      headingAccent: 'Technical Precision',
      headingEnd: 'No rushed walk-ins.',
      description:
        "Obsidian Ink is a premium tattoo studio in Koregaon Park for style-conscious collectors. Every project begins with a mandatory reference review to ensure technical excellence and custom alignment.",
      marks: [
        {
          label: 'Pricing Logic',
          value: 'Size / Detail / Time',
        },
        {
          label: 'Clinic Standard',
          value: 'Hospital-Grade Sterile',
        },
      ],
    },
    exhibit: {
      eyebrow: '[ Exhibit 02 — Portfolio / Process Archive ]',
    },
    ledger: {
      eyebrow: '[ Studio Trust & Safety Protocol ]',
    },
    intake: {
      eyebrow: '[ Intake System V.07 ]',
      titleLines: ['Initiate', 'Dialogue.'],
      referenceSlip: {
        index: '05',
        label: 'INTAKE_AUTH',
        variant: 'stamp',
      },
    },
    threshold: {
      headingLines: ['Secure', 'Session.'],
      ctaLabel: 'Start a private concept review',
      footerLocation: 'Pune / Koregaon Park',
      footerNote: 'Technical Dialogue Required',
    },
    footer: {
      text: 'OBSIDIAN INK STUDIO • KOREGAON PARK • PUNE',
    },
  },
};

export const SITE_PRESETS = [OBSIDIAN_SITE_PRESET];

export const SITE_PRESETS_BY_ID = SITE_PRESETS.reduce((presets, preset) => {
  presets[preset.id] = preset;
  return presets;
}, {});

export const getSitePreset = (siteId = DEFAULT_SITE_ID) => SITE_PRESETS_BY_ID[siteId] ?? SITE_PRESETS_BY_ID[DEFAULT_SITE_ID];

export const getSelectedSitePreset = (search = '') => {
  const params = new URLSearchParams(search);
  return getSitePreset(params.get('site') || DEFAULT_SITE_ID);
};
