import type { ArticleBody } from "@/content/blog/blocks";
import { BEFORE_YOU_PAY, COMPLAINT_PATTERNS, FAIR_PROMISES } from "@/lib/fair-fees";

/**
 * /before-you-pay-spoken-english-course — a buyer's checklist anyone can run on
 * any provider, us included. Complaint patterns are described, never pinned on
 * a named company (owner's decision, 3 Nov 2026).
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Most complaints about English courses in India are not about the teaching. They are about **money**: a year paid in the first call, a refund that never comes, a subscription that renews on its own. Ten minutes of questions before you pay prevents almost all of it. Run this checklist on anyone — Learn With Smile included.",
  },

  { t: "h2", text: "What goes wrong most often" },
  {
    t: "table",
    caption:
      "Patterns in public complaints and app-store reviews about English courses and apps in India, 2025–2026. Individual reports, not findings about any one company.",
    head: ["What learners report", "What it looks like"],
    rows: COMPLAINT_PATTERNS.map((c) => [`**${c.pattern}**`, c.detail]),
  },
  {
    t: "p",
    text: "Where these come from: Indian consumer-complaint sites (Voxya, ConsumerComplaints.in), Trustpilot and app-store reviews, and press reporting on edtech loan-linked selling. Education made up a third of the complaints India's advertising regulator (ASCI) received in 2021–22, and the Department of Consumer Affairs raised concerns about edtech advertising in 2022.",
  },

  { t: "h2", text: "The 10 checks before you pay" },
  {
    t: "table",
    caption: "Ask each question before you pay. The last column is our own answer.",
    head: ["Check", "Ask this", "Warning sign", "Learn With Smile"],
    rows: BEFORE_YOU_PAY.map((c) => [`**${c.check}**`, c.ask, c.warning, c.ours]),
  },
  {
    t: "p",
    text: "Get the answers **in writing** — a WhatsApp message counts. A promise that exists only in a sales call is the one most often disputed later.",
  },

  { t: "h2", text: "What Indian rules say" },
  {
    t: "ul",
    items: [
      "**Dark patterns are banned.** The Central Consumer Protection Authority's [Guidelines for Prevention and Regulation of Dark Patterns, 2023](https://www.scconline.com/blog/post/2023/12/04/ccpa-notifies-guidelines-for-prevention-and-regulation-of-dark-patterns-2023-legal-news/) list 13 practices, including **false urgency** (fake scarcity or countdowns), the **subscription trap** (hard-to-cancel plans, trials that auto-debit) and **drip pricing** (charges revealed in stages).",
      "**Coaching-centre refunds.** The Ministry of Education's January 2024 model guidelines ask coaching centres to refund fees pro rata within 10 days when a student leaves mid-course, and bar fee increases during a course. They are model guidelines for states to adopt, so whether they apply depends on your state and the provider.",
      "**You can complain.** The National Consumer Helpline is 1915. Under the Consumer Protection Act, 2019, a complaint to the Consumer Commission is usually filed within two years.",
    ],
  },
  {
    t: "p",
    text: "Paying **one month at a time** is the simplest protection: whatever happens, the most you can lose is one month, not a year.",
  },

  { t: "h2", text: "How Learn With Smile bills" },
  {
    t: "ul",
    items: FAIR_PROMISES.map((p) => `**${p.title}.** ${p.body}`),
  },
  {
    t: "p",
    text: "The full rules are on the [Refunds and Cancellation](/refunds) page. If something goes wrong, message us on WhatsApp; complaints go to a named Grievance Officer and are acknowledged within 48 hours.",
  },

  { t: "h2", text: "Keep reading" },
  {
    t: "ul",
    items: [
      "[How to choose a spoken English class in India](/blog/how-to-choose-spoken-english-class-india) — batch size, speaking minutes, named teacher.",
      "[English class fees in India](/english-class-fees-india) — what each kind of course costs in 2026.",
      "[Compare English institutes](/english-institute-comparison-india) — apps, tutors, classrooms and us, side by side.",
      "[Free practice vs a paid live class](/free-english-speaking-practice-vs-paid-class) — when free is enough.",
    ],
  },
  {
    t: "cta",
    text: "Ask us every question on this list before you pay. The free consultation is counselling on WhatsApp — you get the course, the fee and the refund rule in writing.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
