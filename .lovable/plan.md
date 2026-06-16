## Goal

Bring the eye-catching "Snapshot Card" from the home hero into every course page, both category pages, and the Why Us page. Each placement gets context-appropriate, catchy info — not a copy-paste of the home version.

## Step 1 — Extract `SnapshotCard` into a reusable component

Move the inline `SnapshotCard`/`SnapRow` from `src/routes/index.tsx` into a new `src/components/SnapshotCard.tsx`. Make it a small, prop-driven component:

```ts
type SnapshotRow = { tone: "brand"|"indigo"|"coral"|"sage"; icon: ReactNode; big: string; small: string };
type SnapshotCardProps = {
  badge?: string;                  // e.g. "Live · Enrolling Now"
  eyebrow?: string;                // e.g. "Course fees start at"
  headline?: { big: string; suffix?: string }; // ₹999 + /month
  subnote?: string;                // e.g. "EMI · GST included"
  rows: SnapshotRow[];             // 3 rows
  footer?: string;                 // bottom ribbon
  sticker?: { top: string; bottom: string }; // 4.9★ Rated
};
```

Update `index.tsx` to import and use the extracted component with its existing data.

## Step 2 — Add to the shared `CoursePage` template (covers all 14 course pages)

In `src/components/CoursePage.tsx`, replace the right-column `<img midImage>` in the hero with the `SnapshotCard`, kept inside `hidden lg:block` so the hero stays light on mobile. Below the hero (full-bleed for all screens), add a compact wrapper so mobile users see it too — placed just under the hero, before the OUTCOMES section.

Card content is derived from `CourseData`:
- sticker: `4.9★ / Rated`
- badge: `Live · {data.format}` (e.g. "Live · Batch + 1:1")
- eyebrow: `Course fee starts at`
- headline: parsed from `data.price` (e.g. `₹999` + `/month`), fallback to the raw string if no rupee match
- subnote: `data.duration` + ` · GST included`
- rows (3, course-aware):
  1. brand · graduation icon · `500+` · `learners across India`
  2. indigo · calendar icon · `7 yrs` · `live teaching experience`
  3. coral · people icon · `Max 6` · `per batch · or 1:1`
- footer: `Free Demo · No Card Needed · WhatsApp in Minutes`

No per-course content changes are needed — all 14 course routes already share this template, so they all get the card automatically.

## Step 3 — Category pages (`english-career.tsx`, `excel-data.tsx`)

Read both files first to confirm hero structure, then drop the `SnapshotCard` into the hero's right column (same `hidden lg:block` desktop slot + a centered mobile copy below the hero CTAs). Category-specific content:

**English & Career** card:
- badge: `Live · English Track`
- headline: `₹999` / `/month`
- rows: `6 courses` (Spoken, IELTS, Business, Interview Prep, Speaking, Counselling) · `Max 6` per batch · `1:1` option available
- footer: `Free Demo on WhatsApp · Reply in Minutes`

**Excel, Data & AI** card:
- badge: `Live · Data & AI Track`
- headline: `₹999` / `/month`
- rows: `8 courses` (MS Office → AI Projects) · `Real datasets` from India · `Capstone projects` you can show in interviews
- footer: `Free Demo on WhatsApp · Reply in Minutes`

## Step 4 — Why Us page (`why-us.tsx`)

Read the file, then place the SnapshotCard in the hero (right column on desktop, full-width below copy on mobile) with **"why us"-flavoured** content:

- sticker: `4.9★ / Rated`
- badge: `Why 500+ chose us`
- eyebrow: `What you actually get`
- headline: `100%` / `Live`
- subnote: `No recordings-only pretending to teach`
- rows:
  1. brand · teacher icon · `Real teacher` · `every single class`
  2. indigo · refresh icon · `Reschedule` · `any class, no questions`
  3. coral · shield icon · `Refund` · `if first class doesn't impress`
- footer: `7 Years · Pan-India · WhatsApp Support 7 Days`

## Files

- New: `src/components/SnapshotCard.tsx`
- Edit: `src/routes/index.tsx` (use the extracted component)
- Edit: `src/components/CoursePage.tsx` (hero + mobile card)
- Edit: `src/routes/english-career.tsx`
- Edit: `src/routes/excel-data.tsx`
- Edit: `src/routes/why-us.tsx`

## Out of scope

- About-us, success-stories, blog, founder, book-free-demo — no card.
- No copy edits on existing sections.
- No new images or icons beyond inline SVGs already in `SnapshotCard`.

## Verification

After build, screenshot one course page (e.g. `/course-spoken-english`), `/english-career`, `/excel-data`, and `/why-us` at desktop (1280) and mobile (390) to confirm the card renders, doesn't overflow, and shows the right per-page text.
