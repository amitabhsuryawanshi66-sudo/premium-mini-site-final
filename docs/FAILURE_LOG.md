# Failure Log

This log captures PR #9 lessons so future work does not repeat them.

## PR #9 Failures
- Irrelevant stock photos weakened trust and made the service feel generic.
- Image/title mismatch caused cards to promise one thing and show another.
- Abstract SVG overcorrection replaced bad stock with visuals that were too detached from the real service.
- Label-led visuals made badges and captions do the semantic work instead of the image itself.
- Desktop Story Track had dead zones where users could not reliably reach the intended first or last card states.
- Mobile text clipping and overflow made polish claims unreliable.
- "Ready" claims were made without build and visual proof.
- Overbroad prompts caused drift across layout, images, motion, and polish in the same pass.

## Lessons
- Stabilize structure before image and motion polish.
- Asset pipeline quality is a product-system issue, not a final decoration step.
- Mobile and desktop must be preserved separately.
- Reviewers must inspect unknown risks beyond the known checklist.
- A small prompt with hard gates beats a broad premium prompt.
