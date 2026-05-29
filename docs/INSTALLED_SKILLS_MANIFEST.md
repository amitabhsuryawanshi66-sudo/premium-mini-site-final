# Installed Skills Manifest

This manifest separates operational Codex skills and plugin resources from local machine configuration and removed legacy repo guidance. A file in the repo is not automatically an active skill.

## Active Usable Installed Skills

| Skill | Path | Source | Use | Required proof |
| --- | --- | --- | --- | --- |
| Design Taste Frontend | `.agents/skills/design-taste-frontend/SKILL.md` | `Leonxlnx/taste-skill` via `npx skills add` | Anti-template design reads, landing-page direction, no-reskin checks | Cite the exact anti-template rule or rejection and the decision it changed or validated. |
| Emil Design Engineering | `.agents/skills/emil-design-eng/SKILL.md` | `emilkowalski/skill` via `npx skills add` | Motion, interaction, animation judgment, tactile UI details | Cite the exact motion/interaction rule and the visible implementation effect. |
| UI UX Pro Max | `.codex/skills/ui-ux-pro-max/SKILL.md` | `uipro-cli@2.2.3` | UI/UX search, style and landing-pattern recommendations | Include `search.py --design-system` output or a focused search result used for the decision. |

## Installed But Repair-Pending

| Skill | Path | Current status | Use | Required proof before preferred use |
| --- | --- | --- | --- | --- |
| Impeccable | `.agents/skills/impeccable/SKILL.md` | Installed in a generic/not-preferred way; detector proof failed locally in the audit. | Frontend audit, shape, polish, UX writing, motion, visual critique. | Verify the preferred installer, repair install if approved, then include CLI/detector output before relying on it as a working tool. |

## Plugin And System Resources

| Resource | Location | Use | Status |
| --- | --- | --- | --- |
| Browser plugin | Codex plugin cache | Local preview proof, screenshots, 21st.dev and MotionSites reference capture | Active usable resource, not a design skill. |
| GitHub plugin | Codex plugin cache | PR, issue, branch, and repository operations | Active usable resource, not a visual taste skill. |
| Image generation system skill | User Codex system skills | Subject-led bitmap assets when approved by asset strategy | Active usable, but requires explicit asset scope. |
| OpenAI docs, skill installer, skill creator, plugin creator | User Codex system skills | Documentation, skill management, plugin creation | Active, not relevant to routine mini-site design unless requested. |

## Not Installed Or Not Configured

| Candidate | Use | Status |
| --- | --- | --- |
| 21st.dev Magic MCP | Component discovery and MCP-backed 21st.dev resources | Not installed or configured. Browser access to 21st.dev remains reference-only. |
| Stop Slop | Copy cleanup and removal of AI tells | Not installed. Candidate only. |
| llm-council | Strategy pressure-testing | Not installed. Optional; not a visual taste replacement. Existing repo council docs remain the default. |

## Removed Legacy Guidance

The legacy repo-local skill approximation folder was removed because it could make Codex confuse Markdown notes with installed operational skills. Do not recreate that folder or cite it as proof.

## Operational Caveats

- Impeccable is repair-pending; use caution until the preferred install and detector checks pass.
- UI UX Pro Max scripts are present and searchable with the bundled Python runtime. Plain `python` may not be available on PATH.
- Browser access to 21st.dev and MotionSites must be used through reference capture, not described as skill invocation.
- Future task reports should include skill/resource usage proof from `docs/SKILL_USAGE_PROTOCOL.md`.
- Active installed skill directories under `.agents/skills/*` and `.codex/skills/*` must not be edited during ordinary app work.
