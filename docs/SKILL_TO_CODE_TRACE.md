# Skill to Code Trace

This document tracks how skills are applied in the current codebase.

- **Skill: Emil Kowalski (Motion)**
  - Rule: Use spring physics for tactile interactions.
  - Issue: Generic transitions made the site feel static.
  - File: `src/lib/motion.js`, `src/App.jsx`
  - Decision: Applied custom spring transitions and staggered entry animations for consultation cards. Added a cinematic horizontal reveal for the hero accent panel.

- **Skill: Impeccable (Polish)**
  - Rule: Maintain a strict 8px grid and consistent typography.
  - Issue: Container was too wide for mobile; typography lacked hierarchy.
  - File: `src/styles.css`
  - Decision: Narrowed `.container` to 500px for a focused mobile read. Implemented `clamp()` for responsive H1 sizing and established a bone-white/charcoal color palette for high-end contrast.

- **Skill: UI UX Pro Max (Flow)**
  - Rule: 5-second clarity and obvious CTA hierarchy.
  - Issue: The main action was buried.
  - File: `src/App.jsx`, `src/lib/whatsapp.js`
  - Decision: Implemented a "Decision Dock" immediately after the hero for instant intent mapping. Refactored generic services into specific consultation options with clear "Next Steps."

- **Skill: Taste (Curation)**
  - Rule: Reject generic AI-template design.
  - Issue: Style gallery looked like a standard photo grid.
  - File: `src/App.jsx`, `src/data/demoData.js`
  - Decision: Replaced the image-heavy gallery with a CSS-driven "Concept Wall" that uses abstract panels and typography to convey aesthetic identity, creating a more "underground studio" feel.
