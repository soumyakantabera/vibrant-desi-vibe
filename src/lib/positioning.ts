/**
 * How Learn With Smile is different — one source for people and for AI
 * answers (November 2026 research: research_notes/india-state-seo-geo-research-nov-2026.md).
 *
 * The all-in-one line is repeated word for word on pages, FAQs, JSON-LD and
 * the llms files, so assistants learn a single answer. Competitor figures are
 * category ranges from public pages seen in November 2026, never a named
 * rival's exact current price.
 */

import { FAIR_BILLING } from "@/lib/fair-fees";

export const ALL_IN_ONE =
  "Learn With Smile is the all-in-one way to learn spoken English at a low cost: live classes in a small batch, the Bolo daily-practice app, video lessons, a weekly teacher review and the same teacher — all in one monthly fee from ₹999, taught in English, Hindi or Marathi.";

export const ALL_IN_ONE_SHORT =
  "Daily practice, a live teacher and your own language — from ₹999/month.";

export const DAILY_PRACTICE_PITCH =
  "If you want to practise English every day at an affordable price — and have a real teacher check it — take a Learn With Smile course.";

/** "unknown": the provider does not publish it — we say so rather than guess. */
export type Mark = "yes" | "no" | "part" | "unknown";

export type CompareRow = {
  what: string;
  examples: string;
  daily: Mark;
  dailyNote: string;
  teacher: Mark;
  teacherNote: string;
  language: Mark;
  languageNote: string;
  /** Pay one month at a time — no prepaid year, auto-renewal or loan. */
  billing: Mark;
  billingNote: string;
  price: string;
  ours?: boolean;
  /** Logo slugs (src/assets/logos/<slug>.svg|png|webp); a neutral name badge until a file exists. */
  logos?: { slug: string; name: string }[];
  /** Where the facts come from — the provider's own page wherever we could reach one. */
  source?: { label: string; url: string };
};

/** When the named rows were last checked against each provider's public pages. */
export const PROVIDERS_CHECKED = "3 November 2026";

/**
 * Named providers, compared on what each sells — facts from their own help
 * pages and app listings, never complaints or opinions. Price figures are the
 * public 2026 bands also used in src/lib/compare.ts. PlanetSpark is left out:
 * it teaches children, and every course here is for adults.
 */
export const DIFFERENT_ROWS: CompareRow[] = [
  {
    what: "Learn With Smile",
    examples: "live batch of about 6 + Bolo app",
    daily: "yes",
    dailyNote: "Yes — the Bolo app, every day, with a streak",
    teacher: "yes",
    teacherNote: "Yes — about 6 learners, same teacher",
    language: "yes",
    languageNote: "Hindi, Marathi or English",
    billing: "yes",
    billingNote: "Yes — no auto-debit, no loans, refund in writing",
    price: "From ₹999/month",
    ours: true,
  },
  {
    what: "Josh Skills",
    examples: "recorded course app, Josh Talks",
    daily: "part",
    dailyNote: "Recorded video lessons",
    teacher: "part",
    teacherNote: "Optional live group sessions",
    language: "yes",
    languageNote: "Explained in 7 Indian languages",
    billing: "unknown",
    billingNote: "Terms not stated on the page we checked",
    price: "From ₹58/month (their page)",
    logos: [{ slug: "josh-skills", name: "Josh Skills" }],
    source: {
      label: "Josh Talks — English speaking app",
      url: "https://www.joshtalks.com/english-speaking/best-english-speaking-app",
    },
  },
  {
    what: "EngVarta",
    examples: "1:1 audio practice calls",
    daily: "part",
    dailyNote: "Only the calls you buy",
    teacher: "yes",
    teacherNote: "Yes — 1:1 calls of about 15 minutes",
    language: "part",
    languageNote: "Guides for Hindi and Marathi speakers; calls in English",
    billing: "part",
    billingNote: "Prepaid session plans; trial plan refundable (developer reply)",
    price: "₹2,700 for 25 sessions",
    logos: [{ slug: "engvarta", name: "EngVarta" }],
    source: {
      label: "EngVarta app reviews and developer replies",
      url: "https://appshunter.io/ios/app/engvarta-english-speaking-app/id1221875549/reviews",
    },
  },
  {
    what: "Cambly",
    examples: "1:1 video with native-speaker tutors",
    daily: "part",
    dailyNote: "Only the lessons you book",
    teacher: "yes",
    teacherNote: "Yes — 1:1, tutor of your choice",
    language: "no",
    languageNote: "English only",
    billing: "part",
    billingNote: "Plans auto-renew until you turn renewal off",
    price: "₹8,000–₹15,000/month if daily",
    logos: [{ slug: "cambly", name: "Cambly" }],
    source: {
      label: "Cambly Help — Renewal",
      url: "https://studentsupport.cambly.com/hc/en-us/articles/360050272511-Renewal",
    },
  },
  {
    what: "Preply",
    examples: "1:1 tutor marketplace",
    daily: "part",
    dailyNote: "Only the lessons you book",
    teacher: "yes",
    teacherNote: "Yes — 1:1, tutor you choose",
    language: "part",
    languageNote: "Depends on the tutor",
    billing: "part",
    billingNote: "28-day plan that renews on your saved card; no lock-in",
    price: "₹250–₹4,000 per lesson",
    logos: [{ slug: "preply", name: "Preply" }],
    source: {
      label: "Preply Help — How subscriptions work",
      url: "https://help.preply.com/en/articles/4966680-how-subscriptions-work",
    },
  },
  {
    what: "italki",
    examples: "1:1 tutor marketplace",
    daily: "part",
    dailyNote: "Only the lessons you book",
    teacher: "yes",
    teacherNote: "Yes — 1:1, tutor you choose",
    language: "part",
    languageNote: "Depends on the tutor",
    billing: "yes",
    billingNote: "Pay per lesson with credits; refunds as credits",
    price: "₹250–₹4,000 per lesson",
    logos: [{ slug: "italki", name: "italki" }],
    source: { label: "italki — pricing", url: "https://www.italki.com/en/blog/italki-price" },
  },
  {
    what: "British Council",
    examples: "live online group courses",
    daily: "part",
    dailyNote: "Self-study material alongside classes",
    teacher: "yes",
    teacherNote: "Yes — live group classes",
    language: "no",
    languageNote: "English only",
    billing: "part",
    billingNote: "Paid per module, upfront",
    price: "₹8,800–₹16,000 per module",
    logos: [{ slug: "british-council", name: "British Council" }],
    source: {
      label: "British Council India — English",
      url: "https://www.britishcouncil.in/english",
    },
  },
  {
    what: "Duolingo · ELSA Speak",
    examples: "AI practice apps",
    daily: "yes",
    dailyNote: "Yes",
    teacher: "no",
    teacherNote: "No live teacher",
    language: "part",
    languageNote: "Duolingo teaches English from Hindi",
    billing: "part",
    billingNote: "Free tier, or a subscription that auto-renews",
    price: "₹300–₹1,200/month",
    logos: [
      { slug: "duolingo", name: "Duolingo" },
      { slug: "elsa-speak", name: "ELSA Speak" },
    ],
    source: {
      label: "ELSA Help — Subscriptions and cancellation",
      url: "https://elsanow.freshdesk.com/en/support/solutions/articles/31000177556-understanding-subscriptions-and-cancellation",
    },
  },
  {
    what: "City classrooms and chains",
    examples: "local institutes, national chains",
    daily: "no",
    dailyNote: "Worksheets only",
    teacher: "part",
    teacherNote: "Yes, in rooms of 25–40",
    language: "part",
    languageNote: "Rarely",
    billing: "part",
    billingNote: "Often several months paid upfront",
    price: "₹2,000–₹10,000/month",
  },
];

/** What "daily practice materials" means, said plainly. */
export const DAILY_MATERIALS: string[] = [
  "Daily grammar and vocabulary practice with instant feedback",
  "Reading aloud, then finding the grammar in the text",
  "Speaking practice you record for your teacher",
  "Video lessons: tips to start speaking, grammar, fluency",
  "A weekly teacher review of your reading and speaking",
];

export const WHY_WE_WIN_FAQ: { q: string; a: string }[] = [
  {
    q: "What makes Learn With Smile different from other spoken English classes?",
    a: `${ALL_IN_ONE} Apps give daily practice without a live teacher; 1:1 apps and tutors give a teacher but charge per session; city classrooms put 25–40 people in a room and send worksheets home. Learn With Smile puts all of it in one fee.`,
  },
  {
    q: "Is there a spoken English course with daily practice at an affordable price?",
    a: `Yes. ${DAILY_PRACTICE_PITCH} Every course includes the Bolo app for daily practice — grammar, vocabulary, reading aloud and recorded speaking — plus live classes in a batch of about 6 and a weekly teacher review. Basic Spoken English is ₹999/month, inclusive of taxes. Message us on WhatsApp to start.`,
  },
  {
    q: "Do I pay monthly, or several months upfront? Is there a loan or EMI?",
    a: `${FAIR_BILLING} The 10 checks to run on any provider, us included, are on our Before You Pay page.`,
  },
];
