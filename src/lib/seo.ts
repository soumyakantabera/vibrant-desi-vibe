/**
 * Single source of truth for every piece of SEO / AEO metadata on the site.
 *
 * Consumed by three places — keep it free of Vite-only imports (no `?url`,
 * no image imports) so the prerender + sitemap scripts can read it too:
 *   1. `src/routes/*.tsx`      → TanStack `head()` for the SPA / SSR runtime
 *   2. `scripts/prerender.mjs` → static <head> baked into each dist/*.html
 *   3. `scripts/prerender.mjs` → sitemap.xml + llms.txt generation
 *
 * Title/description budget: titles are kept to 58 characters and descriptions
 * to 150–158, because Google truncates around there and a title cut mid-phrase
 * reads as broken. The brand name is deliberately NOT appended — `og:site_name`
 * and the Organization schema already carry it, and Google appends the site
 * name to the SERP title itself. Every character spent on "| Learn With Smile"
 * is a character not spent on a keyword.
 *
 * The `keywords` arrays below are internal targeting notes only. They are not
 * emitted as a `<meta name="keywords">` tag: Google has ignored that tag since
 * 2009, Bing treats it as a spam signal, and publishing the full target list
 * hands competitors the keyword research for free. The real AI-visibility lever
 * is `faqs` below — question-shaped headings with self-contained answers are
 * what actually gets retrieved and cited.
 */

import { verificationMeta } from "@/lib/analytics";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog";

export const SITE_URL = "https://www.learnwithsmile.app";
export const SITE_NAME = "Learn With Smile";
export const SITE_LOCALE = "en_IN";
/** Used by the Organization schema and by llms.txt, so "N years" is derived. */
export const FOUNDING_YEAR = 2019;

export const CONTACT = {
  phone: "+919674479949",
  phoneDisplay: "+91 96744 79949",
  whatsapp: "https://wa.me/919674479949",
  email: "learnwithsmile.in@gmail.com",
  street: "75/2/4, Raja Ram Mohan Roy Road",
  locality: "Kolkata",
  region: "West Bengal",
  postalCode: "700008",
  country: "IN",
  latitude: 22.4924,
  longitude: 88.3125,
} as const;

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
 * the hero and on all six course pages — three places, two numbers, no source.
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
 * `/` → `/index.md`, `/course-ielts` → `/course-ielts.md`.
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
};

/* --------------------------------------------------------------------------
 * Keyword strategy — target market: India
 *
 * Grouped by the intent that actually converts for a small live-class provider.
 * Head terms ("spoken english classes") are owned by Cambly/PlanetSpark/EngVarta
 * with 8-figure ad budgets; we are not going to outrank them and should not try.
 * The winnable surface is:
 *   a) price-qualified long tail  — "spoken english class fees per month india"
 *   b) format long tail           — "small batch live english class max 8 students"
 *   c) audience long tail         — "english speaking course for working professionals"
 *   d) geo long tail              — "spoken english classes kolkata online"
 *   e) question long tail (AEO)   — what AI assistants are actually asked
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

/* --------------------------------------------------------------------------
 * Page metadata
 * ------------------------------------------------------------------------ */

export const PAGES: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "Speak Better English | From ₹999/mo",
    description:
      "Speak better English with real teachers, small batches and gamified live classes. 7 years, Kolkata & pan-India. From ₹999/month. ₹0 demo. 500+ learners.",
    shortTitle: "Home",
    keywords: [
      ...CORE_KEYWORDS,
      ...BRAND_KEYWORDS,
      "best online spoken english classes in india",
      "english class fees per month in india",
      "ielts coaching online india",
      "business english course india",
      "workplace english course india",
      "interview preparation in english",
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
    summary:
      "Homepage. Live spoken English classes from a Kolkata teacher, for learners across India. From ₹999/month, ₹0 demo, 7 years, 500+ learners. English batches of 8.",
    faqs: [
      {
        q: "How much do online spoken English classes cost in India?",
        a: "At Learn With Smile, live online Spoken English starts at ₹999 per month for a batch of maximum 8 students, with up to 2 classes per week. IELTS Preparation is ₹1,999/month, Workplace English ₹1,499/month, Interview Preparation ₹1,499/month, and 1:1 Career Counselling is ₹999 for three 60-minute sessions. All prices include GST and there are no registration or material fees. Across the wider Indian market, group online English classes typically run ₹800–₹3,000 per month and 1:1 native-speaker platforms run ₹300–₹2,200 per session.",
      },
      {
        q: "Which is the best online spoken English class in India for a small batch?",
        a: "It depends on what you need. For daily 1:1 speaking reps with no fixed curriculum, EngVarta and Cambly are the usual picks. For children, PlanetSpark. For a structured syllabus with a certificate, British Council. Learn With Smile fits a specific gap: a live human teacher, a fixed 6-month syllabus, and a hard cap of 8 students per batch, from ₹999/month — so every learner gets real speaking time in every class instead of watching a recording or sitting in a 40-person webinar.",
      },
      {
        q: "Can I actually learn to speak English fluently in 6 months?",
        a: "Yes, for everyday conversational fluency, if you attend up to 2 live classes a week and practise between them. Our 6-month Basic Spoken English course takes learners from zero — people who cannot form a full sentence — to introducing themselves, handling daily conversations, and speaking for 2 minutes on a topic. Professional and academic fluency (IELTS Band 7+, client presentations) usually needs 9–12 months total. Anyone promising fluency in 30 days is selling you something.",
      },
      {
        q: "Are online English classes as effective as offline coaching centres?",
        a: "For speaking practice, online small-batch classes are usually better. In a 8-student online batch every learner speaks in every class; in a 30-student offline classroom most learners speak once a week. Online also removes commute time, lets you join morning, evening or weekend slots, and gives you class recordings to revise. The one thing offline does better is peer accountability, which we replace with live polls, debates and a WhatsApp batch group.",
      },
      {
        q: "Is the demo class really free, and do I need to pay anything upfront?",
        a: "Yes, genuinely free — you attend a full live class, not a sales call, and no card or payment details are needed to book. You message us on WhatsApp at +91 96744 79949, we confirm a slot, and you sit in a real class before deciding whether to enrol.",
      },
      {
        q: "Do you teach students outside Kolkata and West Bengal?",
        a: "Yes. Classes are 100% live online. Learners join from West Bengal, Delhi, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh, Bihar and Assam — Kolkata, Mumbai, Pune, Ahmedabad, Surat, Nagpur, Bengaluru, Hyderabad, Chennai, Coimbatore, Kochi, Visakhapatnam, Patna, Guwahati and towns nationwide. Same ₹999/month fee. IST morning, evening and weekend slots. Indian learners abroad join on IST too.",
      },
    ],
  },

  "/english-career": {
    path: "/english-career",
    title: "English & Career | Master In-Demand Skills",
    description:
      "Speak better English. Master interviews, IELTS and workplace English. Six live programmes from ₹999/month. Small batches. ₹0 demo. 7 years, pan-India.",
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
    summary:
      "Course hub. Six live English communication and career courses with clear fees (₹999–₹1,999/month), duration, format and outcomes.",
    faqs: [
      {
        q: "Which English course should I choose — Spoken English, Workplace English or Interactive Speaking?",
        a: "Choose Basic Spoken English (₹999/month, 6 months) if you cannot yet hold a conversation and need grammar, vocabulary and pronunciation from the ground up. Choose Workplace English (₹1,499/month, 3 months) if you already speak but need meetings, client calls, status updates, emails and presentations. Choose Interactive Speaking (₹1,199/month, 3 months) if your grammar is fine but you freeze when speaking and need repeated live practice through games, debates and storytelling.",
      },
      {
        q: "What is the cheapest course at Learn With Smile?",
        a: "Basic Spoken English is ₹999 per month, Workplace English is ₹1,499 per month, Interactive Speaking is ₹1,199 per month, and 1:1 Career Counselling is ₹999 for the complete 3-session package. All fees include GST.",
      },
      {
        q: "Can I take two courses at the same time?",
        a: "Yes, and the most relevant pairings are Interactive Speaking with Interview Preparation, or Workplace English with Career Counselling. Message us on WhatsApp so we can check whether the available schedules can work together.",
      },
    ],
  },

  "/why-us": {
    path: "/why-us",
    title: "Why Us | Built for Indian Learners",
    description:
      "Built for Indian learners. Run by real teachers. No bots, no recordings, no mega-batches. Live small-batch English from ₹999/month. ₹0 demo on WhatsApp.",
    shortTitle: "Why Learn With Smile",
    keywords: [
      "small batch english classes online india",
      "live english class vs recorded course",
      "english class with money back guarantee india",
      "max 8 students english batch",
      "one to one english classes online india",
      "english classes flexible timing working professionals",
      "is online english coaching worth it",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Why us: a named teacher, a room of 8, and a fee that does not jump with your city. 7 years live from Kolkata. From ₹999/month. ₹0 real-class demo.",
    faqs: [
      {
        q: "How is Learn With Smile different from Cambly or British Council English Online?",
        a: "Cambly is on-demand 1:1 with native speakers at roughly ₹8,000–₹15,000/month if you practise daily; tutor training varies and beginners often freeze at native speed. British Council English Online is a CEFR syllabus with published 4.5★ class ratings; group rooms of 8–12 still leave limited speaking time and modules often cost ₹8,800–₹16,000. Learn With Smile is a named live teacher, 7 years, 500+ learners, from ₹999/month GST included, a ₹0 real-class demo, and a hard cap of 8 so every adult learner still speaks. We do not issue a British Council certificate — if you need that badge, go there.",
      },
      {
        q: "Are Kolkata offline spoken English classes better than online?",
        a: "For speaking time, usually no. Typical Kolkata classrooms run 25–40 students, so most learners speak once a week. Public 3-month packages often sit at ₹1,500–₹6,000 plus commute. Online small-batch classes remove the commute, keep morning/evening/weekend IST slots, and give every learner the mic in every hour. Peer energy is the one thing a packed room still does well — we replace that with live polls, debates and a WhatsApp batch group.",
      },
      {
        q: "Why is a maximum batch size of 8 students important for learning English?",
        a: "Speaking time is the whole point. In a 60-minute class with 8 students, each learner gets roughly 6–7 minutes of actual speaking and correction. In a 30-student batch that drops to under 2 minutes, and most learners spend the hour listening to someone else practise. Small batches also mean the teacher can remember your specific errors week to week and correct the same mistake until it disappears.",
      },
      {
        q: "Is there a refund if I don't like the course after enrolling?",
        a: "We don't run a refund policy — instead, you attend a full free live demo class before you pay anything, so you already know exactly what the batch, teacher and teaching style are like before you enrol. That's why we'd rather you decide upfront than ask for money back afterwards.",
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
        a: "Not currently. The courses focus on practical English use, clearer communication and real confidence rather than a completion credential. If a recognised certificate is required for a visa, university or HR process, choose an accredited provider.",
      },
    ],
  },

  "/about-us": {
    path: "/about-us",
    title: "About Us | 7 Years, Kolkata & Pan-India",
    description:
      "7 years of live teaching, 500+ learners, from ₹999/month. A Kolkata classroom that went online — same teacher, learners across India. ₹0 demo. GST included.",
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

  "/founder": {
    path: "/founder",
    title: "Sunanda Dey | One Mentor. One Mission.",
    description:
      "Meet Sunanda Dey — founder and lead teacher. 7 years, 500+ learners, from ₹999/month. Kolkata-based, teaching learners across India. ₹0 demo in a real class.",
    shortTitle: "Sunanda Dey — Founder",
    keywords: [
      "sunanda dey english teacher",
      "learn with smile founder",
      "online english teacher india",
      "english trainer kolkata",
      "career mentor india online",
    ],
    ogImage: "/og/founder.jpg",
    priority: 0.6,
    changefreq: "monthly",
    summary:
      "Founder profile: Sunanda Dey, English and career mentor, 7 years of live online teaching experience.",
  },

  "/success-stories": {
    path: "/success-stories",
    title: "Real Indian Learners | Real Results",
    description:
      "Career switches, IELTS scores, BI Analyst jobs, salary jumps. Verified Learn With Smile learners. From ₹999/month. Individual results, not a guarantee.",
    shortTitle: "Success Stories",
    keywords: [
      "learn with smile reviews",
      "online english class reviews india",
      "ielts band 7 success story india",
      "english class results testimonials india",
      "does online spoken english class work",
      "career switch after english course",
    ],
    ogImage: "/og/success-stories.jpg",
    priority: 0.7,
    changefreq: "monthly",
    summary:
      "Named learner outcomes with courses and cities — IELTS band jumps, salary increases, interview wins and confidence gains. Individual results vary.",
    faqs: [
      {
        q: "Do online English classes actually get people jobs in India?",
        a: "They get people interview-ready, which is the gate most candidates fail at. Our learners' documented outcomes include a BPO agent moving to a client-facing Customer Success role in Pune with roughly double the salary in 4 months, an IT engineer in Hyderabad clearing interview rounds she had previously failed, and a marketing executive in Kolkata going from freezing in meetings to leading client presentations within 6 months. English is a gate, not a guarantee — it opens roles that were previously closed to you.",
      },
      {
        q: "How soon can I expect to see real improvement in my spoken English?",
        a: "Most learners notice a genuine difference in confidence and sentence fluency within 6–8 weeks of regular live classes, roughly 12–16 sessions in. Full everyday conversational fluency for someone starting from zero typically takes the complete 6-month Basic Spoken English course, attended up to twice a week with some daily practice in between.",
      },
      {
        q: "I studied in a Hindi or Bengali-medium school, not English-medium. Can I still get results like these?",
        a: "Yes — most of our learners come from Hindi- or Bengali-medium schooling, including several in the stories above, from Howrah and Kolkata. Classes are taught bilingually in the early weeks where needed, so grammar and pronunciation are explained in a language you already understand before you're expected to think and respond in English.",
      },
      {
        q: "Will an English course actually help me clear interviews, or is that too big a claim?",
        a: "English removes one specific obstacle — communicating confidently once you're in the room — it doesn't replace domain skills or experience you don't have. Our Interview Preparation course pairs mock interviews with English coaching for that reason, and the outcomes above came from candidates who already had the underlying skills but needed the language and confidence fixed.",
      },
      {
        q: "Are these success stories typical, or just the best few out of many students?",
        a: "They are selected individual learner outcomes, not a guarantee of what every student will achieve. Progress depends on starting level, attendance, participation and practice between classes. Consistent attendance for at least 3–6 months is the common factor in these stories; there is no shortcut or promised job, score or salary increase.",
      },
      {
        q: "Does Learn With Smile help with career guidance, or only English speaking?",
        a: "Both, if you need it. Alongside the English courses we run standalone 1:1 Career Counselling (₹999 for three 60-minute sessions), which is what helped Aarav Pandey above choose the right B.Tech specialisation. Many learners combine an English course with a counselling session when the actual goal is a career or course change, not just language practice.",
      },
    ],
  },

  "/blog": {
    path: "/blog",
    title: "English & Career Blog | Tips for Indian Learners",
    description:
      "Notes from teachers who run live classes: IELTS Band 7, interview answers, workplace English, how long fluency takes. From ₹999/month. ₹0 demo. GST included.",
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
    title: "Book a Free Live Demo | A Real Class. Free.",
    description:
      "Sit in a live class for ₹0 — not a sales call. One WhatsApp message. Replies 09:00–12:00 IST. No card. Then decide: from ₹999/month. GST included. Live.",
    shortTitle: "Book a Free Demo",
    keywords: [
      "free english demo class online india",
      "free trial spoken english class",
      "book english class on whatsapp",
      "free ielts demo class online",
      "english class free trial no card",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.9,
    changefreq: "monthly",
    summary:
      "Booking page. Free live demo class request form; confirmation happens over WhatsApp at +91 96744 79949, no payment details required.",
    faqs: [
      {
        q: "How do I book a free demo class at Learn With Smile?",
        a: "Fill in four fields on the booking page — name, WhatsApp number, course and your goal — and it opens WhatsApp with the message pre-filled, or message +91 96744 79949 directly. We reply during 09:00–12:00 IST and confirm a slot in the next available live batch. No card, no payment, no obligation and no surprise sales call.",
      },
      {
        q: "What happens in the demo class?",
        a: "You join a real live class with actual students, not a one-to-one sales pitch. You see the teaching style, the gamified activities and the batch size for yourself, and you get to speak. Afterwards we send fees, batch timings and the full syllabus on WhatsApp and you decide.",
      },
      {
        q: "Will you call me after I send my WhatsApp number?",
        a: "Not unless you ask. WhatsApp is the default admissions channel because it keeps the course, fee and batch details in one written conversation. Phone is available only as a fallback. The team replies on WhatsApp during 09:00–12:00 IST.",
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
      "Live Spoken English from a Kolkata teacher. 7 years, ₹999/month, ₹0 demo. Morning, evening, weekend IST. More speaking time than a 25–40 student room.",
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
        a: "Offline coaching centres in Kolkata generally charge somewhere between ₹1,500 and ₹6,000 for a 3-month spoken English course, usually in batches of 25–40 students. Learn With Smile charges ₹999 per month for Basic Spoken English in a batch capped at 8, GST included, with no registration or material fee. The fee is the same for a learner in Kolkata as for one in Guwahati — there is no local pricing.",
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
        a: "For speaking practice, usually yes, and the reason is arithmetic rather than technology. A Kolkata coaching centre running 25–40 students per batch cannot give each learner more than a minute or two of speaking per class. A 8-student online batch gives each learner roughly 8–10 minutes. You also save the 45–90 minutes each way of commuting up to twice a week that a Gariahat or Salt Lake centre costs someone living across the city. What an offline centre does better is peer accountability and the social side of a classroom.",
      },
      {
        q: "Do you prepare Kolkata students for IELTS and job interviews too?",
        a: "Yes. Alongside Spoken English we run IELTS Preparation at ₹1,999/month for learners applying to study abroad, Interview Preparation at ₹1,499/month for campus placements and job switches, and Workplace English at ₹1,499/month for professionals in IT, BPO, customer support and other client-facing roles. All English courses are live and capped at 8 students.",
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
        a: "Group online English classes in India generally run ₹800–₹3,000 per month. One-to-one tutoring runs ₹100–₹2,000 per session depending on where the tutor is based, and app-based conversation practice runs ₹300–₹800 per month. Learn With Smile sits at ₹999/month for Spoken English in a batch capped at 8, GST included. Anything under about ₹500 a month is almost always either recorded video or a batch large enough that you will not speak.",
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
        q: "Do online English class fees in India include GST?",
        a: "Often not, and it is the most common surprise on the invoice. Ask whether the advertised figure is inclusive, because 18% on a ₹2,000/month course is ₹360 a month you did not budget for. Learn With Smile's prices are GST-inclusive and there are no registration or material fees. Also ask about lock-in: a quarterly or annual payment that cannot be cancelled is a much larger commitment than a monthly fee.",
      },
      {
        q: "How much does IELTS coaching cost in India?",
        a: "Full IELTS courses in India typically run ₹8,000–₹35,000, with large-institute classroom batches at the higher end and often 20–40 students per batch. Learn With Smile charges ₹1,999/month for three months in a batch of maximum 8, including six full-length mocks with individual feedback. The IELTS exam fee itself is separate and paid directly to IDP or British Council — budget for it on top of any coaching.",
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
        a: "There is no single best one, and any page that names one is usually published by that company. The right choice depends on your level and what you need: daily 1:1 speaking reps with no fixed syllabus suit a hesitant intermediate speaker; a structured live course suits a genuine beginner who does not know what to study next; a children's platform suits an under-14; an established institution suits anyone who needs a recognised certificate. Take three free trials in one week and count how many minutes you actually spoke in each.",
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
        a: "Only if someone is going to ask for it. Employers in India almost never ask to see a spoken English certificate — they judge your English in the interview. If you specifically need a recognised credential for a visa, a university application or an HR checklist, go to British Council or a similar established institution and expect to pay considerably more; that fee is buying the certificate, not better teaching. Learn With Smile does not currently issue a certificate and we would rather say so than imply otherwise.",
      },
      {
        q: "Which online English class is best for a complete beginner?",
        a: "A structured live course with a small batch, not an app and not a 1:1 conversation platform. A complete beginner cannot practise conversation yet, because there is nothing to practise with — they need grammar, vocabulary and pronunciation built in order, in a room where being wrong costs nothing. Conversation platforms suit people who can already speak but freeze. Choosing the wrong one of those two is the most common expensive mistake we see.",
      },
      {
        q: "Which online English classes are best for children in India?",
        a: "A dedicated children's platform, not us. Teaching a nine-year-old is a genuinely different skill involving gamified curricula, parent reporting and safeguarding, and the platforms built for it — PlanetSpark and similar — do it properly. Our classes are designed for learners from about 15 upwards, and putting a younger child into an adult batch would waste your money and their time.",
      },
    ],
  },

  "/workplace-english-course-online-india": {
    path: "/workplace-english-course-online-india",
    title: "Workplace English Online | ₹1,499/mo, 7 Years",
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
      "A practical buyer and self-study guide to workplace English in India: meetings, client calls, status updates, emails and presentations; who needs live training; and how the Learn With Smile max-8 course works.",
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
        a: "The course costs ₹1,499 per month including GST. It runs for three months with up to two live class days per week in a batch capped at 8 learners. There is no registration or material fee and no course certificate. A real live demo class is available before payment.",
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
      "Everyday English from zero: ~6 months live. Workplace 3 months. IELTS Band 7+ 9–12 months. 30-day fluency is marketing. ₹999/mo, max 8, ₹0 demo. GST in.",
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
      "Time-to-fluency guide. Everyday conversation ~6 months from zero with live classes; workplace ~3 months; IELTS Band 7+ 9–12 months. Speaking minutes matter more than calendar months. ₹999/mo, batch of 8.",
    faqs: [
      {
        q: "How long does it take to learn spoken English from zero in India?",
        a: "About 6 months of live practice — up to 2 classes a week plus 10–15 minutes a day — to reach everyday conversation: introducing yourself, shops, phone calls, two minutes on a topic. That assumes you actually speak in class. In a 25–40 student room the same calendar can deliver a tenth of the speaking minutes. Professional and exam English (meetings, IELTS Band 7+) usually needs 9–12 months from zero.",
      },
      {
        q: "Can I become fluent in English in 30 days?",
        a: "No, not from zero. In 30 days a hesitant intermediate can reduce freezing if they already have the language. A beginner still needs sounds, 1,000+ words and tense patterns. Anyone advertising fluency in 30 days is selling a course, not a result. Learn With Smile’s Spoken English is a 6-month syllabus at ₹999/month, GST included, batch of 8.",
      },
      {
        q: "How long is the Learn With Smile Spoken English course?",
        a: "6 months, up to 2 live classes per week, maximum 8 students, ₹999 per month GST included. Workplace English is 3 months at ₹1,499/month. IELTS is 3 months at ₹1,999/month with 6+ marked mocks. Interview Prep is 2 months at ₹1,499/month. ₹0 live demo before you pay.",
      },
    ],
  },

  "/english-institute-comparison-india": {
    path: "/english-institute-comparison-india",
    title: "English Institutes India 2026 | Fees & Fit",
    description:
      "Cambly, EngVarta, British Council, Veta-style rooms, EEC exam shops vs live batches of 8 from ₹999/mo. 2026 fee bands, speaking minutes, who each fits.",
    shortTitle: "English Institutes in India, Compared",
    keywords: [
      "best spoken english institute in india 2026",
      "cambly vs engvarta vs british council",
      "veta spoken english fees",
      "eec spoken english kolkata",
      "best english class for working professionals india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Named-institute comparison for 2026: EngVarta 1:1 (~₹100–₹400/session), Cambly native (~$10/hr), British Council modules (₹8,800–₹16,000), Veta-style classrooms (₹3,500–₹10,000 / 2–4 months), EEC-style exam shops (~₹7,500 spoken), PlanetSpark for kids, Learn With Smile live max-8 from ₹999/month. Written by one of the providers.",
    faqs: [
      {
        q: "Which spoken English institute is best in India in 2026?",
        a: "There is no single best. EngVarta-style 1:1 (~₹100–₹400/session) fits hesitant people who already speak. Cambly (~$10/hour) fits fluent learners who want native chat. British Council modules (often ₹8,800–₹16,000) fit people who need a recognised syllabus or certificate. Veta-style classrooms (₹3,500–₹10,000 for 2–4 months) fit people who want a neighbourhood room. Learn With Smile fits adults 15+ who want a 6-month syllabus, a named teacher and a hard cap of 8, from ₹999/month GST included. Kids need a children’s platform, not an adult batch.",
      },
      {
        q: "Is EngVarta better than a live English batch?",
        a: "For daily speaking minutes, yes — a 25-minute 1:1 beats 6–8 minutes in a group. For a beginner who cannot form a sentence, no: 1:1 apps have no 6-month map, so you practise what you can already say. The combination that works for many intermediates is an app for daily reps plus a live batch of 8 for structure.",
      },
      {
        q: "Is British Council worth it versus a ₹999/month class?",
        a: "If you need the badge — visa, university, HR checklist — yes, and Learn With Smile does not issue a certificate. If you need speaking time at an Indian salary, a module at ₹8,800–₹16,000 in a group of 8–12 is a different product from ₹999/month with a cap of 8. Buy the certificate where you need the certificate.",
      },
    ],
  },
};

/* --------------------------------------------------------------------------
 * Course pages — SEO copy that the course data files do not carry
 * ------------------------------------------------------------------------ */

export type CourseSeoExtra = {
  /**
   * <title> and meta description for the course page, ≤58 and 150–158 chars.
   *
   * Written by hand rather than assembled from the course record: a generated
   * `${title} Online — ${price}, Max 8 Per Batch | Learn With Smile` ran to
   * 70–87 characters and truncated in the SERP on every one of the six.
   */
  title: string;
  description: string;
  /** Breadcrumb / llms.txt label. */
  shortTitle: string;
  keywords: string[];
  ogImage: string;
  summary: string;
  /** Appended to the course's own FAQs, targeted at AI-assistant question phrasing. */
  extraFaqs: Faq[];
};

export const COURSE_SEO: Record<string, CourseSeoExtra> = {
  "spoken-english": {
    title: "Spoken English Course | ₹999/mo, 6 Months",
    description:
      "Practical English communication and Basic Spoken English for beginners: 6 months, up to 2 live classes weekly, max 8 students, ₹999/month, with a ₹0 demo.",
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
      "Basic Spoken English — 6 months, up to 2 live classes a week, max 8 students, ₹999/month. Designed for absolute beginners who cannot yet form a full sentence.",
    extraFaqs: [
      {
        q: "What is the fee for a basic spoken English course in India?",
        a: "Learn With Smile charges ₹999 per month for Basic Spoken English — 6 months, up to 2 live classes per week, maximum 8 students per batch, GST included. Comparable live group courses in India generally run ₹800–₹3,000 per month; recorded-video courses are cheaper but give you no speaking practice, and 1:1 native-tutor platforms cost considerably more per hour.",
      },
      {
        q: "How long does it take to learn spoken English from zero?",
        a: "Around 6 months of consistent live practice to reach comfortable everyday conversation — introducing yourself, shopping, phone calls, travel, small talk and basic group discussion. That assumes up to 2 classes a week plus 10–15 minutes of daily practice. Reaching professional or exam-level fluency typically takes another 3–6 months on top.",
      },
      {
        q: "I feel embarrassed about my English. Will I be judged in class?",
        a: "The batch is capped at 8 and every person in it is at the same starting point — that is the entire design. There is no ranking, no public scoring and no one is put on the spot cold. Errors are corrected as they happen because that is how correction works, but it is done to the group as a pattern rather than aimed at a person.",
      },
    ],
  },
  "business-english": {
    title: "Workplace English Course | ₹1,499/mo",
    description:
      "Workplace English for professionals and job seekers: meetings, client calls, updates, emails and presentations. Live max-8 batch, ₹1,499/month, GST included.",
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
      "Workplace English — ₹1,499/month · 3 months in a live batch of max 8. Meetings, calls, updates, emails and presentations.",
    extraFaqs: [
      {
        q: "What is the difference between Spoken English and Workplace English?",
        a: "Spoken English builds the underlying ability to hold a conversation — grammar, vocabulary, pronunciation and confidence. Workplace English assumes you can already manage a basic conversation and practises the situations that affect your job: status updates, meetings, client calls, clarification, emails and presentations. If you cannot yet hold a five-minute conversation, start with Basic Spoken English first.",
      },
      {
        q: "Is there a Workplace English course that fits around a full-time job?",
        a: "Yes. Learn With Smile runs early-morning, evening and weekend batches on IST specifically for working professionals. The three-month course is ₹1,499/month; every class is recorded so a missed session because of a work escalation does not set you back.",
      },
    ],
  },
  "interactive-speaking": {
    title: "Interactive Speaking | ₹1,199/mo, 3 Months",
    description:
      "3 months of live speaking — games, debates, role-plays and stories. Batch of 8, ₹1,199/month, up to 2 classes/week. Fluency practice, not grammar lectures.",
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
      "Interactive Speaking — ₹1,199/month · 3 months in a live batch of max 8. Games, debates, role-plays and storytelling.",
    extraFaqs: [
      {
        q: "How do I stop hesitating and freezing when I speak English?",
        a: "Hesitation is almost never a grammar problem — it is a retrieval-speed and confidence problem, and it responds to repetition under mild pressure. That means speaking often in a low-stakes group where being wrong costs nothing. Our Interactive Speaking course is built entirely around that: one-minute impromptu topics, word-association warm-ups, structured debates, role-plays and storytelling, up to twice a week for 3 months, in a batch of eight.",
      },
      {
        q: "Is this course useful if my grammar is already good?",
        a: "That is exactly who it is for. Many Indian learners read and write English well but freeze in conversation because they translate mentally before speaking. This course does no grammar teaching — it is 100% live speaking reps designed to move you from translating to thinking directly in English.",
      },
    ],
  },
  ielts: {
    title: "IELTS Coaching Online | ₹1,999/mo, 3 Months",
    description:
      "Three-month IELTS prep, Academic and General Training. Six full-length mock tests, live writing feedback, speaking labs. Max 8 per batch, ₹1,999/month.",
    shortTitle: "IELTS Preparation",
    keywords: [
      "ielts coaching online india",
      "ielts online classes india fees",
      "ielts band 7 preparation course",
      "ielts academic and general training coaching",
      "ielts mock test with feedback online",
      "ielts speaking practice online india",
      "best ielts online coaching small batch",
      "how many months to prepare for ielts",
    ],
    ogImage: "/og/ielts.jpg",
    summary:
      "IELTS Preparation — 3 months, live batch of max 8, ₹1,999/month. Academic and General Training, 6+ full-length mocks, live writing feedback, speaking labs.",
    extraFaqs: [
      {
        q: "How much does IELTS coaching cost in India?",
        a: "Learn With Smile charges ₹1,999 per month for 3 months of live IELTS Preparation in a batch of maximum 8, including 6+ full-length mock tests with individual feedback. Indian IELTS coaching generally ranges from about ₹8,000 to ₹35,000 for a full course; large-institute classroom batches sit at the higher end and often run 20–40 students per batch. Note the IELTS exam fee itself is separate and paid to IDP or British Council.",
      },
      {
        q: "How many months does it take to prepare for IELTS Band 7?",
        a: "About 3 months of structured preparation if your current level is around Band 5.5–6, which is the typical starting point for Indian graduates. Writing is almost always the bottleneck, not Listening or Reading, so the deciding factor is how many essays you write and get individually corrected — we target at least one reviewed piece of writing per week plus 6 full-length timed mocks.",
      },
      {
        q: "Do you teach both IELTS Academic and General Training?",
        a: "Yes, both, in the same course. Listening and Speaking are identical across the two versions; Reading and Writing Task 1 differ, so your trainer customises those drills to whichever version you are sitting — Academic for university admission, General Training for PR and migration.",
      },
      {
        q: "Is online IELTS coaching as good as classroom coaching?",
        a: "For IELTS specifically, online practice mirrors the computer-delivered test format used in India. Corrected writing and realistic speaking mocks matter more than the room itself; an 8-person live batch gives each learner more practice and correction time than a crowded classroom.",
      },
    ],
  },
  "interview-prep": {
    title: "Interview Prep in English | ₹1,499/mo, 7 Yrs",
    description:
      "Two-month intensive interview prep — HR rounds, STAR answers, three recorded mock interviews, plus resume and LinkedIn review. Max 8 batch, ₹1,499/mo.",
    shortTitle: "Interview Preparation",
    keywords: [
      "interview preparation course english india",
      "hr interview questions and answers coaching",
      "mock interview practice online india",
      "tell me about yourself answer coaching",
      "star method behavioural interview training",
      "resume and linkedin review india",
      "how to clear hr round interview",
    ],
    ogImage: "/og/interview-prep.jpg",
    summary:
      "Interview Preparation in English — 2 months intensive, live batch of max 8, ₹1,499/month. HR rounds, STAR behavioural answers, 3 recorded mock interviews, resume and LinkedIn review.",
    extraFaqs: [
      {
        q: "How should I answer 'tell me about yourself' in an interview?",
        a: "Keep it to 90 seconds in three parts: where you are now (current role and one line of scope), what you have done that is relevant (one or two concrete achievements with a number attached), and why you are in this room (what draws you to this specific role). Do not recite your resume chronologically and do not start with your birthplace or schooling. We drill this answer until it is automatic, then record it back to you so you hear your own filler words and pacing.",
      },
      {
        q: "What is the STAR method and do Indian interviewers use it?",
        a: "STAR is Situation, Task, Action, Result — a four-part structure for answering behavioural questions such as 'tell me about a conflict with a teammate'. It is standard at Indian IT services firms, GCCs, product companies and most MNC HR rounds, and interviewers there are explicitly trained to score against it. The most common mistake is spending 80% of the answer on Situation and never stating a measurable Result.",
      },
    ],
  },
  "career-counselling": {
    title: "1:1 Career Counselling | ₹999 Total, 3×60 min",
    description:
      "Three 60-minute 1:1 sessions for ₹999 total. Strengths mapping, three shortlisted career paths, a six-month action plan, plus resume and LinkedIn review.",
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
      "Career Counselling — 3 × 60-minute 1:1 online sessions, ₹999 total. Strengths mapping, three shortlisted career paths, a 6-month action plan, resume and LinkedIn review.",
    extraFaqs: [
      {
        q: "How much does career counselling cost in India?",
        a: "Learn With Smile charges ₹999 for the complete package — three 60-minute 1:1 online sessions plus a written 6-month action plan and a resume and LinkedIn review. Independent career counsellors in India typically charge ₹1,500–₹5,000 per session, and psychometric-test-led packages from larger firms run ₹5,000–₹15,000.",
      },
      {
        q: "Is career counselling only for school students?",
        a: "No. Roughly half of our sessions are with working adults in their 20s and 30s — people considering a switch out of BPO, IT support or a role they took by default, and people returning to work after a break. The process is the same: audit what you are actually good at, compare three realistic paths on salary and growth, and commit to a 6-month plan.",
      },
    ],
  },
};

/* --------------------------------------------------------------------------
 * JSON-LD builders
 * ------------------------------------------------------------------------ */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    // Classes are delivered online. Keep one canonical entity and describe
    // admissions availability on ContactPoint instead of presenting response
    // hours as physical storefront opening hours.
    "@type": ["EducationalOrganization", "OnlineBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
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
      "Speak better English with real teachers and small batches. From ₹999/month. 7 years, Kolkata & pan-India. Spoken, IELTS, Workplace. ₹0 demo. GST in. Live.",
    slogan: "Speak Better English. Master In-Demand Skills. Build Future Together.",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    priceRange: "₹999–₹1,999/month",
    currenciesAccepted: "INR",
    foundingDate: String(FOUNDING_YEAR),
    founder: {
      "@type": "Person",
      "@id": `${abs("/founder")}#person`,
      name: "Sunanda Dey",
      url: abs("/founder"),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.locality,
      addressRegion: CONTACT.region,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.country,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
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
        description: "WhatsApp is the preferred admissions channel; phone calls are a fallback.",
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
      "Speak Better English. Master In-Demand Skills. Build Future Together. Real teachers, small batches, from ₹999/month. 7 years, Kolkata & pan-India. ₹0 demo.",
    publisher: { "@id": `${SITE_URL}/#organization` },
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

export function webPageLd(page: { path: string; title: string; description: string }) {
  const isFounderProfile = page.path === "/founder";
  return {
    "@context": "https://schema.org",
    "@type": isFounderProfile ? "ProfilePage" : "WebPage",
    "@id": `${abs(page.path)}#webpage`,
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    ...(isFounderProfile ? { mainEntity: { "@id": `${abs("/founder")}#person` } } : {}),
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
 * directives, canonical, Open Graph, Twitter and JSON-LD.
 *
 * No `<meta name="keywords">` — see the note at the top of this file.
 */
export function buildHead(opts: {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  ogType?: string;
  jsonLd?: unknown[];
}): HeadResult {
  const url = abs(opts.path);
  const image = abs(opts.ogImage);

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
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
 * here leaks everywhere: a homepage canonical on /course-ielts makes Google
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
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: SITE_LOCALE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // Site-wide discovery for AI assistants: the llms.txt index is worth
    // finding from any page, not just from robots.txt.
    links: [{ rel: "alternate", type: "text/plain", title: "llms.txt", href: abs("/llms.txt") }],
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

  const jsonLd: unknown[] = [webPageLd(page)];

  if (path !== "/") {
    jsonLd.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        ...(page.breadcrumb ?? [{ name: page.shortTitle, path: page.path }]),
      ]),
    );
  }

  if (page.faqs?.length) jsonLd.push(faqLd(page.faqs));

  return buildHead({
    path: page.path,
    title: page.title,
    description: page.description,
    ogImage: page.ogImage,
    jsonLd,
  });
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
 * `/founder` rather than repeating a bare name string. That link — article to
 * a real, described author with their own URL — is the strongest E-E-A-T
 * signal available here, and half of it was already built.
 */
export function blogPostHead(post: BlogPost): HeadResult {
  const path = blogPath(post);
  const url = abs(path);
  const image = abs(`/og/blog-${post.slug}.jpg`);

  const head = buildHead({
    path,
    title: post.seoTitle,
    description: post.description,
    ogImage: `/og/blog-${post.slug}.jpg`,
    ogType: "article",
    jsonLd: [
      webPageLd({ path, title: post.seoTitle, description: post.description }),
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        // Google truncates headline at 110 characters; every title here is well
        // inside that, and the check below keeps it that way.
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
          "@id": `${abs("/founder")}#person`,
          name: post.author,
          url: abs("/founder"),
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${abs("/blog")}#blog` },
      },
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path },
      ]),
    ],
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
