# Skill And MCP Setup

This document separates repo state from local machine configuration. It is a plan and status record only. Do not install, uninstall, delete, repair, or change MCP configuration unless the user explicitly approves that scope.

## Current Verified Status

| Skill/resource | Status | Repo or local machine | Proof expected in future work |
| --- | --- | --- | --- |
| UI UX Pro Max | Complete and runnable. | Repo-local active skill under `.codex/skills/ui-ux-pro-max/`. | `search.py --design-system` output or focused script result. |
| Emil Design Engineering | Installed instruction/rulebook skill. | Repo-local active skill under `.agents/skills/emil-design-eng/`. | Exact rule citation plus visible implementation effect. |
| Design Taste Frontend | Installed instruction/rulebook skill. | Repo-local active skill under `.agents/skills/design-taste-frontend/`. | Exact anti-template rejection or design decision. |
| Impeccable | Installed but repair-pending; generic/not-preferred install and detector proof failed locally. | Repo-local active skill under `.agents/skills/impeccable/`. | Preferred install proof plus CLI/detector output after repair. |
| 21st.dev browser reference | Available through Browser only. | Browser/resource usage, not repo code. | Browser screenshot/proof and translated decision. |
| MotionSites | Browser-only reference. | Browser/resource usage, not repo code. | Browser screenshot/proof and translated motion decision. |
| 21st.dev Magic MCP | Not installed or configured. | Local Codex MCP config if approved later. | MCP server/tool output plus selected resource proof. |
| Stop Slop | Not installed. | Future skill install if approved. | Reference files plus before/after copy cleanup. |
| llm-council | Not installed; optional. | Future skill install if approved. | Council output only for strategic uncertainty, not visual taste replacement. |

## Repo State Versus Local Machine State

Repo changes are files committed under this project, including docs and project-local skill folders already tracked here.

Local machine changes include:

- User Codex config such as `C:\Users\amitabh\.codex\config.toml`.
- User-global Codex skills under `C:\Users\amitabh\.codex\skills`.
- MCP server registrations and secrets.
- Network-fetched installer outputs.

Local machine changes must not be made as part of normal app work or documentation cleanup.

## UI UX Pro Max Proof Pattern

Use the bundled Python runtime if plain `python` is unavailable. A future task should include the exact command and a short excerpt of the result that shaped the decision.

Example pattern:

```powershell
python .codex\skills\ui-ux-pro-max\scripts\search.py "luxury service mobile booking" --design-system
```

If the environment needs the bundled runtime, use the path documented in `docs/CODEX_LOCAL_ENV.md`.

## Impeccable Repair Plan

Audit verdict: Impeccable is real but installed in a generic/not-preferred way, and detector proof failed locally.

Repair plan, do not run without approval:

1. Verify the current official Impeccable docs.
2. Confirm whether the preferred command is still:

```powershell
npx impeccable skills install
```

3. Determine whether the command changes repo files, user-global skill files, or both.
4. Replace or repair old `.agents/skills/impeccable` only if the user approves that specific file change.
5. Test CLI and detector proof after repair.

Expected proof commands after approval may include:

```powershell
npx impeccable --help
npx impeccable audit --help
node .agents\skills\impeccable\scripts\detect.mjs --help
```

## 21st.dev Magic MCP Plan

Audit verdict: 21st.dev Magic MCP is not installed or configured.

Install/config plan, do not run without approval:

1. Verify the current official 21st.dev Magic MCP repository or docs.
2. Confirm the current package and command; do not assume stale package names.
3. Confirm whether an API key is required and where it should be stored.
4. Identify the Codex MCP config location, currently local machine config such as:

```text
C:\Users\amitabh\.codex\config.toml
```

5. Add MCP configuration only after explicit approval.
6. Prove success with MCP server/tool output and selected resource proof.

Risks:

- Context bloat from large component/resource responses.
- Network dependency fetches.
- Copied component mismatch with this mini-site aesthetic.
- API key handling and accidental secret exposure.

## Stop Slop Plan

Audit verdict: Stop Slop is not installed.

Install plan, do not run without approval:

1. Verify the official source and current install command.
2. Confirm the expected structure, likely `SKILL.md` plus `references/phrases.md`, `references/structures.md`, and `references/examples.md`.
3. Install only after explicit approval.
4. Prove usage with referenced files and before/after copy cleanup.

Stop Slop is useful for copy cleanup and removing AI tells. It is not required before ordinary engineering fixes.

## Council Skill Decision

llm-council is not installed. Keep council as a repo process by default through `docs/COUNCIL_WORKFLOW.md` and `docs/DECISION_COUNCIL.md`.

Install an external council skill only if a future task has strategic uncertainty that the repo docs cannot handle. It should not replace visual taste, QA, or implementation review.

## Safety Rule

No installs, uninstalls, deletes, skill repairs, MCP config changes, API key changes, package changes, or dependency changes may run without explicit user approval.

Active installed skill directories under `.agents/skills/*` and `.codex/skills/*` must not be edited during ordinary app work.
