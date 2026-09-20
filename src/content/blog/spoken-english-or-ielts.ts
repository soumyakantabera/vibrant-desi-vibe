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
        "₹999/mo, 6 months, approx. 6 learners",
        "Everyday chat in ~6 months",
      ],
      [
        "You can chat, but meetings, emails, clients go silent",
        "Workplace English",
        "₹1,999/mo, 3 months, approx. 6 learners",
        "Work talk in ~3 months",
      ],
      [
        "You freeze only when speaking, grammar is fine",
        "Interactive Speaking",
        "₹1,499/mo, 3 months, approx. 6 learners",
        "Hesitation, not knowledge",
      ],
      [
        "You need a visa / university / Band 7",
        "Sit IELTS with IDP / British Council",
        "Market coaching ₹8,000–₹35,000 + exam fee",
        "We do not sell that paper",
      ],
      [
        "You fail interviews you are qualified for",
        "Spoken or Interactive",
        "Interview English in those rooms",
        "60-sec intro + STAR in the batch",
      ],
    ],
  },
  {
    t: "p",
    text: "Fees are inclusive of taxes. Same teacher in West Bengal, Delhi, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Kerala.",
  },

  { t: "h2", text: "Spoken English is not IELTS with the exam removed" },
  {
    t: "p",
    text: "IELTS Speaking is a 11–14 minute test with three parts. Spoken English is shops, family WhatsApp voice notes, HR screens, and a 2-minute opinion. An IELTS course that never marks your **Writing Task 2** is an expensive conversation class. A Spoken English course that drills cue cards for six months will not get you Band 7 writing.",
  },
  {
    t: "p",
    text: "If you are Band 5.5 because you cannot talk, start with Spoken English. If you are Band 6 in Speaking and 5.5 in Writing, skip Spoken English and sit IELTS with a dedicated exam coach — we published a free [Band 7 writing](/blog/band-7-writing-4-paragraph-template) template. We do not sell IELTS as a course.",
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
  { t: "h2", text: "The cost of getting this wrong" },
  {
    t: "p",
    text: "IELTS first when you cannot hold a call: three months of cue cards, still silent in a shop, exam fee on top. Spoken English first when a university form asked for Band 7: six months of chat, Writing Task 2 still at 6.0. The picker above is cheaper than either detour. Fees: [IELTS coaching fees](/ielts-coaching-fees-india) and [class fees](/english-class-fees-india).",
  },
  { t: "h2", text: "HR asked for IELTS for a job in India" },
  {
    t: "p",
    text: "Rare, and worth asking whether they mean an English test or an English conversation. Most Indian interviews hear a [60-second intro](/blog/tell-me-about-yourself-in-60-seconds). Sit the exam when a form, a university or a country asks. Until then, [Spoken English](/spoken-english-for-beginners-india) or [Interactive Speaking](/course-interactive-speaking) is the room.",
  },
  {
    t: "cta",
    text: "Not sure? Sit in a live batch of around 6. We will tell you if IELTS is the wrong buy.",
    course: "/book-free-demo",
    label: "Book a Free Demo",
  },
];
