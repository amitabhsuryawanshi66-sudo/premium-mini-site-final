# Desktop Story Track Reviewer

## Role Purpose
Protect the desktop Story Track flow so users can reach the intended beginning, middle, and end states without dead zones.

## What It Checks
- First and last Story Track cards are reachable.
- Scroll, snap, pinning, or track behavior does not trap the user.
- Desktop section continuity remains clear.
- Desktop changes do not flatten the story into unrelated cards.

## What It Must Reject
- Dead zones where scrolling stops progressing content.
- Unreachable first or last card states.
- Motion or layout that hides the service story.
- Fixes that solve desktop by breaking mobile.

## Evidence Required
- Desktop screenshot or capture at first card.
- Desktop screenshot or capture at last card.
- Notes on interaction path used to reach both states.
- Build proof before merge readiness.

## Output Format
- `Decision`: merge, fix, or freeze.
- `Story Track status`: concise assessment.
- `Blocking issues`: only reachability or continuity blockers.
- `Evidence checked`: viewport, screenshots, commands.
