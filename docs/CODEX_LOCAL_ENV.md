# Codex Local Environment

This guide keeps Windows/Codex setup work repeatable for this repo. It is about local tooling only; it does not change site behavior, design direction, dependencies, or source code.

## Recommended Codex Settings

- Work locally from the repository root.
- Use default or workspace permissions for normal tasks.
- Do not enable Full Access by default.
- Keep browser access off unless the task requires web research or live browser verification.
- Keep subagents off unless the user explicitly requests them.

## Windows Command Rules

- In PowerShell, prefer `npm.cmd` over `npm` so Windows runs the command shim directly.
- If Playwright browser binaries need to be installed, use `npx.cmd playwright install`.
- If the Codex sandbox blocks a safe local command, run the same command manually in normal PowerShell or approve it one time.

## Dependency And Install Rules

- After `package-lock.json` exists, install with `npm.cmd ci` for a clean lockfile-based install.
- Use `npm.cmd install` when intentionally updating the dependency tree.
- Do not commit `node_modules/`.
- Commit `package-lock.json` only when dependencies or the resolved package tree intentionally change.
- Do not run `npm audit fix` as part of normal setup or QA.

## Normal QA Command Sequence

Run these from the repository root:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run qa:report
npm.cmd run qa:visual
```

If dependencies are not installed yet and `npm.cmd ci` is not appropriate for the situation, use `npm.cmd install` instead, then run the same build and QA commands.

## Generated Files

These paths are local/generated and should not be committed:

- `node_modules/`
- `dist/`
- `qa-artifacts/`

## Git Workflow

- Always start from an updated `main`.
- Create a narrow branch for the task.
- Inspect `git status --short` before and after edits.
- Stage only approved files.
- Do not use `git add .` unless the user explicitly approves it.

## Approval Rules

- It is reasonable to approve one-time safe build or QA commands when Codex needs them.
- Do not approve broad "don't ask again" permissions for general shell access.
- Do not use Full Access as a shortcut around normal workspace permissions.

## Troubleshooting

- `vite is not recognized` usually means dependencies are not installed or `node_modules/.bin` is missing. Run `npm.cmd ci` or `npm.cmd install`.
- A PowerShell script execution error involving `npm.ps1` can be bypassed by using `npm.cmd`.
- Codex sandbox access errors may require a one-time approval or a manual PowerShell run for the same safe command.
