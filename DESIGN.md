# Design Context

## Purpose

This file defines the project-level design bar for future premium mini-site work. It is not a frozen visual system for the current demo and does not replace `docs/CAPABILITY_TEST_GATES.md`, `docs/SKILL_USAGE_PROTOCOL.md`, `docs/REFERENCE_CAPTURE_PROTOCOL.md`, `docs/ASSET_STRATEGY.md`, or `docs/QA_PLAYBOOK.md`.

## Taste Bar

The bar is sellable, client-ready, and visually specific. The work should feel designed for the niche, audience, and offer in front of it.

Clean but boring fails. A tidy page with generic sections, weak imagery, stock motion, and a clear CTA is still not enough for serious premium output. The result needs a point of view.

## Anti-Template Rules

Do not ship same-template reskins as premium work. Changing palette, typography, copy, and labels is not enough.

Serious mini-site work should change at least some of the following when the niche calls for it:
- Section architecture.
- Visual language.
- Asset strategy.
- Motion or interaction pattern.
- Conversion path.
- Content model.
- Mobile layout behavior.

If the work is intentionally only a foundation checkpoint, label it that way and do not present it as final sellable quality.

## Reference-Backed Process

Before major visual, motion, component, or section-pattern work, capture references through the Browser plugin and record them using `docs/REFERENCE_CAPTURE_PROTOCOL.md`.

References should influence decisions, not become pasted decoration. Translate the pattern into the target niche, offer, assets, copy, and constraints. Use 21st.dev and MotionSites as browser reference resources, not installed skills.

## Motion Expectations

Motion should have a purpose: hierarchy, story, state change, tactile feedback, or conversion clarity. Avoid decorative motion that slows the page or hides weak design.

Premium work should usually include at least one memorable interaction or motion moment when the brief calls for reel-level quality. Reduced-motion behavior must remain polished and safe.

## Asset Richness

Assets must carry the service promise. Follow `docs/ASSET_STRATEGY.md` and the asset pipeline when assets change.

For serious premium output, deterministic artifacts alone are not enough unless they are unusually strong, subject-led, and central to the concept. Prefer client-provided visuals, generated bespoke bitmap assets, semantically exact licensed imagery, or high-quality adapted visual references.

Reject visuals that are generic, label-led, mismatched to the section title, or fallback-looking.

## Component Copy And Adaptation

Copied or closely adapted components are allowed only when the license, dependency impact, niche translation, and QA proof are all acceptable. Do not copy components in casual capability prep work.

Component references should raise the quality of a specific surface. They should not create a component dump, style mismatch, dependency bloat, or a pasted-looking page.

## Mobile-First Proof

Mobile is not a later cleanup pass. Serious work must prove 390px and 412px behavior separately, including overflow, clipping, touch targets, CTA reachability, text fit, and visual balance.

Desktop polish must not degrade mobile, and mobile fixes must not degrade desktop. Use `docs/QA_PLAYBOOK.md` for proof requirements.

## Skill And Resource Influence

Use real installed skills and resources honestly:
- `impeccable` for audit, shape, polish, UX writing, and design judgment.
- `design-taste-frontend` for anti-template direction and design reads.
- `emil-design-eng` for motion and interaction judgment.
- `ui-ux-pro-max` for UI/UX pattern and design-system search.
- Browser plugin for references, localhost proof, screenshots, and responsive checks.

Reports must not fake skill usage proof. Name the real skill or resource used, why it mattered, what decision it influenced, and the usage mode, as required by `docs/SKILL_USAGE_PROTOCOL.md`.
