export const STUDIO_INFO = {
  name: "Obsidian Ink Studio",
  location: "Koregaon Park, Pune",
  niche: "Premium Appointment-Only Tattoo Studio",
  tagline: "Cinematic Tattoo Concierge",
  heroImage: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop",
};

export const CONSULTATION_OPTIONS = [
  {
    title: "Fine-Line Concept",
    description: "For delicate, precise, and minimalist designs. Best for script or micro-realism.",
    forWho: "Ideal for first-timers or those seeking subtle elegance.",
    whatToSend: "Share your reference image for a specialized quote.",
    whatHappensNext: "Direct quote & placement guide via WhatsApp.",
    whatsappKey: "FINE_LINE",
    icon: "PenTool",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Realism Consult",
    description: "Deep-dive into photorealistic pieces or complex illustrative works.",
    forWho: "For clients ready for high-detail, statement art.",
    whatToSend: "Discuss placement and size for a time estimate.",
    whatHappensNext: "1:1 technical review & booking slot offer.",
    whatsappKey: "REFERENCE",
    icon: "Maximize",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cover-Up Review",
    description: "Expert assessment of existing ink for potential transformation.",
    forWho: "For those looking to breathe new life into old work.",
    whatToSend: "Send a clear photo of current tattoo in natural light.",
    whatHappensNext: "Cover-up feasibility assessment & design plan.",
    whatsappKey: "COVER_UP",
    icon: "Crown",
    image: "https://images.unsplash.com/photo-1590210315325-d41fd4607831?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Custom Symbolic Piece",
    description: "Bespoke storytelling through ink. We translate your narrative into art.",
    forWho: "For meaningful, unique, and highly personal tattoos.",
    whatToSend: "Book a 1:1 session to conceptualize your story.",
    whatHappensNext: "Concept sketch session & artist matching.",
    whatsappKey: "IDEA",
    icon: "PenTool",
    image: "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=800&auto=format&fit=crop",
  },
];

export const REASSURANCES = [
  {
    q: "Sterilization & Safety",
    a: "Hospital-grade hygiene standards. Single-use needles and premium vegan inks in a private studio environment.",
    icon: "ShieldCheck",
  },
  {
    q: "Custom Design Process",
    a: "We don't do 'books'. Every design is sketched specifically for your anatomy and story.",
    icon: "PenTool",
  },
  {
    q: "Pain & Placement",
    a: "Expert guidance on anatomy-flow and numbing options to ensure a premium experience.",
    icon: "Activity",
  },
  {
    q: "Pricing & Investment",
    a: "Transparent project-based or hourly rates discussed upfront during consultation.",
    icon: "Zap",
  },
  {
    q: "Reference Policy",
    a: "We use references as inspiration, never as copies. Your tattoo will be uniquely yours.",
    icon: "Search",
  },
  {
    q: "Healing & Aftercare",
    a: "Premium aftercare kits and 24/7 recovery guidance included with every major session.",
    icon: "Heart",
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
  {
    label: "Fine-Line",
    category: "Technique",
    description: "Precision & Elegance",
    placementNote: "Inner Forearm / Collarbone",
    styleTags: ["Minimalist", "Single Needle"],
    mood: "Sophisticated",
    detail: "0.25mm Needle Depth",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=600&auto=format&fit=crop"
  },
  {
    label: "Dark Illustrative",
    category: "Aesthetic",
    description: "High Contrast Depth",
    placementNote: "Outer Thigh / Full Back",
    styleTags: ["Chiaroscuro", "Graphic"],
    mood: "Ethereal Noir",
    detail: "Custom Ink Blends",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=600&auto=format&fit=crop"
  },
  {
    label: "Micro Realism",
    category: "Detail",
    description: "Sharper Than Life",
    placementNote: "Ankle / Wrist",
    styleTags: ["Hyper-Detail", "Portrait"],
    mood: "Scientific",
    detail: "400% Zoom Precision",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=600&auto=format&fit=crop"
  },
  {
    label: "Ornamental",
    category: "Flow",
    description: "Anatomy Driven",
    placementNote: "Sternum / Spine",
    styleTags: ["Mandala", "Geometric"],
    mood: "Symmetric",
    detail: "Bio-Metric Flow",
    image: "https://images.unsplash.com/photo-1590210315325-d41fd4607831?q=80&w=600&auto=format&fit=crop"
  },
];

// Deprecated in favor of CONSULTATION_OPTIONS but kept for initial backward compatibility if needed
export const SERVICES = CONSULTATION_OPTIONS;
export const OBJECTIONS = REASSURANCES;
export const STYLE_GALLERY = CONCEPT_WALL;
