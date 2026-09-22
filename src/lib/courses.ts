import type { CourseData } from "@/components/CoursePage";
import { IMG } from "@/lib/images";

export const COURSES: Record<string, CourseData> = {
  "spoken-english": {
    slug: "spoken-english",
    title: "Basic Spoken English",
    tagline:
      "6 months, ₹999/month, inclusive of taxes, approx. 6 learners. Speak from zero — 2,000+ words, live correction, interview English (HR, tell-me-about-yourself), up to 2 classes/week.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "mic",
    heroImage: IMG.spokenEnglish,
    midImage: IMG.womanLaptop,
    footerImage: IMG.studentLaptop2,
    duration: "6 months · 1 hr 30 min · up to 2 classes/week",
    format: "Live batch · approximately 6 learners",
    price: "₹999/month",
    liveNote:
      "✓ 100% online live · ✓ Interview English in this room · ✓ Flexible morning · evening · weekend slots · ✓ Pan-India · Based in Kolkata",
    outcomes: [
      "Introduce yourself fluently in any social or work setting",
      "Handle daily conversations — shops, travel, phone calls",
      "Build a 2,000+ word everyday vocabulary",
      "Speak with correct grammar, tense and pronunciation",
      "Answer 'tell me about yourself' in 90 seconds",
      "Practise HR-style questions live in the batch",
    ],
    modules: [
      {
        title: "Foundations & Phonetics",
        items: [
          "English sounds & pronunciation drill",
          "Stress, rhythm, intonation",
          "Common Indian mistakes — fixed live",
          "Daily 10-min speaking warm-ups",
        ],
      },
      {
        title: "Grammar Without Pain",
        items: [
          "Tenses through real conversations",
          "Articles, prepositions, modals",
          "Sentence patterns that work everywhere",
          "Live error-correction games",
        ],
      },
      {
        title: "Vocabulary Builder",
        items: [
          "1,000+ everyday words & phrases",
          "Flashcard game sessions",
          "Phrasal verbs & collocations",
          "Synonyms for word-power",
        ],
      },
      {
        title: "Real-Life Conversations",
        items: [
          "Shopping, banking, travel role-plays",
          "Phone & video calls",
          "Asking for & giving directions",
          "Small-talk that doesn't feel small",
        ],
      },
      {
        title: "Group Discussions & Debates",
        items: [
          "Speak your opinion in 60 seconds",
          "Active listening exercises",
          "Disagreeing politely in English",
          "Live polls & class debates",
        ],
      },
      {
        title: "Confidence & Presentation",
        items: [
          "Self-introduction mastery",
          "Storytelling techniques",
          "Eye contact, body language, voice",
          "Final live presentation with feedback",
        ],
      },
      {
        title: "Interview English",
        items: [
          "The 90-second 'tell me about yourself'",
          "HR questions: why you, strengths, weaknesses",
          "STAR — situation, task, action, result",
          "Notice period and salary, said calmly",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover job interviews?",
        a: "Yes. In this Spoken English room you practise the 90-second introduction, HR-style questions and STAR answers live in the batch of about 6. If you already speak and the interview is the only freeze, take Interview Preparation — 2 months, ₹1,999/month.",
      },
      {
        q: "I can barely speak. Will this work for me?",
        a: "Yes — this is exactly who the course is for. We start from absolute basics and build up step by step in a judgment-free batch.",
      },
      {
        q: "What's the batch size?",
        a: "Approximately 6 learners join each batch, so everyone gets real speaking time.",
      },
      {
        q: "How do I start?",
        a: "Chat on WhatsApp. We’ll help you pick a course.",
      },
      {
        q: "What if I miss a class?",
        a: "Every class is recorded and shared. A reschedule can be requested only within the same week and depends on teacher and slot availability.",
      },
    ],
    testimonials: [
      {
        quote:
          "I knew the argument in Telugu. Bengaluru clients wanted it in English. Three months later I brief in both.",
        name: "Kavya Reddy",
        detail: "Spoken English · Advocate, Hyderabad",
        waMessage: "Hi, I saw Kavya's story. Spoken English?",
      },
      {
        quote: "The gamified flashcard sessions are addictive. I look forward to every class now.",
        name: "Rakesh Verma",
        detail: "Spoken English · Shopkeeper, Patna",
        waMessage: "Hi, Spoken English details please.",
      },
      {
        quote: "Small batch + real corrections every class. That's what made the difference.",
        name: "Meera Iyer",
        detail: "Spoken English · Homemaker, Chennai",
        waMessage: "Hi, I want Spoken English.",
      },
    ],
    metaDescription:
      "Live online Spoken English classes for Indian learners. 6 months · up to 2 classes/week · approximately 6 learners per batch. ₹999/month, inclusive of taxes. Includes interview English — HR, tell-me-about-yourself, STAR.",
  },
  "business-english": {
    slug: "business-english",
    title: "Workplace English",
    tagline:
      "Meetings, client calls, emails and presentations — 3 months, approx. 6 learners, up to 2 live classes/week, ₹1,999/month, inclusive of taxes. For professionals, freshers and job seekers.",
    category: "Work & Career",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.businessEnglish,
    midImage: IMG.womanOffice,
    footerImage: IMG.presentation,
    duration: "3 months · 1 hr 30 min · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · approximately 6 learners",
    price: "₹1,999/month",
    outcomes: [
      "Give clear status updates without memorising a script",
      "Speak more confidently in team and client meetings",
      "Write concise emails and workplace messages",
      "Handle calls, questions and misunderstandings calmly",
      "Present an idea with a clear beginning, middle and action",
      "Agree, disagree and ask for clarification professionally",
    ],
    modules: [
      {
        title: "Workplace Messages & Emails",
        items: [
          "Clear subject lines and action requests",
          "Formal, neutral and friendly tone",
          "Updates, follow-ups and escalation messages",
          "Common Indian-English phrases: when to keep or replace them",
        ],
      },
      {
        title: "Meetings, Updates & Client Calls",
        items: [
          "Joining, opening and closing a discussion",
          "Giving a short status update",
          "Clarifying requirements and checking understanding",
          "Handling an unexpected question without freezing",
        ],
      },
      {
        title: "Presentations & Explaining Work",
        items: [
          "Explaining a process in simple English",
          "Structuring a recommendation or proposal",
          "Voice, pace and signposting",
          "Responding to Q&A and saying when you need to check",
        ],
      },
      {
        title: "Professional Confidence",
        items: [
          "Polite disagreement with colleagues and seniors",
          "Saying no or requesting more time",
          "Giving and receiving practical feedback",
          "Live workplace role-plays with class feedback",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "Quarter-close used to mean I typed in the chat while someone else spoke. Now I take the Mumbai call myself — names, numbers, next step.",
        name: "Neha Patel",
        detail: "Workplace English · Tax Analyst, Ahmedabad",
        waMessage: "Hi, I saw Neha's story. Workplace English?",
      },
      {
        quote:
          "Partners asked me to walk the working papers in English. A batch of around six meant I rehearsed every week. I present now.",
        name: "Rohan Deshpande",
        detail: "Workplace English · Chartered Accountant, Mumbai",
        waMessage: "Hi, I saw Rohan's story. Workplace English?",
      },
      {
        quote:
          "Back office to BI Analyst. Salary moved. The English I use is client reviews and Monday standups — this room is built for that.",
        name: "Aditya Nair",
        detail: "Workplace English · BI Analyst, Pune",
        waMessage: "Hi, I saw Aditya's story. Workplace English?",
      },
    ],
    metaDescription:
      "Workplace English classes for professionals and job seekers in India. Meetings, calls, emails and presentations. Live batch of approximately 6 learners, ₹1,999/month, inclusive of taxes.",
  },
  "interactive-speaking": {
    slug: "interactive-speaking",
    title: "Interactive Speaking Class",
    tagline:
      "3 months of live speaking — games, debates, role-plays, interview rounds. Approx. 6 learners, up to 2 classes/week, ₹1,499/month, inclusive of taxes. Built for fluency, not grammar lectures.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.interactiveSpeaking,
    midImage: IMG.girlReading,
    footerImage: IMG.groupClass,
    duration: "3 months · 1 hr 30 min · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · approximately 6 learners",
    price: "₹1,499/month",
    liveNote:
      "✓ 100% online live · ✓ Interview rounds in this room · ✓ Flexible morning · evening · weekend slots · ✓ Pan-India · Based in Kolkata",
    outcomes: [
      "Speak for 2 minutes on any topic",
      "Lead group conversations",
      "Tell stories that hold attention",
      "Answer 'tell me about yourself' without freezing",
      "Practise HR and STAR answers out loud",
      "Think in English, not translate",
    ],
    modules: [
      {
        title: "Warm-Ups & Word Games",
        items: [
          "Tongue twisters",
          "1-min just-a-minute",
          "Word association",
          "Picture description",
        ],
      },
      {
        title: "Story Telling",
        items: [
          "The 4-part story formula",
          "Personal anecdotes",
          "Adding humour",
          "Voice modulation",
        ],
      },
      {
        title: "Debates & Discussions",
        items: [
          "For & against structure",
          "Active listening",
          "Polite disagreement",
          "Closing arguments",
        ],
      },
      {
        title: "Role-Plays",
        items: ["Travel & hotel", "Customer service", "Doctor & patient", "Job networking events"],
      },
      {
        title: "Interview rounds",
        items: [
          "90-second pitch, live, on the mic",
          "HR: why this company, why you",
          "STAR stories for conflict, failure, leadership",
          "Read the interviewer — then answer",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "SQL was easy. The Monday standup was not. I speak the dashboard now — no translating in my head.",
        name: "Ananya Iyer",
        detail: "Interactive Speaking · Data Analyst, Bengaluru",
        waMessage: "Hi, I saw Ananya's story. Interactive Speaking?",
      },
    ],
    faqs: [
      {
        q: "Do you cover job interviews?",
        a: "Yes. Interactive Speaking includes live interview rounds: the 90-second pitch, HR questions and STAR answers, in a batch of about 6. If the interview is the only gap and you already talk, take Interview Preparation — 2 months, ₹1,999/month.",
      },
    ],
    metaDescription:
      "Interactive English speaking classes online. Games, debates, stories and interview rounds. 3 months · approximately 6 learners · ₹1,499/month, inclusive of taxes.",
  },
  "career-counselling": {
    slug: "career-counselling",
    title: "Career Counselling",
    tagline:
      "1:1 quality guidance — 3 × 60-min sessions for ₹1,999 total, inclusive of taxes. Strengths map, 3 career paths, 6-month action plan, resume and LinkedIn review.",
    category: "Career Guidance",
    categoryColor: "brand",
    icon: "compass",
    heroImage: IMG.careerCounselling,
    midImage: IMG.womanOffice,
    footerImage: IMG.studentLaptop,
    duration: "3 sessions × 60 min",
    format: "1:1 personalised",
    price: "₹1,999 total",
    outcomes: [
      "Discover your strengths & interests",
      "Shortlist 3 right-fit career paths",
      "Get a 6-month action plan",
      "Course/college recommendations",
      "Resume + LinkedIn review",
      "Clarity, not confusion",
    ],
    modules: [
      {
        title: "Discovery",
        items: [
          "Strengths inventory",
          "Interest assessment",
          "Values & lifestyle goals",
          "Skill audit",
        ],
      },
      {
        title: "Mapping",
        items: [
          "3 career path comparison",
          "Salary & growth research",
          "Pros & cons grid",
          "Reality check conversation",
        ],
      },
      {
        title: "Action Plan",
        items: [
          "6-month milestones",
          "Course/college options",
          "Networking targets",
          "Weekly check-ins (optional)",
        ],
      },
    ],
    metaDescription:
      "1:1 Career Counselling online — 3 × 60-min sessions · ₹1,999 total. Discover, map and act. Free consultation on WhatsApp.",
  },
  "interview-preparation": {
    slug: "interview-preparation",
    title: "Interview Preparation",
    tagline:
      "2 months of live HR screens, 60-second intros, STAR stories and mocks. Approx. 6 learners, up to 2 classes/week, ₹1,999/month, inclusive of taxes. For people who can already talk — and still fail the interview.",
    category: "Work & Career",
    categoryColor: "indigo",
    icon: "clipboard",
    heroImage: IMG.interview,
    midImage: IMG.womanOffice,
    footerImage: IMG.manOffice,
    duration: "2 months · 1 hr 30 min · up to 2 classes/week",
    durationQualifier: "The interview is a room. Rehearse it before the real one.",
    format: "Live batch · approximately 6 learners",
    price: "₹1,999/month",
    liveNote:
      "✓ 100% online live · ✓ Recorded mocks · ✓ Morning · evening · weekend IST · ✓ Pan-India · Based in Kolkata",
    outcomes: [
      "A 60-second 'tell me about yourself' that lands",
      "HR questions — why you, why this company, strengths, notice period — without freezing",
      "STAR stories for conflict, failure, leadership, achievement",
      "Explain your work in 3 minutes in English",
      "Panel and salary talk without dropping the number",
      "Two recorded mocks with notes you can replay",
    ],
    modules: [
      {
        title: "The 60-second intro",
        items: [
          "Present → past → future, timed to 60 seconds",
          "Cut the life story. Keep the job thread",
          "Openers that do not start with 'Myself…'",
          "Record, replay, cut 10 seconds",
        ],
      },
      {
        title: "HR screens",
        items: [
          "Why this company, why you, why now",
          "Strengths and weaknesses that sound adult",
          "Notice period and current CTC, said calmly",
          "Questions you ask them — not 'no questions'",
        ],
      },
      {
        title: "STAR stories",
        items: [
          "Situation, task, action, result — one story each",
          "Conflict with a senior, without blaming",
          "A failure you actually learned from",
          "Leadership when you had no title",
        ],
      },
      {
        title: "Explain your work",
        items: [
          "A 3-minute walk-through of what you do",
          "Numbers, names, next step — no jargon dump",
          "When you do not know: 'I’ll confirm by 4pm IST'",
          "Whiteboard / screen-share in English",
        ],
      },
      {
        title: "Panel and salary",
        items: [
          "Two interviewers, one answer — who you look at",
          "Expected CTC without collapsing",
          "Counter-offer English that does not sound greedy",
          "Closing: 'When should I follow up?'",
        ],
      },
      {
        title: "Live mocks",
        items: [
          "Two full mocks in the batch, recorded",
          "Teacher notes on freeze points, not grammar essays",
          "Replay the recording before the real screen",
          "Same-week reschedule if a seat exists",
        ],
      },
    ],
    faqs: [
      {
        q: "I already speak English. Do I still need this?",
        a: "If interviews are the place you freeze, yes. Daily chat and an HR screen are different rooms. This course is for people who can hold a conversation and still lose the job on the 60-second intro, STAR, or salary line.",
      },
      {
        q: "How is this different from Spoken English or Interactive Speaking?",
        a: "Spoken English builds the sentence from zero. Interactive builds freeze-free talk. Interview Preparation assumes you can already talk and drills only the job conversation — intro, HR, STAR, panel, salary — with recorded mocks. If you cannot yet form a sentence, start with Spoken English at ₹999/month.",
      },
      {
        q: "Is this the same as Career Counselling?",
        a: "No. Career Counselling is 1:1 about which path to take. Interview Preparation is a live batch about how you sound when someone already invited you to the screen. Different bottleneck.",
      },
      {
        q: "Do you guarantee I will get the job?",
        a: "No. We rehearse the English of the interview. The offer depends on the role, the panel and your work. We do not sell a placement.",
      },
      {
        q: "What's the batch size?",
        a: "Approximately 6 learners, so every mock is heard. 1 hr 30 min, up to 2 classes a week, 2 months, ₹1,999/month inclusive of taxes.",
      },
      {
        q: "How do I start?",
        a: "Get a free consultation on WhatsApp. We will say if this room fits, or if Spoken / Interactive / Workplace is the actual gap.",
      },
    ],
    testimonials: [
      {
        quote:
          "I could talk in the office. The HR screen was a different language. Two mocks later the 60-second intro stopped shaking.",
        name: "Sneha Kulkarni",
        detail: "Interview Preparation · Analyst, Pune",
        waMessage: "Hi, I saw Sneha's story. Interview Preparation?",
      },
      {
        quote:
          "STAR was a template I had copied. Saying it out loud in a batch of six is what made it mine.",
        name: "Rahul Menon",
        detail: "Interview Preparation · Support Engineer, Kochi",
        waMessage: "Hi, I saw Rahul's story. Interview Preparation?",
      },
    ],
    metaDescription:
      "Interview Preparation in English: 2 months, live batch of approximately 6, ₹1,999/month inclusive of taxes. HR screens, 60-second intro, STAR, panel, salary, recorded mocks. Kolkata teacher, pan-India.",
  },
};
