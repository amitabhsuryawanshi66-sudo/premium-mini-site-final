# Asset Pipeline v1

Asset pipeline v1 turns asset taste rules into a repeatable contract and a static QA gate. It does not replace human visual review; it prevents major visuals from entering the site without a clear explanation of what they must show, where they came from, and what intentional fallback should appear if media fails.

Future mini-sites should create their own contract file in `docs/asset-contracts/` instead of expanding the Obsidian-specific contract forever. Each contract file must be registered on its matching site preset in `src/data/sitePresets.js` through the preset's `contractFile` field.

## Asset Contract Purpose
Every major visual asset must satisfy this chain:

```text
section purpose -> title -> service value -> required visual subject -> asset source -> fallback behavior
```

The contract exists so reviewers can reject assets before they become vague mood imagery, keyword-only stock, or label-led placeholders. A visual is not accepted because it looks polished in isolation; it is accepted because its visible subject supports the section promise.

## Required Metadata
Each visual contract item must include:

- `section`: The site section or component group that owns the visual.
- `title`: The visitor-facing title for the card or visual item.
- `serviceValue`: The service promise the visitor should understand.
- `requiredSubject`: The recognizable subject the visual must communicate.
- `forbiddenSubjects`: Subjects that would make the asset fail even if the image looks premium.
- `assetSourceType`: One of the allowed source types below.
- `assetSource`: The concrete file, URL, generator note, or deterministic artifact source.
- `assetBinding`: The exact local data binding used by static QA. Image-backed entries bind to the current image URL; artifact entries bind to the current visual mode and variant.
- `semanticFit`: Why this asset matches the title and service value.
- `fallbackMode`: The fallback behavior or visual mode.
- `fallbackSubject`: What the fallback visibly communicates.
- `visualProofNote`: What screenshot or viewport proof must confirm.

## Allowed Source Types
- `client-provided`: Use approved client studio, artist, work, process, or venue imagery. This is the preferred source when the image directly shows the business or service.
- `generated-bespoke`: Use only when generated for the exact title, service value, and required subject. It must be readable in the actual UI.
- `licensed-stock`: Use only when semantically exact, not keyword-adjacent. Generic tattoo, luxury, hands, studio, or lifestyle keywords are not enough.
- `deterministic-artifact`: Use only when subject-led and readable. A placement map, stencil plan, or material study can qualify; abstract decoration cannot.

## Rejection Rules
Reject the asset or freeze the PR when:

- The asset is a random stock match based on loose keywords.
- The image contradicts or ignores the title.
- The service value depends on captions, badges, metadata, or labels instead of the visual subject.
- Generic laptop, office, doctor, business, or lifestyle imagery appears without being required by the service.
- Abstract SVG or CSS visuals replace meaningful subject matter.
- The fallback looks broken, empty, accidental, or placeholder-like.
- The asset source, subject, and fallback cannot be explained through the contract chain.
- The builder claims image quality without contract evidence and current visual proof.

## Reviewer Handoff
Before implementation, the Asset Alignment Reviewer checks that every changed visual has a contract entry and that the contract chain is coherent. The Visual Taste Reviewer then judges whether the actual rendered result feels premium and readable. The Frontend Engineering Reviewer confirms the implementation is scoped, dependency-safe, and does not change app behavior outside the approved task.

Before merge, `npm.cmd run qa:report` must pass, including `qa:assets`, and visual proof must still cover the required desktop and mobile states from `docs/QA_PLAYBOOK.md`.

## Multi-Site Presets
Mini-site presets live in `src/data/sitePresets.js`. Obsidian remains the default preset. Future presets should add their own data object, register it in `SITE_PRESETS`, and point `contractFile` to a dedicated JSON contract in `docs/asset-contracts/`.

`qa:assets` validates every JSON contract in `docs/asset-contracts/`. A contract file fails if no registered preset maps to it, and a preset fails if its declared contract file is missing. This keeps asset contracts tied to the exact archive data that renders in the app.

## Static Asset QA vs Visual QA
`qa:assets` checks metadata coverage and contract quality without browsing, fetching, or inspecting images online. It proves that every major visual has a declared subject, source, semantic fit, and fallback plan.

Visual QA remains separate. Screenshots and viewport checks prove the current build actually renders well, avoids clipping, and does not show broken or fallback-looking media.

## V1 Limitations
Asset pipeline v1 does not:

- Judge image beauty or premium taste automatically.
- Verify copyright or license status.
- Search stock sites or generate images.
- Fetch remote image URLs.
- Use AI vision.
- Score screenshots.
- Prove that metadata is honest.

It creates a hard static gate so future work cannot skip the asset contract and then claim readiness without evidence.
