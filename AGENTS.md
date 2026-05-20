# Obsidian Ink Studio - Project Foundation

## Project Purpose
To provide a premium, mobile-first mini-website for Obsidian Ink Studio, a luxury tattoo concierge in Pune. This project serves as a clean, high-performance React foundation for future agentic development.

## Setup Commands
**Note**: Build and dependency installation is handled by Vercel.
- Local Dev (after install): `npm run dev`
- Build: `npm run build`

## Core Rules
1. **Root-Only Files**: All project source files must reside directly at the repository root. Never create nested app folders (e.g., `my-app/`).
2. **Skill-Gated Development**: Use `agent-skills/` and `docs/` as active build gates. Map every design decision to a specific skill principle.
3. **Validity**: `index.html`, `src/main.jsx`, and `src/App.jsx` must always be valid and renderable.
4. **No Broken JSX**: Never commit code with empty returns or syntax errors.
5. **No MCPs**: MCP tools (Stitch, Context7) are not to be used for this foundation. Stitch may be used sparingly later for visual direction only.
6. **Vercel Deploy**: The project is configured to deploy from the repository root.

## Active Skills
- Emil Kowalski (Motion)
- Impeccable (Polish)
- Taste (Curation)
- UI UX Pro Max (Flow)
- 21st.dev (Component Variation)

Refer to `docs/` for detailed workflow protocols and design criteria.
