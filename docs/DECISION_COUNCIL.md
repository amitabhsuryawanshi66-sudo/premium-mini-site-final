# Decision Council

Decision Council is a compact strategy process for moments where the repo needs a real choice, not another implementation checklist. It adapts a multi-perspective council pattern for product direction, pricing, offer design, workflow architecture, and other high-stakes decisions with genuine uncertainty.

It does not replace the repo's targeted PR reviewers. Frontend Engineering, Asset Alignment, Mobile QA, Desktop Story Track, Visual Taste, Prompt Hygiene, and Creative Director remain the primary review system for code, PRs, visual QA, and scoped implementation work.

## When To Use

Use Decision Council for:
- Product direction choices with meaningful tradeoffs.
- Pricing, packaging, or offer decisions.
- Major workflow or architecture decisions before implementation.
- Choosing between competing paths when the best next move is unclear.
- High-stakes strategy questions where several good answers are plausible.

## When Not To Use

Do not use Decision Council for:
- Factual lookup.
- Simple code fixes.
- Routine PR reviews.
- Writing or copy tasks.
- Validation after a decision is already made.
- Tiny scoped implementation work.
- Any PR where targeted repo reviewers are enough.

Decision Council must not become the default for every PR. If the task is already scoped, use the relevant targeted reviewers and execute.

## Difference From PR Reviewers

Targeted repo reviewers check implementation safety, visual quality, asset fit, mobile behavior, Story Track proof, and prompt scope. They answer: "Is this change safe and ready?"

Decision Council helps decide what path to take before the work is scoped. It answers: "What should we choose, and what should we do first?"

## Compact Process

1. Frame the question neutrally.
   - Remove leading language, hidden preferences, and premature solutions.
   - State the decision, constraints, stakes, and what will count as a good outcome.
2. Run five advisor perspectives.
   - **Contrarian**: Challenges the assumed direction and names what could be wrong.
   - **First Principles**: Reduces the choice to goals, constraints, and causal mechanics.
   - **Expansionist**: Explores larger possibilities and upside paths.
   - **Outsider**: Brings a fresh market, user, or adjacent-domain view.
   - **Executor**: Focuses on feasibility, sequence, cost, and the next shippable move.
3. Peer-review responses.
   - Compare the advisor views without defending identities.
   - Surface agreement, contradictions, blind spots, and overreach.
4. Synthesize a chairman verdict.
   - Choose a direction or say what evidence is missing.
   - Keep the verdict grounded in repo goals and current constraints.
5. Output one concrete next step.
   - Name a single action that can be started immediately.
   - Avoid turning the verdict into a broad roadmap unless the user asks.

## Output Format

Use this format:

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

Keep the output concise. The process should improve judgment, not add ceremony.
