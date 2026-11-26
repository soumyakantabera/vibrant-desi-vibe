import type { ArticleBody } from "./blocks";

/**
 * /blog/self-paced-english-course-vs-live-class
 * Demand (OpenRush, India, Nov 2026): "rapidex english speaking course" ~8,100/mo,
 * "best english speaking course online" ~4,400, "coursera english speaking course"
 * ~2,900, "british council english speaking course" ~1,300, "udemy english
 * speaking course" ~590. Sources: research_notes/market-research-serious-learners-nov-2026.md.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Four kinds of product are sold as an English speaking course in India: a book like Rapidex, a recorded video course on Coursera or Udemy, a live programme from a big brand like British Council, and a small live batch like ours. Books and videos teach you what to say. You learn to say it under pressure by speaking to someone who listens and corrects you. Work out which of those you lack before comparing prices.",
  },

  { t: "h2", text: "What each one trains" },
  {
    t: "table",
    head: ["Format", "Good at", "Cannot do", "Suits"],
    rows: [
      [
        "Book (e.g. Rapidex)",
        "Sentence patterns, vocabulary, Hindi-to-English",
        "Hear you or correct you",
        "Disciplined beginners on a tight budget",
      ],
      [
        "Recorded video (Coursera, Udemy)",
        "Clear explanations at your own pace; certificates on some platforms",
        "Notice your mistakes",
        "People who already speak and want structured input",
      ],
      [
        "Big-brand live course (e.g. British Council)",
        "CEFR levels A1–C1 and a known name",
        "Small-batch prices",
        "Learners who want the brand",
      ],
      [
        "Small live batch (about 6)",
        "Speaking every class, live correction, one teacher",
        "Classes at any hour; certificates",
        "Adults who freeze when someone is listening",
      ],
    ],
  },

  { t: "h2", text: "Most people do not finish self-paced courses" },
  {
    t: "p",
    text: "In six years of Harvard and MIT courses on edX, published in Science in 2019, 52% of people who registered never opened the material. Among people who meant to finish, about 1 in 5 earned the certificate. A self-paced course works if discipline is something you already have.",
  },
  {
    t: "p",
    text: "A video also cannot hear you say “I am having two brothers”, or notice the four-second pause before you answer.",
  },

  { t: "h2", text: "What a big-brand course costs" },
  {
    t: "p",
    text: "British Council India sells adult classes as credits. Its India pricing page lists 10 credits for 15 hours at ₹10,350, and a group class on its English Online platform uses 1 credit for 55 minutes. Prices change, so check their page. Pay for it if the name matters to you. We teach the same speaking practice in batches of about 6 for ₹1,199–₹2,499 a month, inclusive of taxes.",
  },

  { t: "h2", text: "A combination that works" },
  {
    t: "ol",
    items: [
      "Use a book or free videos to learn patterns and words. This costs little.",
      "Use a live class at least twice a week to speak and get corrected. This is worth paying for.",
      "Use an app for short practice between classes. Studies from 2025 found AI speaking tools can ease speaking anxiety; none we found showed them replacing a teacher.",
    ],
  },

  { t: "h2", text: "Our live courses" },
  {
    t: "table",
    caption: "Inclusive of taxes. About 6 per batch, 90-minute classes, up to 2 a week.",
    head: ["After the book or videos, you still…", "Course", "Fee"],
    rows: [
      [
        "cannot say a full sentence without stopping",
        "[Basic Spoken English](/course-spoken-english)",
        "₹1,199/month · 6 months",
      ],
      [
        "speak with tense errors and fillers",
        "[Intermediate Spoken English](/course-intermediate-english)",
        "₹1,999/month · 4 months",
      ],
      [
        "freeze in meetings or calls",
        "[Interactive Speaking](/course-interactive-speaking)",
        "₹1,599/month · 3 months",
      ],
      [
        "freeze only in interviews",
        "[Interview Preparation](/course-interview-preparation)",
        "₹2,499/month · 2 months",
      ],
    ],
  },

  { t: "h2", text: "When we are the wrong choice" },
  {
    t: "ul",
    items: [
      "You need a certificate. We do not issue one.",
      "You need an IELTS, PTE or TOEFL score.",
      "You can only study at random hours. Our classes run in fixed afternoon, evening and night IST slots.",
      "You are not sure you want to pay yet. Start with a book or a free course and come back when speaking is the gap.",
    ],
  },
  {
    t: "cta",
    text: "Done the book or the videos and still freeze? Message us your level and the slot you can keep.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
