# Fix the funnel, then earn outside proof

Learn With Smile's path to 100+ quality leads runs through three bottlenecks, and search rankings are not the biggest of them. The first is the conversion path: every main button sends the same WhatsApp message, the free consultation promises "see the course before you pay" while saying "not a class", and the proof (5.0★ from 125 reviews, 500+ learners) cannot be checked anywhere on the page. The second is WhatsApp operations: a 09:00–12:00 IST reply window means an evening enquiry waits 12–21 hours, and the best-known speed-to-lead research finds leads go cold within hours. The third is off-site authority: AI assistants and Google's AI features build "best spoken English classes" answers mostly from third-party listicles, review sites, YouTube and brand mentions, and Learn With Smile appears on none of them. The technical SEO and AI-crawler base is already strong, completed in the October 2026 audit, so more on-site schema or llms.txt work will add little. Because the site deliberately measures nothing, no baseline exists and no lead number can be forecast. The plan below therefore starts with a week of cheap fixes, including counting, then builds outside proof over three to six months. Two owner decisions shape most of it: what the free and ₹199 entry offers really are, and whether someone can answer WhatsApp outside 09:00–12:00.

## How to read this audit: what was checked in code and what is inferred

This report draws on five research notes produced on 8 October 2026: a source-code and built-HTML conversion audit of this repository, and web research on AI-search source selection, off-site authority, competitor tactics and WhatsApp conversion. It also uses the repository's existing [SEO-AI-AUDIT-OCT-2026.md](../SEO-AI-AUDIT-OCT-2026.md). Three limits apply throughout. **No researcher could load the live site**, so every site finding describes the code that deploys to it. **No Search Console, Bing Webmaster, Google Business Profile, analytics or lead-count data was available.** The web research relied on search-result summaries, because full-page fetching failed. Most AI-citation statistics come from SEO-tool vendors with a commercial interest. Where studies conflict, this report says so.

Three labels are used. **"Verified in code"** means I re-checked the claim in `src/` while writing this report, with file and line given. **"From the build audit"** means the code-audit researcher parsed the prerendered HTML (link counts, decoded WhatsApp prefills) and I did not repeat it. **"Inference"** means a judgement that follows from evidence but has not been tested on this site. The effort and impact ratings in the action plan are all judgements of this last kind.

## The technical base is finished; four leftovers from October remain

The October audit and its follow-up rounds did the heavy technical work, and none of it should be repeated:

- All 62 pages are prerendered, each with one H1 and one canonical, valid JSON-LD, `en-IN` hreflang and Markdown mirrors.
- All major AI crawlers are allowed. Bing and user-initiated agents can now fetch JS and CSS.
- `llms-full.txt` was split into core, guides, blog and policy files.
- The ~240-term keywords tag was cut to 10 or fewer page-specific terms.
- Ten near-duplicate city pages were retired. Four metro pages and Kolkata were rewritten.
- `/book-free-demo` became `/free-consultation`.
- The Business English cannibalisation was resolved.
- Hindi and Bengali pages were added, and 13 thin guides were deepened with comparison tables and competitive FAQs ([SEO-AI-AUDIT-OCT-2026.md](../SEO-AI-AUDIT-OCT-2026.md)).

That work matches Google's own position. In May 2026 Google published guidance saying AI Overviews and AI Mode need nothing beyond normal SEO: a page must be indexed and snippet-eligible, and **llms.txt, content chunking and special schema are not needed** ([Search Engine Journal](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/); [Search Engine Land](https://searchengineland.com/google-publishes-guide-on-optimizing-for-generative-ai-features-477671)). The site already clears that bar. The next gains will not come from more technical work.

Four items from October are not finished.

1. **The IELTS correction did not fully land (verified in code).** The October audit says it corrected "IDP or British Council" to IDP everywhere. The phrase still appears in six places:
   - [src/content/pages/how-long.ts:106](../src/content/pages/how-long.ts)
   - [src/content/pages/fees.ts:184](../src/content/pages/fees.ts)
   - [src/content/pages/kolkata.ts:110](../src/content/pages/kolkata.ts)
   - [src/lib/seo.ts:840](../src/lib/seo.ts)
   - [src/lib/consultation.ts:167](../src/lib/consultation.ts)
   - [src/routes/english-institute-comparison-india.tsx:67](../src/routes/english-institute-comparison-india.tsx)

   AI assistants quote these pages, so an outdated fact here becomes an outdated fact in their answers.
2. **Retired cities still appear on the homepage and in the FAQ (verified in code).** The homepage FAQ answer at [src/lib/seo.ts:759](../src/lib/seo.ts) still lists Pune, Patna, Guwahati and the other retired cities.
3. **The entity work is still pending.** This was the October audit's "P0 owner action". The Organization `sameAs` list contains only the Google Business Profile short link ([src/lib/seo.ts:56](../src/lib/seo.ts), verified in code). A code comment says Search Console and Bing are verified by DNS ([src/lib/analytics.ts](../src/lib/analytics.ts)), but nothing in the repository shows that their data has ever been read.
4. **The remaining speed work is still open.** Open items are the up-to-3-second boot veil, the 204 kB-gzip entry bundle and 600–950 ms of blocking time on mid-range phones. Mobile FCP/LCP sits around 2.9 s, above the 2.5 s "good" line.

Smaller leftovers from October include descriptions over 160 characters on legal pages and four guides, and the homepage H1, which is still a slogan with no search term.

## Every main button sends the same message, and the free offer contradicts itself

The site's conversion problems are in the code and can be fixed in days. The most consequential is that the visitor gets a choice that is not a real choice. `CHAT_MSG` is defined as equal to `DEMO_MSG` ("Hi, I want a free consultation for spoken English."). Every `waLink()` call also passes through `withConsultAsk()`, which rewrites any message into a free-consultation request ([src/lib/whatsapp.ts:19–51](../src/lib/whatsapp.ts), verified in code). "Chat on WhatsApp" and "Get Free Consultation" therefore open the identical chat, in the hero and in the two-button mobile dock. The build audit counted **7–17 `wa.me` links per page, 17 on the homepage**, and the first three homepage links have identical hrefs. The genuine alternative, the ₹199 demo, appears in none of the hero, the dock or the sitewide band. Its enrol prefill ships only on `/course-demo-session` and one link on `/english-career` (from the build audit).

A bug compounds this. `WhatsAppFab` defaults to "Hi! I want to know more about Learn With Smile courses." ([src/components/WhatsAppFab.tsx:6](../src/components/WhatsAppFab.tsx), verified in code). `withConsultAsk()` turns that default into "Hi, I want a free consultation for ! I want to know more…". This garbled message ships on the policy pages, the retired career page and **the ₹199 demo page itself**, the highest-intent page on the site (from the build audit).

The offer copy contradicts itself. The sitewide yellow band and `/free-consultation` say "We don't sell the room until you see it" and "See the course before you pay". The same source file also says "Still free. Not a class", and step 2 says "We confirm a small-batch counselling slot" ([src/lib/consultation.ts:27–33, 114, 302](../src/lib/consultation.ts), verified in code). A visitor who wants to try a class reads a promise the free path cannot keep. Then they learn the only way to see a class costs ₹199, takes about seven steps, and is "scheduled within 72 hours of payment". The paid demo also goes by four names: "Book the Demo Class", "Demo Session", "Enrol for ₹199" and "See a real class" (from the build audit). The shared competitor strip, meanwhile, tells demo-seekers on dozens of pages that PlanetSpark offers a free demo class (from the build audit).

The history matters here. Until at least 2 September the secondary CTA was "Book ₹0 Live Demo". The September audit called a real ₹0 class "the strongest conversion proof" and recommended it as the #2 lead test. The paid demo shipped on 28 September (commit `ab884a8`), the opposite of that recommendation ([WHATSAPP-SEO-GPT-GROWTH-AUDIT.md](../WHATSAPP-SEO-GPT-GROWTH-AUDIT.md)). In the same period, Business English and Interview Preparation rose from ₹1,499 to ₹1,999, phone calls were demoted to a footer fallback, and all tracking was removed. Without data, none of these can be isolated as the cause of the lead fall the earlier audits describe (inference). For a visitor, though, they all point the same way: try-before-you-buy got slower and more expensive.

### Proof that cannot be checked is close to no proof

The site makes strong claims, but none can be verified from the page:

- **Reviews.** It shows "5.0★ Google Rating · 125 Reviews". The only Google link opens the *write*-a-review flow, so there is no way to read the reviews.
- **Learner stories.** The six stories are text-only. They have no photos, dates or links, and there is no consent wording anywhere in `src`.
- **Teacher.** The educator page lists no qualification (degree, CELTA or TEFL) and has no teaching sample.

(All three from the build audit; see [src/routes/success-stories.tsx](../src/routes/success-stories.tsx) and the built `educator.md` mirror.)

Small inconsistencies give careful readers reasons to doubt the rest. These are verified in code:

- The homepage stat says **"8 — In the room"** while every other page says about 6 ([src/routes/index.tsx:479](../src/routes/index.tsx)).
- A feature card says "Live, every hour" against "up to 2 classes/week" ([src/routes/index.tsx:40](../src/routes/index.tsx)).
- A blog post is titled "…Killed My Hesitation in 30 Days", but the FAQ says anyone promising 30-day fluency "is selling you something" ([src/lib/blog.ts:240](../src/lib/blog.ts)).
- The course description says "2,000+ words" while the syllabus says "1,000+" ([src/lib/courses.ts:9, 24, 51](../src/lib/courses.ts)). October judged this to be course total vs one module, but readers see two numbers.

Competitors mostly self-assert their proof too. Speaking Fever claims 4.8★ and "93% improve in 30 days" on its own site ([Speaking Fever](https://speakingfever.com/)). EngVarta's rating claims differ across its own pages ([EngVarta](https://engvarta.com/engvarta-review-2026-is-it-worth-price/)). Proof a visitor can verify, such as a link to the live Google reviews and a dated, consented story, is therefore a real differentiator, not a box to tick (inference).

Indian law also matters here. The CCPA's 2024 coaching-sector advertising guidelines require **written consent obtained after the student's success** before using a name, photo or testimonial. They also require representative testimonials and ban guaranteed outcomes and false scarcity ([MediaNama](https://www.medianama.com/2024/11/223-ccpa-new-guidelines-curb-misleading-ads-coaching-sect/); [IndiaLaw](https://www.indialaw.in/blog/civil/ccpa-crackdown-misleading-coaching-ad)). Whether adult spoken-English classes count as "coaching" under these guidelines is unconfirmed. Either way, the general rules on misleading advertising apply.

### Friction that has no benefit

The cookie bar asks every first-time visitor to accept Google Analytics "or a similar measurement tool" ([src/components/CookieBar.tsx:51](../src/components/CookieBar.tsx), verified in code). No analytics exists, and `analytics.ts` says "this site loads no analytics pixel". On phones the bar stacks above the WhatsApp dock. It is a consent decision with no purpose and an inaccurate disclosure, repeated in the privacy policy ([src/content/legal.ts:99](../src/content/legal.ts)).

Desktop visitors who lack WhatsApp Web hit a QR-pairing screen, and the site offers no alternative. There is no form and no copyable number near the CTA, and the email (a Gmail address) appears only in the footer and policies. Click-to-chat links open WhatsApp Web only for logged-in users ([Techpoint Africa](https://techpoint.africa/guide/how-to-create-whatsapp-link/)). The 404 page has no WhatsApp link at all (from the build audit).

## A three-hour reply window leaves evening enquiries waiting overnight

The WhatsApp side of the funnel is where the most volume is probably lost, and it is also the cheapest to fix (inference). The best-known speed-to-lead evidence is old and US-based, but it is consistent. HBR's 2011 study analysed about 1.25 million leads at 42 companies. Firms that contacted a lead within an hour were **nearly 7× more likely to qualify it** than firms that waited an hour longer ([SmartCompany summary of HBR](https://www.smartcompany.com.au/?p=20719); [BYU record](https://scholarsarchive.byu.edu/facpub/9711)). A vendor case study from Indian edtech describes moving away from exactly Learn With Smile's model, where leads were handled at a fixed time each morning, and reports better results ([LeadSquared](https://www.leadsquared.com/case-studies/edwisor-increased-lead-to-enrollment-ratio-admission-management-crm/)). That evidence is weak but points the same way.

The arithmetic for this business is stark. A working adult who messages at 19:00, plausibly peak browsing time for the target audience, gets a first human reply 14 hours later. The site's copy says "Message anytime. We reply 09:00–12:00 IST" but never names the days, and never says that afternoon messages wait until the next morning. The `ContactPoint` schema lists all seven days (from the build audit). After the first reply the free consultation needs a second appointment, and the demo needs payment, scheduling within 72 hours, and another reply cycle.

The free tools already cover most of the fix. The WhatsApp Business app supports:

- a scheduled **away message** outside business hours;
- a **greeting message**;
- 50 quick replies;
- labels;
- a 500-item catalog ([Wappbiz](https://www.wappbiz.com/blogs/whatsapp-auto-reply/); [Qiscus](https://www.qiscus.com/en/blog/whatsapp-business-features/)).

In May 2026 Meta launched **Business AI inside the WhatsApp Business app for small businesses in India**. Businesses train it on their own fees, services and FAQs. It answers 24/7 in Indian languages, can "capture leads and book appointments", and the owner can take over any chat ([Meta Newsroom](https://about.fb.com/news/2026/05/introducing-business-ai-on-whatsapp-for-small-businesses-in-india/)). The rollout was staged, and no independent evaluation of its lead-capture quality exists, so it needs a careful trial rather than blind trust.

The paid WhatsApp Business Platform (API) is not needed at this volume. From 1 October 2026, replies in the service window are billed after a free allowance ([Meta for Developers](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages)), marketing templates cost about ₹0.86 each, and a reseller (BSP) adds its own fees on top ([Flowcall](https://www.flowcall.co/blog/whatsapp-business-api-pricing)).

The away message should do real work, not just apologise. It should:

1. state honestly when the person will hear back;
2. ask four numbered questions they can answer immediately, so the 09:00 session starts with qualified chats:
   - goal: interview, workplace, exam form or everyday confidence;
   - current level;
   - preferred slot: morning, evening or weekend;
   - age band: 15–17, 18–24 or 25+;
3. ask "How did you hear about us? Google / ChatGPT or another AI / YouTube / friend / other".

Asking a budget question is unnecessary because the fees are already public. A simple 0–5 score, tracked with labels, lets the owner answer Hot leads first:

- +1 clear goal
- +1 deadline
- +1 slot matches a batch
- +1 answered within 24 hours
- +1 accepted the demo or the price

These suggestions come from vendor practice, not outcome studies. The only quantified example, a Meta-listed case reporting 4× more qualified leads from WhatsApp Flows, is relayed by a vendor ([Spurnow](https://www.spurnow.com/en/blogs/click-to-whatsapp-ads-benchmarks)).

### Entry offer and attendance

The demo needs reminders. A meta-analysis found digital reminders made people **25% less likely to miss appointments**, and multiple reminders beat one ([PubMed 27798006](https://pubmed.ncbi.nlm.nih.gov/27798006/)). A reasonable sequence is:

1. a confirmation at booking;
2. a reminder the evening before;
3. a reminder 1–2 hours before, with the joining link and "reply YES";
4. a recap with the enrolment step within 24 hours.

The ₹199 price itself is a strategic question, not a copy fix. It is **the most expensive entry point found among adult competitors**. EngVarta sells a ₹69 trial described as "100% refundable" ([EngVarta](https://engvarta.com/engvarta-review-2026-is-it-worth-price/)). Cambly's trial costs $1 ([Cambly support](https://studentsupport.cambly.com/hc/articles/360048840311-Try-Cambly)). Speaking Fever offers a free demo ([Speaking Fever](https://speakingfever.com/english-speaking-course-for-adults/)).

On the other side, Learn With Smile's monthly fees are far lower. Speaking Fever charges ₹3,999 for 20 sessions, Spoken Mentor ₹3,999 a month, and EngVarta's entry plan is ₹2,700 ([Spoken Mentor](https://spokenmentor.com/pricing/)). Its 90-minute demo is also far longer than a 10–30 minute trial, and it is already adjusted against fees on enrolment. No data compares free and paid demos in Indian coaching ([ProductGrowth.in](https://productgrowth.in/insights/edtech/free-to-paid/) offers only unsourced ranges).

The honest recommendation is to test rather than assume. Frame ₹199 as "adjusted in full when you join, refunded if you attend and decide it is not for you". Or alternate it with a free first class by month, and compare bookings, attendance and enrolments within 14 days.

### Consent and follow-up

Under the DPDP Rules 2025, most obligations take effect around 13 May 2027 ([PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2)). Marketing messages need consent that is separate from answering an enquiry ([SCC Online](https://www.scconline.com/blog/post/2026/07/29/whatsapp-chatbot-opt-in-consent-dpdp-act-compliance/)). Under-18s are "children" who need verifiable parental consent, which matters because the site accepts learners from age 15.

The practical consequence is a short follow-up cadence that then stops:

- a personal reply at 09:00;
- one helpful nudge on day 2;
- a "shall I close this?" message on day 6–7;
- nothing further unless the person opts in.

An "Opted-in" label records the consent.

## AI assistants recommend whoever third-party lists name

Getting recommended by ChatGPT, Copilot, Perplexity, Gemini and Google's AI features is mainly an off-site problem. Ahrefs analysed 750 recommendation prompts and found **"best of" listicles made up 43.8% of the page types ChatGPT cited**. Being on more third-party lists, and higher on them, correlated with being named ([Ahrefs](https://ahrefs.com/blog/best-lists-research/)).

For Google's AI Overviews, branded web mentions were the strongest correlate of brand visibility (Spearman 0.664), well ahead of link metrics ([Ahrefs, 75k brands](https://ahrefs.com/blog/ai-overview-brand-correlation/)). Ranking well still helps but no longer decides citation. Estimates of how many AI Overview citations come from the organic top 10 range from about 17% ([BrightEdge](https://help.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing)) to about 38% ([ALM Corp on Ahrefs' March 2026 data](https://almcorp.com/blog/google-ai-overview-citations-drop-top-ranking-pages-2026/)). The methods differ, but the direction is the same.

Copilot grounds its answers in Bing's index, and Bing Webmaster Tools now has an **AI Performance report**: citation counts, cited pages and the "grounding queries" Copilot used, with no click data ([Search Engine Journal](https://www.searchenginejournal.com/bing-webmaster-tools-adds-ai-citation-performance-data/566874/)). How much ChatGPT's sources overlap with Bing is disputed: estimates range from 27% to 73% ([AI+Automation](https://aiplusautomation.com/blog/bing-replication-chatgpt-citations); [Grow & Convert](https://www.growandconvert.com/ai/fan-out-query-serp-study/)).

### What the competition looks like

The India listicle landscape shows both the problem and the opening. For "best spoken English classes India 2026", the results are dominated by **competitors ranking themselves first**:

- EngVarta runs "Best Spoken English Classes in India 2026", "Best Online Spoken English Classes 2026" and city lists including Kolkata, with itself at #1.
- Speaking Fever copies the format.
- Third-party lists such as The Tuition Teacher, Lanquill, EdTechReview and MyPrivateTutor fill the rest ([EngVarta](https://engvarta.com/best-spoken-english-classes-in-india/); [The Tuition Teacher](https://thetuitionteacher.com/blog/best-online-spoken-english-classes-in-india/); [Lanquill](https://lanquill.com/articles/best-spoken-english-courses-online-india); [EdTechReview](https://www.edtechreview.in/elearning/top-10-spoken-english-classes-online-in-india/)).

During the research, the web-search tool's own AI summaries recommended EngVarta first for adults, British Council for certificates, Cambly for native speakers and PlanetSpark for kids. That mirrors EngVarta's list almost exactly. It is an observation, not a controlled test.

**None of the visible lists covers live small-group batches of about 6 for adults under ₹2,000/month.** Most adult players are 1:1 at ₹2,700–₹4,000/month or premium group. That niche label, stated crisply and repeated by third parties, is the most realistic way to get named (inference). Writing more self-ranking listicles on learnwithsmile.app is the wrong tool:

- Lily Ray's 2026 study found that when a brand's own listicle was cited, AI Overviews still left that brand out of the recommendation 69% of the time (reported in [Ahrefs](https://ahrefs.com/blog/best-lists-research/)).
- Ahrefs' own experiment concluded that self-promotional lists work "until it backfires" ([Ahrefs](https://ahrefs.com/blog/self-promotional-content-ai-seo-experiment/)).
- Agencies report visibility losses for such pages after the December 2025 core update (unverified; [Coalition Technologies](https://coalitiontechnologies.com/blog/self-promotion-listicles-for-ai-seo)).

### Off-site channels, ranked by fit

**1. Google Business Profile.** It is the strongest asset, but it carries a hidden risk. Google's rules say a business qualifies only if it **makes in-person contact with customers during its stated hours**, and they list "online-only businesses" as ineligible ([Google](https://support.google.com/business/answer/13763036); [Google Help](https://support.google.com/business/answer/7039811?hl=en-en)). The homepage footer says the office is "By appointment only" ([src/routes/index.tsx:746](../src/routes/index.tsx), verified in code). If the Kolkata office does not genuinely receive learners or enquirers in person during listed hours, the 125-review profile could be suspended.

If it is eligible, there is real value. Q&A has been replaced by the Gemini-powered "Ask Maps", which answers from the profile's services, reviews and website ([ALM Corp](https://almcorp.com/blog/google-maps-ask-maps/)); its India rollout is unconfirmed. Steps:
- Set hours to the staffed hours.
- Add one service per course with its ₹ price.
- Add the `wa.me` chat link ([BrightLocal](https://www.brightlocal.com/learn/google-business-profile/optimization/messaging/)).
- Ask every learner for a review at a fixed milestone.

Google's April 2026 policy bans incentives, gating, staff quotas and requests to name a staff member in a review ([PPC Land](https://ppc.land/google-tightens-maps-review-policy-staff-names-and-quotas-now-banned/)).

**2. YouTube and LinkedIn.** These are the UGC sources AI systems cite most consistently after Reddit. YouTube is heavily cited by AI Overviews, Gemini and Perplexity, and LinkedIn is the top-cited domain for career and B2B topics ([Peec AI](https://peec.ai/blog/top-domains-cited-by-ai-search-analysis-based-on-30m-sources); [Ahrefs on Gemini](https://ahrefs.com/blog/most-cited-domains-gemini/)). Workable formats:
- short lessons ("self-introduction for interviews", with a Hindi or Bengali explanation);
- a teacher introduction;
- a consented class clip;
- a LinkedIn company page and the founder's profile.

All of these fit Learn With Smile's interview and workplace focus.

**3. Reddit and Quora.** Use them as a disclosed, genuinely helpful answerer within each community's roughly 10% self-promotion norm ([Redship](https://redship.io/blog/reddit-self-promotion-rules)). Treat this as a hedge, not a core channel. ChatGPT's Reddit citations collapsed by at least 73% in mid-August 2026 ([Otterly](https://otterly.ai/blog/chatgpt-reddit-citations/)).

**4. Indian directories (UrbanPro, Justdial, Sulekha).** Their value is consistent name, address and phone listings and entity confirmation, not leads:
- UrbanPro's partner model takes 22–30% of all future payments from a student ([UrbanPro help](https://help.urbanpro.com/hc/en-us/articles/360054824934-What-are-the-deductions-for-the-UrbanPro-Partnership-Program)).
- Justdial shares each lead with 4–7 competitors ([Quora](https://www.quora.com/Is-registering-in-Justdial-for-tuition-lucrative)).
- Justdial does have a ChatGPT integration ([PNI News](https://www.pninews.com/justdial-partners-with-chatgpt-to-expand-digital-reach-for-small-businesses/)).

Free, complete profiles are worth having. Paid lead packages are not, yet.

### Who the assistants serve and how to stay findable

The audience fit favours ChatGPT. It had **100 million weekly users in India** in February 2026, its #2 market, and users aged 18–34 send about 80% of Indian consumer messages ([Croma](https://www.croma.com/unboxed/indians-top-chatgpt-usage-charts-in-asia-with-over-100-million-weekly-active-users)). Google's AI Mode runs in Hindi ([Google India](https://blog.google/intl/en-in/products/google-search-ai-mode-now-available-in-hindi/)), which gives the new Hindi and Bengali pages a role in AI answers too.

Because the brand name is generic, every off-site profile should use the identical string "Learn With Smile — online spoken English classes, Kolkata (learnwithsmile.app)". Each profile URL should then go into `SAME_AS`. Wikidata and Wikipedia should wait until independent press coverage exists, because self-created items are deleted as conflict of interest ([V9 Digital](https://www.v9digital.com/insights/how-to-create-a-wikidata-item-that-holds-up/)).

Visitors who arrive from AI tend to convert better than other visitors in most studies. Reported gaps range from +31% to 23×, though one 973-site study found the opposite for transactional purchases ([AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates); [Relevant Audience](https://www.relevantaudience.com/seo/why-chatgpt-traffic-converts-worse-than-google-search/)). The volume is small: about 1% of sessions on average. None of these studies covers education or India.

## Prioritised changes: quick wins first, authority over months

Effort is S (under a day), M (a few days) or L (ongoing or multi-week). Impact is a judgement of the effect on quality leads, not a measurement. Every impact rating is an inference.

### Week 1–2 quick wins

| # | Change | Where | Effort | Impact | Basis |
|---|---|---|---|---|---|
| 1 | Turn on a WhatsApp Business **away message** (outside 09:00–12:00, with days stated) that gives the reply time, asks 4 numbered qualifying questions plus "how did you hear about us", and offers the ₹199 demo payment link | WhatsApp ops | S | High | Speed-to-lead evidence; free app feature |
| 2 | Set up **labels** (New, Hot, Warm, Nurture, Consult booked, Demo paid, Enrolled, Lost, Wrong-fit, Opted-in), **quick replies** for the ten most common questions, and a greeting message | WhatsApp ops | S | Medium | Free app features; needed for measurement |
| 3 | Start a **weekly tally** (chats started → qualified → consult booked → demo paid → attended → enrolled, plus self-reported source) | WhatsApp ops | S | High (enables everything else) | No baseline exists today |
| 4 | Fix the garbled FAB prefill: change the default in `WhatsAppFab.tsx` or skip `withConsultAsk()` for full sentences | Site: [src/components/WhatsAppFab.tsx](../src/components/WhatsAppFab.tsx), [src/lib/whatsapp.ts](../src/lib/whatsapp.ts) | S | Low–Medium (hits the demo page) | Verified in code |
| 5 | Make **nav, dock and band prefills page-aware** with a short human phrase ("…from the Business English page") so every chat carries its source | Site: [src/lib/whatsapp.ts](../src/lib/whatsapp.ts), [src/components/WhatsAppFab.tsx](../src/components/WhatsAppFab.tsx), [src/components/ConsultOffer.tsx](../src/components/ConsultOffer.tsx) | S | High for attribution | Build audit: generic prefill on 4–12 links per page |
| 6 | **Rewrite the consultation promise** so it matches reality. Drop "see the course before you pay" / "we don't sell the room until you see it" unless a free class exists; say plainly what the free consultation is (1:1 chat or a group slot?) and point to the demo as the way to see a class | Site: [src/lib/consultation.ts](../src/lib/consultation.ts), [src/components/ConsultOffer.tsx](../src/components/ConsultOffer.tsx) | S | Medium–High | Verified contradiction in code |
| 7 | **Give the hero and dock two genuinely different actions**: "Ask a question on WhatsApp (replies 9–12 IST)" and the demo under one consistent name | Site: [src/routes/index.tsx](../src/routes/index.tsx), WhatsAppFab | S | Medium | Build audit: both buttons identical |
| 8 | Fix credibility slips: "8" → "about 6"; "Live, every hour"; the 30-days blog title; the six "IDP or British Council" lines; retired cities in the FAQ | Site: index.tsx:479, :40; blog.ts:240; the six files listed above; seo.ts:759 | S | Medium (trust and AI accuracy) | Verified in code |
| 9 | **Link to read the Google reviews**, and add "as of <date>" to the 5.0★/125 claim | Site: index.tsx stats, footer | S | Medium | Build audit: only the write-review link exists |
| 10 | Remove the analytics wording from the cookie bar and privacy policy, or remove the bar if only necessary storage is used | Site: [src/components/CookieBar.tsx](../src/components/CookieBar.tsx), [src/content/legal.ts:99](../src/content/legal.ts) | S | Low–Medium | Verified: no analytics exists |
| 11 | Open Search Console and Bing Webmaster Tools; confirm the sitemap; read the Gen-AI and AI Performance reports | Off-site | S | Medium (diagnostic) | Code says DNS-verified; data never reviewed |
| 12 | **Check GBP eligibility** and fix hours, categories, services with ₹ prices and the WhatsApp link | Off-site | S | High if eligible; protects 125 reviews | Google eligibility rules |
| 13 | Add a WhatsApp CTA to the 404 page | Site | S | Low | Build audit |

### Next 30–60 days

| # | Change | Where | Effort | Impact | Basis |
|---|---|---|---|---|---|
| 14 | **Cookieless click counting** on the existing `data-cta-goal` / `data-cta-location` attributes. Nothing reads them today. Use Umami (`data-umami-event`) or Plausible custom events; GitHub Pages cannot host a server-side redirect counter | Site | M | High for measurement | Verified: attributes present, no listener; [Umami](https://www.mintlify.com/umami-software/umami/tracking/events), [Plausible](https://docs.plausible.io/custom-event-goals) |
| 15 | Trial **WhatsApp Business AI** on fees, batches, timings, demo policy and wrong-fit answers (kids, IELTS, certificates); review its chats daily | WhatsApp ops | M | Medium–High, unproven | [Meta](https://about.fb.com/news/2026/05/introducing-business-ai-on-whatsapp-for-small-businesses-in-india/) |
| 16 | **Demo reminder sequence** (confirmation, evening before, 1–2 h before with link, recap within 24 h) and a short no-pressure follow-up cadence | WhatsApp ops | S | Medium | [No-show meta-analysis](https://pubmed.ncbi.nlm.nih.gov/27798006/) |
| 17 | **Desktop fallback**: QR code of the same chat, the number, and a domain email or 3-field form routed to the 09:00 inbox | Site | M | Low–Medium (share of desktop visitors unknown) | Inference |
| 18 | **Proof upgrade**: a 30–60 s teaching clip; teacher qualifications on `/educator`; dated, consented stories (with consent records per CCPA); a "How a 6-person, 90-minute class works" page giving speaking minutes per learner | Site | M | High | Competitor proof is self-asserted; [CCPA](https://www.medianama.com/2024/11/223-ccpa-new-guidelines-curb-misleading-ads-coaching-sect/) |
| 19 | **Publish a batch timetable** (slots and next start dates; no fake scarcity) | Site | S once data exists | Medium (pre-qualifies on time) | Build audit: none published |
| 20 | **NAP-identical free profiles** on LinkedIn (company and founder), YouTube, UrbanPro, Justdial, Sulekha, Bing Places, Foursquare; add each to `SAME_AS`; move email to `@learnwithsmile.app` | Off-site + [src/lib/seo.ts:56](../src/lib/seo.ts) | M | Medium | Entity disambiguation |
| 21 | **Listicle and roundup outreach** to The Tuition Teacher, Lanquill, EdTechReview, MyPrivateTutor, Careers360 Q&A and Kolkata media, pitching the "small live batch for adults under ₹2,000" niche with verifiable facts | Off-site | M, ongoing | High for AI answers | [Ahrefs](https://ahrefs.com/blog/best-lists-research/) |
| 22 | **Test the entry offer**: ₹199 framed as refundable after attending vs a free first class, alternating by month | Site + WhatsApp | M | Potentially High; unknown sign | Competitor entry points; Sept history |
| 23 | Monthly **AI prompt panel** (below) | Off-site | S, monthly | Diagnostic | No India study exists |

### Three to six months

| # | Change | Where | Effort | Impact | Basis |
|---|---|---|---|---|---|
| 24 | **YouTube channel**: short interview and workplace lessons with Hindi/Bengali explanations and teacher intros, using the exact brand string | Off-site | L | Medium–High over time | Citation studies |
| 25 | **Free 60-second speaking check on WhatsApp** (voice note in, level estimate and three fixes out) feeding the consultation; no Indian adult competitor offers one | WhatsApp + site | M | Medium–High, untested | Competitor gap |
| 26 | Disclosed, helpful answering on Reddit and Quora | Off-site | L | Low–Medium, volatile | [Otterly](https://otterly.ai/blog/chatgpt-reddit-citations/) |
| 27 | **Click-to-WhatsApp ads** in Hindi/Bengali, optimised for demo payment, run **only after** item 1 or 15 covers off-hours | Paid | M + budget | Medium | [SpeakX CEO](https://startuptalky.com/arpit-mittal-speakx-shares-insights/); vendor CPL ₹80–400 |
| 28 | Remaining speed work: veil only the hero, code-split the entry bundle | Site | M | Low–Medium | October audit |
| 29 | Press with a data or story angle (Kolkata adults and interview English), and Wikidata only after independent coverage exists | Off-site | L | Medium, long-term | Entity notability |

Several things are deliberately **not** recommended:
- more self-ranking "best of" pages;
- restoring the retired city pages;
- further llms.txt or schema work aimed at AI ranking;
- paid UrbanPro or Justdial lead packages before free profiles prove demand;
- "limited seats" urgency;
- review requests that name a teacher.

## Measuring leads without bringing back tracking pixels

The September audit traced the lead fall to a period with no measurement, and the same blindness would hide whether this plan works. The measurement plan below needs no cookies and stores no personal data on the site. Its core is a **weekly funnel count** with one definition each:

- **Click**: a WhatsApp tap counted by page and CTA (item 14).
- **Chat**: a sent message.
- **Quality lead**: aged 15+, a goal the courses serve, a slot that matches a batch, and either answered the qualifying questions or booked. The owner should confirm this definition.
- **Consultation held.**
- **Demo paid.**
- **Demo attended.**
- **Enrolled within 14 days.**

Reading the counts together tells you where a problem sits. If clicks fall, the cause is traffic or search. If clicks hold but chats fall, the cause is the WhatsApp hand-off. If chats hold but quality falls, the cause is targeting or copy.

Source attribution comes from three layers:

1. **Page-aware prefills** (item 5), so the first line of every chat names the page.
2. **The self-reported "how did you hear about us" answer**, logged as a label. This is the only way to capture AI-influenced leads, because many arrive as direct or branded visits with no referrer ([Kapwing on dark social](https://www.kapwing.com/resources/dark-social/)). The answers have recall bias, so read them alongside the click counts ([Recast](https://getrecast.com/hdyhau/)).
3. **Referrer-based channel grouping in the cookieless counter.** ChatGPT appends `utm_source=chatgpt.com` to its links ([OpenAI](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)), and the counter can group referrers from perplexity.ai, copilot.microsoft.com, gemini.google.com and claude.ai.

Clicks from AI Overviews and AI Mode cannot be separated from organic search in any analytics tool ([PPC Land](https://ppc.land/google-ai-mode-now-counts-toward-search-console-totals/)). If the owner ever adopts GA4, its default "AI Assistant" channel covers ChatGPT, Gemini and Copilot but not Perplexity, which needs a custom rule ([Insightland](https://insightland.org/blog/how-to-track-chatgpt-perplexity-and-gemini-traffic-in-ga4-a-complete-2026-setup-guide/)).

Four first-party visibility sources complete a monthly review:

- **Search Console's Generative AI report** (Beta since June 2026): AI Overview and AI Mode impressions by page and country, with no clicks or queries ([Search Engine Journal](https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/)).
- **Bing Webmaster Tools AI Performance**: Copilot citations and grounding queries, a free view of how AI phrases spoken-English questions.
- **GBP Insights.**
- **A manual prompt panel**: about 20 prompts in English and Hinglish, run in ChatGPT, Gemini, Copilot, Perplexity and AI Mode. Examples: "best online spoken English classes for working professionals India", "small batch spoken English class under 2000", "english bolna kaise sikhe online class". Log every brand named and every source cited. Answers vary between runs, so use repeated runs and watch trends, not single results.

### What it takes to reach 100

There is no baseline, so the target can only be worked backwards with placeholder rates. The numbers below are illustrations, not forecasts, and should be replaced after the first month of counting.

**Scenario A:**
- 50% of chats qualify.
- 70% of WhatsApp taps become sent messages.
- 3% of sessions produce a tap.
- Result: 100 quality leads a month need about 200 chats, 285 taps and roughly 9,500 sessions.

**Scenario B:** tap rate rises to 4%, qualification to 65%, and send rate to 80%. Clearer buttons, honest offer copy and the instant away message all push in this direction. About 5,500 sessions then do the same job.

The lesson holds whatever the true rates turn out to be: improving conversion multiplies every source of traffic, including the slow-building AI and off-site work.

There is also a capacity check. With one named teacher, batches of about 6 and up to two classes a week, the owner needs to confirm how many new learners a month can actually be placed. Otherwise 100 quality leads become waiting lists (inference).

## What the owner needs to decide or supply before implementation planning

| # | Decision or information | Why it blocks planning |
|---|---|---|
| 1 | The **definition of a quality lead** and the **period** for "100+" (per month? per quarter?) | Sets the target and the tally labels |
| 2 | **Baseline counts** for July–October: chats, consultations, demos, enrolments per week, and the source if known | Without them no change can be judged |
| 3 | **Search Console, Bing Webmaster Tools and GBP Insights** access or exports | Shows which pages and queries already bring clicks or AI impressions |
| 4 | **Does the Kolkata office receive learners or enquirers in person during staffed hours?** Exact address and hours | Decides whether the GBP is eligible or at risk |
| 5 | **The entry offer**: keep ₹199, make it refundable after attending, restore a free first class, or run a test. And **what the free consultation actually is**: a 1:1 WhatsApp chat or a scheduled group "small-batch counselling" slot | Drives hero, band, consultation and demo copy |
| 6 | **Reply coverage**: can an evening window, a part-time responder or WhatsApp Business AI be added? Which days are replies given? | The biggest likely leak; also gates any paid ads |
| 7 | **Measurement stance**: is a cookieless counter (Umami or Plausible, small monthly cost or self-host) acceptable, or prefills and self-report only? | Determines items 14 and 10 |
| 8 | **Desktop fallback**: is a short form or a domain email acceptable? Who checks it? | Item 17 |
| 9 | **Proof evidence**: a current review count and link; records for "500+ learners" and "7 years"; whether the six stories are real names with consent; teacher qualifications; willingness to appear on video; consent for class clips (including parents for 15–17) | Items 9, 18 and 24, and CCPA exposure |
| 10 | **Batch timetable and capacity**: actual slots, next start dates, the maximum number of new learners per month | Item 19 and whether 100 leads can be served |
| 11 | **Pricing and catalogue**: confirm ₹1,999 for Business English and Interview Preparation; whether interview practice inside Spoken English overlaps the separate course; whether IELTS-related pages and prefills should invite enquiries at all | Removes contradictions and wrong-fit leads |
| 12 | **Languages actually taught**: is the Hindi or Bengali bridge available in every batch? | The Hindi/Bengali pages, YouTube and ads depend on it |
| 13 | **Time and budget** for YouTube, outreach and optional Click-to-WhatsApp ads | Sequencing of items 21–27 |
| 14 | **Policy for 15–17-year-olds** (parent as contact, marketing only to 18+?) | DPDP children's-data rules |
| 15 | The owner's recollection of **when leads fell** relative to the August–October changes (the ₹0 demo removed, calls demoted, price rises) | Narrows which reversals to test first |

## Conclusion

Learn With Smile does not have an SEO problem in the usual sense. Its pages are better built than most competitors', and Google says the AI features need nothing more. The site's real weaknesses are human-scale and fixable:

- it offers a choice that is not a choice;
- it makes a promise its free path cannot keep;
- it shows proof nobody can check;
- it leaves an enquiry overnight without asking anything useful.

These sit closest to the money, cost almost nothing to fix, and make every later visitor worth more, whichever search engine or assistant sends them.

The AI-visibility opportunity is real but slower. Assistants repeat what third parties say, and today third parties say "EngVarta for adults, British Council for certificates, Cambly for native speakers". The open slot is "live small-batch speaking practice for adults under ₹2,000", and filling it means earning mentions elsewhere, not adding pages at home. Underneath both sits the measurement gap. Without a weekly count of clicks, chats, quality leads and enrolments, neither the owner nor any future audit can say whether the path to 100 is working. That is why counting comes first.
