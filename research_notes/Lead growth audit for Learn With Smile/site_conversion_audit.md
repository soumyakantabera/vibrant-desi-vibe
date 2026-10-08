# Site conversion audit: Learn With Smile (source code and built HTML)

Scope and method: I read the source in `/home/user/vibrant-desi-vibe/src` and the prerendered build in the session scratchpad (`.../scratchpad/build/dist/*.html` and the `.md` mirrors, built 8 Oct 2026 22:33). I parsed every built HTML page for `wa.me` and `tel:` links and decoded the prefilled WhatsApp text, and I read the three audit docs plus `SEO-AUDIT.md`. I could not reach the live site. "Sources" below are repo file paths. `dist/` is short for `/tmp/claude-0/-home-user-vibrant-desi-vibe/00cd6302-c164-5725-9bb0-e4d13fea3f2d/scratchpad/build/dist/`. The git clone is shallow: history only starts on 22 Sep 2026, so the audit docs are the only record for August and early September.

## 1. CTA inventory, hierarchy and offer naming

### Takeaway
The site gives the visitor three offers: a WhatsApp chat, a "Get Free Consultation" and a ₹199 "Demo Session". In practice, both main buttons send the same WhatsApp message, and the paid demo shows up under four different names. The free-consultation copy says "See the course before you pay" and "We don't sell the room until you see it", but the same page says "Not a class". That is the main clarity problem. Visitors searching for a free demo class are told, on many pages, that competitors give one and this site does not.

### Cited Findings
- **Every primary CTA is the same WhatsApp action.** `waLink()` passes every message through `withConsultAsk()`, which rewrites any prefill into "Hi, I want a free consultation for …". So "Chat on WhatsApp" and "Get Free Consultation" open the same request. `CHAT_MSG = DEMO_MSG` = "Hi, I want a free consultation for spoken English." — [src/lib/whatsapp.ts](src/lib/whatsapp.ts)
- **Homepage hero.** The first three `wa.me` links in `dist/index.html` (nav, hero "Chat on WhatsApp", hero "Get Free Consultation") all have the identical href `...text=Hi, I want a free consultation for spoken English.` — [dist/index.html](dist/index.html)
- **Sitewide mobile sticky dock.** It has two buttons, "Chat on WhatsApp" (`data-cta-goal="whatsapp_chat"`) and "Get Free Consultation" (`free_consultation`). Both are `waLink(...)` and both produce a free-consultation prefill. The desktop shows a floating WhatsApp FAB instead — [src/components/WhatsAppFab.tsx](src/components/WhatsAppFab.tsx)
- **Sitewide yellow "ConsultOffer" band on every page.** It appears above the footer, through Layout. Headline: "We don't sell the room until you see it." Hook: "Free spoken English consultation. Small batch. See the course before you pay." Buttons: "Get Free Consultation" (WhatsApp) and "See what you get" (/free-consultation) — [src/components/ConsultOffer.tsx](src/components/ConsultOffer.tsx), [src/lib/consultation.ts](src/lib/consultation.ts) lines 23–33, [src/components/Layout.tsx](src/components/Layout.tsx)
- **The ₹199 demo has four names.**
  - Homepage-only header ribbon: "Don't buy the course blind. If you join, it costs you nothing. **Book the Demo Class** ₹199 90 min · ₹0 if you enrol · 48 hrs" — [src/components/Nav.tsx](src/components/Nav.tsx) lines ~114–133.
  - Courses menu: "**Demo Session** — ₹199 · 90 min · If you join, it costs you nothing." — Nav.tsx line 57.
  - Page H1: "Demo Session". Buttons: "**Enrol for ₹199**". Breadcrumb: "See a real class" — [dist/course-demo-session.md](dist/course-demo-session.md).
  - FAQ: "Can I sit a real class before I buy a course?" — [dist/index.md](dist/index.md).
- **Where the demo is reachable.** It is not in the hero, the sticky dock or the sitewide band. The ₹199 enrol prefill appears only on `/course-demo-session` and `/english-career` (one link). Every other page offers only free-consultation prefills — decoded prefills per page, [dist/*.html](dist/)
- **Other CTA labels seen in the build.** "I Want This Result" (testimonial cards, WhatsApp), "Send Me the Syllabus" (course page, WhatsApp, free-consultation prefill), "See what you get", "What the free consultation is", "Read guide", "Call fallback: +91 96744 79949", plus "Directions" and "Review" (Google Maps) — [dist/index.html](dist/index.html), [dist/course-spoken-english.html](dist/course-spoken-english.html)
- **CTA density.** Pages carry 7–17 `wa.me` links each: home 17, course pages 13–15, guides and city pages 12–13, `/free-consultation` 12, policy pages 7. Every page except 404, the redirect stubs and `/book-free-demo` (a redirect) also has 2 `tel:` links — link count per built page, [dist/](dist/)
- **The consultation copy contradicts itself.**
  - It promises seeing the room: "See the course before you pay", "We do not take money until you have seen the room".
  - It also says "Still free. Not a class", "You do not sit a full class for free", "Not a sample of the paid hour".
  - The only way to see a class is the paid ₹199 demo, which `/free-consultation` barely mentions ("demo" appears 3 times in its mirror).
  - Source: [dist/free-consultation.md](dist/free-consultation.md); [src/lib/consultation.ts](src/lib/consultation.ts).
- **The consultation is described as a "small batch", which is confusing.** Examples: "100% free small-batch spoken English consultation… we hear each person's requirements one by one"; step 2 says "We confirm a small-batch counselling slot". So a visitor who taps WhatsApp gets a scheduled group slot, not an answer in the chat — [src/lib/consultation.ts](src/lib/consultation.ts) lines 30, 114
- **The site argues against free demo classes.** `/free-consultation` has a section "Their free session vs ours" that names competitors' free demo classes. The phrase "free demo class" appears in 30 built mirrors, mostly in the shared competitor strip ("PlanetSpark … with a free demo class for the child") — [dist/free-consultation.md](dist/free-consultation.md); grep of [dist/*.md](dist/)
- **History of the demo offer.** On 2 Sep the hero secondary CTA was "Book ₹0 Live Demo" and the nav said "₹0 Demo on WhatsApp". The doc calls the ₹0 demo "a real ₹0 class" and "the strongest conversion proof". No "₹0 demo" wording remains in the build today — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 70–76, 106, 144; grep of [dist/*.md](dist/)
- **The Oct audit flagged the naming problem but kept the structure.** Its fix was to rename `/book-free-demo` to `/free-consultation` and to change the homepage snippet from "Free demo class online" to "Free consultation on WhatsApp, or a ₹199 demo class that is adjusted if you join" — [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md) (P1-1, fix 2)

### Inferences
- Both hero buttons do the same thing, so the visitor is asked to choose between two options that are actually one. One button, "Message us on WhatsApp", would be simpler. Alternatively, the second slot could hold the real alternative, the ₹199 demo.
- For a visitor who wants to try a class before buying, "free consultation, not a class" combined with "₹199 seat" is a weaker offer than the ₹0 live demo the site ran until at least 2 Sep. Copy that says "see the course before you pay" sets up an expectation the free path cannot meet. That gap can produce enquiries that go nowhere ("when is my free class?") or drop-off once the visitor learns the consultation is not a class.
- Pointing out on dozens of pages that competitors give a free demo class may push demo-seekers to those competitors.

### Gaps
- The repo has no data on how many people chose the consultation versus the demo, so the effect of dropping the ₹0 demo cannot be measured.
- The shallow git history means I cannot confirm the exact date the ₹0 demo was withdrawn. It was between 2 Sep (doc) and 28 Sep (commit `ab884a8` "Add a paid 90-minute Demo Session").

## 2. WhatsApp links: prefills, device behaviour, form alternative, reply hours

### Takeaway
The prefills are short and readable, and many are tailored to the page. One bug, though: on policy pages, the retired career page and the demo page, the visitor's first "Chat on WhatsApp" message is garbled ("…free consultation for ! I want to know more…"). The site has no form or other non-WhatsApp route. Copy sets the 09:00–12:00 IST reply window honestly, but it never says what happens after hours or on which days.

### Cited Findings
- **Prefill bug.** `WhatsAppFab` defaults to `"Hi! I want to know more about Learn With Smile courses."`. `withConsultAsk()` mangles it into "Hi, I want a free consultation for ! I want to know more about Learn With Smile courses." This text ships in the FAB and the mobile dock on `/privacy`, `/terms`, `/refunds`, `/child-protection`, `/course-career-counselling` and `/course-demo-session` — [src/components/WhatsAppFab.tsx](src/components/WhatsAppFab.tsx) line 6, [src/lib/whatsapp.ts](src/lib/whatsapp.ts); decoded prefills in [dist/privacy.html](dist/privacy.html), [dist/course-demo-session.html](dist/course-demo-session.html)
- **Prefill variety.** The build contains 57 distinct prefills. Examples:
  - "Hi, I am in Kolkata and I want a free consultation for Basic Spoken English."
  - "Hi, I work in IT, I freeze on calls, and I want a free consultation for spoken English."
  - "Hi, I saw Neha's story and I want a free consultation for Business English."
  - "Hi, I want a free consultation for IELTS or Basic Spoken English." (IELTS fees guide)

  Source: decoded `wa.me` text, [dist/*.html](dist/)
- **Some prefills carry a source hint.** Page-specific prefills tell admissions where the visitor came from (city, guide, story), but only for the page's own in-content buttons. The nav, dock and band use the generic "Hi, I want a free consultation for spoken English." (4–12 links per page) — [dist/*.html](dist/)
- **The demo prefill skips the consultation rewrite.** It uses `waDirect()`: "Hi, I want to enrol for the Demo Session — 90 minutes, ₹199 — and schedule my seat in a live batch." — [src/lib/demo-session.ts](src/lib/demo-session.ts), [src/lib/whatsapp.ts](src/lib/whatsapp.ts)
- **No form exists.** The September audit says the "Demo form" was a "Semantic form [that] opens a short prefilled WhatsApp request". No form remains in the routes. Every CTA is a `wa.me` link or `tel:` — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) line 50; CTA parse of [dist/index.html](dist/index.html)
- **Device behaviour.**
  - All WhatsApp anchors use `target="_blank"`.
  - The FAB is `hidden sm:block` (desktop and tablet).
  - The two-button dock is `sm:hidden` (phones only).
  - No code detects desktop or offers a QR code, a copyable number or an email for desktop visitors without WhatsApp. Email (`learnwithsmile.in@gmail.com`) appears only in policies and the footer.

  Source: [src/components/WhatsAppFab.tsx](src/components/WhatsAppFab.tsx); [dist/refunds.md](dist/refunds.md)
- **Reply-hours copy.** "Message anytime. We reply 09:00–12:00 IST." and "Message Anytime · Replies 09:00–12:00 IST" sit on the hero and the course hero cards. The schema `ContactPoint.hoursAvailable` lists all seven days. Visible copy never states the days, and no page says "messages after 12:00 are answered the next morning" — [dist/index.md](dist/index.md); [src/lib/seo.ts](src/lib/seo.ts) ~line 1937
- **The demo funnel has many steps.** The visitor WhatsApps, waits for a reply in the 09:00–12:00 window, receives a payment link, pays ₹199, is scheduled within 72 hours of payment, attends, then enrols within 48 hours. The page also warns "No message, no seat" — [dist/course-demo-session.md](dist/course-demo-session.md). Commit `faf4f32` (29 Sep) "Put WhatsApp before payment on the demo flow."
- **The free consultation adds a step too.** "We reply 09:00–12:00 IST — We confirm a small-batch counselling slot." So the consultation is a separate appointment after the first reply — [src/lib/consultation.ts](src/lib/consultation.ts) line 114
- **Phone is demoted.** Calls were moved to a "quiet footer fallback" on 2 Sep. The September doc concedes that "August call volume cannot be expected to reappear automatically as chats" — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 33, 51

### Inferences
- A visitor who messages at 13:00 or in the evening, when working professionals and the "7pm IST" batch audience are browsing, waits 18–20 hours for a first reply. The demo then adds up to 72 hours plus a second reply cycle. Without an after-hours auto-reply (WhatsApp Business away message), many of these leads will cool.
- Desktop visitors without WhatsApp Web have no alternative path. A short form or a visible email would catch them.

### Gaps
- The repo cannot show whether a WhatsApp Business greeting or away message is set up.
- The repo cannot show the device split of visitors or how many sends come from desktop.

## 3. Trust and proof

### Takeaway
The site has strong, specific proof claims: 5.0★ from 125 Google reviews, 500+ learners, 7 years, six named learner stories, Razorpay and UPI logos, and a fair refund rule (full refund before the first class of a month). None of it can be checked on the page: there are no review excerpts or links, no learner photos, dates or LinkedIn links, no consent note, and the teacher's credentials are vague. Several internal inconsistencies weaken the proof further.

### Cited Findings
- **Rating claim.** "5.0★ Google Rating · 125 Reviews" appears in the homepage stats and the footer ("5.0★ (125 Google reviews) · By appointment only"). The only link is a "Review" link (`g.page/r/.../review`, which opens the write-a-review flow). There is no link to read reviews and no review quotes — [dist/index.md](dist/index.md)
- **Rating schema.** Ratings are deliberately not emitted as `aggregateRating` schema — [src/lib/seo.ts](src/lib/seo.ts) ~line 108; [src/routes/index.tsx](src/routes/index.tsx) line 487
- **The audits flagged missing evidence.** Both earlier audits: "Claim evidence register — FAIL"; "5.0/125 reviews, 500+ learners, 95% completion and selected learner outcomes still need a maintained evidence register" — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) line 61; [SEO-GEO-CONVERSION-AUDIT.md](SEO-GEO-CONVERSION-AUDIT.md)
- **Success stories.**
  - The page says "Every story below is a verified Learn With Smile learner."
  - The six stories are text-only quotes (Neha Patel, Rohan Deshpande, Kavya Reddy, Ananya Iyer, Vikram Singh, Aditya Nair) with course and job title, plus a disclaimer that no job, score or salary is guaranteed.
  - No source file has photos, dates, links or any consent or "name changed" wording.

  Source: [src/routes/success-stories.tsx](src/routes/success-stories.tsx) line 84; [dist/success-stories.md](dist/success-stories.md); grep for "consent" and "permission" in `src` (none for testimonials)
- **Stories conflict with the FAQ and the brand base.**
  - The FAQ says several stories are learners "from Kolkata, Hyderabad and Ahmedabad", but no story is from Kolkata, the business's home city.
  - The stories are all metro professionals (CA, advocate, tax analyst, BI analyst).
  - The career FAQ answers "Both, if you need it… We do not offer career counselling." in the same answer.

  Source: [src/lib/seo.ts](src/lib/seo.ts) lines 944, 960
- **Educator page.**
  - Credentials listed: "7+ years teaching English & Career Development", "Global platform experience · diverse international environments", "Multilingual learner — French & Italian", "Trained 500+ learners".
  - No qualification (degree, CELTA/TEFL) is given.
  - No video or audio sample of teaching.
  - The CTAs are WhatsApp only.

  Source: [dist/educator.md](dist/educator.md)
- **One teacher.** Copy repeatedly says "Same teacher", "7 yrs Same teacher, still live" and "One mentor. One mission." — [dist/index.md](dist/index.md), [dist/educator.md](dist/educator.md)
- **Internal inconsistencies that hurt credibility.**
  - Batch size: the homepage stat says "**8** In the room. You speak." while the site says "about 6" everywhere else — [src/routes/index.tsx](src/routes/index.tsx) line 479.
  - Classes: "Live, every hour." against "up to 2 classes/week" — index.tsx line 40.
  - Office: About says "A Kolkata classroom" while the site says online-only, office "by appointment only" — [dist/about-us.md](dist/about-us.md).
  - Vocabulary: "2,000+ words" against the "1,000+" module noted in the Oct audit — [src/lib/courses.ts](src/lib/courses.ts) lines 9, 24.
  - Blog: "5 Speaking Habits That Killed My Hesitation in **30 Days**" while the FAQ says "Anyone promising fluency in 30 days is selling you something" — [src/lib/blog.ts](src/lib/blog.ts) line 240; [dist/index.md](dist/index.md).
- **Payment trust.** "Secured and trusted payments by" Razorpay plus UPI, Visa and other logos appear near the hero and on the demo page — [src/components/PaymentTrust.tsx](src/components/PaymentTrust.tsx)
- **Policies (a strength).**
  - Full refund of a paid month if cancelled before its first live class.
  - The ₹199 demo is refunded in cash if cancelled before it is held, and adjusted against a course if the learner enrols within 48 hours.
  - The policy names a Grievance Officer (commit `e2f667f`).

  Source: [dist/refunds.md](dist/refunds.md)
- **Policies (tone and strictness).** Lines such as "Joining late is your responsibility, not the teacher's", "A problem you never raise is not a refund" and "A class from this week cannot be pushed to next week" are strict — [dist/refunds.md](dist/refunds.md); commit `b276f23` (24 Sep) "Legal: same-week reschedule, lateness, and unraised problems".
- **Entity and contact trust.**
  - The public email is Gmail.
  - The September audit found an old `learnwithsmile.website2.me` listing with a different phone number and hours, and other "Learn With Smile" businesses.
  - The Oct audit found that a brand search "returned no result for the site".

  Source: [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 20, 63; [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md) scorecard
- **No guarantee is offered** beyond the ₹199 adjustment and the before-first-class refund. The site explicitly disclaims job, score or salary outcomes — [dist/index.md](dist/index.md)

### Inferences
- The visitor cannot check any proof: no review link, no learner faces, no teaching sample. For a small, unknown brand charging ₹999–₹1,999 a month, unverifiable proof is close to no proof. The "8 vs 6" slip and the "Kolkata stories" claim give careful readers reasons to doubt the rest.
- A 30–60 second teaching clip, a link to Google reviews, or 2–3 review screenshots with dates would likely add more trust than another guide page.

### Gaps
- I could not verify whether the 125 Google reviews exist or whether the named learners consented. That needs the owner's evidence.

## 4. Message clarity: hero, course choice, price

### Takeaway
The first screen does give the price ("From ₹999/mo") and the next step (WhatsApp). But the H1 is a generic slogan, the "who it is for" line is vague ("For everyone: adults, professionals and graduates") and comes after the gamification copy, and the homepage alone has two competing demo/consultation framings. Course choice is reasonably simple (four courses in two groups), but it is muddied: Interview English is pitched both as part of Spoken English and as a separate ₹1,999 course.

### Cited Findings
- **Hero order on the homepage.**
  1. Demo ribbon (₹199 / ₹0).
  2. Eyebrow: "Live online spoken English classes · about 6 a batch · 7 years".
  3. H1: "Speak Better English. Master In-Demand Skills. Build Future Together."
  4. Subhead: "Real teachers. Small batches. Gamified, interactive live English classes — designed for the demands of today's market. From ₹999/mo … For everyone: adults, professionals and graduates."
  5. Buttons: "Chat on WhatsApp" and "Get Free Consultation".
  6. Line: "Tell us your goal. We reply with the right course and the fee — no pressure, no payment to book."

  Source: [dist/index.md](dist/index.md); [src/routes/index.tsx](src/routes/index.tsx) line 157
- **The Oct audit called the H1 a slogan with no search term** and added only the eyebrow line — [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md) (P2 homepage H1)
- **An August A/B test** found that leading with ₹999 or a concrete outcome "beats the brand-led headline". That test was removed on 1 Sep — [SEO-AUDIT.md](SEO-AUDIT.md) line 330; [SEO-GEO-CONVERSION-AUDIT.md](SEO-GEO-CONVERSION-AUDIT.md)
- **Courses.** Basic Spoken English ₹999/mo (6 months), Interactive Speaking ₹1,199/mo (3 months), Business English ₹1,999/mo (3 months, tagged "Most Popular" on the homepage), Interview Preparation ₹1,999/mo (2 months). All "up to 2 classes/week", 90 minutes — [dist/index.md](dist/index.md), [src/routes/index.tsx](src/routes/index.tsx) line 577
- **Overlapping course claims.**
  - Spoken English says "✓ Interview English in this room" and "Practise HR-style questions live in the batch".
  - The educator page lists "Interview English inside Spoken and Interactive rooms".
  - A separate Interview Preparation course costs ₹1,999.

  Source: [src/lib/courses.ts](src/lib/courses.ts) line 20; [dist/educator.md](dist/educator.md)
- **Price changes.** On 1 Sep: "Business English ₹1,499/month, Interactive Speaking ₹1,199/month, Interview Preparation ₹1,499/month". Today Business English and Interview Preparation are ₹1,999. Commit `3a0aee3` (22 Sep) changed Interactive Speaking to ₹1,199 — [SEO-GEO-CONVERSION-AUDIT.md](SEO-GEO-CONVERSION-AUDIT.md) ("Trust and offer consistency"); [dist/index.md](dist/index.md)
- **India vs international pricing.**
  - Both INR and USD labels are in the HTML. A boot script sets `lws-intl` before first paint, using stored country, then timezone, defaulting to IN. Bots always see INR. A client-side IP lookup follows (ipwho.is, get.geojs.io).
  - USD prices: $49, $79, $99, $99, demo $10.
  - In the `.md` mirrors both prices run together ("From ₹999/mo $49/mo, inclusive of taxes.. USD") and the homepage pricing note reads "All prices are in INR … These published figures are the international fee, in USD".

  Source: [src/components/FeeText.tsx](src/components/FeeText.tsx); [src/lib/boot-script.ts](src/lib/boot-script.ts) lines 130–155; [src/lib/country.ts](src/lib/country.ts) lines 169–190; [dist/index.md](dist/index.md)
- **The homepage FAQ points away from the site.** "For a structured syllabus with a certificate, British Council." Separately, an IELTS fees guide and a "Band 7 Writing" blog post exist while the site states "we do not sell IELTS as a course" — [dist/index.md](dist/index.md); [dist/blog.md](dist/blog.md)

### Inferences
- An Indian visitor sees the price and the WhatsApp button quickly. That part works. The weak parts are relevance and specificity: the H1 does not say "spoken English classes online for adults", and the subhead talks about gamification before outcomes.
- The ₹1,499 → ₹1,999 increases on two courses, in the same period as the demo became paid, add price friction for the working-professional segment the site targets most.
- Because the text-only mirrors show "₹999/mo $49/mo", AI assistants or copy-pasters may quote the wrong price list.

### Gaps
- I could not check whether the IP lookup ever switches an Indian visitor to USD on the live site (VPN, travellers). No rendered-browser check was possible.

## 5. Friction and risk

### Takeaway
On a phone, the first screen stacks a demo ribbon, the sticky header, the cookie dialog and the two-button dock. The page can sit behind a boot veil for up to 3 seconds. The cookie banner asks for consent to Google Analytics that does not exist. Several copy contradictions remain (listed under question 3), along with leftover IELTS and career-counselling signals.

### Cited Findings
- **Boot veil.** The page is hidden until CSS, fonts and the hero image are ready, with `MAX_HOLD = 3000` ms (700 ms on save-data/2G) and a pure-CSS failsafe at 8 s. The Oct audit measured mobile FCP/LCP at about 2.9–3.0 s after its fixes, and left the veil "as designed" — [src/lib/boot-script.ts](src/lib/boot-script.ts) lines 11–36, 94–96; [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md)
- **Cookie bar.**
  - It shows on every first visit: "We use cookies… If you Accept, we may also use Google Analytics (or a similar measurement tool)…" with Accept and Reject buttons.
  - On phones it sits above the sticky dock (`bottom-[5.25rem]`).
  - No analytics script exists (`verificationMeta()` returns `[]`, and the comment says "this site loads no analytics pixel").

  Source: [src/components/CookieBar.tsx](src/components/CookieBar.tsx); [src/lib/analytics.ts](src/lib/analytics.ts)
- **The privacy policy repeats the claim.** "Analytics cookies run only if you choose Accept" — [src/content/legal.ts](src/content/legal.ts) line 99
- **Steps to a lead.** The consultation takes about 4 steps: tap, send, wait for the reply window, get a slot confirmed. The demo takes about 7 (see question 2) — [dist/free-consultation.md](dist/free-consultation.md), [dist/course-demo-session.md](dist/course-demo-session.md)
- **Leftover retired page.** `/course-career-counselling` is still prerendered with WhatsApp links (garbled prefill) and is `noindex` — [dist/course-career-counselling.html](dist/course-career-counselling.html)
- **Career counselling signals.**
  - The consultation still lists "career" and "career change" as a bottleneck it diagnoses ("Spoken, freeze, workplace, interview, or career"; "place you in Spoken, Interactive, Workplace, Interview Preparation or counselling").
  - Twelve mirrors say "We do not offer career counselling."

  Source: [dist/free-consultation.md](dist/free-consultation.md); grep of [dist/*.md](dist/)
- **IELTS facts.** "Sit IELTS with IDP or British Council" still appears in 7 mirrors (consultation picker, fees, Kolkata, why-us, how-long, comparison). The Oct audit says IDP has been the only IELTS provider in India since 2021 and claimed to have corrected this — [src/lib/consultation.ts](src/lib/consultation.ts) line 167; [src/content/pages/kolkata.ts](src/content/pages/kolkata.ts) line 110; [src/content/pages/fees.ts](src/content/pages/fees.ts) line 184; [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md) Round 3
- **Retired cities still listed.** The homepage still names the retired cities (Pune, Chennai, Patna and others) as unlinked text, and the FAQ lists them as places learners join from — [dist/index.md](dist/index.md)
- **The 404 page has no WhatsApp CTA** (0 `wa.me` links) — [dist/404.html](dist/404.html)

### Inferences
- The cookie banner adds a consent decision with no benefit, since there is no analytics. It also covers part of the mobile screen next to the dock. Removing it, or replacing it with a small notice if only necessary storage is used, cuts friction and fixes an inaccurate disclosure.
- Up to 3 s of blank veil on Indian mid-range phones probably costs some bounces from paid or organic landings. The repo has no field data to size this.

### Gaps
- No real-user Core Web Vitals or bounce data is available.

## 6. Lead quality: pre-qualification

### Takeaway
The site screens well for age (15+, adults only), format (online only), price (published fees) and "no certificate / no IELTS / no career counselling". But some content still invites wrong-fit enquiries: an IELTS fees guide and a Band 7 blog post with an IELTS prefill, career and "visa form" language in the consultation, and free-demo seekers. The site also asks for almost no qualifying data up front, such as level, preferred slot or goal, except where page prefills hint at the goal.

### Cited Findings
- **Age.** "Adult learners 15+… We currently run adult rooms only." The consultation says: "Is this for children? (Adult rooms are 15+. We will say no if it is a child.)". For ages 15–17 a parent or guardian must enrol and is the WhatsApp contact — [dist/index.md](dist/index.md); [dist/free-consultation.md](dist/free-consultation.md); [src/content/legal.ts](src/content/legal.ts) lines 195–196
- **Wrong-fit buyers are redirected.** Kids go to PlanetSpark-style providers. Certificate buyers go to British Council. IELTS candidates: "If no form asked for a band, we will tell you IELTS is the wrong buy." — [dist/free-consultation.md](dist/free-consultation.md)
- **IELTS enquiries are still invited.**
  - The `/ielts-coaching-fees-india` prefill is "Hi, I want a free consultation for IELTS or Basic Spoken English."
  - The blog has "Band 7 Writing: The 4-Paragraph Template … our students use to write Band 7 essays".

  Source: decoded prefill in [dist/ielts-coaching-fees-india.html](dist/ielts-coaching-fees-india.html); [src/lib/blog.ts](src/lib/blog.ts) line 262
- **Timing.** Copy promises "Morning, evening and weekend IST" and mentions "7pm IST", but the site publishes no batch timetable or next-start date. Searches for "next batch", "seats left" and "batch starts" found nothing — grep of [dist/*.md](dist/)
- **Price screening works.** Every hero states "From ₹999/mo … inclusive of taxes" and the fee table is public — [dist/index.md](dist/index.md)
- **The September audit recommended a fixed qualifying script.** "Use one first reply template: goal, current level, preferred days, preferred time, course recommendation, next demo slot" and a "Five-question WhatsApp level check" — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 143, 180

### Inferences
- Page-specific prefills are cheap pre-qualification and a strength ("I am a fresher… Interview Preparation"). But the nav, dock and band, the most-tapped buttons, send the generic line, so most enquiries probably arrive without context.
- The age, IELTS and kids filters reduce wrong-fit leads but also reduce volume. Because the site says repeatedly what it does not do, a casual reader may decide it is not for them.

### Gaps
- There is no data on the share of wrong-fit enquiries (kids, IELTS, free-class seekers). Only the admissions inbox would show it.

## 7. Measurement

### Takeaway
The site deliberately tracks nothing. There is no analytics, no UTM capture, no lead ID and no click listener. `data-cta-goal` and `data-cta-location` attributes remain in the markup but nothing reads them. The site therefore cannot say which page, source or CTA produces leads, and the earlier audits warned that this makes the August drop impossible to diagnose.

### Cited Findings
- **No tracking code.** `src/lib/analytics.ts` only returns empty verification meta. Its comment says Search Console and Bing are verified by DNS TXT and "this site loads no analytics pixel either" — [src/lib/analytics.ts](src/lib/analytics.ts)
- **Unread attributes.** `data-cta-goal` is set in `WaButton` and in WhatsAppFab (`whatsapp_chat`, `free_consultation`, `whatsapp_click`, `whatsapp_demo`), and `data-cta-location` on the FAB, dock and band. No `addEventListener`, `gtag`, `dataLayer` or `utm_` code exists in `src` — [src/components/ui-bits.tsx](src/components/ui-bits.tsx) line 258; grep of `src`
- **History of removal.** On 1 Sep: "Captures first-touch utm_source… and places them in the WhatsApp enquiry" plus a "unique LWS-... lead reference". On 2 Sep these were removed: "Website conversion tracking — DISABLED: Intentionally removed: no GA, UTM capture, lead ID, click listener or campaign payload remains" — [SEO-GEO-CONVERSION-AUDIT.md](SEO-GEO-CONVERSION-AUDIT.md); [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) line 59
- **Recommended non-pixel measurement.** "Count actual inbound conversations, qualified leads, demos and enrolments once per week", plus funnel definitions (lead = message received; qualified; demo requested, booked, attended; enrolled) — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 179, 197–208
- **Search Console and Bing.** The code comment says both are verified by DNS. The September doc listed them as "UNKNOWN" and the Oct doc says "Owner action" — [src/lib/analytics.ts](src/lib/analytics.ts); [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md)

### Inferences
- The distinct page prefills ("I am in Kolkata…", "I read your blog…", "I saw Neha's story…") already work as a privacy-friendly source tag, if admissions logs the first line of each chat. The generic prefill on the nav, dock and band hides the source for most clicks. Making those three page-aware, with a short human-readable phrase rather than a code, would restore page-level attribution without UTMs.
- A cookieless, consent-light counter of `data-cta-goal` clicks per page would answer "which pages produce WhatsApp opens" without personal data. The attributes are already in place.

### Gaps
- Nothing shows whether Search Console data exists or has been reviewed. No lead counts were available.

## 8. History: August to October changes that may have reduced leads

### Takeaway
The site changed constantly from August to October. Before August most URLs returned 404 to Google. In August the site was rebuilt for SEO. Around 1–2 September the call path was demoted, a ₹0 demo became the secondary CTA and tracking was removed. In late September the free ₹0 demo was replaced by a free consultation that is "not a class" plus a paid ₹199 demo. Two course prices rose to ₹1,999. Career Counselling was removed and strict policy copy was added. In October 10 city pages were retired and `/book-free-demo` was redirected. Any one of these could plausibly reduce enquiry volume, and without measurement none can be isolated.

### Cited Findings
- **Before and during August.**
  - "13 of the site's 14 pages were served to Google with HTTP status 404, and every page was blank to AI crawlers"; this was fixed by prerendering.
  - A homepage headline A/B test ran (`control` / `price_anchor` / `outcome`), with no analytics installed.

  Source: [SEO-AUDIT.md](SEO-AUDIT.md) lines 11–32, 330, 383
- **1 Sep.**
  - The rotating H1 test was removed.
  - Call CTAs were made primary (Call / ₹0 Live Demo dock).
  - UTMs and a lead reference were added to WhatsApp messages.
  - "Instant/minutes" promises were replaced by the 09:00–12:00 IST window.
  - The completion-certificate promise was removed.
  - Scheduled monthly 1:1 feedback was removed.
  - "Daily live" and 3-per-week classes became "up to 2 classes/week".

  Source: [SEO-GEO-CONVERSION-AUDIT.md](SEO-GEO-CONVERSION-AUDIT.md)
- **2 Sep (PR #32).**
  - Call was demoted to a footer fallback.
  - The hero became "Chat on WhatsApp" plus "Book ₹0 Live Demo".
  - UTM and lead references were removed and all tracking disabled.
  - Business English was renamed toward "Workplace English".

  The doc attributes the fall in leads to "major crawl, content, pricing, policy and conversion changes from 14 August through 2 September" and ranks "The site and conversion journey changed materially" and "Calls were deliberately demoted" as high-confidence drivers — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 26–37, 66–85
- **22–30 Sep (git).**
  - Interactive Speaking was set to ₹1,199 (PR #69, 22 Sep).
  - Strict legal copy on rescheduling, lateness and unraised problems was added (24 Sep).
  - On 28 Sep: "Add a paid 90-minute Demo Session" (`ab884a8`), the homepage demo ribbon, "Remove Career Counselling from the catalogue" (`5506a76`), and separate "demo-class and free-consulting answers" for GPTs.
  - "Put WhatsApp before payment on the demo flow" (29 Sep).
  - USD pricing for visitors outside India (30 Sep).

  Source: `git log` in `/home/user/vibrant-desi-vibe`
- **Prices.** Business English and Interview Preparation went from ₹1,499 (1 Sep doc) to ₹1,999 (current build) — [SEO-GEO-CONVERSION-AUDIT.md](SEO-GEO-CONVERSION-AUDIT.md); [dist/index.md](dist/index.md)
- **8 Oct.**
  - `/book-free-demo` was redirected to `/free-consultation` (a meta-refresh stub on GitHub Pages).
  - 10 of 15 city pages were retired to `/best-online-spoken-english-classes-india`.
  - The homepage meta description lost "Free demo class online".
  - The ~240-term meta keywords were cut.

  Source: [SEO-AI-AUDIT-OCT-2026.md](SEO-AI-AUDIT-OCT-2026.md) Round 2; [src/lib/redirects.ts](src/lib/redirects.ts)
- **A related September recommendation.** The September doc recommended a "₹0 real-class demo by course" as the #2 lead test and positioned "Start with a real ₹0 class in one WhatsApp message" — the opposite of the paid demo shipped on 28 Sep — [WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](WHATSAPP-SEO-GPT-GROWTH-AUDIT.md) lines 106, 144

### Inferences
- From the funnel's point of view, the changes most likely to reduce enquiries are:
  1. Removing the free trial class, and making demo access paid and slower.
  2. Demoting phone calls before WhatsApp volume was proven.
  3. Raising two course prices by ₹500/month.
  4. More "we don't do X" and strict-policy copy, which filters for quality but lowers volume.
  5. SEO churn: URL moves, retired pages and changed snippets, which reset recrawl and snippet freshness.
- The pre-August 404 problem means that before August most leads probably came from the homepage, brand searches, GBP and referrals rather than from page rankings. That makes conversion-path changes on the homepage and WhatsApp journey more likely causes than lost organic rankings. This is an inference: there is no traffic data.

### Gaps
- There are no lead counts, Search Console data or GBP insights for July to October, so the size and cause of the drop cannot be confirmed.
- Git history before 22 Sep is missing from the clone (shallow), so the exact dates of the ₹0-demo removal and the price changes cannot be confirmed from code.
