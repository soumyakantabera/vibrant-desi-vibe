import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: '"Tell me about yourself" is the first question in almost every interview, and it is genuinely ambiguous. Nobody has told you which self they want. Your education? Your family? Your whole career, in order? So candidates guess, and most guess wrong — they start at their birthplace and work forwards, and by the time they reach anything relevant the interviewer has stopped listening.',
  },
  {
    t: "p",
    text: "The question is not really open. Translated honestly, it means:",
  },
  {
    t: "quote",
    text: "Give me sixty seconds on why you are in this chair.",
  },
  {
    t: "p",
    text: "Everything below follows from that. Sixty to ninety seconds, three parts, and every sentence has to argue for **this** job.",
  },

  { t: "h2", text: "The structure: Present → Past → Future" },
  {
    t: "table",
    head: ["Part", "Time", "What goes in it"],
    rows: [
      [
        "Present",
        "~20 sec",
        "What you do now, plus one line of context so they can picture the scope",
      ],
      [
        "Past",
        "~20 sec",
        "One or two things you have done that argue for this role, each with a result",
      ],
      ["Future", "~20 sec", "What you want next, and something specific about this company"],
    ],
  },
  {
    t: "p",
    text: "Three parts, roughly twenty seconds each. It is a small structure, and that is the point — it is short enough to hold in your head under pressure, which is when you will need it.",
  },

  { t: "h2", text: "Present: where you are, in two sentences" },
  {
    t: "example",
    label: "Good",
    lines: [
      "I'm a customer support associate at a fintech company in Bangalore, handling escalated payment issues for about 40 accounts a day.",
      "I've been in that role for two years.",
    ],
  },
  {
    t: "p",
    text: '"40 accounts a day" is doing the work in that answer. Without it, "customer support associate" could mean almost anything. With it, the interviewer knows your volume, your pressure level and roughly your seniority, in four words.',
  },
  {
    t: "p",
    text: "Now the harder part — what to **leave out**. Indian interview convention has traditionally invited a personal introduction, and a lot of coaching still teaches it. Drop all of it:",
  },
  {
    t: "ul",
    items: [
      "Your age",
      "Your marital status",
      "Your hometown, unless the role is location-dependent",
      "Your father's occupation",
      "Your school, and your board exam percentages, if you have a degree",
      "Your hobbies, in the opening answer",
    ],
  },
  {
    t: "p",
    text: "None of it argues for the job, and in an MNC or a GCC interview some of it makes the interviewer visibly uncomfortable, because they are trained not to consider it. You are spending your best twenty seconds on information they are required to ignore.",
  },

  { t: "h2", text: "Past: one or two items, chosen by a single test" },
  {
    t: "p",
    text: "You have done many things. The test for whether one belongs in this answer is: **does this argue for this job?** If it does not, it goes somewhere else in the interview or nowhere at all.",
  },
  {
    t: "p",
    text: "And whatever you pick has to arrive with a result attached. The difference is stark:",
  },
  {
    t: "table",
    head: ["Duties (weak)", "Outcome (strong)"],
    rows: [
      [
        "I was responsible for handling customer escalations.",
        "I took over the escalation queue and brought average resolution time from 48 hours to 20.",
      ],
      [
        "I was involved in training new team members.",
        "I trained 14 new joiners last year; four of them are now handling client calls independently.",
      ],
      [
        "I worked on process improvement.",
        "I rewrote our refund SOP after we kept missing the 24-hour window — misses dropped to about one a month.",
      ],
    ],
  },
  {
    t: "p",
    text: "The left column describes a job description. The right column describes a person. Interviewers hear the left column all day.",
  },
  {
    t: "p",
    text: "If you genuinely do not have numbers, use a before-and-after instead: what was true when you started, what was true when you left. That works fine and it is honest.",
  },

  { t: "h2", text: "Future: what you want, and why here" },
  {
    t: "example",
    label: "Good",
    lines: [
      "I want to move into a role where I'm working with clients directly rather than only fixing problems after they escalate.",
      "That's why I applied here — your customer success team owns the account from onboarding onwards, which is the part I've been doing informally anyway.",
    ],
  },
  {
    t: "p",
    text: "The second sentence is the one candidates skip, and it is the one that separates you from everyone else who gave a competent answer. It requires ten minutes on the company's careers page or the job description. Almost nobody does those ten minutes.",
  },
  {
    t: "p",
    text: 'Be careful the "why here" is real. "Because your company is a market leader with a great culture" is not specific to anyone and reads as filler.',
  },

  { t: "h2", text: "Three complete answers" },

  { t: "h3", text: "Fresher — engineering graduate, no work experience" },
  {
    t: "example",
    label: "~60 seconds",
    lines: [
      "**(Present)** I graduated this year in electronics from a college in Pune, and for the last eight months I've been building small automation scripts for a friend's logistics business — mostly cleaning up their daily order data.",
      "**(Past)** In my final year I led a four-person team on our capstone project. The part I ended up doing was coordination: keeping everyone on schedule and presenting to our guide every fortnight. We were one of two teams that finished on time.",
      "**(Future)** I want to start in a role where I'm writing code every day but talking to the people using it, rather than sitting one step removed. Your associate engineer role sits inside the product team rather than in a separate delivery pool, which is why I applied here specifically.",
    ],
  },
  {
    t: "p",
    text: "Notice a fresher does not need work experience for this to work. The capstone project supplies the Past. What matters is that it is described as an outcome, not a duty.",
  },

  { t: "h3", text: "Career switcher — BPO to customer success" },
  {
    t: "example",
    label: "~70 seconds",
    lines: [
      "**(Present)** I'm a senior process associate at a BPO in Kolkata, handling billing escalations for a US healthcare client — about 30 cases a day, and I've been the escalation point for my team for the last year.",
      "**(Past)** Two things I'd point to. I rewrote our refund SOP after we kept breaching the 24-hour window, and misses dropped to roughly one a month. And I've trained eleven new joiners, which meant explaining a complicated billing system to people who'd never seen it.",
      "**(Future)** Both of those are really account management, just without the title, and that's the direction I want to go. Your customer success team handles renewals for existing accounts, which is closer to what I already do than a straight sales role would be.",
    ],
  },
  {
    t: "p",
    text: 'The switcher\'s whole job in this answer is to make the switch sound like a continuation rather than a jump. "Both of those are really account management, just without the title" does that in one sentence.',
  },

  { t: "h3", text: "Experienced — six years, moving up" },
  {
    t: "example",
    label: "~70 seconds",
    lines: [
      "**(Present)** I've been a marketing executive at a mid-size D2C brand in Mumbai for three years, running our email and retention programme end to end — roughly 200,000 subscribers.",
      "**(Past)** Before that I was at an agency for three years, which is where I learned to work to a brief and a deadline. The thing I'm proudest of in the current role is rebuilding our win-back flow last year; it recovered about 8% of lapsed customers, against 3% before.",
      "**(Future)** I've taken retention as far as I can as an individual contributor, and what I want next is to own the whole lifecycle with a small team. That's what this role is, which is why I'm here rather than looking sideways.",
    ],
  },

  { t: "h2", text: "The four ways people lose this question" },
  {
    t: "ol",
    items: [
      "**Reciting the CV.** The interviewer has it open in front of them. Reading it aloud tells them nothing they do not have and uses up the only minute where you choose what they hear.",
      '**Starting from childhood.** "I was born in Ranchi, I did my schooling at…" By sixty seconds you are still in college and the useful part never arrives.',
      '**Volunteering a weakness.** "I don\'t have much experience, but…" Nobody asked. You have introduced the objection yourself and now the rest of the interview is spent on it.',
      "**Memorising it word for word.** This is the one that surprises people, and it is dealt with below.",
    ],
  },

  { t: "h2", text: "Practise the beats, not the words" },
  {
    t: "p",
    text: "A word-for-word memorised answer has a distinctive flat rhythm — the stress lands in the wrong places, because you are reciting rather than saying. Experienced interviewers hear it immediately, and it reads as rehearsed in a way that makes everything after it sound rehearsed too.",
  },
  {
    t: "p",
    text: "The bigger risk is mechanical. If you lose your place in a memorised paragraph there is no way back, because you are retrieving a text rather than making an argument. People go blank at the thirty-second mark and cannot restart. An answer you are constructing live can absorb a stumble; a recited one cannot.",
  },
  {
    t: "p",
    text: "So memorise exactly two things:",
  },
  {
    t: "ul",
    items: [
      "The three beats — Present, Past, Future — in that order.",
      "Your numbers. 40 accounts a day, 48 hours to 20, eleven new joiners, 8% against 3%. These are the only things you should be able to say identically every time.",
    ],
  },
  {
    t: "p",
    text: "Then say it out loud, differently, ten times. Record two of those and listen for whether you actually reached the Future part — most people run long on Present and never get there.",
  },
  {
    t: "p",
    text: "Honestly, this is one of those things that is hard to fix alone, because the failure mode is invisible from the inside: your answer sounds fine in your head and flat out loud. Someone has to hear it. A friend works. So does recording yourself, if you can stand listening back — see our post on [speaking habits](/blog/5-speaking-habits-that-killed-my-hesitation) for how to review a recording without demoralising yourself.",
  },
  {
    t: "cta",
    text: "Interview Preparation is two months, intensive, in a batch of approximately 6 learners — HR rounds, STAR behavioural answers, three recorded mock interviews you get to watch back, and a resume and LinkedIn review. ₹1,499/month. The demo class is free and it is a real class.",
    course: "/course-interview-prep",
    label: "See the Interview Prep course",
  },
];
