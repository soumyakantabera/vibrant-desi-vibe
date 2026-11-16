import type { ArticleBody } from "@/content/blog/blocks";
import { LEVEL_KEY_ROWS, LEVEL_QUESTIONS } from "@/lib/level-test";

export const body: ArticleBody = [
  { t: "h2", text: "How the scoring works" },
  {
    t: "p",
    text: "Each question scores **2** for “Yes, easily”, **1** for “With difficulty” and **0** for “Not yet”, so the total is out of 20. The questions get harder in order: the first four are everyday basics, the middle three are connected speech, and the last three are speaking under pressure. Without JavaScript, add your own score with this key:",
  },
  {
    t: "table",
    caption: "Score, level and the room it points to",
    head: ["Score", "Level", "Start with"],
    rows: LEVEL_KEY_ROWS,
  },
  {
    t: "p",
    text: "The CEFR labels (A1, A2, B1, B2) are a rough neighbourhood for people who know the European scale. This is a self-check, not a certified test; a teacher confirms the level in the free consultation by listening to you speak for a few minutes.",
  },

  { t: "h2", text: "The ten questions" },
  {
    t: "ol",
    items: LEVEL_QUESTIONS.map(
      (q) => `Can you ${q.charAt(0).toLowerCase()}${q.slice(1).replace(/\.$/, "?")}`,
    ),
  },

  { t: "h2", text: "What each level means in real life" },
  {
    t: "table",
    head: ["Level", "Sounds like", "What fixes it"],
    rows: [
      [
        "Starting out",
        "You understand a question but answer in one word, or in Hindi.",
        "Sound patterns, 300–500 everyday words, and four or five sentence frames said out loud every day.",
      ],
      [
        "Building basics",
        "“Yesterday I go to market… I am going… went.” Short sentences, long pauses.",
        "Tense patterns practised in speech (not in a workbook) and a teacher who stops the same error every week.",
      ],
      [
        "Connecting sentences",
        "You can explain your job but fill gaps with “basically, actually, umm”.",
        "Linking words, longer answers in timed turns, and grammar correction while you talk.",
      ],
      [
        "Ready to perform",
        "Fine with friends; silent in the meeting or the interview.",
        "Role-plays, mock calls and interviews repeated until pressure feels normal.",
      ],
    ],
  },

  { t: "h2", text: "How to check your speaking level for free, without a test" },
  {
    t: "ol",
    items: [
      "Record yourself answering: “Tell me about yourself and your work.” Speak for one minute.",
      "Listen back once. Count the pauses longer than three seconds and the fillers.",
      "Write down every sentence where the tense was wrong.",
      "Fewer than three long pauses and two tense errors in a minute usually means you are past the basics.",
    ],
  },
  {
    t: "p",
    text: "For a daily way to move up a level, use the [15-minute daily speaking practice routine](/blog/daily-english-speaking-practice-routine). For realistic timelines from each level, read [how long it takes to learn spoken English](/how-long-to-learn-spoken-english).",
  },
];
