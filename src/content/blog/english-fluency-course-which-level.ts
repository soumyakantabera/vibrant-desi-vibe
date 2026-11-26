import type { ArticleBody } from "./blocks";

/**
 * /blog/english-fluency-course-which-level
 * Demand (OpenRush, India, Nov 2026): "english speaking fluency course" ~1,000/mo,
 * "english fluency course" ~880/mo, "fluent english speaking course" ~1,000/mo,
 * "professional english speaking course" ~720/mo. Decision content: it places the
 * reader in one course. It does not teach the course for free.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "Almost every English course in India is sold as a “fluency course”. That word covers four different problems: you cannot build the sentence, you build it slowly and with mistakes, you know it and freeze, or you speak fine until someone is judging you. Each problem needs a different course. Buying the wrong one costs you three to six months, and the fee is the smaller loss.",
  },

  { t: "h2", text: "What “fluent” means when someone is paying for it" },
  {
    t: "p",
    text: "Language teachers split fluency from accuracy. **Fluency** is how smoothly you keep talking: few long pauses, no restarting sentences, no translating in your head. **Accuracy** is how correct it is. A learner can be accurate and not fluent (correct, but slow and silent in meetings), or fluent and not accurate (fast, with tense errors in every line). Most adults who search for a fluency course have one of these two gaps, not both.",
  },
  {
    t: "p",
    text: "The Common European Framework (CEFR) is how most of the world measures this. Cambridge English publishes guided learning hours for it: roughly 200 hours per step, and the totals grow as you climb. That is about **180–200 hours to reach A2, 350–400 for B1 and 500–600 for B2**, counted from the start. A course with two 90-minute classes a week gives you about 12 live hours a month. Live hours alone will not move you a full level in a few months. What moves you is live correction plus 15–20 minutes of daily practice between classes. Any provider promising fluency in 30 days is selling the hope, not the hours.",
  },

  { t: "h2", text: "Find your level in one minute" },
  {
    t: "table",
    caption: "Answer honestly. Pick the first row that is true for you.",
    head: ["Can you do this out loud, today?", "Your gap", "Rough CEFR"],
    rows: [
      ["Introduce yourself for 30 seconds without stopping", "Building sentences", "Below A2"],
      [
        "Describe your work or day for 60 seconds, but with tense errors and fillers",
        "Accuracy and flow",
        "A2–B1",
      ],
      [
        "Explain something correctly in writing, but go silent in a meeting or call",
        "Speaking under pressure",
        "B1–B2",
      ],
      [
        "Talk easily with friends, but lose structure in an interview",
        "Answers under judgement",
        "B1 and above",
      ],
    ],
  },
  {
    t: "p",
    text: "Not sure? The free [English speaking level test](/english-speaking-level-test) takes one minute, has Hindi and Bengali versions, and prefills your score into WhatsApp so a teacher can confirm it.",
  },

  { t: "h2", text: "Which course for which gap" },
  {
    t: "table",
    caption:
      "Learn With Smile fees, inclusive of taxes. Live online, about 6 learners per batch, 90-minute classes, up to 2 a week.",
    head: ["Your gap", "Course", "Duration and fee", "Total if you finish"],
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
    text: "You pay one month at a time. There is no EMI, no auto-debit and no annual lock-in. If you think in Hindi or Bengali, Basic Spoken English is also taught through [Hindi](/course-spoken-english-hindi) or [Bengali](/course-spoken-english-bengali) at the same fee.",
  },

  { t: "h2", text: "The four mistakes we see most" },
  {
    t: "ul",
    items: [
      "**A beginner buys a conversation app or a 1:1 chat tutor.** Without a sentence base, the conversation is a stranger waiting for you. Start with Basic.",
      "**A B1 professional buys a grammar course.** They already know the rules. They need reps under pressure, which is Interactive Speaking, not another tense chart.",
      "**Someone buys Interview Preparation for general fluency.** It is a two-month sprint for people who already talk. It assumes the sentence base exists.",
      "**Someone buys three courses at once.** One bottleneck at a time. The next course is only worth paying for once the first gap has closed.",
    ],
  },

  { t: "h2", text: "Who this is not for" },
  {
    t: "ul",
    items: [
      "Children under 15. Our batches are adults only.",
      "Anyone who needs an IELTS, PTE or TOEFL score, or a certificate for a form. We do not sell exam courses or issue certificates.",
      "Anyone who wants private 1:1 lessons or a walk-in classroom.",
      "Anyone who cannot attend live classes in the afternoon, evening or night IST slots for at least two months.",
    ],
  },

  { t: "h2", text: "What to send us so we can place you in one message" },
  {
    t: "p",
    text: "We answer every WhatsApp message, and placement is faster when it has these five things:",
  },
  {
    t: "ol",
    items: [
      "Your level-test score, or which row of the first table is true for you.",
      "The one situation you want to handle in English (calls, meetings, interviews, daily life).",
      "Your deadline, if there is one: an interview date, a new role, a move.",
      "Which IST slot you can attend: afternoon, evening or night.",
      "Whether you want Hindi or Bengali explanations or English only.",
    ],
  },
  {
    t: "cta",
    text: "Send those five lines on WhatsApp. A teacher replies with one course, the fee and a free group consultation slot, in writing.",
    course: "/free-consultation",
    label: "Get Free Consultation",
  },
];
