# Official Design Skills Install Status

Date: 2026-05-28
Branch: `codex-official-design-skills-install-v1`

This records the official design skill installation run for Codex usage. The install commands were run exactly as approved. No app source, package files, asset contracts, visuals, or preset data were changed.

## Installed Skills

| Skill | Command run | Installed path | Notes |
| --- | --- | --- | --- |
| Taste Skill | `npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend` | `.agents/skills/design-taste-frontend/SKILL.md` | Installed from official source as `design-taste-frontend`. Installer reported Codex agent detection and low risk. |
| Emil Design Engineering | `npx skills add https://github.com/emilkowalski/skill --skill emil-design-eng` | `.agents/skills/emil-design-eng/SKILL.md` | Installed from official source as `emil-design-eng`. Installer reported Codex agent detection and low risk. |
| Impeccable | `npx skills add pbakaus/impeccable` | `.agents/skills/impeccable/SKILL.md` | Installed from official source as `impeccable`. Installer reported medium risk and installed supporting reference, agent, and script files. |
| UI UX Pro Max | `npx uipro-cli init --ai codex` | `.codex/skills/ui-ux-pro-max/SKILL.md` | Installed through the official CLI for Codex using `uipro-cli@2.2.3`. The installer created `.codex/skills/ui-ux-pro-max/` with data and Python script resources. |

## Installer-Created Files

- `.agents/skills/design-taste-frontend/`
- `.agents/skills/emil-design-eng/`
- `.agents/skills/impeccable/`
- `.codex/skills/ui-ux-pro-max/`
- `skills-lock.json`

The `skills-lock.json` file records the official source and computed hash for the skills installed through `npx skills add`.

UI UX Pro Max was installed through `npx uipro-cli init --ai codex`, not through `npx skills add`, so it is not represented in `skills-lock.json`. Its traceable install source is the official UI UX Pro Max CLI package `uipro-cli@2.2.3`, with the installed project-local Codex skill at `.codex/skills/ui-ux-pro-max/`. A future install refresh should pin the CLI package/version explicitly before rerunning.

## Executable Skill Tooling

These installed skills are not passive documentation only:

- Impeccable includes executable JS/MJS/browser tooling under `.agents/skills/impeccable/scripts/`.
- UI UX Pro Max includes Python scripts and CSV data under `.codex/skills/ui-ux-pro-max/`.

These files are intentionally installed as project-local skill tooling. They are not app dependencies and must not be invoked to mutate app code without an explicit PR scope and normal repo guardrails. Generated Python bytecode under `__pycache__/` was removed and is ignored by `.gitignore`.

## Explicitly Not Installed

- 21st.dev was not installed. It remains a browser/reference resource only.
- Council was not installed. It remains strategy-oriented and out of scope for this install PR.
- Framer Motion was not installed and was not added as an app dependency.
- Local repo approximations under `agent-skills/` were not installed as native skills.

## Guardrail Checks

- `src/` unchanged.
- `scripts/` unchanged.
- `package.json` unchanged.
- `package-lock.json` unchanged.
- root `scripts/` unchanged.
- asset contracts unchanged.
- preset data unchanged.
- app styling unchanged.

## Use Before Velour Differentiation

Velour Visual Identity Differentiation may proceed after reviewing this install result. Future visual work should use the installed official design skills, keep 21st.dev as a reference resource, and continue to follow repo QA and dependency rules.
