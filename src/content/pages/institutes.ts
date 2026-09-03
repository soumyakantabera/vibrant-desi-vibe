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
    text: "**We sell one of the options on this page.** Learn With Smile is a live online English school from ₹999/month. Read the table as a fit-guide, not a ranking. Prices are **bands** checked against public pages in 2026 — confirm on the provider's site before you pay.",
  },
  {
    t: "p",
    text: "The Indian market splits into six products that get marketed as the same thing. They are not.",
  },

  { t: "h2", text: "The 2026 map — who each institute is actually for" },
  {
    t: "table",
    caption:
      "Typical public ranges, 2026. Not a ranking. Batch figures are what those formats usually run, not a guarantee on every slot.",
    head: ["Provider type", "Typical fee", "Format", "Who it fits", "Who it wastes"],
    rows: [
      [
        "Learn With Smile (us)",
        "₹999–₹2,499/mo GST in",
        "Live group, approx. 6 learners, named teacher, IST",
        "Adults 15+ who need a syllabus and the mic",
        "Kids; people who need a certificate; daily 1:1 junkies",
      ],
      [
        "EngVarta-style 1:1 apps",
        "~₹100–₹400 / session",
        "On-demand 1:1 audio with Indian tutors",
        "Hesitant intermediates who already have language",
        "True beginners; anyone who needs a 6-month map",
      ],
      [
        "Cambly / native 1:1",
        "~$10/hr (₹8k–₹15k/mo if daily)",
        "On-demand video with native speakers",
        "Fluent speakers who want accent/idiom",
        "Beginners (they freeze); tight budgets",
      ],
      [
        "British Council English Online",
        "Modules often ₹8,800–₹16,000; groups ~8–12 (cap often 10)",
        "CEFR syllabus, live group + optional 1:1 credits",
        "People who need the badge or a structured level",
        "Beginners who need 8–10 speaking minutes/hour at ₹999",
      ],
      [
        "Franchise classrooms (Veta-style)",
        "₹3,500–₹10,000 for 2–4 months",
        "Offline rooms, many cities, large batches common",
        "Learners who want a neighbourhood classroom and peer energy",
        "Anyone whose bottleneck is speaking time, not grammar notes",
      ],
      [
        "Exam shops (EEC-style)",
        "Spoken English often ~₹7,500; IELTS/PTE extra",
        "Offline + live online, many branches, visa/exam stack",
        "Study-abroad applicants who need IELTS/PTE plus counselling",
        "Working adults who only need to talk in meetings",
      ],
      [
        "Kids platforms (PlanetSpark-style)",
        "Packages, often ~$10 / 1:1 session",
        "1:1 video, parent reports, games",
        "Learners under ~14",
        "Adults. Different profession.",
      ],
    ],
  },

  { t: "h2", text: "What Google reviews actually repeat" },
  {
    t: "p",
    text: "We are not scraping other people's reviews into this page. Patterns across public Google / Play / Trustpilot comments in this market are stable enough to state as patterns:",
  },
  {
    t: "ul",
    items: [
      "**Offline classrooms (Veta-style, local Kolkata/Pune rooms):** praise for “energy” and “teacher is nice”; complaints cluster on **batch size**, **too little speaking**, and **hidden material/GST fees**.",
      "**Exam institutes (EEC-style, British Council IELTS centres):** praise for **visa process** and **mock tests**; complaints on **price**, **sales pressure**, and **speaking time in packed rooms**.",
      "**Cambly:** praise for **convenience** and **native chat**; complaints on **tutor lottery** and **cost if you practise daily**.",
      "**EngVarta:** praise for **price per session** and **daily habit**; complaints on **no syllabus** and **variable tutor quality**.",
      "**British Council English Online:** praise for **curriculum** and **brand**; complaints on **module cost** and **limited talking in the group slot**.",
      "**Us:** 5.0★ on Google from 125 reviews. That is a small sample compared with Play-store apps. Treat it as named outcomes plus a ₹0 demo — not a 9,000-review dataset.",
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
      ["EngVarta / Cambly 1:1", "1", "25–50 minutes, no syllabus"],
    ],
  },
  {
    t: "p",
    text: "If your problem is freezing, 1:1 apps win on minutes. If your problem is not knowing what to study next, a syllabus plus 6–8 minutes of correction wins. Full arithmetic: [speaking minutes](/blog/speaking-minutes-in-a-60-minute-class).",
  },

  {
    t: "h2",
    text: "West Bengal, Maharashtra, Delhi, South India — same products, different rooms",
  },
  {
    t: "p",
    text: "Offline options cluster in Gariahat/Salt Lake (Kolkata), Deccan/FC Road (Pune), CP/Noida (Delhi), Koramangala/Whitefield (Bengaluru), T Nagar (Chennai). Fees for a 3-month spoken package commonly sit **₹1,500–₹7,500** plus commute. Live online (us, EngVarta, British Council Online) is the same fee in Kolkata, Mumbai, Ahmedabad, Hyderabad or Kochi. The commute is the hidden 3–6 hours/week.",
  },

  { t: "h2", text: "When we are the wrong institute" },
  {
    t: "ul",
    items: [
      "You need a **British Council / Cambridge certificate** — go there. We do not issue one.",
      "You want **daily 1:1** and already speak — EngVarta is cheaper per talking minute.",
      "The student is a **child** — PlanetSpark-style, not an adult batch of around 6.",
      "You want a **walk-in classroom** in Barrackpore or Salt Lake — a franchise centre is the product. Our Kolkata address is an office, not a campus.",
    ],
  },
  {
    t: "cta",
    text: "Compare us in a real class, not a sales call. ₹0. Approx. 6 learners. From ₹999/mo.",
    course: "/book-free-demo",
    label: "Book the ₹0 demo",
  },
];
