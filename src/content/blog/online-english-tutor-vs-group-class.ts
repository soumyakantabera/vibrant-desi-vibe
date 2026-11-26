import type { ArticleBody } from "./blocks";

/**
 * /blog/online-english-tutor-vs-group-class
 * Demand (OpenRush, India, Nov 2026): "english tutor online" and variants
 * ~1,300/mo, "online english classes for adults" ~590/mo. The "english tutor
 * online job / hiring" cluster (~1,000/mo) is job-seekers and an ad negative.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "A private online tutor and a small live group both work, for different people. A tutor gives you the most speaking time. A small group gives you a plan and other people to speak in front of. If you freeze at work, that audience is usually what you are missing, and a tutor cannot provide it.",
  },

  { t: "h2", text: "How they compare" },
  {
    t: "table",
    head: ["", "1:1 online tutor", "Small live group (about 6)"],
    rows: [
      ["Your speaking time", "Most of the hour", "Shared, but everyone speaks every class"],
      [
        "Syllabus",
        "Depends on the tutor; many have none",
        "A month-by-month plan with an end date",
      ],
      ["Speaking in front of others", "Never", "Every class"],
      ["Hearing others corrected", "No", "Yes, and you learn from it"],
      ["Same teacher", "Only if you rebook them", "Yes, for the whole batch"],
      ["How you pay", "Per hour or session", "Per month. Ours: ₹1,199–₹2,499, inclusive of taxes"],
    ],
  },

  { t: "h2", text: "When a tutor is the better buy" },
  {
    t: "ul",
    items: [
      "You want accent or pronunciation work on specific sounds.",
      "Your timetable changes every week.",
      "You already speak well and want a conversation partner.",
      "You need a few hours for one thing, like rehearsing a single presentation.",
    ],
  },
  {
    t: "p",
    text: "We do not offer 1:1 lessons. If that is you, a tutor marketplace suits you better, and we will say so if you ask.",
  },

  { t: "h2", text: "When a small group is the better buy" },
  {
    t: "ul",
    items: [
      "You know the words and freeze when people listen.",
      "You want a plan with an end date, and someone who notices when you miss class.",
      "You are a beginner and it helps to hear a pattern from others before you say it.",
      "You want structure without paying by the hour.",
    ],
  },

  { t: "h2", text: "Ask for the headcount" },
  {
    t: "p",
    text: "“Group class” can mean 6 people or 40. In a room of 40 you may not speak at all. Ask any provider for the usual number. Ours is about 6, so everyone speaks in every 90-minute class. The arithmetic is in [how many minutes you speak in a class](/blog/speaking-minutes-in-a-60-minute-class).",
  },

  { t: "h2", text: "Our group courses" },
  {
    t: "table",
    caption: "Inclusive of taxes, billed monthly.",
    head: ["If you…", "Course", "Fee"],
    rows: [
      [
        "cannot hold a basic conversation yet",
        "[Basic Spoken English](/course-spoken-english)",
        "₹1,199/month · 6 months",
      ],
      [
        "speak with errors and fillers",
        "[Intermediate Spoken English](/course-intermediate-english)",
        "₹1,999/month · 4 months",
      ],
      [
        "freeze in meetings, calls or debates",
        "[Interactive Speaking](/course-interactive-speaking)",
        "₹1,599/month · 3 months",
      ],
      [
        "can talk but lose HR rounds",
        "[Interview Preparation](/course-interview-preparation)",
        "₹2,499/month · 2 months",
      ],
    ],
  },
  {
    t: "cta",
    text: "Tell us where you freeze and the slot you can keep. We will suggest one course, or tell you a tutor fits better.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
