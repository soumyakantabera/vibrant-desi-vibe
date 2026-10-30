# India market research — SEO, SEM, LLMs and ChatGPT Actions (October 2026)

Written for the Intermediate Spoken English launch. It feeds `INTERMEDIATE_KEYWORDS`,
`CLUSTER_INTENT.intermediate` and `COURSE_SEO["intermediate-english"]` in `src/lib/seo.ts`,
the new guide `/intermediate-spoken-english-course-india`, and the IndexNow workflow.

Figures marked _(vendor)_ come from agency or provider blogs, not from Google, Bing or
OpenAI. Treat them as ranges to test, not facts to quote on the site.

---

## 1. Who is searching, and how

| Signal                                                                                                                                                                                                           | What it means for us                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| India is ChatGPT's second-largest market: 100M+ weekly users (OpenAI, Feb 2026); ~80% of Indian consumer messages come from ages 18–34.                                                                          | Our buyer (freshers, early-career, homemakers returning to work) asks an assistant before they search. llms.json and the course roadmap must answer "what is covered in month 2" directly. |
| ChatGPT sends about 79% of AI-chatbot referrals to Indian sites, Gemini about 13% (Statcounter Aug 2026, via secondary blog _(vendor)_).                                                                         | Prioritise OAI-SearchBot and ChatGPT-User access and the OpenAPI Action. Gemini follows Google's index, so Google SEO covers most of the rest.                                             |
| Google AI Mode launched in India June–July 2025; Hindi Sept 2025; Bengali, Kannada, Malayalam, Marathi, Tamil, Telugu, Urdu Oct 2025; Search Live first outside the US.                                          | Hindi/Bengali guide pages are worth keeping current — they now feed AI Mode answers in those languages. Fee lists in both were updated with Intermediate.                                  |
| Indian learners rarely type CEFR levels ("B1"). They type a level word ("intermediate", "advanced", "next level"), a problem ("grammar mistakes while speaking", "um ah fillers") or school vocabulary ("LSRW"). | Keyword cluster mixes level words, problem phrasing and LSRW. "Advanced spoken English" is included because many Indian institutes use "advanced" for the post-basic step.                 |

## 2. Competitive pricing for "intermediate" (October 2026 listings)

| Provider / format                            | Listed price                                     | Source                                                                                                                        |
| -------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WizMantra, Intermediate English, live 1:1    | ₹6,962 / 1 month · ₹13,924 / 2 months            | [wizmantra.com](https://www.wizmantra.com/english-speaking-course-fees-india/) _(vendor)_                                     |
| British School of Languages, B1 Intermediate | ₹13,500 / 3 months (≈ ₹4,500/mo)                 | [britishschooloflanguages.com](https://www.britishschooloflanguages.com/best-online-english-speaking-course-india) _(vendor)_ |
| Henry Harvin, per level                      | ≈ ₹9,500–₹12,500 per 40–50 h level               | via comparison blogs _(vendor)_                                                                                               |
| Speaking Fever, general plan                 | ₹3,999 / 1 month · ₹9,999 / 3 months             | [speakingfever.com](https://speakingfever.com/top-7-english-speaking-courses-for-adults-in-india/) _(vendor)_                 |
| EEC, live group                              | ₹7,500 package, Cambridge book included          | [eecglobal.com](https://eecglobal.com/spoken-english/online)                                                                  |
| **Learn With Smile Intermediate**            | **₹1,999/month · 4 months · ~6 learners · live** | this site                                                                                                                     |

Takeaway: a live small-batch intermediate course under ₹2,000/month is well below every
level-based listing we found. That makes price-qualified long tail ("english speaking course
under 2000 per month", "4 month spoken english course india") winnable, and it is the hook for
SEM ad copy. We quote competitor ranges only inside an FAQ with "check each provider's current
page", never as a headline claim.

## 3. SEO — what we targeted and why

**Do not cannibalise the beginner page.** Head terms ("spoken english classes online") stay on
`/course-spoken-english`. Intermediate owns the level and problem long tail.

| Cluster          | Example queries                                                                                                                                                            | Lands on                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Level            | intermediate spoken english course online india · intermediate level english course india · next level spoken english course · advanced spoken english course online india | `/course-intermediate-english`                               |
| Problem          | english grammar mistakes while speaking · how to stop saying um and ah in english · improve english fluency and grammar online india                                       | `/intermediate-spoken-english-course-india` (guide) → course |
| Method           | lsrw skills english course online · listening speaking reading writing english course india · english to english spoken course                                             | course                                                       |
| Price / duration | english speaking course under 2000 per month · 4 month spoken english course india                                                                                         | course                                                       |
| Picker           | basic or intermediate spoken english course · intermediate vs interactive english class                                                                                    | `/spoken-business-or-interactive-english`                    |

On-page:

- Title (49 chars): `Intermediate Spoken English | ₹1,999/mo, 4 Months` — keyword first, price and duration
  because price-qualified titles out-click generic ones in Indian SERPs.
- Description (151 chars) names the grammar + fluency format, debates/presentations, batch size and
  tax-inclusive fee.
- `Course` JSON-LD now carries `coursePrerequisites` and month-labelled `syllabusSections`
  ("Months 1–2: Foundation"), so Google and assistants can quote the timeline.
- New OG image (`/og/intermediate-english.jpg`) shows the 30/60 split — WhatsApp link previews are
  the main share surface in India.
- Internal links: nav, footer, guides hub, homepage guide strip, course ladder on every course
  page, homepage and hub, consultation bottleneck table, picker table, fee tables on fees,
  institutes, Kolkata and every city page.
- `lastmod` moved only on pages whose words changed, so Google keeps trusting the sitemap.

## 4. SEM — starting plan for Google Ads / Microsoft Ads

Education CPCs in India are quoted at roughly ₹15–₹110, overall India average ≈ ₹20–₹24, with
18% GST on ad spend _(vendor: [apexinfluence](https://apexinfluence.in/blog/google-ads-benchmarks-india),
[expertwebdesigning](https://expertwebdesigning.com/blogs/google-ads-cost-in-india/),
[intentfarm](https://intentfarm.com/resources/google-ads-cost-in-india/))_. Confirm live bids in
Keyword Planner set to India before spending.

- **Ad group "Intermediate — level"** (phrase match): intermediate spoken english course,
  intermediate english speaking course online, spoken english after basic level.
- **Ad group "Intermediate — problem"** (phrase match): grammar mistakes while speaking english,
  english fluency course with grammar.
- **Negatives:** free, pdf, book, youtube, kids, class 9, class 10, ielts, job, salary, translator.
- **Copy angles:** "30 min grammar + 1 hr speaking, every class" · "₹1,999/month, tax included" ·
  "About 6 learners, live" · "4-month roadmap you can see". Final URL `/course-intermediate-english`.
- **Microsoft Ads** imports the same campaign cheaply and feeds Bing Copilot surfaces.
- The landing price for India ads is the rupee figure. The outside-India list stays labeled and
  separate (see `publishedFeeLock()`).

## 5. LLMs and ChatGPT Actions

What changed so assistants answer correctly:

- `llms.json` → `published_fees.india.intermediate_english`, `outside_india.intermediate_english`,
  `placement.basic_sentences_but_grammar_and_flow_break`, and per-course `class_split`,
  `roadmap` (phase, month span, topics per skill), `vocabulary_themes`, `practice`, `prerequisites`.
- New quick answers: "Do you have an intermediate spoken English course?" and "What exactly is
  covered month by month in each course?"
- `openapi.json` v1.7.0: `CourseFact` documents `class_split` and `roadmap`; catalogue op says five
  rooms; `getCourseIntermediateEnglish` is generated from `COURSE_SLUGS`.
- `chatgpt-actions.md`: placement line for Intermediate, and an instruction to read
  `courses[].roadmap` for "what is covered in month N".
- `llms.txt` brand line lists all five rooms; course `.md` twin includes the roadmap and coverage
  map because they render as real HTML text.

## 6. Indexing push — what actually works in 2026

| Engine                                              | Mechanism                                                          | Status here                                                                                                                                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bing, Yandex, Seznam, Naver (and Copilot grounding) | IndexNow                                                           | Every deploy POSTs all sitemap URLs to api.indexnow.org, bing.com and yandex.com. New manual workflow `Push URLs to IndexNow` re-pushes the live sitemap or a chosen URL list without a redeploy. |
| Google                                              | No IndexNow; sitemap ping endpoint retired June 2023 (returns 404) | Removed the dead ping. Google relies on `sitemap.xml` `lastmod` (kept honest) and robots.txt. For the two new URLs, use Search Console → URL Inspection → Request indexing once after deploy.     |

Do not resubmit unchanged URLs on a timer — IndexNow is meant for changed pages, and noisy
submissions are deprioritised _(vendor: [rightblogger](https://rightblogger.com/blog/indexnow-bing-indexing))_.
Do not use Google's Indexing API: it is only for job postings and livestream video pages.

## 7. After launch — checklist

1. Merge → deploy runs → IndexNow receipt in the deploy log.
2. Search Console: inspect and request indexing for `/course-intermediate-english` and
   `/intermediate-spoken-english-course-india`.
3. Bing Webmaster Tools: check URL submission and the AI Performance report for grounding queries
   (often Hinglish) — add any recurring phrasing to `INTERMEDIATE_KEYWORDS`.
4. Keyword Planner (India): pull volumes and bids for the cluster above; drop terms with no volume.
5. Re-check competitor prices in January 2027 before quoting them again.

## Sources

- [OpenAI India 100M weekly users — proaisearch](https://proaisearch.com/chatgpt-users-india/) ·
  [karostartup](https://www.karostartup.com/article/india-hits-100-million-weekly-chatgpt-users) ·
  [digitalinasia](https://digitalinasia.com/india-ai-market/)
- [AI search statistics India 2026 — consultantankit](https://consultantankit.com/blog/ai-search-statistics/)
- [Google: new languages in AI Mode & Search Live for India](https://blog.google/intl/en-in/products/supercharging-search-for-india-new-languages-in-ai-mode-search-live-debuts/) ·
  [Deccan Herald: AI Mode in Hindi](https://www.deccanherald.com/technology/artificial-intelligence/google-searchs-advanced-ai-mode-now-supports-hindi-language-in-india-3718799)
- [WizMantra fees 2026](https://www.wizmantra.com/english-speaking-course-fees-india/) ·
  [British School of Languages](https://www.britishschooloflanguages.com/best-online-english-speaking-course-india) ·
  [Speaking Fever](https://speakingfever.com/top-7-english-speaking-courses-for-adults-in-india/) ·
  [EEC](https://eecglobal.com/spoken-english/online) ·
  [Language International — intermediate courses in India](https://www.languageinternational.com/courses-english-india-intermediate)
- [Google Ads benchmarks India — apexinfluence](https://apexinfluence.in/blog/google-ads-benchmarks-india) ·
  [expertwebdesigning](https://expertwebdesigning.com/blogs/google-ads-cost-in-india/) ·
  [intentfarm](https://intentfarm.com/resources/google-ads-cost-in-india/)
- [IndexNow documentation](https://www.indexnow.org/documentation) ·
  [Agility CMS: sitemaps and IndexNow](https://agilitycms.com/docs/developers/faster-indexing-with-xml-sitemaps-and-indexnow) ·
  [rightblogger: IndexNow](https://rightblogger.com/blog/indexnow-bing-indexing)
