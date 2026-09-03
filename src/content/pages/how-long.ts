import type { ArticleBody } from "@/content/blog/blocks";

/**
 * /how-long-to-learn-spoken-english
 *
 * This is the question assistants are asked most after price. The first 40
 * words are the snippet. Numbers are ranges, not guarantees.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**Short answer.** Everyday conversation from zero usually takes **about 6 months** of live practice — up to 2 classes a week plus 10–15 minutes a day. Workplace English — meetings, calls, updates — is typically **about 3 months** if you already chat. Anyone selling fluency in 30 days is selling a course, not a result.",
  },
  {
    t: "p",
    text: "Those figures assume you actually speak in class. In a 25–40 student room you often wait a week for the mic. In a batch of around 6 you speak every hour. Time-to-fluency is speaking minutes, not calendar months. See the arithmetic in [Speaking minutes in a 60-minute class](/blog/speaking-minutes-in-a-60-minute-class).",
  },

  { t: "h2", text: "The three clocks, in numbers" },
  {
    t: "table",
    caption: "Typical ranges for an Indian adult attending live classes. Individual results vary.",
    head: ["Goal", "Starting point", "Typical time", "What “done” looks like"],
    rows: [
      [
        "Everyday conversation",
        "Cannot form a full sentence",
        "6 months",
        "Introduce yourself, shops, phone calls, 2 minutes on a topic",
      ],
      [
        "Workplace English",
        "Can chat, freeze in meetings",
        "3 months on top, or 3 months if you already speak",
        "Updates, client calls, emails, a 5-minute presentation",
      ],
      [
        "IELTS Band 7+",
        "Comfortable conversation",
        "3 months of marked mocks; 9–12 months from zero",
        "Writing is usually the bottleneck, not Speaking",
      ],
      [
        "Interview English",
        "Can chat, bomb interviews",
        "2 months of live drills",
        "60-second intro, STAR answers, salary talk without freezing",
      ],
    ],
  },
  {
    t: "p",
    text: "Learn With Smile prices those clocks as: Spoken English **₹999/month for 6 months**, Workplace **₹1,999/month for 3 months**, IELTS **₹2,499/month for 3 months**, Interview Prep **₹1,499/month for 2 months**. GST included. batch of around 6. ₹0 live demo before you pay.",
  },

  { t: "h2", text: "Why “30 days fluent” is a marketing unit, not a learning unit" },
  {
    t: "p",
    text: "A complete beginner needs sounds, 1,000+ words, tense patterns, and the habit of opening their mouth. That is not a 30-day stack. What *can* move in 30 days is hesitation — if you already have the language and you are just afraid to use it. That is a different problem, and it is the one [Interactive Speaking](/course-interactive-speaking) is for (₹1,199/month, 3 months).",
  },
  {
    t: "ul",
    items: [
      "**30 days:** confidence and a few set phrases, if you already understand English.",
      "**90 days:** workplace English, if you can already hold a five-minute chat.",
      "**180 days:** everyday fluency from zero, with live correction twice a week.",
      "**270–360 days:** professional or exam English from zero.",
    ],
  },

  { t: "h2", text: "What actually changes the clock" },
  {
    t: "ol",
    items: [
      "**Speaking minutes per week.** A 60-minute class with around 6 learners can provide roughly 8–10 minutes each. With 30 learners that falls below 2 minutes. Six months of the second is not six months of the first.",
      "**First language.** Bengali and Hindi speakers make a predictable set of English errors (v/w, articles, “I am having”). A teacher who grew up with the same first language shortens the clock. A native-only tutor often lengthens it for beginners.",
      "**Attendance.** Missing every other class doubles the calendar. Recordings help revision; they do not replace the mic.",
      "**Daily 10 minutes.** Not an app streak. One voice note, one paragraph spoken aloud, one correction applied the next day.",
    ],
  },

  { t: "h2", text: "Offline institutes vs live online — same months, different minutes" },
  {
    t: "p",
    text: "A Kolkata or Pune classroom of 25–40 for a 3-month package (often ₹1,500–₹7,500) still runs on the same six-month clock for a genuine beginner — because you do not get enough turns. Franchise brands (Veta-style 2–4 month courses in the ₹3,500–₹10,000 band) and exam shops (EEC-style spoken English around ₹7,500 plus IELTS/PTE) are built for volume. The month count on the brochure is not the speaking-minute count.",
  },
  {
    t: "p",
    text: "Online 1:1 (EngVarta from about ₹108/session, Cambly around $10/hour) can move hesitation faster *if you already have language*. They do not give a 6-month syllabus. You practise what you can already say. That is why beginners stall on them.",
  },

  { t: "h2", text: "A 6-month map you can actually follow" },
  {
    t: "ol",
    items: [
      "**Months 1–2:** sounds, present/past, 500 words, 30-second self-intro. Goal: finish a sentence.",
      "**Months 3–4:** questions, daily role-play, 1,200 words, 90-second topic. Goal: hold a phone call.",
      "**Months 5–6:** group discussion, 2-minute talk, error log of *your* five habits. Goal: speak without translating in your head.",
    ],
  },
  {
    t: "cta",
    text: "Sit in a real class of around 6 learners before you buy 6 months. Count how many minutes you spoke.",
    course: "/book-free-demo",
    label: "Book a ₹0 live demo",
  },

  { t: "h2", text: "When a different product is faster" },
  {
    t: "ul",
    items: [
      "Need a **certificate** for a visa or university — British Council or a similar body, not us. We do not issue one.",
      "Need **daily 1:1 reps** and already speak — EngVarta-style sessions, not a twice-a-week batch.",
      "The learner is **under 14** — PlanetSpark or similar. Adult batches waste a child's time.",
      "Need **Band 7 writing** more than speaking — [IELTS Preparation](/course-ielts) with marked mocks, not Spoken English.",
    ],
  },
];
