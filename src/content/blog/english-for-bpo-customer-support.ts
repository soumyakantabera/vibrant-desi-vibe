import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "English for BPO and customer support is not an accent contest. The customer wants three things: to feel understood, to understand what will happen next, and to trust that you will not disappear after the call. Clear structure beats a fake accent every time.",
  },
  {
    t: "p",
    text: "That does not mean pronunciation is irrelevant. Names, numbers, dates and technical terms must be clear. But spending months trying to sound American while still giving vague answers is the wrong order of work.",
  },

  { t: "h2", text: "The five skills recruiters and customers can actually hear" },
  {
    t: "table",
    head: ["Skill", "What it sounds like on a call"],
    rows: [
      ["Listening", "You summarise the problem before offering a solution."],
      [
        "Clarification",
        "You isolate the missing detail instead of asking the customer to repeat everything.",
      ],
      ["Ownership", "You name the next action, owner and time."],
      ["Plain English", "You explain the process without internal jargon."],
      ["Recovery", "When you do not know, you verify instead of guessing."],
    ],
  },

  { t: "h2", text: "1. Open the call without sounding like a recording" },
  {
    t: "p",
    text: "Use the required company greeting, but slow down enough for the customer to hear your name. The goal is not to perform friendliness. It is to create a clean start and move quickly to the reason for the call.",
  },
  {
    t: "example",
    label: "Simple opening",
    lines: [
      "Good morning, you're speaking with Ananya from the support team. How can I help today?",
      "Before we begin, may I confirm your order number?",
    ],
  },

  { t: "h2", text: "2. Prove that you understood the problem" },
  {
    t: "p",
    text: "Customers become angrier when they have to explain the same problem repeatedly. Before giving instructions, summarise what you heard and ask for confirmation.",
  },
  {
    t: "example",
    label: "Problem summary",
    lines: [
      "Let me make sure I have this right. The payment went through, but the order still shows as unpaid. Is that correct?",
      "So the issue started after yesterday's update, and it affects only one device. Have I understood correctly?",
    ],
  },
  {
    t: "p",
    text: "This sentence does more than show English ability. It catches wrong assumptions before they become wrong solutions.",
  },

  { t: "h2", text: "3. Ask one clarification question at a time" },
  {
    t: "table",
    head: ["Vague", "Precise"],
    rows: [
      ["Can you explain again?", "What error message do you see after you select ‘Pay now’?"],
      ["What is the problem exactly?", "Is the screen frozen, or does the app close completely?"],
      ["Please provide details.", "Could you tell me the date and amount of the transaction?"],
    ],
  },
  {
    t: "p",
    text: "A precise question is easier for the customer and easier for you. It also reduces the cognitive load of working in a second language: one detail arrives at a time.",
  },

  { t: "h2", text: "4. Replace internal jargon with the customer's next step" },
  {
    t: "p",
    text: "The customer does not need to know that you raised an L2 ticket, contacted the backend team or followed the SOP. They need to know what that means for them.",
  },
  {
    t: "table",
    head: ["Internal language", "Customer-facing language"],
    rows: [
      ["I have escalated this to L2.", "A specialist is reviewing this now."],
      [
        "The ticket is under process.",
        "We are checking the payment record. You will receive an update by 4pm tomorrow.",
      ],
      [
        "As per SOP, TAT is 48 hours.",
        "This usually takes up to 48 hours. I will update you sooner if it is resolved early.",
      ],
    ],
  },

  { t: "h2", text: "5. Handle an angry customer without arguing with the emotion" },
  {
    t: "p",
    text: "Do not tell an angry person to calm down. Do not debate whether they are ‘technically correct’. Acknowledge the impact, take ownership of the next step and give a time.",
  },
  {
    t: "example",
    label: "Acknowledge + action + time",
    lines: [
      "I understand why this is frustrating, especially after you contacted us twice. I am checking the payment record now. I will either resolve it on this call or tell you the exact next step before we disconnect.",
    ],
  },
  {
    t: "p",
    text: "Avoid promising the final resolution if another team controls it. Promise the next action you personally can deliver.",
  },

  { t: "h2", text: "6. Recover when you did not hear or do not know" },
  {
    t: "example",
    label: "Useful recovery phrases",
    lines: [
      "I caught the first part, but I missed the last number. Could you repeat just the last four digits?",
      "The line broke for a moment after you said ‘Tuesday’. Could you repeat what happened next?",
      "I do not want to give you an incorrect answer. May I place you on hold for two minutes while I verify this?",
      "I need to confirm that with the billing team. I will update you by email before 5pm today.",
    ],
  },

  { t: "h2", text: "7. Close the call with no loose ends" },
  {
    t: "example",
    label: "Call close",
    lines: [
      "Before we close, let me summarise. I have raised the refund request for ₹2,400. You will receive the confirmation today, and the amount should return within five working days. Is there anything in that summary you would like me to clarify?",
    ],
  },
  {
    t: "p",
    text: "A good close repeats the action, amount or item, and time. ‘Is there anything else?’ is useful only after the important details are already clear.",
  },

  { t: "h2", text: "A no-cost practice drill for the next seven days" },
  {
    t: "ol",
    items: [
      "Choose one common customer problem from your current or target role.",
      "Record a 90-second response: summary, clarification question, next action and time.",
      "Listen once for unclear numbers, dates and unfinished sentences.",
      "Remove internal jargon and repeat the response.",
      "Ask a friend to interrupt with one unexpected question.",
      "Recover without restarting the whole script.",
      "Repeat with a complaint instead of an easy enquiry.",
    ],
  },

  { t: "h2", text: "Do you need a dedicated BPO course?" },
  {
    t: "p",
    text: "Not automatically. If you are a beginner, build everyday spoken English first. If you already work in support and need call handling, client communication, updates and professional writing, a broader Workplace English course can cover the relevant skills without inventing another course name. If your immediate goal is clearing the recruitment round, Interview Preparation may be the faster route.",
  },
  {
    t: "p",
    text: "Be sceptical of any course promising a guaranteed BPO job, guaranteed salary or a neutral foreign accent in a few weeks. English training can improve one part of employability. It cannot control hiring demand, your technical fit, shift availability or interview performance on the day.",
  },
  {
    t: "cta",
    text: "Workplace English practises calls, clarification, status updates, professional messages and presentations in a live batch of approximately 6 learners. Bring one real support or client scenario to the ₹0 demo and judge the correction for yourself.",
    course: "/course-business-english",
    label: "Explore Workplace English",
  },
];
