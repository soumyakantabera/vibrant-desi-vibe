import type { ArticleBody } from "@/content/blog/blocks";

/**
 * /english-institute-comparison-india
 *
 * Named competitors, public bands, review *patterns* (not scraped quotes).
 * We sell one of the rows. Paragraph one says so.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**We sell one of the rows.** Learn With Smile is a live online English school from ₹999/month, GST included. This page is a fit-guide, not a ranking. Fees are **public 2026 bands** — confirm on the provider's site before you pay.",
  },
  {
    t: "p",
    text: "Five products get sold as “English class.” They are not the same: a 15-minute app call, a native-speaker chat, a CEFR module, a 30-student classroom, and a named live batch of around 6. Pick the bottleneck, not the brand.",
  },

  { t: "h2", text: "Named comparison — 2026 fees and format" },
  {
    t: "table",
    caption:
      "Public ranges checked in 2026. Batch figures are what those formats usually run, not a promise on every slot.",
    head: ["Institute", "From fee", "Format", "Your mic / hour", "Fits"],
    rows: [
      [
        "Learn With Smile (us)",
        "₹999–₹2,499/mo GST in",
        "Live group, approx. 6 learners, named teacher, IST",
        "About 8–10 minutes",
        "Adults 15+ who need a syllabus and the mic",
      ],
      [
        "EngVarta",
        "₹2,700 / 25 × 15-min calls (~₹108)",
        "On-demand 1:1 audio, Indian tutors",
        "15 minutes, no syllabus",
        "Intermediates who already have language and need daily reps",
      ],
      [
        "Cambly",
        "~₹8,000–₹15,000/mo if daily",
        "On-demand 1:1 video, native speakers",
        "25–50 minutes, tutor lottery",
        "Fluent speakers who want accent and idiom",
      ],
      [
        "British Council English Online",
        "₹8,800–₹16,000 / 6-class module",
        "CEFR live group, often 8–12 (cap often 10)",
        "About 4–6 minutes",
        "People who want a published CEFR classroom",
      ],
      [
        "Veta-style classrooms",
        "₹3,500–₹10,000 for 2–4 months",
        "Offline franchise rooms, large batches common (25–40)",
        "1–2 minutes",
        "Learners who want a neighbourhood classroom and peer energy",
      ],
    ],
  },

  { t: "h2", text: "Our fees, so the row is not a slogan" },
  {
    t: "table",
    caption: "GST included. No registration fee. Billed monthly. English batches of approximately 6 learners.",
    head: ["Course", "Duration", "Fee"],
    rows: [
      ["Basic Spoken English", "6 months", "₹999/month"],
      ["Interactive Speaking", "3 months", "₹1,199/month"],
      ["Workplace English", "3 months", "₹1,999/month"],
      ["Interview Preparation", "2 months", "₹1,499/month"],
      ["IELTS Preparation", "3 months", "₹2,499/month"],
      ["Career Counselling", "3 × 60-min 1:1", "₹1,999"],
    ],
  },
  {
    t: "p",
    text: "Full arithmetic and hidden-cost questions: [English class fees in India](/english-class-fees-india). Formats (app vs class vs kids): [best online spoken English](/best-online-spoken-english-classes-india).",
  },

  { t: "h2", text: "What Google reviews actually repeat" },
  {
    t: "p",
    text: "We are not scraping other people's reviews onto this page. Patterns across public Google / Play comments in this market are stable enough to state as patterns:",
  },
  {
    t: "ul",
    items: [
      "**Veta-style / local Kolkata rooms:** praise for energy and a nice teacher; complaints cluster on **batch size**, **too little speaking**, and extra material/GST fees. Veta Barrackpore lists **4.7★ from 273** reviews — more volume than us.",
      "**British Council:** praise for **curriculum** and **brand**; complaints on **module cost** and limited talking in the group slot. Centres in Delhi, Mumbai, Chennai, Kolkata, Hyderabad, Ahmedabad, Bengaluru.",
      "**Cambly:** praise for **convenience** and **native chat**; complaints on **tutor lottery** and cost if you practise daily.",
      "**EngVarta:** praise for **price per session** and **daily habit**; complaints on **no syllabus** and variable tutor quality. They also publish the “best course 2026” listicles — treat those as marketing, not a referee.",
      "**Us:** 5.0★ on Google from 125 reviews. Small sample next to Play-store apps. Treat it as named outcomes plus a ₹0 demo — not a 9,000-review dataset.",
    ],
  },

  { t: "h2", text: "Speaking minutes — the number almost no brochure prints" },
  {
    t: "table",
    head: ["Room", "Learners", "60-min class, your mic"],
    rows: [
      ["Typical offline franchise / city classroom", "25–40", "1–2 minutes"],
      ["British Council-style group", "8–12", "4–6 minutes"],
      ["Learn With Smile English batch", "Approximately 6 learners", "About 8–10 minutes"],
      ["EngVarta / Cambly 1:1", "1", "15–50 minutes, no 6-month map"],
    ],
  },
  {
    t: "p",
    text: "If your problem is freezing and you already have words, 1:1 apps win on minutes. If your problem is not knowing what to study next, a syllabus plus 8–10 minutes of correction wins. Full arithmetic: [speaking minutes](/blog/speaking-minutes-in-a-60-minute-class).",
  },

  {
    t: "h2",
    text: "West Bengal, Maharashtra, Delhi, South India — same products, different rooms",
  },
  {
    t: "p",
    text: "Offline options cluster in Gariahat/Salt Lake (Kolkata), Deccan/FC Road (Pune), CP/Noida (Delhi), Koramangala (Bengaluru), T Nagar (Chennai). A 3-month spoken package commonly sits **₹1,500–₹7,500** plus commute. Live online (us, EngVarta, British Council Online) is the same fee in Kolkata, Mumbai, Ahmedabad, Hyderabad or Kochi. The commute is the hidden 3–6 hours/week.",
  },

  { t: "h2", text: "Exams, certificates, and when another room fits" },
  {
    t: "ul",
    items: [
      "A visa, university or some HR forms ask for **IELTS** (or similar). That score comes from the test board, not from any school. We run a 3-month live IELTS room — ₹2,499/month, six mocks, speaking labs. Sit the paper when the form asks.",
      "A **brand-name CEFR module** (often ₹8,800–₹16,000 for six classes) is a different product: you are buying that classroom and syllabus. We train speaking from ₹999/month, and the IELTS paper when you actually need the score.",
      "You want **daily 1:1** and already speak — an app like EngVarta is cheaper per talking minute. Use it as reps. Use us for the 6-month map.",
      "The student is a **child** — a kids platform, not an adult batch of around 6.",
      "You want a **walk-in classroom** in Barrackpore or Salt Lake — a franchise centre is the product. Our Kolkata address is an office, not a campus.",
    ],
  },
  {
    t: "cta",
    text: "Compare us in a real class, not a sales call. ₹0. Approximately 6 learners. From ₹999/mo. 500+ learners, 7 years.",
    course: "/book-free-demo",
    label: "Book the ₹0 demo",
  },
];
