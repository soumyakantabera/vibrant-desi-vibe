/**
 * What the free consultation actually is — one source, used by the booking
 * page, FAQs, JSON-LD, llms.txt / llms.json, and the OpenAPI for ChatGPT Actions.
 *
 * Visible copy never calls this a class. People who search "free demo class"
 * still match via meta keywords; the page they land on tells them the truth.
 */
import type { IconName } from "@/components/Icon";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const CONSULTATION_PATH = "/book-free-demo";

export const CONSULTATION = {
  cta: "Get Free Consultation",
  free: true,
  paymentToBook: false,
  isAClass: false,
  isADemoClass: false,
  channel: "WhatsApp",
  hours: "09:00–12:00 IST",
  phoneDisplay: WHATSAPP_DISPLAY,
  /** Brutal line — we show the room before money. */
  headline: "We don't sell the room until you see it.",
  /** Magnet under every consultation button. */
  hook: "Free spoken English consultation. Small batch. See the course before you pay.",
  punch:
    "Other institutes pitch a class. We put the spoken English bottleneck, the course and the fee in writing. Then you enrol — or you walk. Still free. Not a class.",
  pills: ["100% free", "Small batch", "Spoken English", "Fee in writing"],
  /** One line for heroes, JSON-LD and assistants. */
  what: "100% free small-batch spoken English consultation. Personalised advice: we hear each person's requirements one by one, name the bottleneck, show the course and the fee in writing — then you decide. Not a packed pitch. Not a class.",
  /** Bing Copilot / GEO grounding on every page (`data-snippet`). */
  copilotSnippet:
    "Get a free spoken English consultation. Small batch. Personalised advice. We don't sell the room until you see it. Not a class. WhatsApp +91 96744 79949.",
} as const;

/** Same three cards on /book-free-demo and the sitewide yellow band. White type, brand colours. */
export const PROOF_CARD_CLASS = {
  coral: "consult-card bg-[#C84D3F] text-white",
  indigo: "consult-card bg-[#3D3DB8] text-white",
  sun: "consult-card bg-[#0E7C5A] text-white",
} as const;

export const CONSULTATION_PROOF: {
  icon: IconName;
  kicker: string;
  title: string;
  body: string;
  tone: "coral" | "indigo" | "sun";
}[] = [
  {
    icon: "compass",
    kicker: "See",
    title: "The bottleneck",
    body: "Named in one sentence. Spoken, freeze, workplace, interview, or career.",
    tone: "coral",
  },
  {
    icon: "book",
    kicker: "Get",
    title: "One course, in writing",
    body: "Fee, duration, batch size, IST slot. Or an honest “this is not us”.",
    tone: "indigo",
  },
  {
    icon: "shield",
    kicker: "Then",
    title: "You decide",
    body: "Enrol, or walk. Still free. We do not take money until you have seen the room.",
    tone: "sun",
  },
];

export const CONSULTATION_WALK_AWAY: {
  icon: IconName;
  color: "brand" | "sunshine" | "coral" | "indigo";
  title: string;
  body: string;
}[] = [
  {
    icon: "compass",
    color: "brand",
    title: "Your bottleneck, named",
    body: "Cannot form a sentence, freeze on words you already have, business English, interview English, or a career choice. We say which one is actually in the way — in one sentence.",
  },
  {
    icon: "check",
    color: "sunshine",
    title: "One course, not three",
    body: "Spoken, Interactive, Workplace, Interview Preparation, or 1:1 Career Counselling — with fee, duration, batch size and IST slots in writing on WhatsApp. Or we tell you the right buy is not us.",
  },
  {
    icon: "book",
    color: "indigo",
    title: "Every query, answered",
    body: "Fees, GST, recordings, refunds, Hindi or Bengali support, certificate, IELTS, kids, timings. If we cannot answer it in the session, we say so and follow up in writing.",
  },
  {
    icon: "shield",
    color: "coral",
    title: "Permission to walk away",
    body: "100% free. Small batch. Personalised advice. No payment to book. No obligation to enrol. If a podcast and a speaking partner are enough, we will say that.",
  },
];

export const CONSULTATION_STEPS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "whatsapp",
    title: "Message WhatsApp",
    body: "Tap Get Free Consultation. WhatsApp opens with a message ready to send. 100% free. Small batch. Personalised advice.",
  },
  {
    icon: "clock",
    title: "We reply 09:00–12:00 IST",
    body: "We confirm a small-batch counselling slot. Phone is a fallback only if you ask.",
  },
  {
    icon: "mic",
    title: "Personalised advice for your problem",
    body: "Shop, freeze, standup, HR screen, career change, visa form — whatever you actually need English for. We ask each person, one by one. Small batch, not a packed pitch.",
  },
  {
    icon: "compass",
    title: "We name the bottleneck and the room",
    body: "One recommendation. Fee, duration and IST slot in writing. You decide. You do not sit a full class for free.",
  },
];

export const CONSULTATION_BOTTLENECKS: {
  icon: IconName;
  ifThis: string;
  weName: string;
  weRecommend: string;
  href: string;
}[] = [
  {
    icon: "mic",
    ifThis: "Cannot finish a sentence in a shop or on a phone call",
    weName: "Spoken English is the gap",
    weRecommend: "Spoken English — 6 months, ₹999/mo, ≈6 learners",
    href: "/course-spoken-english",
  },
  {
    icon: "record_voice_over",
    ifThis: "You know the words. You freeze when you speak.",
    weName: "Freeze is the gap, not grammar",
    weRecommend: "Interactive Speaking — 3 months, ₹1,199/mo",
    href: "/course-interactive-speaking",
  },
  {
    icon: "headset",
    ifThis: "Chat is fine. Meetings, calls or emails are not.",
    weName: "Business English is the gap",
    weRecommend: "Business English — 3 months, ₹1,999/mo",
    href: "/course-business-english",
  },
  {
    icon: "clipboard",
    ifThis: "Interviews fail on the 60-second intro, not the CV",
    weName: "Interview English is the gap",
    weRecommend: "Interview Preparation — 2 months, ₹1,999/mo, recorded mocks",
    href: "/course-interview-preparation",
  },
  {
    icon: "compass",
    ifThis: "The question is which career, not which tense",
    weName: "Career choice is the gap",
    weRecommend: "1:1 Career Counselling — ₹1,999 total, 3 × 60 min",
    href: "/course-career-counselling",
  },
  {
    icon: "school",
    ifThis: "A visa, university or HR form asks for a band",
    weName: "That is an exam paper, not our room",
    weRecommend: "Sit IELTS with IDP or British Council. We do not sell it.",
    href: "/ielts-coaching-fees-india",
  },
];

export const CONSULTATION_QUERIES: { icon: IconName; text: string }[] = [
  {
    icon: "compass",
    text: "Which course do I actually need — Spoken, Interactive, Workplace, Interview Preparation, or counselling?",
  },
  { icon: "rupee", text: "What is the fee, and is GST included?" },
  {
    icon: "users",
    text: "How many learners are in the room, and how many minutes will I speak?",
  },
  { icon: "clock", text: "What IST batch can I join around a job or a home day?" },
  {
    icon: "languages",
    text: "Can the teacher explain in Hindi or Bengali when a concept stalls?",
  },
  {
    icon: "trophy",
    text: "Do you issue a certificate? Do I need IELTS for a job in India?",
  },
  {
    icon: "shield",
    text: "Is this for children? (Adult rooms are 15+. We will say no if it is a child.)",
  },
  {
    icon: "clipboard",
    text: "What happens if I miss a class, and what is the refund rule after I pay?",
  },
];

export const CONSULTATION_NOT_THIS: { icon: IconName; text: string }[] = [
  {
    icon: "play",
    text: "Not a sample of the paid hour. You will not get 8–10 minutes on a mic. That is the paid room.",
  },
  {
    icon: "x-circle",
    text: "Not a placement test with a score. The diagnosis is a sentence: which bottleneck, which room.",
  },
  {
    icon: "ban",
    text: "Not a counsellor pitch that hides the fee. Fee, duration and slot come in writing on WhatsApp.",
  },
  {
    icon: "trophy",
    text: "Not a promise of fluency, a job, a band, or a certificate.",
  },
];

/**
 * The specialty versus what other institutes sell as a "free session".
 * Named, specific, and honest about when they win.
 */
export const CONSULTATION_VS_MARKET: {
  icon: IconName;
  them: string;
  theirSession: string;
  weDoInstead: string;
}[] = [
  {
    icon: "spark",
    them: "PlanetSpark-style kids 1:1",
    theirSession: "A free demo class for a child (typically 4–13). Public speaking packages often ₹13,000–₹65,000 per course.",
    weDoInstead: "We do not take children. Adults 15+ get a free consultation — counselling, not a demo class — then a live batch of ≈6 from ₹999/mo.",
  },
  {
    icon: "headset",
    them: "EngVarta-style 1:1 apps",
    theirSession: "No counselling. You pick a 15-minute call and talk. Useful after you can already speak.",
    weDoInstead: "We name the bottleneck first. Beginners who cannot form a sentence should not buy 1:1 minutes yet.",
  },
  {
    icon: "globe",
    them: "Cambly / native-speaker apps",
    theirSession: "Tutor lottery. Accent and idiom. ₹8,000–₹15,000/month if daily. No 6-month map.",
    weDoInstead: "A named teacher, a syllabus, ≈6 learners, from ₹999/mo. Native chat is a later buy.",
  },
  {
    icon: "school",
    them: "British Council English Online",
    theirSession: "Counsellor pitch for a CEFR module, often ₹8,800–₹16,000 for six classes. Buy it for the badge.",
    weDoInstead: "We say if you need that badge. If you need speaking for work in India, the room is cheaper and smaller.",
  },
  {
    icon: "users",
    them: "Veta-style / city classrooms",
    theirSession: "Walk-in. Sit in 25–40, or a pitch that still will not print the cap. Commute on top.",
    weDoInstead: "Cap is approximately 6, printed. Consultation is a small batch with personalised advice, not a packed room you sample.",
  },
  {
    icon: "trophy",
    them: "Exam shops (EEC-style visa stack)",
    theirSession: "The free session sells IELTS/PTE. Spoken is an add-on. Fine if the visa is the goal.",
    weDoInstead: "If no form asked for a band, we will tell you IELTS is the wrong buy. We do not sell that paper.",
  },
];

export const CONSULTATION_FAQS: { q: string; a: string }[] = [
  {
    q: "What do I actually get in the free consultation?",
    a: "It is 100% free, in a small batch, with personalised advice — we hear each person's requirements one by one. Four things, in writing on WhatsApp: (1) a named diagnosis of your bottleneck — cannot hold a conversation, freeze, business English, interview English, or career choice; (2) one course recommendation with fee, duration, batch size and IST slots, or an honest ‘this is not us’; (3) answers to the questions you brought — fees, GST, recordings, refunds, Hindi/Bengali, certificate, IELTS, kids, timings; (4) no obligation to enrol. It is counselling, not a class.",
  },
  {
    q: "How is your free consultation different from other institutes’ free sessions?",
    a: "Most free sessions in India are either a counsellor pitch or 20 minutes in a crowded room. Apps like EngVarta skip counselling entirely — you just talk. Brand-name groups pitch a CEFR module. Exam shops pitch IELTS. Learn With Smile is a small-batch consultation with personalised advice: we diagnose the bottleneck, answer every query, and place you in one course — or tell you to stay free. You will not sit a full class for free. Speaking minutes are the paid room, approximately 6 learners, from ₹999/month inclusive of taxes.",
  },
  {
    q: "How do I get a free consultation at Learn With Smile?",
    a: `Tap Get Free Consultation — it opens WhatsApp with a message ready to send. Or message ${WHATSAPP_DISPLAY}. 100% free. Small batch. Personalised advice. We reply 09:00–12:00 IST. No payment, card or UPI to book.`,
  },
  {
    q: "Will every question I have be answered in the consultation?",
    a: "Every question about our courses, fees, batch, timings, syllabus, who the room is for, and whether you belong here. That is the point of the session. If a question needs a timetable we do not have in front of us, we say so and send it on WhatsApp after. We will not invent a batch that does not exist.",
  },
  {
    q: "How do you decide which course I should take?",
    a: "From the problem you describe, not from a brochure. Cannot finish a sentence → Spoken English (6 months, ₹999/month, approximately 6 learners). Know the words and freeze → Interactive Speaking (3 months, ₹1,199/month). Chat is fine, meetings and calls are not → Business English (3 months, ₹1,999/month). Interviews fail on the 60-second intro → Interview Preparation (2 months, ₹1,999/month). Career choice → paid 1:1 Career Counselling (₹1,999 total) — not the free consultation. Visa or university form → sit IELTS with the test board; we do not sell that paper. One room, not three.",
  },
  {
    q: "Is the free consultation a full English class?",
    a: "No. People sometimes expect a full class for free. The consultation is 100% free, in a small batch, with personalised advice: we diagnose the bottleneck, discuss courses and curriculum, and understand each person's requirements one by one. You enrol only if the format fits. Speaking minutes happen in the paid batch.",
  },
  {
    q: "Will you call me after I send my WhatsApp number?",
    a: "Not unless you ask. WhatsApp is the default admissions channel because it keeps the diagnosis, course, fee and batch details in one written conversation. Phone is available only as a fallback. The team replies on WhatsApp during 09:00–12:00 IST.",
  },
];

export const CONSULTATION_HOWTO = {
  name: "How to get a free English consultation",
  description:
    "Book a free small-batch counselling session. Learn With Smile gives personalised advice: diagnoses your English bottleneck, answers your questions, and recommends one course. It is not a class.",
  totalTime: "PT20M",
  steps: CONSULTATION_STEPS.map((s) => `${s.title}. ${s.body}`),
} as const;
