/**
 * The complete package (October 2026): every paid course = live classes +
 * learner portal + recorded video library + the same teacher.
 *
 * One source for the homepage sections, course pages, FAQs and the assistant
 * files, so the claims never drift apart. Keep every line factual: no video
 * counts, no durations for portal tasks, nothing the LMS does not do today.
 */
import type { FeeSlug } from "@/lib/fees";

export type PartKey = "live" | "portal" | "videos" | "review" | "teacher";

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
  review: {
    fill: "bg-plum",
    soft: "bg-plum-soft",
    text: "text-[#4E3470]",
    ring: "border-plum",
    label: "Weekly teacher review",
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
  "Every course includes live classes, daily exercises in the learner portal, the recorded video library and a weekly teacher review of your reading and speaking — with the same teacher, in one monthly fee.";

export const PORTAL_MODULES: {
  title: string;
  sub: string;
  icon: "grammar" | "vocab" | "read" | "speak" | "review";
  sample: string[];
}[] = [
  {
    title: "Daily grammar exercises",
    sub: "Tap an answer, get instant feedback",
    icon: "grammar",
    sample: [],
  },
  {
    title: "Daily vocabulary exercises",
    sub: "Words and phrases you will actually use",
    icon: "vocab",
    sample: [
      "Instead of “very good” → “excellent”, “spot on”.",
      "Buy time: “Let me think about that for a second.”",
      "Connect: “To be honest…”, “On the other hand…”",
    ],
  },
  {
    title: "Reading practice",
    sub: "Read aloud, then find the grammar in the text",
    icon: "read",
    sample: [
      "Read a short passage aloud with steady rhythm.",
      "Spot the rule inside it: “I have worked here for two years.”",
      "Write two lines of your own using the same rule.",
    ],
  },
  {
    title: "Speaking practice",
    sub: "A whole conversation, start to finish",
    icon: "speak",
    sample: [
      "Open: “Hi, I’m Riya — I’ve just joined the support team.”",
      "Keep it going: ask one question back.",
      "Record your answer and submit it for review.",
    ],
  },
  {
    title: "Weekly teacher review",
    sub: "Your reading and speaking, checked every week",
    icon: "review",
    sample: [
      "Your teacher reviews the reading and speaking you submitted that week.",
      "You get notes on the mistakes that repeat — not every small slip.",
      "The next live class picks up from that feedback.",
    ],
  },
];

export const WEEK: {
  day: string;
  kind: "Live class" | "Portal" | "Review";
  title: string;
  detail: string;
  video?: boolean;
}[] = [
  {
    day: "Mon",
    kind: "Portal",
    title: "Grammar + vocabulary exercises",
    detail:
      "Daily grammar and vocabulary exercises in the portal, plus a short video with a tip to start speaking.",
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
    title: "Reading practice",
    detail:
      "Daily grammar and vocabulary, then read a short passage aloud and find the grammar inside the text.",
  },
  {
    day: "Thu",
    kind: "Portal",
    title: "Speaking practice",
    detail:
      "Daily grammar and vocabulary, then a whole conversation from start to finish — recorded for your teacher.",
    video: true,
  },
  {
    day: "Fri",
    kind: "Live class",
    title: "Role-plays + real talk",
    detail:
      "Your second live class: conversations, role-plays and course-specific practice — interviews, meetings or daily talk.",
  },
  {
    day: "Sat",
    kind: "Review",
    title: "Teacher reviews your week",
    detail:
      "Your teacher reviews the reading and speaking you submitted this week and sends notes on what to fix next.",
  },
  {
    day: "Sun",
    kind: "Portal",
    title: "Catch up + videos",
    detail:
      "Daily grammar and vocabulary at your pace, and anything from the video library — tips, grammar, fluency.",
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
    cat: "Tips & tricks",
    title: "Tips and tricks to start speaking",
    blurb: "Simple ways to say your first sentences out loud — and keep going.",
    tags: ["Spoken English", "Interactive Speaking", "Business English", "Interview Prep"],
  },
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
  {
    row: "Between classes",
    before: "Worksheets",
    now: "Daily grammar, vocabulary, reading and speaking exercises",
  },
  {
    row: "Feedback",
    before: "In class",
    now: "In class + a weekly teacher review of your reading and speaking",
  },
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
  {
    live: string;
    portal: string;
    videos: string;
    review: string;
    teacher: string;
    videoTag: VideoCourse;
  }
> = {
  "spoken-english": {
    live: "Build sentences from zero, speak in every round and get corrected live — including interview English.",
    portal:
      "Daily conversations, word and phrase brush-ups, reading aloud and grammar inside simple texts.",
    videos: "Grammar basics, thinking in English, what to say when your mind goes blank.",
    review:
      "Every week your teacher reviews your reading aloud and recorded speaking, and points out the mistakes that repeat.",
    teacher: "One teacher for the whole 6 months, so your mistakes are remembered and fixed.",
    videoTag: "Spoken English",
  },
  "interactive-speaking": {
    live: "Games, debates, stories and role-plays that make you talk before you overthink.",
    portal:
      "Whole-conversation practice, phrase brush-ups and reading for rhythm between sessions.",
    videos: "Fluency drills, small talk without freezing and mind-blank fixes.",
    review:
      "Every week your teacher reviews your recorded conversations and reading, focusing on where the freeze starts.",
    teacher: "The same teacher every class, who notices when the freeze starts and why.",
    videoTag: "Interactive Speaking",
  },
  "business-english": {
    live: "Workplace role-plays: stand-ups, client calls, presentations and feedback, live.",
    portal:
      "Meeting conversations, office phrase brush-ups, reading emails aloud and grammar in business texts.",
    videos: "Meeting, email and call phrases; how to buy time when you lose a word mid-call.",
    review:
      "Every week your teacher reviews your recorded updates, call answers and reading, with workplace-specific notes.",
    teacher: "One teacher who knows your role, your team and the calls you dread.",
    videoTag: "Business English",
  },
  "interview-preparation": {
    live: "HR screens, 60-second introductions, STAR answers and mock interviews in front of the batch.",
    portal: "Full interview conversations, answer phrases and grammar inside sample answers.",
    videos: "Tell me about yourself, STAR stories and what to do when you blank on a question.",
    review:
      "Every week your teacher reviews your recorded answers and reading, so each mock starts from last week’s notes.",
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
  { label: "A teacher reviews your practice every week", marks: ["no", "part", "no", "yes"] },
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
