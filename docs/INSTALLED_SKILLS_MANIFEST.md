# Installed Skills Manifest

This manifest separates operational Codex skills and plugin resources from repo-local legacy guidance. A file in the repo is not automatically an active skill.

## Active Usable Installed Skills

| Skill | Path | Source | Use | Notes |
| --- | --- | --- | --- | --- |
| Design Taste Frontend | `.agents/skills/design-taste-frontend/SKILL.md` | `Leonxlnx/taste-skill` via `npx skills add` | Anti-template design reads, landing-page direction, no-reskin checks | Active project-local Codex skill. |
| Emil Design Engineering | `.agents/skills/emil-design-eng/SKILL.md` | `emilkowalski/skill` via `npx skills add` | Motion, interaction, animation judgment, tactile UI details | Active project-local Codex skill. |
| UI UX Pro Max | `.codex/skills/ui-ux-pro-max/SKILL.md` | `uipro-cli@2.2.3` | UI/UX search, style and landing-pattern recommendations | Use bundled Python if plain `python` is not on PATH. Prefer non-persist searches unless file generation is approved. |

## Installed But Risky Or Context-Dependent

| Skill | Path | Source | Use | Caveat |
| --- | --- | --- | --- | --- |
| Impeccable | `.agents/skills/impeccable/SKILL.md` | `pbakaus/impeccable` via `npx skills add` | Frontend audit, shape, polish, UX writing, motion, visual critique | Operational, but serious craft work needs `PRODUCT.md` and `DESIGN.md` or equivalent context. Some commands and scripts can write files, so use audit/shape/read-only modes first unless implementation is approved. |

## Plugin And System Resources

| Resource | Location | Use | Status |
| --- | --- | --- | --- |
| Browser plugin | Codex plugin cache | Local preview proof, screenshots, 21st.dev and MotionSites reference capture | Active usable resource, not a design skill. |
| GitHub plugin | Codex plugin cache | PR, issue, branch, and repository operations | Active usable resource, not a visual taste skill. |
| Image generation system skill | User Codex system skills | Subject-led bitmap assets when approved by asset strategy | Active usable, but requires explicit asset scope. |
| OpenAI docs, skill installer, skill creator, plugin creator | User Codex system skills | Documentation, skill management, plugin creation | Active, not relevant to routine mini-site design unless requested. |

## Repo-Local Legacy Guidance

`agent-skills/*` files are legacy reviewer guidance and synthesized approximations. They are not active installed Codex skills.

| Path | Status | Recommendation |
| --- | --- | --- |
| `agent-skills/*.md` reviewer files | Repo-local guidance | Keep as lightweight council prompts for now, but do not cite as installed skills. |
| `agent-skills/taste/SKILL.md` | Fake/local approximation | Replace in docs with `.agents/skills/design-taste-frontend/`. |
| `agent-skills/impeccable/SKILL.md` | Fake/local approximation | Replace in docs with `.agents/skills/impeccable/`. |
| `agent-skills/emil-kowalski/SKILL.md` | Fake/local approximation | Replace in docs with `.agents/skills/emil-design-eng/`. |
| `agent-skills/ui-ux-pro-max/SKILL.md` | Fake/local approximation | Replace in docs with `.codex/skills/ui-ux-pro-max/`. |
| `agent-skills/21st-dev/SKILL.md` | Misleading local approximation | Replace with Browser-based reference capture. 21st.dev is a resource, not a skill. |

Do not delete these files without a separate approved cleanup task.

## Candidate Skills Not Installed

| Candidate | Use | Status |
| --- | --- | --- |
| create-plan style skill | Stronger planning protocol | Candidate only. Not installed. |
| stop-slop | Copy cleanup and anti-generic language | Candidate only. Not installed. |
| Council external skill | Decision pressure-testing | Candidate only. Current repo council docs remain enough for now. |

## Operational Caveats

- Impeccable loader currently runs, but this repo does not yet have root `PRODUCT.md` or `DESIGN.md`.
- UI UX Pro Max scripts are present and searchable with the bundled Python runtime. Plain `python` may not be available on PATH.
- Browser access to 21st.dev and MotionSites must be used through reference capture, not described as skill invocation.
- Future task reports should include skill usage proof from `docs/SKILL_USAGE_PROTOCOL.md`.
