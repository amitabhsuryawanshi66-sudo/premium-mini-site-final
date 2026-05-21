export const STUDIO_INFO = {
  name: "Obsidian Ink",
  location: "Koregaon Park, Pune",
  niche: "Technical Pigment Studio",
  tagline: "Anatomical Dialogue — By Appointment Only",
  heroImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1600", // Material Shimmer
  secondaryHeroImage: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800", // Detail/Geometry
};

export const EXHIBIT_ARCHIVE = [
  {
    title: "Series 04 / Blackwork",
    location: "Pune 2024",
    image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1200",
    type: "scream"
  },
  {
    title: "Detail / Geometry",
    location: "Koregaon Park",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
    type: "whisper-1"
  },
  {
    title: "Pigment Flow",
    location: "Material Study",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800",
    type: "whisper-2"
  },
  {
    title: "Anatomical Draft",
    location: "Series 02",
    image: "https://images.unsplash.com/photo-1590246814883-57856322335b?q=80&w=1200",
    type: "anchor"
  }
];

export const PRIVATE_LEDGER = [
  {
    index: "Requirement 01",
    title: "Concept Audit",
    description: "Submission of your vision and placement. We filter for projects that align with the studio's technical trajectory and aesthetic stance."
  },
  {
    index: "Requirement 02",
    title: "Anatomical Dialogue",
    description: "A private consultation to map intent to the unique architecture of your body. No templates. Only bespoke composition."
  },
  {
    index: "Requirement 03",
    title: "Execution",
    description: "The ritual of pigment. Conducted in a clinical, minimal environment in Koregaon Park. Focused, undisturbed, and permanent."
  }
];

// Kept for backward compatibility if needed, but primary focus is on EXHIBIT_ARCHIVE/PRIVATE_LEDGER
export const CONSULTATION_OPTIONS = [
  {
    title: "Fine-Line Concept",
    whatsappKey: "FINE_LINE",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=800",
  },
];

export const REASSURANCES = [
  {
    q: "Sterilization & Safety",
    a: "Hospital-grade hygiene standards. Single-use needles and premium vegan inks in a private studio environment.",
    icon: "ShieldCheck",
    label: "Safe",
  },
];

export const CONCEPT_WALL = EXHIBIT_ARCHIVE; // Mapping for compatibility
