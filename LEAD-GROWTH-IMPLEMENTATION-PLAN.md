# Lead growth — implementation plan

Date: 8 October 2026
Based on: [`reports/Lead growth audit for Learn With Smile.md`](./reports/Lead%20growth%20audit%20for%20Learn%20With%20Smile.md) and the owner's answers below.

## What the owner decided

| Topic | Decision |
|---|---|
| Target | 100 genuinely interested people per day |
| Today | About 5–10 enquiries a day, peaking at the end or beginning of the month |
| Delivery | **Online only** on the website, Kolkata included. Offline classes are not promoted |
| Replies | **10am to midnight IST, every day**; WhatsApp Business AI will also be tried |
| Free consultation | A **group slot**; the scheduler link is sent once someone messages on WhatsApp |
| Demo | **₹199 Demo Class** — an actual class. **No refund**; the fee is adjusted against the course fee on admission (within 48 hours) |
| Teachers | A **team of trained teachers led by founder Sunanda Dey**; a batch keeps the same teacher |
| Batches | About 6 learners; flexible **afternoon, evening and night** timings; capacity is not a constraint (freelance teachers) |
| Measurement | **No click counting** — attribution comes from page-named WhatsApp messages and "how did you hear about us" |
| Acquisition | **Organic only** — no paid ads for now |
| Proof | Reviews, stories and teacher credentials to be added later |

## The honest arithmetic for 100 a day

With organic only, the ceiling is set by search and AI visibility, not by the site. If a better funnel turns about 2% of visits into a qualified lead, 100 a day needs about 4,800 visits a day. A small education site reaches that over many months of authority-building (reviews, third-party lists, YouTube), not weeks. The fastest gains therefore come from: (1) converting more of today's visitors — done in Phase 1; (2) earning mentions in the places AI assistants and Google already trust — Phase 2. Re-check this target once two weeks of daily tallies exist.

## Phase 0 — owner actions (this week, no code)

| # | Action |
|---|---|
| 0.1 | **WhatsApp Business**: turn on Business AI if your account has it; greeting message; quick replies for the 10 common questions; labels *New · Interested · Consult booked · Demo paid · Enrolled · Not a fit · Source:<page>* |
| 0.2 | **Qualifying questions** in the greeting/AI: goal (job/interview/daily/business), level, preferred time (afternoon/evening/night), age 15+, "How did you hear about us?" |
| 0.3 | **Consultation scheduler link** ready to paste — every consultation button now asks for it |
| 0.4 | **Daily tally** in a sheet: chats, interested, consults booked, demos paid, enrolled, and the page named in the first message |
| 0.5 | **Search Console + Bing Webmaster Tools**: confirm access, submit `sitemap.xml`, request indexing for `/`, the four courses, `/free-consultation`, `/course-demo-session` |
| 0.6 | **Google Business Profile**: keep name, phone, hours and categories consistent with the site; add services with ₹ prices; link the website. (The profile stays eligible because the Kolkata office genuinely serves people; the website simply does not promote offline classes) |

## Phase 1 — "fix the funnel" — **done in code (8 October 2026)**

| Change | Where |
|---|---|
| Reply hours **10am–midnight IST every day** everywhere (46 places), schema opening hours 10:00–23:59, all 7 days | site-wide, `src/lib/seo.ts` |
| **Afternoon, evening and night** batches replace every "morning" promise (~45 places) | site-wide |
| **Team of trained teachers led by founder Sunanda Dey**; same teacher per batch | `/educator`, llms files, schema descriptions |
| Online-only wording; "registered office in Kolkata" instead of "not a campus" | site-wide, terms |
| **Two different WhatsApp actions**: "Chat on WhatsApp" sends a question; "Get Free Consultation" asks for the group-consultation booking link. Before, both sent the same message | `src/lib/whatsapp.ts`, `WaButton`, nav, dock, floating button, footer |
| **Every generic WhatsApp message names its page** — e.g. "(From the Business English page.)" — the source of every chat without tracking code | `src/lib/use-page-label.ts` |
| Garbled floating-button message fixed; 404 page gets a WhatsApp button | `WhatsAppFab.tsx`, `__root.tsx` |
| **₹199 Demo Class** — one name everywhere (was "Demo Session" / four labels); hero link "Book the ₹199 Demo Class — adjusted in your fee" | site-wide, `src/lib/demo-session.ts` |
| Consultation copy now matches reality: free group slot, booking link on WhatsApp, advice not a class; "see the course before you pay" removed | `src/lib/consultation.ts`, `/free-consultation` |
| **Demo fee policy**: not refunded; adjusted on admission within 48 hours (refunds, terms, FAQs, llms) | `src/content/legal.ts`, `src/lib/seo.ts`, `src/lib/llms.ts` |
| Credibility slips: "8 in the room" → "~6"; "Live, every hour"; "…in 30 Days" title; "Years, same teacher"; last "IDP or British Council" lines; retired cities in FAQs; "Both, if you need it… no career counselling" | homepage, blog, guides, FAQs |
| **"Read our Google reviews"** link beside the rating (homepage, Why Us) | `RATING.readUrl` |
| **Cookie banner removed** (it asked consent for analytics the site does not run); privacy policy now states no analytics/tracking cookies | `Layout.tsx`, `src/content/legal.ts` |

Verified: production build, the deploy workflow's crawlability checks, browser smoke test on 40 pages at desktop and mobile (all functional checks pass; About and Educator simply have no FAQ section), no new type or lint errors, and a scan of the built HTML, Markdown and AI files for every retired claim.

## Phase 2 — authority and AI visibility (weeks 2–8, organic)

| # | Action | Who |
|---|---|---|
| 2.1 | **Google reviews routine**: ask every enrolled learner (no incentives, not only happy ones, don't ask them to name a teacher — Google's 2026 rules); reply to every review | Owner |
| 2.2 | **Free, identical listings**: Justdial, Sulekha, UrbanPro (free profile, don't buy leads), Bing Places, LinkedIn company page; then add each to `SAME_AS` in `src/lib/seo.ts`; domain email `@learnwithsmile.app` | Owner + Claude |
| 2.3 | **Third-party "best of" outreach**: pitch "live small batches for adults under ₹2,000, Hindi/Bengali support" to Indian education blogs and media | Owner (Claude can draft the target list and pitches) |
| 2.4 | **Monthly AI prompt check**: ~20 English/Hinglish prompts in ChatGPT, Gemini, Copilot, Perplexity, Google AI Mode; log who is named and which sources are cited | Owner or Claude |
| 2.5 | **Search Console Generative AI report + Bing AI Performance**, monthly | Owner |

## Phase 3 — proof and compounding channels (month 2 onward)

- Proof when ready: consented learner stories with dates, teacher profiles, a 30–60 second class clip, current review count.
- YouTube: short lessons with Hindi/Bengali explanations and the exact brand name.
- A free 60-second speaking check on WhatsApp (voice note in, three fixes out) — no adult competitor offers one.
- Helpful, disclosed answers on Reddit/Quora.

## Not doing (owner decisions)

Paid ads (Click-to-WhatsApp, Google Ads), click counting/analytics, promoting offline Kolkata classes, a desktop QR code (would need a new library; wa.me already opens WhatsApp Web).
