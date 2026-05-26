# Council Workflow

The council is a review harness for this mini-site generator. It prevents broad prompts from turning into uncontrolled redesigns and makes every change pass through explicit role-based gates before one builder implements it.

## Roles
- **Creative Director**: Confirms the change supports a premium mini-site generation workflow and the current Obsidian Ink Studio demo without changing the site thesis.
- **Visual Taste Reviewer**: Checks composition, hierarchy, restraint, visual specificity, and premium finish.
- **Frontend Engineering Reviewer**: Checks React/CSS safety, renderability, build risk, dependency discipline, and scoped implementation.
- **Mobile QA Reviewer**: Checks 390px and 412px mobile behavior, touch targets, clipping, horizontal overflow, and CTA reachability.
- **Desktop Story Track Reviewer**: Checks desktop story flow, first/last card reachability, dead zones, scroll behavior, and section continuity.
- **Asset Alignment Reviewer**: Checks whether images or generated visuals match the title, service value, and visual subject contract.
- **Motion / Interaction Reviewer**: Checks purposeful motion, reduced jank, hover/tap states, and no decorative interaction that distracts from conversion.
- **Conversion Reviewer**: Checks WhatsApp/CTA paths, message clarity, trust cues, and whether the user can complete the intended action.
- **Prompt Hygiene Reviewer**: Checks branch, scope, exclusions, acceptance criteria, and whether future-phase ideas are leaking into the current PR.

## When To Ask Council
Ask council before implementation when a task changes layout, copy hierarchy, imagery, motion, CTAs, responsive behavior, data structure, or visual direction. Small mechanical fixes may use the relevant reviewers only, but the builder must still state scope and acceptance criteria before editing.

Ask the full council when a prompt includes "premium", "polish", "visual", "homepage", "story", "asset", "mobile", "desktop", "conversion", or any request that could become a redesign.

## Prompt Review
Before implementation, the council reviews the prompt for:
- Explicit current branch and target files.
- Preserve, fix, avoid, and acceptance criteria sections.
- A clear boundary between the current PR and future phases.
- Direct choices for A/B tool questions unless a third option is truly necessary.
- Evidence-based warnings only; no speculative blockers.
- Request for implementation rationale, not hidden chain of thought.

If the prompt is broad, the Prompt Hygiene Reviewer must rewrite it into a small scoped task before a builder starts.

## PR Review
For PRs, council reviewers inspect the diff, built output, and visual proof. Each reviewer returns:
- `decision`: merge, fix, or freeze.
- `evidence`: files, screenshots, commands, viewport sizes, or interaction paths checked.
- `risks`: known failures and unknown risks found beyond the checklist.
- `required fixes`: only blocking items, stated as small actionable changes.

## Merge / Fix / Freeze
- **Merge**: Build passes, visual proof exists, acceptance criteria are met, and no reviewer has a blocking concern.
- **Fix**: Scope is valid but one or more gates fail. Send only the smallest required fixes back to the builder.
- **Freeze**: The change drifts into redesign, introduces asset mismatch, breaks core behavior, lacks evidence, or makes the repo less repeatable.

## Known Failure Gates From PR #9
Reject or freeze if any of these appear:
- Irrelevant stock photos or image/title mismatch.
- Abstract SVG visuals used as a substitute for subject-led assets.
- Label-led visuals where text badges carry the meaning instead of the image.
- Desktop Story Track dead zones or unreachable first/last cards.
- Mobile text clipping, overflow, or CTA crowding.
- "Ready" claims without actual build and visual proof.
- Overbroad prompts that mix current work with future-phase polish.

## Unknown-Risk Requirement
The checklist is not enough. Every reviewer must also ask: "What could fail here that is not already named?" Unknown risks may include new viewport edge cases, copy/asset semantic drift, brittle CSS assumptions, regressions in scroll behavior, or invisible conversion breakage.

## Builder / Reviewer Separation
Reviewers decide gates and requested changes. One builder implements the agreed work. The builder may explain rationale and evidence, but must not self-approve merge readiness without reviewer proof.
