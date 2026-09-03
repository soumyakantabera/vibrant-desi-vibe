import type { ArticleBody } from "@/content/blog/blocks";

/**
 * Body copy for /best-online-spoken-english-classes-india.
 *
 * The hardest of the three to rank: the SERP is dominated by affiliate
 * listicles and by companies ranking themselves first on their own domains.
 * The page's entire credibility strategy is to say that out loud in paragraph
 * one — it is true, it is verifiable by the reader in thirty seconds, and it is
 * the only thing that distinguishes this page from the ones above it.
 *
 * Deliberately uses price BANDS rather than precise competitor figures.
 * Competitor pricing changes constantly and a stale number in a comparison
 * table damages credibility far more than omitting it. Exact figures should
 * only go in if a human has verified them on the day.
 */
export const body: ArticleBody = [
  {
    t: "p",
    text: "**Start with the obvious problem with this page: we sell one of the things on it.** Learn With Smile runs live online English classes in India, so we are a competitor to most of what is described below, and you should read it with that in mind.",
  },
  {
    t: "p",
    text: 'That is worth stating because it is true of nearly every result you will find for this search. Go and look: most of the top-ranking "best online spoken English classes in India" pages are published by one of the companies being compared, on that company\'s own domain, ranking itself first. Affiliate listicles fill the rest, and those rank by commission rather than fit.',
  },
  {
    t: "p",
    text: "So this page is not a ranking. It is organised by **which learner each option actually suits**, and in several cases the honest answer is somebody else's product. Where that is true, it says so by name.",
  },

  { t: "h2", text: "Start here: which learner are you?" },
  {
    t: "table",
    head: ["If you are…", "The format that usually fits"],
    rows: [
      [
        "An absolute beginner who cannot form a full sentence",
        "A structured live course with a small batch. Not an app.",
      ],
      [
        "Grammatically fine but you freeze when speaking",
        "Daily 1:1 practice, or a small live batch built around speaking reps",
      ],
      [
        "A working professional who needs workplace English",
        "A short business-focused live course, or 1:1 with a specific brief",
      ],
      [
        "Preparing for IELTS, TOEFL or PTE",
        "Dedicated exam prep with individually marked writing; test the approach with the free [Band 7 writing template](/blog/band-7-writing-4-paragraph-template)",
      ],
      [
        "A parent looking for a child under 14",
        "A children's platform. Genuinely a different profession.",
      ],
      [
        "Someone who needs a certificate for a visa or HR",
        "An established institution such as British Council",
      ],
    ],
  },

  { t: "h2", text: "The seven formats, and what each is really for" },

  { t: "h3", text: "1. Daily 1:1 practice apps (Indian tutors)" },
  {
    t: "p",
    text: "**Roughly ₹100–₹400 per session.** You get a phone or video call with a tutor, on demand, most days. There is usually no fixed syllabus — you talk, they correct.",
  },
  {
    t: "p",
    text: "Genuinely good for one thing: getting reps in when your problem is hesitation rather than knowledge. Weak for beginners, because the format assumes you already have something to say. The failure mode is practising what you can already say for six months.",
  },

  { t: "h3", text: "2. Native-speaker video platforms" },
  {
    t: "p",
    text: "**Roughly ₹500–₹2,000 per session, sometimes more.** A tutor in the US, UK or Philippines, on demand.",
  },
  {
    t: "p",
    text: "The premium buys accent and idiom, which are the last things a beginner needs and the first things the marketing sells. There is also a specific disadvantage early on: a native tutor cannot explain a tense in Bengali or Hindi when the English explanation is not landing, and cannot predict which errors your first language produces. Worth it once you are already fluent and specifically want to sound different.",
  },

  { t: "h3", text: "3. Children's platforms" },
  {
    t: "p",
    text: "**Roughly ₹500–₹1,500 per session, usually sold in packages.** PlanetSpark and similar.",
  },
  {
    t: "p",
    text: "**If the learner is under about 14, use one of these rather than us.** Teaching children is a different skill involving gamified curricula built for short attention spans, parent reporting and safeguarding, and the platforms built for it do it properly. Our classes are designed for learners from roughly 15 upwards; putting a nine-year-old into an adult batch wastes your money and their time. Judge these on the individual teacher and the trial class, and be sceptical of long prepaid packages.",
  },

  { t: "h3", text: "4. Established institutions" },
  {
    t: "p",
    text: "**Typically ₹15,000–₹40,000 for a full course.** British Council and comparable bodies.",
  },
  {
    t: "p",
    text: "**If you need a recognised certificate, go here, and we will not pretend otherwise — we do not currently issue one.** For a visa application, a university requirement or an HR checklist that specifies a credential, this is the category that satisfies it. Be clear about what the fee is buying, though: the awarding body's recognition, plus a well-structured curriculum. It is not buying a smaller batch, and these courses often run 15–25 students.",
  },

  { t: "h3", text: "5. Small live batches" },
  {
    t: "p",
    text: "**Roughly ₹1,000–₹3,000 per month.** A live teacher and 4–10 classmates, on a fixed syllabus.",
  },
  {
    t: "p",
    text: "This is our category, so weigh it accordingly. The argument for it is that it is the only format that gives you a syllabus *and* real speaking time *and* an Indian price at once. The argument against is that it is a fixed schedule — if you cannot commit to the same slot up to twice a week for three months, an on-demand app will serve you better than a course you stop attending.",
  },

  { t: "h3", text: "6. Large live batches" },
  {
    t: "p",
    text: "**Roughly ₹500–₹1,200 per month.** A live teacher and 25–40 classmates.",
  },
  {
    t: "p",
    text: "Cheap, live, and honest about what it is if the provider tells you the batch size. You will speak once or twice a week. That is a reasonable trade if your goal is grammar and comprehension rather than fluency, and a poor one if you came to stop freezing mid-sentence.",
  },

  { t: "h3", text: "7. AI conversation apps" },
  {
    t: "p",
    text: "**Roughly ₹300–₹800 per month.** Practise speaking with a model, any hour of the day.",
  },
  {
    t: "p",
    text: "Better than they were, and genuinely useful for volume: available at 6am, infinitely patient, and you cannot embarrass yourself. Two real limits. They will accept a sentence that is technically correct but that nobody actually says, and they cannot tell you *why* you keep making the same error. Best used alongside something else, not instead of it.",
  },

  { t: "h2", text: "Why there are no exact competitor prices here" },
  {
    t: "p",
    text: "Every figure above is a band. That is deliberate.",
  },
  {
    t: "p",
    text: "Competitor pricing changes with promotions, packages and region, and a precise number on a page like this is wrong within a few months. A stale exact price does more damage to a comparison than an honest range does, because it makes every other claim on the page suspect. Check the current price on the provider's own site before deciding anything.",
  },

  { t: "h2", text: "Where we actually fit" },
  {
    t: "p",
    text: "Narrowly, and it is worth being precise rather than expansive about it. Learn With Smile suits you if you want all three of these at once:",
  },
  {
    t: "ul",
    items: [
      "**A fixed syllabus** — you want somebody to decide what you study next, in what order.",
      "**Real speaking time** — a hard cap of 8 students, so you speak in every class and get corrected by name.",
      "**An Indian budget** — ₹999–₹2,499 a month, GST included, billed monthly with no lock-in.",
    ],
  },
  {
    t: "p",
    text: "If you only want the second one, a 1:1 app is cheaper and more flexible. If you need a certificate, we are the wrong choice outright. If the learner is a child, so are we. And if you cannot commit to a fixed weekly slot, do not buy a course — buy practice.",
  },

  { t: "h2", text: "How to actually decide, in one week" },
  {
    t: "p",
    text: "Do not decide from comparison pages, including this one. Do this instead:",
  },
  {
    t: "ol",
    items: [
      "Pick three options from different categories above — say one app, one small batch, one large batch.",
      "Take the free trial or demo class of each in the same week, while your impressions are comparable.",
      "In each one, count how many minutes **you** spoke. Not the teacher, not the class. You.",
      "Ask each provider one question: what is the actual batch size, not the maximum?",
      "Then pick, and give it three months before judging it. Nothing in language learning shows results in three weeks.",
    ],
  },
  {
    t: "p",
    text: "That week costs nothing and will tell you more than any amount of reading. If one of the three is us, our demo is a real live class with actual students rather than a one-to-one sales call — which is precisely so you can run that minutes count honestly.",
  },
  {
    t: "cta",
    text: "If a small live batch is the category that fits, the demo is free, needs no card, and takes a WhatsApp message to arrange. Come and count your own speaking minutes.",
    course: "/course-spoken-english",
    label: "See the Spoken English course",
  },
];
