import type { ArticleBody } from "./blocks";

/**
 * /blog/is-a-spoken-english-course-worth-it
 * The readiness check. Written for the learner who is about to pay, so that the
 * people who message us have already decided they can do the work. Sources for
 * every number: research_notes/market-research-serious-learners-nov-2026.md.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "A spoken English course is worth the money for some people and wasted on others, and the difference is rarely the course. It is whether the learner can give it the hours. Run the seven checks below before you pay anyone, us included. If you fail three or more, wait. A course will not fix a calendar.",
  },

  { t: "h2", text: "Why it is worth getting right" },
  {
    t: "ul",
    items: [
      "**Employers screen for it.** NITI Aayog’s February 2025 report on state public universities, which teach over 80% of India’s higher-education students, names inadequate English as a barrier to graduates getting jobs.",
      "**HR leaders say so.** In ETS’s March 2026 TOEIC report, 91% of the Indian HR decision makers surveyed said a more competitive job market raises the need for English, and 84% said weak English is a competitive disadvantage. That India sample was 87 people, so treat it as a signal, not a census.",
      "**It takes real hours.** Cambridge English’s guidance is about 180–200 guided learning hours to reach A2, 350–400 for B1 and 500–600 for B2, counted from the start.",
    ],
  },

  { t: "h2", text: "The 7-point readiness check" },
  {
    t: "ol",
    items: [
      "**One named situation.** Can you name the one situation you want to handle: an HR round, client calls, daily life, a promotion review? “Improve my English” is not a goal a teacher can work towards.",
      "**Two fixed slots a week.** Can you protect up to two 90-minute live slots, afternoon, evening or night IST, every week, for the length of the course? If your shifts change weekly, a live batch will not work yet.",
      "**15–20 minutes on the other days.** Live classes give you about 12 hours a month. The rest of the progress happens between classes: speaking aloud, recording yourself, repeating corrected sentences.",
      "**The full course length.** Can you commit for the whole course: 6 months for Basic, 4 for Intermediate, 3 for Interactive Speaking, 2 for Interview Preparation? You pay monthly, but the plan needs the months.",
      "**Speaking in front of others.** You will speak in front of about 5 other adults in every class and make mistakes out loud. That is the method, not a side effect.",
      "**A realistic clock.** Do you accept that nobody can make you fluent in 30 days? Anyone who promises it is selling hope.",
      "**The budget for the whole course, not just month one.** Basic is ₹7,194 in total, Intermediate ₹7,996, Interactive Speaking ₹4,797 and Interview Preparation ₹4,998, inclusive of taxes.",
    ],
  },

  { t: "h2", text: "Score yourself" },
  {
    t: "table",
    head: ["Checks you pass", "What to do"],
    rows: [
      ["7 of 7", "You are ready. Choose the room and start this month."],
      ["5–6", "Ready, if the failed checks are fixable. Fix them first, then start."],
      [
        "3–4",
        "Start with free daily practice for 3–4 weeks. If you keep it up, you are ready to pay.",
      ],
      [
        "0–2",
        "Do not pay anyone yet. Start with the [15-minute daily routine](/blog/daily-english-speaking-practice-routine).",
      ],
    ],
  },

  { t: "h2", text: "Who should not join us, even if they pass" },
  {
    t: "ul",
    items: [
      "Children under 15: our batches are adults only.",
      "Anyone who needs an IELTS, PTE or TOEFL score, or a certificate. We do not sell exam courses or issue certificates.",
      "Anyone who wants 1:1 private lessons or a walk-in classroom.",
      "Anyone who wants a promised job. We do not promise jobs, salaries or bands, and nobody honest can.",
    ],
  },

  { t: "h2", text: "How we protect your money" },
  {
    t: "ul",
    items: [
      "You pay one month at a time by UPI or card. No EMI, no loan, no auto-debit, no annual lock-in.",
      "A month cancelled before its first class is refunded in full. The rule is in [our refund policy](/refunds) and in [Before you pay](/before-you-pay-spoken-english-course).",
      "If you want to see the room first, the [₹99 Demo Class](/course-demo-session) is one live class, adjusted in the fee if you enrol within 48 hours.",
    ],
  },

  { t: "h2", text: "What to send us if you passed" },
  {
    t: "p",
    text: "Send these five lines on WhatsApp, and a teacher can answer with one course, the fee and a start date:",
  },
  {
    t: "ol",
    items: [
      "Your [level test](/english-speaking-level-test) score, or one line on what you can and cannot say today.",
      "Your one situation.",
      "Your deadline, if any.",
      "Your IST slot: afternoon, evening or night.",
      "English only, or Hindi or Bengali explanations.",
    ],
  },
  {
    t: "cta",
    text: "Passed the check? Send the five lines. A teacher replies 10am–midnight IST with one course and a free group consultation slot.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
