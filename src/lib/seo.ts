/**
 * Single source of truth for every piece of SEO / AEO metadata on the site.
 *
 * Consumed by three places — keep it free of Vite-only imports (no `?url`,
 * no image imports) so the prerender + sitemap scripts can read it too:
 *  1. `src/routes/*.tsx`   → TanStack `head()` for the SPA / SSR runtime
 *  2. `scripts/prerender.mjs` → static <head> baked into each dist/*.html
 *  3. `scripts/prerender.mjs` → sitemap.xml + llms.txt generation
 *
 * Title/description budget: titles are kept to 58 characters and descriptions
 * to 150–158, because Google truncates around there and a title cut mid-phrase
 * reads as broken. The brand name is deliberately NOT appended — `og:site_name`
 * and the Organization schema already carry it, and Google appends the site
 * name to the SERP title itself. Every character spent on "| Learn With Smile"
 * is a character not spent on a keyword.
 *
 * The `keywords` arrays below are targeting notes AND are emitted as a
 * `<meta name="keywords">` tag so SEM, Search Console and AI crawlers see
 * the same list. Google still largely ignores the tag for ranking; we keep
 * it because paid search, Bing and assistants do read it. Visible page copy
 * never says "demo class" — that phrase lives here, in titles and in
 * descriptions so we still match "free demo class" searches.
 */

import { verificationMeta } from "@/lib/analytics";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog";
import { EXTRA_PAGES } from "@/lib/guide-pages";
import { CONSULTATION, CONSULTATION_FAQS, CONSULTATION_HOWTO, CONSULTATION_PATH } from "@/lib/consultation";

export const SITE_URL = "https://www.learnwithsmile.app";
export const SITE_NAME = "Learn With Smile";
export const SITE_LOCALE = "en_IN";
/** Used by the Organization schema and by llms.txt, so "N years" is derived. */
export const FOUNDING_YEAR = 2019;
/** Last content revision used when a page has no page-specific date. */
export const CONTENT_REVISED = "2026-09-22";

export const CONTACT = {
  phone: "+919674479949",
  phoneDisplay: "+91 96744 79949",
  whatsapp: "https://wa.me/919674479949",
  email: "info@learnwithsmile.app",
  street: "75/2/4, Raja Ram Mohan Roy Road",
  locality: "Kolkata",
  region: "West Bengal",
  postalCode: "700008",
  country: "IN",
  latitude: 22.4924,
  longitude: 88.3125,
  legalName: "LEARN WITH SMILE SOLE PROPRIETORSHIP",
  gstin: "19CFGPD7931C1ZL",
} as const;

/** Public profiles for Organization.sameAs — Google Business, not the review form. */
export const SAME_AS = ["https://g.page/r/CY5ptQJYQVPVEBM"] as const;

/**
 * Service area for coverage UI, FAQs and Organization.areaServed.
 * States first (what search and assistants fetch), then cities.
 * Howrah is not listed — Kolkata covers the West Bengal metro.
 */
export const COVERAGE_STATES = [
  "West Bengal",
  "Delhi",
  "Maharashtra",
  "Gujarat",
  "Karnataka",
  "Tamil Nadu",
  "Telangana",
  "Kerala",
  "Andhra Pradesh",
  "Bihar",
  "Assam",
] as const;

export const COVERAGE_CITIES = [
  "Kolkata",
  "Delhi",
  "Mumbai",
  "Pune",
  "Nagpur",
  "Ahmedabad",
  "Surat",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Coimbatore",
  "Kochi",
  "Visakhapatnam",
  "Patna",
  "Guwahati",
] as const;

/**
 * The rating, stated once for the whole site.
 *
 * The homepage used to show 4.9★ in its stats band, 5.0★ (125 reviews) in the
 * location card, and 4.9★ again on the sticker that `SnapshotCard` renders on
 * the hero and on all four course pages — three places, two numbers, no source.
 *
 * That matters more here than on most sites: llms.txt and the `.md` twins make
 * this site unusually easy for an assistant to quote verbatim, so an
 * inconsistency propagates straight into AI answers about the business. This
 * constant is the Google Business Profile figure and the only rating anything
 * on this site is allowed to render.
 *
 * Deliberately NOT emitted as `aggregateRating` in JSON-LD. Google disregards
 * self-serving review markup on LocalBusiness and Organization, and it carries
 * a manual-action risk. It is displayed in HTML, where it belongs.
 */
export const RATING = {
  value: "5.0",
  count: 125,
  /** Where the figure comes from. Shown to readers so the number has a source. */
  source: "Google",
} as const;

/** "5.0★" — the display form used in stat tiles and stickers. */
export const RATING_DISPLAY = `${RATING.value}★`;

/** Absolute URL for a site-relative path. Canonicals must never be relative. */
export function abs(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * The clean-Markdown mirror of a page, written by `scripts/prerender.mjs`:
 * `/` → `/index.md`, `/course-spoken-english` → `/course-spoken-english.md`.
 *
 * Linked from every page's head as `rel="alternate"` so an assistant that has
 * already landed on the HTML can fetch the text without parsing ~60 kB of
 * markup. See `src/lib/llms.ts` for the rest of the AI-readable layer.
 */
export function markdownPathFor(path: string): string {
  return path === "/" ? "/index.md" : `${path.replace(/\/$/, "")}.md`;
}

export type Faq = { q: string; a: string };

export type PageSeo = {
  path: string;
  /** ≤58 chars, no brand suffix — see the note at the top of this file. */
  title: string;
  /** 150–158 chars. */
  description: string;
  /**
   * Short human name for breadcrumbs and the llms.txt page list. Needed because
   * the titles are now keyword-shaped rather than name-shaped — "Student
   * Results: IELTS 7.5, Salary Doubled, Jobs Won" is a good <title> and a
   * terrible breadcrumb.
   */
  shortTitle: string;
  /** Internal targeting notes. Never rendered into the page. */
  keywords: string[];
  ogImage: string;
  /** Sitemap hints. */
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  /** One-line summary used by llms.txt so AI crawlers get the gist cheaply. */
  summary: string;
  /** Rendered as an FAQPage block + visible accordion where the page supports it. */
  faqs?: Faq[];
  /** Extra breadcrumb trail segment (defaults to Home → page title). */
  breadcrumb?: { name: string; path: string }[];
  /** ISO date `YYYY-MM-DD` when the page copy was last revised. Used in JSON-LD and the sitemap. */
  dateModified?: string;
  /** HowTo JSON-LD — visible steps on the page must match. */
  howTo?: { name: string; description: string; steps: string[]; totalTime?: string };
};

/* --------------------------------------------------------------------------
 * Keyword strategy — target market: India
 *
 * Grouped by the intent that actually converts for a small live-class provider.
 * Head terms ("spoken english classes") are owned by Cambly/PlanetSpark/EngVarta
 * with 8-figure ad budgets; we are not going to outrank them and should not try.
 * The winnable surface is:
 *  a) price-qualified long tail — "spoken english class fees per month india"
 *  b) format long tail      — "small batch live english class approximately 6 learners"
 *  c) audience long tail     — "english speaking course for working professionals"
 *  d) geo long tail       — "spoken english classes kolkata online"
 *  e) question long tail (AEO)  — what AI assistants are actually asked
 * ------------------------------------------------------------------------ */

const BRAND_KEYWORDS = ["learn with smile", "learnwithsmile", "learn with smile online classes"];

const CORE_KEYWORDS = [
  "spoken english classes online india",
  "online english speaking course india",
  "live english classes india",
  "english communication classes online india",
  "online english communication course for adults india",
  "english communication skills classes india",
  "small batch english classes online",
  "english speaking course for beginners india",
  "affordable spoken english classes india",
  "english classes under 1000 rupees",
  "spoken english classes kolkata online",
];

/**
 * India-market terms pushed onto every page (meta keywords, SEM, Bing, LLMs).
 * Geo, price, GST, medium of instruction, IST, audience — the queries people
 * in India actually type. Page-specific keywords still go first.
 */
export const INDIA_MARKET_KEYWORDS = [
  ...CORE_KEYWORDS,
  "spoken english classes india",
  "english speaking course india fees",
  "gst inclusive english class india",
  "english class fees inclusive of taxes india",
  "hindi medium spoken english classes",
  "bengali medium spoken english classes",
  "spoken english for working professionals india",
  "spoken english for freshers india",
  "spoken english for homemakers india",
  "ist live english class india",
  "online english class west bengal",
  "spoken english classes delhi ncr online",
  "spoken english classes mumbai pune online",
  "spoken english classes bengaluru hyderabad chennai",
  "spoken english classes ahmedabad surat nagpur",
  "english class 999 rupees per month",
  "upi payment english class india",
  "small batch spoken english india approximately 6 learners",
  "live english class with indian teacher",
  "online spoken english adults 15+",
];

/**
 * Pushed onto every page's meta keywords, titles and SEM targeting.
 * Visible UI says "Get Free Consultation". Meta still ranks for demo-class
 * searches, and for counselling / consulting / consultation queries.
 */
export const CONSULTATION_KEYWORDS = [
  "get free consultation",
  "get a free consultation",
  "free consultation",
  "free consultation to understand their requirements",
  "free consultation to understand your requirements",
  "free counselling",
  "get a free counselling",
  "get free counselling",
  "free counselling to understand requirements",
  "free consulting",
  "get free consulting",
  "get a free consulting",
  "free consulting to understand requirements",
  "english class free counselling india",
  "english class free consulting india",
  "free english consultation india",
  "free english consulting india",
  "spoken english counselling whatsapp",
  "spoken english consulting whatsapp",
  "what happens in free english consultation",
  "what do you get in free english consultation",
  "english course counselling session india",
  "english course consulting session india",
  "which english course consultation",
  "help choose spoken english course india",
  "diagnose spoken english problem",
  "english class placement counselling",
  "best spoken english consultation india",
  "spoken english counselling vs demo class",
  "free counselling spoken english kolkata",
  "free consulting spoken english kolkata",
  "english course recommendation after counselling",
  "demo class",
  "free demo class",
  "free demo class online",
  "free demo class online india",
  "book free demo class",
  "free english demo class",
  "free english demo class online india",
  "free ielts demo class online",
  "english class free demo whatsapp",
  "free trial spoken english class",
  "spoken english free demo class",
  "online english free demo class",
  "free demo class spoken english india",
];

function uniqueKeywords(...lists: Array<string[] | undefined>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const list of lists) {
    for (const item of list ?? []) {
      const key = item.trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}

/* --------------------------------------------------------------------------
 * Page metadata
 * ------------------------------------------------------------------------ */

export const PAGES: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "Live Online English Classes in India from ₹999/month",
    description:
      "Speak better English with a teacher who knows your name. Get a free consultation. Free counselling on courses. Free demo class online. From ₹999/mo.",
    shortTitle: "Home",
    keywords: [
      ...CORE_KEYWORDS,
      ...BRAND_KEYWORDS,
      "best online spoken english classes in india",
      "english class fees per month in india",
      "business english course india",
      "workplace english course india",
      "interview english practice india",
      "career counselling online india",
      "spoken english classes west bengal",
      "spoken english classes maharashtra online",
      "spoken english classes karnataka tamil nadu kerala",
      "spoken english classes delhi ncr online",
      "spoken english classes gujarat telangana",
      "live english class with real teacher",
    ],
    ogImage: "/og/default.jpg",
    priority: 1.0,
    changefreq: "weekly",
    dateModified: "2026-09-22",
    summary:
      "Homepage. Live spoken English for Indian adults 15+ from ₹999/month, 7 years, 500+ learners, batches of approximately 6. Inclusive of taxes.",
    faqs: [
      {
        q: "How much do online spoken English classes cost in India?",
        a: "At Learn With Smile, live online Spoken English (adults 15+) starts at ₹999 per month for a batch of approximately 6 learners, with up to 2 classes per week. Interactive Speaking is ₹1,499/month, Workplace English ₹1,999/month, and 1:1 Career Counselling is ₹1,999 total for three 60-minute sessions. Interview English is practised inside Spoken and Interactive rooms. All prices are inclusive of taxes and there are no registration or material fees. Across the wider Indian market, group online English classes typically run ₹800–₹3,000 per month and 1:1 native-speaker platforms run ₹300–₹2,200 per session.",
      },
      {
        q: "Which is the best online spoken English class in India for a small batch?",
        a: "It depends on what you need. For daily 1:1 speaking reps with no fixed curriculum, EngVarta and Cambly are the usual picks. For a structured syllabus with a certificate, British Council. Adult Spoken at Learn With Smile is 15+: a live human teacher, a fixed 6-month syllabus, approximately 6 learners per batch, from ₹999/month inclusive of taxes — so every learner gets real speaking time in every class instead of watching a recording or sitting in a 40-person webinar.",
      },
      {
        q: "Can I actually learn to speak English fluently in 6 months?",
        a: "Yes, for everyday conversational fluency, if you attend up to 2 live classes a week and practise between them. Our 6-month Basic Spoken English course takes learners from zero — people who cannot form a full sentence — to introducing themselves, handling daily conversations, and speaking for 2 minutes on a topic. Professional and academic fluency (IELTS Band 7+, client presentations) usually needs 9–12 months total. Anyone promising fluency in 30 days is selling you something.",
      },
      {
        q: "Are online English classes as effective as offline coaching centres?",
        a: "For speaking practice, online small-batch classes are usually better. In a batch of around 6, every learner speaks in every class; in a 30-student offline classroom most learners speak once a week. Online also removes commute time, lets you join morning, evening or weekend slots, and gives you class recordings to revise. The one thing offline does better is peer accountability, which we replace with live polls, debates and a WhatsApp batch group.",
      },
      {
        q: "Can I get a free consultation before I enrol?",
        a: "Yes. Tap Get Free Consultation — it opens WhatsApp. We diagnose your bottleneck, answer every question about courses, fees and batch, and place you in one room — or tell you to stay free. It is counselling, not a full class. Message +91 96744 79949. We reply 09:00–12:00 IST.",
      },
      {
        q: "Do you teach students outside Kolkata and West Bengal?",
        a: "Yes. Classes are 100% live online. Learners join from West Bengal, Delhi, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh, Bihar and Assam — Kolkata, Mumbai, Pune, Ahmedabad, Surat, Nagpur, Bengaluru, Hyderabad, Chennai, Coimbatore, Kochi, Visakhapatnam, Patna, Guwahati and towns nationwide. Same ₹999/month fee. IST morning, evening and weekend slots. Enrolment is for learners in India only. We do not enrol students outside India. Fees on this site are India pricing.",
      },
      {
        q: "Who are the classes for?",
        a: "Adult learners 15+: working professionals, graduates, freshers, homemakers and anyone who needs live speaking practice. Batches are approximately 6 learners. We currently run adult rooms only.",
      },
    ],
  },

  "/english-career": {
    path: "/english-career",
    title: "English & Career | Master In-Demand Skills",
    description:
      "Live English programmes for adults 15+. From ₹999/month, inclusive of taxes. Small live batches. Interview English in Spoken and Interactive.",
    shortTitle: "English & Career Courses",
    keywords: [
      "online english course list india",
      "english course fees comparison india",
      "spoken english vs business english course",
      "which english course should i take",
      "ielts vs spoken english course",
      "online english and career courses india",
      "english course duration and fees india",
      ...CORE_KEYWORDS,
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.9,
    changefreq: "weekly",
    dateModified: "2026-09-22",
    summary:
      "Course hub. Spoken, Interactive, Workplace and 1:1 Career Counselling. Interview English (HR, tell-me-about-yourself, STAR) is inside Spoken and Interactive. Fees from ₹999/month, inclusive of taxes.",
    faqs: [
      {
        q: "Which English course should I choose — Spoken English, Workplace English or Interactive Speaking?",
        a: "Choose Basic Spoken English (₹999/month, 6 months) if you cannot yet hold a conversation and need grammar, vocabulary and pronunciation from the ground up. Choose Workplace English (₹1,999/month, 3 months) if you already speak but need meetings, client calls, status updates, emails and presentations. Choose Interactive Speaking (₹1,499/month, 3 months) if your grammar is fine but you freeze when speaking and need repeated live practice through games, debates and storytelling. Rooms are for adult learners 15+.",
      },
      {
        q: "What is the cheapest course at Learn With Smile?",
        a: "Basic Spoken English is ₹999 per month, Interactive Speaking ₹1,499 per month, Workplace English ₹1,999 per month, and 1:1 Career Counselling is ₹1,999 total for the complete 3-session package. All fees are inclusive of taxes. Interview English is practised in Spoken and Interactive rooms. We do not sell a separate IELTS or Interview Preparation course.",
      },
      {
        q: "Who can join?",
        a: "Adult learners 15+: working professionals, graduates, freshers and homemakers. Batches are approximately 6 learners. We currently run adult rooms only.",
      },
      {
        q: "Can I take two courses at the same time?",
        a: "We place you in one room first. Two rooms only when the foundation is already there and the IST slots fit — typically Workplace English with Career Counselling. Message us on WhatsApp so we can check the available schedules.",
      },
    ],
  },

  "/why-us": {
    path: "/why-us",
    title: "Why Us | Built for Indian Learners",
    description:
      "500+ Indian learners. 7 years. A teacher who knows your name. Small live batches from ₹999/month. Kolkata & pan-India. Inclusive of taxes.",
    shortTitle: "Why Learn With Smile",
    keywords: [
      "small batch english classes online india",
      "live english class vs recorded course",
      "english class with money back guarantee india",
      "approximately 6 learners english batch",
      "one to one english classes online india",
      "english classes flexible timing working professionals",
      "is online english coaching worth it",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-09-11",
    summary:
      "Why us: a named teacher, a group of around 6, and a fee that does not jump with your city. 7 years live from Kolkata. From ₹999/month.",
    faqs: [
      {
        q: "How is Learn With Smile different from 1:1 apps and brand-name English groups?",
        a: "Cambly is on-demand 1:1 with native speakers at roughly ₹8,000–₹15,000/month if you practise daily; tutor training varies and beginners often freeze at native speed. Brand-name CEFR groups (often 8–12) run modules at ₹8,800–₹16,000 and teach a published syllabus. Learn With Smile is a named live teacher, 7 years, 500+ learners, from ₹999/month inclusive of taxes, and approximately 6 learners per batch so every adult still speaks. Most Indian employers mark the interview, not a PDF. When a visa or university form needs IELTS, sit that paper with IDP or British Council — we do not sell IELTS as a course.",
      },
      {
        q: "Are Kolkata offline spoken English classes better than online?",
        a: "For speaking time, usually no. Typical Kolkata classrooms run 25–40 students, so most learners speak once a week. Public 3-month packages often sit at ₹1,500–₹6,000 plus commute. Online small-batch classes remove the commute, keep morning/evening/weekend IST slots, and give every learner the mic in every hour. Peer energy is the one thing a packed room still does well — we replace that with live polls, debates and a WhatsApp batch group.",
      },
      {
        q: "Why is a typical batch size of approximately 6 learners important for learning English?",
        a: "Speaking time is the whole point. In a 60-minute class with around 6 learners, each learner can get roughly 8–10 minutes of actual speaking and correction. In a 30-student batch that drops to under 2 minutes, and most learners spend the hour listening to someone else practise. Small batches also mean the teacher can remember your specific errors week to week and correct the same mistake until it disappears.",
      },
      {
        q: "Is there a refund if I don't like the course after enrolling?",
        a: "The consultation is free. Monthly fees are prepaid because a live seat is reserved, so we do not run a routine refund after a paid period has started. Duplicate charges, payments in error, and classes we cannot deliver are reviewed in good faith. Full policy: https://www.learnwithsmile.app/refunds — message WhatsApp before you enrol.",
      },
      {
        q: "Are the classes live or pre-recorded?",
        a: "100% live, every single session, with a real teacher who knows your name. Classes are recorded afterwards so you can revise or catch up on a missed session, but you are never asked to learn from a recording as your primary class.",
      },
      {
        q: "Can I reschedule a missed class?",
        a: "A reschedule can be requested only within the same week and depends on teacher and slot availability. Every class is also recorded and shared for revision.",
      },
      {
        q: "Can I contact the teacher one to one outside class?",
        a: "Yes. Direct 1:1 contact with the teacher outside class is assured when a learner genuinely needs help. This is personal support, not a scheduled monthly 1:1 feedback session.",
      },
      {
        q: "Does Learn With Smile provide a course certificate?",
        a: "This room trains the voice people hear. Most Indian employers mark your English in the interview, not on a school certificate. When a visa, university or HR form needs a recognised exam, that is IELTS (or similar) — a separate paper the test board scores. We do not sell IELTS coaching. Sit the exam when the form asks. Until then, join for speaking.",
      },
    ],
  },

  "/about-us": {
    path: "/about-us",
    title: "About Us | 7 Years, Kolkata & Pan-India",
    description:
      "7 years of live teaching, 500+ learners, from ₹999/month. A Kolkata classroom that went online — same teacher, learners across India.",
    shortTitle: "About Us",
    keywords: [
      "learn with smile about",
      "online english academy india",
      "english teaching institute kolkata online",
      "trusted online english classes india",
      "gamified english learning india",
    ],
    ogImage: "/og/about-us.jpg",
    priority: 0.7,
    changefreq: "monthly",
    summary:
      "Company background: 7 years of live online teaching, 500+ learners taught, and the 11 learning principles the curriculum is built on.",
  },

  "/educator": {
    path: "/educator",
    title: "Sunanda Dey | One Mentor. One Mission.",
    description:
      "Meet Sunanda Dey — educator at Learn With Smile. 7 years, 500+ learners, from ₹999/month. Kolkata-based, teaching learners across India.",
    shortTitle: "Sunanda Dey — Educator",
    keywords: [
      "sunanda dey english teacher",
      "learn with smile educator",
      "online english teacher india",
      "english trainer kolkata",
      "career mentor india online",
    ],
    ogImage: "/og/founder.jpg",
    priority: 0.6,
    changefreq: "monthly",
    summary:
      "Educator profile: Sunanda Dey, English and career mentor, 7 years of live online teaching experience.",
  },

  "/success-stories": {
    path: "/success-stories",
    title: "Real Indian Learners | Real Results",
    description:
      "Tax desks, court briefs, bank promotions, BI Analyst jobs — named Learn With Smile learners. Spoken English from ₹999/mo. Kolkata & pan-India.",
    shortTitle: "Success Stories",
    keywords: [
      "learn with smile reviews",
      "online english class reviews india",
      "ielts band 7 success story india",
      "english class results testimonials india",
      "does online spoken english class work",
      "career switch after english course",
      "english for tax analyst ca lawyer bank india",
    ],
    ogImage: "/og/success-stories.jpg",
    priority: 0.7,
    changefreq: "monthly",
    summary:
      "Named learner outcomes — tax analyst, CA, advocate, data analyst, bank assistant manager, BI Analyst. Speaking first. Individual results vary.",
    faqs: [
      {
        q: "Do online English classes actually get people jobs in India?",
        a: "They get people interview-ready, which is the gate most candidates fail at. Named outcomes on this page include a tax analyst in Ahmedabad taking the Mumbai client call herself, a CA in Mumbai presenting working papers in English, an advocate in Hyderabad briefing Bengaluru clients, a data analyst in Bengaluru running Monday standups, a bank assistant manager in Delhi clearing a promotion board, and a Pune learner moving from back office to BI Analyst. English is a gate, not a guarantee — it opens rooms that were previously closed to you.",
      },
      {
        q: "How soon can I expect to see real improvement in my spoken English?",
        a: "Most learners notice a genuine difference in confidence and sentence fluency within 6–8 weeks of regular live classes, roughly 12–16 sessions in. Full everyday conversational fluency for someone starting from zero typically takes the complete 6-month Basic Spoken English course, attended up to twice a week with some daily practice in between.",
      },
      {
        q: "I studied in a Hindi or Bengali-medium school, not English-medium. Can I still get results like these?",
        a: "Yes — most of our learners come from Hindi- or Bengali-medium schooling, including several in the stories above, from Kolkata, Hyderabad and Ahmedabad. Classes are taught bilingually in the early weeks where needed, so grammar and pronunciation are explained in a language you already understand before you're expected to think and respond in English.",
      },
      {
        q: "Will an English course actually help me clear interviews, or is that too big a claim?",
        a: "English removes one specific obstacle — communicating confidently once you're in the room — it doesn't replace domain skills or experience you don't have. Interview English (HR, tell-me-about-yourself, STAR) is practised inside Spoken and Interactive rooms, and the outcomes above came from candidates who already had the underlying skills but needed the language and confidence fixed.",
      },
      {
        q: "Do I need IELTS for a job in India?",
        a: "Most Indian interviews hear you speak. Start with spoken English, business English or interactive speaking. Sit IELTS if a form, a university or a country asks for the exam. Neha, Kavya, Ananya and Vikram are the speaking path most learners actually need.",
      },
      {
        q: "Are these success stories typical, or just the best few out of many students?",
        a: "These are named people and named outcomes — a career switch, a client presentation, an interview cleared, a standup that now happens. Your result follows where you start, how often you speak, and the months you stay. We do not sell a promised job, band or raise.",
      },
      {
        q: "Does Learn With Smile help with career guidance, or only English speaking?",
        a: "Both, if you need it. Alongside the English courses we run standalone 1:1 Career Counselling (₹1,999 total for three 60-minute sessions). Many learners combine an English course with a counselling session when the actual goal is a career or course change, not just language practice.",
      },
    ],
  },

  "/blog": {
    path: "/blog",
    title: "English & Career Blog | Tips for Indian Learners",
    description:
      "Notes from teachers who run live classes: IELTS Band 7, interview answers, workplace English, how long fluency takes. From ₹999/month, inclusive of taxes.",
    shortTitle: "Blog",
    keywords: [
      "english learning tips india",
      "ielts writing task 2 template band 7",
      "professional email phrases english",
      "tell me about yourself answer example",
      "bpo to client facing role career change",
      "how to improve english speaking daily",
    ],
    ogImage: "/og/blog.jpg",
    priority: 0.7,
    changefreq: "weekly",
    summary:
      "Blog: practical English and career articles written by Learn With Smile teachers for Indian learners.",
  },

  "/book-free-demo": {
    path: "/book-free-demo",
    title: "Get Free Consultation | Free Demo Class | Counselling",
    description:
      "Free consultation: we diagnose your bottleneck, answer every query, recommend one course. Not a class. Free demo class seekers — this is counselling.",
    shortTitle: "Get Free Consultation",
    keywords: [
      ...CONSULTATION_KEYWORDS,
      "get free consultation learn with smile",
      "free counselling spoken english india",
      "free consultation spoken english whatsapp",
      "book free demo class online india",
      "free demo class spoken english whatsapp",
      "best free english consultation vs demo class",
      "engvarta vs learn with smile consultation",
      "british council counsellor vs free consultation",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.9,
    changefreq: "weekly",
    dateModified: "2026-09-22",
    summary:
      "Get Free Consultation: WhatsApp counselling, not a class. We diagnose the bottleneck (spoken / freeze / workplace / interview / career), answer every query, and recommend one course — or tell you to stay free. No payment. Replies 09:00–12:00 IST. +91 96744 79949.",
    faqs: CONSULTATION_FAQS,
    howTo: {
      name: CONSULTATION_HOWTO.name,
      description: CONSULTATION_HOWTO.description,
      totalTime: CONSULTATION_HOWTO.totalTime,
      steps: [...CONSULTATION_HOWTO.steps],
    },
  },

  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | How We Handle Your Data",
    description:
      "How Learn With Smile collects and uses your data — including free-consultation notes on WhatsApp, how long chats are kept, Razorpay payments and class recordings. We do not sell personal information.",
    shortTitle: "Privacy Policy",
    keywords: [
      "learn with smile privacy policy",
      "english class data protection india",
      "whatsapp consultation privacy english class",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.3,
    changefreq: "yearly",
    dateModified: "2026-09-22",
    summary:
      "Privacy Policy: what we collect (name, WhatsApp, consultation notes, email, course notes, Razorpay payment status, class recordings), how long WhatsApp chats are kept, who we share with, and how to ask for correction or deletion.",
    faqs: [
      {
        q: "Does Learn With Smile sell my personal information?",
        a: "No. We use your details to reply, run a free consultation, enrol you, run live classes and process fees through Razorpay. We do not sell personal information or send it to advertising networks.",
      },
      {
        q: "What do you keep from the free consultation?",
        a: "The WhatsApp thread plus notes needed to place you: the bottleneck we named, the questions you asked, and the one course we recommended — or that we told you to stay free. The consultation is counselling, not a class. WhatsApp (Meta) also processes that conversation under its own policy.",
      },
      {
        q: "How long do you keep my WhatsApp chat?",
        a: "If you do not enrol: 90 days after the last message, then we delete the chat from our devices. We may keep a one-line “consulted, did not enrol” note for up to 12 months so we do not message you again. If you enrol: the thread for the course plus 12 months after the last paid month. We cannot erase Meta’s copy or the copy on your phone. Paid invoices are kept 8 years for Indian tax rules.",
      },
      {
        q: "Who processes my card or UPI payment?",
        a: "Razorpay. We receive payment status, not your full card number. WhatsApp messages are also processed by Meta under WhatsApp’s own policy.",
      },
      {
        q: "How do I ask you to delete my data?",
        a: "Message +91 96744 79949 on WhatsApp or email info@learnwithsmile.app. Say stop or delete. We reply 09:00–12:00 IST and aim to close a deletion request within 30 days. We delete the chat from our devices. Invoices from a paid course are kept for the tax period. We cannot delete WhatsApp’s copy or yours.",
      },
    ],
  },

  "/terms": {
    path: "/terms",
    title: "Terms of Use | Live English Classes",
    description:
      "Rules for Learn With Smile: free consultation is counselling not a class, live online rooms, tax-inclusive fees, no school certificate, WhatsApp enrolment, Indian law.",
    shortTitle: "Terms of Use",
    keywords: [
      "learn with smile terms of use",
      "online english class terms india",
      "free consultation terms english class",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.3,
    changefreq: "yearly",
    dateModified: "2026-09-22",
    summary:
      "Terms of Use: free consultation is 1:1 counselling not a class, live online teaching, no school certificate, no guaranteed band or job, WhatsApp enrolment, recordings for personal revision, governed by Indian law and Kolkata courts.",
    faqs: [
      {
        q: "Is the free consultation a class I can sit for free?",
        a: "No. Get Free Consultation is one-to-one counselling on WhatsApp: we diagnose the bottleneck, answer your questions, and recommend one course. It is not a sample class and not speaking minutes on a mic. Those minutes are the paid room. Messaging us does not oblige you to enrol.",
      },
      {
        q: "Does Learn With Smile issue a course certificate?",
        a: "No. We do not issue a school certificate. IELTS and similar scores are issued only by the test board. We do not sell IELTS as a course.",
      },
      {
        q: "Do you guarantee fluency, a job or an IELTS band?",
        a: "No. Results depend on your starting level, attendance and practice. We do not guarantee fluency in a set number of days, a job, a visa or a particular exam score.",
      },
    ],
  },

  "/refunds": {
    path: "/refunds",
    title: "Refunds and Cancellation Policy",
    description:
      "Refunds at Learn With Smile: free consultation first (counselling, not a class), prepaid monthly fees, good-faith review of duplicates or undelivered classes. Indian consumer rights still apply.",
    shortTitle: "Refunds and Cancellation",
    keywords: [
      "learn with smile refund policy",
      "english class cancellation india",
      "free consultation refund english class",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.3,
    changefreq: "yearly",
    dateModified: "2026-09-22",
    summary:
      "Refunds: the consultation is free counselling, not a class — nothing to refund. Monthly fees are prepaid. No routine refund after a paid period starts. Duplicate charges, errors, and classes we cannot deliver are reviewed in good faith. Indian consumer rights that cannot be waived still apply.",
    faqs: [
      {
        q: "Can I get a refund after I pay for a month?",
        a: "Not as a routine. A live seat is reserved when you pay. Duplicate payments, charges in error, and classes we cannot deliver are reviewed in good faith. Message WhatsApp with the payment date and reason.",
      },
      {
        q: "How do I cancel a later month?",
        a: "Message +91 96744 79949 on WhatsApp before that month is billed. This website does not run an automatic card subscription.",
      },
      {
        q: "Is the consultation refundable?",
        a: "The consultation is free, so there is nothing to refund. Get it before you enrol. It is counselling — courses, curriculum and your requirements — not a full class and not a demo class.",
      },
      {
        q: "You did not give me a free class. Can I get my money back?",
        a: "No class is included in the consultation. That is stated before you pay. Speaking minutes are the paid batch of approximately six learners. Get the free consultation first so the format is clear in writing on WhatsApp.",
      },
    ],
  },

  "/child-protection": {
    path: "/child-protection",
    title: "Child Protection Policy | Adult Rooms 15+",
    description:
      "Learn With Smile currently runs adult English rooms for learners 15+. We do not offer Kids or Teens courses. Indian law as the floor. Parent is the account holder if the learner is under 18.",
    shortTitle: "Child Protection Policy",
    keywords: [
      "child protection policy online english class india",
      "adult english class safety india",
      "DPDP parental consent english class",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.4,
    changefreq: "yearly",
    dateModified: "2026-09-22",
    summary:
      "Child Protection Policy for adult rooms 15+: we do not currently run Kids or Teens courses. Parent is the customer if the learner is under 18. No 1:1 video with a child unless the parent stays on the call. Indian law (DPDP, POCSO, JJ Act) is the floor. No COPPA/GDPR certificate claimed.",
    faqs: [
      {
        q: "Do you have a child protection policy?",
        a: "Yes. It is at https://www.learnwithsmile.app/child-protection. We currently run adult rooms for learners 15+. We do not offer Kids (6–11) or Teens (12–17) courses. If a learner is under 18, a parent or guardian is the customer. No 1:1 video with a child unless the parent stays on the call. We follow Indian child-protection and privacy law.",
      },
      {
        q: "Do you run kids or teen English classes?",
        a: "No. The live catalogue is adult rooms only (15+): Spoken, Interactive Speaking, Workplace English and 1:1 Career Counselling. For children, look at a dedicated kids platform. Do not put a child under 15 in an adult Spoken English batch.",
      },
      {
        q: "Are you COPPA or GDPR certified for children?",
        a: "We follow Indian child-protection and privacy law (DPDP, POCSO, JJ Act). Enrolment is for learners in India only. If the learner is under 18, the parent is the account holder. We are an Indian school — not a COPPA- or GDPR-certified programme.",
      },
    ],
  },

  /* ---------------------------------------------------------------------
   * Landing pages for searches the site had no page for at all.
   *
   * Each answers a query the business genuinely serves and previously had
   * nowhere to rank for. They are not doorway pages: the Kolkata page carries
   * content that is only true of Kolkata, and the two guides answer their
   * question honestly enough to be worth citing even by someone who does not
   * buy anything.
   * ------------------------------------------------------------------- */

  "/spoken-english-classes-kolkata": {
    path: "/spoken-english-classes-kolkata",
    title: "Spoken English Kolkata | Live, From ₹999",
    description:
      "Live Spoken English from a Kolkata teacher. 7 years, ₹999/month. Morning, evening, weekend IST. More speaking time than a 25–40 student room.",
    shortTitle: "Spoken English Classes in Kolkata",
    keywords: [
      "spoken english classes kolkata",
      "spoken english classes in kolkata online",
      "english speaking course kolkata fees",
      "best spoken english institute kolkata",
      "english classes salt lake kolkata",
      "spoken english class gariahat",
      "english speaking classes kolkata bengali medium",
      "online english classes kolkata working professionals",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Kolkata landing page. Live online Spoken English for Kolkata learners — why online beats a commute to Gariahat or Salt Lake, Bengali and Hindi support, batch timings on IST, and the same ₹999/month fee as everywhere else.",
    faqs: [
      {
        q: "Where in Kolkata are your spoken English classes held?",
        a: "They are not held anywhere in Kolkata — every class is online and live. Our registered address at 75/2/4 Raja Ram Mohan Roy Road, Kolkata 700008 is an office you can visit by appointment, not a teaching campus, and there is no walk-in coaching centre. The teacher is Kolkata-based, the batch timings are set for IST, and classmates are usually a mix of Kolkata learners and learners from elsewhere in India.",
      },
      {
        q: "How much do spoken English classes cost in Kolkata?",
        a: "Offline coaching centres in Kolkata generally charge somewhere between ₹1,500 and ₹6,000 for a 3-month spoken English course, usually in batches of 25–40 students. Learn With Smile charges ₹999 per month for Basic Spoken English in a batch of approximately 6 learners, inclusive of taxes, with no registration or material fee. The fee is the same for a learner in Kolkata as for one in Guwahati — there is no local pricing.",
      },
      {
        q: "Can the teacher explain in Bengali or Hindi if I don't understand?",
        a: "Yes. Instruction is in English and all practice stays in English, but when a concept is not landing the teacher will explain it in Bengali or Hindi and then go back to English. This matters: a strictly English-only classroom produces silence from genuine beginners, and silence is the one thing a speaking class cannot afford. As your level rises the first-language explanations naturally stop being needed.",
      },
      {
        q: "What batch timings do you run for people working in Sector V or Salt Lake?",
        a: "Morning batches before office hours, evening batches from about 7pm IST, and weekend batches. Sector V and New Town shifts often run late, so the weekend batch is the most common choice for IT and BPO staff. Every class is recorded, so a missed session because of a release or an escalation does not set you back a week.",
      },
      {
        q: "Is an online class actually better than joining a coaching centre in Kolkata?",
        a: "For speaking practice, usually yes, and the reason is arithmetic rather than technology. A Kolkata coaching centre running 25–40 students per batch cannot give each learner more than a minute or two of speaking per class. An online batch of around 6 gives each learner roughly 8–10 minutes. You also save the 45–90 minutes each way of commuting up to twice a week that a Gariahat or Salt Lake centre costs someone living across the city. What an offline centre does better is peer accountability and the social side of a classroom.",
      },
      {
        q: "Do you prepare Kolkata students for job interviews too?",
        a: "Yes. Interview English — HR screens, tell-me-about-yourself, STAR — is practised inside Spoken English and Interactive Speaking. Workplace English at ₹1,999/month covers professionals in IT, BPO, customer support and other client-facing roles. We do not sell a separate IELTS or Interview Preparation course. All English rooms are live with approximately 6 learners per batch.",
      },
    ],
  },

  "/english-class-fees-india": {
    path: "/english-class-fees-india",
    title: "English Class Fees India 2026 | From ₹999",
    description:
      "What online English classes actually cost in India in 2026 — group, 1:1 and app-based pricing compared honestly, with what changes at each price point.",
    shortTitle: "Online English Class Fees in India",
    keywords: [
      "english class fees per month in india",
      "online english classes fees india",
      "spoken english course fees",
      "how much do english classes cost india",
      "cheapest online english class india",
      "english speaking course price india",
      "ielts coaching fees india",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Fees guide. What online English classes actually cost in India — ₹800–₹3,000/month for group classes, ₹100–₹2,000 per 1:1 session, ₹300–₹800/month for apps — what drives the price, the cost-per-speaking-minute calculation, and five hidden costs to check with any provider.",
    faqs: [
      {
        q: "How much do online English classes cost in India per month?",
        a: "Group online English classes in India generally run ₹800–₹3,000 per month. One-to-one tutoring runs ₹100–₹2,000 per session depending on where the tutor is based, and app-based conversation practice runs ₹300–₹800 per month. Learn With Smile sits at ₹999/month for Spoken English in a batch of approximately 6 learners, inclusive of taxes. Anything under about ₹500 a month is almost always either recorded video or a batch large enough that you will not speak.",
      },
      {
        q: "What is the cheapest way to learn English in India?",
        a: "Free, and this is worth saying plainly: a language exchange partner, a daily podcast, and speaking to one person in English every day costs nothing and works, if you are disciplined. Paid classes buy you three things free options do not — a fixed syllabus so you are not guessing what to study next, someone who corrects the same mistake until it goes away, and a schedule you are accountable to. If you are already disciplined and just need practice, spend nothing.",
      },
      {
        q: "Why do some online English classes cost ₹500 and others ₹5,000?",
        a: "Batch size, overwhelmingly. A teacher earning a viable hourly rate has to divide it among the students in the room, so a ₹500/month class needs 30–40 learners in it and a ₹2,000/month class can run with 6. After that: live teaching costs more than recorded video, foreign-based tutors cost more than Indian ones, exam prep costs more than general conversation, and a recognised certificate adds a fee that has nothing to do with teaching quality.",
      },
      {
        q: "Are expensive English classes better than cheap ones?",
        a: "Not reliably. Price buys smaller batches and live teaching, which are real advantages, but it does not buy better teachers or faster results — plenty of ₹5,000/month institutes run 30-student batches, and plenty of ₹1,000/month classes are taught by someone with a decade of experience. The two things worth paying for are speaking time per class and individual correction. Ask any provider their batch size before you ask anything else.",
      },
      {
        q: "Do online English class fees in India include taxes?",
        a: "Often not, and it is the most common surprise on the invoice. Ask whether the advertised figure is inclusive, because 18% on a ₹2,000/month course is ₹360 a month you did not budget for. Learn With Smile's prices are inclusive of taxes and there are no registration or material fees. Also ask about lock-in: a quarterly or annual payment that cannot be cancelled is a much larger commitment than a monthly fee.",
      },
      {
        q: "How much does IELTS coaching cost in India?",
        a: "Full IELTS courses in India typically run ₹8,000–₹35,000, with large-institute classroom batches at the higher end and often 20–40 students per batch. The IELTS exam fee itself is separate and paid directly to IDP or British Council — budget for it on top of any coaching. Learn With Smile does not sell IELTS as a course. If you cannot yet hold a conversation, start with Spoken English at ₹999/month.",
      },
    ],
  },

  "/best-online-spoken-english-classes-india": {
    path: "/best-online-spoken-english-classes-india",
    title: "Best Spoken English Online India | From ₹999",
    description:
      "An honest comparison of the main online spoken English options in India — who each one actually suits, what they cost, and where we fit in among them.",
    shortTitle: "Best Online Spoken English Classes, Compared",
    keywords: [
      "best online spoken english classes in india",
      "best english speaking course online india",
      "cambly vs engvarta",
      "best english learning platform india",
      "which online english class is best",
      "english speaking app vs class",
      "online english class comparison india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.7,
    changefreq: "monthly",
    summary:
      "Comparison guide. The main formats for learning spoken English online in India — 1:1 practice apps, native-speaker platforms, children's platforms, institutional courses, small and large live batches, AI apps — organised by which learner each suits rather than as a ranking. Written by one of the providers, and says so.",
    faqs: [
      {
        q: "Which is the best online spoken English class in India?",
        a: "There is no single best one, and any page that names one is usually published by that company. The right choice depends on your level and what you need: daily 1:1 speaking reps with no fixed syllabus suit a hesitant intermediate speaker; a structured live course suits a genuine beginner who does not know what to study next; an established institution suits anyone who needs a recognised certificate. Take three free trials in one week and count how many minutes you actually spoke in each.",
      },
      {
        q: "Are English speaking apps as good as live classes?",
        a: "For daily practice, an app is often better, because it is available at 6am and a class is not. For learning, apps are weaker in two specific ways: most have no fixed syllabus, so you practise what you can already say rather than what you cannot, and AI-based apps will not tell you that a sentence is technically correct but nobody speaks that way. The common pattern that works is an app for daily reps plus a live class for structure and correction.",
      },
      {
        q: "Is it worth paying for a native English speaker as a tutor?",
        a: "Usually not, for an Indian beginner. Native tutors cost several times more per hour and their advantage is accent and idiom, which are the last things a beginner needs and the first things marketing sells. An Indian teacher has a real advantage early on: they know exactly which errors a Bengali, Hindi or Tamil first language produces, and they can explain in your language when a concept is not landing. Consider a native tutor once you are already fluent and specifically want to sound different.",
      },
      {
        q: "Do I need a certificate from an English course?",
        a: "This room trains speaking and communication — meetings, interviews, everyday English. Most Indian workplaces hear you talk; they do not ask for a spoken-English certificate. When a visa, university or HR form needs a recognised exam, that is IELTS or similar — sit it with the test board. We do not sell IELTS coaching. Until then, this class is for the voice.",
      },
      {
        q: "Which online English class is best for a complete beginner?",
        a: "A structured live course with a small batch, not an app and not a 1:1 conversation platform. A complete beginner cannot practise conversation yet, because there is nothing to practise with — they need grammar, vocabulary and pronunciation built in order, in a room where being wrong costs nothing. Conversation platforms suit people who can already speak but freeze. Choosing the wrong one of those two is the most common expensive mistake we see.",
      },
      {
        q: "Which online English classes are best for children in India?",
        a: "Learn With Smile currently runs adult rooms for learners 15+. For children, look at a dedicated kids platform (typically 1:1). Do not put a child in an adult Spoken English batch.",
      },
    ],
  },

  "/workplace-english-course-online-india": {
    path: "/workplace-english-course-online-india",
    title: "Workplace English Online | ₹1,999/mo, 7 Years",
    description:
      "A practical guide to English for meetings, client calls, updates, emails and presentations — plus who needs a course and who should practise independently.",
    shortTitle: "Workplace English Course Guide",
    keywords: [
      "workplace english course online india",
      "english communication for working professionals",
      "professional english speaking course online india",
      "business english course online india",
      "english for office meetings and client calls",
      "english for bpo and customer support",
      "office english speaking course india",
    ],
    ogImage: "/og/business-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "A practical buyer and self-study guide to workplace English in India: meetings, client calls, status updates, emails and presentations; who needs live training; and how the Learn With Smile course with approximately 6 learners per batch works.",
    faqs: [
      {
        q: "What is Workplace English?",
        a: "Workplace English is the spoken and written English used to complete real work: giving updates, joining meetings, asking for clarification, speaking with clients, writing concise messages and presenting an idea. It is sometimes marketed as Business English, but it is useful well beyond managers and corporate offices — including freshers, IT and BPO employees, customer support teams, sales staff and freelancers.",
      },
      {
        q: "Who should join a Workplace English course?",
        a: "Join if you can already hold a basic English conversation but become unclear or silent in meetings, calls, updates or professional writing. If you cannot yet form everyday sentences, start with Basic Spoken English. If you speak comfortably at work and only need vocabulary, use free reading and practice resources instead of buying a course.",
      },
      {
        q: "How much does Learn With Smile Workplace English cost?",
        a: "The course costs ₹1,999 per month inclusive of taxes. It runs for three months with up to two live class days per week in a batch of approximately 6 learners. There is no registration or material fee. Chat on WhatsApp.",
      },
      {
        q: "Does the course include scheduled 1:1 feedback?",
        a: "No. Feedback and correction happen during the live classes. Outside class, direct contact with the teacher is assured when a learner genuinely needs help, but there is currently no scheduled recurring 1:1 feedback session.",
      },
      {
        q: "Will Workplace English guarantee a promotion or salary increase?",
        a: "No ethical course can guarantee that. Clearer communication can remove one barrier at work, but promotion and salary decisions also depend on role, technical performance, experience, company conditions and available opportunities. The course practises communication situations; it does not promise a job outcome.",
      },
    ],
  },

  "/how-long-to-learn-spoken-english": {
    path: "/how-long-to-learn-spoken-english",
    title: "How Long to Learn Spoken English | 6 Months",
    description:
      "Everyday English from zero: ~6 months live. Workplace 3 months. Exam English 9–12 months if a form asks. 30-day fluency is marketing. ₹999/mo, approx. 6 learners. Inclusive of taxes.",
    shortTitle: "How Long to Learn Spoken English",
    keywords: [
      "how long to learn spoken english from zero",
      "how many months to speak english fluently india",
      "learn english in 6 months india",
      "can i learn english in 30 days",
      "spoken english course duration india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Time-to-fluency guide. Everyday conversation ~6 months from zero with live classes; workplace ~3 months. Speaking minutes matter more than calendar months. ₹999/mo, batch of around 6.",
    faqs: [
      {
        q: "How long does it take to learn spoken English from zero in India?",
        a: "About 6 months of live practice — up to 2 classes a week plus 10–15 minutes a day — to reach everyday conversation: introducing yourself, shops, phone calls, two minutes on a topic. That assumes you actually speak in class. In a 25–40 student room the same calendar can deliver a tenth of the speaking minutes. Professional and exam English (meetings, IELTS Band 7+) usually needs 9–12 months from zero.",
      },
      {
        q: "Can I become fluent in English in 30 days?",
        a: "No, not from zero. In 30 days a hesitant intermediate can reduce freezing if they already have the language. A beginner still needs sounds, 1,000+ words and tense patterns. Anyone advertising fluency in 30 days is selling a course, not a result. Learn With Smile’s Spoken English is a 6-month syllabus at ₹999/month, inclusive of taxes, batch of around 6.",
      },
      {
        q: "How long is the Learn With Smile Spoken English course?",
        a: "6 months, up to 2 live classes per week, approximately 6 learners, ₹999 per month inclusive of taxes. Interactive Speaking is 3 months at ₹1,499/month. Workplace English is 3 months at ₹1,999/month. Career Counselling is ₹1,999 total for three 1:1 sessions.",
      },
    ],
  },

  "/english-institute-comparison-india": {
    path: "/english-institute-comparison-india",
    title: "Compare English Classes India | ₹999 vs EngVarta & BC",
    description:
      "From ₹999/mo vs EngVarta 1:1, British Council modules and Veta rooms. Named teacher, ~6 learners, 500+, 7 years. Free consultation diagnoses the gap.",
    shortTitle: "English Institutes in India, Compared",
    keywords: [
      "best spoken english institute in india 2026",
      "cambly vs engvarta vs british council",
      "veta spoken english fees",
      "eec spoken english kolkata",
      "best english class for working professionals india",
      "free english consultation vs demo class",
      "learn with smile vs engvarta vs british council",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Named 2026 comparison: Learn With Smile from ₹999/month (approx. 6 learners, 500+, 7 years) vs EngVarta (₹2,700 / 25 calls), Cambly (₹8k–₹15k/mo if daily), British Council modules (₹8,800–₹16,000), Veta-style classrooms (₹3,500–₹10,000 / 2–4 months). Written by one of the providers.",
    faqs: [
      {
        q: "Which spoken English institute is best in India in 2026?",
        a: "There is no single best. EngVarta-style 1:1 (about ₹2,700 for 25 × 15-minute calls) fits hesitant people who already speak. Cambly (~₹8,000–₹15,000/month if daily) fits fluent learners who want native chat. British Council modules (often ₹8,800–₹16,000) fit people who need a recognised syllabus or certificate. Veta-style classrooms (₹3,500–₹10,000 for 2–4 months) fit people who want a neighbourhood room. Learn With Smile adult Spoken fits learners 15+ who want a 6-month syllabus, a named teacher and approximately 6 learners per batch, from ₹999/month inclusive of taxes. We do not run kids or teen rooms — this comparison is about the adult room.",
      },
      {
        q: "How does Learn With Smile compare to EngVarta?",
        a: "EngVarta wins on talking minutes per day — 15-minute 1:1 calls, about ₹108 each in the 25-call pack. Learn With Smile wins on a 6-month map and a teacher who sees you every week in a batch of around 6, from ₹999/month. If you already speak and freeze, the app is the daily habit. If you cannot yet form a sentence, 1:1 has nothing to practise with — start with Spoken English.",
      },
      {
        q: "Is British Council worth it versus a ₹999/month class?",
        a: "A brand-name CEFR module buys that classroom and syllabus — often ₹8,800–₹16,000 for six classes. IELTS is a different paper: visas and universities read that score. We do not sell IELTS coaching. Speaking for work and interviews starts at ₹999/month. Sit the exam with the test board when a form asks — not as a default.",
      },
      {
        q: "Is Veta or a Kolkata classroom better than an online batch of 6?",
        a: "A neighbourhood room wins if you need peer energy and a walk-in campus. Google reviews on those rooms often praise the teacher and then complain that 25–40 people means you speak once a week. Learn With Smile is live online, approximately 6 learners, same ₹999/month in Kolkata, Mumbai or Kochi. Our Kolkata address is an office, not a campus.",
      },
      {
        q: "Is EngVarta better than a live English batch?",
        a: "For daily speaking minutes, yes — a 15-minute 1:1 beats 8–10 minutes in a group. For a beginner who cannot form a sentence, no: 1:1 apps have no 6-month map, so you practise what you can already say. The combination that works for many intermediates is an app for daily reps plus a live batch of around 6 for structure.",
      },
    ],
  },

  "/spoken-business-or-interactive-english": {
    path: "/spoken-business-or-interactive-english",
    title: "Which English Class | Spoken vs Business",
    description:
      "Conversation → Spoken. Freeze → Interactive. Meetings → Business. We diagnose the gap in a free consultation. From ₹999/mo, ≈6 learners.",
    shortTitle: "Which English class",
    keywords: [
      "spoken vs business vs interactive english",
      "which english class do i need india",
      "spoken english or business english course",
      "interactive speaking vs spoken english",
      "english course picker india",
      "which english course consultation",
      "help choose spoken english course india",
      "spoken english counselling vs demo class",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.85,
    changefreq: "monthly",
    summary:
      "Picker: Spoken English if you cannot hold a conversation (6 months, ₹999/mo). Interactive if you know the words and freeze (3 months, ₹1,499/mo). Workplace English if meetings and calls are the gap (3 months, ₹1,999/mo). Free consultation diagnoses the bottleneck live. Exam course only if a form asks.",
    dateModified: "2026-09-21",
    faqs: [
      {
        q: "Which English class do I need — spoken, business or interactive?",
        a: "If you cannot hold a conversation yet, start with Spoken English — 6 months, ₹999/month, approx. 6 learners. If you know the words and still freeze, take Interactive Speaking — 3 months, ₹1,499/month. If chat is fine and meetings, calls or emails are not, take Workplace English — 3 months, ₹1,999/month. Sit an exam course only when a form, university or visa asks for the exam. Unsure? Get a free consultation — we name the bottleneck and place you in one room.",
      },
      {
        q: "Should I take IELTS first to get a better job in India?",
        a: "Most Indian interviews hear you speak. Start with spoken, interactive or business English. Sit IELTS when a form, a university or a country asks for the band. The exam is a paper. The job conversation is a room.",
      },
      {
        q: "Can I take Spoken English and Workplace English together?",
        a: "Usually no — they train different bottlenecks. Finish the room you need first. We place you in one class, not three. Message anytime; we reply 09:00–12:00 IST.",
      },
      {
        q: "Can you choose the course for me in the free consultation?",
        a: "Yes. That is the session. You describe the problem — shop, freeze, standup, HR, career, visa form. We name the bottleneck and recommend one course with fee, duration and IST slot in writing, or we tell you the right buy is not us. It is counselling, not a class. Apps like EngVarta skip this step; exam shops use it to sell IELTS.",
      },
    ],
  },

  "/interactive-english-class-hesitation": {
    path: "/interactive-english-class-hesitation",
    title: "Stop Freezing | Interactive English Class",
    description:
      "You know the words. You freeze. Games, debates, 1-minute prompts — you talk every hour. 3 months, ₹1,499/mo, approx. 6 learners. Kolkata & pan-India. Live.",
    shortTitle: "Interactive English when you freeze",
    keywords: [
      "how to stop hesitating while speaking english",
      "english speaking practice online india",
      "interactive english class for hesitation",
      "english fluency practice group online",
      "english speaking club online india",
    ],
    ogImage: "/og/interactive-speaking.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Freeze is a habit, not a vocabulary hole. Interactive Speaking is 3 months, ₹1,499/month, approx. 6 learners: games, debates, 1-minute prompts so you talk every hour. Spoken English first if you still cannot form a sentence.",
    faqs: [
      {
        q: "I know English but freeze when I speak. Which class should I take?",
        a: "Interactive Speaking. You already have the words; the checking step between thinking and speaking is the freeze. The class is games, debates, role-plays and 1-minute prompts in a batch of around 6, 3 months, ₹1,499/month inclusive of taxes. Ananya’s standup story is this problem. If you cannot yet form a sentence, start with Spoken English instead.",
      },
      {
        q: "Is an interactive English class just games, or will I actually speak?",
        a: "You speak every block. Warm-up, a timed prompt, a story or role-play, a debate, then one sentence to reuse tomorrow. The games exist so the mouth moves before the inspection starts. Count how many times you are on the mic.",
      },
      {
        q: "Should a complete beginner take Interactive Speaking?",
        a: "No. Interactive assumes there is language to retrieve. A beginner still needs sounds, sentences and 1,000+ words — that is Spoken English, 6 months, ₹999/month. Interactive is the next room after the words exist.",
      },
    ],
  },

  "/english-hindi-bengali-medium": {
    path: "/english-hindi-bengali-medium",
    title: "Hindi & Bengali Medium English Classes",
    description:
      "Hindi-medium or Bengali-medium is not a wall. Live batch of around 6. Explain in your language, then English. 6 months from ₹999/mo. Kolkata & pan-India.",
    shortTitle: "Hindi & Bengali medium",
    keywords: [
      "spoken english for hindi medium students",
      "spoken english for bengali medium students",
      "english class with hindi support india",
      "learn spoken english from hindi medium",
      "kolkata bengali medium spoken english",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Hindi-medium and Bengali-medium schooling is not a wall. Spoken English is 6 months from ₹999/month in a live batch of around 6. When a concept stalls, the teacher explains in Hindi or Bengali, then you go back to English.",
    faqs: [
      {
        q: "Can Hindi-medium or Bengali-medium students learn spoken English?",
        a: "Yes. School medium decided how much English you heard between 6 and 16. It did not decide whether you can run a standup at 28. Most Learn With Smile learners started in Hindi or Bengali medium. Spoken English is 6 months, ₹999/month, approx. 6 learners. Everyday conversation — introduce yourself, a phone call, two minutes on a topic — is the 6-month finish line from zero.",
      },
      {
        q: "Do you teach in Hindi and Bengali, or only in English?",
        a: "The class is English. When a concept does not land, the teacher explains in Hindi or Bengali, then you go back to English. An English-only room for a genuine beginner produces silence. Silence is the one thing a speaking class cannot afford.",
      },
      {
        q: "How long does spoken English take if I studied in Hindi or Bengali medium?",
        a: "About 6 months live from zero, up to 2 classes a week plus 10–15 minutes a day. Workplace English is typically a further 3 months if meetings are the next job. 30-day fluency from zero is marketing.",
      },
    ],
  },

  "/english-for-working-professionals-india": {
    path: "/english-for-working-professionals-india",
    title: "English for Working Professionals India",
    description:
      "Keep the job. Speak better English. Morning, evening, weekend IST. Live class; recording is revision. From ₹999/mo, approx. 6 learners. Kolkata & pan-India.",
    shortTitle: "Working professionals",
    keywords: [
      "english classes for working professionals india",
      "evening spoken english classes india",
      "weekend english class for job holders",
      "english course around full time job",
      "morning english class ist",
    ],
    ogImage: "/og/business-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Working professionals keep the job and still speak. Morning, evening and weekend IST live batches. Recording is revision if a shift overruns. Spoken from ₹999/month, Interactive ₹1,499, Workplace ₹1,999. Approx. 6 learners. Replies 09:00–12:00 IST.",
    faqs: [
      {
        q: "Can I learn English while working a full-time job in India?",
        a: "Yes. Learn With Smile runs morning, evening and weekend live batches on IST. The class is live; the recording is revision if a release or a shift overruns. Spoken English from ₹999/month, Interactive ₹1,499/month, Workplace English ₹1,999/month. Approx. 6 learners. Aditya did Workplace English while in a back-office role and moved to BI Analyst. Vikram cleared a bank promotion board in Delhi.",
      },
      {
        q: "What if I miss a live English class because of a work shift?",
        a: "Every class is recorded so a missed session does not wipe the week. A reschedule can be requested only within the same week, and only if the teacher and a seat exist. That is the honest limit.",
      },
      {
        q: "When do you reply on WhatsApp if I message after office?",
        a: "Message anytime. We reply 09:00–12:00 IST. Phone is a fallback.",
      },
    ],
  },

  "/english-for-client-calls-india": {
    path: "/english-for-client-calls-india",
    title: "Client-Call English | Names & Next Step",
    description:
      "Client-call English is clarity, not accent: names, numbers, next step. Workplace English, 3 months, ₹1,999/mo, approx. 6 learners. Kolkata & pan-India. Inclusive of taxes.",
    shortTitle: "Client-call English",
    keywords: [
      "english for client calls india",
      "english for bpo customer support",
      "how to speak on client calls in english",
      "workplace english for client meetings",
      "english for customer support india",
    ],
    ogImage: "/og/business-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Client-call English is names, numbers and the next step — not a fake accent. Workplace English practises that live, 3 months, ₹1,999/month, approx. 6 learners. Neha now takes the Mumbai client call herself.",
    faqs: [
      {
        q: "How do I speak English on client calls without freezing?",
        a: "Use a four-line update: where we are, what changed, what you will do next, what you need from them. If you do not have the answer, give a time: “I’ll confirm by 4pm IST and message you.” Workplace English drills this live — 3 months, ₹1,999/month, approx. 6 learners. If you freeze before the call starts, add Interactive Speaking.",
      },
      {
        q: "Do I need a native accent for Indian client calls?",
        a: "No. The customer wants to feel understood, to understand the next step, and to trust you will not vanish. Structure beats accent. Say numbers twice (“fifteen, one-five”). Ask a name once, repeat it once, write it.",
      },
      {
        q: "Is Spoken English enough for client-facing work?",
        a: "If you cannot yet hold a simple conversation, start with Spoken English for 6 months. Client-call drills on a sentence you cannot build yet will only deepen the freeze. If chat is already fine, Workplace English is the room.",
      },
    ],
  },

  "/english-for-presentations-india": {
    path: "/english-for-presentations-india",
    title: "English for Presentations | 3 Minutes",
    description:
      "Explain your work in 3 minutes: one outcome, three beats, one ask. Live practice. Workplace or Interactive. From ₹1,499/mo, approx. 6 learners.",
    shortTitle: "Presentation English",
    keywords: [
      "english for presentations india",
      "how to explain your work in english",
      "english for standups and status updates",
      "presentation skills in english for professionals",
      "tell me about a project in english",
    ],
    ogImage: "/og/business-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Explaining your work in English is three beats: one outcome, three points, one ask. Workplace English and Interactive Speaking both drill this live. Ananya now speaks the dashboard in Monday standups.",
    faqs: [
      {
        q: "How do I explain my work in English in 3 minutes?",
        a: "Write five lines before you open the deck: one outcome, three beats, one ask. The slides are pictures of those lines. If you start with 18 slides, you will read them. Reading is not presenting. Rohan now walks working papers in English with partners in Mumbai.",
      },
      {
        q: "Is standup English the same as a client presentation?",
        a: "Same spine, shorter clock. A standup is 60–90 seconds: yesterday, today, stuck. A client deck is 3–5 minutes: outcome, three beats, ask. Ananya now runs standups. Neha’s lane is the client call. Interview “tell me about a project” uses the same muscle.",
      },
      {
        q: "Which English course helps with presentations at work?",
        a: "If you can already chat and the deck is the problem — Workplace English, 3 months, ₹1,999/month. If you freeze before slide one — Interactive, 3 months, ₹1,499/month. If daily English is still the gap — Spoken, 6 months, ₹999/month, then come back to decks.",
      },
    ],
  },
  ...EXTRA_PAGES,
};

/* --------------------------------------------------------------------------
 * Course pages — SEO copy that the course data files do not carry
 * ------------------------------------------------------------------------ */

export type CourseSeoExtra = {
  /**
   * <title> and meta description for the course page, ≤58 and 150–158 chars.
   *
   * Written by hand rather than assembled from the course record: a generated
   * `${title} Online — ${price}, Approx. 6 learners Per Batch | Learn With Smile` ran to
   * 70–87 characters and truncated in the SERP on every one of the six.
   */
  title: string;
  description: string;
  /** Breadcrumb / llms.txt label. */
  shortTitle: string;
  keywords: string[];
  ogImage: string;
  summary: string;
  dateModified?: string;
  /** Appended to the course's own FAQs, targeted at AI-assistant question phrasing. */
  extraFaqs: Faq[];
};

export const COURSE_SEO: Record<string, CourseSeoExtra> = {
  "spoken-english": {
    title: "Spoken English Course | ₹999/mo, 6 Months",
    description:
      "Practical Spoken English for beginners: 6 months, up to 2 live classes weekly, ~6 learners. ₹999/month, inclusive of taxes. Kolkata teacher, pan-India.",
    shortTitle: "Basic Spoken English",
    keywords: [
      "spoken english classes online india",
      "basic spoken english course for beginners",
      "english speaking course 999 per month",
      "spoken english class for zero level students",
      "english speaking classes online with live teacher",
      "6 month spoken english course india",
      "spoken english classes kolkata online",
      "how to speak english fluently from zero",
    ],
    ogImage: "/og/spoken-english.jpg",
    summary:
      "Basic Spoken English — 6 months, up to 2 live classes a week, approximately 6 learners, ₹999/month, inclusive of taxes. Designed for absolute beginners who cannot yet form a full sentence.",
    extraFaqs: [
      {
        q: "What is the fee for a basic spoken English course in India?",
        a: "Learn With Smile charges ₹999 per month for Basic Spoken English — 6 months, up to 2 live classes per week, approximately 6 learners per batch, inclusive of taxes. Comparable live group courses in India generally run ₹800–₹3,000 per month; recorded-video courses are cheaper but give you no speaking practice, and 1:1 native-tutor platforms cost considerably more per hour.",
      },
      {
        q: "How long does it take to learn spoken English from zero?",
        a: "Around 6 months of consistent live practice to reach comfortable everyday conversation — introducing yourself, shopping, phone calls, travel, small talk and basic group discussion. That assumes up to 2 classes a week plus 10–15 minutes of daily practice. Reaching professional or exam-level fluency typically takes another 3–6 months on top.",
      },
      {
        q: "I feel embarrassed about my English. Will I be judged in class?",
        a: "The batch usually has around 6 learners and every person in it is at the same starting point — that is the entire design. There is no ranking, no public scoring and no one is put on the spot cold. Errors are corrected as they happen because that is how correction works, but it is done to the group as a pattern rather than aimed at a person.",
      },
    ],
  },
  "business-english": {
    title: "Workplace English Course | ₹1,999/mo",
    description:
      "Workplace English for professionals and job seekers: meetings, client calls, updates, emails and presentations. Live batch of approximately 6 learners, ₹1,999/month, inclusive of taxes.",
    shortTitle: "Workplace English",
    keywords: [
      "business english course online india",
      "english for working professionals india",
      "corporate english communication course",
      "professional email writing course english",
      "english for client meetings and presentations",
      "workplace english course india fees",
      "professional english speaking course online india",
      "english communication for working professionals",
      "english for bpo and customer support",
      "business english classes evening batch india",
    ],
    ogImage: "/og/business-english.jpg",
    summary:
      "Workplace English — ₹1,999/month · 3 months in a live batch of approximately 6 learners. Meetings, calls, updates, emails and presentations.",
    extraFaqs: [
      {
        q: "What is the difference between Spoken English and Workplace English?",
        a: "Spoken English builds the underlying ability to hold a conversation — grammar, vocabulary, pronunciation and confidence. Workplace English assumes you can already manage a basic conversation and practises the situations that affect your job: status updates, meetings, client calls, clarification, emails and presentations. If you cannot yet hold a five-minute conversation, start with Basic Spoken English first.",
      },
      {
        q: "Is there a Workplace English course that fits around a full-time job?",
        a: "Yes. Learn With Smile runs early-morning, evening and weekend batches on IST specifically for working professionals. The three-month course is ₹1,999/month; every class is recorded so a missed session because of a work escalation does not set you back.",
      },
    ],
  },
  "interactive-speaking": {
    title: "Interactive Speaking | ₹1,499/mo, 3 Months",
    description:
      "Live speaking — games, debates, role-plays. 3 months, up to 2 classes/week, ~6 learners. ₹1,499/month, inclusive of taxes. Fluency, not grammar lectures.",
    shortTitle: "Interactive Speaking",
    keywords: [
      "english speaking practice online india",
      "daily english conversation practice class",
      "english fluency practice group online",
      "english speaking club online india",
      "how to stop hesitating while speaking english",
      "english debate and storytelling class online",
    ],
    ogImage: "/og/interactive-speaking.jpg",
    summary:
      "Interactive Speaking — ₹1,499/month · 3 months in a live batch of approximately 6 learners. Games, debates, role-plays and storytelling.",
    extraFaqs: [
      {
        q: "How do I stop hesitating and freezing when I speak English?",
        a: "Hesitation is almost never a grammar problem — it is a retrieval-speed and confidence problem, and it responds to repetition under mild pressure. That means speaking often in a low-stakes group where being wrong costs nothing. Our Interactive Speaking course is built entirely around that: one-minute impromptu topics, word-association warm-ups, structured debates, role-plays and storytelling, up to twice a week for 3 months, in a batch of around six.",
      },
      {
        q: "Is this course useful if my grammar is already good?",
        a: "That is exactly who it is for. Many Indian learners read and write English well but freeze in conversation because they translate mentally before speaking. This course does no grammar teaching — it is 100% live speaking reps designed to move you from translating to thinking directly in English.",
      },
    ],
  },
  "career-counselling": {
    title: "1:1 Career Counselling | ₹1,999 Total, 3×60 min",
    description:
      "Three 60-min 1:1 sessions, ₹1,999 total, inclusive of taxes. Strengths map, 3 career paths, 6-month plan, plus resume and LinkedIn review. 1:1 online.",
    shortTitle: "Career Counselling",
    keywords: [
      "career counselling online india",
      "career guidance for students india",
      "career counselling fees india",
      "which career is right for me india",
      "career change guidance india",
      "stream and course selection counselling",
      "one to one career counselling online",
    ],
    ogImage: "/og/career-counselling.jpg",
    summary:
      "Career Counselling — 3 × 60-minute 1:1 online sessions, ₹1,999 total. Strengths mapping, three shortlisted career paths, a 6-month action plan, resume and LinkedIn review.",
    extraFaqs: [
      {
        q: "How much does career counselling cost in India?",
        a: "Learn With Smile charges ₹1,999 total for three 60-minute 1:1 online sessions plus a written 6-month action plan and a resume and LinkedIn review. Independent career counsellors in India typically charge ₹1,500–₹5,000 per session, and psychometric-test-led packages from larger firms run ₹5,000–₹15,000.",
      },
      {
        q: "Is career counselling only for school students?",
        a: "No. Roughly half of our sessions are with working adults in their 20s and 30s — people considering a switch out of BPO, IT support or a role they took by default, and people returning to work after a break. The process is the same: audit what you are actually good at, compare three realistic paths on salary and growth, and commit to a 6-month plan.",
      },
    ],
  }
};

/* --------------------------------------------------------------------------
 * JSON-LD builders
 * ------------------------------------------------------------------------ */

export function organizationLd() {
  const india = { "@type": "Country", name: "India", identifier: "IN" };
  return {
    "@context": "https://schema.org",
    // Classes are delivered online. Keep one canonical entity and describe
    // admissions availability on ContactPoint instead of presenting response
    // hours as physical storefront opening hours.
    "@type": ["EducationalOrganization", "OnlineBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: CONTACT.legalName,
    taxID: CONTACT.gstin,
    vatID: CONTACT.gstin,
    identifier: {
      "@type": "PropertyValue",
      name: "GSTIN",
      propertyID: "GSTIN",
      value: CONTACT.gstin,
      description: "Goods and Services Tax Identification Number, India",
    },
    alternateName: [
      "LWS",
      "Learn With Smile English & Career",
      "Learn With Smile English Communication",
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: abs("/apple-touch-icon.png"),
      width: 180,
      height: 180,
    },
    image: abs("/og/default.jpg"),
    description:
      "Live online English school in India. 500+ learners, 7 years, from ₹999/month, inclusive of taxes. Enrolment and published fees are for learners in India only. Spoken, Interactive, Workplace and 1:1 Career Counselling for adults 15+.",
    audience: [
      { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Adults 15+" },
    ],
    slogan: "Speak Better English. Master In-Demand Skills. Build Future Together.",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    priceRange: "₹999–₹1,999/month",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Visa, Mastercard, RuPay, Google Pay, PhonePe, Paytm",
    foundingDate: String(FOUNDING_YEAR),
    employee: {
      "@type": "Person",
      "@id": `${abs("/educator")}#person`,
      name: "Sunanda Dey",
      jobTitle: "Educator",
      url: abs("/educator"),
    },
    publishingPrinciples: abs("/terms"),
    ethicsPolicy: abs("/privacy"),
    privacyPolicy: abs("/privacy"),
    termsOfService: abs("/terms"),
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.locality,
      addressRegion: CONTACT.region,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.latitude,
      longitude: CONTACT.longitude,
    },
    areaServed: [
      india,
      ...COVERAGE_STATES.map((name) => ({ "@type": "AdministrativeArea", name })),
      ...COVERAGE_CITIES.map((name) => ({ "@type": "City", name })),
    ],
    knowsLanguage: ["en-IN", "hi-IN", "bn-IN"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions support via WhatsApp",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        url: CONTACT.whatsapp,
        description:
          "WhatsApp is the preferred admissions and consultation channel. Get Free Consultation is counselling, not a class. Phone is a fallback. Enrolment is for learners in India only.",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bengali"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "12:00",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Live online English courses in India",
      description: "Enrolment and fees are for learners in India only. Prices in INR, inclusive of taxes.",
      itemListElement: [
        {
          "@type": "Offer",
          name: CONSULTATION.cta,
          url: abs(CONSULTATION_PATH),
          price: 0,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          category: "Consultation",
          description: CONSULTATION.what,
          itemOffered: {
            "@type": "Service",
            "@id": `${abs(CONSULTATION_PATH)}#consultation`,
            name: CONSULTATION.cta,
            url: abs(CONSULTATION_PATH),
            serviceType: "Educational counselling",
            description: CONSULTATION.what,
          },
        },
        ...Object.keys(COURSE_SEO).map((slug) => ({
          "@type": "Offer",
          url: abs(`/course-${slug}`),
          itemOffered: {
            "@type": "Course",
            name: COURSE_SEO[slug].shortTitle,
            url: abs(`/course-${slug}`),
          },
          priceCurrency: "INR",
          valueAddedTaxIncluded: true,
          eligibleRegion: india,
          areaServed: india,
        })),
      ],
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Get Free Consultation",
      target: {
        "@type": "EntryPoint",
        urlTemplate: CONTACT.whatsapp,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      description:
        "WhatsApp counselling: diagnose the bottleneck, answer queries, recommend one course. Not a class.",
    },
    sameAs: [...SAME_AS],
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      name: "Consultation is free. Prepaid months are not routinely refunded.",
      applicableCountry: "IN",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      merchantReturnLink: abs("/refunds"),
      url: abs("/refunds"),
    },
  };
}

export function consultationServiceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(CONSULTATION_PATH)}#consultation`,
    name: CONSULTATION.cta,
    alternateName: [
      "Free counselling",
      "Free consulting",
      "Free English consultation",
      "Spoken English counselling",
    ],
    serviceType: "Educational counselling",
    category: "Educational counselling",
    description: CONSULTATION.what,
    url: abs(CONSULTATION_PATH),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Adults 15+",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: CONTACT.whatsapp,
      servicePhone: CONTACT.phone,
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "12:00",
      },
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "12:00",
    },
    offers: {
      "@type": "Offer",
      url: abs(CONSULTATION_PATH),
      price: 0,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      eligibleRegion: { "@type": "Country", name: "India" },
    },
    isRelatedTo: Object.keys(COURSE_SEO).map((slug) => ({
      "@type": "Course",
      name: COURSE_SEO[slug].shortTitle,
      url: abs(`/course-${slug}`),
    })),
  };
}

export function webSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    description:
      "Speak better English with a teacher who knows your name. 500+ learners, 7 years, from ₹999/month, inclusive of taxes. Kolkata & pan-India. Get a free consultation — counselling, not a class.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    dateModified: CONTENT_REVISED,
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Get Free Consultation",
      target: CONTACT.whatsapp,
    },
    hasPart: [
      { "@type": "WebPage", "@id": `${abs("/privacy")}#webpage`, url: abs("/privacy"), name: "Privacy Policy" },
      { "@type": "WebPage", "@id": `${abs("/terms")}#webpage`, url: abs("/terms"), name: "Terms of Use" },
      {
        "@type": "WebPage",
        "@id": `${abs("/refunds")}#webpage`,
        url: abs("/refunds"),
        name: "Refunds and Cancellation",
      },
      {
        "@type": "WebPage",
        "@id": `${abs("/child-protection")}#webpage`,
        url: abs("/child-protection"),
        name: "Child Protection Policy",
      },
    ],
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToLd(howTo: {
  name: string;
  description: string;
  steps: string[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    inLanguage: "en-IN",
    ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
    step: howTo.steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: text.split(". ")[0] || `Step ${i + 1}`,
      text,
    })),
  };
}

export function webPageLd(page: {
  path: string;
  title: string;
  description: string;
  dateModified?: string;
  ogImage?: string;
}) {
  const isEducatorProfile = page.path === "/educator";
  const isLegal =
    page.path === "/privacy" ||
    page.path === "/terms" ||
    page.path === "/refunds" ||
    page.path === "/child-protection";
  return {
    "@context": "https://schema.org",
    "@type": isEducatorProfile ? "ProfilePage" : "WebPage",
    "@id": `${abs(page.path)}#webpage`,
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    ...(page.ogImage
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: abs(page.ogImage),
            width: 1200,
            height: 630,
          },
        }
      : {}),
    ...(page.dateModified
      ? { dateModified: page.dateModified, datePublished: page.dateModified }
      : {}),
    ...(isLegal
      ? {
          relatedLink: ["/privacy", "/terms", "/refunds", "/child-protection"]
            .filter((p) => p !== page.path)
            .map((p) => abs(p)),
        }
      : {}),
    ...(isEducatorProfile ? { mainEntity: { "@id": `${abs("/educator")}#person` } } : {}),
    ...(page.path === CONSULTATION_PATH
      ? { mainEntity: { "@id": `${abs(CONSULTATION_PATH)}#consultation` } }
      : {}),
  };
}

/* --------------------------------------------------------------------------
 * TanStack `head()` builder
 * ------------------------------------------------------------------------ */

export type HeadResult = {
  meta: Array<Record<string, string>>;
  links: Array<Record<string, string>>;
  scripts: Array<{ type: string; children: string }>;
};

/**
 * Builds the full head payload for a page: title, description, robots
 * directives, canonical, Open Graph, Twitter, keywords and JSON-LD.
 *
 * Keywords are emitted for SEM / Bing / AI crawlers. Visible copy still
 * says "Get Free Consultation"; the keyword list also carries "free demo
 * class" so those searches keep matching. India-market terms (fees, GST,
 * Hindi/Bengali medium, IST, cities) and counselling/consulting spellings
 * are merged onto every page.
 */
export function buildHead(opts: {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  ogType?: string;
  jsonLd?: unknown[];
  keywords?: string[];
}): HeadResult {
  const url = abs(opts.path);
  const image = abs(opts.ogImage);
  const keywords = uniqueKeywords(
    opts.keywords,
    INDIA_MARKET_KEYWORDS,
    BRAND_KEYWORDS,
    CONSULTATION_KEYWORDS,
  );

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "keywords", content: keywords.join(", ") },
      // max-*-preview:-1 lets Google (and, in practice, AI summarisers) use the
      // whole page rather than a truncated snippet.
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "theme-color", content: "#0E7C5A" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.ogType ?? "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: SITE_LOCALE },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: opts.title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en-IN", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
      // The Markdown mirror of this page. `rel` stays first: the prerender step
      // matches on `<link rel="(canonical|alternate)"` to mark the tags the
      // client re-renders (scripts/prerender.mjs → tagPrerendered).
      { rel: "alternate", type: "text/markdown", href: abs(markdownPathFor(opts.path)) },
    ],
    scripts: (opts.jsonLd ?? []).map((obj) => ({
      type: "application/ld+json",
      children: JSON.stringify(obj),
    })),
  };
}

/**
 * Site-wide head, rendered once from the root route.
 *
 * Deliberately carries NO title, description, canonical, og:url or page-level
 * JSON-LD. The root route renders on every page, so anything page-specific put
 * here leaks everywhere: a homepage canonical on /course-spoken-english makes Google
 * drop the page, and a homepage FAQPage there is a structured-data violation
 * because the answers are not on the rendered page.
 */
export function siteHead(): HeadResult {
  return {
    meta: [
      // Search Console and Bing Webmaster ownership. Sitewide rather than
      // homepage-only so verification survives whichever URL either tool is
      // pointed at. Emits nothing until the codes are filled in —
      // see src/lib/analytics.ts.
      ...verificationMeta(),
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "theme-color", content: "#0E7C5A" },
    ],
    // Site-wide discovery for AI assistants (llmstxt.org v2):
    //   describedby → the llms.txt that covers this page
    //   alternate   → structured JSON for Custom GPTs / tool-using agents
    // `rel` stays first so scripts/prerender.mjs can mark these tags as
    // already-prerendered (`tagPrerendered` matches on rel=).
    links: [
      { rel: "describedby", type: "text/plain", title: "llms.txt", href: abs("/llms.txt") },
      {
        rel: "alternate",
        type: "application/json",
        title: "llms.json",
        href: abs("/llms.json"),
      },
    ],
    // Entity graph for the whole site — correct on every page, and what lets
    // Google and AI assistants resolve "Learn With Smile" to a real business.
    scripts: [organizationLd(), webSiteLd()].map((obj) => ({
      type: "application/ld+json",
      children: JSON.stringify(obj),
    })),
  };
}

/** Head payload for one of the static (non-course) pages in `PAGES`. */
export function pageHead(path: string): HeadResult {
  const page = PAGES[path];
  if (!page) {
    throw new Error(`No SEO entry for path "${path}" — add it to PAGES in src/lib/seo.ts`);
  }

  const jsonLd: unknown[] = [webPageLd({ ...page, dateModified: page.dateModified ?? CONTENT_REVISED })];

  if (path !== "/") {
    jsonLd.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        ...(page.breadcrumb ?? [{ name: page.shortTitle, path: page.path }]),
      ]),
    );
  }

  if (page.faqs?.length) jsonLd.push(faqLd(page.faqs));
  if (page.howTo) jsonLd.push(howToLd(page.howTo));
  if (path === CONSULTATION_PATH) jsonLd.push(consultationServiceLd());

  const head = buildHead({
    path: page.path,
    title: page.title,
    description: page.description,
    ogImage: page.ogImage,
    jsonLd,
    keywords: page.keywords,
  });
  if (page.dateModified ?? CONTENT_REVISED) {
    head.meta.push(
      { name: "revised", content: page.dateModified ?? CONTENT_REVISED },
      { property: "og:updated_time", content: page.dateModified ?? CONTENT_REVISED },
    );
  }
  return head;
}

/* --------------------------------------------------------------------------
 * Blog articles
 * ------------------------------------------------------------------------ */

/** Site-relative path of an article. */
export function blogPath(post: BlogPost): string {
  return `/blog/${post.slug}`;
}

/**
 * Head payload for one article: `BlogPosting` + `BreadcrumbList` on top of the
 * usual page metadata.
 *
 * The `author` deliberately points at the Person entity already emitted on
 * `/educator` rather than repeating a bare name string. That link — article to
 * a real, described author with their own URL — is the strongest E-E-A-T
 * signal available here, and half of it was already built.
 */
export function blogPostHead(post: BlogPost): HeadResult {
  const path = blogPath(post);
  const url = abs(path);
  const image = abs("/og/blog.jpg");

  const jsonLd: unknown[] = [
    webPageLd({
      path,
      title: post.seoTitle,
      description: post.description,
      dateModified: post.dateModified,
      ogImage: "/og/blog.jpg",
    }),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      inLanguage: "en-IN",
      wordCount: post.wordCount,
      timeRequired: `PT${post.readingTime}M`,
      articleSection: post.tag,
      image: [image],
      author: {
        "@type": "Person",
        "@id": `${abs("/educator")}#person`,
        name: post.author,
        url: abs("/educator"),
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${abs("/blog")}#blog` },
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
  ];
  if (post.faqs?.length) jsonLd.push(faqLd(post.faqs));
  if (post.howTo) jsonLd.push(howToLd(post.howTo));

  const head = buildHead({
    path,
    title: post.seoTitle,
    description: post.description,
    ogImage: "/og/blog.jpg",
    ogType: "article",
    jsonLd,
    keywords: post.keywords,
  });

  head.meta.push(
    { name: "author", content: post.author },
    { property: "article:published_time", content: post.datePublished },
    { property: "article:modified_time", content: post.dateModified },
    { property: "article:author", content: post.author },
    { property: "article:section", content: post.tag },
  );

  return head;
}

/** Every indexable path on the site, in sitemap order. */
export const ALL_PATHS: string[] = [
  ...Object.keys(PAGES),
  ...Object.keys(COURSE_SEO).map((slug) => `/course-${slug}`),
  ...BLOG_POSTS.map(blogPath),
];

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq: PageSeo["changefreq"];
  priority: number;
  image: { loc: string; title: string };
};

/**
 * One sitemap row per public URL. `lastmod` is only set when we have a real
 * content revision date — never the build date — so Google is not told that
 * every page changed on every deploy.
 *
 * Image URLs are files that actually exist under `public/og/`. Blog articles
 * share `/og/blog.jpg`; per-slug OG files are not generated.
 */
export function sitemapUrls(): SitemapUrl[] {
  return ALL_PATHS.map((path) => {
    const loc = path === "/" ? `${SITE_URL}/` : abs(path);
    const page = PAGES[path];
    if (page) {
      return {
        loc,
        lastmod: page.dateModified ?? CONTENT_REVISED,
        changefreq: page.changefreq,
        priority: page.priority,
        image: { loc: abs(page.ogImage), title: page.shortTitle },
      };
    }
    if (path.startsWith("/blog/")) {
      const post = BLOG_POSTS.find((p) => p.slug === path.slice("/blog/".length));
      return {
        loc,
        lastmod: post?.dateModified,
        changefreq: "yearly" as const,
        priority: 0.6,
        image: { loc: abs("/og/blog.jpg"), title: post?.title ?? "Blog" },
      };
    }
    const extra = COURSE_SEO[path.replace(/^\/course-/, "")];
    return {
      loc,
      lastmod: extra?.dateModified ?? CONTENT_REVISED,
      changefreq: "monthly" as const,
      priority: 0.8,
      image: {
        loc: abs(extra?.ogImage ?? "/og/default.jpg"),
        title: extra?.shortTitle ?? "Course",
      },
    };
  });
}
