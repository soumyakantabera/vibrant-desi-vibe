import type { ArticleBody } from "@/content/blog/blocks";

/** /english-for-presentations-india */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**Short answer.** Explaining your work in English is three beats: **one outcome, three points, one ask.** You do not need a TED talk. You need 3 minutes that a manager can repeat. [Workplace English](/course-business-english) and [Interactive Speaking](/course-interactive-speaking) both drill this live. Rohan now walks working papers with partners in Mumbai — [his story](/success-stories).",
  },

  { t: "h2", text: "The 3-minute spine" },
  {
    t: "example",
    label: "Standup or client update",
    lines: [
      "Outcome: We cut the refund delay from 48 hours to 12.",
      "Beat 1: We mapped where tickets sat overnight.",
      "Beat 2: We moved two checks to the same form.",
      "Beat 3: Misses dropped from eleven a month to one.",
      "Ask: Approve the same form for the Pune queue this week.",
    ],
  },
  {
    t: "p",
    text: "Write those five lines before you open the deck. The slides are pictures of the lines, not the other way around. If you start with 18 slides, you will read them. Reading is not presenting.",
  },

  { t: "h2", text: "Where Indians usually lose the room" },
  {
    t: "table",
    caption: "Fixes we practise in class — not accent tips.",
    head: ["Habit", "What the room hears", "Swap"],
    rows: [
      ["History first", "We are lost", "Outcome first, then how"],
      ["“I will try to explain”", "You already apologised", "“Here’s the result.”"],
      ["Reading every bullet", "They opened mail", "One sentence per slide, said, not read"],
      ["No ask", "Nice story. Next.", "One decision, one date"],
    ],
  },

  { t: "h2", text: "Standups vs client decks vs interviews" },
  {
    t: "ul",
    items: [
      "**Standup (60–90 seconds):** yesterday, today, stuck. Same spine, shorter. Ananya now runs these.",
      "**Client deck (3–5 minutes):** outcome, three beats, ask. Neha’s lane.",
      "**Interview “tell me about a project”:** [60-second Tell Me About Yourself](/blog/tell-me-about-yourself-in-60-seconds) uses the same muscle. Sneha’s mocks sit here.",
    ],
  },

  { t: "h2", text: "Which class" },
  {
    t: "p",
    text: "If you can already chat and the deck is the problem → Workplace English, 3 months, ₹1,499/mo. If you freeze before slide one → Interactive, 3 months, ₹1,199/mo. If daily English is still the gap → Spoken, 6 months, ₹999/mo, then come back to decks. [Which class do I need?](/spoken-business-or-interactive-english).",
  },
  {
    t: "p",
    text: "Working a shift? [English for working professionals](/english-for-working-professionals-india). Calls more than decks? [Client-call English](/english-for-client-calls-india).",
  },

  {
    t: "cta",
    text: "Bring one real update from this week. We will run it in a live room of 8.",
    course: "/course-business-english",
    label: "See Workplace English",
  },
];
