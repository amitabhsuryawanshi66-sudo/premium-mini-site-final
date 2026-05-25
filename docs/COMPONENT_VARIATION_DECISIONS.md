# Component Variation Decisions: Obsidian Ink

## Considered Directions

### 1. The "Minimal Glass" Direction (Rejected)
- **Concept:** Lean into ultra-refined transparency, blur, and thin borders.
- **Why Rejected:** Still felt too much like a "SaaS dashboard" or a tech template. Failed the **Taste Skill** gate for a premium tattoo studio.
- **Visual Failure:** No physical weight; lacked the "ink and skin" grit required for a tattoo brand.

### 2. The "Dark Editorial" Direction (Rejected)
- **Concept:** Standard high-end fashion layout with large images and serif typography.
- **Why Rejected:** Felt like a portfolio for a photographer rather than a tattoo studio. Lacked technical authority.
- **Visual Failure:** Too "soft"; didn't communicate the precision/sterility of the Obsidian process.

### 3. The "Technical Artifact" Direction (Selected)
- **Concept:** A "blueprint" or "folder" aesthetic. UI elements look like physical artifacts (reference slips, placement maps, material plates) on a studio table.
- **Why Selected:** Immediately establishes technical authority and a "concierge" feeling. It feels authored and bespoke—the core of the Obsidian brand.
- **Winning Elements:**
    - SVG-driven `PlacementMap` for anatomical context.
    - `ReferenceSlip` for appointment validation.
    - Grayscale `MaterialPlate` for process imagery.

## Asset Priority Strategy for Future Mini-Sites
To ensure pitch-worthy reliability in generated sites, follow this visual priority:
1. **Client-Provided Images:** High-authority primary source.
2. **Generated Bespoke Visuals:** Technical artifacts or AI-generated brand imagery.
3. **Licensed Free Stock:** Only if 100% semantically aligned with the service claim.
4. **Designed Semantic Artifact Plates:** Deterministic fallbacks that guarantee visual quality and brand alignment (e.g., designed SVG stencil plates).

**Rule:** Never use random stock imagery for keyword matching. If no perfect semantic match exists, default to an `artifact` or `hybrid` plate.

## Implemented Variation
The **Technical Artifact Engine** was chosen as the primary design system. It uses a combination of high-contrast typography, procedural noise, and clinical layout structures to ensure the site feels "pitch-worthy" within 3 seconds.
