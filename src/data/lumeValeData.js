export const LUME_STUDIO_INFO = {
  name: "Lume Vale Skin Atelier",
  location: "Pune / Mumbai",
  niche: "Private Skin, Hair, and Aesthetic Consultation Atelier",
  tagline: "Precision skin plans, private consultations, realistic transformation",
  heroImage: "",
  secondaryHeroImage: "",
};

export const LUME_TRUST_CUES = [
  {
    title: "Clinician-led review",
    detail: "Every plan begins with skin history, current routine, triggers, and a realistic treatment window.",
  },
  {
    title: "Privacy-first consults",
    detail: "No crowded waiting room energy. Your concern, images, and plan stay discreet from first message.",
  },
  {
    title: "Sterile protocols",
    detail: "Treatment surfaces, device prep, and aftercare instructions are handled with medical-grade discipline.",
  },
  {
    title: "Measured outcomes",
    detail: "The clinic frames improvement in stages, not instant-perfect promises or over-filtered before-after claims.",
  },
];

export const LUME_TREATMENT_INTENTS = [
  {
    id: "GLOW",
    label: "Glow reset",
    title: "Dullness, texture, event-ready radiance",
    detail: "A measured path for hydrafacial-style polishing, barrier support, and calm visible luminosity.",
    message:
      "Hi Lume Vale, I would like a private skin consultation for glow, dullness, texture, or event-ready skin.",
  },
  {
    id: "ACNE",
    label: "Acne and marks",
    title: "Active breakouts, scarring, redness",
    detail: "A careful plan for flare control, mark reduction, and skin confidence without harsh over-treatment.",
    message:
      "Hi Lume Vale, I would like a private consultation for acne, acne marks, scarring, or redness.",
  },
  {
    id: "PIGMENT",
    label: "Pigmentation",
    title: "Melasma, tanning, uneven tone",
    detail: "Layered treatment planning for tone correction, sun discipline, and realistic maintenance.",
    message:
      "Hi Lume Vale, I would like a private consultation for pigmentation, melasma, tanning, or uneven skin tone.",
  },
  {
    id: "HAIR",
    label: "Hair revival",
    title: "Density, scalp health, early thinning",
    detail: "Scalp-first diagnosis with options for strengthening, recovery, and visible density support.",
    message:
      "Hi Lume Vale, I would like a private consultation for scalp health, hair fall, thinning, or density support.",
  },
  {
    id: "BRIDAL",
    label: "Bridal prep",
    title: "Six to twelve week skin calendar",
    detail: "A calm treatment sequence that protects the barrier while preparing face, neck, and hairline glow.",
    message:
      "Hi Lume Vale, I would like a private consultation for bridal or event skin preparation.",
  },
  {
    id: "SUBTLE",
    label: "Subtle injectables",
    title: "Refinement without overdone work",
    detail: "Assessment-first aesthetic guidance for softening, hydration, and proportion-conscious refinement.",
    message:
      "Hi Lume Vale, I would like a private consultation for subtle aesthetic refinement or injectables guidance.",
  },
];

export const LUME_JOURNEY = [
  {
    index: "01",
    title: "Scan",
    description: "Share your concern, routine, treatment history, and lighting-safe reference photos for clinician review.",
  },
  {
    index: "02",
    title: "Plan",
    description: "Receive a phased recommendation with expected sessions, recovery notes, and what not to do before treatment.",
  },
  {
    index: "03",
    title: "Treat",
    description: "Appointments stay private, punctual, and focused on the agreed concern rather than upsell-heavy menus.",
  },
  {
    index: "04",
    title: "Maintain",
    description: "Aftercare, follow-ups, and home routine edits protect the result once the appointment is over.",
  },
];

export const LUME_TRANSFORMATION_PROOF = [
  {
    title: "Pigment discipline",
    goal: "Uneven tone and tanning after travel",
    timeline: "8 week plan",
    cue: "Barrier repair, light peels, strict SPF rhythm",
  },
  {
    title: "Texture calm",
    goal: "Congestion, dullness, early acne marks",
    timeline: "3 visit sequence",
    cue: "Pore cleanup, redness control, routine edit",
  },
  {
    title: "Density support",
    goal: "Visible hair fall and scalp imbalance",
    timeline: "12 week review",
    cue: "Scalp check, nutrition screen, clinic protocol",
  },
];

export const LUME_EXHIBIT_ARCHIVE = [
  {
    title: "Skin-Light Diagnostic",
    image: "",
    meta: "Hero / Layered Skin Light",
    aspect: "4/5",
    visualMode: "artifact",
    visualVariant: "lumeSkinLight",
    serviceValue: "Clinical clarity shown through translucent skin-layer light, not generic beauty ambience.",
  },
  {
    title: "Lume Reveal",
    image: "",
    meta: "Interaction / Realistic Improvement",
    aspect: "16/9",
    visualMode: "artifact",
    visualVariant: "lumeReveal",
    serviceValue: "A privacy-safe reveal that explains gradual tone, texture, and glow improvement.",
  },
  {
    title: "Treatment Intent Map",
    image: "",
    meta: "Treatment / Concern Routing",
    aspect: "1/1",
    visualMode: "artifact",
    visualVariant: "lumeIntentMap",
    serviceValue: "Treatment options grouped by client concern so inquiry feels specific and safe.",
  },
  {
    title: "Private Consultation Path",
    image: "",
    meta: "Process / Scan Plan Treat Maintain",
    aspect: "3/4",
    visualMode: "artifact",
    visualVariant: "lumeJourney",
    serviceValue: "A calm consultation journey that makes privacy, safety, and aftercare visible.",
  },
  {
    title: "Aftercare Lattice",
    image: "",
    meta: "Proof / Maintenance",
    aspect: "1/1",
    visualMode: "artifact",
    visualVariant: "lumeAftercare",
    serviceValue: "Transformation proof is grounded in timeline, aftercare, and maintenance discipline.",
  },
];

export const LUME_INTAKE_PROTOCOL = LUME_TREATMENT_INTENTS.map((intent) => ({
  id: intent.id,
  label: intent.label,
  message: intent.message,
}));

export const LUME_PRIVATE_LEDGER = LUME_JOURNEY.map((step) => ({
  index: `Step ${step.index}`,
  title: step.title,
  description: step.description,
}));
