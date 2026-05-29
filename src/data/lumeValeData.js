export const LUME_VALE_IMAGES = {
  hero: "generated-canvas:lume-light-sheet",
  clinicRoom: "generated-canvas:lume-clinic-room",
  scanDevice: "generated-canvas:lume-parameter-review",
  treatmentDevice: "generated-canvas:lume-handset-calibration",
  skinMacro: "generated-canvas:lume-macro-texture",
};

export const LUME_VALE_STUDIO_INFO = {
  name: "Lume Vale",
  location: "Pune",
  niche: "Private Diagnostic Skin Atelier",
  tagline: "Skin light analysis, clinician-led planning, and quiet maintenance.",
  heroImage: LUME_VALE_IMAGES.hero,
  secondaryHeroImage: LUME_VALE_IMAGES.clinicRoom,
};

export const LUME_VALE_EXHIBIT_ARCHIVE = [
  {
    title: "Light-Sheet Intake",
    image: LUME_VALE_IMAGES.hero,
    meta: "Diagnostic Light / Privacy Safe",
    aspect: "4/5",
    visualMode: "photo",
    visualVariant: "lumeLightSheet",
    serviceValue: "A privacy-safe light therapy metaphor for beginning with observation, not promises.",
  },
  {
    title: "Sterile Room Readiness",
    image: LUME_VALE_IMAGES.clinicRoom,
    meta: "Room / Hygiene Standard",
    aspect: "16/9",
    visualMode: "photo",
    visualVariant: "lumeClinicRoom",
    serviceValue: "A calm clinical room signal that consultation, treatment, and aftercare happen in a controlled setting.",
  },
  {
    title: "Device Parameter Review",
    image: LUME_VALE_IMAGES.scanDevice,
    meta: "Planning / Settings",
    aspect: "3/4",
    visualMode: "photo",
    visualVariant: "lumeParameterReview",
    serviceValue: "Treatment settings are reviewed by concern, sensitivity, downtime, and maintenance needs before booking.",
  },
  {
    title: "Treatment Handset Calibration",
    image: LUME_VALE_IMAGES.treatmentDevice,
    meta: "Tool / Calibration",
    aspect: "4/5",
    visualMode: "photo",
    visualVariant: "lumeHandsetCalibration",
    serviceValue: "Handset-led treatments are framed as measured procedures, not instant transformations.",
  },
  {
    title: "Macro Texture Map",
    image: LUME_VALE_IMAGES.skinMacro,
    meta: "Skin / Texture",
    aspect: "1/1",
    visualMode: "photo",
    visualVariant: "lumeTextureMap",
    serviceValue: "Real skin texture is treated as planning evidence so expectations stay specific and realistic.",
  },
];

export const LUME_VALE_CONCERNS = [
  {
    id: "glow",
    label: "Glow",
    short: "Dullness, dehydration, event polish",
    scan: "Barrier, light reflection, sensitivity",
    plan: "Hydration facial, gentle resurfacing, LED support",
    timeline: "2 to 4 weeks",
    prep: "Pause harsh actives 72 hours before review.",
    message:
      "Hi Lume Vale, I want a private consult for glow and dullness. Please help me understand the safest plan and timeline.",
  },
  {
    id: "acne-marks",
    label: "Acne marks",
    short: "Post-acne marks, texture, uneven tone",
    scan: "PIH depth, active breakout status, texture",
    plan: "Calm-first protocol, pigment support, measured resurfacing",
    timeline: "6 to 12 weeks",
    prep: "Share current actives and recent breakouts before booking.",
    message:
      "Hi Lume Vale, I want a private consult for acne marks and texture. I can share my current routine and photos for review.",
  },
  {
    id: "pigmentation",
    label: "Pigmentation",
    short: "Melasma tendency, sun marks, patchy tone",
    scan: "Trigger history, sunscreen use, depth indicators",
    plan: "Stabilize, brighten, protect, then maintain",
    timeline: "8 to 16 weeks",
    prep: "Bring product list and any recent peel or laser history.",
    message:
      "Hi Lume Vale, I want a private consult for pigmentation. I am looking for a realistic treatment and maintenance plan.",
  },
  {
    id: "hair-revival",
    label: "Hair revival",
    short: "Thinning, shedding, scalp support",
    scan: "Shedding pattern, scalp condition, history",
    plan: "Scalp review, support protocol, maintenance cadence",
    timeline: "3 to 6 months",
    prep: "Note recent bloodwork, stress, medication, or shedding changes.",
    message:
      "Hi Lume Vale, I want a private consult for hair revival and scalp support. Please guide me on the review process.",
  },
  {
    id: "bridal-prep",
    label: "Bridal prep",
    short: "Calendar-safe skin planning",
    scan: "Event date, sensitivity, existing routine",
    plan: "Low-risk glow, texture, and aftercare calendar",
    timeline: "4 to 20 weeks",
    prep: "Share the event date and avoid last-minute experiments.",
    message:
      "Hi Lume Vale, I want a private bridal skin planning consult. My event date is coming up and I need a safe timeline.",
  },
  {
    id: "subtle-refinement",
    label: "Subtle refinement",
    short: "Injectables-lite review, soft correction",
    scan: "Expression, symmetry, recovery window",
    plan: "Clinician-led suitability review and conservative options",
    timeline: "Consult first",
    prep: "Share medical history and desired level of subtlety.",
    message:
      "Hi Lume Vale, I want a private consult for subtle refinement. I want conservative, clinician-led guidance.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    short: "Let the clinician map the first step",
    scan: "Skin history, concern priority, tolerance",
    plan: "Diagnostic consult before any treatment suggestion",
    timeline: "Single review first",
    prep: "Send bare-skin photos in natural light if comfortable.",
    message:
      "Hi Lume Vale, I am not sure which treatment I need. I would like a private diagnostic consult before deciding.",
  },
];

export const LUME_VALE_PRIVATE_LEDGER = [
  {
    index: "Scan",
    title: "Private Diagnostic Review",
    description:
      "The first appointment maps concern, sensitivity, routine, medical context, and tolerance for downtime before a treatment is suggested.",
  },
  {
    index: "Plan",
    title: "Clinician-Led Treatment Map",
    description:
      "A plan is built around indication, sequence, prep, recovery, and maintenance instead of trend-led procedures or miracle timelines.",
  },
  {
    index: "Treat",
    title: "Sterile, Measured Sessions",
    description:
      "Treatment happens with controlled parameters, skin-response checks, and clear aftercare so each visit has a reason.",
  },
  {
    index: "Maintain",
    title: "Quiet Follow-Through",
    description:
      "Outcomes are framed through intervals, aftercare, and routine correction. Progress is reviewed privately and adjusted calmly.",
  },
];

export const LUME_VALE_INTAKE_PROTOCOL = LUME_VALE_CONCERNS.map((concern) => ({
  id: concern.id.toUpperCase().replaceAll("-", "_"),
  label: concern.label,
  message: concern.message,
}));
