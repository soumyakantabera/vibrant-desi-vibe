# SEO / AEO Audit — learnwithsmile.app

Target market: **India**. Audited August 2026. Covers technical crawlability,
metadata, structured data, AI-assistant visibility (AEO), keyword targeting,
competitor positioning, and the A/B testing setup added alongside.

---

## 1. The headline finding

**Before this change, 13 of the site's 14 pages were served to Google with HTTP
status 404, and every page was blank to AI crawlers.**

Everything else in this audit is secondary to that. The metadata on those pages
was, in several cases, already good — it just could not matter, because the
pages were not indexable and had no readable body.

### 1a. Every non-root URL returned 404

`.github/workflows/deploy.yml` built a client-side SPA and then did:

```
cp dist/index.html dist/404.html
```

That is the standard SPA-on-GitHub-Pages trick, and for humans it works — the
browser loads `404.html`, the router boots, the right page renders. But GitHub
Pages serves that file **with HTTP status 404**, because it is the not-found
handler. Only `/` resolved to a real file.

Google drops 404s from the index. So `/course-ielts`, `/course-spoken-english`,
`/book-free-demo` and ten others were structurally unable to rank, regardless of
their content or metadata.

Verified against the built output: the baseline build produced exactly one HTML
file, `dist/index.html`.

**Fix.** `scripts/prerender.mjs` now renders every route to a real file on disk
(both `course-ielts.html` and `course-ielts/index.html`, so neither URL form
404s or costs a redirect hop). Confirmed with a server that mimics Pages'
resolution: all 14 routes return 200, and only genuinely missing URLs 404.

### 1b. The body was empty to every crawler that does not run JavaScript

The shipped HTML body was `<div id="root"></div>`. Googlebot does render
JavaScript, on a delayed second pass. **GPTBot, OAI-SearchBot, ChatGPT-User,
ClaudeBot, Claude-SearchBot, PerplexityBot and Bingbot largely do not.**

This is the direct answer to "is there any problem of fetching content for
GPTs": yes, and it was total. An AI assistant asked to summarise
`learnwithsmile.app/course-ielts` would have found an empty page. Not thin
content — *zero* content.

**Fix.** Prerendering puts the real text in the HTML. Measured, per page, with
scripts stripped:

| Page | Readable text before | After |
|---|---|---|
| `/` | 0 chars | 10,848 |
| `/course-spoken-english` | 0 chars | 7,020 |
| `/course-ielts` | 0 chars | 6,181 |
| `/why-us` | 0 chars | 3,406 |
| every other route | 0 chars | 1,800–4,700 |

The SPA still boots and takes over navigation exactly as before — this is
prerendering, not a rewrite.

> **What did work:** route-level `head()` metadata *was* being applied at
> runtime, because `RootShell` renders on the client and carries `<HeadContent/>`.
> So a JS-rendering crawler did eventually see the right title and description.
> The problem was the 404 status and the empty pre-JS body, not the head plumbing.

---

## 2. Domain mismatch — canonical tags pointed at a different site

The site is served from `www.learnwithsmile.app` (per `public/CNAME`), but the
code declared `https://learnwithsmile.in` in:

- the `Organization` and `WebSite` JSON-LD on the homepage
- the `EducationalOrganization` JSON-LD in `__root.tsx`
- the canonical tag and `ItemList` URLs on `/english-career`
- the `Course` schema `provider`, `offers.url` and `hasCourseInstance.location`
  on all six course pages

A canonical tag pointing at a different domain is an instruction to Google to
index *that* domain instead. Combined with the 404 issue, the site was telling
search engines to ignore it and go elsewhere.

`/` and the six course pages also emitted canonicals built from
`withBasePath("/")`, which produces the **relative** path `/`. Canonicals must be
absolute; relative ones are unreliable at best.

**Fix.** One constant, `SITE_URL` in `src/lib/seo.ts`, is now the only place the
domain appears. Every canonical, `og:url`, JSON-LD `@id` and sitemap entry
derives from it. The prerender step asserts each page has exactly one canonical
pointing at the expected absolute URL, and fails the build if not.

---

## 3. Crawler access — robots.txt

`public/robots.txt` was three lines: `User-agent: * / Allow: /` plus a sitemap
line. Not *blocking*, but silent on every AI crawler, and silent on
`Google-Extended` — Google's separate opt-in that governs whether a site can
appear in Gemini and AI Overviews. Absent that directive, Google may index the
site while excluding it from AI answers.

**Fix.** robots.txt now explicitly allows, by name: Googlebot, Google-Extended,
Bingbot, Slurp, DuckDuckBot, Yandex, GPTBot, OAI-SearchBot, ChatGPT-User,
ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, PerplexityBot,
Perplexity-User, Applebot, Applebot-Extended, Meta-ExternalAgent, Amazonbot,
cohere-ai, YouBot and CCBot.

One exclusion: **Bytespider** (ByteDance) is disallowed. It accounts for the
large majority of AI crawler traffic and has a documented history of ignoring
robots.txt. That is a bandwidth decision, not a content one.

Also added `/llms.txt`, generated from the same source as the sitemap — a clean
summary of courses, fees, format and contact details for assistants that read
it, so they do not have to parse fourteen pages to answer "how much does it
cost".

Every page now also carries
`robots: index, follow, max-snippet:-1, max-image-preview:large`, which removes
the default snippet-length cap — relevant because AI summarisers respect it.

---

## 4. Sitemap

The old `public/sitemap.xml` was hand-maintained, had the right domain but no
`<lastmod>` on any entry, and would silently drift as pages were added.

**Fix.** Generated at build time from `ALL_PATHS`, with `lastmod`, per-page
`priority` and `changefreq` drawn from the same `PAGES` table that drives the
metadata. Adding a page to `PAGES` adds it to the sitemap, the prerender list
and `llms.txt` at once — there is no second place to remember.

---

## 5. Structured data

**Before:** `EducationalOrganization` (with the wrong URL) sitewide,
`Organization` + `WebSite` on the homepage, `Course` + `FAQPage` on course
pages, `ItemList` on the hub.

**After**, per page:

| Type | Where | Why |
|---|---|---|
| `EducationalOrganization` | every page | Entity resolution — lets Google and AI assistants connect "Learn With Smile" to a real business with a phone number, address and languages |
| `LocalBusiness` + `GeoCoordinates` | every page | Kolkata local pack eligibility, opening hours, `priceRange` |
| `WebSite` | every page | Site-level entity, linked by `@id` |
| `WebPage` | every page | Per-URL entity, linked into the graph |
| `BreadcrumbList` | all non-home pages | Breadcrumb display in results instead of a raw URL |
| `Course` + `Offer` + `CourseInstance` + `Syllabus` | 6 course pages | Google's course experiences; `Offer.price` in INR is what surfaces the fee in a rich result |
| `FAQPage` | 5 static + 6 course pages | See §6 — the single biggest AEO lever |
| `Person` | `/founder` | Answers "who teaches there"; the entity an E-E-A-T assessment looks for |
| `Blog` + `BlogPosting` | `/blog` | Article surfaces |
| `ItemList` | `/english-career` | Whole catalogue with prices from one fetch |

Two bugs found and fixed in the process:

- The root route emitted the **homepage's** canonical, description and FAQ
  schema on every page. A homepage `FAQPage` on `/course-ielts` is a
  structured-data violation (the answers are not on that page), and the
  duplicate canonical would have undone the fix in §2. Site-wide and page-level
  head are now cleanly separated (`siteHead()` vs `pageHead()`).
- Course pages declared `og:image:width/height` of 1200×630 for images that were
  actually 1024×1024, 1280×896 or 676×800 portrait. All eleven OG images have
  been regenerated as true 1200×630 crops, so the declared dimensions are now
  honest and previews do not letterbox.

**Deliberately not added: `AggregateRating` / `Review`.** Self-hosted
testimonials are not eligible for review rich results under Google's policy, and
marking them up invites a manual action. The testimonials stay as visible
content, which is where their value is.

---

## 6. Keyword and metadata strategy — India

### The competitive reality

| Competitor | Model | Price point | Where they win |
|---|---|---|---|
| **Cambly** | On-demand native-speaker video, no curriculum | ₹300–2,200/lesson | Brand, native speakers, instant availability |
| **EngVarta** | Daily 1:1 audio with certified Indian experts | ~₹108/session (₹2,700 / 25 sessions) | Cheapest live 1:1 in India; enormous long-tail content |
| **PlanetSpark** | 1:1 for children | Premium | Kids segment, heavy paid acquisition |
| **British Council** | Structured course + certificate | Premium | Brand authority, certification |
| **Learn With Smile** | Live **small batch (max 6)**, fixed syllabus, real teacher | ₹999–1,999/**month** | See below |

Head terms — "spoken english classes", "online english course" — are owned by
competitors with eight-figure ad budgets and thousands of indexed pages. Trying
to rank for those is not a plan.

The defensible position is the intersection nobody else occupies: **a fixed
syllabus taught live by one human teacher to at most six students, priced per
month rather than per session.** Cambly and EngVarta have no curriculum.
PlanetSpark is for children. British Council runs large classes at three times
the price. That combination is what the metadata now leads with — every course
title carries the price *and* the batch cap, because both are the differentiator
and the qualifier.

### Keywords targeted

Five intent groups, applied per page in `src/lib/seo.ts`:

1. **Price-qualified** — "english class fees per month in india", "english
   classes under 1000 rupees", "ielts online classes india fees"
2. **Format** — "small batch english classes online", "max 6 students english
   batch", "live english class vs recorded course"
3. **Audience** — "english speaking course for working professionals",
   "spoken english class for zero level students", "english classes flexible
   timing working professionals"
4. **Geo** — "spoken english classes kolkata online", plus `geo.region=IN-WB`,
   `geo.position`, `og:locale=en_IN`, `lang="en-IN"` and `hreflang` on all pages
5. **Question / AEO** — below

Note on `keywords` meta: it carries essentially zero weight for Google. It is
included because AI answer engines do read it as a topical hint and it costs
nothing. It is not load-bearing.

### The AEO layer — what actually gets cited by ChatGPT and Perplexity

AI assistants are asked questions, not queries. They retrieve and quote passages
that answer a question directly and self-containedly. So 30 question-shaped FAQs
were written in the phrasing people actually use with assistants, each with a
complete, specific answer:

- "How much do online spoken English classes cost in India?"
- "Which is the best online spoken English class in India for a small batch?"
- "Can I actually learn to speak English fluently in 6 months?"
- "Are online English classes as effective as offline coaching centres?"
- "How much does IELTS coaching cost in India?"
- "How many months does it take to prepare for IELTS Band 7?"
- "What is the difference between spoken English and business English?"
- "How should I answer 'tell me about yourself' in an interview?"
- "What is the STAR method and do Indian interviewers use it?"
- "How much does career counselling cost in India?"
- …and twenty more

Three deliberate choices in how these are written:

1. **They cite real numbers, including competitors'.** "Group online English
   classes in India typically run ₹800–₹3,000 per month; 1:1 native-speaker
   platforms run ₹300–₹2,200 per session." A passage with concrete figures and
   honest market context is far more likely to be retrieved and quoted than
   marketing copy, and being the source of the comparison is worth more than
   pretending competitors do not exist.
2. **They concede where the honest answer is "it depends".** The "best online
   spoken English class" answer names EngVarta, Cambly, PlanetSpark and British
   Council and says what each is better at, then states the specific gap this
   business fills. Assistants reward this; pure self-promotion reads as an ad
   and gets skipped.
3. **Every answer is rendered visibly on the page**, not only in JSON-LD.
   `FaqSection` and the course FAQ block render the exact list the `FAQPage`
   schema describes. Schema whose questions are not on the page is a violation,
   and an assistant that fetches the page finds nothing to quote.

### Metadata rewritten

`index.html` still carried `"Live online English, IELTS, **Excel, Python, Power
BI** classes"` — courses the site no longer offers. That was the description
served on the only indexable URL. All 14 titles and descriptions are rewritten,
front-loading price, format and India context.

Several titles exceed the ~60-character SERP display limit and will truncate.
That is intentional: the brand name sits at the end, so what gets cut is
"| Learn With Smile" rather than the differentiator.

---

## 7. A/B testing

Added `src/lib/ab.ts` — a client-side framework with no backend, since the site
is static.

Two live experiments, both on the homepage, both measured against the same goal:

| Experiment | Variants | Hypothesis |
|---|---|---|
| `hero_headline` | control / `price_anchor` / `outcome` | Leading with ₹999 or with a concrete outcome beats the brand-led headline, because Indian learners comparison-shop on price and on "will this work for me" |
| `primary_cta` | control / `free_slot` / `no_card` | Naming the objection ("No Card Needed") lifts clicks more than "Enroll", because the hesitation is fear of a sales trap, not price |

Design constraints it satisfies:

- **No cloaking.** `useVariant` returns the control during prerender and on
  first paint, and only swaps after mount. The static HTML a crawler fetches
  always contains the control. Variants say the same thing in different words,
  which is what Google's A/B testing guidance permits.
- **Sticky assignment** in `localStorage`, keyed per experiment, so adding an
  experiment never reshuffles existing ones and returning visitors stay in their
  bucket.
- **Two experiments, not ten.** At the traffic a new education site gets, more
  concurrent tests means none reaches significance.

Every WhatsApp button — the site's only conversion — now fires an `ab_conversion`
event stamped with all live variant assignments. Events go to `dataLayer` (GTM)
and `gtag` (GA4) if present, and are dropped silently otherwise.

**This is the one item that is wired but not yet producing data:** no analytics
tag is installed on the site. Add GA4 or GTM and the events start flowing with
no further code changes. In GA4, conversion rate per variant is
`count(ab_conversion) / count(ab_exposure)` grouped by `experiment_id` and
`variant_id`.

---

## 8. Build pipeline

`bun run build:pages` now runs three stages:

1. `vite build --config vite.config.pages.ts` — the client SPA, unchanged
2. `vite build --config vite.config.prerender.ts` — an SSR bundle of the same app
3. `node scripts/prerender.mjs` — renders each route to static HTML, writes
   `sitemap.xml` and `llms.txt`

The prerender step fails the build if any page ends up with zero or multiple
canonical tags or titles. The deploy workflow adds a `Verify crawlability` step
that fails if a representative page ships without a canonical, without
structured data, or with an empty `#root` — so a regression back to the blank
SPA cannot deploy silently.

`404.html` is now the clean SPA shell rather than a copy of the homepage, so
genuinely missing URLs return a 404 that says so.

---

## 9. Known gaps

Things worth doing that are outside this change:

- **No analytics installed.** The A/B framework and conversion events are inert
  until GA4 or GTM is added. This is the highest-value next step.
- **Social profiles are placeholders.** The footer's Instagram, Facebook,
  LinkedIn and YouTube links are all `href="#"`. `sameAs` in the Organization
  schema therefore lists only the WhatsApp link. Real profile URLs in `sameAs`
  measurably strengthen entity resolution.
- **Blog posts have no individual URLs.** All five live on `/blog`, so they are
  marked up as an inline `Blog` rather than as `BlogPosting` entities at their
  own URLs. Individual routes would be the single biggest organic-traffic
  opportunity left — the question-shaped FAQ answers show the format that works.
- **`foundingDate: 2019`** in the Organization schema is inferred from "7 years
  of teaching". Worth confirming.
- **Repo-wide Prettier formatting is failing**, on files untouched by this
  change (`src/server.ts`, `src/routes/why-us.tsx` and others). New files added
  here are formatted; the pre-existing failures are left alone rather than
  buried under a whole-codebase reformat. Worth a separate `bun run format`
  commit.
- **Testimonials are unverified as structured data.** Deliberate — see §5.

---

## Sources

- [AI Crawler User Agents Explained: A 2026 Reference](https://www.honeyb.ai/blog/ai-crawler-user-agents-reference-2026)
- [Which AI Crawlers to Allow in robots.txt: 2026 List](https://www.cite.sh/blog/ai-crawler-guide/)
- [Robots.txt & AI Crawlers in 2026: The Full Guide](https://dataimpulse.com/blog/robots-txt-ai-crawlers/)
- [Best Online Spoken English Classes in India (2026)](https://thetuitionteacher.com/blog/best-online-spoken-english-classes-in-india/)
- [Best Spoken English Classes In India 2026](https://engvarta.com/best-spoken-english-classes-in-india/)
- [Top 10 Spoken English Classes Online in India — EdTechReview](https://www.edtechreview.in/elearning/top-10-spoken-english-classes-online-in-india/)
- [Top 7 Best Cambly Alternatives In India](https://speakingfever.com/cambly-alternatives-in-india/)
