# Design System

## Direction

The interface behaves like a pedagogical drafting table. Learning objectives are plans under construction, SMART criteria are inspection layers, and feedback appears as precise annotations rather than decorative rewards.

## Color

- Navy ink `#082653`: primary text, controls, and high-emphasis fields.
- Deep navy `#041a3c`: footer and maximum-contrast surfaces.
- Technical paper `#edf4fb`: instructional canvas and working surfaces.
- Review orange `#ef7600`: primary action and high-energy emphasis.
- Accessible brown-orange `#9b4900`: orange-role text on light surfaces.
- Layer colors: blue `#286ec4`, green `#21845e`, orange `#ef7600`, purple `#7544a6`, and gold `#c78b00`.
- Lines `#aabbd0`: measurements, dividers, and drafting structure.

Color identifies a SMART layer, but every state also uses labels, letters, borders, or position so meaning never relies on hue alone.

## Typography

- Display outline: Londrina Outline, used only for the opening statement and oversized SMART stencils.
- Structural headings: Barlow Condensed at weights 600-800, uppercase where it behaves as a drafting label.
- Body and controls: Atkinson Hyperlegible at weights 400 and 700.
- Body copy stays below 70 characters per line where practical.

## Layout

- Desktop uses an asymmetric drafting field: layer controls, one dominant statement, and a clipped annotation sheet.
- Content sections alternate dense working boards with quieter explanatory passages.
- Mobile linearizes every board while preserving the five-layer control as a compact horizontal strip.
- Major spacing uses a fluid range from `4.5rem` to `8rem`; tightly related controls stay within `0.5rem` to `1.5rem`.

## Components

- Layer tabs: white drafting slips with an angled corner and criterion-colored registration edge.
- Annotation sheet: clipped white page with an explicit live-region update.
- Working board: bordered technical-paper field used for comparisons and objective analysis.
- SMART stencil: oversized outlined letters linked to a single dark explanation field.
- Feedback: semantic success or correction field with text heading, not color alone.
- Progress route: compact numbered ticks that expose current and completed states.

## Motion

Motion is restrained to instrument-like state changes: layer slips translate slightly, the route progress fills, and live content switches without staged entrance effects. Reduced-motion preferences disable nonessential transitions and smooth scrolling.

## Accessibility

- High-contrast content, visible focus rings, skip link, semantic landmarks, and keyboard-native buttons.
- Tab relationships expose `aria-selected`; changing explanations use polite live regions.
- Quiz progress uses the progressbar role and numeric values.
- Touch targets remain usable at mobile widths and no horizontal scrolling is introduced.
