import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "Most people “practise English” by watching English videos. That trains listening. Speaking improves only when **your own mouth produces English, under a little time pressure, and someone or something tells you what went wrong**. This routine does all three in 15 minutes, needs only a phone, and works whether you are a beginner or someone who freezes in meetings.",
  },

  { t: "h2", text: "The 15-minute routine" },
  {
    t: "table",
    head: ["Minutes", "Step", "What you do"],
    rows: [
      [
        "0–3",
        "Shadow",
        "Play 30 seconds of clear English (a news clip, a short talk). Pause after each sentence and repeat it aloud, copying the rhythm, not just the words.",
      ],
      [
        "3–7",
        "Retell",
        "Close the clip. Retell what you heard in your own words for 60–90 seconds. Simple sentences are fine. Do not stop to fix mistakes.",
      ],
      [
        "7–11",
        "3-2-1 talk",
        "Pick one topic. Talk about it for 3 minutes, then the same topic in 2 minutes, then in 1 minute. Each round gets faster and cleaner.",
      ],
      [
        "11–13",
        "Record and listen",
        "Record the 1-minute round. Listen once. Count your fillers (umm, actually, basically) and note one sentence that broke.",
      ],
      [
        "13–15",
        "Fix one thing",
        "Say the broken sentence correctly five times. Write it in a notes file called “my fixes”. Tomorrow, start by reading that file aloud.",
      ],
    ],
  },
  {
    t: "p",
    text: "Fifteen minutes is deliberately small. A routine you keep for 30 days beats a 2-hour session you do twice. If you have more time, repeat the 3-2-1 talk with a second topic rather than extending the video.",
  },

  { t: "h2", text: "What is the 3-2-1 speaking rule?" },
  {
    t: "p",
    text: "It is a fluency drill adapted from the classroom “4-3-2” technique: you tell the same story or opinion three times, with less time each round. Because you already know **what** to say by round two, your brain can spend its effort on **how** to say it — so sentences get longer, pauses get shorter and fillers drop. It is the single most useful drill in this routine if you freeze when speaking.",
  },
  {
    t: "example",
    label: "Topic: “My daily commute” — round 3 (1 minute)",
    lines: [
      "I take the metro to work, usually around 8:30.",
      "It takes about forty minutes, door to door.",
      "Honestly, I use that time to listen to podcasts — it's the only quiet part of my day.",
      "The worst part is the last ten minutes, because the station is always crowded.",
    ],
  },

  { t: "h2", text: "A 30-day English speaking practice plan" },
  {
    t: "table",
    head: ["Week", "Topics for the 3-2-1 talk", "Goal by the end of the week"],
    rows: [
      [
        "1",
        "Yourself, your family, your city, your day, your food, your weekend, your phone",
        "Speak for 60 seconds about yourself without stopping",
      ],
      [
        "2",
        "Your work or studies, a problem you solved, a person you admire, a recent purchase",
        "Use past tense correctly in a 2-minute story",
      ],
      [
        "3",
        "Opinions: online vs offline shopping, work from home, mobile phones for children, cricket vs football",
        "Give an opinion with one reason and one example",
      ],
      [
        "4",
        "Real situations: a customer-care call, asking for leave, a 60-second interview intro, explaining a delay",
        "Handle a 3-minute role-play without switching to Hindi",
      ],
    ],
  },
  {
    t: "p",
    text: "Keep a simple log: date, topic, filler count and your longest unbroken turn (in seconds). By day 30 most learners see the filler count fall and the unbroken turn rise. Those two numbers are a more honest measure of fluency than any certificate.",
  },

  { t: "h2", text: "Free tools that actually help (and what they do not do)" },
  {
    t: "table",
    head: ["Tool", "Good for", "Not good for"],
    rows: [
      [
        "YouTube clips and podcasts",
        "Shadowing material, natural rhythm, new phrases",
        "It never hears you. Watching is not speaking.",
      ],
      [
        "AI voice chat apps",
        "Unlimited speaking reps, any time of day, no embarrassment",
        "Often accepts unnatural sentences; does not track the same error across weeks",
      ],
      [
        "Your phone’s voice recorder",
        "Hearing your own fillers, pauses and pronunciation",
        "Tells you nothing unless you listen back honestly",
      ],
      [
        "A practice partner or WhatsApp group",
        "Real back-and-forth, someone waiting for your reply",
        "Partners at your level repeat the same mistakes to each other",
      ],
    ],
  },
  {
    t: "p",
    text: "For a full comparison of free practice against a paid class, read [free English speaking practice vs a paid class](/free-english-speaking-practice-vs-paid-class).",
  },

  { t: "h2", text: "Can I practise speaking English alone?" },
  {
    t: "p",
    text: "Yes — this whole routine is built for practising alone. Talking to yourself, narrating what you are doing (“I’m making tea, I’m adding sugar…”) and recording yourself all count. What practice alone cannot give you is **a listener who reacts** and **someone who hears the same mistake every week and stops it**. That is the gap a teacher or a small live batch fills.",
  },

  { t: "h2", text: "Signs you need more than self-practice" },
  {
    t: "ul",
    items: [
      "After 30 days, your recordings still have the **same grammar mistake** in every round.",
      "You can retell a clip, but you **cannot start a conversation** with a real person.",
      "You speak fine alone but **freeze when someone is waiting** — on calls, in interviews, in meetings.",
      "You do not know **what to practise next**, so you keep repeating week 1 topics.",
    ],
  },
  {
    t: "p",
    text: "If two or more of these are true, the missing piece is usually feedback and a map, not more videos. For the time it realistically takes, see [how long it takes to learn spoken English](/how-long-to-learn-spoken-english). Need sentences to practise with? Start with [daily use English sentences with Hindi meaning](/blog/daily-use-english-sentences-with-hindi).",
  },

  {
    t: "cta",
    text: "Basic Spoken English runs this kind of practice live: up to two classes a week in a batch of approximately 6 learners, so you speak in every class, plus daily practice and a weekly teacher review in the Bolo app. 6 months, ₹1,199/month inclusive of taxes.",
    course: "/course-spoken-english",
    label: "See Basic Spoken English",
  },
];
