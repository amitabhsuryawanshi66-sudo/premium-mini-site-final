# Premium Mini-Site Council Harness

## Project Goal
This repo is a repeatable workflow/tool for generating premium, mobile-first mini-sites with disciplined AI assistance. The current demo site is Obsidian Ink Studio, a luxury tattoo concierge in Pune.

## Operating Rules
1. **Council before implementation**: Before non-trivial UI, copy, asset, motion, or conversion work, run the council process in `docs/COUNCIL_WORKFLOW.md`.
2. **One builder after decision**: Reviewers decide scope and gates; one builder implements the approved change. Do not let multiple agents independently rewrite the same surface.
3. **No broad redesigns**: Preserve the existing site direction unless the user explicitly requests a redesign.
4. **No merge without proof**: A PR is not ready until `npm run build` passes and visual proof covers the required desktop and mobile states in `docs/QA_PLAYBOOK.md`.
5. **No random stock imagery**: Assets must follow `docs/ASSET_STRATEGY.md`; random keyword stock is a rejection.
6. **Preserve mobile and desktop separately**: Mobile fixes must not degrade desktop, and desktop polish must not create mobile overflow or clipping.
7. **Prompt hygiene and small PRs**: Keep branch, task, constraints, acceptance criteria, and exclusions explicit. Avoid broad "make it better" prompts. See `docs/PROMPT_PROTOCOL.md`.
8. **Use real installed skills/resources**: For visual, motion, UX, browser proof, and PR work, route through active Codex skills and plugins listed below. Do not treat repo-local `agent-skills/*` files as installed Codex skills.

## Active Skill And Resource Routing
- Visual direction and anti-template checks: `.agents/skills/design-taste-frontend/`.
- Motion and interaction judgment: `.agents/skills/emil-design-eng/`.
- Frontend critique, shaping, polish, and UX writing: `.agents/skills/impeccable/`.
- UI/UX pattern lookup and design-system search: `.codex/skills/ui-ux-pro-max/` using the bundled Python runtime when plain `python` is unavailable.
- Browser reference and visual proof: Browser plugin, especially for 21st.dev, MotionSites, localhost, screenshots, and responsive checks.
- PR, issue, branch, and repository operations: GitHub plugin.
- Repo-local `agent-skills/*`: legacy reviewer guidance and historical approximations only. They are not active installed Codex skills and must not be cited as operational skill usage.

## Required References
- Product context: `PRODUCT.md`
- Design context: `DESIGN.md`
- Council workflow: `docs/COUNCIL_WORKFLOW.md`
- Decision Council: `docs/DECISION_COUNCIL.md`
- Real design skills install plan: `docs/REAL_DESIGN_SKILLS_INSTALL_PLAN.md`
- Prompt protocol: `docs/PROMPT_PROTOCOL.md`
- QA playbook: `docs/QA_PLAYBOOK.md`
- Codex local environment: `docs/CODEX_LOCAL_ENV.md`
- Asset strategy: `docs/ASSET_STRATEGY.md`
- Failure log: `docs/FAILURE_LOG.md`
- Skill usage protocol: `docs/SKILL_USAGE_PROTOCOL.md`
- Installed skills manifest: `docs/INSTALLED_SKILLS_MANIFEST.md`
- Reference capture protocol: `docs/REFERENCE_CAPTURE_PROTOCOL.md`
- Capability test gates: `docs/CAPABILITY_TEST_GATES.md`
- Legacy reviewer guidance: `agent-skills/*.md`

## Existing Foundation Rules
- Keep the project at the repository root; do not create nested app folders. Preserve the existing `src/` structure.
- `index.html`, `src/main.jsx`, and `src/App.jsx` must always remain valid and renderable.
- Do not commit broken JSX, empty returns, placeholders, or fallback-looking visuals.
- Vercel deploys from the repository root.
