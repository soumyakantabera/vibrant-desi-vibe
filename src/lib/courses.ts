import type { CourseData } from "@/components/CoursePage";
import { IMG } from "@/lib/images";

export const COURSES: Record<string, CourseData> = {
  "spoken-english": {
    slug: "spoken-english",
    title: "Basic Spoken English",
    tagline:
      "6 months, ₹999/mo, max 8. Speak from zero — 2,000+ words, live correction, up to 2 classes/week.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "mic",
    heroImage: IMG.spokenEnglish,
    midImage: IMG.womanLaptop,
    footerImage: IMG.studentLaptop2,
    duration: "6 months · up to 2 classes/week",
    format: "Live batch · max 8 students",
    price: "₹999/mo",
    outcomes: [
      "Introduce yourself fluently in any social or work setting",
      "Handle daily conversations — shops, travel, phone calls",
      "Build a 2,000+ word everyday vocabulary",
      "Speak with correct grammar, tense and pronunciation",
      "Confidently take part in group discussions",
      "Lose hesitation and stage fear forever",
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
    ],
    faqs: [
      {
        q: "I can barely speak. Will this work for me?",
        a: "Yes — this is exactly who the course is for. We start from absolute basics and build up step by step in a judgment-free batch.",
      },
      {
        q: "What's the batch size?",
        a: "Maximum 8 students per batch so every learner gets real speaking time.",
      },
      {
        q: "Is the demo really free?",
        a: "Yes, 100% free. Attend a full live class before deciding.",
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
        waMessage: "Hi, I want the same Spoken English result as Kavya. Can I get a free demo?",
      },
      {
        quote: "The gamified flashcard sessions are addictive. I look forward to every class now.",
        name: "Rakesh Verma",
        detail: "Spoken English · Shopkeeper, Patna",
        waMessage: "Hi, please share Spoken English demo details.",
      },
      {
        quote: "Small batch + real corrections every class. That's what made the difference.",
        name: "Meera Iyer",
        detail: "Spoken English · Homemaker, Chennai",
        waMessage: "Hi, I want to join Spoken English. Free demo please.",
      },
    ],
    metaDescription:
      "Live online Spoken English classes for Indian learners. 6 months · up to 2 classes/week · max 8 per batch. ₹999/mo. Free demo on WhatsApp.",
  },
  "business-english": {
    slug: "business-english",
    title: "Workplace English",
    tagline:
      "Meetings, client calls, emails and presentations — 3 months, max 8, up to 2 live classes/week, ₹1,999/mo. For professionals, freshers and job seekers.",
    category: "Work & Career",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.businessEnglish,
    midImage: IMG.womanOffice,
    footerImage: IMG.presentation,
    duration: "3 months · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · max 8 students",
    price: "₹1,999/mo",
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
        waMessage: "Hi, I want Neha's client-call result. Workplace English demo please.",
      },
      {
        quote:
          "Partners asked me to walk the working papers in English. A batch of eight meant I rehearsed every week. I present now.",
        name: "Rohan Deshpande",
        detail: "Workplace English · Chartered Accountant, Mumbai",
        waMessage: "Hi, I saw Rohan's CA story. Workplace English demo please.",
      },
      {
        quote:
          "Back office to BI Analyst. Salary moved. The English I use is client reviews and Monday standups — this room is built for that.",
        name: "Aditya Nair",
        detail: "Workplace English · BI Analyst, Pune",
        waMessage: "Hi, I saw Aditya's career switch. Workplace English demo please.",
      },
    ],
    metaDescription:
      "Workplace English classes for professionals and job seekers in India. Meetings, calls, emails and presentations. Live max-8 batch, ₹1,999/month.",
  },
  "interactive-speaking": {
    slug: "interactive-speaking",
    title: "Interactive Speaking Class",
    tagline:
      "3 months of live speaking — games, debates, role-plays. Max 8, up to 2 classes/week, ₹1,199/mo. Built for fluency, not grammar lectures.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.interactiveSpeaking,
    midImage: IMG.girlReading,
    footerImage: IMG.groupClass,
    duration: "3 months · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · max 8 students",
    price: "₹1,199/mo",
    outcomes: [
      "Speak for 2 minutes on any topic",
      "Lead group conversations",
      "Tell stories that hold attention",
      "Use idioms naturally",
      "Think in English, not translate",
      "Win debates with calm logic",
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
    ],
    testimonials: [
      {
        quote:
          "SQL was easy. The Monday standup was not. I speak the dashboard now — no translating in my head.",
        name: "Ananya Iyer",
        detail: "Interactive Speaking · Data Analyst, Bengaluru",
        waMessage: "Hi, I saw Ananya's standup story. Interactive Speaking demo please.",
      },
    ],
    metaDescription:
      "Interactive English speaking classes online. Up to 2 live sessions/week with games, debates and stories. 3 months · max 8 per batch · ₹1,199/mo.",
  },
  ielts: {
    slug: "ielts",
    title: "IELTS Preparation",
    tagline:
      "Target Band 7+ in 3 months. 6+ full-length mocks, speaking labs, live writing feedback. Max 8 per batch, ₹2,499/mo. Academic or General Training.",
    category: "IELTS Preparation",
    categoryColor: "brand",
    icon: "trophy",
    heroImage: IMG.ielts,
    midImage: IMG.manStudying,
    footerImage: IMG.graduation,
    duration: "3 months · up to 2 classes/week",
    format: "Live batch · max 8 students",
    price: "₹2,499/mo",
    outcomes: [
      "Score Band 7+ across all four modules",
      "Master Task 1 & Task 2 writing templates",
      "Confidently handle Speaking Part 1, 2 & 3",
      "Crack tricky Listening question types",
      "Time-manage Reading without panic",
      "Take 6+ full-length mock tests with detailed feedback",
    ],
    modules: [
      {
        title: "Listening Mastery",
        items: [
          "Map, form & matching questions",
          "Section 3 academic discussions",
          "Note-taking shorthand",
          "Accent training: UK, AUS, US",
        ],
      },
      {
        title: "Reading Strategies",
        items: [
          "Skim, scan & deep-read",
          "True/False/Not Given decoder",
          "Matching headings tactics",
          "30-minute mock per week",
        ],
      },
      {
        title: "Writing Task 1 & 2",
        items: [
          "Academic & GT Task 1 templates",
          "Task 2 essay structures (5 types)",
          "Live writing reviewed in class",
          "Band 7+ vocabulary & connectors",
        ],
      },
      {
        title: "Speaking Labs",
        items: [
          "Part 1: home, work, hobbies",
          "Part 2 cue-card structure",
          "Part 3 abstract discussion",
          "Mock interviews with feedback",
        ],
      },
      {
        title: "Mock Tests & Analysis",
        items: [
          "6 full-length timed mocks",
          "Section-wise weakness map",
          "Personalised improvement plan",
          "Predicted band score",
        ],
      },
    ],
    faqs: [
      {
        q: "Academic or General Training?",
        a: "We cover both — your trainer customises drills to your target.",
      },
      { q: "How many mocks?", a: "Minimum 6 full-length mocks." },
    ],
    testimonials: [
      {
        quote: "Went from 5.5 to 7.5 overall. Writing feedback was a game changer.",
        name: "Devika Nair",
        detail: "IELTS · Kochi",
        waMessage: "Hi, I saw Devika's IELTS story. Free demo please.",
      },
      {
        quote: "Speaking Part 2 used to scare me. The mock interviews killed that fear.",
        name: "Arjun Menon",
        detail: "IELTS · Chennai",
        waMessage: "Hi, want to join IELTS. Demo please.",
      },
    ],
    metaDescription:
      "IELTS Preparation live online — 3 months · up to 2 classes/week · max 8 per batch · ₹2,499/mo. 6+ mocks, live feedback and a free demo.",
  },
  "interview-prep": {
    slug: "interview-prep",
    title: "Interview Preparation in English",
    tagline:
      "2-month intensive: HR, STAR, 3 recorded mocks, resume and LinkedIn. Max 8, up to 2 classes/week, ₹1,499/mo. Walk in ready.",
    category: "Work & Career",
    categoryColor: "brand",
    icon: "target",
    heroImage: IMG.interview,
    midImage: IMG.manOffice,
    footerImage: IMG.womanOffice,
    duration: "2 months · up to 2 classes/week",
    format: "Live batch · max 8 students",
    price: "₹1,499/mo",
    outcomes: [
      "Crack HR rounds confidently",
      "Answer 'tell me about yourself' in 90 sec",
      "Handle behavioural questions (STAR)",
      "Negotiate salary calmly",
      "Read interviewer cues",
      "Build a stand-out LinkedIn & resume",
    ],
    modules: [
      {
        title: "Self-Introduction Mastery",
        items: [
          "The 90-second pitch",
          "Highlighting strengths without bragging",
          "Story-driven achievements",
          "Body language & tone",
        ],
      },
      {
        title: "HR Rounds",
        items: [
          "Most-asked HR questions",
          "Why this company / why you",
          "Strengths & weaknesses framing",
          "Notice period & salary negotiation",
        ],
      },
      {
        title: "Behavioural (STAR)",
        items: [
          "Situation, Task, Action, Result",
          "Conflict & failure stories",
          "Leadership examples",
          "Team disagreements",
        ],
      },
      {
        title: "Resume & LinkedIn",
        items: [
          "1-page ATS-friendly resume",
          "Action-verb bullets",
          "LinkedIn headline & about",
          "Recruiter-attracting keywords",
        ],
      },
      {
        title: "Mock Interviews",
        items: [
          "3 live mock interviews",
          "Recorded feedback",
          "Improvement action plan",
          "Confidence drills",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "The promotion board was in English. Mock interviews, live, eight people. I got the Assistant Manager seat.",
        name: "Vikram Singh",
        detail: "Interview Prep · Bank Asst. Manager, Delhi",
        waMessage: "Hi, I saw Vikram's promotion story. Interview Prep demo please.",
      },
    ],
    metaDescription:
      "Interview Preparation in English live online — HR, behavioural and mock interviews. 2 months · up to 2 classes/week · max 8 · ₹1,499/mo.",
  },
  "career-counselling": {
    slug: "career-counselling",
    title: "Career Counselling",
    tagline:
      "1:1 quality guidance — 3 × 60-min sessions for ₹1,999/mo. Strengths map, 3 career paths, 6-month action plan, resume and LinkedIn review.",
    category: "Career Guidance",
    categoryColor: "brand",
    icon: "compass",
    heroImage: IMG.careerCounselling,
    midImage: IMG.womanOffice,
    footerImage: IMG.studentLaptop,
    duration: "3 sessions × 60 min",
    format: "1:1 personalised",
    price: "₹1,999/mo",
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
      "1:1 Career Counselling online — 3 × 60-min sessions · ₹1,999/mo. Discover, map and act. Free 15-min intro on WhatsApp.",
  },
};
