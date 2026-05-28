## Scope

Content + small UI pass. No routing or stack changes.

## 1. Homepage (`src/routes/index.tsx`)

- Replace any "Admission ₹500" pricing pill with **"Starts ₹999/month · Monthly EMI"**. Keep admission-fee mention only on course pages.
- Shrink the Google Maps + business placeholder section: convert from full-width band to a compact 2-column card (max-width ~5xl, map height 220px instead of 400px, single CTA row).
- Add an "Always Online · Live · Flexible Timings" hero strip and a dedicated "How Online Live Works" 3-step block (Pick a slot → Join Zoom/Meet → 1:1 feedback every 2 weeks).

## 2. Sitewide content rewrite — "Online Live + Flexible Schedule"

Pages touched: `index.tsx`, `english-career.tsx`, `excel-data.tsx`, `about-us.tsx`, `why-us.tsx`, `success-stories.tsx`, `book-free-demo.tsx`, `blog.tsx`, `CoursePage.tsx`, all `course-*.tsx` (via `src/lib/courses.ts`).

Inject consistent messaging on every page:
- "100% Online Live · Pan-India · Based in Kolkata"
- "Flexible time slots — morning, evening, weekend batches; reschedule anytime"
- "Max 6 learners per batch OR 1:1"
- "Monthly EMI · ₹500 admission (course pages only)"
- "Customised curriculum · 2 free 1:1 feedback sessions every month"
- "Extend classes anytime with monthly instalments"

Rewrite hero taglines, section subtitles, and CTAs to lead with online-live + flexibility. No mention of physical batches outside the small map card on the homepage.

## 3. Remove chat-bubble emoji from "I Want This Result" button

In `TestimonialSlider.tsx` the CTA renders both a chat icon and a 💬 / 🗨 emoji. Remove the emoji; keep the single `Icon name="chat"` (or switch to `whatsapp` brand icon for consistency).

## 4. Founder page — add Soumyakanta Bera (`src/routes/founder.tsx`)

Restructure to a two-founder layout:

**Sunanda Dey — Co-Founder & Lead Educator**
- MSc Design of Sustainable Tourism Systems (ongoing)
- 7+ years teaching English & Career Development
- 2 years international & luxury tourism experience
- Teaches: Spoken English, IELTS, Business English, Interview Prep, Career Counselling

**Soumyakanta Bera — Co-Founder & Data/Quant Mentor**
- MSc Finance & Risk Management
- Passionate hobbyist-turned-mentor; helps people around him level up at work
- Teaches: Excel, Power BI, Python, R, MATLAB, Finance Excel, Data Analytics
- Academic + applied background in data, business, coding

Each gets: portrait image, short bio, "What I promise" bullets, WhatsApp CTA. Generate one new portrait image for Soumyakanta (Indian male educator at laptop) via imagegen → `src/assets/founder-soumya.jpg`. Update `IMG` in `src/lib/images.ts`.

## 5. Excel & Data — comprehensive curricula + 2 projects per course

In `src/lib/courses.ts`, expand `modules[]` for these 9 courses:
`ms-office`, `master-excel`, `finance-excel`, `python`, `power-bi`, `r-rstudio`, `matlab`, `tableau`, `data-accelerator`.

For each:
- Increase modules from ~5 to **8–10 modules**, each with 5–7 specific topics (tools, functions, real techniques — e.g. Power BI: "DAX time-intelligence: SAMEPERIODLASTYEAR, DATESYTD, rolling 12-month").
- Add a new `projects: { title, brief, deliverable }[]` field with **exactly 2 capstone projects per course** (e.g. Python → "Zomato Bangalore restaurant EDA" + "Nifty 50 returns analyser").
- Update `CoursePage.tsx` to render a "Capstone Projects" section between Curriculum and Testimonials, using the new `projects` field.

Project examples (India-context):
- Master Excel: Kirana store monthly P&L dashboard; HR attrition tracker
- Finance Excel: SIP & loan EMI calculator; 3-statement model for an Indian SME
- Power BI: Swiggy orders dashboard; sales pipeline KPI report
- Python: Zomato EDA; Nifty 50 returns analyser
- R: IPL batting performance analysis; insurance claims regression
- Tableau: India census visualisation; e-commerce funnel
- MATLAB: signal-processing demo; portfolio optimisation
- MS Office: business report + mail-merge campaign; pitch deck
- Data Accelerator: end-to-end Excel→SQL→Power BI sales analytics; Python ML churn model

## 6. Visibility/contrast — leave as-is unless a touched section regresses.

## Technical notes

- `CourseData` type in `CoursePage.tsx` gains optional `projects?: { title: string; brief: string; deliverable: string }[]`.
- Render `projects` only when present (backwards-compatible for English/Career courses).
- Imagegen call: 1 new portrait, premium tier, saved to `src/assets/founder-soumya.jpg`, imported in `images.ts`.
- No DB, no routes, no new packages.

## Out of scope

- Visual redesign of existing components.
- Adding/removing courses.
- Logo changes.
