# Lead growth — implementation plan

Date: 8 October 2026
Based on: [`reports/Lead growth audit for Learn With Smile.md`](./reports/Lead%20growth%20audit%20for%20Learn%20With%20Smile.md) and the owner's answers below.

## What the owner told us

| Topic | Answer | What it changes |
|---|---|---|
| Target | **100 genuinely interested people per day** | Organic search alone cannot get there; paid Click-to-WhatsApp and Google Ads become part of the plan (Phase 3) |
| Today | **About 5–10 enquiries a day**, peaking at the end or beginning of the month | This is the baseline every phase is measured against |
| Kolkata office | **Receives people — offline classes run there** | The Google Business Profile is legitimate. The site is wrong in 27 places that say "no walk-in campus / not a teaching floor". Kolkata offline becomes a new product page and a local lead source |
| ₹199 demo | **No refund — the fee is adjusted against the course fee** | Keep ₹199, name it once, say "adjusted in your first month's fee". The refunds page currently says the demo fee *is* refunded if cancelled before the session — needs a decision (Q3) |
| Free consultation | **A group slot; a scheduler link is sent on WhatsApp** | Rewrite the consultation copy to say exactly that. Remove "see the course before you pay" |
| Replies | **We will use WhatsApp AI, and we reply beyond 09:00–12:00** | The "replies 09:00–12:00 IST" line (46 places, 21 files) undersells you; replace it with the real hours |
| Proof | **Later** | Phase 4. Until then, do not add new unverifiable claims |
| Batches | **Afternoon, evening and night; flexible; no need to publish** | Remove "morning batches" promises (45 places). Say "afternoon, evening and night — we fit your schedule" |
| Capacity | **Unlimited — freelance teachers** | No capacity cap on the plan. Copy built around one named teacher (45 places) should say "a trained teacher" and keep Sunanda Dey as founder/lead educator |

## The honest arithmetic for 100 a day

There are no traffic numbers yet, so these are illustrations to be replaced after Phase 1 counting starts.

- If a better funnel converts **about 2% of visits into a qualified lead** (4% tap WhatsApp × 80% send × 65% qualify — the report's "Scenario B"), **100 qualified leads a day needs roughly 4,800 visits a day** (≈145,000 a month).
- A small education site does not reach that from organic search and AI citations in months. The realistic mix is:
  1. **Fix conversion first** (Phase 1) — doubles the value of every visit you already get.
  2. **Kolkata local + Google Business Profile** (Phase 2) — the fastest new organic source, because you have a real classroom.
  3. **Paid Click-to-WhatsApp ads (Meta) and Google Search ads** (Phase 3) — the only lever that scales to 100/day on a known timeline. Vendor-reported cost per WhatsApp lead in India is roughly **₹80–₹400**, so 100 leads a day would cost about **₹8,000–₹40,000 a day** before qualification. Treat that as a planning range, not a quote; the real number comes from a small test.
  4. **AI visibility and authority** (Phases 2–4) — compounds slowly: third-party lists, reviews, YouTube.

## Phase 0 — owner actions, this week (no code)

| # | Action | Who | Done when |
|---|---|---|---|
| 0.1 | **WhatsApp Business setup**: turn on Business AI (if available on your account) and train it on fees, demo, consultation, batches, Kolkata offline; greeting message; away message for the hours nobody replies; labels: *New · Interested · Consult booked · Demo paid · Enrolled · Not a fit · Source:<x>* | Owner | AI answers the 10 common questions correctly in a test chat |
| 0.2 | **Qualifying questions** in the greeting/AI flow: goal (job/interview/daily/business), level, online or Kolkata offline, preferred time (afternoon/evening/night), age 15+, "how did you hear about us?" | Owner | Every new chat gets them automatically |
| 0.3 | **Consultation scheduler link** ready to paste (Calendly / Google Calendar booking page) | Owner | Link works on mobile |
| 0.4 | **Daily tally** (a sheet): chats, interested, consults booked, demos paid, enrolled, source answer | Owner | Two weeks of numbers = the real baseline |
| 0.5 | **Google Search Console + Bing Webmaster Tools**: confirm access, submit `sitemap.xml`, request indexing for `/`, the four course pages, `/free-consultation`, `/spoken-english-classes-kolkata` | Owner (Claude can guide) | Sitemap "Success" in both |
| 0.6 | **Google Business Profile**: real Kolkata address visible, staffed hours, primary category (check "English language school" / "Language school" in the dashboard), services with ₹ prices for online *and* offline, WhatsApp/booking link, 10+ real photos of the classroom | Owner | Profile shows address, hours, services |

## Phase 1 — "fix the funnel" (code; one PR; ~3–5 working days)

Everything here is in the repo and can be built and verified with the existing smoke test.

**1A. Make the site tell the truth about how you operate** (largest copy change)
- One source of truth in `src/lib/` for reply hours, batch timings and teacher model; replace the 46 hard-coded "09:00–12:00 IST" lines, 45 "morning" promises and 45 one-teacher phrases with it. Prices stay as they are.
- Replace the 27 "no walk-in campus / office by appointment / not a teaching floor" lines with "online across India, and offline classes in Kolkata".
- Update `llms.txt` / `llms.json` / `chatgpt-actions.md` facts, Organization schema (`hasOfferCatalog`, opening hours, address), and FAQ answers to match.

**1B. Two clear actions everywhere, one name for the demo**
- Hero, nav, mobile dock, page band: **"Chat on WhatsApp"** (question) and **"Book a free group consultation"** (prefill asks for the scheduler link). Today both open the identical chat (`src/lib/whatsapp.ts`).
- Demo: one name everywhere — **"₹199 Demo Class — adjusted in your first month's fee"** — and add it to the course pages and the dock's secondary slot.
- Rewrite `src/lib/consultation.ts` + `ConsultOffer.tsx`: "a free group consultation slot — we send you a booking link on WhatsApp; it is advice, not a class; to see a class, book the ₹199 demo".

**1C. Every chat carries its source**
- Page-aware first message on every WhatsApp link, with a short readable tag — e.g. *"Hi, I'm interested in Business English (from the Business English page)."* — so the first line of each chat shows where it came from. Fix the garbled floating-button message (`WhatsAppFab.tsx`). Add a WhatsApp CTA to the 404 page.
- Desktop: show a QR code next to the WhatsApp button on large screens (scan with phone), since wa.me on desktop needs WhatsApp Web.

**1D. Credibility slips found in the code**
- "8 in the room" → "about 6"; "Live, every hour"; the "…in 30 Days" blog title; "2,000+" vs "1,000+" words; "IDP or British Council" in six files; retired cities still listed in the homepage FAQ; "both, if you need it… we do not offer career counselling".
- Cookie bar: stop asking consent for Google Analytics that is not installed (or keep it only if 1E adds a counter that needs it — Umami/Plausible do not).
- Reviews: add a **"Read our Google reviews"** link next to the 5.0★ figure with an "as of" date.

**1E. Counting without tracking pixels** (needs Q5)
- Read the existing `data-cta-goal` / `data-cta-location` attributes with a cookieless counter (Umami Cloud has a free tier; Plausible is paid). Result: WhatsApp taps per page and per button, and AI referrers (chatgpt.com, perplexity.ai, copilot, gemini) grouped — no cookies, no personal data, no consent banner needed for it.

**Verification:** build + prerender assertions, the deploy workflow's checks, the 57-check browser smoke test (extended to check every WhatsApp prefill is page-specific and none is garbled), Lighthouse.

## Phase 2 — local and authority (weeks 2–6)

| # | Change | Type |
|---|---|---|
| 2.1 | **Kolkata offline page**: turn `/spoken-english-classes-kolkata` into "Spoken English classes in Kolkata — offline at [area] and online", with address, map, photos, offline timings/fees, directions, and `LocalBusiness`/`EducationalOrganization` location schema matching the GBP exactly | Site |
| 2.2 | **GBP routine**: weekly post, new photos, ask every enrolled learner for a review (no incentives, not only happy ones, no naming the teacher — Google's 2026 rules), reply to every review | Owner |
| 2.3 | **Free, identical listings**: Justdial, Sulekha, UrbanPro (free profile, don't buy leads yet), Bing Places, LinkedIn company page; add each to `SAME_AS` in `src/lib/seo.ts`; domain email `@learnwithsmile.app` | Owner + site |
| 2.4 | **Third-party "best of" outreach**: pitch the "live small batches for adults under ₹2,000 + Kolkata offline" niche to Indian education blogs and Kolkata media with verifiable facts | Owner (Claude can draft pitches and the target list) |
| 2.5 | **Monthly AI prompt check**: ~20 English/Hinglish prompts in ChatGPT, Gemini, Copilot, Perplexity, AI Mode; log who gets named and which sources are cited | Owner or Claude |
| 2.6 | **Bing AI Performance + Search Console Generative AI report** reviewed monthly | Owner |

## Phase 3 — paid scale toward 100 a day (start small in week 3–4, then scale)

| # | Change |
|---|---|
| 3.1 | **Click-to-WhatsApp ads (Meta: Instagram + Facebook)**: English, Hindi and Bengali creatives; audiences: working professionals, freshers, homemakers; Kolkata radius campaign for offline. Optimise for *qualified chats* (labels), not message count. Start ₹1,000–₹2,000/day for two weeks to learn the real cost per qualified lead |
| 3.2 | **Google Search ads** on high-intent terms ("spoken english classes online", "spoken english classes near me" in Kolkata, "english speaking course for working professionals") pointing at the matching course/Kolkata pages |
| 3.3 | **Ad landing pages**: one per audience, built on the existing course/guide components, each with its own WhatsApp tag so ad leads are counted separately |
| 3.4 | **Scale rule**: raise budget only while cost per *enrolment* stays below one month's fee × your target payback |

## Phase 4 — proof and compounding channels (month 2 onward)

- Proof when ready: consented learner stories with dates, teacher profiles (freelance teachers included), a 30–60 second class clip, Google review count kept current.
- YouTube: short lessons with Hindi/Bengali explanations and the exact brand name.
- A free 60-second speaking check over WhatsApp (voice note in, three fixes out) — no adult competitor offers one.
- Helpful, disclosed answers on Reddit/Quora.

## Open questions before Phase 1 starts

| # | Question | Needed for |
|---|---|---|
| Q1 | **Kolkata offline**: exact address/area, which courses run offline, offline fees (same as online?), batch size, days and timings | 1A, 2.1, GBP |
| Q2 | **Reply hours to publish** — e.g. "We reply 9am–10pm IST, every day"? (or "within a few hours") | 1A |
| Q3 | **Demo cancellation**: `/refunds` and `/terms` currently say the ₹199 is refunded if cancelled *before* the session. Change to "not refundable; adjusted against the fee", or keep the pre-session refund? (Check with your legal adviser — consumer rules apply) | 1B, policy pages |
| Q4 | **Teacher wording**: OK to say "a team of trained teachers, led by founder-educator Sunanda Dey"? Does a batch keep the same teacher? | 1A |
| Q5 | **Counter**: OK to add Umami (free, cookieless) for WhatsApp-tap counting? | 1E, cookie bar |
| Q6 | **Google review link** (the "read reviews" Maps URL) | 1D |
| Q7 | **Ad budget** you are willing to test in Phase 3 (per day), and who will create ad creatives | Phase 3 |

Once Q1–Q6 are answered, Phase 1 can be built and pushed as one change; Phase 2's Kolkata page follows as soon as Q1 is answered.
