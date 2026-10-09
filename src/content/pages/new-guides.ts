import type { ArticleBody } from "@/content/blog/blocks";
import { IMG } from "@/lib/images";

export type GuideView = {
  path: string;
  eyebrow: string;
  breadcrumb: string;
  h1: string;
  h1Accent: string;
  standfirst: string;
  shortAnswer: string;
  image: string;
  alt: string;
  waMessage: string;
  ctaTitle: string;
  ctaBody: string;
  faqTitle: string;
  body: ArticleBody;
};

export const NEW_GUIDE_VIEWS: Record<string, GuideView> = {
  "/spoken-english-for-beginners-india": {
    path: "/spoken-english-for-beginners-india",
    eyebrow: "Beginners",
    breadcrumb: "Spoken English for beginners",
    h1: "Spoken English for beginners in India",
    h1Accent: "Zero to a 2-minute turn",
    standfirst:
      "Sounds, sentences, then a two-minute turn. 6 months, approximately 6 learners, ₹999/month inclusive of taxes. Live IST. No 30-day fluency ads.",
    shortAnswer:
      "If you cannot finish a sentence yet, this is the room — not IELTS, not a 1:1 app, not a 30-student classroom. 6 months, ₹999/month, around 6 learners, inclusive of taxes.",
    image: IMG.spokenEnglish,
    alt: "Beginner adult practising spoken English in a small live online class",
    waMessage: "Hi, I am a beginner and I want a free consultation for Basic Spoken English.",
    ctaTitle: "Get a free consultation first",
    ctaBody:
      "We will tell you if you are a beginner — including when Interactive would be the wrong buy. Counselling, not a class.",
    faqTitle: "Beginner Spoken English — questions",
    body: [
      {
        t: "p",
        text: "A beginner is someone who **cannot yet finish a sentence out loud**. You may read English. You may write WhatsApp messages with help. You freeze in a shop, a phone call, or a two-minute turn. That is this course. If you already have the words and freeze anyway, go to [Interactive](/interactive-english-class-hesitation). If a form asks for a band, sit IELTS with the test board — we do not sell that paper. Market fees: [IELTS coaching fees](/ielts-coaching-fees-india).",
      },
      { t: "h2", text: "What 6 months actually covers" },
      {
        t: "ol",
        items: [
          "**Sounds and mouth.** v/w, t/d, ending sounds. You cannot skip this and hope accent-training later will save you.",
          "**Sentences you can reuse.** Introduce yourself, ask for a price, take a phone number, disagree politely.",
          "**A two-minute turn.** One topic, out loud, every week, with the same teacher hearing the same error.",
        ],
      },
      {
        t: "p",
        text: "Everyday conversation is the finish line — not a client deck, not Band 7. Those are later rooms. Time ranges: [how long spoken English takes](/how-long-to-learn-spoken-english).",
      },
      { t: "h2", text: "Why apps and 30-student rooms fail beginners" },
      {
        t: "table",
        head: ["Format", "What a beginner actually gets"],
        rows: [
          [
            "1:1 app (EngVarta, Cambly)",
            "Minutes, no 6-month map. Nothing to practise if you cannot form a sentence.",
          ],
          ["25–40 student classroom", "1–2 minutes a week. Silence looks like attending."],
          [
            "Recorded video / AI chat",
            "You talk to a screen that does not remember last Tuesday's v/w.",
          ],
          [
            "Learn With Smile, ~6 learners",
            "8–10 minutes an hour, a named teacher, ₹999/mo inclusive of taxes.",
          ],
        ],
      },
      { t: "h2", text: "Hindi-medium and Bengali-medium" },
      {
        t: "p",
        text: "School medium decided how much English you heard between 6 and 16. It did not decide whether you can run a conversation at 28. Most of our beginners started in Hindi or Bengali medium. The class is English; when a concept stalls, the teacher explains in Hindi or Bengali, then you go back to English. Full note: [that guide](/english-hindi-bengali-medium).",
      },
      { t: "h2", text: "What we will not promise" },
      {
        t: "ul",
        items: [
          "No certificate. Indian interviews hear you. Visas read an exam-board score.",
          "No 30-day fluency from zero.",
          "No job or salary outcome. Clearer speech removes one barrier. It is not a placement cell.",
        ],
      },
      { t: "h2", text: "Your first sentences" },
      {
        t: "example",
        label: "Weeks 1–2: sentences you will use immediately",
        lines: [
          "My name is … I live in … I work as … / I study …",
          "Could you say that again, please?",
          "How much is this?",
          "Sorry, I don't understand. Could you speak slowly?",
          "Can I call you back in ten minutes?",
        ],
      },
      { t: "h2", text: "If you want to start free" },
      {
        t: "ul",
        items: [
          "**Duolingo-style apps** are fine for a daily vocabulary habit in the first month.",
          "**YouTube teachers in Hindi or Bengali** explain basic grammar well, for free.",
          "**AI voice chat** lets you say your first sentences to something that answers back.",
          "**Move to a live class** when you can read simple sentences but cannot say them without notes — that gap needs someone to hear you and correct you.",
        ],
      },
      {
        t: "cta",
        text: "Beginners sit in the Spoken English room. Approx. 6 learners. ₹999/mo, inclusive of taxes.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
  "/how-to-speak-english-fluently": {
    path: "/how-to-speak-english-fluently",
    eyebrow: "Fluency",
    breadcrumb: "How to speak English fluently",
    h1: "How to speak English fluently",
    h1Accent: "Minutes, not 30-day ads",
    standfirst:
      "Fluency is the minutes you spoke, corrected, and spoke again. From zero, everyday conversation is about 6 months of live practice — ₹999/month, around 6 learners, inclusive of taxes.",
    shortAnswer:
      "Speak every day in short turns, get the same errors corrected, and follow a map. From zero that is about 6 months live — not 30 days. A batch of around 6 beats a room of 30. Free drills below; pay only if you need a seat.",
    image: IMG.speaking,
    alt: "Adult learner speaking English aloud during a live class",
    waMessage: "Hi, I want a free consultation to speak English fluently.",
    ctaTitle: "Practise fluency in a live room",
    ctaBody:
      "If you already have a partner and a map, stay free. If you need a teacher who remembers your errors, get a free consultation.",
    faqTitle: "Fluency — straight answers",
    body: [
      {
        t: "p",
        text: "People search “how to speak English fluently” because the ads promised 30 days and the classroom gave them a notebook. Fluency is not a personality. It is **retrieval speed** — can you finish the sentence before the inspection in your head cancels it.",
      },
      { t: "h2", text: "The only arithmetic that matters" },
      {
        t: "p",
        text: "In 60 minutes, about 40 are the speaking pool. Divide by headcount. Around 6 learners → 8–10 minutes of you. Around 30 → 1–2 minutes. Six months of the first is a different life from six months of the second. Full table: [speaking minutes](/blog/speaking-minutes-in-a-60-minute-class).",
      },
      { t: "h2", text: "Five drills that cost nothing" },
      {
        t: "ol",
        items: [
          "**A 60-second voice note every day.** Same topic twice a week so you can hear the error die.",
          "**Shadow 60 seconds of a podcast.** Mouth, not meaning. Then say the same thing in your words.",
          "**One human, 10 minutes.** Family, colleague, language exchange. Apps do not replace this.",
          "**Write the sentence, then say it with the paper face down.** Reading is not speaking.",
          "**Record the freeze.** The pause is the lesson. Habits we use in class: [5 speaking habits](/blog/5-speaking-habits-that-killed-my-hesitation).",
        ],
      },
      { t: "h2", text: "When a paid class is the cheaper path" },
      {
        t: "p",
        text: "Free fails when you do not know what to practise next, when nobody names the error, or when you skip days. A live batch of around 6 at ₹999/month inclusive of taxes buys those three things. If you already have them, [stay free](/free-english-speaking-practice-vs-paid-class).",
      },
      {
        t: "ul",
        items: [
          "Cannot form a sentence → [Spoken English for beginners](/spoken-english-for-beginners-india), 6 months.",
          "Have the words, freeze anyway → [Interactive](/interactive-english-class-hesitation), 3 months, ₹1,199/month.",
          "Meetings and calls → [Business English](/workplace-english-course-online-india), 3 months, ₹1,999/month.",
        ],
      },
      { t: "h2", text: "Fluency tools compared" },
      {
        t: "table",
        head: ["Tool", "Best use", "Limit"],
        rows: [
          [
            "Duolingo-style apps",
            "A daily vocabulary habit",
            "Short tapped answers, not conversation",
          ],
          [
            "ELSA and other pronunciation apps",
            "Individual sounds and word stress",
            "Pronunciation is not fluency — you still need conversation",
          ],
          [
            "AI voice chat (ChatGPT, Gemini)",
            "Unlimited speaking practice at any hour",
            "It keeps talking even when your English is wrong",
          ],
          [
            "1:1 tutors (Cambly, italki, Preply)",
            "Lots of talk time with one person",
            "No shared syllabus; you choose and manage the tutor",
          ],
          [
            "Toastmasters",
            "Prepared speeches and confidence in front of people",
            "Peer feedback; not grammar teaching",
          ],
          [
            "Small live batch (Learn With Smile)",
            "Correction, a map, and people to talk to",
            "Fixed slots; about 6 months at ₹999/month from zero",
          ],
        ],
      },
      { t: "h2", text: "The 4-3-2 drill" },
      {
        t: "p",
        text: "A classic fluency exercise from language-teaching research: tell the same short story three times — in 4 minutes, then 3, then 2. The content stays the same, so your brain stops inventing and starts retrieving. Speed and smoothness go up within one session. Do it alone with a timer, or with a partner who just listens.",
      },
      {
        t: "example",
        label: "Try it today",
        lines: [
          "Topic: “A day something went wrong at work or college.”",
          "4 minutes: everything you remember.",
          "3 minutes: the same story, without the details nobody needed.",
          "2 minutes: just the problem, what you did, and how it ended.",
        ],
      },
      {
        t: "cta",
        text: "Fluency is a room you speak in, not a poster. Approx. 6 learners. From ₹999/mo.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
  "/spoken-english-for-freshers-india": {
    path: "/spoken-english-for-freshers-india",
    eyebrow: "Freshers",
    breadcrumb: "Spoken English for freshers",
    h1: "Spoken English for freshers in India",
    h1Accent: "The 60-second chair",
    standfirst:
      "Campus intro, HR screen, tell-me-about-yourself. Spoken English from ₹999/month if you cannot chat yet; Interview Preparation ₹1,999/month if you can chat but freeze in HR. Inclusive of taxes. No placement promise.",
    shortAnswer:
      "If you cannot hold a two-minute conversation, take Spoken English first. If you can chat and still freeze in HR rounds, take Interview Preparation (2 months). If the freeze is everywhere, not just interviews, Interactive Speaking. IELTS is for forms, not most Indian campus drives, and we do not sell it.",
    image: IMG.interview,
    alt: "Fresher practising a job interview in English on a video call",
    waMessage: "Hi, I am a fresher and I want a free consultation for Interview Preparation.",
    ctaTitle: "Practise the chair before the drive",
    ctaBody: "We will not promise a job. We will put you on the mic in a batch of around 6.",
    faqTitle: "Freshers — questions",
    body: [
      {
        t: "p",
        text: "Campus placement English is not IELTS. It is **sixty seconds** in a chair: who you are, one proof, why this role. The template is here: [tell me about yourself](/blog/tell-me-about-yourself-in-60-seconds). Most freshers fail that minute because they start at birthplace and never arrive at the job.",
      },
      { t: "h2", text: "Two different problems" },
      {
        t: "table",
        head: ["If this is true", "Take", "Fee"],
        rows: [
          [
            "You cannot finish a sentence on a phone call",
            "Basic Spoken English, 6 months, ~6 learners",
            "₹999/month",
          ],
          [
            "You can chat, HR screens still collapse",
            "Interview Preparation, 2 months",
            "₹1,999/month",
          ],
        ],
      },
      {
        t: "p",
        text: "Fees inclusive of taxes. Buying IELTS because “it will help in placements” is the expensive wrong room. [Spoken or IELTS](/blog/spoken-english-or-ielts).",
      },
      { t: "h2", text: "What interview English actually drills" },
      {
        t: "ul",
        items: [
          "60-second intro until it is boring — boring is the goal.",
          "STAR answers for internships, projects and part-time work. No fake experience.",
          "Salary and notice-period sentences you can say without apologising.",
        ],
      },
      { t: "h2", text: "What we will not print on a brochure" },
      {
        t: "ul",
        items: [
          "No placement cell and no salary doubling.",
          "No certificate that HR will ask for. They will hear you.",
          "A career gap or a back-paper is a fact. We practise how you say it; we do not erase it.",
        ],
      },
      { t: "h2", text: "Your options before placement season" },
      {
        t: "table",
        head: ["Option", "Good for", "Where it falls short"],
        rows: [
          [
            "College training and placement cell",
            "Free; aptitude, group discussion and company-specific prep",
            "Large groups; little one-to-one correction of how you speak",
          ],
          [
            "YouTube interview videos",
            "Seeing sample answers",
            "Memorised answers sound memorised; you never practise out loud with feedback",
          ],
          [
            "Friends doing mock interviews",
            "Free, realistic nerves",
            "Friends rarely correct structure or grammar",
          ],
          [
            "AI mock interviews (ChatGPT voice and similar)",
            "Unlimited practice of common questions",
            "Accepts weak answers; no sense of how you come across",
          ],
          [
            "Learn With Smile Interview Preparation",
            "Live mocks in a batch of about 6, recorded, same teacher",
            "2 months, ₹1,999/month; we do not place you anywhere",
          ],
        ],
      },
      { t: "h2", text: "A 60-second fresher answer" },
      {
        t: "example",
        label: "Tell me about yourself — illustrative B.Com fresher",
        lines: [
          "I'm Priya, a B.Com graduate from Kolkata, applying for the accounts executive role.",
          "In my final year I handled GST invoices for a family business — about 40 a month — and learned Tally on the job.",
          "I also managed the budget for our college fest with a team of four and finished under plan.",
          "I'm looking for a role where I can build on that accounting work, which is why this position fits.",
        ],
      },
      {
        t: "p",
        text: "Present, proof, proof, fit. No birthplace, no list of hobbies. Full template: [the 60-second answer](/blog/tell-me-about-yourself-in-60-seconds).",
      },
      { t: "h2", text: "Group discussion: four lines that get you in" },
      {
        t: "ul",
        items: [
          "**Opening:** “I'd like to start by defining the problem…”",
          "**Adding:** “Building on Rahul's point…”",
          "**Disagreeing:** “I see it differently, because…”",
          "**Summarising:** “So far we agree on two things…”",
        ],
      },
      {
        t: "cta",
        text: "Freshers sit in one room — Spoken, Interview Preparation or Interactive — not three. Message us.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
  "/spoken-english-for-homemakers-india": {
    path: "/spoken-english-for-homemakers-india",
    eyebrow: "Homemakers",
    breadcrumb: "Spoken English for homemakers",
    h1: "Spoken English for homemakers",
    h1Accent: "A voice for shops, school, yourself",
    standfirst:
      "Afternoon and evening IST batches. 6 months, ₹999/month inclusive of taxes, approximately 6 learners. Adults 15+. Not a children’s class. Not a certificate mill.",
    shortAnswer:
      "Homemakers join the same Spoken English room as everyone else — afternoon and evening IST, around 6 learners, ₹999/month inclusive of taxes. School medium and a career gap are not a wall.",
    image: IMG.girlReading,
    alt: "Homemaker practising spoken English at home on a laptop",
    waMessage:
      "Hi, I am a homemaker and I want a free consultation for daytime Basic Spoken English.",
    ctaTitle: "Join an afternoon or evening batch",
    ctaBody: "Tell us your window. We reply 10am–midnight IST every day. The consultation is free.",
    faqTitle: "Homemakers — questions",
    body: [
      {
        t: "p",
        text: "The search is often “spoken English for housewives”. The need is ordinary: a shop, a school meeting, a bank call, a relative who switched to English. You do not need a corporate deck. You need **sentences you will say this week**.",
      },
      { t: "h2", text: "What the 6 months is for" },
      {
        t: "ul",
        items: [
          "Introduce yourself without shrinking.",
          "Ask for a price, a date, a next step.",
          "Speak for two minutes on a topic you chose.",
          "Take a school or society meeting without going silent.",
        ],
      },
      {
        t: "p",
        text: "If work meetings and client calls are the next job, that is [Business English](/workplace-english-course-online-india) after this room — not instead of it.",
      },
      { t: "h2", text: "Timings that actually fit" },
      {
        t: "p",
        text: "Afternoon batches while the house is quiet, and evening batches. Every class is recorded, so a missed hour is revision, not a lost week. The class is live — the recording is not the class. [Working professionals](/english-for-working-professionals-india) use the evening slot; homemakers usually take morning.",
      },
      { t: "h2", text: "School medium, career gap, age" },
      {
        t: "p",
        text: "Hindi-medium, Bengali-medium, a decade at home: none of these is a wall. They are the starting point. We explain in Hindi or Bengali when a concept stalls, then go back to English. Adults 15+. Under-14s need a children’s platform — we will say so.",
      },
      { t: "h2", text: "Sentences for this week, not a textbook" },
      {
        t: "example",
        label: "Parent–teacher meeting",
        lines: [
          "Good morning, ma'am. I'm Aarav's mother.",
          "Could you tell me how he is doing in maths?",
          "What can I practise with him at home?",
          "Thank you. May I message you if I have a question?",
        ],
      },
      {
        t: "example",
        label: "At the doctor's",
        lines: [
          "My daughter has had a fever since last night.",
          "It's about 101 degrees, and she's eating less.",
          "How many times a day should she take this?",
          "Should we come back if it doesn't go down?",
        ],
      },
      {
        t: "example",
        label: "Bank or customer-care call",
        lines: [
          "I'm calling about my account ending 4521.",
          "₹2,000 was deducted twice on Monday.",
          "Could you tell me when it will be refunded?",
          "Can I have a reference number, please?",
        ],
      },
      { t: "h2", text: "Options homemakers usually consider" },
      {
        t: "table",
        head: ["Option", "Good for", "Where it falls short"],
        rows: [
          [
            "Duolingo-style apps",
            "A daily habit, vocabulary",
            "Very little real speaking; easy to drop",
          ],
          [
            "YouTube teachers in Hindi or Bengali",
            "Clear explanations in your language, free",
            "You listen, but you don't speak back",
          ],
          [
            "Neighbourhood spoken English centre",
            "Getting out, meeting people",
            "Fixed timings, travel, often large batches",
          ],
          [
            "1:1 online tutor",
            "Flexible timing",
            "Higher cost per hour; quality depends on the tutor",
          ],
          [
            "Learn With Smile Spoken English",
            "Afternoon or evening live batch of about 6; explanations in Hindi or Bengali when needed",
            "6 months, ₹999/month; needs a phone or laptop and a quiet hour",
          ],
        ],
      },
      {
        t: "cta",
        text: "Daytime Spoken English. Approx. 6 learners. ₹999/mo, inclusive of taxes.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
  "/online-vs-offline-spoken-english-classes": {
    path: "/online-vs-offline-spoken-english-classes",
    eyebrow: "Format",
    breadcrumb: "Online vs offline",
    h1: "Online vs offline spoken English classes",
    h1Accent: "Count the minutes, not the whiteboard",
    standfirst:
      "A 25–40 student room plus a commute is a different product from a live batch of around 6 at ₹999/month inclusive of taxes. We sell the online row and say so.",
    shortAnswer:
      "Online small-batch usually wins on speaking minutes and commute. Offline still wins on sitting in the same room as peers. Ask the cap before you ask the fee. Kids need a children’s platform either way.",
    image: IMG.studentLaptop,
    alt: "Learner comparing an online English class with a local coaching centre",
    waMessage: "Hi, I want a free consultation to choose online or offline spoken English.",
    ctaTitle: "Count minutes in their room. Diagnose yours with us.",
    ctaBody:
      "Our consultation is counselling, not a class. If a neighbourhood room fits you better, we will say so.",
    faqTitle: "Online vs offline — questions",
    body: [
      {
        t: "p",
        text: "The honest comparison is not “technology vs tradition”. It is **minutes you spoke** and **hours you spent getting there**. City pages for [Kolkata](/spoken-english-classes-kolkata), [Mumbai](/spoken-english-classes-mumbai), [Delhi](/spoken-english-classes-delhi) and [Bengaluru](/spoken-english-classes-bengaluru) do that commute math in local terms.",
      },
      { t: "h2", text: "Side by side" },
      {
        t: "table",
        head: ["", "Typical city classroom", "Learn With Smile live online"],
        rows: [
          ["Headcount", "25–40", "Approximately 6"],
          ["Your mic in 60 min", "1–2 min, sometimes weekly", "8–10 min, every class"],
          ["Commute", "45–120 min each way", "None"],
          [
            "Fee band",
            "₹1,500–₹6,000 / 3 months, GST extra often",
            "₹999/mo Spoken, inclusive of taxes",
          ],
          ["Peer energy", "Same room", "Debates, prompts, WhatsApp group"],
          ["Campus", "Walk-in centre", "Online — join from home"],
        ],
      },
      { t: "h2", text: "When offline is still the right buy" },
      {
        t: "ul",
        items: [
          "You will not open a laptop twice a week unless someone is waiting in a building.",
          "You want neighbours in the same batch more than you want minutes.",
          "A parent is paying for a place they can visit. Our classes are online.",
        ],
      },
      { t: "h2", text: "When online is the cheaper hour" },
      {
        t: "p",
        text: "If your constraint is speaking time, a live batch of around 6 beats a crowded room even if the crowded room is cheaper on the brochure. Cost per speaking minute is in the [fees guide](/english-class-fees-india).",
      },
      { t: "h2", text: "The commute arithmetic" },
      {
        t: "example",
        label: "Two classes a week for three months",
        lines: [
          "Offline: a 60-minute class plus 45 minutes each way = 2.5 hours per class.",
          "26 classes × 2.5 hours = 65 hours, of which 26 are class.",
          "Online: 26 classes × 1 hour = 26 hours.",
          "Difference: about 39 hours — roughly a full working week.",
        ],
      },
      { t: "h2", text: "Questions to ask any centre, online or offline" },
      {
        t: "ol",
        items: [
          "What is the maximum batch size — in writing?",
          "How many minutes will I speak in a 60-minute class?",
          "Is GST included in the fee?",
          "Who is the teacher, and will it be the same person every class?",
          "What happens if I miss a class?",
          "Can I talk to someone or sit in before I pay?",
        ],
      },
      {
        t: "p",
        text: "Any provider — including us — should answer all six before you pay. Vague answers to the first two are the most common warning sign.",
      },
      { t: "h2", text: "Formats people combine" },
      {
        t: "ul",
        items: [
          "**Offline centre + free online practice** — the building for discipline, AI or exchange apps for extra speaking minutes.",
          "**Online class + a local club** — the class for correction, a Toastmasters or college club for speaking in front of people.",
          "**1:1 tutor for a deadline** — two or three weeks of 1:1 before a specific interview can be worth it; it gets expensive as a six-month habit.",
        ],
      },
      {
        t: "cta",
        text: "Count minutes in our room. Approx. 6 learners. From ₹999/mo, inclusive of taxes.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
  "/free-english-speaking-practice-vs-paid-class": {
    path: "/free-english-speaking-practice-vs-paid-class",
    eyebrow: "Free vs paid",
    breadcrumb: "Free practice vs a paid class",
    h1: "Free English practice vs a paid live class",
    h1Accent: "Pay only for what free cannot do",
    standfirst:
      "Podcasts, YouTube and a language-exchange partner are free and they work if you show up. A paid live class buys a syllabus, a correction and a seat. From ₹999/month inclusive of taxes.",
    shortAnswer:
      "If you already practise daily with a human and know what to study next, spend nothing. Pay for a live batch of around 6 when you skip days, cannot name the next skill, or nobody corrects the same error twice.",
    image: IMG.blogDesk,
    alt: "Learner deciding between free English practice and a paid live class",
    waMessage: "Hi, I want a free consultation to know if I need a paid spoken English class.",
    ctaTitle: "Unsure? Ask us to talk you out of it",
    ctaBody: "We will tell you if free is enough. That is a better first message than a brochure.",
    faqTitle: "Free vs paid — questions",
    body: [
      {
        t: "p",
        text: "We sell live classes. This page still starts with the free stack, because it is the honest one. If you can run it for 90 days, you do not need us yet.",
      },
      { t: "h2", text: "The free stack" },
      {
        t: "ol",
        items: [
          "One 10-minute voice note a day, listened back once.",
          "One human conversation a day — family, colleague, exchange partner.",
          "One page of sentences you will actually say this week, said with the paper face down.",
          "The [five speaking habits](/blog/5-speaking-habits-that-killed-my-hesitation) we give beginners.",
        ],
      },
      { t: "h2", text: "What ₹999/month is buying" },
      {
        t: "ul",
        items: [
          "**A map.** 6-month Spoken English, 3-month Interactive or Workplace — you are not guessing.",
          "**A named teacher** who heard last Tuesday’s error.",
          "**A seat** in a batch of around 6, so you cannot hide. Inclusive of taxes. No material fee.",
        ],
      },
      {
        t: "p",
        text: "1:1 apps buy minutes without a map. Large classrooms buy presence without minutes. Comparison: [institutes, 2026](/english-institute-comparison-india).",
      },
      { t: "h2", text: "A fair test" },
      {
        t: "p",
        text: "Run the free stack for two weeks. If you skipped more than four days, or you cannot name what improved, a live seat is probably cheaper than another year of podcasts. Get a free consultation and count your own minutes before you pay.",
      },
      { t: "h2", text: "Free and low-cost options, honestly rated" },
      {
        t: "table",
        head: ["Option", "What it does well", "What it can't do"],
        rows: [
          [
            "YouTube and podcasts",
            "Listening, pronunciation models, material to shadow",
            "You never speak back",
          ],
          [
            "Language-exchange apps (HelloTalk, Tandem)",
            "Real people, text and voice, free tiers",
            "Partners come and go; nobody tracks your errors",
          ],
          [
            "AI voice chat (ChatGPT, Gemini voice modes)",
            "Unlimited, low-pressure speaking practice",
            "Corrects you only if you ask; nobody notices when you skip a week",
          ],
          [
            "Duolingo and similar apps",
            "A daily habit, vocabulary, basic sentences",
            "Very little free speaking — tapping is not talking",
          ],
          [
            "Toastmasters (low cost, not free)",
            "Speaking in front of people with peer feedback",
            "Dues in US dollars every six months plus club dues; quality varies by club",
          ],
        ],
      },
      { t: "h2", text: "A 4-week free plan you can test yourself with" },
      {
        t: "table",
        head: ["Week", "Daily, 15 minutes", "Weekly check"],
        rows: [
          [
            "1",
            "A 60-second voice note on your day; five sentences you will reuse",
            "Play Monday's and Sunday's notes back to back",
          ],
          [
            "2",
            "Shadow one minute of a clear video; one AI or exchange-partner chat",
            "Can you talk for 90 seconds without stopping?",
          ],
          [
            "3",
            "Week 1's topics again, with no notes",
            "Count the pauses longer than three seconds",
          ],
          [
            "4",
            "One real conversation a day — shop, office, phone",
            "Fewer pauses than week 1? Free is working. Stay free.",
          ],
        ],
      },
      {
        t: "p",
        text: "If week 4 sounds like week 1, the missing piece is usually **correction and accountability**, not more content. That is the part worth paying for — and the only part we would ask you to pay for.",
      },
      {
        t: "cta",
        text: "If free is enough, we will say so. If it is not, the consultation is still free.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
  "/ielts-coaching-fees-india": {
    path: "/ielts-coaching-fees-india",
    eyebrow: "IELTS fees",
    breadcrumb: "IELTS coaching fees in India",
    h1: "IELTS coaching fees in India, 2026",
    h1Accent: "Market fees, not our product",
    standfirst:
      "Market: ₹8,000–₹35,000 for a full course, often 20–40 in a room, plus the exam fee — ₹19,000 from April 2026, paid to IDP. Learn With Smile does not sell IELTS as a course. If you cannot hold a conversation yet, start with Spoken English.",
    shortAnswer:
      "Budget ₹8,000–₹35,000 for coaching plus the exam fee — ₹19,000 for Academic or General Training since 1 April 2026, paid to IDP. Learn With Smile does not run an IELTS room. If you cannot hold a conversation yet, do not buy IELTS first — start with Spoken English at ₹999/month.",
    image: IMG.ielts,
    alt: "IELTS candidate preparing Writing Task 2 with a teacher",
    waMessage: "Hi, I want a free consultation for IELTS or Basic Spoken English.",
    ctaTitle: "Check if Spoken English is the right buy first",
    ctaBody: "If speaking is the gap, we will say so before you pay an exam shop for mocks.",
    faqTitle: "IELTS fees — questions",
    body: [
      {
        t: "p",
        text: "Two invoices get mixed up. **Coaching** is what an institute charges. **The exam** is what IDP charges — ₹19,000 for IELTS Academic or General Training in India since 1 April 2026, ₹19,250 for IELTS for UKVI. IDP has been the only IELTS provider in India since 2021. No honest coaching price includes it; check the current fee on IDP's site before you book.",
      },
      { t: "h2", text: "What coaching costs in India in 2026" },
      {
        t: "table",
        caption:
          "Public bands. Confirm on the provider's site. Learn With Smile does not sell an IELTS row.",
        head: ["Format", "Typical fee", "Room"],
        rows: [
          ["Large institute classroom", "₹15,000–₹35,000 package", "20–40 learners"],
          ["British Council-style module", "Often ₹8,800–₹16,000", "Brand syllabus / certificate"],
          ["1:1 online tutor", "₹500–₹2,000 / session", "Minutes, variable marking"],
          [
            "Learn With Smile",
            "Does not sell IELTS — Spoken English from ₹999/month",
            "~6 learners, live speaking",
          ],
        ],
      },
      {
        t: "p",
        text: "Spoken English, Interactive, Workplace and Interview Preparation fees sit on the [India fees guide](/english-class-fees-india). Do not buy IELTS coaching to “get a better job in India” if no form asked for a band.",
      },
      { t: "h2", text: "What is not included anywhere honest" },
      {
        t: "ul",
        items: [
          "The exam fee — ₹19,000 since April 2026, paid to IDP. Check before booking.",
          "A guaranteed band. No ethical coach can promise Band 7.",
          "A school certificate from Learn With Smile. We do not issue one, and we do not sell IELTS.",
          "Speaking ability. If you cannot hold a conversation, cue-card drills will not build the sentence.",
        ],
      },
      { t: "h2", text: "Start with Spoken English if this is you" },
      {
        t: "p",
        text: "Band 5.5 because you cannot talk is a speaking problem. Cue-card drills will not build the sentence. Take [beginner Spoken English](/spoken-english-for-beginners-india) first. The picker: [Spoken or IELTS](/blog/spoken-english-or-ielts). Free structure: [Band 7 four-paragraph template](/blog/band-7-writing-4-paragraph-template).",
      },
      { t: "h2", text: "Total cost, worked out" },
      {
        t: "table",
        caption:
          "Exam fee for IELTS Academic or General Training in India from 1 April 2026. Check IDP's site before booking.",
        head: ["Route", "Coaching", "Exam", "Total"],
        rows: [
          ["Self-study with official free practice tests", "₹0", "₹19,000", "₹19,000"],
          ["Online 1:1 tutor, 10 sessions at about ₹1,000", "₹10,000", "₹19,000", "About ₹29,000"],
          ["Large institute package", "₹15,000–₹35,000", "₹19,000", "₹34,000–₹54,000"],
          ["Any route + one retake", "—", "+₹19,000", "Often the biggest hidden cost"],
        ],
      },
      { t: "h2", text: "Free official preparation" },
      {
        t: "ul",
        items: [
          "The IELTS, IDP and British Council websites all publish free practice tests and sample answers — start there before paying anyone.",
          "Take one full practice test under timed conditions. The weakest of the four skills tells you what, if anything, to pay for.",
          "Writing Task 2 rewards a fixed structure: [the four-paragraph template](/blog/band-7-writing-4-paragraph-template).",
        ],
      },
      {
        t: "p",
        text: "If the weak skill is **Speaking** because you cannot yet hold a conversation, that is not an IELTS problem. It is a spoken English problem, and it is cheaper to fix first.",
      },
      {
        t: "cta",
        text: "If speaking is the gap, start here. ₹999/mo, approx. 6 learners. Inclusive of taxes.",
        course: "/course-spoken-english",
        label: "See Spoken English",
      },
    ],
  },
  "/english-for-it-professionals-india": {
    path: "/english-for-it-professionals-india",
    eyebrow: "IT & GCC",
    breadcrumb: "English for IT professionals",
    h1: "Spoken English for IT professionals in India",
    h1Accent: "Standups, tickets, client calls",
    standfirst:
      "You can write the ticket. The standup still goes silent. Business English ₹1,999/month, or Spoken ₹999/month if daily English is the gap. Approximately 6 learners. Inclusive of taxes. IST live.",
    shortAnswer:
      "If you cannot chat yet, take Spoken English. If chat is fine and standups, tickets or clients freeze, take Business English — 3 months, ₹1,999/month, around 6 learners. No promotion guarantee.",
    image: IMG.businessEnglish,
    alt: "IT professional speaking in an English standup on a video call",
    waMessage:
      "Hi, I work in IT, I freeze on calls, and I want a free consultation for spoken English.",
    ctaTitle: "Practise the standup live",
    ctaBody: "Bring a real ticket. We will not rewrite your career. We will put you on the mic.",
    faqTitle: "IT English — questions",
    body: [
      {
        t: "p",
        text: "Indian IT English is not a native accent. It is **yesterday / today / stuck** in 60 seconds, a ticket that names the owner, and a client call that repeats the number twice. Ananya’s standup story lives on the [presentations guide](/english-for-presentations-india). Neha’s client call lives on [client-call English](/english-for-client-calls-india).",
      },
      { t: "h2", text: "Which room" },
      {
        t: "table",
        head: ["If this is true", "Take", "Fee"],
        rows: [
          ["You cannot hold a simple conversation", "Spoken English, 6 months", "₹999/month"],
          [
            "You know the words and freeze on the standup",
            "Interactive Speaking, 3 months",
            "₹1,199/month",
          ],
          [
            "Chat is fine; meetings, tickets, clients are not",
            "Business English, 3 months",
            "₹1,999/month",
          ],
        ],
      },
      { t: "h2", text: "What Business English drills for IT" },
      {
        t: "ul",
        items: [
          "Standup: yesterday, today, stuck — 60–90 seconds, no 18-slide deck.",
          "Ticket English: action, owner, deadline. Not “please do the needful”.",
          "Client call: names, numbers twice, next step, a time if you do not have the answer.",
          "Email: the five swaps in [professional phrases](/blog/5-email-phrases-that-sound-more-professional).",
        ],
      },
      { t: "h2", text: "Shifts, on-call, IST" },
      {
        t: "p",
        text: "Afternoon, evening and night live batches. Recording is revision when a release overruns. A same-week reschedule only if a seat exists. [Working professionals](/english-for-working-professionals-india).",
      },
      {
        t: "p",
        text: "We do not guarantee a promotion, an onsite, or a CTC jump. Clearer communication removes one barrier. Performance reviews still weigh the rest.",
      },
      { t: "h2", text: "Options for IT staff, compared" },
      {
        t: "table",
        caption: "Fair summary of what each format is built for. Many people combine two.",
        head: ["Option", "Good for", "Where it falls short"],
        rows: [
          [
            "Company L&D or soft-skills workshop",
            "Free to you; matches company norms",
            "Usually one-off or large groups — little repeated speaking with feedback",
          ],
          [
            "Self-paced video courses (LinkedIn Learning, Coursera)",
            "Frameworks for emails, meetings and presenting; any time",
            "Nobody hears you speak — you can finish the course and still freeze",
          ],
          [
            "Toastmasters club",
            "Regular prepared speeches with peer evaluation; many Indian cities and companies host clubs",
            "Peer feedback, not a teacher; little focus on call language or grammar",
          ],
          [
            "1:1 tutor apps (Cambly, italki, Preply, EngVarta)",
            "Flexible timing, plenty of talk time",
            "Quality depends on the tutor you pick; usually no syllabus that tracks your errors",
          ],
          [
            "AI voice practice (ChatGPT, Gemini voice modes)",
            "Rehearsing tomorrow's standup at midnight, privately",
            "No accountability; it rarely stops you on a repeated error unless you ask",
          ],
          [
            "Learn With Smile Business English",
            "Live batch of about 6, same teacher, work scenarios every class",
            "Fixed IST slots; group, not 1:1; ₹1,999/month for 3 months",
          ],
        ],
      },
      { t: "h2", text: "A standup, before and after" },
      {
        t: "example",
        label: "Before — what goes silent",
        lines: [
          "“Actually yesterday I was working on that ticket only, the API one, and there were some issues, so I was checking…”",
          "(pause)",
          "“…so today I will try to complete.”",
        ],
      },
      {
        t: "example",
        label: "After — 60 seconds, three beats",
        lines: [
          "Yesterday: I fixed the login timeout on the payments API. It's in review.",
          "Today: I'll finish the retry logic and update the ticket by 3pm IST.",
          "Blocker: I need staging access from DevOps — Arjun, can you check after this call?",
        ],
      },
      {
        t: "p",
        text: "Same English level. The second version names the outcome, the time and the owner. That shape is what class drills until it comes out without thinking.",
      },
      { t: "h2", text: "Phrases for the moments that freeze IT calls" },
      {
        t: "table",
        head: ["Moment", "Say"],
        rows: [
          [
            "You didn't catch it",
            "“Sorry, could you repeat the last part? I want to get the number right.”",
          ],
          ["You don't know yet", "“I don't have that yet — I'll confirm by 4pm IST.”"],
          [
            "Pushing back on scope",
            "“We can do that, but it moves the release to Thursday. Which matters more?”",
          ],
          [
            "Closing the call",
            "“To recap: I'll fix the timeout, you'll send the logs, we check again on Friday.”",
          ],
        ],
      },
      {
        t: "cta",
        text: "IT English is a standup you can finish. Approx. 6 learners. From ₹999/mo.",
        course: "/free-consultation",
        label: "Get Free Consultation",
      },
    ],
  },
};
