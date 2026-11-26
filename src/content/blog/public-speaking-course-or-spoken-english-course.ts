import type { ArticleBody } from "./blocks";

/**
 * /blog/public-speaking-course-or-spoken-english-course
 * Demand (OpenRush, India, Nov 2026): "public speaking course" ~6,600/mo,
 * "public speaking course online" and variants ~1,000/mo. We do not sell a
 * public speaking course. This page says so, and routes the reader to the
 * course that matches their real problem, or away from us.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "People in India often search for a public speaking course when the real problem is English. The reverse happens too. The test is simple. **Could you give the same talk confidently in Hindi, Bengali or your first language?** If yes, your problem is English under pressure, and a spoken English course is the right buy. If you would freeze in any language, your problem is stage fear and structure, and a public speaking course or club is the right buy.",
  },

  { t: "h2", text: "Two different problems" },
  {
    t: "table",
    head: ["", "Public speaking course", "Spoken English course"],
    rows: [
      [
        "Fixes",
        "Stage fear, structure, voice, body language, holding a room",
        "Finding the English words fast enough, grammar, flow, fillers",
      ],
      [
        "Assumes",
        "You can already speak the language comfortably",
        "Nothing; it starts at your level",
      ],
      [
        "Typical format",
        "Prepared speeches, evaluations, clubs, workshops",
        "Conversation, role-plays, correction, then presentations",
      ],
      [
        "You know it worked when",
        "You can hold 30 people for 5 minutes",
        "You stop translating in your head and stop freezing mid-sentence",
      ],
    ],
  },

  { t: "h2", text: "Signs your problem is English, not the stage" },
  {
    t: "ul",
    items: [
      "You prepare a talk well and still lose the sentence halfway through.",
      "You are fine presenting to your own team in your first language.",
      "You avoid questions after a presentation because you cannot predict the English you will need.",
      "You write clear emails but go quiet in calls.",
    ],
  },
  {
    t: "p",
    text: "If two or more are true, a public speaking course will polish delivery on top of a gap it does not fix. Fix the English first.",
  },

  { t: "h2", text: "Signs your problem is the stage, not English" },
  {
    t: "ul",
    items: [
      "You speak English comfortably one-to-one and in small meetings.",
      "Your hands shake and your mind goes blank in front of any audience, in any language.",
      "You have no structure: you ramble and cannot finish on time.",
    ],
  },
  {
    t: "p",
    text: "Then join a public speaking club or course. Toastmasters clubs, for example, meet in most Indian cities and online. We do not sell a public speaking course, and we will tell you so if you message us.",
  },

  { t: "h2", text: "Where presentations fit in our rooms" },
  {
    t: "p",
    text: "If English is the gap, presentations are part of two of our courses. [Interactive Speaking](/course-interactive-speaking) (3 months, ₹1,599/month inclusive of taxes) includes presenting your work and taking Q&A in a batch of about 6, after meetings, calls and debates. [Intermediate Spoken English](/course-intermediate-english) (4 months, ₹1,999/month) ends with a 2–3 minute presentation once your grammar and flow are fixed. For the structure of a work presentation, see [English for presentations](/english-for-presentations-india).",
  },
  {
    t: "table",
    caption: "Pick by what happens when you present in English today.",
    head: ["When you present in English…", "Take"],
    rows: [
      [
        "you cannot build the sentences at all",
        "[Basic Spoken English](/course-spoken-english) · ₹1,199/month",
      ],
      [
        "the sentences come out with tense errors and fillers",
        "[Intermediate Spoken English](/course-intermediate-english) · ₹1,999/month",
      ],
      [
        "you know the English and freeze on questions",
        "[Interactive Speaking](/course-interactive-speaking) · ₹1,599/month",
      ],
      ["you freeze in any language", "A public speaking club or course, not us"],
    ],
  },

  { t: "h2", text: "What it takes, honestly" },
  {
    t: "p",
    text: "No course fixes presenting in English in a weekend workshop. In our rooms you attend up to two 90-minute live classes a week, present in front of the batch, get corrected, and practise for 15–20 minutes on the days between. Progress depends on attendance and that daily practice, so we do not promise a date by which you will stop freezing. Nobody honest can.",
  },
  {
    t: "cta",
    text: "Tell us on WhatsApp what happens when you present in English, and your IST slot. We will say which room fits, or that a public speaking club is the better buy.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
