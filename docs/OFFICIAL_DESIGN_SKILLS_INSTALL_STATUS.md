# Official Design Skills Install Status

Date: 2026-05-28
Branch: `codex-official-design-skills-install-v1`
Status updated after the skill harness audit.

This records the previous official design skill installation run for Codex usage. The install commands were run as approved at the time. No app source, package files, asset contracts, visuals, or preset data were changed by that install run.

## Installed Skills

| Skill | Command run | Installed path | Current audit status |
| --- | --- | --- | --- |
| Taste Skill | `npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend` | `.agents/skills/design-taste-frontend/SKILL.md` | Keep. Instruction/rulebook skill. Future proof should cite exact anti-template rule or rejection. |
| Emil Design Engineering | `npx skills add https://github.com/emilkowalski/skill --skill emil-design-eng` | `.agents/skills/emil-design-eng/SKILL.md` | Keep. Instruction/rulebook skill. Future proof should cite exact motion/interaction rule and visible effect. |
| Impeccable | `npx skills add pbakaus/impeccable` | `.agents/skills/impeccable/SKILL.md` | Repair-pending. Installed in a generic/not-preferred way; detector proof failed locally. |
| UI UX Pro Max | `npx uipro-cli init --ai codex` | `.codex/skills/ui-ux-pro-max/SKILL.md` | Keep. Complete and runnable. Future proof should include `search.py --design-system` output. |

## Installer-Created Files

- `.agents/skills/design-taste-frontend/`
- `.agents/skills/emil-design-eng/`
- `.agents/skills/impeccable/`
- `.codex/skills/ui-ux-pro-max/`
- `skills-lock.json`

The `skills-lock.json` file records the source and computed hash for the skills installed through `npx skills add`.

UI UX Pro Max was installed through `npx uipro-cli init --ai codex`, not through `npx skills add`, so it is not represented in `skills-lock.json`. Its recorded install source is the official UI UX Pro Max CLI package `uipro-cli@2.2.3`, with the installed project-local Codex skill at `.codex/skills/ui-ux-pro-max/`. A future install refresh should pin the CLI package/version explicitly before rerunning.

## Executable Skill Tooling

These installed skills are not passive documentation only:

- Impeccable includes executable JS/MJS/browser tooling under `.agents/skills/impeccable/scripts/`, but should be treated as repair-pending until preferred install and detector proof are verified.
- UI UX Pro Max includes Python scripts and CSV data under `.codex/skills/ui-ux-pro-max/`.

These files are intentionally installed as project-local skill tooling. They are not app dependencies and must not be invoked to mutate app code without an explicit PR scope and normal repo guardrails.

## Explicitly Not Installed

- 21st.dev Magic MCP is not installed or configured.
- 21st.dev browser access remains reference-only.
- MotionSites remains browser-reference-only.
- Stop Slop is not installed.
- llm-council is not installed and remains optional.
- Framer Motion was not installed and was not added as an app dependency.
- The legacy repo-local skill approximation folder was removed after audit.

## Guardrail Checks

- `src/` unchanged by skill install work.
- `scripts/` unchanged by skill install work.
- `package.json` unchanged by skill install work.
- `package-lock.json` unchanged by skill install work.
- asset contracts unchanged by skill install work.
- preset data unchanged by skill install work.
- app styling unchanged by skill install work.

## Future Use

Future visual work should use real installed skills/resources, keep 21st.dev and MotionSites as browser references unless MCP setup is explicitly approved, and continue to follow repo QA and dependency rules.
