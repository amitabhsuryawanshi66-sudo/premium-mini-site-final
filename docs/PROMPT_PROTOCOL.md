# Prompt Protocol

Prompts for this repo must be small, explicit, and reviewable. The goal is controlled progress, not broad taste transfer.

## Required Shape
Every implementation prompt should include:
- **Branch**: current branch name.
- **Goal**: one concrete outcome.
- **Concept**: the niche-specific design direction before implementation, especially for new mini-sites or major visual work.
- **Preserve**: files, sections, behaviors, or visual decisions that must stay intact.
- **Fix**: the specific defect or improvement to make.
- **Avoid**: exclusions such as redesigns, dependency changes, stock imagery, or future-phase work.
- **Acceptance criteria**: build, viewports, visual proof, CTA paths, and any role-specific gates.

## Tool Questions
When a tool or reviewer asks an A/B question, choose directly unless an outside option is truly necessary. Do not turn simple choices into speculative debates.

## Evidence-Based Warnings
Avoid speculative warnings. Raise a risk only when it is visible in the repo, supported by a screenshot/build result, or directly implied by the requested change.

## Keep Future Phases Out
Do not mix future-phase ideas into the current PR. Archive them as notes only if useful; do not implement them unless they are in scope.

## Concept-First And No-Reskin Rule
A serious new mini-site or preset prompt must state the concept, audience, conversion goal, and why the section architecture fits the niche. A palette, typography, and copy swap is not enough.

The prompt must name what changes beyond skin-level styling:
- section architecture or content model
- asset strategy
- reference-backed component or motion pattern
- signature interaction
- conversion path
- mobile proof requirements

If the task is intentionally a base checkpoint only, say that plainly and do not describe it as final or sellable quality.

## Rationale, Not Hidden Thinking
Ask builders for implementation rationale, tradeoffs, files changed, and proof. Do not ask for hidden chain of thought.

## Scope Discipline
Keep the current branch and task scope explicit. A valid prompt names what is allowed to change and what must not change.

## Council Selection
Prompts should say whether the task needs a targeted reviewer pass, a Decision Council pass, both, or neither. Use targeted reviewers for PR/code work and `docs/DECISION_COUNCIL.md` for strategic choices with genuine uncertainty. Do not add a Decision Council pass to narrow implementation work unless the strategic choice is still unresolved.

## Design Skills And References
Before visual identity or taste-sensitive implementation, prompts should say whether approved Codex-native design skills, 21st.dev browser reference, or both are required. Follow `docs/REAL_DESIGN_SKILLS_INSTALL_PLAN.md`; do not treat repo-local approximations or 21st.dev as installed native skills.

Use `docs/SKILL_USAGE_PROTOCOL.md` for skill usage proof. Use `docs/REFERENCE_CAPTURE_PROTOCOL.md` before copying or adapting external components, motion, or section patterns.

## Component Copy Policy
Component copying or close adaptation is allowed only when the source is licensed or rewritten from observation, scoped to the task, dependency-safe, translated to the niche, and proven in QA. Reject random pasted components, style mismatches, dependency bloat, and component dumps.

## Capability Gates
Serious reel-level capability work must include `docs/CAPABILITY_TEST_GATES.md` in acceptance criteria. Clean but boring output fails when the task asks for premium, motion-aware, client-ready, or reel-level work.

## Banned Prompt Pattern
Do not use "make it better", "premium it up", "improve the design", or similar open-ended prompts without specific gates. Rewrite them into scoped requests before implementation.
