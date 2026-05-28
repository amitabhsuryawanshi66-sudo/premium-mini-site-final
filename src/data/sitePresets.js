import { EXHIBIT_ARCHIVE, INTAKE_PROTOCOL, PRIVATE_LEDGER, STUDIO_INFO } from './demoData.js';
import {
  VELOUR_EXHIBIT_ARCHIVE,
  VELOUR_INTAKE_PROTOCOL,
  VELOUR_PRIVATE_LEDGER,
  VELOUR_STUDIO_INFO,
} from './velourData.js';

export const DEFAULT_SITE_ID = 'obsidian-ink';

export const OBSIDIAN_SITE_PRESET = {
  id: DEFAULT_SITE_ID,
  label: 'Obsidian Ink Studio',
  contractFile: 'obsidian-ink.json',
  referenceAuthLabel: 'STUDIO_REVIEW',
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
        label: 'STUDIO_NOTE',
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
      inquiryLabel: 'Start a WhatsApp concept review',
      archiveLabel: 'Archive: Studio 07 / Pune',
      protocolStatus: 'Consultation path ready',
    },
    stance: {
      headingStart: 'Custom design.',
      headingAccent: 'Technical Precision',
      headingEnd: 'No rushed walk-ins.',
      description:
        "Obsidian Ink is a private tattoo studio in Koregaon Park for custom fine-line and blackwork projects. Every enquiry begins with a reference review, placement discussion, and clear session estimate.",
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
      eyebrow: '[ Studio Trust & Safety ]',
    },
    intake: {
      eyebrow: '[ Client Intake ]',
      titleLines: ['Initiate', 'Dialogue.'],
      referenceSlip: {
        index: '05',
        label: 'CONSULT_NOTE',
        variant: 'stamp',
      },
    },
    threshold: {
      headingLines: ['Secure', 'Session.'],
      ctaLabel: 'Start a WhatsApp concept review',
      footerLocation: 'Pune / Koregaon Park',
      footerNote: 'Reference review before quote',
    },
    footer: {
      text: 'OBSIDIAN INK STUDIO • KOREGAON PARK • PUNE',
    },
  },
};

export const VELOUR_HOUSE_SITE_PRESET = {
  id: 'velour-house',
  label: 'Velour House',
  contractFile: 'velour-house.json',
  referenceAuthLabel: 'Studio desk',
  studioInfo: VELOUR_STUDIO_INFO,
  exhibitArchive: VELOUR_EXHIBIT_ARCHIVE,
  privateLedger: VELOUR_PRIVATE_LEDGER,
  intakeProtocol: VELOUR_INTAKE_PROTOCOL,
  copy: {
    nav: {
      logo: 'Velour House',
      meta: 'Mumbai / Interior Architecture',
    },
    hero: {
      topNote: 'Interior architecture shaped through light, material, circulation, and lived routines.',
      referenceSlip: {
        index: '00',
        label: 'Material note',
        variant: 'header',
        stampLabel: 'sampled',
      },
      materialAlt: 'Architectural material and light study',
      materialVariant: 'spatialLight',
      materialMode: 'artifact',
      shieldAnnotation: 'Daylight and surface study',
      placementArea: 'room sequence',
      desktopTitle: 'Velour House',
      mobileTitleParts: ['Velour', 'House'],
      mobileTitleSuffix: 'Interior Architecture',
      statusItems: [
        {
          label: 'Discipline',
          value: 'Interior Architecture',
        },
        {
          label: 'First Step',
          value: 'Private Project Briefing',
        },
      ],
      inquiryLabel: 'Request a project briefing',
      archiveLabel: 'Material studies and spatial plans',
      taglineLabel: 'Interior architecture, material direction, and light planning',
      protocolStatus: 'Share site notes, rooms, and constraints',
    },
    stance: {
      headingStart: 'Rooms edited for light.',
      headingAccent: 'Materials held with restraint',
      headingEnd: 'Plans shaped around daily use.',
      description:
        'Velour House is an interior architecture studio for residences, studios, and refined hospitality spaces. Each brief begins with light, proportion, circulation, material direction, and the way the room will be lived in.',
      marks: [
        {
          label: 'Study Lens',
          value: 'Light / Plan / Material',
        },
        {
          label: 'Studio Output',
          value: 'Brief / Drawings / Site Direction',
        },
      ],
    },
    exhibit: {
      eyebrow: 'Material studies, plans, and light plates',
    },
    ledger: {
      eyebrow: 'Studio method and detail',
    },
    intake: {
      eyebrow: 'Project intake',
      titleLines: ['Project', 'Brief.'],
      referenceSlip: {
        index: '05',
        label: 'Brief note',
        variant: 'stamp',
        stampLabel: 'received',
      },
    },
    threshold: {
      headingLines: ['Shape the', 'Room.'],
      ctaLabel: 'Request a project briefing',
      footerLocation: 'Mumbai / Private Studio',
      footerNote: 'Site notes before proposal',
    },
    footer: {
      text: 'Velour House / Interior Architecture / Mumbai',
    },
  },
};

export const SITE_PRESETS = [OBSIDIAN_SITE_PRESET, VELOUR_HOUSE_SITE_PRESET];

export const SITE_PRESETS_BY_ID = SITE_PRESETS.reduce((presets, preset) => {
  presets[preset.id] = preset;
  return presets;
}, {});

export const getSitePreset = (siteId = DEFAULT_SITE_ID) => SITE_PRESETS_BY_ID[siteId] ?? SITE_PRESETS_BY_ID[DEFAULT_SITE_ID];

export const getSelectedSitePreset = (search = '') => {
  const params = new URLSearchParams(search);
  return getSitePreset(params.get('site') || DEFAULT_SITE_ID);
};
