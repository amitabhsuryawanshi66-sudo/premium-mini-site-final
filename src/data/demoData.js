export const STUDIO_INFO = {
  name: "Obsidian Ink",
  location: "Koregaon Park, Pune",
  niche: "Premium Appointment-Only Tattoo Studio",
  tagline: "Custom Tattoo Design • Fine-Line • Blackwork • Artist-Led",
  heroImage: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1600", // Detail/Result
  secondaryHeroImage: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800", // Studio/Tools
};

export const INTAKE_PROTOCOL = [
  {
    id: "IDEA",
    label: "Start a Concept Review",
    message: "Hi Obsidian Ink, I would like to discuss a custom tattoo concept and understand the next steps for a consultation."
  },
  {
    id: "AVAILABILITY",
    label: "Check Studio Dates",
    message: "Hi Obsidian Ink, I would like to check available consultation and session dates in Koregaon Park."
  },
  {
    id: "PRICE",
    label: "Discuss Pricing",
    message: "Hi Obsidian Ink, I am interested in a custom piece and would like to understand how you estimate size, detail, and session time."
  },
  {
    id: "REFERENCE",
    label: "Share Reference",
    message: "Hi Obsidian Ink, I have reference images and placement notes for a custom design. Can I share them for review?"
  },
  {
    id: "COVERUP",
    label: "Ask About Rework",
    message: "Hi Obsidian Ink, I have an existing tattoo I may want to cover or rework. Can I share photos for an honest review?"
  },
];

export const EXHIBIT_ARCHIVE = [
  {
    title: "Precision Fine-Line",
    image: "https://images.unsplash.com/photo-1620336655055-088d06e76fd0?q=80&w=1000",
    meta: "Result / Dermal Precision",
    aspect: "4/5",
    visualMode: "hybrid",
    visualVariant: "fineLine",
    serviceValue: "Single-needle excellence for delicate anatomical flow.",
  },
  {
    title: "Technical Stencil",
    image: "https://images.unsplash.com/photo-1562967914-6cbb04827d0a?q=80&w=1000",
    meta: "Process / Blueprinting",
    aspect: "1/1",
    visualMode: "artifact",
    visualVariant: "stencil",
    serviceValue: "Rigorous placement planning and reference-to-skin transfer.",
  },
  {
    title: "Blackwork Contrast",
    image: "https://images.unsplash.com/photo-1590201135242-26168e826725?q=80&w=1000",
    meta: "Result / Pigment Depth",
    aspect: "3/4",
    visualMode: "hybrid",
    visualVariant: "blackwork",
    serviceValue: "High-saturation ink work with stark value contrast.",
  },
  {
    title: "Clinical Environment",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000",
    meta: "Trust / Studio Standard",
    aspect: "16/9",
    visualMode: "hybrid",
    visualVariant: "clinicalTattoo",
    serviceValue: "Hospital-grade sterilization and a private focused environment.",
  },
  {
    title: "Custom Placement",
    image: "https://images.unsplash.com/photo-1597852074816-d933c4d2b988?q=80&w=1000",
    meta: "Result / Body Architecture",
    aspect: "4/5",
    visualMode: "artifact",
    visualVariant: "customPlacement",
    serviceValue: "Bespoke design logic tailored to your specific anatomy.",
  },
  {
    title: "Ink & Craft",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1000",
    meta: "Process / Material Study",
    aspect: "1/1",
    visualMode: "artifact",
    visualVariant: "inkCraft",
    serviceValue: "Premium vegan pigments and precision tool calibration.",
  }
];

export const PRIVATE_LEDGER = [
  {
    index: "STEP 01",
    title: "Reference Review",
    description: "Share the idea, references, placement, and approximate size. The studio reviews fit, detail, and healing considerations before suggesting a direction."
  },
  {
    index: "STEP 02",
    title: "Artist Consultation",
    description: "The artist maps the design intent to your body and explains what will affect price, session time, and final detail."
  },
  {
    index: "STEP 03",
    title: "Sterile Setup",
    description: "Single-use needles, careful station prep, quality pigments, and a quiet appointment setting keep the session focused and hygienic."
  },
  {
    index: "STEP 04",
    title: "Technical Precision",
    description: "Fine-line and blackwork pieces are executed with attention to line weight, contrast, placement, and how the tattoo will age."
  }
];

export const CONSULTATION_OPTIONS = INTAKE_PROTOCOL;
export const REASSURANCES = PRIVATE_LEDGER;
export const CONCEPT_WALL = EXHIBIT_ARCHIVE;
