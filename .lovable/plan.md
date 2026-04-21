

## Plan: Site-Wide Functionality & Consistency Audit

I reviewed every page and found **5 categories of issues** that break consistency or functionality. None are crashes — but several show stale data that contradicts what we already updated, and a few buttons go nowhere.

### 1. Pricing mismatch — `/pricing` page still shows OLD prices

The homepage `PricingSection` shows `$799 / $1,499 / $3,499` (the source of truth), but `Pricing.tsx` still shows `$599 / $1,299 / $2,999` with the old non-AI feature lists. Visitors clicking "Pricing" in the nav see different numbers than the homepage.

**Fix:** Sync `Pricing.tsx` plans, descriptions, features, and "Additional Services" list to match `PricingSection.tsx`. Standardize to AI-positioned copy.

### 2. Stale "$50M+" and "500+" stats still living in `About.tsx`

The big metric cards were updated to `$8M+` / `100+`, but the **"Why Choose BluePrintMark"** section at the bottom (lines 280) still says:
- `"500+ successful client partnerships"`
- `"$50M+ revenue generated"`

**Fix:** Update those two bullet points to `100+` and `$8M+`.

### 3. Old founder name "Sarah Chen" still appears in testimonials

We renamed the founder to **Dwight Wilson**, but `CaseStudies.tsx` still has a testimonial signed `"Sarah Chen, CEO"` (line 23) for TechStart Solutions. Same for `Consultation.tsx` line 48. These read as if Sarah Chen is a client, which is fine in `CaseStudies.tsx` (different person, customer testimonial) BUT confusing on a site whose CEO was just Sarah Chen.

**Fix:** Rename the `CaseStudies.tsx` and `Consultation.tsx` "Sarah Chen" testimonial author to a different client name (e.g., **Rebecca Lin**) to avoid confusion with the former founder name.

### 4. Services page pricing still shows pre-update numbers

`Services.tsx` advertises `Starting at $599/month` for several service cards. Cheapest package is now `$799` (Starter). Update to `Starting at $799/month` so individual service entry points don't undercut the package pricing visitors see on Pricing.

**Fix:** Bump the four `$599` mentions on Service cards to `$799`.

### 5. Dead buttons in `CaseStudies.tsx`

The **"View Full Case Study"** button (line 242) has no `onClick` and no `Link` — it does nothing when clicked. Since there are no individual case study pages, this is a broken UI promise.

**Fix:** Either remove this button or convert it to a Link that scrolls to the consultation CTA. Cleanest is to **remove** it and keep only "Get Similar Results."

### Files to edit

- `src/pages/Pricing.tsx` — sync prices, plan descriptions, features, à la carte list to `PricingSection.tsx`
- `src/pages/About.tsx` — fix the two stale `500+` / `$50M+` bullets in the bottom "Why Choose" section
- `src/pages/CaseStudies.tsx` — rename the "Sarah Chen" testimonial author; remove broken "View Full Case Study" button
- `src/pages/Consultation.tsx` — rename the "Sarah Chen" testimonial author
- `src/pages/Services.tsx` — bump `$599` "Starting at" mentions to `$799`

### Out of scope

- No layout/design changes
- No new pages, new components, or new dependencies
- Hero, Navigation, ContactSection — already consistent, no changes

