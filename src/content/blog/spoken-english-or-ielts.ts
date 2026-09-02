import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "Three products get sold as “English class” in India: **Spoken English**, **Workplace English**, and **IELTS**. They have different clocks, different fees, and different failure modes. Pick the wrong one and you spend 3 months practising the exam when you still cannot hold a phone call — or you spend 6 months chatting when you needed Band 7 writing.",
  },

  { t: "h2", text: "The 2-minute picker" },
  {
    t: "table",
    head: ["If this is true", "Take", "Fee at Learn With Smile", "Clock"],
    rows: [
      [
        "You cannot finish a sentence / freeze in shops and calls",
        "Basic Spoken English",
        "₹999/mo, 6 months, max 8",
        "Everyday chat in ~6 months",
      ],
      [
        "You can chat, but meetings, emails, clients go silent",
        "Workplace English",
        "₹1,499/mo, 3 months, max 8",
        "Work talk in ~3 months",
      ],
      [
        "You freeze only when speaking, grammar is fine",
        "Interactive Speaking",
        "₹1,199/mo, 3 months, max 8",
        "Hesitation, not knowledge",
      ],
      [
        "You need a visa / university / Band 7",
        "IELTS Preparation",
        "₹1,999/mo, 3 months, 6+ mocks",
        "Writing is the usual bottleneck",
      ],
      [
        "You fail interviews you are qualified for",
        "Interview Prep",
        "₹1,499/mo, 2 months",
        "60-sec intro + STAR",
      ],
    ],
  },
  {
    t: "p",
    text: "GST included. ₹0 live demo. Same teacher in West Bengal, Delhi, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Kerala.",
  },

  { t: "h2", text: "Spoken English is not IELTS with the exam removed" },
  {
    t: "p",
    text: "IELTS Speaking is a 11–14 minute test with three parts. Spoken English is shops, family WhatsApp voice notes, HR screens, and a 2-minute opinion. An IELTS course that never marks your **Writing Task 2** is an expensive conversation class. A Spoken English course that drills cue cards for six months will not get you Band 7 writing.",
  },
  {
    t: "p",
    text: "If you are Band 5.5 because you cannot talk, start with Spoken English, then IELTS. If you are Band 6 in Speaking and 5.5 in Writing, skip Spoken English and go to [IELTS](/course-ielts) with a 4-paragraph template — we published ours: [Band 7 writing](/blog/band-7-writing-4-paragraph-template).",
  },

  { t: "h2", text: "What other institutes mix together" },
  {
    t: "ul",
    items: [
      "**Exam shops (EEC-style, ~₹7,500 spoken + IELTS/PTE add-ons):** built for study-abroad. Fine if the visa is the goal. Heavy if you only needed meeting English.",
      "**Franchise rooms (Veta-style, ₹3,500–₹10,000 / 2–4 months):** often one “spoken” batch for everyone. Beginners and Band 6 candidates share a 30-person room.",
      "**British Council:** the cleanest IELTS and CEFR ladder. Modules often ₹8,800–₹16,000. Buy it for the badge.",
      "**EngVarta / Cambly:** no course picker. You talk. Useful after you can talk.",
    ],
  },
  {
    t: "cta",
    text: "Not sure? Sit in a live batch of 8. We will tell you if IELTS is the wrong buy.",
    course: "/book-free-demo",
    label: "₹0 demo — we’ll say if you’re on the wrong course",
  },
];
