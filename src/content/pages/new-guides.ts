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
    waMessage: "Hi, I am a beginner and I would like a free consultation for Spoken English to understand my requirements. Please share a slot.",
    ctaTitle: "Get a free consultation first",
    ctaBody: "We will tell you if you are a beginner — including when Interactive would be the wrong buy. Counselling, not a class.",
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
          ["1:1 app (EngVarta, Cambly)", "Minutes, no 6-month map. Nothing to practise if you cannot form a sentence."],
          ["25–40 student classroom", "1–2 minutes a week. Silence looks like attending."],
          ["Recorded video / AI chat", "You talk to a screen that does not remember last Tuesday's v/w."],
          ["Learn With Smile, ~6 learners", "8–10 minutes an hour, a named teacher, ₹999/mo inclusive of taxes."],
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
      {
        t: "cta",
        text: "Beginners sit in the Spoken English room. Approx. 6 learners. ₹999/mo, inclusive of taxes.",
        course: "/book-free-demo",
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
    waMessage: "Hi, I want to speak English more fluently. Please help me choose the right course.",
    ctaTitle: "Practise fluency in a live room",
    ctaBody: "If you already have a partner and a map, stay free. If you need a teacher who remembers your errors, get a free consultation.",
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
          "Have the words, freeze anyway → [Interactive](/interactive-english-class-hesitation), 3 months, ₹1,499/month.",
          "Meetings and calls → [Workplace English](/workplace-english-course-online-india), 3 months, ₹1,999/month.",
        ],
      },
      {
        t: "cta",
        text: "Fluency is a room you speak in, not a poster. Approx. 6 learners. From ₹999/mo.",
        course: "/book-free-demo",
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
      "Campus intro, HR screen, tell-me-about-yourself. Spoken English from ₹999/month if you cannot chat yet. Interactive Speaking ₹1,499/month if you can chat but freeze in HR. Inclusive of taxes. No placement promise.",
    shortAnswer:
      "If you cannot hold a two-minute conversation, take Spoken English first. If you can chat and still bomb HR, take Interactive Speaking — interview English is practised there. IELTS is for forms, not most Indian campus drives, and we do not sell it.",
    image: IMG.interview,
    alt: "Fresher practising a job interview in English on a video call",
    waMessage: "Hi, I am a fresher and I need help with interview English. Please share the right course.",
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
          ["You cannot finish a sentence on a phone call", "Basic Spoken English, 6 months, ~6 learners", "₹999/month"],
          ["You can chat, HR screens still collapse", "Interview Preparation, 2 months", "₹1,999/month"],
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
      {
        t: "cta",
        text: "Freshers sit in Spoken or Interactive — one room, not both. Message us.",
        course: "/book-free-demo",
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
      "Daytime and weekend IST batches. 6 months, ₹999/month inclusive of taxes, approximately 6 learners. Adults 15+. Not a children’s class. Not a certificate mill.",
    shortAnswer:
      "Homemakers join the same Spoken English room as everyone else — morning and weekend IST, around 6 learners, ₹999/month inclusive of taxes. School medium and a career gap are not a wall.",
    image: IMG.girlReading,
    alt: "Homemaker practising spoken English at home on a laptop",
    waMessage: "Hi, I am a homemaker and I would like a free consultation for Spoken English in a daytime batch.",
    ctaTitle: "Join a daytime or weekend batch",
    ctaBody: "Tell us your window. We reply 09:00–12:00 IST. The consultation is free.",
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
        text: "If work meetings and client calls are the next job, that is [Workplace English](/workplace-english-course-online-india) after this room — not instead of it.",
      },
      { t: "h2", text: "Timings that actually fit" },
      {
        t: "p",
        text: "Morning batches before the house wakes, and weekend batches. Every class is recorded, so a missed hour is revision, not a lost week. The class is live — the recording is not the class. [Working professionals](/english-for-working-professionals-india) use the evening slot; homemakers usually take morning.",
      },
      { t: "h2", text: "School medium, career gap, age" },
      {
        t: "p",
        text: "Hindi-medium, Bengali-medium, a decade at home: none of these is a wall. They are the starting point. We explain in Hindi or Bengali when a concept stalls, then go back to English. Adults 15+. Under-14s need a children’s platform — we will say so.",
      },
      {
        t: "cta",
        text: "Daytime Spoken English. Approx. 6 learners. ₹999/mo, inclusive of taxes.",
        course: "/book-free-demo",
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
    waMessage: "Hi, I am comparing online and offline spoken English classes. Please help me decide.",
    ctaTitle: "Count minutes in their room. Diagnose yours with us.",
    ctaBody: "Our consultation is counselling, not a class. If a neighbourhood room fits you better, we will say so.",
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
          ["Fee band", "₹1,500–₹6,000 / 3 months, GST extra often", "₹999/mo Spoken, inclusive of taxes"],
          ["Peer energy", "Same room", "Debates, prompts, WhatsApp group"],
          ["Campus", "Walk-in centre", "Kolkata office by appointment, not a campus"],
        ],
      },
      { t: "h2", text: "When offline is still the right buy" },
      {
        t: "ul",
        items: [
          "You will not open a laptop twice a week unless someone is waiting in a building.",
          "You want neighbours in the same batch more than you want minutes.",
          "A parent is paying for a place they can visit. Our Kolkata address is an office, not a teaching floor.",
        ],
      },
      { t: "h2", text: "When online is the cheaper hour" },
      {
        t: "p",
        text: "If your constraint is speaking time, a live batch of around 6 beats a crowded room even if the crowded room is cheaper on the brochure. Cost per speaking minute is in the [fees guide](/english-class-fees-india).",
      },
      {
        t: "cta",
        text: "Count minutes in our room. Approx. 6 learners. From ₹999/mo, inclusive of taxes.",
        course: "/book-free-demo",
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
    waMessage: "Hi, I am not sure if I need a paid class or can practise free. Please advise.",
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
          "**A seat** in a batch of around 6, so you cannot hide. Inclusive of taxes, no registration fee.",
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
      {
        t: "cta",
        text: "If free is enough, we will say so. If it is not, the consultation is still free.",
        course: "/book-free-demo",
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
      "Market: ₹8,000–₹35,000 for a full course, often 20–40 in a room, plus the official exam fee to IDP or British Council. Learn With Smile does not sell IELTS as a course. If you cannot hold a conversation yet, start with Spoken English.",
    shortAnswer:
      "Budget ₹8,000–₹35,000 for coaching plus the official exam fee to IDP or British Council. Learn With Smile does not run an IELTS room. If you cannot hold a conversation yet, do not buy IELTS first — start with Spoken English at ₹999/month.",
    image: IMG.ielts,
    alt: "IELTS candidate preparing Writing Task 2 with a teacher",
    waMessage: "Hi, I want to understand IELTS coaching fees and whether I should start with Spoken English instead.",
    ctaTitle: "Check if Spoken English is the right buy first",
    ctaBody: "If speaking is the gap, we will say so before you pay an exam shop for mocks.",
    faqTitle: "IELTS fees — questions",
    body: [
      {
        t: "p",
        text: "Two invoices get mixed up. **Coaching** is what we charge. **The exam** is what IDP or British Council charge, and it is not included anywhere honest. Confirm the current exam fee on their sites before you sit.",
      },
      { t: "h2", text: "What coaching costs in India in 2026" },
      {
        t: "table",
        caption: "Public bands. Confirm on the provider's site. Learn With Smile does not sell an IELTS row.",
        head: ["Format", "Typical fee", "Room"],
        rows: [
          ["Large institute classroom", "₹15,000–₹35,000 package", "20–40 learners"],
          ["British Council-style module", "Often ₹8,800–₹16,000", "Brand syllabus / certificate"],
          ["1:1 online tutor", "₹500–₹2,000 / session", "Minutes, variable marking"],
          ["Learn With Smile", "Does not sell IELTS — Spoken English from ₹999/month", "~6 learners, live speaking"],
        ],
      },
      {
        t: "p",
        text: "Spoken English, Interactive, Workplace and Career Counselling fees sit on the [India fees guide](/english-class-fees-india). Do not buy IELTS coaching to “get a better job in India” if no form asked for a band.",
      },
      { t: "h2", text: "What is not included anywhere honest" },
      {
        t: "ul",
        items: [
          "The official exam fee, paid to IDP or British Council — confirm on their sites.",
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
      "You can write the ticket. The standup still goes silent. Workplace English ₹1,999/month, or Spoken ₹999/month if daily English is the gap. Approximately 6 learners. Inclusive of taxes. IST live.",
    shortAnswer:
      "If you cannot chat yet, take Spoken English. If chat is fine and standups, tickets or clients freeze, take Workplace English — 3 months, ₹1,999/month, around 6 learners. No promotion guarantee.",
    image: IMG.businessEnglish,
    alt: "IT professional speaking in an English standup on a video call",
    waMessage: "Hi, I work in IT and I freeze on standups or client calls. Please help me choose a course.",
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
          ["You know the words and freeze on the standup", "Interactive Speaking, 3 months", "₹1,499/month"],
          ["Chat is fine; meetings, tickets, clients are not", "Workplace English, 3 months", "₹1,999/month"],
        ],
      },
      { t: "h2", text: "What Workplace English drills for IT" },
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
        text: "Morning, evening and weekend live batches. Recording is revision when a release overruns. A same-week reschedule only if a seat exists. [Working professionals](/english-for-working-professionals-india).",
      },
      {
        t: "p",
        text: "We do not guarantee a promotion, an onsite, or a CTC jump. Clearer communication removes one barrier. Performance reviews still weigh the rest.",
      },
      {
        t: "cta",
        text: "IT English is a standup you can finish. Approx. 6 learners. From ₹999/mo.",
        course: "/book-free-demo",
        label: "Get Free Consultation",
      },
    ],
  },
};
