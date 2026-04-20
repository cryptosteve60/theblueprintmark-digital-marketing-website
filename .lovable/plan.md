
## Plan: New Logo + Cleaner, Uniform Header

### 1. New logo (replaces uploaded PNG)
Build the logo **inline as SVG** so it scales crisply, matches the brand blue `#1d6bff`, and stays sharp on retina/mobile. Concept: a stylized **"BM" monogram inside a hexagonal blueprint badge** with a subtle corner-clip — echoing the existing `clip-path` button language and the "blueprint/tech" identity.

```text
  ┌──────┐
  │ ╱B M ╲│    hex badge, blue stroke, dark fill
  └──────┘    + small accent dot (matches tag dots)
```

- Fixed render size: **28×28px** (desktop) / **26×26px** (mobile)
- No external image request → faster header paint, no resolution issues
- Tucked next to wordmark with consistent vertical alignment

### 2. Uniform header alignment (desktop)
Currently the logo, nav links, and CTA button each sit at slightly different baselines because they use mixed font sizes, padding, and a clip-path button that visually "floats." Fix by:

- Single flex row, `align-items: center`, fixed header height **64px**
- All interactive items share the **same vertical center line**
- Nav links: uniform `0.72rem` DM Mono, `.15em` tracking, equal `0.5rem` vertical padding (creates an even hit-area baseline)
- CTA button: same height as nav link hit-area (≈ 36px), same font size as links → button no longer looks taller/heavier than the rest
- Consistent gap rhythm: logo ⇢ `auto` ⇢ nav (gap 2rem) ⇢ CTA (gap 2rem)
- Remove the slight color/border-bottom shift on active links that causes a 1px jump; use a constant 1px transparent border instead (already there, just verify)

### 3. Mobile optimization
- Header height stays 64px so nothing reflows
- Logo + wordmark scale down: SVG 26px, wordmark `1.2rem`
- Hamburger button gets a proper **44×44px tap target** (currently ~22px icon with no padding — fails accessibility)
- Hamburger icon vertically centered with the logo
- Inside the mobile sheet: links and both CTAs already stack — keep, but unify font size with desktop nav (`0.72rem`) and ensure both buttons are exactly the same height (`44px`) for a clean stacked look

### 4. Quick consistency pass across the rest of the site
While "looking over everything," I'll verify:
- Hero CTA button still aligns with the new header rhythm (no change needed unless misaligned)
- Footer/section spacing untouched (out of scope unless visibly broken)
- No leftover references to the old uploaded PNG path

### Files to edit
- `src/components/Navigation.tsx` — replace `<img>` with inline SVG logo, normalize sizes/paddings, enlarge mobile hamburger tap target, unify mobile sheet button heights

### Out of scope
- No changes to color tokens, fonts, or page content
- No new dependencies
