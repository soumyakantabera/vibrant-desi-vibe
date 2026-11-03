/**
 * What Bolo shows at each course level — the lesson path, the practice
 * question, the videos and the teacher's review note. Used by the phone
 * mock-up and the app reel so each course page shows *its* level.
 *
 * Illustrations with sample content: every use is captioned as such.
 */

export type BoloLevel = "basic" | "intermediate" | "interactive" | "business" | "interview";

export type LevelContent = {
  badge: string;
  greet: string;
  nodes: { label: string; icon: string }[];
  start: string;
  quiz: {
    ask: string;
    kind: string;
    /** "blank": fill a word in a sentence. "reply": pick the best full line. */
    layout: "blank" | "reply";
    before: string;
    after: string;
    opts: string[];
    answer: string;
    why: string;
  };
  videos: { title: string; cat: string }[];
  review: { wrong: string; right: string; tipLabel: string; tip: string };
};

export const LEVELS: Record<BoloLevel, LevelContent> = {
  basic: {
    badge: "Basic",
    greet: "Aaj ka practice ready hai!",
    nodes: [
      { label: "Vocabulary", icon: "vocab" },
      { label: "Grammar", icon: "grammar" },
      { label: "Reading", icon: "read" },
      { label: "Speaking", icon: "mic" },
    ],
    start: "Start grammar",
    quiz: {
      ask: "Which word fits?",
      kind: "Fill in the blank",
      layout: "blank",
      before: "She",
      after: "to the office every day.",
      opts: ["go", "goes", "going"],
      answer: "goes",
      why: "With she, he or it, the present simple adds -s: “She goes”.",
    },
    videos: [
      { title: "Tips and tricks to start speaking", cat: "Tips" },
      { title: "Grammar you actually use", cat: "Grammar" },
      { title: "When your mind goes blank", cat: "Mind blank" },
      { title: "Stop translating in your head", cat: "Thinking" },
    ],
    review: {
      wrong: "I am working here since two years.",
      right: "I have been working here for two years.",
      tipLabel: "Sound",
      tip: "“Three”, not “tree” — tongue between your teeth for th.",
    },
  },
  intermediate: {
    badge: "Intermediate",
    greet: "Today: conditionals + a 90-second talk.",
    nodes: [
      { label: "Connectors", icon: "vocab" },
      { label: "Conditionals", icon: "grammar" },
      { label: "Listening clip", icon: "headset" },
      { label: "90-second talk", icon: "mic" },
    ],
    start: "Start conditionals",
    quiz: {
      ask: "Which form fits?",
      kind: "Fill in the blank",
      layout: "blank",
      before: "If I",
      after: "more time, I would join the debate.",
      opts: ["have", "had", "will have"],
      answer: "had",
      why: "Second conditional: if + past simple, would + verb — “If I had more time, I would…”.",
    },
    videos: [
      { title: "Connectors that link your ideas", cat: "Connectors" },
      { title: "Conditionals in real talk", cat: "Grammar" },
      { title: "Cut the fillers: um, ah, like", cat: "Fluency" },
      { title: "Disagree politely in a debate", cat: "Debate" },
    ],
    review: {
      wrong: "Um… I think… like… we should, um, go.",
      right: "I think we should go — and here's why.",
      tipLabel: "Fillers",
      tip: "7 fillers in 90 seconds, down from 12 last week. Pause instead of “um”.",
    },
  },
  interactive: {
    badge: "Interactive",
    greet: "Role-play time! Keep the conversation going.",
    nodes: [
      { label: "Warm-up", icon: "wave" },
      { label: "Keep it going", icon: "messages" },
      { label: "Role-play", icon: "users" },
      { label: "Debate", icon: "speak" },
    ],
    start: "Start role-play",
    quiz: {
      ask: "Best reply?",
      kind: "Keep the conversation going",
      layout: "reply",
      before: "Friend: “I finally got the job!”",
      after: "",
      opts: ["Ok.", "Wow, congrats! Which company?", "Yes."],
      answer: "Wow, congrats! Which company?",
      why: "Show interest, then ask one question back — that keeps it going.",
    },
    videos: [
      { title: "Small talk without freezing", cat: "Speaking" },
      { title: "Buy time: “let me think…”", cat: "Tips" },
      { title: "When your mind goes blank", cat: "Mind blank" },
      { title: "Tell a story in 60 seconds", cat: "Story" },
    ],
    review: {
      wrong: "… (4-second pause) … yes.",
      right: "Let me think — yes, I'd go with option two.",
      tipLabel: "Hesitation",
      tip: "You paused before 4 answers. Start with a buy-time phrase, then answer.",
    },
  },
  business: {
    badge: "Business",
    greet: "Standup in three lines — let's practise.",
    nodes: [
      { label: "Email phrases", icon: "pen" },
      { label: "Standup", icon: "users" },
      { label: "Client call", icon: "phone" },
      { label: "Presentation", icon: "chart" },
    ],
    start: "Start standup",
    quiz: {
      ask: "Clearest line?",
      kind: "Standup — yesterday",
      layout: "reply",
      before: "Manager: “What did you do yesterday?”",
      after: "",
      opts: [
        "I was doing many things.",
        "I finished the login API and opened a PR.",
        "Work is going on.",
      ],
      answer: "I finished the login API and opened a PR.",
      why: "One task, one result — short and clear beats vague.",
    },
    videos: [
      { title: "12 meeting phrases", cat: "Meetings" },
      { title: "Client calls: names, numbers, next step", cat: "Calls" },
      { title: "Buy time when you lose a word", cat: "Tips" },
      { title: "Explain your work in 3 minutes", cat: "Presenting" },
    ],
    review: {
      wrong: "Please do the needful and revert back.",
      right: "Could you send the file by 4 pm?",
      tipLabel: "Tone",
      tip: "Lead with the ask. One clear request per email.",
    },
  },
  interview: {
    badge: "Interview",
    greet: "Mock round today: tell me about yourself.",
    nodes: [
      { label: "60-sec intro", icon: "user" },
      { label: "Best opening", icon: "messages" },
      { label: "STAR answers", icon: "clipboard" },
      { label: "Mock round", icon: "mic" },
    ],
    start: "Start interview drill",
    quiz: {
      ask: "Best opening?",
      kind: "Tell me about yourself",
      layout: "reply",
      before: "Interviewer: “Tell me about yourself.”",
      after: "",
      opts: [
        "My name is… I was born in…",
        "I'm a B.Com graduate with a year in KYC at a bank.",
        "I am hardworking and honest.",
      ],
      answer: "I'm a B.Com graduate with a year in KYC at a bank.",
      why: "Start with who you are now and what you do — not where you were born.",
    },
    videos: [
      { title: "Tell me about yourself + STAR", cat: "Interview" },
      { title: "Salary and notice period, calmly", cat: "HR" },
      { title: "When you blank on a question", cat: "Mind blank" },
      { title: "60-second intro drill", cat: "Drill" },
    ],
    review: {
      wrong: "My weakness is I am too perfectionist.",
      right: "I used to rush emails; now I re-read once before sending.",
      tipLabel: "Weakness answer",
      tip: "A real weakness, then what you did about it.",
    },
  },
};

/** Which Bolo level a course page shows. */
export function levelForCourse(slug: string): BoloLevel {
  if (slug === "intermediate-english") return "intermediate";
  if (slug === "interactive-speaking") return "interactive";
  if (slug === "business-english") return "business";
  if (slug === "interview-preparation") return "interview";
  return "basic";
}
