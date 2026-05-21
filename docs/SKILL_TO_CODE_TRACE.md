# Skill to Code Trace

This document tracks how skills were applied to transform the Obsidian Ink Studio demo into a premium, pitch-worthy cinematic experience.

- **Skill: Taste (Curation)**
  - Rule: Reject generic dark-card/template output. Reject CSS-only boxes. Reject "image background with text" as a fallback.
  - Issue: The previous UI was a 500px linear stack of safe, dark cards. Early iterations still used a single background image Hero which felt too much like a template.
  - File: `src/App.jsx`, `src/styles.css`, `src/data/demoData.js`
  - Decision: Implemented a true **Layered Editorial Collage** for the Hero, using two overlapping media containers with different grayscale/color depth. Added physical "Status" markers (ACCEPTING REQUESTS) and vertical "PREMIUM CRAFT" labels to create a sense of exclusivity and "Status" weight.

- **Skill: Emil Kowalski (Motion)**
  - Rule: Motion with intent. Tactile Physics.
  - Issue: Previous motion was purely decorative "fade-ins" that felt floaty and non-premium.
  - File: `src/lib/motion.js`, `src/App.jsx`
  - Decision: Implemented "Mechanical Precision" transitions. Switched to high-stiffness, high-damping springs (`mechanical`) for snappy, tool-like feedback. Added `whileTap` scale effects to the Control Panel and Pathway strips to make them feel like physical buttons.

- **Skill: Impeccable (Polish)**
  - Rule: Typography is UI. Hierarchy through weight and scale.
  - Issue: Heading scales were too safe; typography lacked the "premium underground" vibe.
  - File: `src/styles.css`
  - Decision: Implemented extreme size contrasts (Hero brand mark) and editorial heading scales. Added a gritty texture overlay to the entire body. Used `writing-mode: vertical-rl` for editorial tagging.

- **Skill: UI UX Pro Max (Flow)**
  - Rule: 5-second clarity and obvious CTA hierarchy.
  - Issue: The Decision Dock was a floating chip row that felt separate from the entrance experience.
  - File: `src/App.jsx`, `src/styles.css`
  - Decision: Integrated the Decision Dock as a "Concierge Control Panel" directly into the Hero flow. Maintained 5-second clarity by putting "Appointment Only", "Koregaon Park", and "Send My Tattoo Idea" in the first viewport.

- **Skill: 21st.dev (Component Variation)**
  - Rule: Reject weak defaults. Compare variations.
  - Issue: Standard card grids for consultations were too generic.
  - File: `src/App.jsx`
  - Decision: Compared a "Card Grid" (Rejected) vs. "Media Strips" (Selected). Chose the "Featured Strip + Mini Grid" layout for Consultation Pathways to create visual hierarchy and break the vertical linear stack.
