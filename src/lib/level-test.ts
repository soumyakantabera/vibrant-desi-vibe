/**
 * The free English speaking level self-check at /english-speaking-level-test.
 *
 * A self-assessment, not an exam: ten can-do statements ordered from first
 * sentences to unscripted interviews, scored 0 / 1 / 2. The score and the
 * learner's goal pick one room and prefill the WhatsApp message, so the chat
 * opens with the information a teacher needs to place them.
 *
 * Kept free of Vite-only imports so the prerender and llms builders can read
 * the same questions and bands the page renders.
 */

export const LEVEL_TEST_PATH = "/english-speaking-level-test";

export const LEVEL_QUESTIONS: string[] = [
  "Introduce yourself in 3–4 sentences: name, city, work or studies.",
  "Ask and answer simple questions at a shop or on a phone call.",
  "Describe your daily routine in the present tense.",
  "Tell someone what you did last weekend, in the past tense.",
  "Follow a customer-care call without asking them to repeat again and again.",
  "Speak for one minute on a familiar topic without stopping.",
  "Give an opinion with a reason: “I think … because …”.",
  "Use tenses correctly most of the time without stopping to think.",
  "Speak in a meeting, a group or an interview without freezing.",
  "Handle an unexpected question smoothly, in English only.",
];

export const LEVEL_OPTIONS = [
  { label: "Yes, easily", points: 2 },
  { label: "With difficulty", points: 1 },
  { label: "Not yet", points: 0 },
] as const;

export type LevelGoal = "everyday" | "work" | "interview";

export const LEVEL_GOALS: { id: LevelGoal; label: string }[] = [
  { id: "everyday", label: "Everyday conversation and confidence" },
  { id: "work", label: "Meetings, client calls and office English" },
  { id: "interview", label: "Job interviews and HR rounds" },
];

export type LevelBand = {
  id: "starting" | "building" | "connecting" | "performing";
  /** Score range, inclusive, out of 20. */
  min: number;
  max: number;
  name: string;
  /** Rough CEFR neighbourhood, for people who know the scale. Not a certificate. */
  cefr: string;
  meaning: string;
};

export const LEVEL_BANDS: LevelBand[] = [
  {
    id: "starting",
    min: 0,
    max: 6,
    name: "Starting out",
    cefr: "around A1",
    meaning: "You understand some English but cannot yet build your own sentences when speaking.",
  },
  {
    id: "building",
    min: 7,
    max: 12,
    name: "Building basics",
    cefr: "around A2",
    meaning:
      "Simple sentences work, but you stop often, switch to Hindi or your own language, and tenses slip.",
  },
  {
    id: "connecting",
    min: 13,
    max: 16,
    name: "Connecting sentences",
    cefr: "around B1",
    meaning:
      "You can talk about familiar things, but grammar, flow and fillers let you down in longer answers.",
  },
  {
    id: "performing",
    min: 17,
    max: 20,
    name: "Ready to perform",
    cefr: "around B2",
    meaning:
      "You have the English; pressure is the problem — meetings, calls, interviews, unexpected questions.",
  },
];

export type LevelRoomId = "basic" | "intermediate" | "interactive" | "interview";
export type LevelRoom = { id: LevelRoomId; path: string; title: string; fee: string; why: string };

const ROOMS: Record<LevelRoomId, LevelRoom> = {
  basic: {
    id: "basic",
    path: "/course-spoken-english",
    title: "Basic Spoken English",
    fee: "₹1,199/month · 6 months",
    why: "Sounds, sentence patterns and everyday vocabulary, with speaking in every class. Also taught through Hindi or Marathi.",
  },
  intermediate: {
    id: "intermediate",
    path: "/course-intermediate-english",
    title: "Intermediate Spoken English",
    fee: "₹1,999/month · 4 months",
    why: "30 minutes of grammar and an hour of communication per class: tenses, flow, fewer fillers, longer answers.",
  },
  interactive: {
    id: "interactive",
    path: "/course-interactive-speaking",
    title: "Interactive Speaking",
    fee: "₹1,599/month · 3 months",
    why: "Role-plays, meetings, client calls and presentations until speaking under pressure feels ordinary.",
  },
  interview: {
    id: "interview",
    path: "/course-interview-preparation",
    title: "Interview Preparation",
    fee: "₹2,499/month · 2 months",
    why: "The 60-second intro, STAR answers, HR and panel rounds, with recorded mock interviews.",
  },
};

export function bandFor(score: number): LevelBand {
  return LEVEL_BANDS.find((b) => score >= b.min && score <= b.max) ?? LEVEL_BANDS[0];
}

/** One room per result. Goals only change the answer once the basics exist. */
export function roomFor(score: number, goal: LevelGoal): LevelRoom {
  const band = bandFor(score);
  if (band.id === "starting" || band.id === "building") return ROOMS.basic;
  if (band.id === "connecting") return goal === "work" ? ROOMS.interactive : ROOMS.intermediate;
  return goal === "interview" ? ROOMS.interview : ROOMS.interactive;
}

/** The first WhatsApp message: score, band, goal and the room we suggested. */
export function levelMessage(score: number, goal: LevelGoal): string {
  const band = bandFor(score);
  const room = roomFor(score, goal);
  const label = LEVEL_GOALS.find((g) => g.id === goal)?.label ?? goal;
  const goalLabel = label.charAt(0).toLowerCase() + label.slice(1);
  return `Hi, I took the English speaking level test on your website. My score is ${score}/20 (${band.name}). My goal is ${goalLabel}. It suggested ${room.title}. I'd like to book a free group consultation to confirm my level. Please send me the booking link.`;
}

/** Plain-text scoring key, rendered on the page so it works without JavaScript. */
export const LEVEL_KEY_ROWS: string[][] = [
  ["0–6", "Starting out (around A1)", "Basic Spoken English — ₹1,199/month"],
  ["7–12", "Building basics (around A2)", "Basic Spoken English — ₹1,199/month"],
  [
    "13–16",
    "Connecting sentences (around B1)",
    "Intermediate Spoken English — ₹1,999/month (work goal: Interactive Speaking — ₹1,599/month)",
  ],
  [
    "17–20",
    "Ready to perform (around B2)",
    "Interactive Speaking — ₹1,599/month (interview goal: Interview Preparation — ₹2,499/month)",
  ],
];
