# Skill Usage Protocol

This repo uses real installed Codex skills and plugin resources for design, motion, reference capture, QA, and PR work. Usage must be operationally truthful: reading a local Markdown file is not enough to claim that a skill or resource was used.

## Active Sources

- `.agents/skills/design-taste-frontend/`: anti-template design direction for landing pages, portfolios, and visual frontend work.
- `.agents/skills/emil-design-eng/`: motion, interaction, and design-engineering judgment.
- `.agents/skills/impeccable/`: repair-pending frontend critique, shaping, polish, UX writing, motion, and brand/product design judgment.
- `.codex/skills/ui-ux-pro-max/`: searchable UI/UX guidance and design-system recommendations.
- Browser plugin: local proof, 21st.dev and MotionSites reference capture, screenshots, and responsive checks.
- GitHub plugin: PR, issue, branch, and repository operations.

The legacy repo-local skill approximation folder was removed. It must not be recreated, cited, or treated as operational skill usage.

## Skill/Resource Usage Proof

Every taste-sensitive or workflow-sensitive task report should include skill/resource usage proof:

- **Skill/resource used**: Name the real installed skill, plugin, browser reference, or MCP resource.
- **Official operational mode**: Say whether it was audit-only, planning, implementation, visual critique, reference selection, QA, MCP query, or PR operation.
- **Command/tool/reference output**: Include the relevant command output, search result, screenshot path, browser proof, MCP list/tool output, or exact rule citation.
- **Decision influenced**: State the concrete design, copy, motion, asset, or code decision it changed or validated.
- **Visible result or QA proof**: Link the affected file, screenshot, browser proof, or QA result when implementation happened.

Do not claim usage when the work only followed generic repo docs, a local note, or memory of a tool.

## Mode-Specific Proof

- UI UX Pro Max: include `search.py --design-system` output or a focused search result from the bundled script.
- Impeccable: until repaired, label usage as repair-pending; after repair, include preferred install proof plus CLI or detector output when used as tooling.
- Emil Design Engineering: cite the exact rule or principle and show the visible implementation effect.
- Design Taste Frontend: cite the exact anti-template rule, rejection, or decision.
- 21st.dev Magic MCP: once installed, include MCP server/tool output and the selected resource proof.
- 21st.dev and MotionSites browser references: include Browser reference capture proof and the translated design decision.
- Stop Slop: once installed, include referenced phrase/structure/example files plus before/after copy cleanup.

## Operational Rules

- Use `design-taste-frontend` before new landing-page concepts, visual identity work, or anti-reskin decisions.
- Use `impeccable` only with the repair-pending caveat until the preferred installer and detector proof are verified.
- Use `emil-design-eng` for motion and interaction decisions, especially signature moments and reduced-motion handling.
- Use `ui-ux-pro-max` for pattern lookup and design-system searches. In this environment, use the bundled Python runtime if plain `python` is unavailable. Do not use `--persist` unless the task explicitly approves generated design-system files.
- Use Browser for 21st.dev, MotionSites, local preview, screenshots, responsive verification, and visual proof.
- Use GitHub plugin for PR status, review context, branch, and repository actions.

## What Not To Claim

- Do not treat 21st.dev or MotionSites browser reference work as installed skill invocation.
- Do not treat local Markdown notes as proof of real skill invocation.
- Do not edit real skill files under `.agents/skills/*` or `.codex/skills/*` as part of ordinary app work.
- Do not install, delete, or vendor skills or change MCP configuration unless the user explicitly approves that scope.
