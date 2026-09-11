import type { CourseData } from "@/components/CoursePage";
import { IMG } from "@/lib/images";

export const COURSES: Record<string, CourseData> = {
  "spoken-english": {
    slug: "spoken-english",
    title: "Basic Spoken English",
    tagline:
      "6 months, ₹999/mo, inclusive of taxes, approx. 6 learners. Speak from zero — 2,000+ words, live correction, up to 2 classes/week.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "mic",
    heroImage: IMG.spokenEnglish,
    midImage: IMG.womanLaptop,
    footerImage: IMG.studentLaptop2,
    duration: "6 months · up to 2 classes/week",
    format: "Live batch · approximately 6 learners",
    price: "₹999/mo",
    outcomes: [
      "Introduce yourself fluently in any social or work setting",
      "Handle daily conversations — shops, travel, phone calls",
      "Build a 2,000+ word everyday vocabulary",
      "Speak with correct grammar, tense and pronunciation",
      "Confidently take part in group discussions",
      "Lose hesitation and stage fear with live speaking reps",
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
      "Live online Spoken English classes for Indian learners. 6 months · up to 2 classes/week · approximately 6 learners per batch. ₹999/mo, inclusive of taxes.",
  },
  "business-english": {
    slug: "business-english",
    title: "Workplace English",
    tagline:
      "Meetings, client calls, emails and presentations — 3 months, approx. 6 learners, up to 2 live classes/week, ₹1,999/mo, inclusive of taxes. For professionals, freshers and job seekers.",
    category: "Work & Career",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.businessEnglish,
    midImage: IMG.womanOffice,
    footerImage: IMG.presentation,
    duration: "3 months · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · approximately 6 learners",
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
          "Partners asked me to walk the working papers in English. A batch of around six meant I rehearsed every week. I present now.",
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
      "Workplace English classes for professionals and job seekers in India. Meetings, calls, emails and presentations. Live batch of approximately 6 learners, ₹1,999/month, inclusive of taxes.",
  },
  "interactive-speaking": {
    slug: "interactive-speaking",
    title: "Interactive Speaking Class",
    tagline:
      "3 months of live speaking — games, debates, role-plays. Approx. 6 learners, up to 2 classes/week, ₹1,199/mo, inclusive of taxes. Built for fluency, not grammar lectures.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.interactiveSpeaking,
    midImage: IMG.girlReading,
    footerImage: IMG.groupClass,
    duration: "3 months · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · approximately 6 learners",
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
      "Interactive English speaking classes online. Up to 2 live sessions/week with games, debates and stories. 3 months · approximately 6 learners per batch · ₹1,199/mo, inclusive of taxes.",
  },
  ielts: {
    slug: "ielts",
    title: "IELTS Preparation",
    tagline:
      "3 months live toward Band 7. 6+ full-length mocks, speaking labs, live writing feedback. Approximately 6 learners per batch, ₹2,499/mo, inclusive of taxes. Academic or General Training. Typical start around Band 5.5–6; writing is the usual bottleneck.",
    category: "IELTS Preparation",
    categoryColor: "brand",
    icon: "trophy",
    heroImage: IMG.ielts,
    midImage: IMG.manStudying,
    footerImage: IMG.graduation,
    duration: "3 months · up to 2 classes/week",
    format: "Live batch · approximately 6 learners",
    price: "₹2,499/mo",
    outcomes: [
      "Train all four modules toward Band 7 — writing is the usual bottleneck",
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
      "IELTS Preparation live online — 3 months · up to 2 classes/week · approximately 6 learners per batch · ₹2,499/mo, inclusive of taxes. 6+ mocks and live feedback.",
  },
  "interview-prep": {
    slug: "interview-prep",
    title: "Interview Preparation in English",
    tagline:
      "2-month intensive: HR, STAR, 3 recorded mocks, resume and LinkedIn. Approx. 6 learners, up to 2 classes/week, ₹1,499/mo, inclusive of taxes. Practise the round before you sit it.",
    category: "Work & Career",
    categoryColor: "brand",
    icon: "target",
    heroImage: IMG.interview,
    midImage: IMG.manOffice,
    footerImage: IMG.womanOffice,
    duration: "2 months · up to 2 classes/week",
    format: "Live batch · approximately 6 learners",
    price: "₹1,499/mo",
    outcomes: [
      "Practise HR rounds until the answers come out clean",
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
          "The promotion board was in English. Mock interviews, live, around six learners. I got the Assistant Manager seat.",
        name: "Vikram Singh",
        detail: "Interview Prep · Bank Asst. Manager, Delhi",
        waMessage: "Hi, I saw Vikram's promotion story. Interview Prep demo please.",
      },
    ],
    metaDescription:
      "Interview Preparation in English live online — HR, behavioural and mock interviews. 2 months · up to 2 classes/week · approx. 6 learners · ₹1,499/mo, inclusive of taxes.",
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
      "1:1 Career Counselling online — 3 × 60-min sessions · ₹1,999 total. Discover, map and act. Free 15-min intro on WhatsApp.",
  },
  "kids-english": {
    slug: "kids-english",
    title: "Spoken English for Kids",
    tagline:
      "Ages 6–11. After-school live batches of 4–6 children, 40-minute classes, twice a week. 6 months, ₹1,499/mo, inclusive of taxes. Parent on WhatsApp — you hear what happened in class.",
    category: "Ages 6–11",
    categoryColor: "brand",
    icon: "spark",
    heroImage: IMG.kidsEnglish,
    midImage: IMG.kidsEnglishMid,
    footerImage: IMG.kidsEnglishFooter,
    duration: "6 months · 2 × 40 min/week",
    durationQualifier: "After school on IST, plus Saturday mornings.",
    format: "Live batch · 4–6 children",
    price: "₹1,499/mo",
    liveNote:
      "✓ Parent is the customer · ✓ After-school and Saturday IST · ✓ Never mixed with teens or adults · ✓ Pan-India · Based in Kolkata",
    snapshotBatchBig: "4–6",
    snapshotBatchSmall: "Children in this live batch",
    waDemo:
      "Hi, I’m a parent. My child is __ years old. Please share the Spoken English for Kids (ages 6–11) demo slot. I will join the demo.",
    outcomes: [
      "Greet and introduce themselves in 4–5 full sentences",
      "Ask for help when they do not understand",
      "Speak 8–10 sentences about their day",
      "Tell a short story with a beginning and an end",
      "Take a turn in a group of 4–6 without freezing",
      "Use please, thank you and sorry without prompting",
    ],
    modules: [
      {
        title: "Settling in and sounds",
        items: [
          "Hello, my name, my family — full sentences",
          "Sounds Indian children often mix: v/w, s/sh, th",
          "Turn-taking: I speak, then I listen",
          "Short answers that are still complete sentences",
        ],
      },
      {
        title: "My world",
        items: [
          "School, home, food and play vocabulary",
          "Asking for help: can you say that again?",
          "Picture talk: 4–6 sentences from one image",
          "Days, weather and daily routines",
        ],
      },
      {
        title: "Stories and sequences",
        items: [
          "Beginning, middle and end of a short story",
          "Then / after that / finally",
          "Retell a one-minute story in their own words",
          "Reading a short passage aloud — not a literature course",
        ],
      },
      {
        title: "Show and tell",
        items: [
          "My favourite… talks of 8–10 sentences",
          "Describing a toy, a festival, a holiday",
          "Answering questions from classmates",
          "Voice: not shouting, not whispering",
        ],
      },
      {
        title: "Small-group talk",
        items: [
          "Pair work: shop, doctor, birthday",
          "Please, thank you, sorry in the right place",
          "Disagreeing without fighting: I think…",
          "Eight to ten sentences on my day",
        ],
      },
      {
        title: "Class confidence",
        items: [
          "A 60-second assembly-style talk",
          "Listening to and repeating instructions",
          "Last-class mini showcase — parent invited",
          "What to keep practising at home, 10 minutes a day",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this the same room as the adult Spoken English class?",
        a: "No. Ages 6–11 are a separate after-school batch of 4–6 children. They are never mixed with teens or with the adult rooms (15+).",
      },
      {
        q: "Who do you message — the child or the parent?",
        a: "The parent. Enrolment, fees, recordings and WhatsApp all sit on the parent’s number. The child does not need a phone. You join the free demo on camera.",
      },
      {
        q: "How long is a class, and when do they run?",
        a: "Forty minutes, twice a week, after school on IST, with Saturday morning slots. Six months. Every class is recorded and shared with the parent.",
      },
      {
        q: "Will my child get a certificate or higher school marks?",
        a: "No. This is live speaking practice, not a school subject and not a certificate course. We do not promise marks, fluency in 30 days, or a native accent.",
      },
      {
        q: "What if we miss a class?",
        a: "The recording is always shared with the parent. A reschedule can be requested only within the same week and only if a seat exists.",
      },
    ],
    metaDescription:
      "Kids spoken English online, ages 6–11. Live teacher, 4–6 children, 40-min classes twice a week. ₹1,499/mo inclusive of taxes. Parent on WhatsApp for the demo.",
  },
  "teen-english": {
    slug: "teen-english",
    title: "Spoken English for Teens",
    tagline:
      "Ages 12–17. Evening live batches of about 6, 50-minute classes, twice a week. 6 months, ₹1,799/mo, inclusive of taxes. Parent pays — the teen has to want the seat.",
    category: "Ages 12–17",
    categoryColor: "brand",
    icon: "mic",
    heroImage: IMG.teenEnglish,
    midImage: IMG.teenEnglishMid,
    footerImage: IMG.teenEnglishFooter,
    duration: "6 months · 2 × 50 min/week",
    durationQualifier: "Evening and Saturday IST, after school hours.",
    format: "Live batch · approximately 6 teens",
    price: "₹1,799/mo",
    liveNote:
      "✓ Parent on WhatsApp · ✓ Teen joins the demo · ✓ Never mixed with kids 6–11 or adult work rooms · ✓ Pan-India · Based in Kolkata",
    snapshotBatchBig: "~6",
    snapshotBatchSmall: "Teens in this live batch",
    waDemo:
      "Hi, I’m a parent. My teenager is __ years old (class __). Please share the Spoken English for Teens (ages 12–17) demo. We will both join.",
    outcomes: [
      "A 60-second introduction that is specific, not cringe",
      "A class presentation with a beginning, middle and one ask",
      "Disagree politely — I think… because…",
      "Sit a school or college interview chair without freezing",
      "Small talk with teachers and peers that does not stall",
      "A two-minute talk without reading the slide",
    ],
    modules: [
      {
        title: "Finding a voice",
        items: [
          "60-second intro: who I am, what I do, one fact",
          "School small talk that is not a memorised script",
          "Filler words — catch them, then drop them",
          "Recording the first talk so they hear themselves",
        ],
      },
      {
        title: "Class English",
        items: [
          "Asking a question in class without going silent",
          "Oral answers in full sentences, not one word",
          "Explaining a chapter in three beats",
          "Handling “I don’t know” without panic",
        ],
      },
      {
        title: "Opinions without a fight",
        items: [
          "I agree / I disagree / I am not sure yet",
          "One reason, one example, stop",
          "Listening before answering",
          "Short debates: school phones, sports, exams",
        ],
      },
      {
        title: "Stories that land",
        items: [
          "A personal anecdote with a beginning and a point",
          "Pace, pause and volume — not shouting",
          "Describing a festival, a trip, a match",
          "Two-minute talks with peer questions",
        ],
      },
      {
        title: "Interviews and chairs",
        items: [
          "School and college interview questions — not job IELTS",
          "Tell me about yourself, why this stream, a weakness",
          "Sitting still, looking at the camera, finishing a thought",
          "No placement promise. Practice for the chair in front of them.",
        ],
      },
      {
        title: "Showcase",
        items: [
          "A two-minute talk on a topic they chose",
          "Questions from the batch",
          "Last class: parent invited to listen",
          "What to keep practising — 10 minutes, four days a week",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this the adult Spoken English room at ₹999?",
        a: "No. Ages 12–17 sit in this teen batch. Kids 6–11 have their own room. Adult Spoken English is 15+ and work-oriented. A 15–17-year-old can take this teen room (school and college English) or the adult room if the parent and teen both want work English — they are never mixed in one batch.",
      },
      {
        q: "Who do you message?",
        a: "The parent. Fees, recordings and WhatsApp sit on the parent’s number. The teen joins the live class and the free demo; they do not need their own WhatsApp for enrolment.",
      },
      {
        q: "Will this raise board marks or give a certificate?",
        a: "No. This is live speaking practice for class, interviews and everyday talk. We do not issue a school certificate, we do not promise marks, and we do not sell 30-day fluency.",
      },
      {
        q: "What if they are shy and say nothing for two weeks?",
        a: "That is who the batch is for. Turns are short and named. Nobody is put on a stage cold. If after the demo the teen clearly does not want the seat, say so — a silent teenager in a live room is a wasted fee.",
      },
      {
        q: "What if we miss a class?",
        a: "The recording is shared with the parent. A reschedule can be requested only within the same week and only if a seat exists.",
      },
    ],
    metaDescription:
      "Teen spoken English online, ages 12–17. Live teacher, about 6 learners, 50-min classes twice a week. ₹1,799/mo, inclusive of taxes. Parent books the demo.",
  },
};
