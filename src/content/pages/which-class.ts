import type { ArticleBody } from "@/content/blog/blocks";

/**
 * /spoken-business-or-interactive-english
 * Market picker: spoken vs business vs interactive. IELTS last.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**Short answer.** If you cannot hold a conversation yet, start with [Spoken English](/course-spoken-english) (6 months, ₹999/mo, inclusive of taxes). If you know the words but freeze, take [Interactive Speaking](/course-interactive-speaking) (3 months, ₹1,199/mo). If the problem is meetings, calls and emails, take [Business English](/course-business-english) (3 months, ₹1,999/mo). If you can talk and still fail the HR screen, take [Interview Preparation](/course-interview-preparation) (2 months, ₹1,999/mo). Sit an exam course only if a form asks for the exam.",
  },
  {
    t: "p",
    text: "Most people buy the wrong class because the internet sells “English” as one product. It is three rooms. This page is the picker.",
  },

  { t: "h2", text: "The three rooms, in one table" },
  {
    t: "table",
    caption:
      "Pick the bottleneck, then the course. Fees are inclusive of taxes. Approx. 6 learners in every English batch.",
    head: ["If this is you", "Take this", "Time & fee", "Done looks like"],
    rows: [
      [
        "Cannot form a full sentence",
        "Spoken English",
        "6 months · ₹999/mo, inclusive of taxes",
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
        "HR screens, tell-me-about-yourself, STAR",
        "Interview Preparation",
        "2 months · ₹1,999/mo",
        "60-second intro, live mocks, salary line",
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
    text: "Business English is meetings, client calls, updates, emails and explaining your work. It assumes you can already chat. Neha’s tax-desk calls and Aditya’s BI Analyst switch are this room. Deep dives: [client-call English](/english-for-client-calls-india) and [explain your work in 3 minutes](/english-for-presentations-india).",
  },

  { t: "h2", text: "What not to buy first" },
  {
    t: "ul",
    items: [
      "Do not buy IELTS because a cousin went abroad. Sit it with the test board when a **form** asks — we do not sell that paper.",
      "Do not buy 1:1 chat apps if you cannot form a sentence yet — there is nothing to practise.",
      "Do not buy a 30-day fluency pack. Everyday talk is about 6 months live.",
      "Interview Preparation is for people who already speak and now fail the job conversation — 2 months, ₹1,999/mo. Sneha’s story is that lane. If you cannot form a sentence yet, start with Spoken English.",
    ],
  },

  {
    t: "p",
    text: "Working nights or weekends? IST morning, evening and weekend batches — [English for working professionals](/english-for-working-professionals-india). Hindi- or Bengali-medium? You still belong here — [that guide](/english-hindi-bengali-medium).",
  },

  { t: "h2", text: "How the free consultation places you — vs a pitch" },
  {
    t: "p",
    text: "This page is the picker you can run yourself. The [free consultation](/book-free-demo) is the same picker, live, on your actual goal — not a generic table, and not a counsellor pitch for a course you did not ask for.",
  },
  {
    t: "ul",
    items: [
      "**You describe the problem.** Shop, freeze, standup, HR screen, career change, visa form.",
      "**We name the bottleneck.** One sentence. Not three rooms.",
      "**You leave with one recommendation** — Spoken, Interactive, Workplace, Interview Preparation, Career Counselling, sit IELTS with the test board, or stay free — plus fee, duration and IST slot in writing.",
      "**Every question you brought gets an answer.** Fees, GST, recordings, certificate, kids, refunds. If we cannot answer it, we say so.",
    ],
  },
  {
    t: "table",
    caption: "What other formats sell as a free session, and what we do instead.",
    head: ["Their free session", "What you actually get", "Us"],
    rows: [
      [
        "EngVarta / Cambly",
        "You talk. No diagnosis. No syllabus.",
        "We name the room first. Beginners should not buy 1:1 minutes yet.",
      ],
      [
        "British Council counsellor",
        "A CEFR module pitch, often ₹8,800–₹16,000",
        "We say if you need that badge. Speaking for work in India is a smaller, cheaper room.",
      ],
      [
        "Veta-style classroom",
        "Walk-in, sit in 25–40, or a pitch that will not print the cap",
        "Cap is ≈6, printed. Consultation is a small batch with personalised advice, not a packed room you sample.",
      ],
      [
        "Exam shop (EEC-style)",
        "The free session sells IELTS/PTE",
        "If no form asked for a band, we tell you IELTS is the wrong buy.",
      ],
    ],
  },
  {
    t: "p",
    text: "It is counselling, not a class. You will not speak for 8 minutes on a mic. That is the paid room. Named 2026 fees: [compare institutes](/english-institute-comparison-india).",
  },

  {
    t: "cta",
    text: "Unsure? Get a free consultation. We diagnose the bottleneck and place you in one room — Spoken, Interactive, Workplace or Interview Preparation — not all of them.",
    course: "/book-free-demo",
    label: "Get Free Consultation",
  },
];
