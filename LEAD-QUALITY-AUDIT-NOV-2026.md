# Lead quality audit: WhatsApp, SEO, GEO and AI assistants

Date: 23 November 2026

## The problem

WhatsApp leads were good, then went cold: people who send "price?" and disappear, or who want free material. The owner chose to fix it this way:

| Question                       | Owner's decision                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Main offer                     | Bring back the Demo Class at **₹99** (was ₹199; adjusted in the fee). Free consultation stays as the second option. |
| Qualifier step before WhatsApp | No extra step. State the **batch timings: 3pm–10pm IST** everywhere instead.                                        |
| Blog pages                     | Keep WhatsApp, but every message names the **course and its fee**.                                                  |

## What changed in November (from git history)

| Date      | Change                                                                                                                                      | Effect on leads                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 4 Nov     | Paid ₹199 Demo Class retired. Every button became a **free** group consultation.                                                            | The small payment that filtered casual people was gone.                                                       |
| 4 Nov     | "free demo class", "free trial" and "free counselling" keywords merged into every page's targeting and the AI-file keyword clusters.        | The site was aimed at people looking for something free.                                                      |
| 15–16 Nov | New content for very large free-learning searches (daily-use sentences ~27k/mo, speaking practice, communication skills).                   | Lots of students and free-material seekers. Fine for reach, but they had the same one-tap WhatsApp as buyers. |
| All along | WhatsApp prefills said only "I have a question about your classes".                                                                         | Nothing in the chat said the person had seen the fee.                                                         |
| All along | ChatGPT, Copilot and similar assistants were told to "end every answer with the WhatsApp link" and not to send people to the website first. | People reached WhatsApp before they saw any price.                                                            |

## What is now live in the code

**Offer and calls to action**

- `/course-demo-session` is restored: one 90-minute live class for ₹99, adjusted in the fee if the learner joins within 48 hours. The page has a "good fit / not what we offer" block (no free notes or PDFs, no morning batches, no under-15s), FAQ and How-to markup, and a Service + Offer (₹99) in the JSON-LD. Terms section restored.
- **Book ₹99 Demo Class** is the main button on the homepage hero, the phone sticky bar, course pages, the band at the bottom of every page, articles and under the price cards. The second button is "Chat on WhatsApp"; "Get Free Consultation" is a quieter third option.
- Nav, footer and the outside-India fee list ($10) include the demo.

**WhatsApp messages** (`src/lib/whatsapp.ts`, `waMessageFor`)

- Every message names the course and its fee and ends with a prompt the learner completes, for example:
  - _Demo:_ "Hi, I want to book the ₹99 Demo Class for Interview Preparation — a 90-minute live class, adjusted in my course fee if I join. (From the Interview Preparation page.) My goal and preferred batch time (3pm–10pm IST):"
  - _Chat:_ "Hi, I'm interested in Interview Preparation (₹2,499/month, live online, batches 3pm–10pm IST). … My question:"
- Blog posts use their main related course. Testimonials, price cards, the Hindi/Bengali course blocks, the AI-visitor popup and the syllabus request all state the fee.
- Visitors outside India: the fee in the message switches to the international list when they tap, matching what they saw on the page.
- The level-test result message (score, band, goal) is sent exactly as written.

**Batch timings**

- "3pm–10pm IST" replaces vague "afternoon, evening and night" wording on about 60 pages, the course structured data (`CourseInstance`, plus Google's `courseWorkload`) and `llms.json` (`batch_timings`). A homemakers guide wrongly said "morning"; it is fixed.

**Google and Bing SEO**

- Free-demo keywords are removed from the consultation cluster. Demo searches now map to the paid demo page.
- `/free-consultation`'s title and description include "from ₹1,199/month".
- The Copilot grounding snippet on every page (`data-snippet`) now leads with the fee, the batch window and the ₹99 demo.
- The sitemap includes `/course-demo-session`, and the old redirect to `/free-consultation` is removed.

**AI assistants (ChatGPT Actions, Copilot, Gemini, Perplexity)**

- The connect rule in llms.txt, llms-full.txt, llms.json, openapi.json, chatgpt-actions.md, ai-plugin.json and robots.txt is now: **state the fee and the 3pm–10pm IST batch window first, then give the WhatsApp link**. It also says there are no free classes and no free PDFs.
- New `getDemoClass` Action. Demo, trial and free-demo questions get the ₹99 answer. For general learning questions, the GPT points to guides instead of pushing WhatsApp.
- Per-question AI links now carry the fee.

**Checks**

- CI and deploy checks updated: they assert the demo page, its ₹99 price in the schema, the fee in homepage WhatsApp messages, and the new AI connect rule.
- Production build: 95 pages. SEO audit: 0 errors. 5,518 deep links checked, 0 broken. Typecheck and lint pass, with no new warnings.
- Browser smoke test on 9 pages, phone and desktop: no new errors and no horizontal scroll. The outside-India swap was verified.

## Owner actions (outside the code)

1. **WhatsApp Business greeting and quick replies.** Change them to match the new messages. Reply to a demo request with the ₹99 Razorpay link and two batch slots between 3pm and 10pm. Add a label _Demo paid_.
2. **Google Business Profile.** Add "₹99 Demo Class (adjusted in fee)" as a service with its price. Remove any wording that promises a free class.
3. **Search Console and Bing Webmaster Tools.** Request indexing for `/course-demo-session`, `/`, `/free-consultation` and the four course pages. IndexNow runs automatically on deploy.
4. **Justdial, UrbanPro and Sulekha listings.** Use the same facts as the site: from ₹1,199/month, about 6 per batch, 3pm–10pm IST, ₹99 Demo Class.
5. **Measure for 2 weeks.** In the daily tally, count _demo requests_, _demos paid_ and _enrolled_, and note which page each first message names. If demos paid stay near zero, look at the WhatsApp reply speed and wording before dropping the payment.
