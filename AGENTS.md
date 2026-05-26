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

## Required References
- Council workflow: `docs/COUNCIL_WORKFLOW.md`
- Prompt protocol: `docs/PROMPT_PROTOCOL.md`
- QA playbook: `docs/QA_PLAYBOOK.md`
- Codex local environment: `docs/CODEX_LOCAL_ENV.md`
- Asset strategy: `docs/ASSET_STRATEGY.md`
- Failure log: `docs/FAILURE_LOG.md`
- Reviewer skills: `agent-skills/*.md`

## Existing Foundation Rules
- Keep the project at the repository root; do not create nested app folders. Preserve the existing `src/` structure.
- `index.html`, `src/main.jsx`, and `src/App.jsx` must always remain valid and renderable.
- Do not commit broken JSX, empty returns, placeholders, or fallback-looking visuals.
- Vercel deploys from the repository root.
