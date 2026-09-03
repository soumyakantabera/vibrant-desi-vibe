import type { ArticleBody } from "@/content/blog/blocks";

/**
 * /spoken-business-or-interactive-english
 * Market picker: spoken vs business vs interactive. IELTS last.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**Short answer.** If you cannot hold a conversation yet, start with [Spoken English](/course-spoken-english) (6 months, ₹999/mo). If you know the words but freeze, take [Interactive Speaking](/course-interactive-speaking) (3 months, ₹1,199/mo). If the problem is meetings, calls and emails, take [Workplace English](/course-business-english) (3 months, ₹1,999/mo). Sit an exam course only if a form asks for the exam.",
  },
  {
    t: "p",
    text: "Most people buy the wrong class because the internet sells “English” as one product. It is three rooms. This page is the picker. A ₹0 live demo is how you confirm it.",
  },

  { t: "h2", text: "The three rooms, in one table" },
  {
    t: "table",
    caption:
      "Pick the bottleneck, then the course. Fees include GST. Approx. 6 learners in every English batch.",
    head: ["If this is you", "Take this", "Time & fee", "Done looks like"],
    rows: [
      [
        "Cannot form a full sentence",
        "Spoken English",
        "6 months · ₹999/mo",
        "Introduce yourself, shops, phone, 2 minutes on a topic",
      ],
      [
        "You know the words. You freeze.",
        "Interactive Speaking",
        "3 months · ₹1,199/mo",
        "You talk every class. Standups, debates, 1-minute prompts",
      ],
      [
        "Chat is fine. Meetings are not.",
        "Workplace / Business English",
        "3 months · ₹1,999/mo",
        "Updates, client calls, emails, a 5-minute explanation of your work",
      ],
      [
        "A form, visa or university asks for a band",
        "IELTS — only then",
        "3 months · ₹2,499/mo",
        "Marked mocks. Writing is usually the bottleneck",
      ],
    ],
  },

  { t: "h2", text: "Spoken English — when daily life is the gap" },
  {
    t: "p",
    text: "Spoken English is the 6-month map: sounds, sentences, vocabulary, then real conversations. It is for Hindi- and Bengali-medium beginners, people who read more than they speak, and anyone who still translates in their head. You speak every hour in a batch of around 6. See [how long it takes](/how-long-to-learn-spoken-english) and Kavya’s story on [real results](/success-stories).",
  },

  { t: "h2", text: "Interactive English — when freeze is the gap" },
  {
    t: "p",
    text: "Interactive is not a grammar lecture. It is games, debates, storytelling and 1-minute prompts so the checking step between thinking and speaking gets shorter. If you can write a decent message but go silent on a call, this is the room. Ananya’s standup story is this problem. Read the full freeze guide: [Interactive English when you freeze](/interactive-english-class-hesitation).",
  },

  { t: "h2", text: "Business English — when work is the gap" },
  {
    t: "p",
    text: "Workplace English is meetings, client calls, updates, emails and explaining your work. It assumes you can already chat. Neha’s tax-desk calls and Aditya’s BI Analyst switch are this room. Deep dives: [client-call English](/english-for-client-calls-india) and [explain your work in 3 minutes](/english-for-presentations-india).",
  },

  { t: "h2", text: "What not to buy first" },
  {
    t: "ul",
    items: [
      "Do not buy IELTS because a cousin went abroad. Buy it when a **form** asks.",
      "Do not buy 1:1 chat apps if you cannot form a sentence yet — there is nothing to practise.",
      "Do not buy a 30-day fluency pack. Everyday talk is about 6 months live.",
      "Interview prep is for people who already speak and now need the job conversation. Sneha’s story is that lane.",
    ],
  },

  {
    t: "p",
    text: "Working nights or weekends? IST morning, evening and weekend batches — [English for working professionals](/english-for-working-professionals-india). Hindi- or Bengali-medium? You still belong here — [that guide](/english-hindi-bengali-medium).",
  },

  {
    t: "cta",
    text: "Unsure? Sit in a live class for ₹0. We will place you in Spoken, Interactive or Business — not all three.",
    course: "/book-free-demo",
    label: "Book a ₹0 live demo",
  },
];
