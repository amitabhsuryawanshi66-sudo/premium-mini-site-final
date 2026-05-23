# Skill-to-Code Trace: Obsidian Ink Visual Pass

| Skill | Rule Extracted | Issue Found | File Changed | Decision Made |
| :--- | :--- | :--- | :--- | :--- |
| **Taste** | Reject "safe black-card UI" and "template-marketplace" designs. | Site felt like a generic tech template with floating cards on black. | `src/App.jsx`, `src/styles.css` | Pivoted to a **Component-Driven Artifact Engine**. Replaced cards with technical objects (slips, maps, plates). |
| **Impeccable** | Reject flat typography and weak hierarchy. | Brand title lacked impact; spacing was too uniform. | `src/styles.css`, `src/App.jsx` | Implemented ultra-oversized display type (`clamp(5rem, 20vw, 18rem)`) and asymmetric bipartite layouts. |
| **Emil Design** | Use tactile motion for intentionality, not just decorative fades. | Previous motion was safe fade-ins only. | `src/App.jsx`, `src/lib/motion.js` | Added spring-based parallax to `MaterialPlate` and layout-triggered `ReferenceSlip` transforms. |
| **UI UX Pro Max** | 5-second clarity: location, premium status, and immediate action. | "Appointment-only" and "Koregaon Park" were buried in small text. | `src/App.jsx` | Elevated status markers to the Hero section via the `status-plate` artifact. |
| **21st.dev** | Compare directions and implement the strongest component variation. | Generic list-based CTA dock felt "app-like" rather than "studio-like". | `src/App.jsx` | Implemented `IntakeProtocolPanel`, a clinical grid of 5 technical intents with hover artifacts. |

## Visual Changes Summary
- **Hero:** Asymmetric tripartite layout with `MaterialShield` and oversized title.
- **Consultation:** Replaced generic cards with `ArchiveStudy` units featuring sticky horizontal scroll on desktop.
- **Intake:** Converted the glass dock into a technical protocol grid with 5 WhatsApp intents.
- **Tactile Details:** Added procedural noise, registration marks, and "approved" stamps to UI elements.
