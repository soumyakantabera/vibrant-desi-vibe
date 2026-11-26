/**
 * The blog's source of truth.
 *
 * What was broken
 * ---------------
 * The five posts existed only as an inline array in `src/routes/blog.tsx`, with
 * a title, an excerpt, a tag and an image. There was no `slug`, so no article
 * URL existed; `/blog` rendered the five titles as unlinked `<h3>` elements.
 * Nothing was in the sitemap, and the `Blog` JSON-LD emitted `blogPost` entries
 * with a `headline` but no `url` and no date — which makes them ineligible for
 * anything at all. The blog was five headlines with nowhere to go.
 *
 * Everything a `BlogPosting` needs now lives here, and `ALL_PATHS` in
 * `src/lib/seo.ts` derives the article URLs from it, so the routes, the
 * prerendered HTML, the sitemap, llms.txt and the Markdown mirrors are all
 * generated from this one array and cannot drift apart.
 *
 * Kept free of Vite-only imports (image `src` is an `IMG` key, not an import)
 * so `scripts/prerender.mjs` can read it — the same constraint `seo.ts` is
 * under, for the same reason.
 */

import { withJoinFaq } from "@/lib/join-faq";

export type BlogPost = {
  /** URL segment: /blog/<slug>. */
  slug: string;
  /** On-page H1 — may run longer than the <title>. */
  title: string;
  /** <title> for the article page, ≤58 chars. */
  seoTitle: string;
  /** Meta description, 150–158 chars. */
  description: string;
  /** Card text on /blog. */
  excerpt: string;
  tag: string;
  /** Key into `IMG` in src/lib/images.ts. Resolved at render time. */
  img: string;
  imgAlt: string;
  author: string;
  /** ISO date. Required by BlogPosting; without it nothing is eligible. */
  datePublished: string;
  dateModified: string;
  /** Minutes, for `timeRequired`. */
  readingTime: number;
  wordCount: number;
  /** In-body and footer links to the courses the article is actually about. */
  relatedCourses: string[];
  /** Article-specific meta keywords. India-market + CONSULTATION_KEYWORDS are merged in `buildHead`. */
  keywords?: string[];
  /** One-line snippet box under the H1. */
  shortAnswer?: string;
  /** Visible + FAQPage JSON-LD. */
  faqs?: { q: string; a: string }[];
  /** HowTo JSON-LD for phrase / template posts. */
  howTo?: { name: string; description: string; steps: string[]; totalTime?: string };
  /**
   * Primary sources for the numbers in the article. Shown under the article and
   * emitted as BlogPosting `citation`, so a reader (or an AI answer) can check
   * every figure. Full log: research_notes/market-research-serious-learners-nov-2026.md.
   */
  sources?: { name: string; url: string }[];
};

const SRC = {
  cambridgeHours: {
    name: "Cambridge English: Guided learning hours",
    url: "https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours",
  },
  moocPivot: {
    name: "Reich & Ruipérez-Valiente, “The MOOC pivot”, Science (2019)",
    url: "https://tsl.mit.edu/research/the-mooc-pivot/",
  },
  moocIntent: {
    name: "Reich, “MOOC completion and retention in the context of student intent”, EDUCAUSE Review (2014)",
    url: "https://er.educause.edu/articles/2014/12/mooc-completion-and-retention-in-the-context-of-student-intent",
  },
  niti: {
    name: "NITI Aayog: Expanding Quality Higher Education through States and State Public Universities (2025)",
    url: "https://niti.gov.in/sites/default/files/2025-02/Expanding-Quality-Higher-Education-through-SPUs.pdf",
  },
  ets: {
    name: "ETS: English and AI: India’s career formula (TOEIC Global English Skills Report, 2026)",
    url: "https://www.ets.org/insights-and-perspectives/english-and-ai-india-career-formula.html",
  },
  bcIndia: {
    name: "British Council India: Programmes and pricing",
    url: "https://www.britishcouncil.in/english/adults/classes/programmes-pricing",
  },
  aiSpeaking: {
    name: "Frontiers in Psychology (2025): AI and human-facilitated speaking practice",
    url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1745942/full",
  },
} as const;

/**
 * Course-decision guides (26 Nov 2026). Each answers "which course should I
 * take?" for one high-intent search, says who should not join, and ends with
 * the five facts to send on WhatsApp. Research and sources:
 * research_notes/market-research-serious-learners-nov-2026.md.
 */
const DECISION_POSTS: BlogPost[] = [
  {
    slug: "is-a-spoken-english-course-worth-it",
    title: "Is a Spoken English Course Worth It? 7 Checks Before You Pay",
    seoTitle: "Is a Spoken English Course Worth It? 7-Point Check",
    description:
      "Seven checks before you pay for a spoken English course: one goal, two fixed slots a week, daily practice, the full course and its fee. Who should wait.",
    excerpt:
      "Whether a course pays off depends on the hours you can give it. Seven checks to run before paying anyone, with each course's total fee.",
    tag: "Guides",
    img: "womanLaptop",
    imgAlt: "Adult learner planning a weekly study schedule on a laptop",
    author: "Sunanda Dey",
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    readingTime: 3,
    wordCount: 505,
    relatedCourses: [
      "/course-spoken-english",
      "/course-intermediate-english",
      "/course-interactive-speaking",
      "/course-interview-preparation",
    ],
    keywords: [
      "is spoken english course worth it",
      "should i join spoken english class",
      "spoken english course fees india",
      "spoken english course duration",
      "how many hours to learn english speaking",
    ],
    shortAnswer:
      "It is worth it if you have one clear goal, can keep two 90-minute live classes a week, practise 15–20 minutes on other days, and can pay for the whole course (₹4,797–₹7,996 in total here, inclusive of taxes). If three of the seven checks fail, wait.",
    sources: [SRC.niti, SRC.ets, SRC.cambridgeHours],
    faqs: [
      {
        q: "Is a spoken English course worth the money?",
        a: "Yes, if you have one clear goal, can attend live classes twice a week for the whole course, and practise in between. Cambridge English estimates about 180–200 guided hours to reach A2 and 350–400 for B1, so the hours you put in matter more than the brand.",
      },
      {
        q: "How much does a full course cost at Learn With Smile?",
        a: "Inclusive of taxes and paid monthly: Basic Spoken English ₹7,194 over 6 months, Intermediate ₹7,996 over 4 months, Interactive Speaking ₹4,797 over 3 months and Interview Preparation ₹4,998 over 2 months. No EMI or auto-debit.",
      },
      {
        q: "Who should not join a spoken English course yet?",
        a: "Anyone who cannot keep two fixed live slots a week, anyone expecting fluency in 30 days, and anyone who has not tried 15 minutes of daily practice. Try free daily practice for 3–4 weeks first; if you keep it up, you are ready.",
      },
    ],
  },
  {
    slug: "english-fluency-course-which-level",
    title: "English Fluency Course: Which Level Do You Need?",
    seoTitle: "English Fluency Course: Which Level Do You Need?",
    description:
      "Fluency courses cover four problems. Find yours in a minute and match it to one course: building sentences, accuracy, freezing or interviews. With fees.",
    excerpt:
      "“Fluency course” covers four different problems. Find yours in a minute and buy one course instead of three.",
    tag: "Guides",
    img: "speaking",
    imgAlt: "Adult learner speaking during a live online English class",
    author: "Sunanda Dey",
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    readingTime: 3,
    wordCount: 518,
    relatedCourses: [
      "/course-spoken-english",
      "/course-intermediate-english",
      "/course-interactive-speaking",
    ],
    keywords: [
      "english speaking fluency course",
      "english fluency course",
      "fluent english speaking course",
      "professional english speaking course",
      "which english course should i take",
    ],
    shortAnswer:
      "Can't build sentences: Basic Spoken English (₹1,199/month, 6 months). Errors and fillers: Intermediate (₹1,999/month, 4 months). Know it but freeze: Interactive Speaking (₹1,599/month, 3 months). Only interviews go wrong: Interview Preparation (₹2,499/month, 2 months).",
    sources: [SRC.cambridgeHours],
    faqs: [
      {
        q: "Which English fluency course should I take?",
        a: "Match it to your gap. If you can't introduce yourself for 30 seconds, take Basic Spoken English. If you speak with errors and fillers, take Intermediate. If you know the English and freeze in meetings or calls, take Interactive Speaking. If only interviews go wrong, take Interview Preparation.",
      },
      {
        q: "What is the difference between fluency and accuracy?",
        a: "Fluency is how smoothly you keep talking. Accuracy is how correct the English is. Many professionals write correct emails and go quiet in meetings; that is a speaking-practice gap, and another grammar course will not fix it.",
      },
      {
        q: "Can I become fluent in English in 30 days?",
        a: "Not from zero. Cambridge English estimates about 180–200 guided hours to reach A2 and 350–400 for B1. In 30 days you can cut hesitation if you already know some English.",
      },
    ],
  },
  {
    slug: "online-english-tutor-vs-group-class",
    title: "Online English Tutor or Small Group Class: Which Should You Pay For?",
    seoTitle: "Online English Tutor vs Small Group Class (India)",
    description:
      "1:1 online English tutor or a small live group? What each gives you, when a tutor is the better buy, why headcount matters, and which course fits your level.",
    excerpt:
      "A tutor gives you more speaking time. A small group gives you a plan and an audience. Work out which you need before paying for either.",
    tag: "Guides",
    img: "groupClass",
    imgAlt: "Small group of adults in a live online English class",
    author: "Sunanda Dey",
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    readingTime: 2,
    wordCount: 404,
    relatedCourses: ["/course-interactive-speaking", "/course-spoken-english"],
    keywords: [
      "english tutor online",
      "online english tutor india",
      "online english classes for adults",
      "1 on 1 english tutor vs group class",
      "small batch english class online",
    ],
    shortAnswer:
      "Choose a 1:1 tutor for accent work, a changing timetable or a conversation partner. Choose a small live group (about 6) if you freeze when people listen or want a plan with an end date.",
    faqs: [
      {
        q: "Is a 1:1 English tutor better than a group class?",
        a: "Not always. A tutor gives you more speaking time but only one listener. If you freeze in meetings, calls or interviews, speaking in front of a small group is closer to the real thing. Ask any provider for the usual headcount as a number.",
      },
      {
        q: "Does Learn With Smile offer 1:1 tutoring?",
        a: "No. Every class is a live batch of about 6 adults with the same teacher. If you need 1:1 lessons, a tutor marketplace suits you better.",
      },
    ],
  },
  {
    slug: "self-paced-english-course-vs-live-class",
    title: "Coursera, Udemy, a Book or a Live Class: Which English Course Fits You?",
    seoTitle: "Coursera, Udemy or a Live English Class? How to Choose",
    description:
      "Books, recorded courses (Coursera, Udemy), big-brand live courses and small batches train different things. Costs, completion data, and which suits you.",
    excerpt:
      "Books and videos teach you what to say. Speaking to someone who corrects you teaches you to say it. What each format trains, and how many people finish.",
    tag: "Guides",
    img: "studentLaptop",
    imgAlt: "Learner comparing an online English course with a live class",
    author: "Sunanda Dey",
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    readingTime: 3,
    wordCount: 547,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
    keywords: [
      "best english speaking course online",
      "coursera english speaking course",
      "udemy english speaking course",
      "british council english speaking course",
      "rapidex english speaking course",
      "self paced vs live english class",
    ],
    shortAnswer:
      "Use a book or recorded course to learn patterns and words, and a live class to speak and get corrected. In Harvard and MIT's edX data, 52% of people who registered never opened the course, so self-paced works best if you are already disciplined.",
    sources: [SRC.moocPivot, SRC.moocIntent, SRC.bcIndia, SRC.aiSpeaking],
    faqs: [
      {
        q: "Is a Coursera or Udemy course enough to speak English fluently?",
        a: "They are good for learning rules and phrases at your own pace, but they cannot hear or correct you. If you understand English and freeze when speaking, you need live practice with someone listening.",
      },
      {
        q: "Is the Rapidex English Speaking Course book enough?",
        a: "It is a cheap, useful source of sentence patterns, especially for Hindi speakers. A book cannot make you speak aloud or correct you, so pair it with daily speaking practice or a live class.",
      },
    ],
  },
  {
    slug: "public-speaking-course-or-spoken-english-course",
    title: "Public Speaking Course or Spoken English Course: Which Do You Need?",
    seoTitle: "Public Speaking Course or Spoken English Course?",
    description:
      "Could you give the talk in Hindi or Bengali? Then English is the gap, not the stage. How to tell, and which fits: a public speaking or spoken English course.",
    excerpt: "One question decides it: could you give the same talk in your first language?",
    tag: "Guides",
    img: "presentation",
    imgAlt: "Professional presenting to colleagues in a meeting",
    author: "Sunanda Dey",
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    readingTime: 2,
    wordCount: 434,
    relatedCourses: ["/course-interactive-speaking", "/course-intermediate-english"],
    keywords: [
      "public speaking course",
      "public speaking course online",
      "public speaking course online india",
      "public speaking vs spoken english",
      "english for presentations course",
    ],
    shortAnswer:
      "If you could give the talk confidently in your first language, English under pressure is the gap: take a spoken English course (Interactive Speaking covers presentations and Q&A). If you would freeze in any language, try a public speaking course or club.",
    faqs: [
      {
        q: "Do I need a public speaking course or a spoken English course?",
        a: "Ask whether you could give the same talk confidently in Hindi, Bengali or your first language. If yes, take a spoken English course. If you would freeze in any language, a public speaking course or club fits better.",
      },
      {
        q: "Does Learn With Smile teach public speaking?",
        a: "Not as a separate course. Presentations with Q&A are part of Interactive Speaking (3 months, ₹1,599/month, inclusive of taxes), and Intermediate Spoken English ends with a 2–3 minute presentation.",
      },
    ],
  },
];

const RAW_POSTS: BlogPost[] = [
  ...DECISION_POSTS,
  {
    slug: "how-to-improve-communication-skills-in-english",
    title: "How to Improve Communication Skills in English: 12 Habits That Work",
    seoTitle: "How to Improve Communication Skills in English",
    description:
      "12 habits to improve communication skills in English: lead with the point, cut fillers, listen, ask follow-ups, sound polite. Phrases and a 2-week plan.",
    excerpt:
      "Good English is not the same as good communication. Twelve habits — with phrases you can use today and a 2-week plan — for offices, interviews and daily life.",
    tag: "Workplace English",
    img: "presentation",
    imgAlt: "Professional speaking confidently in a small team meeting",
    author: "Sunanda Dey",
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    readingTime: 5,
    wordCount: 838,
    relatedCourses: ["/course-interactive-speaking", "/course-spoken-english"],
    keywords: [
      "how to improve communication skills",
      "how to improve communication skills in english",
      "how to improve english and communication skills",
      "communication skills tips",
      "how to speak confidently in english at work",
      "polite english phrases for office",
    ],
    shortAnswer:
      "Lead with the point, use short sentences, slow down, pause instead of saying “umm”, listen for one key word, check understanding out loud, ask a follow-up question, soften requests, say no with an alternative, and practise real situations with feedback from a person.",
    faqs: [
      {
        q: "How can I improve my communication skills in English?",
        a: "Work on habits as well as language: say your main point first, keep sentences short, slow down slightly, replace fillers with pauses, check understanding out loud and ask one follow-up question in every conversation. Then rehearse the situations you actually face — status updates, calls, interviews — and get feedback from a person once a week.",
      },
      {
        q: "Are communication skills and English skills the same?",
        a: "No. English skills are grammar, vocabulary and pronunciation; communication skills are clarity, listening, tone and confidence. Someone with simple English can communicate very well, and someone with perfect grammar can still ramble. At work you are judged mostly on communication, so train both.",
      },
      {
        q: "How do I stop saying “umm” and “basically” when I speak?",
        a: "Record yourself speaking for one minute, count the fillers, and record again while deliberately pausing instead. Most people cut fillers in half within two weeks once they hear them. A one-second pause sounds more confident than any filler.",
      },
      {
        q: "Is there a course to improve communication skills in English?",
        a: "Learn With Smile’s Interactive Speaking (3 months, ₹1,599/month inclusive of taxes, about 6 learners, live online) practises meetings, calls, presentations and polite disagreement. If everyday English is still hard, Basic Spoken English (₹1,199/month) comes first.",
      },
    ],
    howTo: {
      name: "2-week plan to improve communication skills in English",
      description: "Ten minutes a day on one communication habit at a time.",
      totalTime: "P14D",
      steps: [
        "Days 1–3: answer three questions aloud with the answer in the first sentence.",
        "Days 4–6: record a 1-minute talk, count fillers, and record again.",
        "Days 7–9: ask one follow-up question in every conversation.",
        "Days 10–12: rewrite three blunt messages using polite phrases.",
        "Days 13–14: role-play one difficult call or meeting and ask for feedback.",
      ],
    },
  },
  {
    slug: "how-to-improve-english-vocabulary-for-speaking",
    title: "How to Improve English Vocabulary for Speaking (Not Just Exams)",
    seoTitle: "How to Improve English Vocabulary for Speaking",
    description:
      "Improve your English vocabulary for speaking: learn chunks not single words, the 5-5-5 method, word families and better words for “very good”.",
    excerpt:
      "You already know more words than you use. Chunks, the 5-5-5 method, word families and swaps for overused words move them from reading into speaking.",
    tag: "Spoken English",
    img: "girlReading",
    imgAlt: "Learner noting useful English phrases in a notebook",
    author: "Sunanda Dey",
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    readingTime: 4,
    wordCount: 765,
    relatedCourses: ["/course-spoken-english", "/course-intermediate-english"],
    keywords: [
      "how to improve english vocabulary",
      "how to improve vocabulary for speaking english",
      "how to improve english words vocabulary",
      "english vocabulary for daily conversation",
      "word families in english",
      "learn english chunks phrases",
    ],
    shortAnswer:
      "Learn chunks instead of single words, choose words from your own life, use the 5-5-5 method (5 words, 5 spoken sentences, use each within 5 days), learn word families together, replace overused words, and say every new word aloud the day you learn it.",
    faqs: [
      {
        q: "How can I improve my English vocabulary for speaking?",
        a: "Turn passive words into active ones: learn ready-made chunks (“sorry for the delay”, “as far as I know”), pick words from your own work and life, say a real sentence aloud with each new word, and use it in a conversation within five days. Five words a day used properly beats twenty words copied into a notebook.",
      },
      {
        q: "How many words do I need to speak English fluently?",
        a: "Everyday conversation runs on roughly 1,000–2,000 common words plus a few hundred chunks. Most adults who studied English at school already recognise these; the work is making them come out when speaking.",
      },
      {
        q: "What is the 5-5-5 vocabulary method?",
        a: "Pick 5 useful words a day, say 5 real sentences aloud using them, and use each one in a real conversation, message or voice note within 5 days. About 100 active words a month is enough to change how you sound in three months.",
      },
    ],
  },
  {
    slug: "daily-use-english-sentences-with-hindi",
    title: "Daily Use English Sentences with Hindi Meaning: 90+ Lines by Situation",
    seoTitle: "Daily Use English Sentences with Hindi Meaning",
    description:
      "90+ daily use English sentences with Hindi meaning, grouped by situation: home, shopping, UPI, phone calls, office, travel, doctor. Plus 6 common mistakes.",
    excerpt:
      "Home, shops, UPI, phone calls, office, cabs and the doctor — with the Hindi meaning beside each line, six mistakes to drop and a 10-minute way to practise.",
    tag: "Spoken English",
    img: "spokenEnglish",
    imgAlt: "Learner practising everyday English sentences aloud with a notebook",
    author: "Sunanda Dey",
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
    readingTime: 8,
    wordCount: 1582,
    relatedCourses: ["/course-spoken-english-hindi", "/course-spoken-english"],
    keywords: [
      "daily use english sentences",
      "daily use english sentences with hindi",
      "english sentences for daily use",
      "500 daily use english sentences with hindi",
      "daily use sentences hindi to english",
      "simple english sentences for daily use",
      "english speaking sentences for beginners",
    ],
    shortAnswer:
      "Learn daily English sentences by situation, not by alphabet: one table a day, each line aloud three times, then say the English from the Hindi with the English covered, and use one sentence for real before you sleep.",
    faqs: [
      {
        q: "What are some daily use English sentences?",
        a: "Common ones are: “How much is this?”, “Can I pay by UPI?”, “Could you repeat that, please?”, “I’ll get back to you by evening.”, “I’m running ten minutes late.”, “Stop here, please.” and “I’ve had a fever since yesterday.” They are most useful grouped by situation — home, shop, phone, office, travel, doctor — so you learn the sentence where you will need it.",
      },
      {
        q: "How can I learn daily use English sentences quickly?",
        a: "Pick one situation a day, read each sentence aloud three times, then cover the English and produce it from the Hindi meaning. Record a 60-second voice note using five of them, and use one sentence in a real conversation the same day. Saying a sentence in context is what makes it stick; reading a list of 500 does not.",
      },
      {
        q: "Is “What is your good name?” correct English?",
        a: "It is understood in India but sounds unnatural elsewhere — it is a word-for-word translation of “आपका शुभ नाम”. Say “What is your name?” or, more politely, “May I know your name?”.",
      },
      {
        q: "Is there a spoken English course taught in Hindi?",
        a: "Yes. Learn With Smile’s Basic Spoken English — Hindi to English has a Hindi-speaking teacher who explains in Hindi when a concept stalls, then moves you back to English. It is 6 months, ₹1,199/month inclusive of taxes, live online in a batch of about 6 learners.",
      },
    ],
    howTo: {
      name: "How to practise daily use English sentences in 10 minutes a day",
      description: "A five-step daily method to turn a sentence list into sentences you can say.",
      totalTime: "PT10M",
      steps: [
        "Pick one situation table for the day, such as phone calls or office.",
        "Read each sentence aloud three times: slowly, at normal speed, then without looking.",
        "Cover the English column and say the English from the Hindi meaning.",
        "Record a 60-second voice note using five of the sentences in a made-up situation.",
        "Use one of the sentences in a real conversation before you sleep.",
      ],
    },
  },
  {
    slug: "daily-english-speaking-practice-routine",
    title: "Daily English Speaking Practice: A 15-Minute Routine and 30-Day Plan",
    seoTitle: "Daily English Speaking Practice: 15-Min Routine",
    description:
      "A 15-minute daily English speaking practice routine you can do alone: shadow, retell, the 3-2-1 talk, record, fix one error. Plus a 30-day topic plan.",
    excerpt:
      "Shadow, retell, the 3-2-1 talk, record, fix one thing. A routine you can keep for 30 days, a topic plan for each week, and two numbers that show progress.",
    tag: "Spoken English",
    img: "speaking",
    imgAlt: "Adult recording a short English speaking practice on a phone",
    author: "Sunanda Dey",
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
    readingTime: 5,
    wordCount: 889,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
    keywords: [
      "daily english speaking practice",
      "english speaking practice",
      "how to practice english speaking",
      "english speaking practice alone",
      "3-2-1 rule of speaking",
      "30 day english speaking practice plan",
      "english speaking practice with ai",
    ],
    shortAnswer:
      "Practise 15 minutes a day out loud: 3 minutes shadowing a clip, 4 minutes retelling it, 4 minutes of the 3-2-1 talk on one topic, 2 minutes recording and listening, 2 minutes fixing one broken sentence. Track fillers and your longest unbroken turn.",
    faqs: [
      {
        q: "How can I practise speaking English every day?",
        a: "Do a short routine out loud rather than watching more videos: shadow 30 seconds of clear English, retell it in your own words, talk on one topic for 3, then 2, then 1 minute, record the last round and fix one sentence that broke. Fifteen minutes a day for 30 days beats occasional long sessions.",
      },
      {
        q: "What is the 3-2-1 rule of speaking?",
        a: "It is a fluency drill adapted from the classroom 4-3-2 technique: you say the same story or opinion three times, in 3 minutes, then 2, then 1. Because you already know what to say by the second round, your effort goes into how to say it, so pauses and fillers drop and sentences get longer.",
      },
      {
        q: "Can I practise speaking English alone?",
        a: "Yes. Shadowing, retelling, talking to yourself, narrating what you are doing and recording yourself all work alone. What self-practice cannot give you is a listener who reacts and someone who notices the same mistake every week — that is what a teacher or a small live batch adds.",
      },
      {
        q: "Is AI good for English speaking practice?",
        a: "AI voice chat is good for unlimited speaking reps at any hour without embarrassment. It often accepts sentences a person would not say and does not track your recurring errors across weeks, so use it for volume and get correction from a teacher or a fluent speaker.",
      },
    ],
    howTo: {
      name: "15-minute daily English speaking practice routine",
      description: "A daily routine to build spoken English fluency alone with only a phone.",
      totalTime: "PT15M",
      steps: [
        "Shadow 30 seconds of clear English, repeating each sentence aloud.",
        "Retell what you heard in your own words for 60 to 90 seconds.",
        "Talk on one topic for 3 minutes, then 2 minutes, then 1 minute.",
        "Record the 1-minute round and count your fillers.",
        "Say one broken sentence correctly five times and add it to a fixes list.",
      ],
    },
  },
  {
    slug: "english-conversation-practice-dialogues",
    title: "English Conversation Practice: 10 Real Dialogues for Indian Adults",
    seoTitle: "English Conversation Practice: 10 Real Dialogues",
    description:
      "10 English conversation practice dialogues for real Indian situations: delivery complaints, customer care, HR screens, leave, doctor, cab, PTM, small talk.",
    excerpt:
      "Neighbours, delivery complaints, customer care, an HR screen, asking for leave, the doctor, a cab, a PTM and office small talk — with a “change it” line for each.",
    tag: "Spoken English",
    img: "interactiveSpeaking",
    imgAlt: "Two adults practising an English conversation role-play",
    author: "Sunanda Dey",
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
    readingTime: 6,
    wordCount: 1146,
    relatedCourses: ["/course-interactive-speaking", "/course-spoken-english"],
    keywords: [
      "english conversation practice",
      "english conversation practice for beginners",
      "english speaking practice conversation",
      "daily english conversation",
      "english dialogues for practice",
      "english role play conversation",
    ],
    shortAnswer:
      "Practise conversations, not just sentences: read a dialogue with a partner, swap roles, cover one side and react from memory, then change one detail and do it again without writing anything down.",
    faqs: [
      {
        q: "How can I practise English conversation at home?",
        a: "Read short real-life dialogues aloud with a partner or by recording both parts, swap roles, then cover one side and respond from memory. Finally change one detail — a different problem, a different city — and do it again unscripted. The unscripted round is the real practice.",
      },
      {
        q: "What are good English conversation topics for beginners?",
        a: "Start with situations you actually face: meeting a neighbour, a food delivery complaint, a customer-care call, asking for leave, the doctor, a cab, a parent-teacher meeting and small talk before a meeting. Real situations give you sentences you will use within a week.",
      },
      {
        q: "Why do I freeze in English conversations even when I know the words?",
        a: "Usually because you have practised recognising English, not producing it under time pressure while someone waits. Role-plays where you must react, repeated until they feel ordinary, are the fix. Learn With Smile’s Interactive Speaking (3 months, ₹1,599/month, about 6 learners) is built around this.",
      },
    ],
  },
  {
    slug: "how-to-choose-spoken-english-class-india",
    title: "How to Choose a Spoken English Class in India: 10 Checks",
    seoTitle: "Choose a Spoken English Class | 10 Checks",
    description:
      "Ten checks before you pay for an English class in India: batch size, speaking minutes, GST, named teacher, months upfront, loans, auto-debit and refunds.",
    excerpt:
      "Cap, minutes, GST, named teacher, free session, reviews, certificate, months upfront, loans and auto-debit, refund in writing. Run them on us too.",
    tag: "Guides",
    img: "speaking",
    imgAlt: "Adult learner comparing online English class options on a laptop",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-11-03",
    readingTime: 8,
    wordCount: 1047,
    relatedCourses: ["/course-spoken-english"],
    keywords: [
      "how to choose spoken english class india",
      "best spoken english institute checks",
      "spoken english batch size india",
      "free english consultation vs demo class",
      "engvarta vs british council vs small batch",
      "which english course consultation",
    ],
    shortAnswer:
      "Ask seven things: batch cap, speaking minutes, GST, named teacher, what the free session actually is (class, pitch, or counselling), review patterns, and certificate vs speaking. Run them on us too.",
    faqs: [
      {
        q: "How do I choose a spoken English class in India?",
        a: "Ignore star ratings until you have a batch number. Ask how many learners usually join, how many minutes you will speak in 60 minutes, whether GST is included, who the teacher is, and what the free session actually is — a class, a counsellor pitch, or counselling that diagnoses your bottleneck. Certificate vs speaking is a different buy: visas need an exam score; Indian interviews hear you talk.",
      },
      {
        q: "What batch size is small enough to actually speak?",
        a: "Around 6 learners in a 60-minute class gives you roughly 8–10 minutes on the mic. A room of 25–40 often gives 1–2 minutes, sometimes once a week. If a provider will not print a cap, assume the room is crowded.",
      },
      {
        q: "What should a free English consultation actually give me?",
        a: "A named diagnosis of your bottleneck, one course recommendation with fee and slot in writing, and answers to your questions. Learn With Smile’s session is counselling, not a class — unlike a counsellor pitch or 15 minutes of app talk. Details: https://www.learnwithsmile.app/free-consultation",
      },
    ],
    howTo: {
      name: "How to choose a spoken English class in India",
      description:
        "Seven public checks you can run on any Indian English class in one week, including Learn With Smile.",
      totalTime: "P7D",
      steps: [
        "Ask for the usual headcount, not the phrase small batch.",
        "Divide about 40 speaking minutes by that headcount.",
        "Ask whether the fee is inclusive of GST and whether there is lock-in.",
        "Ask for the named teacher who will remember your errors next week.",
        "Ask what the free session actually is — a class, a pitch, or counselling that diagnoses your bottleneck.",
        "Read 3-star Google reviews for batch size, fees and I never spoke.",
        "Decide if you need a recognised exam score or a voice for interviews.",
      ],
    },
  },
  {
    slug: "spoken-english-or-ielts",
    title: "Spoken English or IELTS? Which Course Fits in 2 Minutes",
    seoTitle: "Spoken English or IELTS? Pick in 2 Minutes",
    description:
      "Spoken English ₹1,199/mo, 6 months. Workplace ₹2,499/mo. A 2-minute picker so you do not buy Band 7 coaching when you still cannot hold a call.",
    excerpt: "Different clocks, different fees. Buy the course that matches the bottleneck.",
    tag: "Spoken English",
    img: "ielts",
    imgAlt: "Learner choosing between spoken English practice and IELTS writing",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-21",
    readingTime: 5,
    wordCount: 577,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
    keywords: [
      "spoken english or ielts",
      "ielts vs spoken english course india",
      "which english course should i take",
      "free consultation choose english course",
    ],
    shortAnswer:
      "Cannot hold a call → Spoken English. Freeze with the words you already have → Interactive. Meetings and clients → Workplace. Visa or university form → IELTS. Do not buy Band 7 coaching when you still cannot finish a sentence.",
    faqs: [
      {
        q: "Should I take Spoken English or IELTS first?",
        a: "If you cannot finish a sentence on a phone call, start with Spoken English (6 months, ₹1,199/month, about 6 learners). If a university, visa or HR form asks for a band, sit IELTS with the test board — we do not sell that paper. Most Indian job interviews hear you speak; they do not ask for an IELTS PDF.",
      },
      {
        q: "Is IELTS useful for a job in India?",
        a: "Only if the form asks. Indian interviews judge a 60-second intro, not a Writing Task 2. Business English, or interview English inside Spoken and Interactive, is usually the cheaper, faster room.",
      },
    ],
  },
  {
    slug: "speaking-minutes-in-a-60-minute-class",
    title: "Speaking Minutes in a 60-Minute English Class",
    seoTitle: "Speaking Minutes in a 60-Min English Class",
    description:
      "How long you actually speak in a 60-minute English class: about 8–10 minutes in a batch of 6, 1–2 in a room of 30, up to 50 one-to-one.",
    excerpt: "Fluency is minutes you spoke, not months on the brochure. Here is the arithmetic.",
    tag: "Spoken English",
    img: "groupClass",
    imgAlt: "Small live English class where every learner gets a turn to speak",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-11",
    readingTime: 6,
    wordCount: 612,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
    keywords: [
      "speaking minutes in english class",
      "small batch vs 30 student english class",
      "learn with smile vs crowded classroom",
    ],
    shortAnswer:
      "Your mic in 60 minutes is roughly (40 minutes) ÷ headcount. Around 6 learners → 8–10 minutes. A room of 30 → 1–2 minutes. Months on a brochure are not speaking minutes.",
    faqs: [
      {
        q: "How many minutes will I speak in a 60-minute English class?",
        a: "After teacher talk, about 40–45 minutes are left. Divide by the people who get a turn. Learn With Smile batches of around 6 give roughly 8–10 minutes. A 25–40 student classroom often gives 1–2 minutes.",
      },
      {
        q: "Are 1:1 apps better for speaking minutes?",
        a: "Yes, on minutes per day — EngVarta-style 15-minute calls win that unit. They do not replace a 6-month map if you cannot yet form a sentence. Minutes plus a syllabus is a different product from minutes alone.",
      },
    ],
  },
  {
    slug: "english-for-office-meetings",
    title: "English for Office Meetings: 12 Phrases You Can Actually Use",
    seoTitle: "English for Office Meetings: Practical Phrases",
    description:
      "Practical English for entering meetings, giving updates, clarifying, disagreeing and closing with decisions — written for Indian working professionals.",
    excerpt:
      "Useful meeting English for updates, questions and disagreement — without corporate jargon.",
    tag: "Workplace English",
    img: "presentation",
    imgAlt: "Indian professional speaking during an online office meeting",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 6,
    wordCount: 950,
    relatedCourses: ["/course-interactive-speaking"],
    keywords: ["english for office meetings india", "meeting phrases for indian professionals"],
    shortAnswer:
      "Enter, update, clarify, disagree, close. Twelve ordinary sentences beat corporate vocabulary you cannot retrieve when three people are waiting.",
    howTo: {
      name: "Speak in an office meeting in English",
      description:
        "Five moves and twelve phrases Indian professionals can actually retrieve in a live meeting.",
      totalTime: "PT20M",
      steps: [
        "Write one outcome you need from the meeting before you join.",
        "Use a short entry sentence and make one point.",
        "Ask a clarification that shows what you already understood.",
        "Disagree on the idea, not the person, and offer a next step.",
        "Close with owner, deadline and what happens if it slips.",
      ],
    },
  },
  {
    slug: "english-for-bpo-customer-support",
    title: "English for BPO and Customer Support Calls: A Practical Guide",
    seoTitle: "English for BPO & Customer Support Calls",
    description:
      "A practical guide to English for BPO and customer support calls: clarify problems, handle complaints, explain next steps and close without confusion.",
    excerpt:
      "Clear call handling, complaint language and recovery phrases — no fake accent promises.",
    tag: "Workplace English",
    img: "businessEnglish",
    imgAlt: "Customer support professional speaking with a client online",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 6,
    wordCount: 977,
    relatedCourses: ["/course-interactive-speaking", "/course-spoken-english"],
  },
  {
    slug: "5-speaking-habits-that-killed-my-hesitation",
    title: "5 Speaking Habits That Killed My Hesitation",
    seoTitle: "5 Speaking Habits That Beat English Hesitation",
    description:
      "Five small daily speaking habits that remove hesitation in about a month. No apps, no expensive course — just the drills we give our own beginner students.",
    excerpt: "The smallest daily ritual that built my fluency — no apps, no expensive courses.",
    tag: "Spoken English",
    img: "girlReading",
    imgAlt: "Indian student practising English speaking aloud at a desk",
    author: "Sunanda Dey",
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    readingTime: 8,
    wordCount: 1654,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
  },
  {
    slug: "band-7-writing-4-paragraph-template",
    title: "Band 7 Writing: The 4-Paragraph Template That Just Works",
    seoTitle: "IELTS Task 2: The 4-Paragraph Band 7 Template",
    description:
      "A repeatable four-paragraph structure for IELTS Writing Task 2, with the exact sentence functions, timings and word counts that hold up under Band 7 marking.",
    excerpt:
      "A simple Task 2 structure our students use to write Band 7 essays under time pressure.",
    tag: "IELTS",
    img: "ielts",
    imgAlt: "IELTS candidate writing a Task 2 essay under timed conditions",
    author: "Sunanda Dey",
    datePublished: "2026-08-20",
    dateModified: "2026-08-20",
    readingTime: 7,
    wordCount: 1381,
    relatedCourses: ["/course-spoken-english"],
    shortAnswer:
      "Four paragraphs, 260–280 words, 40 minutes. Task Response and Coherence are half the marks and they are organisation, not vocabulary.",
    howTo: {
      name: "Write an IELTS Task 2 Band 7 essay",
      description: "A four-paragraph template with sentence jobs, timings and word counts.",
      totalTime: "PT40M",
      steps: [
        "Spend 5 minutes on a one-line position and two reasons.",
        "Write a two-sentence introduction that paraphrases the question and states your view.",
        "Write body 1: topic sentence, explanation, example, mini-close (~110 words).",
        "Write body 2 the same way for the second reason (~110 words).",
        "Close in two sentences: restated view plus the consequence. Leave 3 minutes to check.",
      ],
    },
  },
  {
    slug: "5-email-phrases-that-sound-more-professional",
    title: "5 Email Phrases That Make You Sound More Professional",
    seoTitle: "5 Email Phrases That Sound More Professional at Work",
    description:
      "Five wording swaps that make workplace emails sound confident rather than apologetic, with before-and-after examples from real Indian office correspondence.",
    excerpt: "Small wording swaps that instantly upgrade your workplace emails.",
    tag: "Workplace English",
    img: "businessEnglish",
    imgAlt: "Professional writing a work email on a laptop in an office",
    author: "Sunanda Dey",
    datePublished: "2026-08-22",
    dateModified: "2026-08-22",
    readingTime: 7,
    wordCount: 1476,
    relatedCourses: ["/course-interactive-speaking"],
    shortAnswer:
      "Swap sorry-for-the-delay, do-the-needful, revert, stacked hedges and kindly-find-attached for a verb, an owner and a deadline.",
    howTo: {
      name: "Rewrite a workplace email in clearer English",
      description: "Five wording swaps used in Indian office mail.",
      totalTime: "PT10M",
      steps: [
        "Replace Sorry for the delay with Thanks for your patience plus the status.",
        "Replace do the needful / revert / at the earliest with a named verb and a date.",
        "Cut stacked hedges down to I would suggest or Please.",
        "Replace Kindly find attached herewith with Attached is X, needed by Y.",
        "Send only if a stranger could act without asking what you meant.",
      ],
    },
  },
  {
    slug: "tell-me-about-yourself-in-60-seconds",
    title: "How to Answer 'Tell Me About Yourself' in 60 Seconds",
    seoTitle: "'Tell Me About Yourself': A 60-Second Answer Formula",
    description:
      "A three-part structure for the most common interview opener, with full example answers for freshers, career switchers and experienced professionals in India.",
    excerpt: "A simple structure our students use to nail the most common interview opener.",
    tag: "Interview English",
    img: "presentation",
    imgAlt: "Candidate answering questions in an online job interview",
    author: "Sunanda Dey",
    datePublished: "2026-08-25",
    dateModified: "2026-09-22",
    readingTime: 8,
    wordCount: 1584,
    relatedCourses: [
      "/course-spoken-english",
      "/course-interactive-speaking",
      "/course-interview-preparation",
    ],
    keywords: [
      "tell me about yourself in 60 seconds",
      "interview english india",
      "fresher interview intro english",
    ],
    shortAnswer:
      "Sixty seconds, three beats: present job, one or two past results, why this role next. The question means why you are in this chair — not your life story.",
    howTo: {
      name: "Answer tell me about yourself in 60 seconds",
      description: "Present–Past–Future formula with timings for Indian interviews.",
      totalTime: "PT1M",
      steps: [
        "Present (~20s): what you do now and one line of scope.",
        "Past (~20s): one or two results that argue for this role.",
        "Future (~20s): what you want next, named to this company.",
        "Record it once, cut anything that does not argue for this chair.",
      ],
    },
    faqs: [
      {
        q: "How long should a tell me about yourself answer be?",
        a: "Sixty to ninety seconds. Longer and the interviewer has stopped listening. Shorter and you have not given them a reason to continue.",
      },
    ],
  },
  {
    slug: "bpo-to-client-facing-role-roadmap",
    title: "BPO to Client-Facing Role: The Realistic 6-Month Roadmap",
    seoTitle: "BPO to Client-Facing Role: A Realistic 6-Month Plan",
    description:
      "A month-by-month plan for moving from back-office BPO work into a client-facing role in India: what to learn, in what order, and how to prove it.",
    excerpt: "What to learn, in what order, and how to talk about it in interviews.",
    tag: "Career",
    img: "career",
    imgAlt: "Professional presenting to clients in a meeting room",
    author: "Sunanda Dey",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    readingTime: 9,
    wordCount: 1837,
    relatedCourses: ["/course-interview-preparation", "/course-spoken-english"],
    keywords: [
      "bpo to client facing role",
      "bpo to client facing english",
      "back office to client facing english",
    ],
  },
];

/** Posts, each with the WhatsApp "how do I join?" FAQ where theirs lack one. */
/**
 * 26 Nov 2026: every article gained the course-fit check and re-verified
 * market prices, so its dateModified moves to that day (never backwards).
 */
const FIT_CHECK_REVISED = "2026-11-26";

export const BLOG_POSTS: BlogPost[] = RAW_POSTS.map((post) => ({
  ...post,
  dateModified: post.dateModified < FIT_CHECK_REVISED ? FIT_CHECK_REVISED : post.dateModified,
  faqs: withJoinFaq(post.faqs, { kind: "general" }),
}));

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);

/** Newest first — the order /blog lists them in. */
export const getPostsSorted = (): BlogPost[] =>
  [...BLOG_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

/**
 * Up to `limit` other posts sharing this post's tag, falling back to the most
 * recent others so an article is never a dead end.
 */
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const others = getPostsSorted().filter((p) => p.slug !== slug);
  const sameTag = others.filter((p) => p.tag === post.tag);
  return [...sameTag, ...others.filter((p) => p.tag !== post.tag)].slice(0, limit);
}
