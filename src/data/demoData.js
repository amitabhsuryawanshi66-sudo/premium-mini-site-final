export const STUDIO_INFO = {
  name: "Obsidian Ink Studio",
  location: "Koregaon Park, Pune",
  niche: "Premium Appointment-Only Tattoo Studio",
  tagline: "Cinematic Tattoo Concierge",
};

export const CONSULTATION_OPTIONS = [
  {
    title: "Fine-Line Concept",
    description: "For delicate, precise, and minimalist designs. Best for script or micro-realism.",
    intent: "Ideal for first-timers or those seeking subtle elegance.",
    next: "Share your reference image for a specialized quote.",
    whatsappKey: "FINE_LINE",
    icon: "PenTool",
  },
  {
    title: "Realism Consult",
    description: "Deep-dive into photorealistic pieces or complex illustrative works.",
    intent: "For clients ready for high-detail, statement art.",
    next: "Discuss placement and size for a time estimate.",
    whatsappKey: "REFERENCE",
    icon: "Maximize",
  },
  {
    title: "Cover-Up Review",
    description: "Expert assessment of existing ink for potential transformation.",
    intent: "For those looking to breathe new life into old work.",
    next: "Send a clear photo of current tattoo in natural light.",
    whatsappKey: "COVER_UP",
    icon: "Crown",
  },
  {
    title: "Custom Symbolic Piece",
    description: "Bespoke storytelling through ink. We translate your narrative into art.",
    intent: "For meaningful, unique, and highly personal tattoos.",
    next: "Book a 1:1 session to conceptualize your story.",
    whatsappKey: "IDEA",
    icon: "PenTool",
  },
];

export const REASSURANCES = [
  {
    q: "Sterilization & Safety",
    a: "Hospital-grade hygiene standards. Single-use needles and premium vegan inks in a private studio environment.",
  },
  {
    q: "Custom Design Process",
    a: "We don't do 'books'. Every design is sketched specifically for your anatomy and story.",
  },
  {
    q: "Pain & Placement",
    a: "Expert guidance on anatomy-flow and numbing options to ensure a premium experience.",
  },
  {
    q: "Pricing & Investment",
    a: "Transparent project-based or hourly rates discussed upfront during consultation.",
  },
  {
    q: "Reference Policy",
    a: "We use references as inspiration, never as copies. Your tattoo will be uniquely yours.",
  },
  {
    q: "Healing & Aftercare",
    a: "Premium aftercare kits and 24/7 recovery guidance included with every major session.",
  },
];

export const TRUST_CARDS = [
  {
    value: "12+",
    label: "Years of Craft",
  },
  {
    value: "100%",
    label: "Sterile Setup",
  },
  {
    value: "Bespoke",
    label: "Storytelling",
  },
];

export const CONCEPT_WALL = [
  { label: "Fine-Line", category: "Technique", description: "Precision & Elegance" },
  { label: "Dark Illustrative", category: "Aesthetic", description: "High Contrast Depth" },
  { label: "Micro Realism", category: "Detail", description: "Sharper Than Life" },
  { label: "Ornamental", category: "Flow", description: "Anatomy Driven" },
];

// Deprecated in favor of CONSULTATION_OPTIONS but kept for initial backward compatibility if needed
export const SERVICES = CONSULTATION_OPTIONS;
export const OBJECTIONS = REASSURANCES;
export const STYLE_GALLERY = CONCEPT_WALL;
