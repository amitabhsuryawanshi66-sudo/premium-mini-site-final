export const STUDIO_INFO = {
  name: "Obsidian Ink",
  location: "Koregaon Park, Pune",
  niche: "Technical Pigment Studio",
  tagline: "Anatomical Dialogue — By Appointment Only",
  heroImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1600", // Material Shimmer
  secondaryHeroImage: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800", // Detail/Geometry
};

export const INTAKE_PROTOCOL = [
  { id: "IDEA", label: "Submit Concept", message: "Hi Obsidian Ink Studio, I want to discuss a new tattoo idea." },
  { id: "AVAILABILITY", label: "Check Availability", message: "Hi Obsidian Ink Studio, I want to check appointment availability." },
  { id: "PRICE", label: "Pricing Range", message: "Hi Obsidian Ink Studio, I want to ask about the pricing range for my idea." },
  { id: "REFERENCE", label: "Share Reference", message: "Hi Obsidian Ink Studio, I want to share a reference for review." },
  { id: "SAFETY", label: "Safety Protocol", message: "Hi Obsidian Ink Studio, I have a question about your safety and sterilization protocol." },
];

export const EXHIBIT_ARCHIVE = [
  {
    title: "Series 04 / Blackwork",
    location: "Pune 2024",
    image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1200",
    type: "scream",
    meta: "Technical Study 01"
  },
  {
    title: "Detail / Geometry",
    location: "Koregaon Park",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
    type: "whisper-1",
    meta: "Macro Study"
  },
  {
    title: "Pigment Flow",
    location: "Material Study",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800",
    type: "whisper-2",
    meta: "Viscosity Check"
  },
  {
    title: "Anatomical Draft",
    location: "Series 02",
    image: "https://images.unsplash.com/photo-1590246814883-57856322335b?q=80&w=1200",
    type: "anchor",
    meta: "Placement Map"
  }
];

export const PRIVATE_LEDGER = [
  {
    index: "PROTOCOL 01",
    title: "Concept Audit",
    description: "Submission of your vision and placement. We filter for projects that align with the studio's technical trajectory. No rushed walk-ins."
  },
  {
    index: "PROTOCOL 02",
    title: "Anatomical Dialogue",
    description: "A private consultation to map intent to the unique architecture of your body. Artist-led composition with absolute restraint."
  },
  {
    index: "PROTOCOL 03",
    title: "Clinical Environment",
    description: "Hospital-grade hygiene standards. Single-use needles and premium vegan inks. Conducted in an undisturbed, private studio."
  },
  {
    index: "PROTOCOL 04",
    title: "Execution",
    description: "The ritual of pigment. Focused, permanent, and clinical. Appointment-only access ensures absolute focus on the craft."
  }
];

export const MATERIAL_PLATES = {
  ink: "https://images.unsplash.com/photo-1598112972545-843f96634320?q=80&w=800", // Dark Ink
  steel: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", // Steel/Clinical
};

// Kept for backward compatibility if needed
export const CONSULTATION_OPTIONS = [
  {
    title: "Fine-Line Concept",
    whatsappKey: "IDEA",
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

export const CONCEPT_WALL = EXHIBIT_ARCHIVE;
