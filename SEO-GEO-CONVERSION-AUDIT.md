# Learn With Smile — SEO, GEO & Conversion Audit

Audit date: 1 September 2026  
Scope: Google, Bing, ChatGPT, Microsoft Copilot, Gemini and Claude  
Goal: more qualified reach, phone calls, WhatsApp conversations and free-demo bookings  
Constraint honoured: no new package, SaaS form, analytics vendor or third-party dependency was added

## Brutal executive verdict

The site did not have a basic “SEO is missing” problem. It already had an unusually strong static-crawl setup: prerendered pages, canonical URLs, a sitemap, bot directives, structured data, `llms.txt`, `llms-full.txt` and Markdown mirrors.

Its real problems were lower in the funnel and more damaging:

1. The business contradicted itself about the flagship product: Spoken English was both **2 and 3 classes per week**. The owner has now confirmed that every recurring course runs **no more than 2 days per week**; the site, AI answers and schedule schema are aligned to that rule.
2. The homepage H1 changed in the browser through an unmeasured local A/B test. Crawlers and visitors could see different positioning, and no analytics property existed to identify a winner.
3. The hero offered two versions of WhatsApp but no immediate phone path and no strong route to the actual demo form.
4. The demo “form” was not a form. It accepted empty/invalid leads, had no semantic fields and carried no campaign or landing-page attribution.
5. Four footer social buttons went nowhere (`href="#"`), while schema invented an unverified X/Twitter identity and treated WhatsApp as a `sameAs` profile.
6. `EducationalOrganization` and `LocalBusiness` were emitted as two separate entity IDs for the same company.
7. Every deployment falsely refreshed sitemap `lastmod` dates, even when the content had not changed.
8. Conversion claims such as “instant” and “in minutes” appeared across the site without a visible service window. Results copy did not clearly separate selected learner outcomes from guaranteed outcomes.

This implementation fixes those code-controlled leaks. It cannot manufacture search-console ownership, independent reviews, backlinks, a CRM or real campaign data. Those remain owner actions.

## Audit dashboard

Scores are heuristic implementation-quality scores, not traffic forecasts.

| Area | Before | After this PR | Brutal status |
|---|---:|---:|---|
| Crawlability & indexability | 90/100 | 94/100 | Strong; static output and bot access were already good |
| On-page intent & message clarity | 74/100 | 89/100 | Stronger fixed H1, price, batch cap and ₹0 demo proposition |
| Structured data & entity consistency | 81/100 | 92/100 | One business ID, connected founder, larger logo, honest hours |
| AI/GEO retrieval | 91/100 | 94/100 | Excellent machine-readable layer; citations still depend on authority |
| Demo/call conversion path | 55/100 | 86/100 | Global call/demo dock, real form and clearer primary action |
| Lead attribution | 5/100 | 65/100 | First-touch campaign data reaches WhatsApp; no aggregate dashboard yet |
| Trust & claim hygiene | 60/100 | 76/100 | Dead identities removed and result caveat added; proof still needs evidence |
| Overall implementation | 65/100 | 85/100 | Technically competitive; authority and measurement are the ceiling now |

## What this PR changes

### Conversion

- Replaces the rotating homepage H1 with one stable, search-aligned promise: live English, max 6 per batch, from ₹999/month, ₹0 live demo.
- Sends the hero’s primary action to the demo page and adds a direct call action.
- Adds a mobile Call / ₹0 Live Demo dock to every page, plus call actions in navigation, footer and demo page.
- Converts the demo fields into a semantic, accessible `<form>` with required name/phone validation, autocomplete, field names, labels and an error region.
- Adds a unique `LWS-...` lead reference to every WhatsApp click.
- Captures first-touch `utm_source`, `utm_medium`, `utm_campaign`, referrer and landing page in first-party session storage and places them in the WhatsApp enquiry itself.
- Adds delegated click-to-call and WhatsApp event hooks. They remain harmless no-ops unless the owner later supplies a valid analytics ID.

### Search and AI retrieval

- Makes up to two classes per week the visible and machine-readable source of truth for scheduled batch courses.
- Corrects maximum schedule counts to 48 sessions for the six-month course, 24 for three-month courses and 16 for the two-month course.
- Removes invented Monday/Wednesday/Friday schema because exact weekday combinations vary by batch.
- Consolidates Organization and LocalBusiness into one canonical `#organization` entity.
- Connects the founder Person ID consistently across profile, course instructor, article author and Organization founder properties.
- Uses the 180×180 brand asset instead of a 48×48 favicon as the Organization logo.
- Removes the fake Twitter handle, dead social links and WhatsApp-as-`sameAs` misuse.
- Changes the founder WebPage to a ProfilePage with the founder as `mainEntity`.
- Stops using deployment day as a fake sitemap content-modification date.
- Corrects the robots.txt explanation: Google-Extended is not a Google Search ranking directive.
- Keeps Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, Claude bots, Google-Extended and other relevant crawlers allowed.

### Trust and offer consistency

- Standardises the currently encoded course price table: Business English ₹1,499/month, Interactive Speaking ₹1,199/month, Interview Preparation ₹1,499/month.
- Replaces vague “daily live” and three-session wording with the confirmed maximum of two live class days per week.
- Replaces “instant/minutes” service promises with the visible 07:00–22:00 IST response window.
- Replaces “EMI” wording where the offer is simply monthly billing.
- Adds an explicit individual-results disclaimer; no job, IELTS score or salary increase is guaranteed.
- Replaces broken brand copy with “Speak today. Lead tomorrow. Build your future with us.”

## Platform readiness

| Platform | Code readiness | What actually drives discovery | Owner action still required |
|---|---|---|---|
| Google Search / AI features | Strong | Googlebot, indexable HTML, canonical, internal links, helpful pages, entity signals | Verify Search Console, submit sitemap, inspect priority URLs, maintain Google Business Profile |
| Bing Search / Copilot | Strong | Bingbot and Bing index; Copilot discovery largely depends on Bing retrieval | Verify Bing Webmaster Tools, submit sitemap, inspect/index priority URLs |
| ChatGPT | Strong technical access | OAI-SearchBot, ChatGPT-User, authoritative index/citations and useful answer-shaped content | No magic submission exists; earn mentions and links from relevant independent sites |
| Gemini | Strong technical access | Google Search index plus applicable Google controls | Search Console and real authority matter more than adding more AI files |
| Claude | Strong technical access | Claude crawler access and retrievable, attributable public content | No guaranteed inclusion; independent references improve entity confidence |

`llms.txt` is useful for efficient retrieval but is not a ranking API, a guarantee of citation or a replacement for normal HTML, sitemaps and authority.

## Highest-value owner actions after merge

### P0 — do immediately

1. **Schedule confirmed by the owner on 1 September 2026:** every recurring course runs no more than 2 days per week. Before merging, confirm that the listed prices are still commercially correct.
2. In Google Search Console, verify `https://www.learnwithsmile.app`, submit `https://www.learnwithsmile.app/sitemap.xml`, then request inspection for:
   - `/`
   - `/course-spoken-english`
   - `/book-free-demo`
   - `/spoken-english-classes-kolkata`
   - `/english-class-fees-india`
3. In Bing Webmaster Tools, verify the domain, submit the same sitemap and inspect the same five URLs. This is the highest-leverage owner action for Bing and Copilot visibility.
4. Test a lead from each source below and confirm the correct Source / Campaign / Landing lines appear in WhatsApp:
   - `/?utm_source=google&utm_medium=cpc&utm_campaign=spoken_english_kolkata`
   - `/?utm_source=instagram&utm_medium=social&utm_campaign=free_demo`
   - `/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=profile`
5. Put the same phone, business name, URL, hours, address and category on the Google Business Profile and every real social/directory profile. Do not create profiles only to fill schema.

### P1 — authority and evidence

1. Add evidence to learner stories: month/year, course attended and outcome evidence where the learner permits it. Do not publish private documents; a redacted result screenshot or linked public LinkedIn recommendation is stronger than another quote card.
2. Obtain 10–20 detailed Google reviews that naturally mention course, city/online format and outcome. Never script exact review wording and never mark up self-hosted reviews as LocalBusiness aggregate ratings.
3. Earn relevant independent mentions: Kolkata education directories, college placement cells, local publications, alumni posts and career/IELTS partner pages. AI assistants trust corroborated entities, not just self-description.
4. Publish one evidence-led answer page per month from real sales questions. Priorities:
   - Spoken English course fees in Kolkata
   - 6-student vs 30-student speaking-time comparison
   - Business English for Indian IT/BPO professionals
   - What happens in a real online English demo class
   - How to choose between Spoken English and Interactive Speaking

### P2 — measurement without installing another form

The first-party WhatsApp context now identifies individual leads, but there is still no aggregate reporting. Either:

- manually log the lead reference, source, course and outcome in a sheet; or
- supply the existing optional analytics configuration with a real property ID and measure `whatsapp_click`, `phone_call_click` and `demo_form_submit`.

Do not restart A/B tests until there is enough traffic and a working conversion report. With low traffic, one strong stable offer is more useful than three unmeasured variants.

## Campaign naming rules

Use lowercase snake_case so reporting does not split one source into five names.

| Field | Good examples | Avoid |
|---|---|---|
| `utm_source` | `google`, `bing`, `instagram`, `google_business_profile` | `Google Ads`, `IG`, random capitalization |
| `utm_medium` | `cpc`, `organic`, `social`, `referral`, `email` | campaign names or audience names |
| `utm_campaign` | `spoken_english_kolkata`, `free_demo_sep_2026` | `test`, `new`, dates with no offer |

## What not to do

- Do not add dozens of thin city pages with only the city name swapped.
- Do not add fake social profiles, fake review schema, fake awards or `sameAs` URLs.
- Do not add `meta keywords`; they do not help and can advertise a spammy strategy.
- Do not create separate pages for ChatGPT, Claude or Gemini. Create useful answer pages for people and expose them cleanly to all crawlers.
- Do not promise “instant”, “guaranteed fluency”, a job, a band score or a salary increase.
- Do not use IndexNow until a real key is owned and its submission result can be monitored.
- Do not merge pricing or schedule changes without an operations sign-off.

## Verification gates

The repository’s GitHub Pages workflow is the source of truth because it uses Bun, performs the full Vite build, prerenders every public route and asserts canonical tags, JSON-LD, non-empty HTML, sitemap output, AI files and Markdown mirrors. Production deployment runs from `main`; this PR should not change production until reviewed and merged.
