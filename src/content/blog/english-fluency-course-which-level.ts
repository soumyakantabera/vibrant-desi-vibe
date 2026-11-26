import type { ArticleBody } from "./blocks";

/**
 * /blog/english-fluency-course-which-level
 * Demand (OpenRush, India, Nov 2026): "english speaking fluency course" ~1,000/mo,
 * "english fluency course" ~880/mo, "fluent english speaking course" ~1,000/mo,
 * "professional english speaking course" ~720/mo.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Most English courses in India call themselves fluency courses. The label covers four different problems: you cannot build the sentence, you build it slowly and with mistakes, you know it and freeze, or you are fine until someone judges you. Each one needs a different course, and the wrong one can cost you three to six months.",
  },

  { t: "h2", text: "Fluency and accuracy" },
  {
    t: "p",
    text: "Teachers separate the two. Fluency is how smoothly you keep talking, without long pauses or translating in your head. Accuracy is how correct the English is. Plenty of professionals write correct emails and go quiet in meetings. Plenty of others talk fast with a tense error in every line. Most people searching for a fluency course have one of these gaps, rarely both.",
  },
  {
    t: "p",
    text: "Cambridge English estimates about 180–200 guided learning hours to reach A2 on the CEFR scale, 350–400 for B1 and 500–600 for B2, counted from zero. Two 90-minute classes a week add up to about 12 live hours a month, so the daily 15–20 minutes between classes matters as much as the classes. Treat any promise of fluency in 30 days as an advert.",
  },

  { t: "h2", text: "Find your level in a minute" },
  {
    t: "table",
    caption: "Pick the first row that is true for you today.",
    head: ["Can you do this out loud?", "Your gap", "Rough CEFR"],
    rows: [
      ["Introduce yourself for 30 seconds without stopping", "Building sentences", "Below A2"],
      ["Talk about your day for 60 seconds, with errors and fillers", "Accuracy and flow", "A2–B1"],
      [
        "Write it correctly, then go silent in a meeting or call",
        "Speaking under pressure",
        "B1–B2",
      ],
      [
        "Chat easily, then lose structure in an interview",
        "Answers under judgement",
        "B1 and above",
      ],
    ],
  },
  {
    t: "p",
    text: "Not sure? The free [level test](/english-speaking-level-test) takes a minute and has Hindi and Bengali versions.",
  },

  { t: "h2", text: "Which course for which gap" },
  {
    t: "table",
    caption:
      "Fees inclusive of taxes. Live online, about 6 per batch, 90-minute classes, up to 2 a week.",
    head: ["Your gap", "Course", "Length and fee", "Total"],
    rows: [
      [
        "Building sentences",
        "[Basic Spoken English](/course-spoken-english)",
        "6 months · ₹1,199/month",
        "₹7,194",
      ],
      [
        "Accuracy and flow",
        "[Intermediate Spoken English](/course-intermediate-english)",
        "4 months · ₹1,999/month",
        "₹7,996",
      ],
      [
        "Speaking under pressure",
        "[Interactive Speaking](/course-interactive-speaking)",
        "3 months · ₹1,599/month",
        "₹4,797",
      ],
      [
        "Answers under judgement",
        "[Interview Preparation](/course-interview-preparation)",
        "2 months · ₹2,499/month",
        "₹4,998",
      ],
    ],
  },
  {
    t: "p",
    text: "You pay one month at a time, with no EMI or auto-debit. If you think in Hindi or Bengali, Basic is also taught through [Hindi](/course-spoken-english-hindi) or [Bengali](/course-spoken-english-bengali) at the same fee.",
  },

  { t: "h2", text: "Mistakes we see often" },
  {
    t: "ul",
    items: [
      "A beginner buys a conversation app or a 1:1 chat tutor before they can build a sentence. Start with Basic.",
      "A B1 professional buys a grammar course. They know the rules already; they need practice under pressure.",
      "Someone buys Interview Preparation for general fluency. It is a two-month sprint that assumes you already talk.",
      "Someone buys three courses at once. Fix one gap first.",
    ],
  },

  { t: "h2", text: "Who this is not for" },
  {
    t: "p",
    text: "Children under 15, anyone who needs an exam score or certificate, anyone who wants 1:1 lessons, and anyone who cannot keep a fixed afternoon, evening or night IST slot for at least two months.",
  },
  {
    t: "cta",
    text: "Tell us your level, the situation you want to fix and the slot you can keep. A teacher replies with one course and the fee.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
