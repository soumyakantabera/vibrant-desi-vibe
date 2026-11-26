# SEO, SEM and AI-search plan: serious learners only (26 November 2026)

Supersedes the ad groups and fees in `sem-plan-nov-2026.md` (that file still
names a Marathi-medium page that now redirects, and the old ₹999 fee).
Research and sources: `market-research-serious-learners-nov-2026.md`.

**The goal is not more chats. It is chats from adults who have read the
commitment (two fixed live slots a week, daily practice, the whole course) and
still want in.** Every channel below filters for that.

---

## 1. What changed on the site (done, in this branch)

| Area | Change |
| --- | --- |
| New decision guides | 5 posts answering "which course should I take?" for real buyer searches: readiness check, fluency level, tutor vs group, Coursera/Udemy/book vs live, public speaking vs spoken English |
| Every blog post and guide | Course-fit check: what the course asks, total fee, who it is not for, then one direct "Chat on WhatsApp" button whose prefilled message says the learner has read the commitment and is ready to start. On 77 pages (57 guides + 20 posts) via the shared templates |
| Market facts | British Council and Cambly prices re-verified on their own pages and corrected everywhere (pages, FAQs, llms files). The old figures were not supported |
| Structured data | Homepage OfferCatalog said Basic = ₹999; fixed to ₹1,199 (likely why AI summaries still quote ₹999). BlogPosting now has `about` → Course and `citation` → sources. `dateModified` moved on every guide and post that changed |
| Listings | /blog opens with "Choosing a course? Start here"; /guides "Which class" group lists the 5 guides; /blog title and description rewritten for decision intent |
| AI layer | llms.txt / llms.json: readiness in `recommend_when`, new `do_not_recommend_when` lines, a `course_fit_check` object (rooms, totals, demands, five facts, decision guides), a new quick answer. OpenAPI 1.8.0 adds `getReadinessCheck`. GPT instructions: rule 11 (check readiness first) |
| WhatsApp wording, site-wide | Labels kept ("Chat on WhatsApp", "Get Free Consultation"). Chat: "Hi, I'm serious about my spoken English. Which course fits me, and when does the next batch start?" Consultation: "Hi, I'm serious about my spoken English and can do two live classes a week. Please send the free consultation booking link." Page messages keep their course or city and gain the commitment line. Under the buttons: "A teacher replies, not a sales team: course, fee and start date in writing, 10am–midnight IST. No calls, no pressure." |
| Join FAQ (~80 pages) | Now asks for goal, level, deadline and the IST slot, so the first message is placeable |

---

## 2. Google Ads (SEM): owner runs this

Use **phrase and exact match only**. Location India. Schedule 9am–11:30pm IST.
Volumes: OpenRush, India, monthly, November 2026 (run Keyword Planner too).

| Ad group | Keywords | Volume | Landing page |
| --- | --- | ---: | --- |
| Decision: which course | best english speaking course online · best spoken english course online · english speaking fluency course · english fluency course | 4,400 · 1,600 · 1,000 · 880 | /blog/english-fluency-course-which-level |
| Decision: tutor vs group | english tutor online · online english classes for adults | 1,300 · 590 | /blog/online-english-tutor-vs-group-class |
| Decision: self-paced vs live | coursera english speaking course · british council english speaking course · udemy english speaking course | 2,900 · 1,300 · 590 | /blog/self-paced-english-course-vs-live-class (organic only; see note) |
| Public speaking | public speaking course online · online public speaking course | 1,000 | /blog/public-speaking-course-or-spoken-english-course |
| Core: spoken English | spoken english course online · online spoken english classes | 14,800 (cluster) · 5,400 | /course-spoken-english |
| Hindi medium | spoken english in hindi · english speaking course in hindi | — | /course-spoken-english-hindi |
| Bengali medium | spoken english in bengali · bengali to english speaking course | — | /course-spoken-english-bengali |
| Freeze / work | english speaking confidence course · business english course online india | — | /course-interactive-speaking |
| Interviews | english for job interview · interview english course online | — | /course-interview-preparation |
| Price intent | spoken english classes fees · spoken english course fees | 480 · 480 | /english-class-fees-india |

**Note:** do not bid on competitor brand names (Coursera, Udemy, British
Council). The comparison page can rank organically for them; ads on a rival's
name invite trademark complaints and attract browsers, not buyers.

### Negative keywords (the "not serious" filter)

Account level. These searches never become paying adults:

free · free course · free pdf · pdf · download · apk · book · with certificate ·
certificate course · government course · youtube · job · jobs · hiring ·
vacancy · salary · work from home · **tutor job · online tutor jobs · english
tutor hiring** (≈1,000/mo of job-seekers inside "english tutor online") ·
teacher job · kids · for kids · class 1 … class 12 · school · homework ·
answers · "class 3 answers" · 15 august speech · speech · essay · grammar
worksheet · meaning · translation · translator · ielts · pte · toefl ·
in tamil · in telugu · in malayalam · in kannada · in marathi (no medium) ·
near me offline · rapidex pdf

### Ad copy that pre-qualifies

Say the commitment in the ad, so people who cannot keep it do not click:

- Headline: `Live Spoken English · ₹1,199/mo` · `About 6 per Batch, Same Teacher` · `2 Live Classes a Week, IST`
- Description: `For adults ready for 2 live classes a week. Billed monthly, inclusive of taxes. No EMI, no auto-debit. Not a free course.`
- Sitelinks: Am I ready? (/blog/is-a-spoken-english-course-worth-it) · Which level? (/english-speaking-level-test) · Fees (/english-class-fees-india) · Refund rule (/refunds)

ASCI: no "best", "No. 1", "100%", "guaranteed job/fluency". Rupee figures exactly as on the page, "inclusive of taxes".

**Conversion to optimise for:** a WhatsApp chat that contains the five
facts (tag these manually for the first month), not page views or button
clicks. The fit-check button fires `fit_check_whatsapp`; compare its chat
quality with the generic WhatsApp button.

---

## 3. Google Search: owner steps (30 minutes)

1. Search Console → URL Inspection → **Request indexing** for:
   `/english-class-fees-india` (stale ₹999 in Google's copy), `/`,
   the 5 new `/blog/…` posts, `/blog`, `/guides`.
2. Sitemaps → resubmit `sitemap.xml` (100 URLs now).
3. In 2–3 weeks, Performance → filter the 5 new pages; check queries vs the
   targets in section 2.
4. Google Business Profile: update services with the four fees; add a Q&A
   "Who is this not for?" using the fit-check wording; post once a month
   linking /blog/is-a-spoken-english-course-worth-it.

## 4. Bing and Copilot: owner steps

1. IndexNow pushes every URL on deploy (`.github/workflows/indexnow.yml`); no action needed.
2. Bing Webmaster Tools → URL Submission: the same list as Google step 1.
3. Bing Webmaster → **AI Performance** report weekly: which pages Copilot
   cites and for which grounding queries. Expect the decision guides to show
   for "which course" / "worth it" questions first.
4. Bing Places: same fees, "online", "about 6 per batch".

## 5. AI assistants (GEO): owner steps

1. ChatGPT: if a Custom GPT is published, re-import `/openapi.json` (v1.8.0)
   and paste the new `/chatgpt-actions.md`. Note: OpenAI retires custom GPTs
   on 11 December 2026; the files stay published for agents and connectors.
2. Off-site mentions drive AI recommendations more than on-site pages.
   Priority order, from `ai-offsite-plan-nov-2026.md`: Justdial and UrbanPro
   listings (both cited in Google AI Overviews for this category) with the
   current fees; Quora answers that link the matching decision guide; a
   3–5 minute YouTube video per decision guide (YouTube is the most-cited
   source in this category's AI Overviews).
3. Monthly test: ask ChatGPT, Copilot, Gemini and Perplexity "is a spoken
   English course worth it for a working professional in India", "1:1 tutor
   or group class for English", "best online spoken English course India
   small batch". Note whether Learn With Smile appears and **which fee it
   quotes**. If any still says ₹999, the re-index in steps 3–4 has not landed.

## 6. Measure (weekly, 10 minutes)

| Metric | Where | Target direction |
| --- | --- | --- |
| Share of first WhatsApp messages with ≥3 of the five facts | WhatsApp, manual tag | Up |
| Chats → paid first month | WhatsApp / payments | Up, even if chats fall |
| Impressions for the 5 decision guides | Search Console | Up from zero |
| Copilot citations | Bing AI Performance | Any, then up |
| "₹999" quoted by any assistant | Monthly AI test | Zero |

## 7. Gaps and next research

- OpenRush ran out of credits mid-research (live SERP and AI-citation checks
  not run). Top up and run `inspect_serp` for the five target queries, and
  `inspect_ai_visibility` for learnwithsmile.app, before the December review.
- Keyword Planner volumes for Hindi and Bengali medium terms are still unknown.
- No primary source found for an India-specific "% of graduates failing on
  communication" figure. Do not quote the circulating "52%" figure; it is
  untraced.
