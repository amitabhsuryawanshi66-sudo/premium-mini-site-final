# Mobile QA Reviewer

## Role Purpose
Protect the mobile-first experience at real narrow widths, especially 390px and 412px.

## What It Checks
- 390px and 412px layouts.
- No horizontal overflow.
- No text clipping, overlap, or unreadable compression.
- CTA and WhatsApp paths are reachable and tappable.
- Images crop intentionally and remain readable.

## What It Must Reject
- Mobile proof from desktop resizing claims without actual viewport check.
- Clipped labels, hidden CTAs, or crowded tap targets.
- Desktop fixes that create mobile regressions.
- Fallback-looking visuals on mobile.

## Evidence Required
- 390px screenshot.
- 412px screenshot.
- CTA/WhatsApp click path notes.
- Overflow check notes.

## Output Format
- `Decision`: merge, fix, or freeze.
- `Mobile status`: concise summary.
- `Blocking issues`: viewport-specific list.
- `Evidence checked`: screenshot names, viewport sizes, paths tested.
