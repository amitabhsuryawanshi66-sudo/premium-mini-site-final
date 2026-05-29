# Council Workflow

The council is a review harness for this mini-site generator. It prevents broad prompts from turning into uncontrolled redesigns and makes every change pass through explicit role-based gates before one builder implements it.

The council does not replace real installed Codex design skills, browser reference capture, asset strategy, or QA proof. For serious premium/reel-level work, reviewers must check that the builder used the relevant skills/resources and satisfied `docs/CAPABILITY_TEST_GATES.md`.

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

Use the full council for risky or cross-surface changes, especially when a prompt includes "premium", "polish", "visual", "homepage", "story", "asset", "mobile", "desktop", "conversion", or any request that could become a redesign. For narrow scoped fixes, use only the relevant reviewers.

## Decision Council
The targeted repo reviewers remain the primary system for code, PR, visual QA, asset, mobile, Story Track, and prompt-scope work. Use the Decision Council in `docs/DECISION_COUNCIL.md` only for strategic decisions with genuine uncertainty, such as product direction, pricing, offer design, or major workflow architecture.

Do not use Decision Council to avoid making a normal implementation decision. Do not run the full council just to create certainty for a narrow PR. If the task is already scoped as implementation or review, use the relevant targeted reviewers instead.

## Prompt Review
Before implementation, the council reviews the prompt for:
- Explicit current branch and target files.
- Preserve, fix, avoid, and acceptance criteria sections.
- A clear boundary between the current PR and future phases.
- Direct choices for A/B tool questions unless a third option is truly necessary.
- Evidence-based warnings only; no speculative blockers.
- Request for implementation rationale, not hidden chain of thought.
- Concept-first direction and no-reskin proof when the work targets a serious new mini-site or preset.
- Reference capture and skill/resource usage proof when the task is taste-sensitive, motion-led, asset-led, or component-led.

If the prompt is broad, the Prompt Hygiene Reviewer must rewrite it into a small scoped task before a builder starts.

## PR Review
For PRs, council reviewers inspect the diff, built output, and visual proof. Each reviewer returns:
- `decision`: merge, fix, or freeze.
- `evidence`: files, screenshots, commands, viewport sizes, or interaction paths checked.
- `risks`: known failures and unknown risks found beyond the checklist.
- `required fixes`: only blocking items, stated as small actionable changes.
- `skill/resource usage`: which real installed skill, plugin resource, browser reference, or MCP resource was used, why it mattered, what output or citation proved it, and what decision it influenced.

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
- Same-template reskins presented as premium or final work.
- 21st.dev or MotionSites browser references described as installed skills.
- Component copying without license, dependency, niche-translation, and QA proof.

## Capability Gates
For serious premium, motion-aware, client-ready, or reel-level tasks, apply `docs/CAPABILITY_TEST_GATES.md`.

The council should verify the gates, not invent the design answer. Use:

- Installed design skills for visual and motion judgment.
- Browser reference capture for 21st.dev, MotionSites, and live/local proof.
- Asset contracts and asset strategy for visual subject quality.
- QA scripts and screenshots for objective route, viewport, and interaction proof.

## Unknown-Risk Requirement
The checklist is not enough. Every reviewer must also ask: "What could fail here that is not already named?" Unknown risks may include new viewport edge cases, copy/asset semantic drift, brittle CSS assumptions, regressions in scroll behavior, or invisible conversion breakage.

## Builder / Reviewer Separation
Reviewers decide gates and requested changes. One builder implements the agreed work. The builder may explain rationale and evidence, but must not self-approve merge readiness without reviewer proof.
