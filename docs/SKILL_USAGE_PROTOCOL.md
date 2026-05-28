# Skill Usage Protocol

This repo uses real installed Codex skills and plugin resources for design, motion, reference capture, QA, and PR work. Skill usage must be operationally truthful: reading a local Markdown file is not enough to claim that a skill was used.

## Active Sources

- `.agents/skills/design-taste-frontend/`: anti-template design direction for landing pages, portfolios, and visual frontend work.
- `.agents/skills/emil-design-eng/`: motion, interaction, and design-engineering judgment.
- `.agents/skills/impeccable/`: frontend critique, shaping, polish, UX writing, motion, and brand/product design judgment.
- `.codex/skills/ui-ux-pro-max/`: searchable UI/UX guidance and design-system recommendations.
- Browser plugin: local proof, 21st.dev and MotionSites reference capture, screenshots, and responsive checks.
- GitHub plugin: PR, issue, branch, and repository operations.

`agent-skills/*` files are repo-local legacy guidance. They may inform council review language, but they are not active installed Codex skills.

## Skill Usage Proof

Every taste-sensitive or workflow-sensitive task report should include skill usage proof:

- **Skill/resource used**: Name the real installed skill or plugin resource.
- **Why relevant**: Explain why it matched the task.
- **Decision influenced**: State the concrete choice it changed or validated.
- **Usage mode**: One of audit-only, planning, implementation, visual critique, reference selection, QA, or PR operation.

Do not claim skill usage when the work only followed generic repo docs or legacy `agent-skills/*` notes.

## Operational Rules

- Use `design-taste-frontend` before new landing-page concepts, visual identity work, or anti-reskin decisions.
- Use `impeccable` first in audit or shape mode for serious frontend craft. It expects `PRODUCT.md` and `DESIGN.md` or equivalent project context before major craft work.
- Use `emil-design-eng` for motion and interaction decisions, especially signature moments and reduced-motion handling.
- Use `ui-ux-pro-max` for pattern lookup and design-system searches. In this environment, use the bundled Python runtime if plain `python` is unavailable. Do not use `--persist` unless the task explicitly approves generated design-system files.
- Use Browser for 21st.dev, MotionSites, local preview, screenshots, responsive verification, and visual proof.
- Use GitHub plugin for PR status, review context, branch, and repository actions.

## What Not To Claim

- Do not treat `agent-skills/21st-dev` as an installed skill. 21st.dev is a browser reference resource.
- Do not treat local reviewer Markdown files as proof of real skill invocation.
- Do not edit real skill files under `.agents/skills/*` or `.codex/skills/*` as part of ordinary app work.
- Do not install, delete, or vendor skills unless the user explicitly approves that scope.
