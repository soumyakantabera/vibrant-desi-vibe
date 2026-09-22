import type { ArticleBody } from "@/content/blog/blocks";
import { admissionCaption } from "@/lib/fees";
import { COMPARE_BLURB, COMPARE_REVISED_LABEL } from "@/lib/compare";

/**
 * /english-institute-comparison-india
 *
 * Named competitors, public bands, review *patterns* (not scraped quotes).
 * We sell one of the rows. Paragraph one says so.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: `**We sell one of the rows.** Learn With Smile is a live online English school from ₹999/month, inclusive of taxes. **${COMPARE_BLURB}** This page is a fit-guide, not a ranking.`,
  },
  {
    t: "p",
    text: "Five products get sold as “English class.” They are not the same: a 15-minute app call, a native-speaker chat, a CEFR module, a 30-student classroom, and a named live batch of around 6. Pick the bottleneck, not the brand.",
  },

  { t: "h2", text: `Named comparison — online 2026 (updated ${COMPARE_REVISED_LABEL})` },
  {
    t: "table",
    caption:
      `Public online ranges checked ${COMPARE_REVISED_LABEL}. Confirm on their site. ${admissionCaption()}`,
    head: ["Institute", "From fee", "Who it is for", "Free session"],
    rows: [
      [
        "Learn With Smile (us)",
        "₹999–₹1,999/mo inclusive of taxes",
        "Adults 15+. Live ≈6. Named teacher. No material fee.",
        "Free consultation. Not a class.",
      ],
      [
        "EngVarta",
        "₹2,700 / 25 × 15-min (~₹108)",
        "Adults who already speak and need daily 1:1 reps. No 6-month map.",
        "You talk. No counselling.",
      ],
      [
        "Cambly",
        "~₹8,000–₹15,000/mo if daily",
        "Fluent adults who want native chat and accent.",
        "Tutor lottery.",
      ],
      [
        "italki / Preply",
        "₹250–₹4,000 per lesson",
        "Adults who can pick and keep one tutor.",
        "Trial with that tutor.",
      ],
      [
        "PlanetSpark",
        "₹13,000–₹65,000 per course",
        "Children 4–13. Public speaking and 1:1 kids English. Not an adult spoken room.",
        "Free demo class for the child.",
      ],
      [
        "British Council English Online",
        "₹8,800–₹16,000 / 6-class module",
        "Adults who want a CEFR classroom or a brand badge.",
        "Counsellor pitches a module.",
      ],
      [
        "ELSA / Duolingo / Speak",
        "₹300–₹1,200/mo",
        "Solo pronunciation and vocab. No named teacher. No batch.",
        "None — you tap Start.",
      ],
      [
        "IELTS / Leap-style exam shops",
        "₹8,000–₹35,000 per course",
        "A visa or university form that asked for a band. Not fluency for work.",
        "Pitch for IELTS/PTE.",
      ],
    ],
  },
  {
    t: "p",
    text: "**PlanetSpark is not a rival for our adult room.** It is a kids 1:1 public-speaking product (typically 4–13). If the learner is a child, use PlanetSpark or a kids platform — not us. If the learner is 15+, PlanetSpark is the wrong buy and we are one of the adult options.",
  },

  { t: "h2", text: "Our fees, so the row is not a slogan" },
  {
    t: "table",
    caption: admissionCaption(),
    head: ["Course", "Duration", "Fee"],
    rows: [
      ["Basic Spoken English", "6 months", "₹999/month"],
      ["Interactive Speaking", "3 months", "₹1,499/month"],
      ["Business English", "3 months", "₹1,999/month"],
      ["Interview Preparation", "2 months", "₹1,999/month"],
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
      "**Us:** 5.0★ on Google from 125 reviews. Small sample next to Play-store apps. Treat it as named outcomes — not a 9,000-review dataset.",
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
      "A visa, university or some HR forms ask for **IELTS** (or similar). That score comes from the test board, not from any school. We do not sell IELTS as a course. Sit the paper when the form asks.",
      "A **brand-name CEFR module** (often ₹8,800–₹16,000 for six classes) is a different product: you are buying that classroom and syllabus. We train speaking from ₹999/month, inclusive of taxes.",
      "You want **daily 1:1** and already speak — an app like EngVarta is cheaper per talking minute. Use it as reps. Use us for the 6-month map.",
      "The student is a **child** — a kids platform, not an adult batch of around 6.",
      "You want a **walk-in classroom** in Barrackpore or Salt Lake — a franchise centre is the product. Our Kolkata address is an office, not a campus.",
    ],
  },

  { t: "h2", text: "Their free session vs ours" },
  {
    t: "p",
    text: "The first hour you spend with an institute is the tell. EngVarta has no counselling — you pick a 15-minute call. Cambly is a tutor lottery. British Council is a counsellor pitching a CEFR module. A city classroom sits you in 25–40, or pitches. Exam shops pitch IELTS. [Our consultation](/book-free-demo) is a small batch with personalised advice: we name the bottleneck, answer every query, and place you in one course — or tell you to stay free. You will not sit a full class for free. That is the paid room of around 6.",
  },

  {
    t: "cta",
    text: "Compare us in a consultation, not a packed room. We name the bottleneck, print the cap (≈6), and put the fee in writing. From ₹999/mo, inclusive of taxes. 500+ learners, 7 years.",
    course: "/book-free-demo",
    label: "Get Free Consultation",
  },
];
