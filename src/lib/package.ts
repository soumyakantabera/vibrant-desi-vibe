/**
 * The complete package (October 2026): every paid course = live classes +
 * learner portal + recorded video library + the same teacher.
 *
 * One source for the homepage sections, course pages, FAQs and the assistant
 * files, so the claims never drift apart. Keep every line factual: no video
 * counts, no durations for portal tasks, nothing the LMS does not do today.
 */
import type { FeeSlug } from "@/lib/fees";

export type PartKey = "live" | "portal" | "videos" | "teacher";

/** Package colour code — the same four colours on every page. */
export const PART_TONE: Record<
  PartKey,
  { fill: string; soft: string; text: string; ring: string; label: string }
> = {
  live: {
    fill: "bg-brand",
    soft: "bg-brand-soft",
    text: "text-brand-deep",
    ring: "border-brand",
    label: "Live classes",
  },
  portal: {
    fill: "bg-indigo-pop",
    soft: "bg-slate-soft",
    text: "text-[#263F63]",
    ring: "border-indigo-pop",
    label: "Learner portal",
  },
  videos: {
    fill: "bg-sunshine",
    soft: "bg-amber-soft",
    text: "text-[#6A4A10]",
    ring: "border-sunshine",
    label: "Video library",
  },
  teacher: {
    fill: "bg-coral",
    soft: "bg-terra-soft",
    text: "text-[#8A3626]",
    ring: "border-coral",
    label: "Same teacher",
  },
};

export const PACKAGE_ONE_LINE =
  "Every course includes live classes, the learner portal, the recorded video library and the same teacher — in one monthly fee.";

export const PORTAL_MODULES: { title: string; sub: string; sample: string[] }[] = [
  {
    title: "Whole-conversation practice",
    sub: "A full talk, start to finish",
    sample: [
      "Open: “Hi, I’m Riya — I’ve just joined the support team.”",
      "Keep it going: ask one question back.",
      "Close: “Great talking to you — see you at the stand-up.”",
    ],
  },
  {
    title: "Word & phrase brush-ups",
    sub: "Small words that make you sound natural",
    sample: [
      "Instead of “very good” → “excellent”, “spot on”.",
      "Buy time: “Let me think about that for a second.”",
      "Connect: “To be honest…”, “On the other hand…”",
    ],
  },
  {
    title: "Reading fluency",
    sub: "Read aloud with rhythm and stress",
    sample: [
      "Read a short passage aloud.",
      "Mark the stressed words: last WEEK · FI-nally.",
      "Read it again, smoother and at a steady pace.",
    ],
  },
  {
    title: "Grammar in real texts",
    sub: "Spot the rule inside a passage",
    sample: [
      "Text: “I have worked here for two years.”",
      "Rule: have + past participle → started then, still true now.",
      "Your turn: write two lines about your own work.",
    ],
  },
  {
    title: "Interactive grammar practice",
    sub: "Tap an answer, get instant feedback",
    sample: [],
  },
];

export const WEEK: {
  day: string;
  kind: "Live class" | "Portal" | "Videos";
  title: string;
  detail: string;
  video?: boolean;
}[] = [
  {
    day: "Mon",
    kind: "Portal",
    title: "Word & phrase brush-up",
    detail:
      "Learn a small set of everyday words and phrases and use them in your own sentences. A short video adds natural connectors.",
    video: true,
  },
  {
    day: "Tue",
    kind: "Live class",
    title: "Speak, get corrected",
    detail:
      "90 minutes in a live batch of about 6 with your teacher. You speak in every round and get corrected on the spot.",
  },
  {
    day: "Wed",
    kind: "Portal",
    title: "Reading fluency + grammar in text",
    detail:
      "Read a short passage aloud for fluency, then review the grammar inside that text — so the rule sticks.",
  },
  {
    day: "Thu",
    kind: "Portal",
    title: "Interactive grammar practice",
    detail: "Tap-and-answer grammar practice with instant feedback, plus a short grammar video.",
    video: true,
  },
  {
    day: "Fri",
    kind: "Live class",
    title: "Role-plays + real talk",
    detail:
      "Your second live class of the week: conversations, role-plays and course-specific practice — interviews, meetings or daily talk.",
  },
  {
    day: "Sat",
    kind: "Portal",
    title: "Whole-conversation practice",
    detail:
      "Practise a full conversation from start to finish. A video on mind blanks shows what to say when the words suddenly go.",
    video: true,
  },
  {
    day: "Sun",
    kind: "Videos",
    title: "Catch up at your pace",
    detail:
      "Watch from the recorded library — grammar, fluency, thinking in English — or revise anything from the week.",
    video: true,
  },
];

export type VideoCourse =
  | "Spoken English"
  | "Interactive Speaking"
  | "Business English"
  | "Interview Prep";

export const VIDEO_TOPICS: { cat: string; title: string; blurb: string; tags: VideoCourse[] }[] = [
  {
    cat: "Grammar",
    title: "Grammar you actually use",
    blurb: "Tenses, articles and prepositions through real sentences, not rule lists.",
    tags: ["Spoken English", "Interactive Speaking", "Business English", "Interview Prep"],
  },
  {
    cat: "Thinking",
    title: "Stop translating in your head",
    blurb: "Habits to think straight in English, so replies come faster.",
    tags: ["Spoken English", "Interactive Speaking"],
  },
  {
    cat: "Mind blank",
    title: "When your mind goes blank",
    blurb: "What to say in the first three seconds to buy time and restart calmly.",
    tags: ["Spoken English", "Interactive Speaking", "Interview Prep"],
  },
  {
    cat: "Phrases",
    title: "Small words, big difference",
    blurb: "Connectors and natural fillers that make your speech flow.",
    tags: ["Spoken English", "Interactive Speaking", "Business English", "Interview Prep"],
  },
  {
    cat: "Fluency",
    title: "Fluency drills for daily talk",
    blurb: "Rhythm, linking and pace drills to repeat along with.",
    tags: ["Spoken English", "Interactive Speaking"],
  },
  {
    cat: "Workplace",
    title: "Meetings and email phrases",
    blurb: "Agree, disagree, update and follow up — politely and clearly.",
    tags: ["Business English"],
  },
  {
    cat: "Workplace",
    title: "Client calls and presentations",
    blurb: "Open, structure and close a call or a short talk with confidence.",
    tags: ["Business English"],
  },
  {
    cat: "Interview",
    title: "Tell me about yourself + STAR",
    blurb: "A 60-second introduction and STAR answers that sound like you.",
    tags: ["Interview Prep", "Spoken English"],
  },
  {
    cat: "Speaking",
    title: "Small talk without freezing",
    blurb: "Easy openers and follow-up questions for any conversation.",
    tags: ["Interactive Speaking", "Business English"],
  },
];

export const BEFORE_NOW: { row: string; before: string; now: string }[] = [
  {
    row: "Live classes",
    before: "Up to 2 a week, about 6 learners",
    now: "Up to 2 a week, about 6 learners — unchanged",
  },
  { row: "Between classes", before: "Worksheets", now: "Learner portal practice, 5 days a week" },
  { row: "Conversation", before: "In class", now: "In class + whole-conversation practice online" },
  {
    row: "Grammar",
    before: "Corrected while you speak",
    now: "Plus grammar in real texts and interactive practice",
  },
  {
    row: "Words & phrases",
    before: "Picked up in class",
    now: "Regular brush-ups + natural phrases to use",
  },
  {
    row: "Revision",
    before: "Class recordings",
    now: "Recorded video library chosen for your course",
  },
];

/** Per-course emphasis inside the same four parts. */
export const COURSE_PACKAGE: Record<
  FeeSlug,
  { live: string; portal: string; videos: string; teacher: string; videoTag: VideoCourse }
> = {
  "spoken-english": {
    live: "Build sentences from zero, speak in every round and get corrected live — including interview English.",
    portal:
      "Daily conversations, word and phrase brush-ups, reading aloud and grammar inside simple texts.",
    videos: "Grammar basics, thinking in English, what to say when your mind goes blank.",
    teacher: "One teacher for the whole 6 months, so your mistakes are remembered and fixed.",
    videoTag: "Spoken English",
  },
  "interactive-speaking": {
    live: "Games, debates, stories and role-plays that make you talk before you overthink.",
    portal:
      "Whole-conversation practice, phrase brush-ups and reading for rhythm between sessions.",
    videos: "Fluency drills, small talk without freezing and mind-blank fixes.",
    teacher: "The same teacher every class, who notices when the freeze starts and why.",
    videoTag: "Interactive Speaking",
  },
  "business-english": {
    live: "Workplace role-plays: stand-ups, client calls, presentations and feedback, live.",
    portal:
      "Meeting conversations, office phrase brush-ups, reading emails aloud and grammar in business texts.",
    videos: "Meeting, email and call phrases; how to buy time when you lose a word mid-call.",
    teacher: "One teacher who knows your role, your team and the calls you dread.",
    videoTag: "Business English",
  },
  "interview-preparation": {
    live: "HR screens, 60-second introductions, STAR answers and mock interviews in front of the batch.",
    portal: "Full interview conversations, answer phrases and grammar inside sample answers.",
    videos: "Tell me about yourself, STAR stories and what to do when you blank on a question.",
    teacher: "The same teacher across every mock, so feedback builds week to week.",
    videoTag: "Interview Prep",
  },
};

/**
 * Talk time per hour of class — the site's published estimate
 * (blog: speaking-minutes-in-a-60-minute-class). Upper bound drives the bar.
 */
export const TALK_TIME: { label: string; range: string; max: number; ours?: boolean }[] = [
  { label: "Learn With Smile · about 6 learners", range: "8–10 min", max: 10, ours: true },
  { label: "Group class · 8–12 learners", range: "4–6 min", max: 6 },
  { label: "City classroom · 25–40 learners", range: "1–2 min", max: 2 },
];

/**
 * How the options compare, by category (not by brand). Ranges are typical
 * 2026 public prices for each category and are labelled as such on the page.
 */
export type Mark = "yes" | "part" | "no";
export const MARKET_COLUMNS = [
  "AI speaking apps",
  "1:1 tutor apps",
  "Large-batch classrooms",
  "Learn With Smile",
] as const;
export const MARKET_ROWS: { label: string; marks: [Mark, Mark, Mark, Mark]; note?: string }[] = [
  { label: "Live human teacher", marks: ["no", "yes", "yes", "yes"] },
  { label: "Speak with real people under real pressure", marks: ["no", "part", "part", "yes"] },
  { label: "Enough speaking time for you", marks: ["yes", "yes", "no", "yes"] },
  { label: "Practice every day between classes", marks: ["yes", "part", "no", "yes"] },
  { label: "Structured course with a map", marks: ["part", "part", "yes", "yes"] },
  { label: "Recorded video lessons to revise", marks: ["part", "no", "part", "yes"] },
  { label: "Same teacher who remembers your mistakes", marks: ["no", "part", "part", "yes"] },
  { label: "Indian workplace and interview context", marks: ["part", "part", "yes", "yes"] },
];
export const MARKET_PRICE: [string, string, string, string] = [
  "₹299–₹2,500 / month",
  "₹2,700–₹5,500 / month",
  "₹1,500–₹6,000 / 3 months",
  "₹1,499–₹2,499 / month",
];
