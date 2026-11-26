import type { ArticleBody } from "./blocks";

/**
 * /blog/online-english-tutor-vs-group-class
 * Demand (OpenRush, India, Nov 2026): "english tutor online" and its variants
 * ~1,300/mo, "online english classes for adults" ~590/mo. Note: the "english tutor
 * online job / hiring" cluster (~1,000/mo) is job-seekers, not learners. It is
 * an ad negative, and this page does not target it.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "A private online English tutor and a small live group class are different products, and both work for the right person. Before you pay for either, decide what you are actually short of: **speaking minutes**, **structure**, or **pressure**. A 1:1 tutor gives you the most minutes. A small group gives you structure and other people to speak in front of. Most adults who freeze at work are short of the last one, and a tutor cannot supply it.",
  },

  { t: "h2", text: "The honest comparison" },
  {
    t: "table",
    head: ["", "1:1 online tutor", "Small live group (about 6)"],
    rows: [
      [
        "Your speaking time per hour",
        "Highest: most of the hour is yours",
        "Lower: shared, but every learner speaks every class",
      ],
      [
        "Syllabus",
        "Depends on the tutor. Many marketplaces have none.",
        "Fixed month-by-month plan with a finish line",
      ],
      [
        "Speaking in front of others",
        "Never. One friendly listener.",
        "Every class: the closest thing to a meeting or interview",
      ],
      [
        "Hearing other learners’ mistakes corrected",
        "No",
        "Yes, and it is one of the fastest ways to learn",
      ],
      [
        "Same teacher every time",
        "Only if you book the same tutor",
        "Yes, the same teacher for the batch",
      ],
      [
        "Typical cost model",
        "Per hour or per session",
        "Per month. Ours: ₹1,199–₹2,499/month, inclusive of taxes",
      ],
    ],
  },

  { t: "h2", text: "When a 1:1 tutor is the right buy" },
  {
    t: "ul",
    items: [
      "You need **accent or pronunciation work** on specific sounds and want every minute on your own mouth.",
      "Your timetable changes every week, so no fixed slot will work for you.",
      "You already speak well and want a **conversation partner** to keep the habit, not a course.",
      "You have one very specific goal, such as rehearsing one presentation, and need a few hours, not months.",
    ],
  },
  {
    t: "p",
    text: "We do not offer 1:1 tutoring. If one of those is you, a tutor marketplace is the better fit, and we will tell you so in the consultation.",
  },

  { t: "h2", text: "When a small group is the right buy" },
  {
    t: "ul",
    items: [
      "You **know the words and freeze** when someone is listening. The fix is speaking in front of people, again and again, in a room where mistakes are cheap.",
      "You need a **plan with an end date** and someone who notices if you stop turning up.",
      "You are a beginner who benefits from hearing the same sentence pattern from five other learners before saying it yourself.",
      "You want the price of a structured course without paying per hour.",
    ],
  },

  { t: "h2", text: "The batch-size test that matters more than 1:1 vs group" },
  {
    t: "p",
    text: "“Group class” covers rooms of 6 and rooms of 40. In a 40-person room you may not speak at all. Ask any provider for the usual headcount as a number, not “small batch”. Our batches are about 6 learners, so every learner speaks in every 90-minute class. The arithmetic is in [how many minutes you speak in a class](/blog/speaking-minutes-in-a-60-minute-class).",
  },

  { t: "h2", text: "Which of our rooms fits a group learner" },
  {
    t: "table",
    caption: "Inclusive of taxes. Billed one month at a time.",
    head: ["If you…", "Room", "Fee"],
    rows: [
      [
        "cannot yet hold a basic conversation",
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
        "can talk, but fail HR rounds",
        "[Interview Preparation](/course-interview-preparation)",
        "₹2,499/month · 2 months",
      ],
    ],
  },

  { t: "h2", text: "Before you message us" },
  {
    t: "p",
    text: "Tell us your level (or your [level test](/english-speaking-level-test) score), the situation you freeze in, the IST slot you can attend (afternoon, evening or night), and whether you want Hindi or Bengali explanations. With those four facts we can recommend one room, or tell you honestly that a 1:1 tutor suits you better.",
  },
  {
    t: "cta",
    text: "Get a free group consultation. We name your bottleneck and recommend one room, or say “not us”.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
