# Asset Strategy

Visual assets are part of the product system. They must carry the service promise, not merely decorate the page.

For the enforceable v1 process, use `docs/ASSET_PIPELINE.md` and the relevant contract file in `docs/asset-contracts/`. The strategy below defines the taste rules; the pipeline defines the metadata contract and static QA gate.

## Source Priority
1. **Client photos first**: Use real client-provided studio, artist, work, or process imagery when available and approved.
2. **Generated bespoke visuals second**: Use generated visuals when they are specific to the service, readable, and consistent with the brand mood.
3. **Licensed stock only if semantically exact**: Stock must match the exact subject, setting, audience, and service value. Generic tattoo, luxury, hands, or studio keywords are not enough.
4. **Deterministic artifact visuals**: Use deterministic visual artifacts only when subject-led, readable, and intentionally designed. They must not look like broken fallbacks.

## Title -> Service Value -> Visual Subject Contract
Every major visual must satisfy this contract:
- **Title**: What the section/card claims.
- **Service value**: What the visitor should understand or trust.
- **Visual subject**: What the image visibly shows.

If those three do not align, reject the asset.

## Rejections
Reject:
- Random keyword stock.
- Images that contradict the title or service value.
- Abstract SVGs used to hide missing subject matter.
- Label-led visuals where badges or captions carry the meaning instead of the image.
- Fallback visuals that look accidental, empty, or broken.

## Fallbacks
Fallbacks are allowed only when intentionally designed. They should feel like a deliberate brand artifact, not a missing-media state.

## Archive / Media Acceptance Checklist
Before accepting assets, confirm:
- The asset has a matching contract entry and passes `npm.cmd run qa:assets`.
- Source, license, or generation method is known.
- Subject matches the section title and service value.
- Cropping works on desktop and mobile.
- Image remains readable in the actual UI dimensions.
- No important details are hidden by text, overlays, or viewport cropping.
- File size and format are suitable for a fast mini-site.
