import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "The standard advice for getting out of back-office BPO work is: improve your English. So people spend six months on English — an app, a course, YouTube, all of it — genuinely get better, start applying, and the interviews still do not convert.",
  },
  {
    t: "p",
    text: "Here is why. When a hiring manager reads a CV showing three years of back-office process work, they are asking one question: **has this person ever been trusted in front of a customer?** Your CV answers *no*. Better English does not change that answer. It was never an English question.",
  },
  {
    t: "quote",
    text: "The barrier is evidence, not English. English is what lets you present the evidence — but you have to have some.",
  },
  {
    t: "p",
    text: "So this plan is arranged around manufacturing that evidence inside the job you already have, and only then going to market. Six months, in order. It is not fast, and the last section is honest about what it actually gets you.",
  },

  { t: "h2", text: "First: pick which client-facing role you are aiming at" },
  {
    t: "p",
    text: '"Client-facing" is five quite different jobs, and they are not equally reachable from where you are.',
  },
  {
    t: "table",
    head: ["Role", "What it really is", "Reachable from BPO?"],
    rows: [
      [
        "Customer Success",
        "Keeping existing accounts happy and renewing",
        "**Yes — the highest-probability target.** Your domain knowledge transfers directly.",
      ],
      [
        "Account Management",
        "Owning a set of accounts, including commercials",
        "Yes, usually one step after Customer Success",
      ],
      [
        "Inside Sales",
        "Selling to inbound and outbound leads",
        "Possible, but it is a different skill and often commission-heavy",
      ],
      [
        "Client Servicing (agency)",
        "Running client relationships on delivery work",
        "Possible, usually needs a domain switch too",
      ],
      [
        "Field Sales",
        "Travelling, closing, targets",
        "Hardest jump, and least related to what you do now",
      ],
    ],
  },
  {
    t: "p",
    text: "Customer Success is the one to aim at, and the reason is specific: it is the only one of the five where **your existing knowledge is the qualification.** You already know the product, the common failure modes, the escalation paths and what makes customers angry. A fresh graduate hired into that team knows none of it and takes four months to learn it. That is your advantage, and it disappears if you aim at sales instead, where none of it counts.",
  },
  {
    t: "p",
    text: "Pick one and stop applying to the others. Applying to all five produces a CV that argues for none of them.",
  },

  { t: "h2", text: "Months 1–2: manufacture evidence where you already are" },
  {
    t: "p",
    text: "This is the part people skip because it does not feel like progress. It is the part that decides the outcome.",
  },
  {
    t: "p",
    text: "Inside your current job there are almost certainly opportunities to do client-facing work that nobody is competing for, because they are extra work with no extra pay. Take them:",
  },
  {
    t: "ul",
    items: [
      "**Volunteer for client calls, even silently.** Ask your manager if you can sit in on the weekly client call as a listener. Do this for four weeks and then ask to present one section — usually the numbers, which is the safest thing to present.",
      "**Take the escalations nobody wants.** An angry customer handled well is the single most useful story you will have in an interview. Ask to own the ones that come back a second time.",
      "**Write the SOP.** Every process has undocumented steps. Writing them down is unglamorous, visible to management, and gives you a concrete artefact with your name on it.",
      "**Train new joiners.** This is the best proxy for client-facing work there is, and it is usually available for the asking. Explaining a complicated system to someone who does not understand it, patiently, is exactly the skill being hired for.",
      "**Coordinate across teams.** Anything that requires you to chase another department and negotiate a timeline is stakeholder management with a different label.",
    ],
  },
  {
    t: "p",
    text: "One practical thing, and it matters more than it sounds: **start writing the numbers down now, this week.** How many escalations you handle. Current resolution time. How many people you have trained. What the SOP miss rate was before you rewrote it.",
  },
  {
    t: "p",
    text: "You cannot reconstruct these later. In month five you will sit down to write your CV and try to remember what your average handling time was in month one, and you will either guess — which is dangerous, because you may be asked to defend it — or leave it out. A note on your phone is enough.",
  },

  { t: "h2", text: "Months 3–4: two specific English skills" },
  {
    t: "p",
    text: 'Not "improve your English". Two specific things, both of which fail in interviews and in client calls for the same reason.',
  },

  { t: "h3", text: "Skill 1: explaining something complicated, in a structure" },
  {
    t: "p",
    text: "A client asks what went wrong. The untrained answer wanders through the whole history and never lands. The structure that fixes it is four beats:",
  },
  {
    t: "ol",
    items: [
      "**Situation** — one sentence of context.",
      "**Complication** — what went wrong.",
      "**Resolution** — what you did.",
      "**Next step** — what happens now, with a time on it.",
    ],
  },
  {
    t: "example",
    label: "Worked example",
    lines: [
      "**(Situation)** Your refunds normally clear within 24 hours.",
      "**(Complication)** Between the 3rd and the 7th, about 40 of them didn't — our payment partner changed a validation rule and our system kept retrying instead of flagging it.",
      "**(Resolution)** We processed all 40 manually on the 7th, and we've added an alert so a retry loop now raises a ticket after two attempts instead of running silently.",
      "**(Next step)** I'll send you the list of affected transactions today, and I'll confirm on Friday that the alert has fired correctly through a full week.",
    ],
  },
  {
    t: "p",
    text: "Practise this on real incidents from your own queue. Four beats, out loud, sixty seconds. It is the same structural discipline as the [interview answer](/blog/tell-me-about-yourself-in-60-seconds) — structure first, then words.",
  },

  { t: "h3", text: "Skill 2: saying difficult things" },
  {
    t: "p",
    text: "This is the one that actually stops people, and it is not vocabulary. Back-office work rarely requires you to disappoint someone in real time. Client-facing work requires it weekly.",
  },
  {
    t: "p",
    text: "Rehearse three sentences until they come out without a wobble:",
  },
  {
    t: "ul",
    items: [
      "**\"I don't know — I'll find out and come back to you by end of day.\"** The most useful sentence in the entire job. People invent an answer instead, because not knowing feels like failure, and inventing is what destroys trust.",
      "**\"That timeline won't work. Here's what I can do instead.\"** Refusing while offering something is the whole skill.",
      "**\"That's fair, and I'm sorry it happened. Here's what we've changed.\"** Accepting a complaint without either arguing or grovelling.",
    ],
  },
  {
    t: "p",
    text: "Say them out loud. They are short, and they are still hard, because the difficulty is not linguistic. If you want to practise this with someone rather than alone, that is what [Interactive Speaking](/course-interactive-speaking) role-plays are for — but a colleague who will run the scenario with you works too.",
  },

  { t: "h2", text: "Month 5: rewrite the CV, and apply internally first" },
  {
    t: "p",
    text: "Now the notes from months 1–2 become the CV. Every bullet gets converted from duty to outcome.",
  },
  {
    t: "table",
    head: ["Before", "After"],
    rows: [
      [
        "Responsible for handling customer escalations",
        "Owned repeat escalations for a US healthcare client; cut average resolution from 48 to 20 hours",
      ],
      [
        "Involved in training and onboarding",
        "Trained 11 new joiners; 4 now handle client calls independently",
      ],
      [
        "Worked on process documentation",
        "Rewrote the refund SOP after repeated 24-hour breaches; misses fell to ~1 a month",
      ],
      [
        "Coordinated with internal teams",
        "Ran the weekly handover with the payments team; owned the escalation path end to end",
      ],
    ],
  },
  {
    t: "p",
    text: "Then — and this is the highest-value line in this article — **apply internally before you apply anywhere else.**",
  },
  {
    t: "p",
    text: "An internal move to your own company's customer success or account management team is far more likely to succeed than an external one, for reasons that have nothing to do with luck:",
  },
  {
    t: "ul",
    items: [
      "Your evidence is verifiable. The hiring manager can walk over and ask your current manager whether you really cut resolution time. Externally, they can only take your word for it.",
      "Your domain knowledge is worth something to them specifically — same product, same clients, same systems. To an external employer it is generic.",
      'Internal moves often waive the "must have client-facing experience" filter that would auto-reject your CV externally.',
      "The people you helped in months 1–2 are in the building, and some of them will be asked about you.",
    ],
  },
  {
    t: "p",
    text: "If your company has no such team, look at companies where you can be referred by someone who has actually seen you work. Cold applications are the least effective route and should be the last one you try, not the first.",
  },

  { t: "h2", text: "Month 6: the four questions you will be asked" },
  {
    t: "p",
    text: "Interviews for these roles are fairly predictable. Prepare four answers, each in the Situation → Complication → Resolution → Next step shape.",
  },
  {
    t: "ol",
    items: [
      '**"Tell me about a difficult customer."** Pick one where you were partly at fault. Answers where the customer was simply unreasonable and you were flawless are not believed.',
      '**"You\'ve been in a back-office role — why do you think you can do this?"** Do not get defensive. Name the client-facing work you did anyway, with numbers. This is exactly what months 1–2 were for.',
      '**"How would you handle a client asking for something we can\'t deliver?"** This is sentence two from the rehearsal list. Refuse, then offer the alternative.',
      '**"Where do you see yourself in three years?"** Say account ownership. Saying "management" this early reads as wanting to leave the job you are applying for.',
    ],
  },
  {
    t: "p",
    text: "Expect to send between 8 and 20 applications for a handful of interviews. That is the normal ratio for a role change, not a sign that something is wrong with you. The internal application, if you have one, is worth more than all the external ones together.",
  },

  { t: "h2", text: "What this realistically gets you" },
  {
    t: "p",
    text: "Two honest things, because the version of this article without them is not much use.",
  },
  {
    t: "p",
    text: "**The first move is often lateral.** You will frequently move into a customer success or junior account role at roughly the same salary, sometimes marginally less if you are also changing company or city. People expect the switch itself to pay, and are demoralised when it does not, and quit six weeks in.",
  },
  {
    t: "p",
    text: "**The money arrives at the next move, not this one.** Twelve to eighteen months into a client-facing role you have something you have never had before: a CV that says you have been trusted with customers, with results attached. That is the move where compensation changes meaningfully, because you are no longer asking anyone to take a risk.",
  },
  {
    t: "p",
    text: "So the honest framing is that this six months buys you a title and a track record, not a raise. If you need more money this quarter, this is the wrong plan and overtime is the right one. If you want a different career in two years, this is roughly what it takes.",
  },
  {
    t: "p",
    text: "One last thing: none of the first four months requires spending money. Volunteering for calls, taking escalations, writing the SOP, training joiners, keeping a note of your numbers — that is free, and it is most of the work. Pay for help with the parts you genuinely cannot do alone, which for most people is rehearsing the difficult conversations and getting the interview answers heard by somebody honest.",
  },
  {
    t: "cta",
    text: "If you want help choosing which of the five roles is actually right for you, Career Counselling is three 60-minute 1:1 sessions for ₹999 total — strengths mapping, three shortlisted paths compared on salary and growth, a six-month action plan, and a resume and LinkedIn review. If you already know the target and need the interview reps, Interview Prep is the other one.",
    course: "/course-career-counselling",
    label: "See Career Counselling",
  },
];
