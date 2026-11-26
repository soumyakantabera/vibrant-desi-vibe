import type { ArticleBody } from "./blocks";

/**
 * /blog/is-a-spoken-english-course-worth-it
 * The readiness check. Sources for every number:
 * research_notes/market-research-serious-learners-nov-2026.md.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Whether a spoken English course pays off depends mostly on the hours you can give it. Run these seven checks before you pay anyone, us included. If three or more fail, wait a few weeks.",
  },

  { t: "h2", text: "Why it is worth getting right" },
  {
    t: "ul",
    items: [
      "NITI Aayog’s February 2025 report on state universities, which teach over 80% of India’s graduates, names weak English as a barrier to getting a job.",
      "In ETS’s March 2026 survey, 91% of Indian HR decision makers said a tighter job market raises the need for English. The India sample was 87 people, so read it as a signal.",
      "Cambridge English estimates about 180–200 guided learning hours to reach A2, 350–400 for B1 and 500–600 for B2, counted from zero.",
    ],
  },

  { t: "h2", text: "The 7-point readiness check" },
  {
    t: "ol",
    items: [
      "You can name one situation to fix: an HR round, client calls, daily conversation. “Improve my English” gives a teacher nothing to aim at.",
      "You can keep up to two 90-minute live slots a week (afternoon, evening or night IST) for the whole course. Rotating shifts make this hard.",
      "You can practise 15–20 minutes on the days between classes. Classes give about 12 hours a month; most progress happens in between.",
      "You can stay for the full course: 6 months for Basic, 4 for Intermediate, 3 for Interactive Speaking, 2 for Interview Preparation. You pay monthly, but the plan needs the months.",
      "You are willing to speak, and get things wrong, in front of about 5 other adults every class.",
      "You accept that nobody gets fluent in 30 days.",
      "You can fund the whole course: Basic ₹7,194 in total, Intermediate ₹7,996, Interactive Speaking ₹4,797, Interview Preparation ₹4,998, inclusive of taxes.",
    ],
  },

  { t: "h2", text: "Score yourself" },
  {
    t: "table",
    head: ["Checks you pass", "What to do"],
    rows: [
      ["7 of 7", "Pick a course and start this month."],
      ["5–6", "Fix the ones that failed, then start."],
      ["3–4", "Do free daily practice for 3–4 weeks first. If you keep it up, you are ready."],
      [
        "0–2",
        "Hold off on paying. Start with the [15-minute daily routine](/blog/daily-english-speaking-practice-routine).",
      ],
    ],
  },

  { t: "h2", text: "Who should not join us" },
  {
    t: "ul",
    items: [
      "Children under 15. Our batches are adults only.",
      "Anyone who needs an IELTS, PTE or TOEFL score, or a certificate.",
      "Anyone who wants 1:1 lessons or a classroom to walk into.",
      "Anyone looking for a promised job. We do not promise jobs, salaries or bands.",
    ],
  },

  { t: "h2", text: "How we handle your money" },
  {
    t: "ul",
    items: [
      "You pay one month at a time by UPI or card. No EMI, loan, auto-debit or annual lock-in.",
      "A month cancelled before its first class is refunded in full. See [our refund policy](/refunds) and [Before you pay](/before-you-pay-spoken-english-course).",
      "Want to see a class first? The [₹99 Demo Class](/course-demo-session) is one live class, adjusted in your fee if you join within 48 hours.",
    ],
  },

  { t: "h2", text: "If you passed" },
  {
    t: "p",
    text: "Message us with your [level test](/english-speaking-level-test) score, the situation you want to fix, any deadline, the slot you can keep, and whether you want Hindi or Bengali explanations. A teacher replies with one course and a start date.",
  },
  {
    t: "cta",
    text: "Passed the check? Message us and a teacher will reply with your course and the next batch.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
