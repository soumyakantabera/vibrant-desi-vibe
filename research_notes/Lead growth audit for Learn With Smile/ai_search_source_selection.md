# How Google AI features, ChatGPT, Copilot, Perplexity and Gemini choose which providers to cite and recommend (2025–2026), and how to measure AI-referred leads

Research date: 2026-10-08. Method: WebSearch only, because WebFetch/DNS failed in this environment. Most figures come from search-result summaries of the pages linked below, not from reading the full original reports. Before quoting an exact number externally, check the original. Labels used: **[Official]** means a statement from the platform owner. **[Vendor study]** means research by an SEO or GEO tool company, which has a commercial interest. **[Blog]** means a secondary or marketing source.

---

## 1. What Google officially says about AI Overviews / AI Mode, and which pages independent studies show get cited

### Takeaway
Google's official position, restated in a May 2026 help document, is that AI Overviews and AI Mode need nothing beyond normal SEO. A page must be indexed and snippet-eligible. Google says special schema, llms.txt and content "chunking" are not needed. Independent studies show that citations are drifting away from the organic top 10, so a top-10 ranking matters less than it used to. They also show a moderate freshness bias, and off-site brand mentions are the strongest correlate of AI Overview brand visibility. Lily Ray's 2026 study found that self-promotional "best of" lists on a brand's own site often fail to get that brand recommended.

### Cited Findings
**Official Google statements**
- **[Official, via trade coverage]** Google's guidance says SEO best practices "remain relevant" for AI Overviews and AI Mode. To be eligible as a supporting link, a page must be indexed and eligible to show in Google Search with a snippet. No special schema.org markup is required. — [Search Engine Land](https://searchengineland.com/google-publishes-guide-on-optimizing-for-generative-ai-features-477671); [Stackmatix summary](https://www.stackmatix.com/blog/google-search-central-ai-overviews-guidance)
- **[Official, via trade coverage]** In May 2026 Google published a help document, "Optimizing your website for generative AI features on Google Search". It treats AEO/GEO as "still SEO" and says llms.txt, content chunking, AI-specific rewriting and special schema are not needed. Its checklist covers technical requirements, crawling best practice, page experience and reducing duplicate content. — [Search Engine Journal](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/); [Marwick Marketing](https://www.marwickmarketing.co.uk/blog/new-google-ai-guide-released-how-to-optimise-for-ai-search/)
- **[Official]** Google has announced new controls and insights for site owners. "Preferred Sources" now appear in AI Overviews and AI Mode, and subscription labels were added. — [Google blog: New opportunities, control and insights for website owners](https://blog.google/products-and-platforms/products/search/new-controls-website-owners/)
- **[Official]** AI Mode launched in Hindi in India after the English launch. It runs on a custom Gemini 2.5 model built for longer, more nuanced questions. The post is about a year old (around late 2025). — [Google India blog](https://blog.google/intl/en-in/products/google-search-ai-mode-now-available-in-hindi/)
- **[Blog]** Search Live in India launched in English and Hindi in October 2025 and by March 2026 had added Bengali, Tamil and Telugu. It reportedly supports Hindi–English switching within a query. — [Digiflute](https://www.digiflute.com/blogs/google-ai-mode-search-live-voice-search-seo-indian-businesses-2026/)

**Overlap between AI Overview citations and organic rankings (independent studies)**
- **[Vendor study, Ahrefs]** In July 2025, 76.1% of AI Overview citations came from top-10 pages (1.9M citations). The March 2026 update (863k SERPs, about 4M AIO URLs) found only about 38%, or 37.1% when counting standard organic listings only. — [AEO Rankings summary](https://www.aeo-rankings.com/blog/the-page-one-myth-ai-overviews-no-longer-repackage-the-top-10/); [ALM Corp](https://almcorp.com/blog/google-ai-overview-citations-drop-top-ranking-pages-2026/); [DesignRush](https://news.designrush.com/ai-overview-citations-drop-ahrefs)
- **[Vendor study, BrightEdge]** Top-10 overlap was about 17% in February 2026 and roughly flat since February 2025. Top-100 overlap rose from about 49% to about 53%. Overlap varies by vertical, from about 11% in Finance to about 24% in Healthcare. — [BrightEdge](https://help.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing); see also [SEJ on the sharp drop](https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/)
- **[Vendor study, seoClarity, older]** 32% top-10 overlap, 56% from the top 20, and 44% from beyond the top 20. — [seoClarity](https://www.seoclarity.net/research/aio-rankings-overlap)
- The studies conflict (17% vs 38% for top-10 overlap), largely because their methods differ. All of them agree on the direction: ranking helps, but it no longer predicts citation.

**Brand mentions**
- **[Vendor study, Ahrefs, 75k brands]** The strongest correlates of AI Overview brand mentions were branded web mentions (Spearman 0.664), branded anchors (0.527) and branded search volume (0.392). Domain-level link metrics were weaker. The study is correlational, and the sample was limited to DR>40 domains. — [Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/?rd=1)
- **[Study, Lily Ray 2026, reported]** When a brand's own listicle was cited, AI Overviews left that brand out of the recommendation 69% of the time (224 of 323 cases). — reported in the summary of [Ahrefs' best-lists research coverage](https://ahrefs.com/blog/best-lists-research/) (secondary. The original was not retrieved.)

**Freshness**
- **[Vendor study, Seer Interactive, October 2025]** Across 5,000+ URLs on ChatGPT, Perplexity and AIO, 65% of AI bot hits went to content published within the past year and 79% to content from the last two years. AI Overviews showed the strongest recency preference. — [Seer: AI Brand Visibility and Content Recency](https://www.seerinteractive.com/insights/study-ai-brand-visibility-and-content-recency)
- **[Vendor study, Seer 2026]** For ChatGPT, Gemini and Perplexity (March–June 2026), 75% of highly cited pages had been updated in the last year, but only 40% were first published that recently. Freshness is being "manufactured by updates". — [Seer 2026](https://www.seerinteractive.com/insights/study-content-recencys-impact-on-ai-visibility-in-2026)
- **[Vendor study, Ahrefs, about 17M citations]** Cited URLs averaged about 1,064 days old, against about 1,432 days for organic results, which is a modest freshness advantage. — via [parse.gl](https://parse.gl/blog/content-freshness-ai-visibility)
- **Contradicting:** an analysis of about 1,000 queries found no recency correlation except for news-intent queries. — [The Stacc](https://thestacc.com/blog/ai-overviews-citation-sources/) ([Blog])

### Inferences
- Learn With Smile already meets Google's eligibility requirements: indexed, snippet-eligible and crawlable. By Google's own account, its llms.txt and extra schema add nothing for AI Overviews or AI Mode. Further on-site technical work will probably yield less than off-site brand mentions and updates to existing pages, such as visible "last updated" dates and current fee and batch information.
- Lily Ray's finding suggests that self-serving "best spoken English classes" listicles on learnwithsmile.app are unlikely to get the brand recommended by Google AI. Inclusion in third-party lists is the better lever.
- Since AI Mode is available in Hindi, Hinglish and Hindi phrasings of "spoken English class" queries are now answered by AI Mode in India.

### Gaps
- I could not read the primary Google Search Central pages ("AI features and your website", the May 2026 help document) directly, so the wording above is from trade coverage.
- I found no study of AI Overview citations specific to India or to education and course queries.
- I found no data on how AI Overviews and AI Mode cite Hinglish-language queries.

---

## 2. How ChatGPT search selects sources, and what citation studies show (listicles, Reddit, YouTube, reviews vs brand sites)

### Takeaway
ChatGPT search breaks prompts into "fan-out" sub-queries and retrieves from a web layer that overlaps with Bing only partially. Estimates of that overlap range from 27% to 73% depending on method. Shopping carousels track Google Shopping. Inclusion requires that OAI-SearchBot can crawl the site. For "best X" recommendation prompts, third-party "best of" listicles make up nearly half of ChatGPT's citations. Reddit's share in ChatGPT is very volatile: it collapsed in August–September 2026, while brand and commercial pages gained.

### Cited Findings
**Mechanism**
- **[Official, OpenAI FAQ snippet]** ChatGPT automatically appends `utm_source=chatgpt.com` to referral URLs. — [OpenAI Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- **[Blog, consistent with OpenAI docs]** OAI-SearchBot controls inclusion in ChatGPT search, and GPTBot controls training. The two can be allowed or blocked independently. Blocking OAI-SearchBot removes a site from ChatGPT search and product results. — [Fennec SEO](https://fennecseo.app/blog/openai-crawlers-robots-txt-guide/); [Profound](https://www.tryprofound.com/resources/articles/get-your-product-discovered-in-chatgpt-shopping); [TotalAuthority](https://totalauthority.com/oai-searchbot-guide)
- **[Vendor studies, conflicting]** Estimates of how much ChatGPT's sources overlap with search engines:
  - About 73% overlap with Bing — cited by [Erlin](https://www.erlin.ai/blog/chatgpt-search-optimization).
  - Ahrefs: 83.39% of cited URLs (from 118,931 fan-out queries) did not appear in Google's results for the same query — via [blckalpaca](https://blckalpaca.at/en/knowledge-base/seo-geo/geo-generative-engine-optimization/chatgpt-search-optimization-fan-out-queries-and-freshness-bias).
  - Grow & Convert: only about 40% of ChatGPT sources came from Google or Bing results for the known fan-out queries — [Grow & Convert](https://www.growandconvert.com/ai/fan-out-query-serp-study/).
  - AI+Automation replication: about 27% matched Bing's top 20, 13.4% matched Google's top 20, and 68% matched neither. It disputes the widely repeated "87% from Bing" claim — [AI+Automation](https://aiplusautomation.com/blog/bing-replication-chatgpt-citations).
- **[Vendor study]** Fan-out behaviour:
  - AirOps (March 2026): 89.6% of 15k prompts triggered two or more follow-up searches — via [Erlin](https://www.erlin.ai/blog/chatgpt-search-optimization).
  - Peec AI (20M+ fan-outs, October 2025–January 2026): average fan-out length roughly doubled, from about 6 to about 12 words — [Peec AI](https://peec.ai/blog/country-analysis-20-million-search-qfos).
  - Promptwatch: fan-outs per response fell from about 2.15 (December 2025) to 1.0 (April 2026), and use of the site: operator jumped on 8 August 2026 — [Promptwatch](https://promptwatch.com/blog/how-chatgpt-searches-the-web).
  - MJ Cachón (August 2026, GPT-5.5, small sample): 63.9% of brand prompts were resolved in two searches or fewer — [MJ Cachón](https://www.mjcachon.com/en/blog/study-query-fan-out-chatgpt-brand/).
- **[Study]** About 83% of ChatGPT shopping-carousel products come from Google Shopping via shopping fan-outs, through a pipeline separate from the text answer. — [Search Engine Land](https://searchengineland.com/new-finding-chatgpt-sources-83-of-its-carousel-products-from-google-shopping-via-shopping-query-fan-outs-470723)
- **[Older study, CJR Tow Center, about 2024–25]** Even publishers that allowed OpenAI's crawlers were not represented accurately. — [CJR](https://www.cjr.org/tow_center/how-chatgpt-misrepresents-publisher-content.php)

**What gets cited**
- **[Vendor study, Ahrefs / Glen Allsopp]** Across 750 recommendation prompts (for example "best web design agencies in London") and 26,283 source URLs, "best of" listicles made up nearly half of ChatGPT citations for this query type. 35% of the cited "best" lists were on low-authority, often questionable domains. Self-promotional lists, where a brand ranks itself first, did get cited. — [Ahrefs: Do self-promotional "best" lists boost ChatGPT visibility?](https://ahrefs.com/blog/best-lists-research/); [CMO Eugene summary](https://www.cmoeugene.com/do-best-lists-boost-chatgpt-visibility/)
- **[Vendor study, Ahrefs 2026 AEO report, via Catalyst]** Listicles are the most common page type ChatGPT cites, at 43.8% of cited page types. — [Catalyst](https://www.gotcatalyst.com/resources/articles/ahrefs-2026-aeo-report-ai-citations)
- **[Vendor studies, Reddit volatility]**
  - Semrush: ChatGPT cited Reddit in about 60% of responses in early August 2026, falling to about 10% by mid-September — [Semrush](https://www.semrush.com/blog/most-cited-domains-ai/).
  - Otterly: ChatGPT's Reddit citations fell at least 73% in mid-August 2026 while total citations rose 3.5%. Official brand and competitor pages gained in 10 of 15 reports, other commercial sites in 9 of 15, and encyclopedia and reference sources in 4 of 5 — [Otterly](https://otterly.ai/blog/chatgpt-reddit-citations/).
  - One fixed-cohort tracking found ChatGPT's Reddit share falling from 37.9% to 3.4% — via [gptmelo](https://www.gptmelo.com/resources/ai-platform-citation-patterns-2026).
- **[Vendor study]** Ahrefs (July 2026): Reddit at 16.7% of mention share across AI platforms, against Wikipedia at 8.9%. Surfer (September 2026): Reddit first among the top 50 ChatGPT domains but only 0.74% of all ChatGPT citations, with Clutch and G2 (review and directory sites) at #2 and #3. — via [Search Engine Land](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138); [Surfer](https://surferseo.com/blog/most-cited-domains-chatgpt/)
- **[Vendor study]** Review platforms such as Yelp and G2 appear often in recommendation queries. — [Search Engine Land](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138)

### Inferences
- For prompts like "best online spoken English classes in India", ChatGPT is likely to build its answer from third-party Indian "best spoken English courses" listicles, from edtech review and directory pages, and from the brands' own pages. Getting Learn With Smile into existing listicles that rank in Bing or Google, with accurate fees and batch size, is probably the highest-leverage ChatGPT tactic. Ahrefs found that even low-authority lists get cited, so smaller Indian education blogs are worth pitching.
- Fan-out queries are now about 12 words long and often include constraints such as price, audience and format. Pages that state explicit facts help a site match them, for example "₹999/month", "batch of 6", "for working professionals" and "live on Zoom".
- Because Reddit's share is unstable and swings with platform changes, investing in Reddit is a hedge rather than a core tactic.

### Gaps
- OpenAI does not publicly document a ranking or selection algorithm for ChatGPT search. I found no official statement in 2026 on whether Bing remains a primary provider.
- I found no ChatGPT citation study specific to India or to education and course queries.

---

## 3. How Microsoft Copilot selects sources, and the Bing Webmaster Tools AI features (2026)

### Takeaway
Copilot grounds its answers in the Bing index. It issues its own "grounding queries" and extracts quotable passages. Bing Webmaster Tools has an "AI Performance" report (preview, launched about February 2026 and expanded about June 2026). It shows Copilot and Bing AI citation counts, cited pages and grounding queries, but no clicks. It is the only first-party citation report from any major AI assistant.

### Cited Findings
- **[Blog/vendor]** Copilot has no separate web index of its own. It writes internal "grounding queries", retrieves from Bing, and cites passages. — [Cognizo](https://www.cognizo.ai/blog/how-to-earn-copilot-citations); [RankMax](https://www.rankmax.com.au/articles/microsoft-copilot-seo); [GoGoChimp](https://www.gogochimp.com/blog/microsoft-copilot-seo)
- **[Official, via secondary report]** In a 6 May 2026 post, "Evolving role of the index: From ranking pages to supporting answers", Microsoft AI describes the index shifting from ranking documents to "grounding" answers. The unit of value becomes "groundable information": discrete, supportable facts with clear provenance. The same report gives anecdotal evidence (one site) of Copilot citations dropping while pages stayed indexed. — [Rankeo](https://rankeo.io/news/bing-index-serves-ai-not-humans)
- **[Official, via trade press]** Bing Webmaster Tools added AI citation performance data. — [Search Engine Journal](https://www.searchenginejournal.com/bing-webmaster-tools-adds-ai-citation-performance-data/566874/)
- **[Blogs]** What the report contains:
  - Metrics: total citations, average cited pages, page-level citation activity and grounding queries.
  - Scope: Copilot, AI summaries in Bing and "select partner integrations". It does not cover ChatGPT, Perplexity, Google, Claude or Gemini.
  - Limits: no click data, sampled data, no API, and still in preview.
  - June 2026 additions: intents, topics, citation share and a Compare view.
  - Default view: the last 30 days.
  - Sources: [Chudi](https://chudi.dev/blog/find-ai-citations-bing-webmaster-tools); [LLMrush](https://llmrush.org/blog/bing-webmaster-tools-ai-performance/); [Hikoo](https://www.tryhikoo.com/en/blog/guides/bing-webmaster-tools-ai-performance-complete-guide-2026/); [Cadence SEO](https://www.cadenceseo.com/blog/bings-new-ai-performance-tool-review-what-it-means-for-ai-visibility-and-seo-strategy/); [Skyhoora](https://skyhoora.com/bing-webmaster-tools-ai-performance/)
  - Conflict: [A.P. Web Solutions](https://www.apwebsolutions.com.au/bing-webmaster-tools-ai-performance-report/) claims the report reflects ChatGPT. This contradicts Microsoft's stated scope and is probably wrong.
- **[Official/blog]** IndexNow (Bing and Yandex, 2021) pushes URL changes to search engines. Microsoft promotes it for keeping AI answers current. Claims of indexing "within minutes" are vendor claims only. — [Wikipedia: IndexNow](https://en.wikipedia.org/wiki/IndexNow); [Cognizo](https://www.cognizo.ai/blog/how-to-earn-copilot-citations)

### Inferences
- Learn With Smile should verify the site in Bing Webmaster Tools, submit its sitemap, enable IndexNow, and check AI Performance monthly. The grounding queries are a free view of the phrasing AI systems use for spoken-English queries, possibly including Hinglish.
- Bing's index also feeds at least part of ChatGPT's retrieval, so Bing indexation may help more than Copilot alone. The overlap is uncertain (see section 2).

### Gaps
- I could not read the Microsoft Bing Webmaster blog posts directly.
- I found no data on Copilot's market share or usage for searches in India.

---

## 4. How assistants answer "recommend me a provider" queries: third-party lists, reviews, GBP, Reddit/Quora, and evidence for India

### Takeaway
For recommendation prompts, assistants lean most on third-party "best of" listicles, followed by review and directory platforms and community sites (Reddit, YouTube, Quora). For local intent, Google's AI uses Business Profile and Maps data, but a strong Maps ranking does not guarantee an AI mention. The sites each platform cites differ widely: Perplexity favours Reddit and YouTube, Gemini favours Google properties and YouTube, and ChatGPT has recently shifted toward brand and commercial pages. I found no India-specific study of how assistants recommend course providers.

### Cited Findings
- **[Vendor study, Ahrefs]** "Best of" lists make up nearly half of ChatGPT citations for recommendation prompts (see section 2). All of the top 1,000 most-cited pages on each popular AI platform included comparison listicles (150M+ prompts). — [Ahrefs](https://ahrefs.com/blog/best-lists-research/); [Ahrefs: How to rank on ChatGPT](https://ahrefs.com/blog/how-to-rank-on-chatgpt/)
- **[Vendor study, Perplexity]** Estimates of Reddit's share of Perplexity citations:
  - Profound (680M citations, August 2024–April 2026): Reddit was 46.7% of Perplexity's top-10 cited sources, YouTube 13.9% and Gartner 7.0% — [Profound](https://www.tryprofound.com/blog/ai-platform-citation-patterns).
  - Tinuiti (January 2026): Reddit was 24% of all Perplexity citations.
  - Evertune (March 2026): Reddit 17.3%, YouTube 4.0%, LinkedIn 3.5%, with 67% of citations falling outside the top 20 domains.
  - Ahrefs (June 2026): YouTube overtook Reddit in Perplexity, 32.4% vs 16.6%.
  - Secondary sources for these figures: [gptmelo](https://www.gptmelo.com/resources/ai-platform-citation-patterns-2026); [PikaSEO](https://pikaseo.com/articles/youtube-overtakes-reddit-ai-citations); [Everything-PR Perplexity index](https://everything-pr.com/perplexity-citation-source-index-2026)
- **[Vendor study]** Perplexity favours content from the past 12 months (Frase, March 2026) and often cites 6+ sources per answer. — via [gptmelo](https://www.gptmelo.com/resources/ai-platform-citation-patterns-2026); [aeocontent.ai](https://www.aeocontent.ai/blog/how-perplexity-picks-and-cites-sources-in-2026/)
- **[Official-ish/blogs]** Perplexity's publisher program (Comet Plus, reported as launched in January 2026) shares 80% of subscription revenue. It is aimed at large publishers such as Condé Nast, CNN and the Washington Post. Its terms are reported by secondary sources and their dates conflict. — [Tech Jacks](https://techjacksolutions.com/ai-tools/perplexity/perplexity-publisher-program/); [Presenc](https://presenc.ai/research/perplexity-comet-plus-publisher-revenue-2026)
- **[Vendor study, Gemini]** Estimates of what Gemini cites:
  - Ahrefs (June 2026, about 14.5M US prompts): Reddit 27.5%, YouTube 13.7%, Wikipedia 12.7% and Forbes 2.9% — [Ahrefs](https://ahrefs.com/blog/most-cited-domains-gemini/).
  - Presenc (Gemini app): YouTube about 18%, news 21%, Wikipedia 13%, brand and official sites 14% — [Presenc](https://presenc.ai/research/gemini-app-citation-patterns-2026).
  - Everything-PR: about 43% of citations across Google's AI products go to Google-owned properties — [Everything-PR](https://everything-pr.com/gemini-citation-source-index-2026).
  - cloro: Gemini grounded only 41.1% of answers to commercial and multilingual prompts and answered the rest from training memory — [cloro](https://cloro.dev/blog/ai-grounding-by-engine/).
- **[Survey, BrightLocal]** About 45% of consumers now use ChatGPT or other AI tools for local business recommendations, up from 6% a year earlier. Most cross-check against reviews; the figure is 97% or 88% depending on the summary, and the two conflict. — [BrightLocal](https://www.brightlocal.com/research/lcrs-ai-trust/) (US/UK-centric)
- **[Blogs/vendor]** Evidence on local signals and AI recommendations:
  - Google's AI local answers are grounded in Maps and GBP data. One vendor reports 32% fewer businesses appearing in AI local packs than in Map Packs.
  - SOCi 2026: only 1.2% of audited multi-location brand locations were recommended by ChatGPT.
  - A bare category term returned zero AI Mode business listings in the 10 cities tested, while adding "near me" returned listings in 38 of 38 cases.
  - Reviews earned recently correlated with placement more than lifetime review totals (vendor, correlational).
  - Sources: [AI Visible UK](https://www.aivisible.co.uk/research/local-ai-visibility-study.html); [WSI](https://www.wsidminc.com/post/what-decides-whether-ai-recommends-a-local-business); [Citedly](https://citedly.co/blog/local-business-ai-recommendations); [Ranktracker](https://www.ranktracker.com/blog/google-ai-mode-for-local-businesses/)
- **[Official via press] India scale:** Sam Altman said ChatGPT had 100M weekly active users in India (February 2026), its #2 market. Sensor Tower data shows 180M monthly app users for ChatGPT vs 118M for Gemini in India (January 2026). OpenAI research reports that users aged 18–34 send about 80% of Indian consumer messages. — [Croma](https://www.croma.com/unboxed/indians-top-chatgpt-usage-charts-in-asia-with-over-100-million-weekly-active-users); [MangoThrive](https://mangothrive.com/how-many-chatgpt-users-are-there/); [Superlines](https://www.superlines.io/articles/chatgpt-statistics/)

### Inferences
- An online-only spoken English provider will rarely trigger "near me" local packs. Queries like "spoken English classes in Kolkata" may still use GBP data, so a verified GBP with steady fresh reviews is cheap insurance. National queries such as "best online spoken English classes India" will be answered mainly from third-party listicles, review and directory sites, YouTube and Reddit/Quora threads.
- In India, ChatGPT is the dominant assistant and skews young (18–34), which matches the 15+ and working-professional target audience. ChatGPT visibility therefore probably matters more than Perplexity or Copilot visibility in India.
- YouTube is heavily cited by Gemini, Perplexity and Google AI. A small YouTube presence, such as demo lessons and "how our batch works" videos with a branded channel, is a realistic lever for a small provider.
- Gemini answers many commercial prompts from training memory without retrieval. Long-term brand mentions across the web therefore matter as well as live crawlability.

### Gaps
- I found no study of AI recommendations for Indian education or course providers, and no data on how often Quora or Indian directories (Justdial, Sulekha, UrbanPro) are cited. These are plausibly important in India but unverified.
- I found no data on Hinglish prompts and their citation patterns.

---

## 5. Conversion quality of AI-referred visitors vs organic search (2025–2026)

### Takeaway
Most studies find that AI-referred visitors convert better than organic visitors. The size of the gap ranges from about +31% to 23x. One large study found organic converted about 13% better for transactional purchases. AI referral volume is still small, around 1% of sessions. For a considered, research-driven purchase like a course, the evidence leans positive, but none of the studies covers education or India.

### Cited Findings
- **[Agency study, Seer Interactive, 2025]** ChatGPT referrals converted at 15.9%, against 1.76% for Google organic. — via [AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates)
- **[Vendor study, Semrush, June 2025]** AI search visitors converted at 4.4x the rate of organic visitors (500+ topics). This figure is widely recycled. — via [Marshal](https://www.runmarshal.com/field-notes/ai-search-traffic-is-4x-more-valuable-than-organic); [Emarketed](https://emarketed.com/aeo/ai-referral-traffic-conversion-value-2026/)
- **[Company data, Ahrefs]** AI search was 0.5% of Ahrefs' traffic but 12.1% of its signups, a 23x conversion rate. This is one company's SaaS data. — via [AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates)
- **[Vendor data, Similarweb]** AI referrals converted at 11.4% vs 5.3% for organic in e-commerce. — via [AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates)
- **[Study, Visibility Labs via Search Engine Land, full-year 2025, 94 ecommerce sites]** ChatGPT converted at 1.81% vs 1.39% for non-branded organic, a +31% advantage. — via [AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates)
- **Contradicting [study of 973 sites, $20B revenue]:** organic outperformed ChatGPT by about 13% on transactional purchases. ChatGPT AOV was about 14.3% lower. — [Relevant Audience](https://www.relevantaudience.com/seo/why-chatgpt-traffic-converts-worse-than-google-search/)
- **[Vendor study, Conductor, 13,770 domains]** AI referrals averaged 1.08% of sessions. Claude was reported at 16.8% sign-up conversion, ChatGPT at 14.2–15.9% and Gemini at 3.0% (one dataset). — via [AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates); [Omnibound](https://www.omnibound.ai/blog/ai-seo-statistics)

### Inferences
- An AI-referred visitor to Learn With Smile has typically already compared options inside the assistant. They are likely to arrive closer to a decision, so a WhatsApp CTA is appropriate. Expect low volume; an AI channel is unlikely to exceed a few percent of sessions in the near term.
- Most of these studies measure on-site conversions. Learn With Smile's conversions happen on WhatsApp, so it needs a click event on the WhatsApp link, attributed by channel, to measure AI lead quality at all (see section 6).

### Gaps
- I found no conversion data for education, lead-gen or India-specific AI referrals.
- Many vendor figures are recycled. I could not verify the original Seer or Semrush methods.

---

## 6. Tracking AI referrals in GA4 and other analytics, and UTM behaviour

### Takeaway
Since about May–June 2026, GA4 has had a default "AI Assistant" channel. It auto-classifies referrals from ChatGPT, Gemini, Copilot, DeepSeek and Grok, with Claude disputed. It does not include Perplexity, which still lands in Referral and needs a custom channel rule. Clicks from Google AI Overviews and AI Mode are counted as Organic Search, not as AI Assistant. ChatGPT appends `utm_source=chatgpt.com`. App and referrer-less visits fall into Direct.

### Cited Findings
- **[Official, Google docs as quoted]** How GA4's AI Assistant channel works:
  - It was added around 13 May 2026, with gradual rollout (one vendor dates availability to 7 June 2026). It is not retroactive.
  - It sets medium `ai-assistant` and campaign `(ai-assistant)` from the referrer.
  - The documentation names ChatGPT, Gemini, DeepSeek, Copilot and Grok. The full referrer list is not published, and Claude's inclusion is disputed.
  - Sources: [Elsop](https://www.elsop.com/ga4-ai-assistant-default-channel/); [GA4 Auditor](https://ga4-auditor.dev/en/blog/ai-traffic-ga4); [Clique Studios](https://cliquestudios.com/university/resources/ga4-ai-assistant-channel); [Weekerp](https://weekerp.com/en/blog/ga4-ai-assistant-channel-what-it-tracks-and-misses)
- **[Official, Google docs as quoted]** Perplexity is not in the default definition and appears as Referral. The fix is a custom channel group (Admin → Data display → Channel groups) with a rule such as source contains `perplexity.ai`, placed above Referral. Clicks from AI Overviews and AI Mode are assigned to Organic Search. — [Insightland](https://insightland.org/blog/how-to-track-chatgpt-perplexity-and-gemini-traffic-in-ga4-a-complete-2026-setup-guide/); [Terminus](https://www.terminusapp.com/blog/ai-traffic-channel-in-ga4/); [Seresa](https://seresa.io/blog/reporting-dashboards/ga4s-new-ai-assistant-channel-only-sees-half-the-picture-what-it-catches)
- **[Official]** ChatGPT adds `utm_source=chatgpt.com` to outbound citation links. — [OpenAI FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq); [Lawrence Hitches](https://www.lawrencehitches.com/utm-source-chatgpt-explained/); [eSEOspace](https://eseospace.com/blog/decoding-analytics-what-does-utm_sourcechatgpt-com-mean/)
- **[Vendor data, unverified]** Shares of AI referral traffic: ChatGPT about 74.8%, Gemini about 11.6%, Perplexity about 7.2%. — via [Subreddit Signals](https://www.subredditsignals.com/blog/how-to-track-ai-referral-traffic-ga4) / [Organikpi](https://organikpi.com/blog/technical-seo/ga4-ai-search-referral-attribution/)
- **[Blog]** Many AI-referred visits arrive with no referrer, for example from mobile apps, so they are undercounted and fall into Direct. — [AirOps](https://www.airops.com/blog/ai-referral-traffic-conversion-rates); [AuthorityTech](https://authoritytech.io/curated/ai-search-traffic-conversion-measurement-2026)

### Inferences
- Recommended setup for Learn With Smile:
  1. Keep the native AI Assistant channel.
  2. Add a custom channel group with a regex such as `chatgpt\.com|openai|perplexity\.ai|copilot\.microsoft\.com|bing\.com/chat|gemini\.google\.com|claude\.ai|deepseek|grok`, placed above Referral.
  3. Fire a GA4 event on every `wa.me` or WhatsApp click and mark it as a key event.
  4. Prefill the WhatsApp message text with a page or source token. This lets AI-referred leads be matched in WhatsApp, because the conversion leaves the site.
  5. Add a "How did you hear about us? (ChatGPT / Google / Instagram / friend…)" question in the WhatsApp onboarding script. This captures AI-influenced leads that arrive as Direct or branded search.
- Google AI Overviews and AI Mode traffic will be mixed into Organic Search in GA4. Only Search Console's Gen-AI report (section 7) gives a signal for Google's AI features.

### Gaps
- I could not see Google's official GA4 channel definition page directly.
- Whether Indian Android app usage of ChatGPT and Gemini passes referrers is unknown.

---

## 7. Does Google Search Console report AI Overviews / AI Mode traffic separately in 2026?

### Takeaway
It does so only partly. Since 3 June 2026, Search Console has had a Beta "Generative AI" performance report showing impressions in AI Overviews and AI Mode. It has no clicks, CTR, position or queries. It rolled out gradually and has reportedly reached all sites worldwide, though the help pages still say not all properties have it. Clicks and impressions from AI features are also folded into the normal "Web" totals and cannot be filtered out.

### Cited Findings
- **[Official, via trade press]** Details of the Generative AI report:
  - Announced on 3 June 2026 for a subset of sites, labelled Beta, with Search and Discover views.
  - Breakdowns by pages, countries, devices and dates (hourly to monthly).
  - No queries, clicks, CTR or position.
  - Sources: [SEJ: Search Console AI reports rolled out worldwide](https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/); [Pragma-Code](https://www.pragma-code.de/en/blog-search-console-generative-ai-performance); [Sinton](https://www.sinton.agency/blog/search-console-generative-ai-impressions-report); [CrawlRaven](https://crawlraven.com/blog/gsc-ai-performance-reports); [LLM Pulse](https://llmpulse.ai/blog/gsc-generative-ai-report/)
- **[Official, via trade press]** A companion opt-out toggle blocks a site's content from generative AI features without affecting core Search rankings. It reportedly took effect on 17 June 2026. — [Pragma-Code](https://www.pragma-code.de/en/blog-search-console-generative-ai-performance); [Smart-team](https://smart-team.io/en/search-console-performance-report-generative-ia/)
- **[Official, Google AI features doc updated 10 December 2025, as quoted]** Appearances in AI Overviews and AI Mode are included in overall Search Console traffic under the Web search type. A click on an external link in AI Mode counts as a click. Each AI Mode element gets its own position. There is no AI Mode filter. Google confirmed AI Mode inclusion around June 2025. — [PPC Land](https://ppc.land/google-ai-mode-now-counts-toward-search-console-totals/); [GSQi](https://www.gsqi.com/marketing-blog/ai-mode-tracking-google-search-console/); [SEJ](https://beta.searchenginejournal.com/google-adds-ai-mode-traffic-to-search-console-reports/549089/)
- The Generative AI report's impressions are a subset of the Web totals, so adding the two together double-counts. — [LLM Pulse](https://llmpulse.ai/blog/gsc-generative-ai-report/); [apiserpent](https://apiserpent.com/blog/gsc-generative-ai-report-impressions-no-clicks)

### Inferences
- Learn With Smile can use the Gen-AI report's page and country filters (India) to see which pages appear in AI Overviews and AI Mode. Comparing these with Web-total clicks for the same pages gives a rough estimate of AI-feature CTR.
- Recommended monthly AI-visibility dashboard for a small provider, combining three first-party sources:
  1. GSC Gen-AI impressions for Google.
  2. Bing Webmaster Tools AI Performance citations and grounding queries for Copilot and Bing.
  3. The GA4 AI Assistant channel plus WhatsApp-click events for ChatGPT, Gemini, Perplexity and others.
  4. Optionally, monthly manual prompt checks of 10–20 target queries (English and Hinglish) in ChatGPT, Gemini, Perplexity and AI Mode, logging whether Learn With Smile is mentioned or cited.

### Gaps
- I could not confirm the exact current rollout status for small or new properties, or whether the report applies a low-volume threshold that might hide data for a new site.
- I found no official Google statement on whether query-level data will be added to the report.
