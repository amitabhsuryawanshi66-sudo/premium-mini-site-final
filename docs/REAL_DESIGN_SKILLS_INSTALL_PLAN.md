# Real Design Skills Install Plan

This plan records the official design skill and reference-resource path before any Velour House visual differentiation work. It is documentation only: no skills are installed here, no external repos are vendored, and no app or package files should change as part of this plan.

## Current Workflow

The active workflow is ChatGPT, Codex, GitHub, and Vercel.

- ChatGPT helps frame decisions and prompts, but does not natively install these repo skills.
- Codex performs local repo work and can use native skills when installed into the Codex skills directory.
- GitHub remains the PR review and merge layer.
- Vercel remains the deploy and preview layer.
- Skill installation does not belong in Vercel.

Jules is excluded from this plan.

## Official Sources

| Resource | Source | Intended install command from audit | Intended use | Needed before Velour differentiation? | Safety and pinning | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Emil Design Engineering | `https://github.com/emilkowalski/skill` | `npx skills add https://github.com/emilkowalski/skill --skill emil-design-eng` | Motion craft, tactile UI details, interaction feel, reduced-motion discipline, production design engineering judgment. | Recommended before motion or interaction-heavy work. | Review the upstream skill and pin the exact source/ref before project use. Treat dependency suggestions as guidance only. | Not installed yet. |
| Impeccable | `https://github.com/pbakaus/impeccable` | `npx skills add pbakaus/impeccable` | Design fluency, typography, color, spatial polish, anti-slop critique, brand/product distinction, project design context. | Yes. This is the strongest candidate before Velour differentiation. | Review scripts and provider files before install. Pin version/ref. Do not run optional CLI or browser tooling without explicit approval. | Not installed yet. |
| Taste Skill | `https://github.com/Leonxlnx/taste-skill` | `npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend` | Anti-template visual judgment, layout variance, typography, density, and avoiding generic AI frontend output. | Yes. Use as a taste gate for preventing another reskin. | Review selected skill path only. Pin source/ref. Avoid optional workflows that add dependencies or broad redesign scope. | Not installed yet. |
| UI UX Pro Max | `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` | `npx uipro-cli init --ai codex` | Design intelligence across UI styles, palettes, font pairings, UX guidelines, industry rules, and accessibility. | Optional. Useful if the install plan is approved and the skill output is reviewed for this niche. | CLI install requires extra scrutiny because it can write project files and may use network access. Pin package/version before use. | Not installed yet. |
| Council | `https://github.com/aiwithremy/claude-skills-llm-council` | Codex install is possible in principle through the Codex skill installer, but no install command should run in this PR. | Strategic uncertainty, product decisions, pricing, offer direction, and competing-path evaluation. | No. Council is not the visual taste solution for Velour. | Instruction-only repo in audit, but it expects council/sub-agent behavior. Use only for strategy after explicit approval. | Not installed yet. |
| 21st.dev | `https://21st.dev` | None. It is not a skill. | Browser reference for stronger hero, card, CTA, form, scroll, interaction, and component patterns. | Yes as a reference, not as an install. | Do not copy blindly, do not add dependencies by default, and do not turn editorial mini-sites into generic SaaS interfaces. | Resource only. |
| Framer / Framer Motion | `https://www.framer.com/motion/` | None for this repo unless a future PR explicitly approves a dependency change. | Motion-quality reference for easing, timing, choreography, gesture feel, and interaction clarity. | Reference only. | Framer Motion is a dependency decision. Skills may not add it automatically. Prefer CSS/native motion for current mini-site work. Reduced-motion safety is required. | Not installed; not approved as dependency. |

## What Not To Do

- Do not install the current local `agent-skills/` approximations as native Codex skills.
- Do not treat `agent-skills/21st-dev/` or 21st.dev as a skill.
- Do not use Council as the visual taste solution.
- Do not let any skill add Framer Motion, package dependencies, UI libraries, or build tooling automatically.
- Do not vendor external skill repos into this repo without a separate approval.
- Do not copy external `SKILL.md` files into this repo in this PR.
- Do not proceed to Velour Visual Identity Differentiation until this real design skill path is reviewed and approved.

## Codex Install Plan

The audit found the native Codex skills directory at:

```text
C:\Users\amitabh\.codex\skills
```

The Codex skill installer is available at:

```text
C:\Users\amitabh\.codex\skills\.system\skill-installer\scripts\install-skill-from-github.py
```

Codex should install official sources, not the current local approximations. Install commands should be reviewed, pinned to an exact source/version/ref where possible, and run only in a dedicated install step after approval. No install commands should run in this PR.

Prefer project-local or pinned installs when the skill affects this repo's design direction. Use user-global installs only when the same skill should apply across projects and the source has been reviewed.

## ChatGPT Use Plan

ChatGPT cannot natively install these repo skills as persistent local `SKILL.md` packages in this workflow. ChatGPT may use the official source links, this plan, and repo docs as process/reference context, but must not claim that the skills are installed inside ChatGPT.

When ChatGPT frames future implementation prompts, it should name whether the task needs approved Codex-native skills, 21st.dev browser reference, targeted repo reviewers, or none.

## GitHub And Vercel

GitHub PRs remain the review, discussion, and merge layer. The repo docs guide Codex work, PR scope, and QA expectations.

Vercel remains the deployment and preview layer. No skill install belongs in Vercel, and no Vercel behavior should change for design skill installation.

## 21st.dev Usage Rule

Use 21st.dev through browser/reference access when a task needs better component or section pattern judgment. It is useful for:

- hero composition patterns
- cards and archive surfaces
- CTA treatments
- forms and intake flows
- interaction and scroll ideas
- component-quality benchmarks

Do not copy blindly. Do not SaaS-ify editorial mini-sites. Do not add dependencies by default. Translate references through the brand, niche, asset contract, mobile constraints, and existing repo architecture.

## Framer / Framer Motion Usage Rule

Framer Motion is not automatically allowed. It must not be added unless a future PR explicitly approves a package/dependency change.

For current mini-site work, prefer CSS transitions, native browser APIs, and existing repo motion patterns. Use Framer and Framer Motion knowledge as inspiration for quality: easing, timing, sequencing, gesture feel, interruption behavior, and restraint. Always preserve `prefers-reduced-motion` safety.

If an installed skill recommends Framer Motion, treat that recommendation as optional guidance and apply repo dependency rules first.

## Before Velour Differentiation

Before implementing Velour Visual Identity Differentiation:

1. Review and approve this official skill/resource plan.
2. Decide whether to install official design skills into Codex.
3. If approved, install only official sources with pinned/reviewed inputs.
4. Use approved design skills plus 21st.dev as a browser reference.
5. Keep the implementation PR narrow: Velour-specific identity, no architecture rewrite, no package changes, no QA framework changes.
