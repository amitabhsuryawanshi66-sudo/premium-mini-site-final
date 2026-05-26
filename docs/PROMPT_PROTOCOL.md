# Prompt Protocol

Prompts for this repo must be small, explicit, and reviewable. The goal is controlled progress, not broad taste transfer.

## Required Shape
Every implementation prompt should include:
- **Branch**: current branch name.
- **Goal**: one concrete outcome.
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

## Rationale, Not Hidden Thinking
Ask builders for implementation rationale, tradeoffs, files changed, and proof. Do not ask for hidden chain of thought.

## Scope Discipline
Keep the current branch and task scope explicit. A valid prompt names what is allowed to change and what must not change.

## Banned Prompt Pattern
Do not use "make it better", "premium it up", "improve the design", or similar open-ended prompts without specific gates. Rewrite them into scoped requests before implementation.
