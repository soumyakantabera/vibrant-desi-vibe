import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "Most people stuck at Band 6.5 in IELTS Writing assume the problem is their English. Usually it is not. Their Listening and Reading are 7 or higher, their Speaking is fine, and Writing sits stubbornly half a band below everything else. English that is good enough for a 7.5 in Reading does not suddenly become 6.0 English when you pick up a pen.",
  },
  {
    t: "p",
    text: "The problem is structure, and you can see why the moment you look at what Task 2 is actually marked on.",
  },
  {
    t: "table",
    caption: "Each criterion is 25% of your Task 2 score.",
    head: ["Criterion", "What it measures"],
    rows: [
      ["Task Response", "Did you answer the actual question, fully, with a clear position?"],
      ["Coherence and Cohesion", "Is it organised into paragraphs that progress logically?"],
      ["Lexical Resource", "Vocabulary range and accuracy"],
      ["Grammatical Range and Accuracy", "Sentence variety and how often you get it right"],
    ],
  },
  {
    t: "p",
    text: "Two of the four have nothing to do with how good your English is. Task Response and Coherence are both about **organisation and answering the question** — and they are worth half your score. That is why a candidate with strong English can sit at 6.5 for months, and why a fixed structure moves people faster than another vocabulary list does.",
  },
  {
    t: "p",
    text: "Here is the structure we teach. It is four paragraphs, it fits in 40 minutes, and it works for every Task 2 question type.",
  },

  { t: "h2", text: "The shape: four paragraphs, 260–280 words" },
  {
    t: "table",
    head: ["Paragraph", "Sentences", "Words"],
    rows: [
      ["Introduction", "2", "~40"],
      ["Body 1", "5", "~110"],
      ["Body 2", "5", "~110"],
      ["Conclusion", "2", "~30"],
    ],
  },
  {
    t: "p",
    text: "The minimum is 250 words and going under it costs you marks automatically, so 260–280 gives you a safe margin without writing an essay you cannot finish. Do not aim for 350. Longer essays contain more errors and score lower, not higher.",
  },

  { t: "h2", text: "The introduction: two sentences, and one of them is your position" },
  {
    t: "p",
    text: "Sentence one paraphrases the question. Sentence two states what you think. That is the entire introduction — no background sentence about how the world is changing rapidly, no definitions, nothing.",
  },
  {
    t: "example",
    label: "Question",
    lines: [
      "Some people believe that companies should be responsible for reducing pollution, while others think this is the government's job. Discuss both views and give your own opinion.",
    ],
  },
  {
    t: "example",
    label: "Introduction",
    lines: [
      "It is sometimes argued that responsibility for cutting pollution lies with private companies, while others maintain that this duty belongs to national governments.",
      "I believe both have a role, but that governments must lead, because only they can enforce standards across an entire industry.",
    ],
  },
  {
    t: "p",
    text: 'Note the second sentence. The words **"I believe"** are there deliberately. Examiners are looking for a clear position, and "this essay will discuss both sides" is not a position — it is an announcement. Candidates lose Task Response marks for it constantly, and they lose them again in the conclusion when there is still no opinion anywhere in the essay.',
  },
  {
    t: "p",
    text: 'If the question says "give your own opinion", your opinion must appear in the introduction, not only at the end.',
  },

  { t: "h2", text: "The body paragraphs: five sentences, five jobs" },
  {
    t: "p",
    text: "Each body paragraph does the same five things in the same order. Once you have drilled it, you stop planning paragraphs and start filling them.",
  },
  {
    t: "ol",
    items: [
      "**Topic sentence** — the one idea this paragraph argues, in one sentence.",
      "**Explanation** — why that is true.",
      "**Development** — what follows from it, or what it causes.",
      "**Example** — one specific case.",
      "**Link** — tie it back to the question.",
    ],
  },
  {
    t: "p",
    text: "Here is a full body paragraph with each function marked, so you can see the skeleton under the prose.",
  },
  {
    t: "example",
    label: "Body 1, functions marked",
    lines: [
      "**(Topic)** Governments are better placed to reduce pollution because they can regulate an entire sector at once.",
      "**(Explanation)** A single company that voluntarily invests in cleaner equipment simply raises its own costs while its competitors do not, so responsible behaviour is punished by the market.",
      "**(Development)** When a government sets a legal emissions limit instead, every firm in the sector faces the same cost, and the disadvantage disappears.",
      "**(Example)** Delhi's restrictions on older commercial vehicles applied to all operators simultaneously, which is why compliance rose quickly rather than being absorbed by a handful of willing firms.",
      "**(Link)** For this reason, regulation achieves what individual corporate goodwill cannot.",
    ],
  },
  {
    t: "p",
    text: "One thing about examples that surprises people: **they do not have to be true.** The examiner is not fact-checking your essay, and there are no marks for accuracy of content. What there are marks for is specificity. Compare:",
  },
  {
    t: "table",
    head: ["Weak", "Strong"],
    rows: [
      [
        "For example, many countries have done this.",
        "For example, Sweden introduced a carbon tax in 1991.",
      ],
      [
        "Studies show young people are affected more.",
        "A 2019 survey of 2,000 graduates found that 68% had changed field within three years.",
      ],
      [
        "Some students struggle with this.",
        "A 21-year-old engineering student in Pune, for instance…",
      ],
    ],
  },
  {
    t: "p",
    text: "Name a country, a year, an age, a percentage. Invented specifics score as examples; true generalities do not. That is an odd thing to be true about an English exam, but it is true, and knowing it is worth half a band to a lot of candidates.",
  },
  {
    t: "p",
    text: 'Body 2 does exactly the same five jobs for the opposing view (or your second reason). If the question is "discuss both views", Body 1 is one view and Body 2 is the other — and your own opinion, already stated in the introduction, decides which one you develop more convincingly.',
  },

  { t: "h2", text: "The conclusion: two sentences, no new ideas" },
  {
    t: "example",
    label: "Conclusion",
    lines: [
      "In conclusion, while companies clearly have a duty to limit the harm they cause, governments hold the only tool that works across a whole industry.",
      "Responsibility should therefore be shared, with the state setting the standard that firms are required to meet.",
    ],
  },
  {
    t: "p",
    text: "Sentence one restates your position. Sentence two closes it. **Nothing new goes here** — a fresh idea in the conclusion is a Coherence penalty, because you have raised something you never developed.",
  },
  {
    t: "p",
    text: "If you are running out of time, write a one-sentence conclusion rather than none. An essay with no conclusion is capped well below 7 on Coherence.",
  },

  { t: "h2", text: "Where the 40 minutes goes" },
  {
    t: "table",
    head: ["Minutes", "What you are doing"],
    rows: [
      [
        "0–5",
        "Plan. Underline the question type, decide your position, write four to six words for each body paragraph. Nothing else.",
      ],
      ["5–10", "Introduction."],
      ["10–20", "Body 1."],
      ["20–30", "Body 2."],
      ["30–35", "Conclusion."],
      ["35–40", "Proofread."],
    ],
  },
  {
    t: "p",
    text: "The five minutes of planning is the part everyone skips, and it is the part that protects Task Response. Candidates who start writing immediately routinely answer a slightly different question from the one on the paper — and Task Response is 25% of the mark.",
  },
  {
    t: "p",
    text: "Proofread for four things only, in this order:",
  },
  {
    t: "ul",
    items: [
      'Third-person **-s** — "the government require" → "requires". This is the single most common error in Indian candidates\' essays.',
      "Articles — a, an, the. Check every singular countable noun has one.",
      'Plurals — "many student" → "many students".',
      "Subject–verb agreement across a long sentence, where the subject and verb have drifted apart.",
    ],
  },
  {
    t: "p",
    text: "Do not use those five minutes to add a sentence or improve a word. You will introduce a new error, and you will not have time to catch it.",
  },

  { t: "h2", text: "One last thing about vocabulary" },
  {
    t: "p",
    text: "A plain Band 7 essay beats a decorated Band 6 essay every time. Lexical Resource marks accuracy as well as range, so a word used slightly wrongly costs you more than a simple word used correctly.",
  },
  {
    t: "quote",
    text: '"A plethora of pollution" is a worse sentence than "a lot of pollution". One is wrong; the other is merely plain.',
  },
  {
    t: "p",
    text: "Use the harder word only when you have seen it used in a real sentence and you are sure of the collocation. Otherwise write the plain one and spend the effort on structure, which is where the marks actually are.",
  },
  {
    t: "p",
    text: "Realistically, from a Band 5.5–6 starting point — which is where most Indian graduates begin — expect about three months to reach a reliable 7, and expect Writing to be the slowest of the four. The thing that moves it is not reading more model essays. It is writing one essay a week and having a person mark it against these four criteria, so the same error gets caught until it stops happening.",
  },
  {
    t: "cta",
    text: "Our IELTS batches are capped at 6 so every essay gets individually corrected, and you sit six full-length timed mocks before the real thing. Academic and General Training, three months, ₹1,999/month. The demo class is free and it is a real class.",
    course: "/course-ielts",
    label: "See the IELTS course",
  },
];
