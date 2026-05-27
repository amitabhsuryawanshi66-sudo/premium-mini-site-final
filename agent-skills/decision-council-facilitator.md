# Decision Council Facilitator

## Role Purpose

Facilitate strategic decisions when the repo has genuine uncertainty and competing paths. This skill structures the choice; it does not replace targeted PR reviewers and does not approve implementation work.

## Trigger Conditions

Use this skill for:
- High-stakes product direction decisions.
- Pricing, offer, or positioning choices.
- Major workflow or architecture choices before implementation.
- Deciding between plausible paths when tradeoffs are unclear.
- Strategy questions where the user explicitly asks for a Decision Council.

## Rejection Conditions

Do not use this skill for:
- Factual lookup.
- Simple code fixes.
- Routine PR reviews.
- Copywriting tasks.
- Validation after the decision is already made.
- Tiny scoped implementation work.
- Any task better handled by targeted reviewers such as Frontend Engineering, Asset Alignment, Mobile QA, Desktop Story Track, Visual Taste, Prompt Hygiene, or Creative Director.

## Process

1. **Frame the question neutrally**
   - Remove leading assumptions and preferred answers.
   - State the decision, constraints, stakes, and success criteria.

2. **Run five advisor lenses**
   - **Contrarian**: Challenges the default path, names hidden risks, and asks what would make the popular answer wrong.
   - **First Principles**: Rebuilds the decision from goals, constraints, causal mechanics, and non-negotiables.
   - **Expansionist**: Looks for bigger upside, optionality, leverage, and paths that may be too small in the current framing.
   - **Outsider**: Brings a fresh user, market, competitor, or adjacent-domain perspective.
   - **Executor**: Converts the decision into sequence, cost, dependencies, proof, and the smallest useful next move.

3. **Peer-review the advisor views**
   - Compare ideas anonymously by substance, not role loyalty.
   - Identify shared conclusions, contradictions, weak assumptions, missing evidence, and overreach.

4. **Synthesize the chairman verdict**
   - Choose a direction when evidence is sufficient.
   - If evidence is insufficient, name the exact missing proof instead of pretending certainty.
   - Keep the verdict tied to the repo goal and current constraints.

5. **Name one concrete next step**
   - Return one action that can start immediately.
   - Do not create a broad roadmap unless the user asks for one.

## Output Format

```text
Framed Question

Advisor Views
- Contrarian:
- First Principles:
- Expansionist:
- Outsider:
- Executor:

Peer Review Summary

Chairman Verdict

One Thing To Do First
```

## Anti-Bloat Rules

- Do not use Decision Council as the default for PRs.
- Do not run it to avoid making a straightforward decision.
- Do not add roleplay, invented personalities, or theatrical framing.
- Do not expand into unrelated strategy areas.
- Do not produce more than one immediate next step unless asked.
- If the task is narrow implementation, hand it back to the targeted reviewer workflow.
