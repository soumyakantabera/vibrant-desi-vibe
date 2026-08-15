import type { ArticleBody } from "@/content/blog/blocks";

/**
 * Body copy for /english-class-fees-india.
 *
 * The homepage FAQ already answered this better than most of the pages ranking
 * for it — it just had no URL of its own. This is also the page most likely to
 * be quoted by an AI assistant, because "how much do online English classes
 * cost in India" is a question they get constantly and struggle to answer with
 * real figures.
 *
 * The answer is therefore front-loaded into the first 40 words, which is what
 * makes a passage featured-snippet eligible and what an assistant lifts.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**Short answer.** In India in 2026, group online English classes cost roughly **₹800–₹3,000 per month**. One-to-one tutoring runs **₹100–₹2,000 per session** depending on where the tutor is based. App-based conversation practice runs **₹300–₹800 per month**.",
  },
  {
    t: "p",
    text: "Those bands are wide because they cover genuinely different products. The rest of this page is about what actually moves the price, and how to tell which end of a band you are being sold.",
  },

  { t: "h2", text: "The four pricing models" },
  {
    t: "table",
    head: ["Model", "Typical price", "What you actually get"],
    rows: [
      [
        "Recorded video course",
        "₹300–₹1,500 one-off, or free",
        "Lectures you watch alone. No speaking, no correction. Fine for grammar, useless for fluency.",
      ],
      [
        "Large live batch",
        "₹500–₹1,200/month",
        "A live teacher and 25–40 classmates. You will speak once or twice a week.",
      ],
      [
        "Small live batch",
        "₹1,000–₹3,000/month",
        "A live teacher and 4–10 classmates. You speak every class and get corrected by name.",
      ],
      [
        "One-to-one",
        "₹100–₹2,000/session",
        "Just you and a tutor. The wide range is almost entirely about where the tutor lives.",
      ],
    ],
  },

  { t: "h2", text: "What actually drives the price" },
  {
    t: "ol",
    items: [
      "**Batch size — by a very long way the biggest factor.** A teacher earning a viable hourly rate divides it among everyone in the room. That single constraint explains most of the difference between a ₹500 class and a ₹2,000 one.",
      "**Live versus recorded.** Recorded content is produced once and sold indefinitely. Live teaching costs the teacher's hour every single time.",
      "**Where the teacher is.** A tutor in the US or UK charges several times an Indian teacher's rate for the same hour. What you are buying with that premium is accent and idiom.",
      "**Course length.** A two-month intensive and a six-month course at the same monthly fee are very different total costs. Compare the total, not the monthly.",
      "**Certification.** A recognised certificate adds a fee that reflects the awarding body, not the teaching. Worth paying only if someone is going to ask to see it.",
    ],
  },

  { t: "h2", text: "The calculation nobody does: cost per speaking minute" },
  {
    t: "p",
    text: "Monthly fee is the wrong unit. What you are buying in a speaking class is minutes of your own speech, corrected. So divide by that instead.",
  },
  {
    t: "p",
    text: "Take a ₹600/month class with 35 students, meeting three times a week for 50 minutes. The teacher talks for roughly 25 of those minutes, which leaves 25 minutes shared between 35 learners:",
  },
  {
    t: "example",
    label: "Large batch",
    lines: [
      "25 minutes ÷ 35 students ≈ **43 seconds** of speaking per class",
      "× 12 classes a month ≈ **8.6 minutes** a month",
      "₹600 ÷ 8.6 ≈ **₹70 per minute of your own speech**",
    ],
  },
  {
    t: "example",
    label: "Batch of six",
    lines: [
      "25 minutes ÷ 6 students ≈ **4–5 minutes** of speaking per class",
      "× 12 classes a month ≈ **~55 minutes** a month",
      "₹999 ÷ 55 ≈ **₹18 per minute of your own speech**",
    ],
  },
  {
    t: "p",
    text: "Two caveats, and they both matter.",
  },
  {
    t: "ul",
    items: [
      "**These are illustrative, not measured.** The 25-minute teacher-talk figure is an estimate, and a good teacher in a large batch runs pair work that raises the number considerably.",
      "**The framing favours us.** We sell small batches, so of course we like the metric that rewards small batches. Treat it as an argument to check rather than a fact to accept.",
    ],
  },
  {
    t: "p",
    text: "What we would actually suggest is doing this arithmetic yourself, with the real numbers, for whichever two options you are choosing between. It takes two minutes and it is more useful than any review page.",
  },
  {
    t: "quote",
    text: "Ask any provider their batch size. If they will not give you a number, that is the number.",
  },

  { t: "h2", text: "Five hidden costs worth asking about" },
  {
    t: "table",
    head: ["Ask", "Why it matters", "Our answer"],
    rows: [
      [
        "Is GST included or added?",
        "18% on ₹2,000/month is ₹360 a month you did not budget for.",
        "Included. The advertised figure is what you pay.",
      ],
      [
        "Is there a registration or material fee?",
        "A one-off ₹2,000 joining fee changes the maths on a short course completely.",
        "Neither. There is no joining fee and no material fee.",
      ],
      [
        "Is there a lock-in?",
        "Quarterly or annual prepayment that cannot be cancelled is a much bigger commitment than a monthly fee.",
        "Monthly. You can stop at the end of any month.",
      ],
      [
        "What happens if I miss a class?",
        "Some providers charge for a make-up session, or simply do not offer one.",
        "Every class is recorded, and you can rejoin the module with the next batch.",
      ],
      [
        "What is the actual batch size, not the maximum?",
        '"Small batches" is not a number. A cap of 20 is not a small batch.',
        "Maximum 6, and that is a hard cap rather than a target.",
      ],
    ],
  },

  { t: "h2", text: "Does expensive mean better?" },
  {
    t: "p",
    text: "No, and this is the most common misreading of the whole market.",
  },
  {
    t: "p",
    text: "Price buys you two real things: **smaller batches** and **live teaching**. Both genuinely matter. What price does not buy is better teachers or faster results. Plenty of ₹5,000/month institutes run 30-student classrooms, and plenty of ₹1,000/month classes are taught by someone with ten years of experience who simply has lower overheads.",
  },
  {
    t: "p",
    text: "And no fee changes the timeline. Everyday conversational fluency from a genuine beginner takes about six months of consistent live practice; professional or exam-level fluency takes another three to six on top. Paying three times more does not compress that. Anyone promising fluency in 30 days is selling you something, at any price.",
  },

  { t: "h2", text: "Where free actually wins" },
  {
    t: "p",
    text: "Worth saying plainly on a page about fees: if you are disciplined, you can get a long way without paying anyone. A language exchange partner, a daily podcast, and ten minutes of speaking English to one person every day costs nothing and works.",
  },
  {
    t: "p",
    text: "What a paid class buys is three things free options do not: a fixed syllabus so you are not guessing what to study next, someone who corrects the same mistake until it disappears, and a schedule you are accountable to. If you already have the discipline and just need practice, spend nothing and use [our five speaking habits](/blog/5-speaking-habits-that-killed-my-hesitation) instead — four of the five cost nothing.",
  },

  { t: "h2", text: "Our fees, in full" },
  {
    t: "table",
    caption: "All figures include GST. No registration fee, no material fee, billed monthly.",
    head: ["Course", "Duration", "Format", "Fee"],
    rows: [
      ["Basic Spoken English", "6 months", "Live batch, max 6", "₹999/month"],
      ["Interactive Speaking", "3 months", "Live batch, max 6", "₹999/month"],
      ["Business English", "3 months", "Live batch, max 6", "₹1,199/month"],
      ["Interview Preparation", "2 months", "Live batch, max 6", "₹1,499/month"],
      ["IELTS Preparation", "3 months", "Live batch, max 6", "₹1,999/month"],
      ["Career Counselling", "3 sessions", "1:1", "₹999 total"],
    ],
  },
  {
    t: "p",
    text: "For the full syllabus and outcomes of each, see [all six courses](/english-career).",
  },
  {
    t: "cta",
    text: "The demo class is free, needs no card, and is a real live class rather than a sales call — which also means it is the cheapest way to check the batch size claim for yourself before paying anything.",
    course: "/course-spoken-english",
    label: "See the Spoken English course",
  },
];
