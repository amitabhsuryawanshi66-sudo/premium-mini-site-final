# QA Playbook

No change is ready for merge without build proof and visual proof. Do not claim preview proof unless the site was actually opened and checked.

## Required Commands
On Windows/Codex, follow `docs/CODEX_LOCAL_ENV.md` for the local setup and use `npm.cmd` command variants.

- Run `npm run build` before saying ready.
- Run `npm run qa:report` for cheap static link/source/asset gates before saying ready. This includes `qa:assets`.
- Run `npm run qa:visual` after build to create browser screenshots and objective layout checks in `qa-artifacts/visual/`.
- If a dev server is needed for visual checks, run `npm run dev` and inspect the rendered site.

## Required Viewports
- Desktop check: verify the main desktop layout and Story Track behavior.
- Mobile check at 390px width.
- Mobile check at 412px width.

## Required Checks
- No horizontal overflow at desktop, 390px, or 412px.
- No broken images, empty placeholders, or fallback-looking visuals unless intentionally designed and accepted.
- Every major visual asset has an asset contract covering section purpose, title, service value, required visual subject, source, and fallback behavior.
- All CTA and WhatsApp paths work.
- Story Track first and last cards are reachable.
- Text does not clip, overlap, or overflow its container.
- Touch targets remain usable on mobile.
- Hover/tap states remain visible and purposeful.
- Desktop polish does not degrade mobile behavior, and mobile fixes do not degrade desktop behavior.

## Visual Proof
Before merge, attach or reference screenshots/video captures for:
- Desktop main page and Story Track.
- Mobile 390px.
- Mobile 412px.
- Any changed interaction state or asset surface.

The proof must come from the current branch and current build/dev preview.

## Asset QA
Asset changes must follow `docs/ASSET_PIPELINE.md`.

`qa:assets` is an offline static gate. It verifies contract coverage, required metadata, allowed source types, subject-led deterministic artifacts, meaningful stock semantic-fit notes, fallback behavior, and banned generic subjects in claimed visual fields. It does not browse, fetch image URLs, inspect pixels, judge beauty, or verify copyright/license status.

Passing asset QA does not replace visual proof. Reviewers must still inspect desktop and mobile screenshots to confirm the asset is readable, intentional, and not label-led or fallback-looking in the rendered UI.

## Ready Claim Rule
Do not say "ready", "verified", or "mergeable" unless the command output and visual checks were actually completed. If any check cannot be run, state that plainly and mark the PR as not fully proven.
