export const STUDIO_INFO = {
  name: "Obsidian Ink",
  location: "Koregaon Park, Pune",
  niche: "Premium Appointment-Only Tattoo Studio",
  tagline: "Custom Tattoo Design • Technical Precision • Artist-Led",
  heroImage: "https://images.unsplash.com/photo-1598112972545-843f96634320?q=80&w=1600", // Process/Ink
  secondaryHeroImage: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800", // Stencil/Precision
};

export const INTAKE_PROTOCOL = [
  { id: "IDEA", label: "Share Idea", message: "Hi Obsidian Ink, I have a custom tattoo concept I'd like to discuss." },
  { id: "AVAILABILITY", label: "Check Availability", message: "Hi Obsidian Ink, I'd like to check your current appointment availability." },
  { id: "PRICE", label: "Request Quote", message: "Hi Obsidian Ink, I'd like to ask about the price range. I understand pricing depends on size, detail, and session time." },
  { id: "REFERENCE", label: "Book Consultation", message: "Hi Obsidian Ink, I'd like to book an artist-led consultation for my custom placement." },
  { id: "SAFETY", label: "Safety Query", message: "Hi Obsidian Ink, I have a question regarding your clinical sterilization and hospital-grade setup." },
];

export const EXHIBIT_ARCHIVE = [
  {
    title: "Precision Fine-Line",
    location: "Technical Study",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=1200",
    type: "scream",
    meta: "Single Needle / Anatomical Flow"
  },
  {
    title: "Blackwork Contrast",
    location: "Custom Placement",
    image: "https://images.unsplash.com/photo-1590246814883-57856322335b?q=80&w=800",
    type: "whisper-1",
    meta: "Technical Pigment / Graphite"
  },
  {
    title: "Process Archive",
    location: "Stencil Map",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
    type: "whisper-2",
    meta: "Reference to Stencil"
  },
  {
    title: "Healed Result",
    location: "Long-term Trust",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1200",
    type: "anchor",
    meta: "Pigment Retention Check"
  }
];

export const PRIVATE_LEDGER = [
  {
    index: "PROTOCOL 01",
    title: "Concept Audit",
    description: "Submit your custom vision and body placement. All references are reviewed before a quote is provided. We only accept bespoke commissions that respect the skin's architecture."
  },
  {
    index: "PROTOCOL 02",
    title: "Anatomical Dialogue",
    description: "A private consultation to map intent to your body. Pricing is transparently calculated based on final design size, level of detail, and total session time required."
  },
  {
    index: "PROTOCOL 03",
    title: "Clinical Environment",
    description: "Hospital-grade sterilization. Single-use needles, premium vegan pigments, and a focused, private studio environment in Koregaon Park. No walk-ins, no rushed sessions."
  },
  {
    index: "PROTOCOL 04",
    title: "Execution & Care",
    description: "Focused artist-led execution of your custom design. Appointment-only access ensures absolute focus on technical precision and your long-term healing result."
  }
];

export const MATERIAL_PLATES = {
  ink: "https://images.unsplash.com/photo-1598112972545-843f96634320?q=80&w=800", // Dark Ink
  steel: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", // Clinical Steel
};

export const CONSULTATION_OPTIONS = INTAKE_PROTOCOL;
export const REASSURANCES = PRIVATE_LEDGER;
export const CONCEPT_WALL = EXHIBIT_ARCHIVE;
