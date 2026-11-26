import type { ArticleBody } from "./blocks";

/**
 * /blog/public-speaking-course-or-spoken-english-course
 * Demand (OpenRush, India, Nov 2026): "public speaking course" ~6,600/mo,
 * "public speaking course online" and variants ~1,000/mo. We do not sell a
 * public speaking course and the page says so.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Ask yourself one question: could you give the same talk confidently in Hindi, Bengali or your first language? If yes, the problem is English under pressure, and a spoken English course fits. If you would freeze in any language, the problem is stage fear and structure, and a public speaking course or club fits.",
  },

  { t: "h2", text: "Two different problems" },
  {
    t: "table",
    head: ["", "Public speaking course", "Spoken English course"],
    rows: [
      [
        "Fixes",
        "Stage fear, structure, voice, holding a room",
        "Finding the words fast, grammar, flow, fillers",
      ],
      ["Assumes", "You already speak the language comfortably", "Nothing; it starts at your level"],
      [
        "Format",
        "Prepared speeches, evaluations, clubs",
        "Conversation, role-plays, correction, then presentations",
      ],
      [
        "You know it worked when",
        "You can hold 30 people for 5 minutes",
        "You stop translating in your head mid-sentence",
      ],
    ],
  },

  { t: "h2", text: "Signs English is the problem" },
  {
    t: "ul",
    items: [
      "You prepare well and still lose the sentence halfway through.",
      "You present fine to your team in your first language.",
      "You dread the Q&A because you cannot predict the English you will need.",
      "Your emails are clear, but you go quiet on calls.",
    ],
  },
  {
    t: "p",
    text: "If two or more sound like you, fix the English first. A public speaking course will polish delivery but leave the gap.",
  },

  { t: "h2", text: "Signs the stage is the problem" },
  {
    t: "ul",
    items: [
      "You speak English easily one-to-one and in small meetings.",
      "Your mind goes blank in front of any audience, in any language.",
      "You ramble and cannot finish on time.",
    ],
  },
  {
    t: "p",
    text: "Then a public speaking club or course is the better choice. Toastmasters clubs meet in most Indian cities and online. We do not run a public speaking course.",
  },

  { t: "h2", text: "Where presentations fit in our courses" },
  {
    t: "p",
    text: "[Interactive Speaking](/course-interactive-speaking) (3 months, ₹1,599/month, inclusive of taxes) includes presenting your work and taking questions in a batch of about 6, after meetings, calls and debates. [Intermediate Spoken English](/course-intermediate-english) (4 months, ₹1,999/month) ends with a 2–3 minute presentation. For structuring a work presentation, see [English for presentations](/english-for-presentations-india).",
  },
  {
    t: "table",
    caption: "Pick by what happens when you present in English today.",
    head: ["When you present in English…", "Take"],
    rows: [
      [
        "you cannot build the sentences",
        "[Basic Spoken English](/course-spoken-english) · ₹1,199/month",
      ],
      [
        "the sentences come out with errors and fillers",
        "[Intermediate Spoken English](/course-intermediate-english) · ₹1,999/month",
      ],
      [
        "you know the English and freeze on questions",
        "[Interactive Speaking](/course-interactive-speaking) · ₹1,599/month",
      ],
      ["you freeze in any language", "A public speaking club or course"],
    ],
  },

  { t: "h2", text: "What it takes" },
  {
    t: "p",
    text: "Up to two 90-minute live classes a week, presenting in front of the batch, and 15–20 minutes of practice on the other days. How fast you improve depends on that practice, so we do not promise a date.",
  },
  {
    t: "cta",
    text: "Tell us what happens when you present in English. We will suggest a course, or tell you a club suits you better.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
