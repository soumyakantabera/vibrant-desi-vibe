import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "English classes are sold in **months**. Fluency is built in **minutes you spoke**. A 60-minute class with 8 people and a 60-minute class with 35 people are not the same product. Here is the arithmetic we use in every demo, and the bands we see across India in 2026.",
  },

  { t: "h2", text: "The formula" },
  {
    t: "p",
    text: "Teacher talk + instructions + one example ≈ 15–20 minutes of a 60-minute hour. The remaining **40–45 minutes** is the speaking pool. Divide by the number of learners who actually get a turn.",
  },
  {
    t: "table",
    caption: "Your mic, one 60-minute class. Assumes the teacher is not lecturing the whole hour.",
    head: ["Batch", "Speaking pool", "Your minutes"],
    rows: [
      ["1:1 (Cambly, EngVarta)", "50–55 min", "50–55 min — no classmates, no syllabus required"],
      ["Max 8 (Learn With Smile)", "40–45 min", "6–8 min of you, plus hearing 7 peers"],
      ["8–12 (British Council-style group)", "40–45 min", "4–6 min"],
      ["25–40 (typical city classroom)", "40–45 min", "1–2 min, often a round-robin once a week"],
    ],
  },
  {
    t: "p",
    text: "Over **6 months, 2 classes/week** that is roughly **48 hours of class**. Your spoken minutes:",
  },
  {
    t: "ul",
    items: [
      "Max 8 → about **5–6 hours of you speaking** in 6 months.",
      "30-student room → about **1–1.5 hours of you speaking** in 6 months.",
      "Daily 1:1 at 25 min → you can hit 5 hours in **two weeks**. Different product.",
    ],
  },

  { t: "h2", text: "What the institutes are actually selling" },
  {
    t: "p",
    text: "Franchise classrooms in Kolkata, Pune, Chennai (Veta-style 2–4 months, ₹3,500–₹10,000) sell **presence**. Exam shops (EEC-style spoken English around ₹7,500) sell **a visa stack**. Native apps sell **minutes**. We sell **minutes + a 6-month map** at ₹999/month, GST included, cap 8.",
  },
  {
    t: "p",
    text: "EngVarta-style sessions from ~₹108 are the cheapest *speaking minute* in India if you already have language. Cambly at ~$10/hour is the most expensive speaking minute. British Council modules (often ₹8,800–₹16,000) sell a CEFR level and a brand — speaking time is 4–6 minutes in a 8–12 group, which is honest, just not cheap.",
  },

  { t: "h2", text: "How to audit a demo in 15 minutes" },
  {
    t: "ol",
    items: [
      "Count the faces on screen or in the room. If nobody will tell you the cap, assume 25+.",
      "Start a timer when *you* talk. Ignore teacher talk.",
      "Ask who will remember your v/w error next week. If the answer is “the platform”, it is 1:1. If the answer is a named teacher, it is a course.",
      "Ask GST, registration, lock-in. 18% on a “₹2,000” course is not a rounding error.",
    ],
  },
  {
    t: "cta",
    text: "Sit in our batch of 8 and count your own minutes. ₹0. No card.",
    course: "/book-free-demo",
    label: "Book the ₹0 demo",
  },

  { t: "h2", text: "When fewer minutes are still the right buy" },
  {
    t: "ul",
    items: [
      "You need a **certificate** — buy the badge, not the mic.",
      "You already speak and only need **daily reps** — buy 1:1 sessions.",
      "Your child is **under 14** — buy a kids platform. Adult minutes are the wrong unit.",
    ],
  },
];
