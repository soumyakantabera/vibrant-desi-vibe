import type { ArticleBody } from "./blocks";

/**
 * /blog/self-paced-english-course-vs-live-class
 * Demand (OpenRush, India, Nov 2026): "rapidex english speaking course" ~8,100/mo,
 * "best english speaking course online" ~4,400, "coursera english speaking course"
 * ~2,900, "british council english speaking course" ~1,300, "udemy english
 * speaking course" ~590. Every number here is in
 * research_notes/market-research-serious-learners-nov-2026.md with its source.
 * No competitor price is quoted that we could not verify.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Four kinds of product get sold as an “English speaking course”: a **book** (Rapidex is the famous one), a **recorded video course** (Coursera, Udemy and similar), a **structured live programme from a large brand** (British Council is the best known), and a **small live batch** like ours. They train different things. A book and a video can teach you what to say. Only practice with someone listening trains you to say it under pressure. Decide which of those you are short of before you compare prices.",
  },

  { t: "h2", text: "What each format actually trains" },
  {
    t: "table",
    head: ["Format", "Good at", "Cannot do", "Best for"],
    rows: [
      [
        "Book (e.g. Rapidex)",
        "Sentence patterns, vocabulary, translation from Hindi",
        "Hear you, correct you, make you speak",
        "Self-disciplined beginners on a near-zero budget",
      ],
      [
        "Recorded video (Coursera, Udemy)",
        "Explaining rules and phrases clearly; any time, any pace; a certificate on some platforms",
        "Notice your mistakes; put you in front of a listener",
        "People who already speak and want structured input",
      ],
      [
        "Large-brand live programme (e.g. British Council)",
        "CEFR-mapped levels, a recognised name, A1–C1",
        "Match a small-batch price; the same small group every class",
        "Learners who want the brand and can pay for it",
      ],
      [
        "Small live batch (about 6)",
        "Speaking every class, live correction, a named teacher",
        "Work at 3 a.m.; give you a certificate",
        "Adults who freeze when someone is listening",
      ],
    ],
  },

  { t: "h2", text: "The completion problem nobody advertises" },
  {
    t: "p",
    text: "Self-paced courses are cheap or free to start, and most people never finish them. In Harvard and MIT’s data from six years of edX courses, published in *Science* in 2019, **52% of people who registered never opened the course material**. Among learners who said at the start that they intended to finish, roughly **1 in 5** earned the certificate. That is not a criticism of the courses. It means a self-paced course only works if your own discipline is the part you are not short of.",
  },
  {
    t: "p",
    text: "Speaking is also the one English skill a recording cannot assess. A video can play a model sentence. It cannot hear that you said “I am having two brothers”, or that you went silent for four seconds before answering.",
  },

  { t: "h2", text: "What a big-brand live course costs" },
  {
    t: "p",
    text: "British Council India sells adult classes as credit packages. One package on its India pricing page is 10 credits for 15 hours at ₹10,350, and group classes on its global English Online platform are 55 minutes for 1 credit. Prices and offers change, so check their current page before you compare. Pay for that if a recognised brand name matters to you. We are not trying to beat it on brand. We teach the same speaking reps in a batch of about 6, with the same teacher, for ₹1,199–₹2,499 a month inclusive of taxes.",
  },

  { t: "h2", text: "A sensible combination for a serious learner" },
  {
    t: "ol",
    items: [
      "**Use a book or a free video for input.** Patterns, vocabulary, rules. This costs little or nothing.",
      "**Use a live room for output.** Speaking with correction, at least twice a week. This is the part worth paying for.",
      "**Use an app for daily reps between classes.** 2025 studies found AI speaking tools can lower speaking anxiety and help practice. None we found showed them replacing a teacher; several concluded they work best alongside one.",
    ],
  },
  {
    t: "p",
    text: "If you already have the input and only lack the output, you need a live room, not another course with videos.",
  },

  { t: "h2", text: "Which of our rooms, if you choose live" },
  {
    t: "table",
    caption: "Inclusive of taxes. About 6 learners, 90-minute classes, up to 2 a week.",
    head: ["After the book or video, you still…", "Room", "Fee"],
    rows: [
      [
        "cannot speak a full sentence aloud without stopping",
        "[Basic Spoken English](/course-spoken-english)",
        "₹1,199/month · 6 months",
      ],
      [
        "speak, but with tense errors and fillers",
        "[Intermediate Spoken English](/course-intermediate-english)",
        "₹1,999/month · 4 months",
      ],
      [
        "know it all and freeze in meetings or calls",
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

  { t: "h2", text: "When we are the wrong buy" },
  {
    t: "ul",
    items: [
      "You need a certificate for a form or a CV line. We do not issue one. A recorded course with a certificate, or an exam board, fits better.",
      "You need an IELTS, PTE or TOEFL score. Sit the exam with its own coaching.",
      "You can only study at random hours. Our classes are live in fixed afternoon, evening and night IST slots.",
      "You want to try for free first and are not yet sure you want to pay at all. Start with a book or a free course; come back when speaking is the gap.",
    ],
  },
  {
    t: "cta",
    text: "Already done the book or the videos and still freeze? Tell us your level, the situation and your IST slot on WhatsApp. We reply with one room, in writing.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
