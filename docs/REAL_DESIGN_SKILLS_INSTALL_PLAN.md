# Real Design Skills Install Plan

This plan records the real design skill and reference-resource path for Codex usage. It is documentation only: no skills are installed here, no external repos are vendored, and no app or package files should change as part of this plan.

## Current Workflow

The active workflow is ChatGPT, Codex, GitHub, and Vercel.

- ChatGPT helps frame decisions and prompts, but does not natively install these repo skills.
- Codex performs local repo work and can use native skills when installed into the Codex skills directory.
- GitHub remains the PR review and merge layer.
- Vercel remains the deploy and preview layer.
- Skill installation does not belong in Vercel.

## Current Source Status

| Resource | Source | Current status | Intended use | Safety and pinning |
| --- | --- | --- | --- | --- |
| Emil Design Engineering | `https://github.com/emilkowalski/skill` | Installed as `.agents/skills/emil-design-eng/`. | Motion craft, tactile UI details, interaction feel, reduced-motion discipline. | Treat as instruction/rulebook. Cite exact rule and visible implementation effect. |
| Design Taste Frontend | `https://github.com/Leonxlnx/taste-skill` | Installed as `.agents/skills/design-taste-frontend/`. | Anti-template visual judgment, layout variance, typography, density, and avoiding generic AI frontend output. | Treat as instruction/rulebook. Cite exact anti-template rejection or decision. |
| UI UX Pro Max | `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` | Installed as `.codex/skills/ui-ux-pro-max/`; complete and runnable. | Design intelligence across UI styles, palettes, font pairings, UX guidelines, industry rules, and accessibility. | Use bundled Python if needed. Proof should include `search.py --design-system` output. |
| Impeccable | `https://github.com/pbakaus/impeccable` | Installed but repair-pending; generic/not-preferred install and detector proof failed locally. | Design fluency, typography, color, spatial polish, anti-slop critique, brand/product distinction. | Verify official preferred installer and detector output before relying on it as a working tool. |
| 21st.dev Magic MCP | Official 21st.dev Magic MCP docs/repo | Not installed or configured. | MCP-backed component/resource discovery after approval. | Verify current package/command before install; do not assume stale package names. |
| 21st.dev browser reference | `https://21st.dev` | Browser-only reference. | Hero, card, CTA, form, scroll, interaction, and component pattern inspiration. | Do not copy blindly. Capture browser proof and translate to the niche. |
| MotionSites | Browser reference | Browser-only reference. | Motion pattern and interaction inspiration. | Capture browser proof; do not claim it as an installed skill. |
| Stop Slop | Candidate skill source to verify before install | Not installed. | Copy cleanup and removal of AI tells. | Install only after approval; proof should include referenced phrase/structure/example files and before/after copy. |
| llm-council | Candidate council skill source to verify before install | Not installed; optional. | Strategy pressure-testing. | Not a visual taste replacement. Existing repo council docs remain default. |

## What Not To Do

- Do not recreate removed local skill approximation files.
- Do not treat 21st.dev or MotionSites browser references as installed skills.
- Do not use llm-council as the visual taste solution.
- Do not let any skill add Framer Motion, package dependencies, UI libraries, or build tooling automatically.
- Do not vendor external skill repos into this repo without a separate approval.
- Do not copy external skill files into this repo in an app-work PR.

## Codex Install And Repair Plan

The Codex user skill directory is local machine state, not Vercel or app source:

```text
C:\Users\amitabh\.codex\skills
```

Run install, repair, uninstall, delete, or MCP configuration commands only after explicit approval. Keep those changes separate from app source changes whenever possible.

See `docs/SKILL_MCP_SETUP.md` for the current repair/install command plan. Do not run those commands from this document.

## GitHub And Vercel

GitHub PRs remain the review, discussion, and merge layer. The repo docs guide Codex work, PR scope, and QA expectations.

Vercel remains the deployment and preview layer. No skill install belongs in Vercel, and no Vercel behavior should change for design skill installation.

## 21st.dev And MotionSites Usage Rule

Use 21st.dev and MotionSites through browser/reference access when a task needs better component, section, or motion pattern judgment.

Do not copy blindly. Do not SaaS-ify editorial mini-sites. Do not add dependencies by default. Translate references through the brand, niche, asset contract, mobile constraints, and existing repo architecture.

## Framer / Framer Motion Usage Rule

Framer Motion is not automatically allowed. It must not be added unless a future PR explicitly approves a package/dependency change.

For current mini-site work, prefer CSS transitions, native browser APIs, and existing repo motion patterns. Use Framer and Framer Motion knowledge as inspiration for quality: easing, timing, sequencing, gesture feel, interruption behavior, and restraint. Always preserve `prefers-reduced-motion` safety.
