## Goal

Make the homepage feel catchier and more polished on mobile (≤640px). Desktop layout stays unchanged.

## Scope

Only `src/routes/index.tsx` and the small `ui-bits`/`SnapshotCard` styles already in the file. No new images, no new routes, no copy rewrites beyond shortening for mobile.

## Changes

### 1. Hero — make it pop on mobile
- Show `SnapshotCard` on mobile too (remove `hidden lg:block`); render it BELOW the CTAs in a compact scale (`scale-[0.92]`) so it sits above the fold on tall phones and acts as a visual hook.
- Tighten headline on mobile: `text-[28px] leading-[1.1]` at base, current `md:text-5xl` kept.
- Make primary CTA full-width on mobile (`w-full sm:w-auto`) with a subtle pulse ring on the WhatsApp button to draw the tap.
- Trust-badge chips: switch to a horizontal scroll row on mobile (`flex-nowrap overflow-x-auto snap-x` with hidden scrollbar) instead of wrapping into 3 lines — feels modern and saves vertical space.
- Eyebrow: add a tiny live green dot before "7 Years · Kolkata & Pan-India".

### 2. Snapshot card — mobile-friendly
- Reduce padding (`p-4 sm:p-5`), shrink the 4.9★ sticker to `h-14 w-14` on mobile, and cap card width `max-w-[340px] mx-auto` so it centers cleanly on phones.

### 3. Stats band
- Currently `grid-cols-2 md:grid-cols-4 gap-8` — on mobile the `gap-8` creates a tall block. Use `gap-5 sm:gap-8` and add a faint divider grid via `divide-x divide-cream/10` so the four stats feel like a single connected ribbon, not a stack.
- Add a subtle entrance: numbers get `text-3xl sm:text-4xl` (down from the existing larger size) so 2-column mobile fits without wrapping "Max 6 · 1:1 Option".

### 4. Pricing cards on mobile
- Stack order: put the highlighted "1:1 Personalised" (brand-deep card) FIRST on mobile via `order-first md:order-none`, so the eye-catching dark card is the first thing users see when they scroll into pricing.
- Reduce card padding to `p-5 sm:p-6` and price size to `text-2xl sm:text-3xl` so the card height is friendlier on phones.

### 5. Section rhythm
- Replace `section` default vertical padding for the first few mobile sections by adding `py-12 md:py-20` overrides where currently `py-16 md:py-24` (Story band, Numbers). Keeps mobile from feeling sluggish.
- Add `scroll-mt-16` to `#pricing` so the in-page anchor lands below the sticky header.

### 6. Sticky mobile WhatsApp bar (small but catchy)
- Add a thin sticky bottom bar visible only on mobile (`sm:hidden`) containing a single WhatsApp CTA + "Free demo" label. This is the highest-conversion mobile pattern for Indian audiences. Uses existing `WaButton` with `variant="wa"`; positioned `fixed bottom-3 inset-x-3 z-40 rounded-full shadow-lg`.

## Out of scope

- No copy rewrites beyond the eyebrow dot.
- No changes to testimonials, tracks, how-it-works, or footer.
- No new assets, no design tokens added.

## Verification

After build, open the preview at 390×844 and 360×800, confirm:
- Snapshot card visible without scrolling past CTAs.
- Trust chips scroll horizontally, no wrap pile.
- Sticky WhatsApp bar appears above content.
- Pricing dark card is first on mobile.
- Stats fit on one row of 2 without text wrap.
