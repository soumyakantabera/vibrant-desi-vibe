/**
 * Bolo — the Learn With Smile practice app (November 2026).
 *
 * One app holds what used to be three loose parts of the package: daily
 * exercises (the old "learner portal"), the recorded video library and the
 * weekly teacher review. Live classes and the same teacher stay separate.
 *
 * Copy rules, kept here so every page says the same true thing:
 * - Say only what Bolo does today: daily practice with streaks, video lessons,
 *   recordings sent to the teacher and the weekly review. No download counts,
 *   store ratings, AI-tutor claims or video counts.
 * - No store badges or app links until there is one to give. Login details
 *   come on WhatsApp after admission.
 * - Only our teachers hear a learner's recordings.
 * - Website copy around Bolo stays calm. Inside Bolo screens and mascot speech
 *   the voice is casual, short and second person, with a light Hinglish touch.
 */
import type { FeeSlug } from "@/lib/fees";

export const BOLO = {
  name: "Bolo",
  path: "/bolo",
  fullName: "Bolo, the Learn With Smile practice app",
  meaning: "Bolo means “speak!” in Hindi.",
  tagline: "A little English every day, between your live classes.",
  oneLine:
    "Bolo is the Learn With Smile practice app: daily grammar, vocabulary, reading and speaking practice with a streak, recorded video lessons, and a weekly review from your teacher — included in every course fee.",
  access:
    "Bolo comes with every paid course. Login details come on WhatsApp after admission, and access runs while you are enrolled.",
  synonym: "Bolo is our learner portal app",
  privacy: "Only our teachers hear your recordings.",
} as const;

export type BoloTabKey = "practice" | "watch" | "review";

export type BoloTab = {
  key: BoloTabKey;
  label: string;
  /** What the website calls it (calm voice). */
  title: string;
  /** What Bolo says about it (casual voice). */
  casual: string;
  body: string;
  points: string[];
  icon: "pen" | "play" | "review";
  /** Accent used for this tab in the app mock-ups. */
  accent: "teal" | "amber" | "plum";
};

export const BOLO_TABS: BoloTab[] = [
  {
    key: "practice",
    label: "Practice",
    title: "Daily practice with a streak",
    casual: "Aaj ka practice ready hai! 5 questions, then one short recording.",
    body: "Grammar and vocabulary every day, reading aloud, and whole conversations you record for your teacher. Keep the streak going.",
    points: [
      "Daily grammar and vocabulary with instant feedback",
      "Reading practice: read aloud, then find the grammar in the text",
      "Speaking practice: a whole conversation, recorded for your teacher",
      "A daily streak, so a little English happens every day",
    ],
    icon: "pen",
    accent: "teal",
  },
  {
    key: "watch",
    label: "Watch",
    title: "Video lessons chosen for your course",
    casual: "Headphones on — tips to start speaking, in short videos.",
    body: "Recorded lessons to revise any time: tips and tricks to start speaking, grammar you actually use, fluency, thinking in English and what to say when your mind goes blank.",
    points: [
      "Tips and tricks to start speaking English",
      "Grammar, fluency and thinking in English",
      "What to say when your mind goes blank",
      "Picked for your course, not a random playlist",
    ],
    icon: "play",
    accent: "amber",
  },
  {
    key: "review",
    label: "Review",
    title: "Your teacher reviews your week",
    casual: "Mithu ka message: your teacher checked this week's recordings.",
    body: "Every week your teacher reviews the reading and speaking you sent in Bolo, and writes notes on the mistakes that repeat. The next live class picks up from there.",
    points: [
      "Every week, your reading and speaking are reviewed",
      "Notes on the mistakes that repeat, not every small slip",
      "The next live class starts from that feedback",
      "Only our teachers hear your recordings",
    ],
    icon: "review",
    accent: "plum",
  },
];

/** Short lines the mascots say inside Bolo sections. Casual on purpose. */
export const BOLO_LINES = {
  hello: "Hi, I'm Bolo! Chalo, a little English today?",
  streak: "Streak safe! See you tomorrow.",
  correct: "Sahi jawab! That's the one.",
  wrong: "Almost! Here's the trick —",
  perfect: "5 out of 5 — shabaash!",
  watch: "Headphones on. This one's only 4 minutes.",
  review: "I checked your week. Two small fixes — you've got this.",
  lost: "Even I fly into the wrong tree sometimes.",
  empty: "Nothing here yet — try another course.",
} as const;

export const BOLO_MASCOTS = [
  {
    key: "bolo",
    name: "Bolo",
    bird: "Indian rose-ringed parakeet",
    role: "Your everyday practice buddy",
    body: "Bolo turns up for daily practice, video lessons and quiz answers. Cheerful, a bit chatty, and never preachy. The ring round Bolo's neck is a smile.",
    says: "Aaj ka practice ready hai!",
  },
  {
    key: "mithu",
    name: "Mithu",
    bird: "Scarlet macaw",
    role: "The calm, wise friend",
    body: "Mithu turns up for the weekly teacher review and on the days things go wrong. Bigger, brighter and kind about mistakes.",
    says: "Every mistake you send is one you won't repeat.",
  },
] as const;

export const BOLO_STEPS: { title: string; body: string }[] = [
  {
    title: "Get a free consultation",
    body: "Message us on WhatsApp. We find your speaking gap and recommend one course.",
  },
  {
    title: "Join your course",
    body: "Pick a batch slot and pay monthly. Bolo is included in the course fee.",
  },
  {
    title: "Get your Bolo login",
    body: "Login details come on WhatsApp after admission. Start your streak the same day.",
  },
];

/** What Bolo focuses on, per course. Live and teacher lines live in package.ts. */
export const BOLO_FOR_COURSE: Record<FeeSlug, string> = {
  "spoken-english":
    "Daily conversations, word and phrase brush-ups, reading aloud and grammar inside simple texts.",
  "intermediate-english":
    "Grammar you just learnt inside real sentences, connectors and modals, reading for rhythm and recorded 60–90 second turns.",
  "interactive-speaking":
    "Whole-conversation practice, phrase brush-ups and reading for rhythm between sessions.",
  "business-english":
    "Meeting conversations, office phrases, reading emails aloud and grammar in business texts.",
  "interview-preparation":
    "Full interview conversations, answer phrases and grammar inside sample answers.",
};

export const BOLO_FAQ: { q: string; a: string }[] = [
  {
    q: "What is Bolo?",
    a: "Bolo is the Learn With Smile practice app — our learner portal app. It holds your daily practice (grammar, vocabulary, reading and speaking) with a streak, recorded video lessons chosen for your course, and the weekly review your teacher writes on the reading and speaking you send.",
  },
  {
    q: "Does Bolo cost extra?",
    a: "No. Bolo is included in every paid course fee. There is no separate app fee and no material fee.",
  },
  {
    q: "How do I get Bolo?",
    a: "Get a free consultation on WhatsApp, join a course, and your Bolo login details come on WhatsApp after admission.",
  },
  {
    q: "Can I use Bolo without live classes?",
    a: "No. Bolo is the practice between your live classes. It is part of a course, not a separate product.",
  },
  {
    q: "Who hears my recordings?",
    a: "Only our teachers. Your teacher listens to the reading and speaking you send in Bolo and reviews it every week.",
  },
  {
    q: "Does Bolo have streaks?",
    a: "Yes. Bolo keeps a daily practice streak, so a little English happens every day — not just on class days.",
  },
  {
    q: "What happens to Bolo after my course ends?",
    a: "Access runs while you are enrolled. Learners who enrol by 30 November 2026 get one extra month of Bolo free after their course.",
  },
  {
    q: "Which phone do I need?",
    a: "Any smartphone with an up-to-date browser works. The details come with your login.",
  },
];
