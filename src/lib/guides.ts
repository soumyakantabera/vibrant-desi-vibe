import type { IconName } from "@/components/Icon";

export type GuideGroup = "choose" | "money" | "work" | "audience" | "city";

export type GuideCard = {
  to: string;
  title: string;
  sub: string;
  icon: IconName;
  color: "brand" | "sunshine" | "coral" | "indigo";
  group: GuideGroup;
};

export const GUIDE_GROUPS: { id: GuideGroup; title: string; blurb: string }[] = [
  { id: "choose", title: "Which class", blurb: "Pick the bottleneck. Do not buy three rooms." },
  { id: "money", title: "Fees & time", blurb: "What it costs, how long it takes, who each option fits." },
  { id: "work", title: "Work English", blurb: "Calls, meetings, decks — clarity, not a fake accent." },
  { id: "audience", title: "Who it is for", blurb: "Beginners, freshers, homemakers, Hindi- or Bengali-medium, IT." },
  { id: "city", title: "Cities", blurb: "Same live online batch. Local commute math. IST timings." },
];

export const GUIDE_CARDS: GuideCard[] = [
  {
    to: "/free-consultation",
    title: "What the free consultation is",
    sub: "We diagnose your bottleneck, answer every query, and place you in one course. Not a class.",
    icon: "spark",
    color: "brand",
    group: "choose",
  },
  {
    to: "/spoken-business-or-interactive-english",
    title: "Which class you need",
    sub: "Spoken, Interactive, Workplace or Interview Preparation. Exam only if a form asks.",
    icon: "compass",
    color: "brand",
    group: "choose",
  },
  {
    to: "/spoken-english-for-beginners-india",
    title: "Spoken English for beginners",
    sub: "From zero: sounds, sentences, a 2-minute turn. 6 months, ₹999/mo.",
    icon: "mic",
    color: "sunshine",
    group: "choose",
  },
  {
    to: "/how-to-speak-english-fluently",
    title: "How to speak English fluently",
    sub: "Fluency is speaking minutes, not 30-day ads. A 6-month map from zero.",
    icon: "record_voice_over",
    color: "indigo",
    group: "choose",
  },
  {
    to: "/interactive-english-class-hesitation",
    title: "When you freeze",
    sub: "You know the words. You go silent. Interactive: talk every hour.",
    icon: "mic",
    color: "coral",
    group: "choose",
  },
  {
    to: "/english-class-fees-india",
    title: "Fees in India",
    sub: "From ₹999/mo inclusive of taxes. What ₹800 vs ₹8,000/month actually buys.",
    icon: "rupee",
    color: "sunshine",
    group: "money",
  },
  {
    to: "/ielts-coaching-fees-india",
    title: "IELTS coaching fees",
    sub: "₹8,000–₹35,000 in the market. We do not sell IELTS. Spoken from ₹999/mo.",
    icon: "trophy",
    color: "brand",
    group: "money",
  },
  {
    to: "/how-long-to-learn-spoken-english",
    title: "How long it takes",
    sub: "6 months from zero. 3 months workplace. 9–12 for Band 7+. Not 30 days.",
    icon: "clock",
    color: "indigo",
    group: "money",
  },
  {
    to: "/best-online-spoken-english-classes-india",
    title: "Compare online classes",
    sub: "Cambly, British Council, local rooms — who each option actually fits.",
    icon: "globe",
    color: "brand",
    group: "money",
  },
  {
    to: "/english-institute-comparison-india",
    title: "Compare institutes, 2026",
    sub: "₹999 live vs PlanetSpark (kids), EngVarta, Cambly, italki. Fees dated 22 Sep 2026.",
    icon: "chart",
    color: "coral",
    group: "money",
  },
  {
    to: "/online-vs-offline-spoken-english-classes",
    title: "Online vs offline classes",
    sub: "Commute vs mic time. A 25–40 student room vs a batch of around 6.",
    icon: "home",
    color: "indigo",
    group: "money",
  },
  {
    to: "/free-english-speaking-practice-vs-paid-class",
    title: "Free practice vs a paid class",
    sub: "Podcasts are free. A syllabus, a correction and a seat are what you pay for.",
    icon: "savings",
    color: "sunshine",
    group: "money",
  },
  {
    to: "/workplace-english-course-online-india",
    title: "Workplace English guide",
    sub: "What to say in meetings, calls, updates and emails — course or self-study.",
    icon: "headset",
    color: "indigo",
    group: "work",
  },
  {
    to: "/english-for-working-professionals-india",
    title: "While you work",
    sub: "Morning, evening, weekend IST. Live class. Recording is revision.",
    icon: "clock",
    color: "indigo",
    group: "work",
  },
  {
    to: "/english-for-it-professionals-india",
    title: "English for IT professionals",
    sub: "Standups, tickets, client calls. Same IST batches. Workplace ₹1,999/mo.",
    icon: "computer",
    color: "brand",
    group: "work",
  },
  {
    to: "/english-for-client-calls-india",
    title: "Client-call English",
    sub: "Names, numbers, next step — clarity, not a fake accent.",
    icon: "headset",
    color: "coral",
    group: "work",
  },
  {
    to: "/english-for-presentations-india",
    title: "Presentations in 3 minutes",
    sub: "One outcome, three beats, one ask. Standups and client decks.",
    icon: "present_to_all",
    color: "sunshine",
    group: "work",
  },
  {
    to: "/spoken-english-for-freshers-india",
    title: "Spoken English for freshers",
    sub: "Campus intro, HR screen, 60-second chair. Interview English in Spoken and Interactive.",
    icon: "school",
    color: "brand",
    group: "audience",
  },
  {
    to: "/spoken-english-for-homemakers-india",
    title: "Spoken English for homemakers",
    sub: "Daytime IST batches. From shops to school meetings. ₹999/mo.",
    icon: "diversity_3",
    color: "coral",
    group: "audience",
  },
  {
    to: "/english-hindi-bengali-medium",
    title: "Hindi & Bengali medium",
    sub: "Explain in your language when a concept stalls, then back to English.",
    icon: "translate",
    color: "sunshine",
    group: "audience",
  },
  {
    to: "/spoken-english-in-hindi",
    title: "Spoken English in Hindi",
    sub: "English बोलना कैसे सीखें — रोज़ का अभ्यास, आम गलतियाँ, 6 महीने का प्लान।",
    icon: "translate",
    color: "coral",
    group: "audience",
  },
  {
    to: "/spoken-english-in-bengali",
    title: "Spoken English in Bengali",
    sub: "ইংরেজি বলতে শিখুন — রোজের অভ্যাস, সাধারণ ভুল, 6 মাসের পরিকল্পনা।",
    icon: "translate",
    color: "brand",
    group: "audience",
  },
  {
    to: "/spoken-english-classes-kolkata",
    title: "Kolkata",
    sub: "Live from Kolkata vs 25–40 student classrooms. Morning, evening, weekend.",
    icon: "location_on",
    color: "coral",
    group: "city",
  },
  {
    to: "/spoken-english-classes-mumbai",
    title: "Mumbai",
    sub: "Skip the local. Same ₹999/mo live batch. Andheri, Thane, Navi Mumbai.",
    icon: "location_on",
    color: "brand",
    group: "city",
  },
  {
    to: "/spoken-english-classes-delhi",
    title: "Delhi NCR",
    sub: "Gurgaon, Noida, Delhi. IST batches. No ring-road commute for class.",
    icon: "location_on",
    color: "indigo",
    group: "city",
  },
  {
    to: "/spoken-english-classes-bengaluru",
    title: "Bengaluru",
    sub: "Whitefield and Koramangala standups. Live online, around 6 learners.",
    icon: "location_on",
    color: "sunshine",
    group: "city",
  },
  {
    to: "/spoken-english-classes-hyderabad",
    title: "Hyderabad",
    sub: "HITEC City and Gachibowli. Client English without a fake accent.",
    icon: "location_on",
    color: "brand",
    group: "city",
  },
];

/** Homepage strip — the converting nine, not the whole catalogue. */
export const FEATURED_GUIDE_PATHS = [
  "/free-consultation",
  "/spoken-business-or-interactive-english",
  "/english-class-fees-india",
  "/how-long-to-learn-spoken-english",
  "/spoken-english-for-beginners-india",
  "/interactive-english-class-hesitation",
  "/english-for-working-professionals-india",
  "/best-online-spoken-english-classes-india",
  "/english-institute-comparison-india",
] as const;

export const FEATURED_GUIDES = FEATURED_GUIDE_PATHS.map(
  (to) => GUIDE_CARDS.find((g) => g.to === to)!,
);

export const FOOTER_GUIDES = [
  { to: "/guides", label: "All English class guides" },
  { to: "/free-consultation", label: "What the free consultation is" },
  { to: "/spoken-business-or-interactive-english", label: "Which class you need" },
  { to: "/english-class-fees-india", label: "English class fees in India" },
  { to: "/how-long-to-learn-spoken-english", label: "How long spoken English takes" },
  { to: "/spoken-english-for-beginners-india", label: "Beginners" },
  { to: "/spoken-english-for-freshers-india", label: "Freshers" },
  { to: "/english-institute-comparison-india", label: "Compare institutes, 2026" },
];
