# Emil Kowalski Design Engineering Skill

## Principles
1. **Motion with Intent**: Every animation should serve a purpose (guiding focus, explaining state change).
2. **Tactile Physics**: Use spring physics over durations for a more natural feel.
3. **Sequencing**: Stagger children to create a sense of hierarchy and flow.
4. **Reduced Motion**: Always respect `prefers-reduced-motion` media queries.

## Guidelines
- Use `framer-motion` for complex interactions.
- Avoid linear easings; use `[0.22, 1, 0.36, 1]` for smooth entry/exit.
- Spring: `stiffness: 260, damping: 20` for snappy UI; `stiffness: 100, damping: 15` for soft transitions.
- Key interactions (buttons, cards) should have a subtle scale effect on tap (`0.98` or `0.95`).
