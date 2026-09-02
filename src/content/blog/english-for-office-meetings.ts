import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "You do not become confident in meetings by memorising ‘corporate vocabulary’. You become useful in meetings by doing five small things clearly: entering the conversation, stating a point, asking when something is unclear, disagreeing without creating friction, and confirming what happens next.",
  },
  {
    t: "p",
    text: "The phrases below are deliberately ordinary. That is the point. Under pressure, a short sentence you can actually retrieve is more valuable than an impressive sentence that disappears when three people are waiting for you to speak.",
  },

  { t: "h2", text: "Before the meeting: prepare one outcome, not a speech" },
  {
    t: "p",
    text: "Write down the one thing you need from the meeting. Approval? A decision? A missing detail? More time? If you do not know your intended outcome, better English will only help you speak vaguely for longer.",
  },
  {
    t: "example",
    label: "A useful one-line objective",
    lines: [
      "By the end of this call, I need the client to confirm which version they want.",
      "I need the team to decide whether Friday's date is still realistic.",
    ],
  },

  { t: "h2", text: "1. Entering the conversation" },
  {
    t: "table",
    head: ["Situation", "Say this"],
    rows: [
      ["You have one point to add", "Can I add one point here?"],
      ["Someone is still speaking", "Sorry to jump in — may I clarify one detail?"],
      [
        "The discussion has moved on",
        "Before we close this topic, there is one risk we should check.",
      ],
      ["You were asked unexpectedly", "Yes. My short answer is ___. The reason is ___."],
    ],
  },
  {
    t: "p",
    text: "Do not wait for the perfect gap. In fast meetings there may not be one. Use a clear entry sentence, make one point, and stop. Confidence is often just learning that you are allowed to take a turn.",
  },

  { t: "h2", text: "2. Asking for clarification without sounding lost" },
  {
    t: "p",
    text: "Pretending to understand is expensive. It creates wrong work, rework and awkward follow-ups. A professional clarification question shows what you understood and isolates the missing part.",
  },
  {
    t: "example",
    label: "Weak",
    lines: ["I didn't understand. Can you repeat?"],
  },
  {
    t: "example",
    label: "Stronger",
    lines: [
      "I understood that the format needs to change. Could you clarify whether the deadline also moves?",
      "Just to check my understanding: you want option B, but with the pricing from option A. Is that right?",
    ],
  },
  {
    t: "p",
    text: "The stronger version is not stronger because the English is harder. It is stronger because it proves you listened and makes the other person answer one precise question.",
  },

  { t: "h2", text: "3. Giving a status update in under one minute" },
  {
    t: "ol",
    items: [
      "State what is complete.",
      "State what is happening now.",
      "Name the blocker, if there is one.",
      "Give the next action and date.",
    ],
  },
  {
    t: "example",
    label: "Example",
    lines: [
      "The revised draft is complete and the client received it yesterday. We are waiting for legal approval on section four. If that arrives by Wednesday, I can send the final version on Friday. If not, the realistic date is Monday.",
    ],
  },
  {
    t: "p",
    text: "Notice what is missing: a minute-by-minute history of the project. Background belongs in the update only if it changes the decision somebody needs to make.",
  },

  { t: "h2", text: "4. Disagreeing with a colleague or senior" },
  {
    t: "p",
    text: "Polite disagreement does not mean hiding the disagreement. State the concern, give the reason, and offer a workable alternative.",
  },
  {
    t: "table",
    head: ["Avoid", "Use"],
    rows: [
      [
        "No, that won't work.",
        "I see the advantage. My concern is the Friday deadline because testing needs two full days.",
      ],
      [
        "Maybe possibly we can think about another option?",
        "I'd recommend option B because it removes the approval delay.",
      ],
      [
        "You are wrong about the requirement.",
        "I may have a different version. The brief I received says ___. Can we check which one is current?",
      ],
    ],
  },
  {
    t: "p",
    text: "One caution: do not use ‘I agree, but…’ when you do not agree. People hear the ‘but’. Use ‘I see the advantage’ only when you can name the advantage honestly.",
  },

  { t: "h2", text: "5. Handling a question when you do not know" },
  {
    t: "example",
    label: "Use one of these",
    lines: [
      "I don't have the confirmed number with me. I'll check and send it by 3pm.",
      "I can give you an estimate now, but I would prefer to verify it before we decide.",
      "That sits with another team. Let me confirm the owner and come back to you today.",
    ],
  },
  {
    t: "p",
    text: "This is professional English and professional judgement at the same time. Fluency is not the ability to manufacture an answer instantly. It is the ability to keep the conversation safe when the answer is not available.",
  },

  { t: "h2", text: "6. Closing with a decision and owner" },
  {
    t: "p",
    text: "Meetings leak value at the end. Everybody talked, nobody confirmed the decision, and three people leave with different assumptions. Use a twenty-second close.",
  },
  {
    t: "example",
    label: "Meeting close",
    lines: [
      "Let me summarise the decision. We are going with option B. Riya will send the revised file by Thursday, and I will confirm the client review for Friday. The only open point is legal approval.",
    ],
  },

  { t: "h2", text: "A practice method that works without a course" },
  {
    t: "ol",
    items: [
      "Choose one real meeting from the coming week.",
      "Write your objective and one sentence you need to say.",
      "Record yourself saying it once. Do not restart.",
      "Listen for pace, unnecessary background and unfinished sentences.",
      "Say it again in fewer words.",
      "Use it in the meeting and write down what happened.",
    ],
  },
  {
    t: "p",
    text: "Repeat that for four weeks and you will improve. A live course becomes useful when you need somebody to create harder situations, catch patterns you cannot hear yourself and make you practise even when work is busy.",
  },

  { t: "h2", text: "When Workplace English is the wrong course" },
  {
    t: "ul",
    items: [
      "If you cannot yet hold a basic conversation, start with Basic Spoken English.",
      "If you only need an English certificate, choose an institution that issues one. We currently do not.",
      "If you already speak comfortably in meetings and only need a phrase list, keep this article and practise independently.",
      "If the real problem is interview performance, choose Interview Preparation rather than workplace communication.",
    ],
  },
  {
    t: "cta",
    text: "Workplace English practises meetings, calls, updates, emails and presentations for 3 months, up to twice a week, in a live batch capped at 6. The fee is ₹1,499/month including GST. Attend a real class before deciding.",
    course: "/course-business-english",
    label: "See the Workplace English syllabus",
  },
];
