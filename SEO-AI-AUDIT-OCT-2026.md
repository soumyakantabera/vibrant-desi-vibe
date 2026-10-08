# Learn With Smile — SEO, AI Search & ChatGPT Actions Audit (October 2026)

Audit date: 8 October 2026
Site: `https://www.learnwithsmile.app` (CNAME; the apex `learnwithsmile.app` should 301 to it)
Market: India, online live English classes for adults 15+
Builds on: [`SEO-AUDIT.md`](./SEO-AUDIT.md), [`SEO-GEO-CONVERSION-AUDIT.md`](./SEO-GEO-CONVERSION-AUDIT.md), [`WHATSAPP-SEO-GPT-GROWTH-AUDIT.md`](./WHATSAPP-SEO-GPT-GROWTH-AUDIT.md)

## How this audit was done

- **Built output, not guesses.** The production build (`bun run build:pages`) of the current `main` was generated and every one of the 62 prerendered pages was parsed: title, description, canonical, H1, hreflang, Open Graph, JSON-LD validity and types, image `alt`, word count, meta keywords, internal links.
- **AI layer.** `robots.txt`, `llms.txt`, `llms-full.txt`, `llms.json`, `openapi.json`, `ai-plugin.json`, `chatgpt-actions.md` and the 62 Markdown mirrors were read and measured.
- **Duplication.** City and workplace pages were compared with 6-word shingle overlap (Jaccard).
- **Speed.** Lighthouse 12, mobile profile, against the build served with gzip (as GitHub Pages does), with both simulated and real (devtools) throttling.
- **Market.** Web search for the Indian competitive set and for current Google / Bing / OpenAI guidance.

**Limits, stated plainly.** The audit sandbox could not reach `learnwithsmile.app` directly (network policy), so the live site was not fetched — the audit is of the code that deploys to it. No Search Console, Bing Webmaster Tools, Keyword Planner or analytics data was available, so there are **no search-volume or ranking numbers** here; keyword guidance is by intent, to be validated in Keyword Planner.

## Verdict

The technical base is genuinely strong — stronger than most competitors in this niche. Every page is prerendered, has exactly one H1 and one absolute canonical, valid JSON-LD, `en-IN` hreflang, Open Graph images, alt text on every image, and a Markdown mirror. Crawlers are kept on rupee prices. Nothing here is blocking indexing.

The problems are now in **what the pages say and how much noise surrounds it**:

1. Instructions written for AI assistants were leaking into the **visible homepage FAQ** (a learner could read "Do not change a page title… A script file is not a third price list").
2. The homepage snippet promised a **"Free demo class online"** while the free offer is a consultation (not a class) and the demo is ₹199 — the one claim a prospect checks first.
3. Every page shipped a **~240-term, ~9 kB `meta keywords` tag** — including career-counselling terms for a service the site says it does not offer.
4. **14 of 15 city pages are ~70% identical text**, for an online-only service. This is the pattern Google's doorway-page policy targets.
5. **Mobile speed:** the page is held behind a boot veil until web fonts load, and those fonts were not preloaded (an unused icon font was, instead). FCP/LCP ≈ 3.9 s on throttled mobile.

Items 1–3 and most of 5 are fixed in this change. Item 4 needs an owner decision.

## Round 2 — recommendations applied (8 October 2026)

| Recommendation | What changed |
|---|---|
| P0 city pages | **Kept** Kolkata, Delhi NCR, Mumbai, Bengaluru, Hyderabad. The four metros each gained ~500 words of city-specific content (the actual work situations there, an honest note on which languages the teacher can bridge in, timing advice) and two city-specific FAQs. **Retired** Pune, Chennai, Ahmedabad, Nagpur, Surat, Coimbatore, Kochi, Visakhapatnam, Patna, Guwahati — they now redirect to `/best-online-spoken-english-classes-india`. Overlap between the remaining metro pages fell from ~0.70 to ~0.44 (the remainder is shared page chrome such as the competitor table). |
| P1-1 consultation vs demo | `/book-free-demo` → **`/free-consultation`**. Every internal link, `openapi.json`, `llms.txt`/`llms.json` and the GPT instructions use the new URL. The old URL redirects, and its `.md` mirror still serves the page text so existing Custom GPTs do not break. |
| P1-2 cannibalisation | `/workplace-english-course-online-india` is now an informational guide ("Workplace English Guide: Meetings, Calls, Emails"; H1 "English at work: meetings, calls, updates and emails") with non-price keywords. Price intent stays with `/course-business-english`. |
| P1-3 `llms-full.txt` | Split by type: `llms-full.txt` (core: offer, courses, fees, consultation, about — 140 kB), `llms-guides.txt`, `llms-blog.txt`, `llms-policies.txt`, all listed in `llms.txt`, `llms.json`, `robots.txt`. The fee paragraph is no longer repeated in every section. |
| P1-4 speed | Removed the unused React Query provider from the bundle (entry JS 211 → 204 kB gzip). Hero image srcset was **not** changed: on phones the hero box is 412×1133 px with `object-fit: cover`, so the 1600 px source is already being scaled up and a smaller file would blur. The boot veil was left as designed. |
| P2 Hindi / Bengali | New pages **`/spoken-english-in-hindi`** (Hindi) and **`/spoken-english-in-bengali`** (Bengali): realistic timeline, a 15-minute daily routine, a table of common mistakes for each language, when a class helps, fees and FAQs. Correct `hreflang` (`hi-IN` / `bn-IN`), `og:locale`, `inLanguage` and `lang` attributes; heading anchors now work for non-Latin scripts. |
| P2 descriptions | All 15 descriptions over ~158 characters shortened; the longest is now 157. |
| P2 homepage H1 | The eyebrow above the H1 now reads "Live online spoken English classes · about 6 a batch · 7 years". The H1 slogan is unchanged. |
| P2 small items | `Organization.ethicsPolicy` removed; `robots.txt` comments rewritten as facts. The "2,000+ words" vs "1,000+ words" item was not a contradiction (course total vs one module) and is unchanged. |

**Redirects on GitHub Pages.** Pages cannot send HTTP 301s, so each old URL is a small static page with an instant meta refresh and a canonical to the new URL, which Google treats as a permanent redirect. The deploy also submits the old URLs to IndexNow so Bing re-crawls them. Defined in `src/lib/redirects.ts`.

**Watch after deploy:** Search Console → Pages ("Page with redirect" for the 11 old URLs is expected) and Performance for the five city pages and `/free-consultation`. If a retired city had meaningful clicks, it can be restored from git history.

## Scorecard

| Area | Status | Notes |
|---|---|---|
| Indexability (status, canonicals, sitemap, robots) | PASS | 62 pages, one canonical each, sitemap with real `lastmod` |
| Title tags | PASS (improved) | All ≤ 58 chars; 3 brand-only titles rewritten to carry a search term |
| Meta descriptions | PARTIAL | Key pages fixed; legal pages and 4 guides still exceed ~160 chars |
| Meta keywords | FIXED | Was ~240 terms / 9 kB on every page → ≤ 10 page-specific terms |
| H1 / heading structure | PASS | Exactly one H1 per page |
| Structured data validity | PASS | 0 JSON parse errors across all pages |
| Structured data completeness | FIXED | Homepage `OfferCatalog` offers had currency but no price |
| Content honesty / consistency | PARTIAL | "Free demo class" snippet fixed; consultation vs demo naming still confusing (see P1-1) |
| Duplicate / doorway risk | FAIL | City pages ~0.68–0.71 overlap with each other |
| Keyword cannibalisation | PARTIAL | Business English has two near-identical targets (see P1-2) |
| AI crawler access | PASS | All major AI crawlers allowed; Bytespider blocked |
| Bing / Copilot rendering | FIXED | JS and CSS were blocked for Bingbot |
| `llms.txt` quality | IMPROVED | Summary now states facts, not commands |
| `llms-full.txt` size | FAIL | 614 kB — assistant fetchers truncate long files |
| ChatGPT Actions (`openapi.json`) | PASS | OpenAPI 3.1, 10 GET operations, `operationId`s, no auth |
| Mobile performance | IMPROVED | FCP/LCP 3.9 s → ~2.9 s (devtools throttling); still above the 2.5 s "good" line |
| Entity / brand authority | UNKNOWN → likely weak | Brand search returned no result for the site; verify in Google India |

## What this change fixes

### 1. AI instructions no longer appear to learners — `src/lib/fees.ts`

`publishedFeeLock()` feeds both the visible homepage FAQ ("What do learners outside India pay?") and every assistant file. It ended with:

> Quote the India list when the learner is in India… Do not convert one into the other. Do not change a page title or the India offer. A script file is not a third price list.

That rendered on the homepage for humans, and it reads like prompt injection to assistants that screen for it (and it opened the `llms.txt` summary). Replaced with a factual sentence that keeps the same meaning:

> The India list applies to learners in India and the outside-India list applies to learners elsewhere. They are two separate price lists, not currency conversions of each other.

Both price lists are still present everywhere, so the build's fee-lock check still passes. Assistant-only guidance sections in `llms.txt` / `chatgpt-actions.md` / `ai-plugin.json` are unchanged — instructions belong there.

### 2. Homepage snippet no longer over-promises — `src/lib/seo.ts`, `index.html`

| | Description |
|---|---|
| Before | Speak better English with a teacher who knows your name. Get a free consultation. Free counselling on courses. **Free demo class online.** From ₹999/mo. |
| After | Live online English classes from ₹999/month, about 6 per batch. Free consultation on WhatsApp, or a ₹199 demo class that is adjusted if you join. |

It still matches "demo class" searches, now truthfully. A snippet promising a free class that turns out to be a paid one costs trust and invites Google to rewrite the snippet.

### 3. Meta keywords cut from ~240 site-wide terms to ≤ 10 page-specific — `src/lib/seo.ts`

Google ignores the tag; Bing has said a stuffed keywords tag is a spam signal. The site-wide stack also pushed "career counselling online india" onto every page while `/course-career-counselling` says the service is not offered. `buildHead()` now emits only the first 10 of each page's own list. The full clusters remain in code (`KEYWORD_CLUSTERS`, `EVERY_PAGE_KEYWORDS`) for SEM work. Total prerendered HTML fell from 6,788 kB to 6,262 kB.

### 4. Titles and descriptions with no search term — `src/lib/seo.ts`

| Page | Before | After |
|---|---|---|
| `/book-free-demo` | We Don't Sell the Room Until You See It \| Free Consultation (59) | Free Spoken English Consultation on WhatsApp (44) |
| `/success-stories` | Real Indian Learners \| Real Results | Spoken English Success Stories \| Real Learners |
| `/educator` (+ `/founder` alias) | Sunanda Dey \| One Mentor. One Mission. | Sunanda Dey, Spoken English Educator, Kolkata |

Descriptions trimmed to ≤ 158 chars on `/book-free-demo` (was 207), `/course-business-english` (184) and `/course-interview-preparation` (197). The page copy and H1s are untouched.

### 5. Homepage offers now carry prices — `src/lib/seo.ts`

The `OfferCatalog` on every page's Organization schema listed the four courses with `priceCurrency: "INR"` but no `price`. Each now has `price` plus a monthly `UnitPriceSpecification` (₹999 / ₹1,199 / ₹1,999 / ₹1,999), matching the course pages.

### 6. Bing and AI agents can render the page — `public/robots.txt`

- **Bingbot / bingbot / BingPreview:** `Disallow: /assets/*.js` and `*.css` removed. Bing renders pages to judge layout and mobile-friendliness, and Bing's index feeds Copilot and much of ChatGPT search. The reason for the block (keeping USD out of what Bing sees) is already enforced by the build, which fails if any script bundle contains a non-rupee price.
- **User-initiated agents** (ChatGPT-User, ChatGPT Agent, Claude-User, Perplexity-User, MistralAI-User, Copilot, MicrosoftPreview) now get `/assets/` too. These run a real browser on a user's behalf; without scripts, the consultation form and WhatsApp buttons don't work for an agent trying to act on "book me a consultation". Text-only crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) still skip `/assets/`.

### 7. Mobile first paint ~1 s faster — `src/routes/__root.tsx`, `src/components/PaymentTrust.tsx`

The boot gate (`src/lib/boot-script.ts`) holds the page until Manrope 600 and Sora 700 load. Those were only discovered after the stylesheet parsed, while `material-symbols-rounded.woff2` was preloaded even though icons are now lucide SVGs and nothing uses it. React was also emitting a preload for each of the 8 payment logos, ahead of the hero image.

- Preload swapped from the unused icon font to the two faces the gate waits for (same hashed files the CSS references, so no double download).
- Payment logos marked `loading="lazy"` — their preloads disappear.

Lighthouse mobile, devtools throttling, homepage: **FCP/LCP 3.9 s → 2.9–3.0 s**, performance score 0.56 → ~0.69. Course page: 2.8 s. CLS stays 0.

### Validation

- `bun run build:pages` passes, including the prerender canonical, title and fee-lock assertions.
- The deploy workflow's "Verify crawlability" step passes against the new `dist/`.
- `tsc --noEmit`: same 2 pre-existing errors before and after (in `llms.ts` and `__root.tsx`'s `errorComponent`), none added.
- ESLint on touched files: 23 pre-existing Prettier errors → 11 (a mis-indented block was reformatted while adding prices).

## Prioritised recommendations (not done in this change)

### P0 — Decide what to do with the city pages — **done, see Round 2**

Fourteen city pages (`/spoken-english-classes-{mumbai,pune,delhi,…}`) share 68–71% of their text with each other; only Kolkata is distinct (14%). The service is online-only and the offer, price and timings are identical in every city — the pages differ mainly by city name, a neighbourhood and a language. Google's spam policies name exactly this ("multiple pages… targeting specific regions or cities that funnel users to one page") as doorway abuse, and scaled near-duplicates can drag down the whole site.

Options, best first:
1. **Keep 3–5 cities where there is something real to say** (Kolkata — the actual base; cities with real learners and named, consented testimonials; cities where a regional-language-medium batch actually runs), rewrite each with genuinely local content, and **301 the rest** to `/best-online-spoken-english-classes-india` or a single "Online spoken English across India" page.
2. If all 15 stay: give each at least ~40% unique, useful text (local learner stories, local employers/industries the English is for, the regional language bridge actually taught, local exam/job context).

Check Search Console → Pages and Performance first: any city page with real clicks should be kept and improved, not removed.

### P0 — Prove the entity exists outside the site — **owner action**

A brand search during this audit returned no result for the site at all, only unrelated "Smile" businesses (search was not Google India, so treat as a warning, not proof). AI assistants and Google both need corroboration from elsewhere:

- Verify **Google Search Console** and **Bing Webmaster Tools** (a Bing verification also unlocks Copilot/ChatGPT visibility data); submit the sitemap in both; request indexing for `/`, the four course pages and `/book-free-demo`.
- **Google Business Profile** (already linked in `sameAs`): make sure name, phone, category ("English language school" / "Language school"), service-area and hours match the site exactly; post the course list and prices; reply to every review.
- Consistent listings on **UrbanPro, Sulekha, Justdial and LinkedIn** (company page + Sunanda Dey's profile, then add them to `SAME_AS` in `src/lib/seo.ts`).
- Move public email from Gmail to `@learnwithsmile.app`.
- Keep an evidence file for "500+ learners", "7 years" and "5.0★ · 125 Google reviews" — `llms.txt` states the rating; if the GBP number drifts, the site becomes the inconsistent source.

### P1-1 — Fix the consultation / demo naming — **done**

Three things share one idea: the URL `/book-free-demo` (a consultation, "not a class"), the paid `/course-demo-session` (₹199, adjusted on enrolment), and copy written to catch "free demo class" searches. Searchers, Google and assistants all get a mixed message, and the code itself needs long assistant instructions to untangle it. Simplest durable fix: rename the consultation page to `/free-consultation` with a 301 from `/book-free-demo`, and make `/course-demo-session` the only page that targets "demo class" — stating plainly "₹199, ₹0 extra if you enrol within 48 hours".

### P1-2 — Remove Business English cannibalisation — **done**

`/course-business-english` ("Business English Course | ₹1,999/mo") and `/workplace-english-course-online-india` ("Business English Online | ₹1,999/mo, 7 Years", H1 "Business English in India — ₹1,999/mo…") compete for the same query. Four more guides (working professionals, IT professionals, client calls, presentations) also funnel to it, with ~25% shared text between them. Make the workplace page an informational guide ("How to improve English at work: meetings, emails, calls") with a non-price title, and leave price-led commercial intent to the course page.

### P1-3 — Make `llms-full.txt` usable — **done**

It is 614 kB (it was ~59 kB when introduced). Assistant fetch tools truncate long documents to fit a context window, and the limits are undocumented, so anything past the first portion of the file should be assumed unread. Either cap it at core pages (home, four courses, demo, consultation, fees, comparison, FAQs) under ~100 kB, or split it (`llms-courses.txt`, `llms-guides.txt`, `llms-cities.txt`) and list the parts in `llms.txt`. The per-page `.md` mirrors already cover the long tail.

### P1-4 — Remaining speed work (India is mobile-first) — **partly done**

- **Boot veil:** `MAX_HOLD = 3000` means a slow phone can wait up to 3 s for a page whose HTML arrived much sooner. Consider showing text immediately with `font-display: swap` and size-adjusted fallbacks, keeping the veil only for the hero.
- **JS:** one 679 kB entry bundle (211 kB gzip), ~195 kB unused on first load; Total Blocking Time 600–950 ms on mid-range mobile. Code-split routes and keep Radix/Recharts out of the entry chunk.
- **Hero image:** 1600×900 source rendered at 412 px wide on phones; add 480 w / 768 w AVIF variants to the `srcset`.

Then check real-user Core Web Vitals in Search Console once traffic is enough to report.

### P2 — Content gaps for the Indian market — **Hindi and Bengali pages done**

Validate these clusters in Keyword Planner (India) before writing; ordered by likely fit, not volume:

| Intent cluster | Example queries | Current coverage | Action |
|---|---|---|---|
| Hindi/Hinglish how-to | "english bolna kaise sikhe", "english speaking kaise improve kare" | None (only English pages) | 2–3 `hi-IN` articles with Devanagari + Hinglish headings; add `hreflang="hi-IN"` |
| Bengali-medium learners | "bengali theke english bolte shikhun", "spoken english for bengali speakers" | `/english-hindi-bengali-medium` (English only) | One Bengali-language explainer page — Kolkata is the base, so this is the most credible local edge |
| Interview English | "self introduction in english for interview", "HR interview questions answers in english" | 1 blog post | Expand into a hub with sample answers for freshers / experienced / BPO |
| Speaking practice with a person | "english speaking practice online with real person india" | Partially (`free-english-speaking-practice-vs-paid-class`) | Retitle around the query; this is the EngVarta/Cambly competitor term |
| Adults / late learners | "spoken english for adults", "english speaking course for housewives" | Homemakers, beginners pages | Add age-specific FAQ (30+, 40+) |
| Workplace | "email writing in english for office", "how to speak in meetings in english" | Blog posts | Link blogs into the Business English course page |

Avoid head terms ("spoken english classes", "english speaking course") as primary targets — EngVarta, British Council, PlanetSpark, UrbanPro and Vedantu own them with far more authority.

### P2 — Smaller items

- Descriptions > 160 chars remain on `/privacy`, `/terms`, `/refunds`, `/child-protection`, `/guides`, `/how-long-to-learn-spoken-english`, `/english-for-client-calls-india` and the speaking-minutes post — Google will truncate them.
- The homepage H1 ("Speak Better English. Master In-Demand Skills. Build Future Together.") is a slogan with no search term. Consider a visible kicker above it such as "Live online spoken English classes in India".
- `course-spoken-english` schema says "2,000+ word" vocabulary in `teaches` while the syllabus says "1,000+" — make them agree.
- `Organization.ethicsPolicy` points at the privacy policy; drop it or point it at an actual ethics/teaching-standards page.
- **Rich results reality check:** Google retired the Course-info rich result (2025) and limits FAQ rich results to government/health sites. Course and FAQ markup is still worth keeping for entity understanding and AI answers, but expect no stars, course carousels or FAQ dropdowns in Google results.
- `ai-plugin.json` is the retired ChatGPT-plugin manifest. It's harmless; Custom GPT Actions use `openapi.json`, which is in good shape.
- The `robots.txt` comment block still contains assistant-directed rules. Crawlers ignore comments, so this is cosmetic, but it can be trimmed to the pointers to `llms.txt` / `llms.json`.

## ChatGPT / LLM actions status

| Surface | Status | Notes |
|---|---|---|
| ChatGPT search (OAI-SearchBot) | Allowed | Inclusion still depends on Bing index presence and authority |
| ChatGPT browsing / agent (ChatGPT-User, ChatGPT Agent) | Allowed, now with scripts | Can open the form and WhatsApp links |
| Custom GPT Actions | Ready | Import `https://www.learnwithsmile.app/openapi.json`, auth none; paste `chatgpt-actions.md` into Instructions |
| Claude (ClaudeBot / Claude-SearchBot / Claude-User) | Allowed | Claude-User now gets scripts |
| Perplexity | Allowed | |
| Gemini / Google AI Overviews | Eligible via Googlebot | `Google-Extended` allowed (governs Gemini use, not Search ranking) |
| Microsoft Copilot | Allowed, now renders | Bing JS/CSS block removed |
| `llms.txt` / `llms.json` | Good | Summary now factual; trim `llms-full.txt` (P1-3) |

## Files changed

- `src/lib/fees.ts` — factual fee-list sentence; comment explaining why
- `src/lib/seo.ts` — meta keywords cap, homepage / consultation / course descriptions, 3 titles, OfferCatalog prices
- `index.html` — SPA-shell description and keywords aligned
- `public/robots.txt` — Bing and user-initiated agents may fetch JS/CSS
- `src/routes/__root.tsx` — preload the two boot-gate fonts instead of the unused icon font
- `src/components/PaymentTrust.tsx` — lazy payment logos (no SSR preloads)
