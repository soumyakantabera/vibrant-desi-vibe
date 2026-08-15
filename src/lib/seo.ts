/**
 * Single source of truth for every piece of SEO / AEO metadata on the site.
 *
 * Consumed by three places — keep it free of Vite-only imports (no `?url`,
 * no image imports) so the prerender + sitemap scripts can read it too:
 *   1. `src/routes/*.tsx`      → TanStack `head()` for the SPA / SSR runtime
 *   2. `scripts/prerender.mjs` → static <head> baked into each dist/*.html
 *   3. `scripts/prerender.mjs` → sitemap.xml + llms.txt generation
 *
 * AEO note: "keywords" meta carries near-zero weight for Google, but AI answer
 * engines (ChatGPT/OAI-SearchBot, Perplexity, Claude) do read it as a topical
 * hint, and it costs nothing. The real AI-visibility lever is `faqs` below —
 * question-shaped headings with self-contained answers are what actually gets
 * retrieved and cited.
 */

export const SITE_URL = "https://www.learnwithsmile.app";
export const SITE_NAME = "Learn With Smile";
export const SITE_LOCALE = "en_IN";
export const TWITTER_HANDLE = "@learnwithsmile";

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
  title: string;
  description: string;
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
 *   b) format long tail           — "small batch live english class max 6 students"
 *   c) audience long tail         — "english speaking course for working professionals"
 *   d) geo long tail              — "spoken english classes kolkata online"
 *   e) question long tail (AEO)   — what AI assistants are actually asked
 * ------------------------------------------------------------------------ */

const BRAND_KEYWORDS = ["learn with smile", "learnwithsmile", "learn with smile online classes"];

const CORE_KEYWORDS = [
  "spoken english classes online india",
  "online english speaking course india",
  "live english classes india",
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
    title: "Live Online English & Career Classes in India from ₹999/month | Learn With Smile",
    description:
      "Live online Spoken English, IELTS, Business English, Interview Prep & Career Counselling for Indian learners. Max 6 students per batch or 1:1, from ₹999/month. 7 years teaching, 500+ learners. Free demo class on WhatsApp.",
    keywords: [
      ...CORE_KEYWORDS,
      ...BRAND_KEYWORDS,
      "best online spoken english classes in india",
      "english class fees per month in india",
      "ielts coaching online india",
      "business english course india",
      "interview preparation in english",
      "career counselling online india",
      "live english class with real teacher",
    ],
    ogImage: "/og/default.jpg",
    priority: 1.0,
    changefreq: "weekly",
    summary:
      "Homepage. Live online English and career courses for Indian learners, from ₹999/month, max 6 students per batch, taught by a real teacher over 7 years to 500+ learners.",
    faqs: [
      {
        q: "How much do online spoken English classes cost in India?",
        a: "At Learn With Smile, live online Spoken English starts at ₹999 per month for a batch of maximum 6 students, with 3 classes per week. IELTS Preparation is ₹1,999/month, Business English ₹1,199/month, Interview Preparation ₹1,499/month, and 1:1 Career Counselling is ₹999 for three 60-minute sessions. All prices include GST and there are no registration or material fees. Across the wider Indian market, group online English classes typically run ₹800–₹3,000 per month and 1:1 native-speaker platforms run ₹300–₹2,200 per session.",
      },
      {
        q: "Which is the best online spoken English class in India for a small batch?",
        a: "It depends on what you need. For daily 1:1 speaking reps with no fixed curriculum, EngVarta and Cambly are the usual picks. For children, PlanetSpark. For a structured syllabus with a certificate, British Council. Learn With Smile fits a specific gap: a live human teacher, a fixed 6-month syllabus, and a hard cap of 6 students per batch, from ₹999/month — so every learner gets real speaking time in every class instead of watching a recording or sitting in a 40-person webinar.",
      },
      {
        q: "Can I actually learn to speak English fluently in 6 months?",
        a: "Yes, for everyday conversational fluency, if you attend live classes 3 times a week and practise between them. Our 6-month Basic Spoken English course takes learners from zero — people who cannot form a full sentence — to introducing themselves, handling daily conversations, and speaking for 2 minutes on a topic. Professional and academic fluency (IELTS Band 7+, client presentations) usually needs 9–12 months total. Anyone promising fluency in 30 days is selling you something.",
      },
      {
        q: "Are online English classes as effective as offline coaching centres?",
        a: "For speaking practice, online small-batch classes are usually better. In a 6-student online batch every learner speaks in every class; in a 30-student offline classroom most learners speak once a week. Online also removes commute time, lets you join morning, evening or weekend slots, and gives you class recordings to revise. The one thing offline does better is peer accountability, which we replace with live polls, debates and a WhatsApp batch group.",
      },
      {
        q: "Is the demo class really free, and do I need to pay anything upfront?",
        a: "Yes, genuinely free — you attend a full live class, not a sales call, and no card or payment details are needed to book. You message us on WhatsApp at +91 96744 79949, we confirm a slot, and you sit in a real class. If you enrol and your first paid class does not impress you, we refund it in full.",
      },
      {
        q: "Do you teach students outside Kolkata and West Bengal?",
        a: "Yes. All classes are 100% online and live, so we teach learners across India — Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Patna and smaller towns — as well as Indian learners abroad. We are based in Kolkata, and we run morning, evening and weekend batches so IST working hours are not a blocker.",
      },
    ],
  },

  "/english-career": {
    path: "/english-career",
    title: "6 Live Online English & Career Courses from ₹999/month | Learn With Smile",
    description:
      "Compare all 6 live online courses — Basic Spoken English, Business English, Interactive Speaking, IELTS, Interview Prep and Career Counselling. Fees, duration, batch size and syllabus for each. Max 6 students per batch. Free demo.",
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
      "Course hub. Side-by-side comparison of all six live courses with fees (₹999–₹1,999/month), duration, format and outcomes.",
    faqs: [
      {
        q: "Which English course should I choose — Spoken English, Business English or Interactive Speaking?",
        a: "Choose Basic Spoken English (₹999/month, 6 months) if you cannot yet hold a conversation and need grammar, vocabulary and pronunciation from the ground up. Choose Business English (₹1,199/month, 3 months) if you already speak but need workplace skills — emails, meetings, presentations, negotiation. Choose Interactive Speaking (₹999/month, 3 months) if your grammar is fine but you freeze when speaking and just need daily live practice through games, debates and storytelling.",
      },
      {
        q: "What is the cheapest course at Learn With Smile?",
        a: "Basic Spoken English and Interactive Speaking are both ₹999 per month, and 1:1 Career Counselling is ₹999 for the complete 3-session package. All fees include GST.",
      },
      {
        q: "Can I take two courses at the same time?",
        a: "Yes, and the most common pairing is Interactive Speaking alongside Interview Preparation, or Business English alongside Career Counselling. Message us on WhatsApp and we will schedule the two batches so they do not clash and quote a combined fee.",
      },
    ],
  },

  "/why-us": {
    path: "/why-us",
    title: "Why Learn With Smile | Max 6 Per Batch, Live Teacher, Money-Back First Class",
    description:
      "No recorded videos, no 50-student webinars, no bots. Live small-batch classes capped at 6 students, gamified learning, flexible IST slots and a full refund if your first paid class disappoints. Why 500+ Indian learners chose us.",
    keywords: [
      "small batch english classes online india",
      "live english class vs recorded course",
      "english class with money back guarantee india",
      "max 6 students english batch",
      "one to one english classes online india",
      "english classes flexible timing working professionals",
      "is online english coaching worth it",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    summary:
      "Differentiators: 100% live teaching, hard cap of 6 students per batch, gamified lessons, flexible morning/evening/weekend IST slots, first-class refund policy.",
    faqs: [
      {
        q: "Why is a maximum batch size of 6 students important for learning English?",
        a: "Speaking time is the whole point. In a 60-minute class with 6 students, each learner gets roughly 8–10 minutes of actual speaking and correction. In a 30-student batch that drops to under 2 minutes, and most learners spend the hour listening to someone else practise. Small batches also mean the teacher can remember your specific errors week to week and correct the same mistake until it disappears.",
      },
      {
        q: "What is your refund policy?",
        a: "If your first paid class does not impress you, we refund that month in full — no forms, no argument. The demo class before that is free anyway, so you have already seen a real class before paying anything.",
      },
      {
        q: "Are the classes live or pre-recorded?",
        a: "100% live, every single session, with a real teacher who knows your name. Classes are recorded afterwards so you can revise or catch up on a missed session, but you are never asked to learn from a recording as your primary class.",
      },
    ],
  },

  "/about-us": {
    path: "/about-us",
    title: "About Learn With Smile | 7 Years, 500+ Indian Learners, 11 Teaching Principles",
    description:
      "Our story, mission and the 11 principles behind every class — interactive live teaching, gamified practice, small batches, student-first design. Built for Indian learners by teachers with 7 years of live online experience.",
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
    title: "Sunanda Dey, Founder of Learn With Smile | English & Career Mentor",
    description:
      "Meet Sunanda Dey — founder and lead teacher at Learn With Smile. 7 years teaching English and career skills to Indian learners online, live, in batches of six or 1:1.",
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
    title: "Student Results | IELTS 7.5, Salary Doubled, Interviews Cleared | Learn With Smile",
    description:
      "Verified outcomes from Indian learners — IELTS 5.5 to 7.5, BPO to client-facing role with doubled salary, cleared interview rounds, led first client presentation. Real names, cities and courses.",
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
      "Verified learner outcomes with names, cities and courses — IELTS band jumps, salary increases, interview wins, confidence gains.",
    faqs: [
      {
        q: "Do online English classes actually get people jobs in India?",
        a: "They get people interview-ready, which is the gate most candidates fail at. Our learners' documented outcomes include a BPO agent moving to a client-facing Customer Success role in Pune with roughly double the salary in 4 months, an IT engineer in Hyderabad clearing interview rounds she had previously failed, and a marketing executive in Kolkata going from freezing in meetings to leading client presentations within 6 months. English is a gate, not a guarantee — it opens roles that were previously closed to you.",
      },
    ],
  },

  "/blog": {
    path: "/blog",
    title: "English & Career Blog for Indian Learners | Learn With Smile",
    description:
      "Practical, hype-free articles from our teachers — speaking habits that kill hesitation, the Band 7 IELTS writing template, professional email phrases, the 60-second interview answer, and BPO-to-client-facing career roadmaps.",
    keywords: [
      "english learning tips india",
      "ielts writing task 2 template band 7",
      "professional email phrases english",
      "tell me about yourself answer example",
      "bpo to client facing role career change",
      "how to improve english speaking daily",
    ],
    ogImage: "/og/blog.jpg",
    priority: 0.6,
    changefreq: "weekly",
    summary:
      "Blog: practical English and career articles written by Learn With Smile teachers for Indian learners.",
  },

  "/book-free-demo": {
    path: "/book-free-demo",
    title: "Book a Free Live Demo Class | No Card Needed | Learn With Smile",
    description:
      "Book a genuinely free live demo class — four fields, confirmed on WhatsApp in minutes. Sit in a real class before you pay anything. Spoken English, IELTS, Business English, Interactive Speaking, Interview Prep or Career Counselling.",
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
        a: "Fill in four fields on the booking page — name, phone, course and your goal — and it opens WhatsApp with the message pre-filled, or message +91 96744 79949 directly. We reply within minutes during IST hours and confirm a slot in the next available live batch. No card, no payment, no obligation.",
      },
      {
        q: "What happens in the demo class?",
        a: "You join a real live class with actual students, not a one-to-one sales pitch. You see the teaching style, the gamified activities and the batch size for yourself, and you get to speak. Afterwards we send fees, batch timings and the full syllabus on WhatsApp and you decide.",
      },
    ],
  },
};

/* --------------------------------------------------------------------------
 * Course pages — SEO copy that the course data files do not carry
 * ------------------------------------------------------------------------ */

export type CourseSeoExtra = {
  keywords: string[];
  ogImage: string;
  summary: string;
  /** Appended to the course's own FAQs, targeted at AI-assistant question phrasing. */
  extraFaqs: Faq[];
};

export const COURSE_SEO: Record<string, CourseSeoExtra> = {
  "spoken-english": {
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
      "Basic Spoken English — 6 months, 3 live classes a week, max 6 students, ₹999/month. Designed for absolute beginners who cannot yet form a full sentence.",
    extraFaqs: [
      {
        q: "What is the fee for a basic spoken English course in India?",
        a: "Learn With Smile charges ₹999 per month for Basic Spoken English — 6 months, 3 live classes per week, maximum 6 students per batch, GST included. Comparable live group courses in India generally run ₹800–₹3,000 per month; recorded-video courses are cheaper but give you no speaking practice, and 1:1 native-tutor platforms cost considerably more per hour.",
      },
      {
        q: "How long does it take to learn spoken English from zero?",
        a: "Around 6 months of consistent live practice to reach comfortable everyday conversation — introducing yourself, shopping, phone calls, travel, small talk and basic group discussion. That assumes about 3 classes a week plus 10–15 minutes of daily practice. Reaching professional or exam-level fluency typically takes another 3–6 months on top.",
      },
      {
        q: "I feel embarrassed about my English. Will I be judged in class?",
        a: "The batch is capped at 6 and every person in it is at the same starting point — that is the entire design. There is no ranking, no public scoring and no one is put on the spot cold. Errors are corrected as they happen because that is how correction works, but it is done to the group as a pattern rather than aimed at a person.",
      },
    ],
  },
  "business-english": {
    keywords: [
      "business english course online india",
      "english for working professionals india",
      "corporate english communication course",
      "professional email writing course english",
      "english for client meetings and presentations",
      "workplace english course india fees",
      "business english classes evening batch india",
    ],
    ogImage: "/og/business-english.jpg",
    summary:
      "Business English — 3 months, live batch of max 6, ₹1,199/month. Emails, meetings, presentations, negotiation for working professionals and freshers.",
    extraFaqs: [
      {
        q: "What is the difference between spoken English and business English?",
        a: "Spoken English builds the underlying ability to hold a conversation — grammar, vocabulary, pronunciation, confidence. Business English assumes you already have that and trains the workplace layer on top: writing emails that get replies, opening and closing meetings, disagreeing politely with a senior, pitching an idea in 60 seconds, handling Q&A, and negotiating without burning the relationship. If you cannot yet hold a 5-minute conversation, start with Spoken English first.",
      },
      {
        q: "Is there a Business English course that fits around a full-time job?",
        a: "Yes. Learn With Smile runs early-morning, evening and weekend batches on IST specifically for working professionals, the course is 3 months at ₹1,199/month, and every class is recorded so a missed session because of a work escalation does not set you back.",
      },
    ],
  },
  "interactive-speaking": {
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
      "Interactive Speaking — 3 months, live batch of max 6, ₹999/month. Pure speaking practice through games, debates, role-plays and storytelling.",
    extraFaqs: [
      {
        q: "How do I stop hesitating and freezing when I speak English?",
        a: "Hesitation is almost never a grammar problem — it is a retrieval-speed and confidence problem, and it only responds to repetition under mild pressure. That means speaking daily in a low-stakes group where being wrong costs nothing. Our Interactive Speaking course is built entirely around that: one-minute impromptu topics, word-association warm-ups, structured debates, role-plays and storytelling, three times a week for 3 months, in a batch of six.",
      },
      {
        q: "Is this course useful if my grammar is already good?",
        a: "That is exactly who it is for. Many Indian learners read and write English well but freeze in conversation because they translate mentally before speaking. This course does no grammar teaching — it is 100% live speaking reps designed to move you from translating to thinking directly in English.",
      },
    ],
  },
  ielts: {
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
      "IELTS Preparation — 3 months, live batch of max 6, ₹1,999/month. Academic and General Training, 6+ full-length mocks, live writing feedback, speaking labs.",
    extraFaqs: [
      {
        q: "How much does IELTS coaching cost in India?",
        a: "Learn With Smile charges ₹1,999 per month for 3 months of live IELTS Preparation in a batch of maximum 6, including 6+ full-length mock tests with individual feedback. Indian IELTS coaching generally ranges from about ₹8,000 to ₹35,000 for a full course; large-institute classroom batches sit at the higher end and often run 20–40 students per batch. Note the IELTS exam fee itself is separate and paid to IDP or British Council.",
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
        a: "For IELTS specifically, online is usually better, because the exam is now computer-delivered in most Indian centres and online practice mirrors the real test interface. The two things that move your band are individually corrected writing and one-to-one speaking mocks, and both are easier to deliver in a 6-person online batch than a 30-person classroom.",
      },
    ],
  },
  "interview-prep": {
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
      "Interview Preparation in English — 2 months intensive, live batch of max 6, ₹1,499/month. HR rounds, STAR behavioural answers, 3 recorded mock interviews, resume and LinkedIn review.",
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

const SAME_AS = [CONTACT.whatsapp];

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "LWS",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: abs("/favicon.png"),
      width: 48,
      height: 48,
    },
    image: abs("/og/default.jpg"),
    description:
      "Live online English and career classes for Indian learners — Spoken English, IELTS, Business English, Interactive Speaking, Interview Preparation and Career Counselling. Maximum 6 students per batch or 1:1, from ₹999 per month.",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    foundingDate: "2019",
    founder: { "@type": "Person", name: "Sunanda Dey" },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.locality,
      addressRegion: CONTACT.region,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.country,
    },
    areaServed: { "@type": "Country", name: "India" },
    knowsLanguage: ["en-IN", "hi-IN", "bn-IN"],
    sameAs: SAME_AS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
    ],
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: abs("/og/default.jpg"),
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
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
    areaServed: { "@type": "Country", name: "India" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    sameAs: SAME_AS,
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
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${abs(page.path)}#webpage`,
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
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
 * Builds the full head payload for a page: title, description, keywords,
 * robots directives, canonical, Open Graph, Twitter and JSON-LD.
 */
export function buildHead(opts: {
  path: string;
  title: string;
  description: string;
  keywords: string[];
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
      { name: "keywords", content: opts.keywords.join(", ") },
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
      // Geo targeting — India.
      { name: "geo.region", content: "IN-WB" },
      { name: "geo.placename", content: "Kolkata" },
      { name: "geo.position", content: `${CONTACT.latitude};${CONTACT.longitude}` },
      { name: "ICBM", content: `${CONTACT.latitude}, ${CONTACT.longitude}` },
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
      { name: "twitter:site", content: TWITTER_HANDLE },
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
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "theme-color", content: "#0E7C5A" },
      { name: "geo.region", content: "IN-WB" },
      { name: "geo.placename", content: "Kolkata" },
      { name: "geo.position", content: `${CONTACT.latitude};${CONTACT.longitude}` },
      { name: "ICBM", content: `${CONTACT.latitude}, ${CONTACT.longitude}` },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: SITE_LOCALE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
    ],
    // Site-wide discovery for AI assistants: the llms.txt index is worth
    // finding from any page, not just from robots.txt.
    links: [{ rel: "alternate", type: "text/plain", title: "llms.txt", href: abs("/llms.txt") }],
    // Entity graph for the whole site — correct on every page, and what lets
    // Google and AI assistants resolve "Learn With Smile" to a real business.
    scripts: [organizationLd(), localBusinessLd(), webSiteLd()].map((obj) => ({
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
        ...(page.breadcrumb ?? [{ name: shortName(page), path: page.path }]),
      ]),
    );
  }

  if (page.faqs?.length) jsonLd.push(faqLd(page.faqs));

  return buildHead({
    path: page.path,
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    ogImage: page.ogImage,
    jsonLd,
  });
}

/** Human-readable page name for breadcrumbs — the title before its first separator. */
function shortName(page: PageSeo): string {
  return page.title.split("|")[0].trim();
}

/** Every indexable path on the site, in sitemap order. */
export const ALL_PATHS: string[] = [
  ...Object.keys(PAGES),
  ...Object.keys(COURSE_SEO).map((slug) => `/course-${slug}`),
];
