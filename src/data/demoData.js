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
    label: "Send My Tattoo Idea",
    message: "Hi Obsidian Ink, I have a custom tattoo concept I'd like to discuss. Are you open for new projects?"
  },
  {
    id: "AVAILABILITY",
    label: "Check Availability",
    message: "Hi Obsidian Ink, I'd like to check your current appointment availability for a session in Koregaon Park."
  },
  {
    id: "PRICE",
    label: "Ask Fine-Line Price",
    message: "Hi Obsidian Ink, I'm interested in a fine-line piece. Could you guide me on your pricing logic for custom work?"
  },
  {
    id: "REFERENCE",
    label: "Share Reference",
    message: "Hi Obsidian Ink, I have some reference images for a custom design. Can I share them for a technical review?"
  },
  {
    id: "COVERUP",
    label: "Ask Cover-Up Question",
    message: "Hi Obsidian Ink, I have an existing tattoo I'd like to cover or rework. Do you handle technical cover-up projects?"
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
    visualMode: "hybrid",
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
    visualMode: "hybrid",
    visualVariant: "customPlacement",
    serviceValue: "Bespoke design logic tailored to your specific anatomy.",
  },
  {
    title: "Ink & Craft",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1000",
    meta: "Process / Material Study",
    aspect: "1/1",
    visualMode: "hybrid",
    visualVariant: "inkCraft",
    serviceValue: "Premium vegan pigments and precision tool calibration.",
  }
];

export const PRIVATE_LEDGER = [
  {
    index: "PROTOCOL 01",
    title: "Reference Review",
    description: "Submit your custom vision and body placement. All references are reviewed before a quote is provided. We only accept bespoke commissions that respect the skin's architecture."
  },
  {
    index: "PROTOCOL 02",
    title: "Artist Consultation",
    description: "A private session to map intent to your body. Pricing is transparently calculated based on final design size, level of detail, and total session time required."
  },
  {
    index: "PROTOCOL 03",
    title: "Sterile Setup",
    description: "Hospital-grade sterilization. Single-use needles, premium vegan pigments, and a focused, private studio environment in Koregaon Park. No walk-ins, no rushed sessions."
  },
  {
    index: "PROTOCOL 04",
    title: "Technical Precision",
    description: "Focused artist-led execution of your custom fine-line or blackwork design. Appointment-only access ensures absolute focus on your long-term healing result."
  }
];

export const CONSULTATION_OPTIONS = INTAKE_PROTOCOL;
export const REASSURANCES = PRIVATE_LEDGER;
export const CONCEPT_WALL = EXHIBIT_ARCHIVE;
