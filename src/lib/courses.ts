import type { CourseData } from "@/components/CoursePage";
import { IMG } from "@/lib/images";
import { mediumCourse } from "@/lib/medium-courses";

export const COURSES: Record<string, CourseData> = {
  "spoken-english": {
    slug: "spoken-english",
    title: "Basic Spoken English",
    tagline:
      "3 months, ₹999/month, inclusive of taxes, approx. 6 learners. Zero to confident: speak up in simple everyday English — 1,000+ words, live correction every class, a 2-minute talk by month 3. Up to 2 classes/week.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "mic",
    heroImage: IMG.spokenEnglish,
    midImage: IMG.womanLaptop,
    footerImage: IMG.studentLaptop2,
    duration: "3 months · 1 hr 30 min · up to 2 classes/week",
    format: "Live batch · approximately 6 learners",
    price: "₹999/month",
    liveNote:
      "✓ 100% online live · ✓ Zero to confident in 3 months · ✓ Flexible afternoon · evening · night slots · ✓ About 6 in a batch · ✓ Kolkata, pan-India, now worldwide",
    outcomes: [
      "Introduce yourself with confidence — at work, in class, with new people",
      "Handle daily conversations — shops, travel, directions, phone calls",
      "Build a 1,000+ word everyday vocabulary",
      "Speak in correct simple sentences — present and past",
      "Speak for 60 seconds on a topic without freezing",
      "Give a 2-minute talk to the batch — ready for Intermediate or Interactive Speaking",
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
        title: "Grammar for Speaking",
        items: [
          "To be, present simple and simple past — said out loud",
          "Articles, pronouns and prepositions",
          "Questions: what, where, when — and requests with can / could",
          "Live error-correction games",
        ],
      },
      {
        title: "Vocabulary Builder",
        items: [
          "1,000+ everyday words & phrases",
          "Flashcard game sessions",
          "Common phrasal verbs",
          "Words for home, work, money and feelings",
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
        title: "Confidence & Speaking Up",
        items: [
          "Self-introduction mastery",
          "Speak your opinion in 60 seconds",
          "Eye contact, body language, voice",
          "Final 2-minute talk to the batch, with feedback",
        ],
      },
    ],
    faqs: [
      {
        q: "Is 3 months enough?",
        a: "Three months takes you from zero to speaking up with confidence in simple everyday English — introductions, daily conversations, a 2-minute talk. That is roughly CEFR A2, exactly where Intermediate Spoken English starts. For correct, fluent English with connected ideas and work emails, continue with Intermediate (4 months, ₹1,999/month). The course is extendable if a phase needs longer.",
      },
      {
        q: "What comes after Basic Spoken English?",
        a: "Pick the next room by goal. Correct, fluent English and workplace emails → Intermediate Spoken English (4 months, ₹1,999/month). Meetings, client calls and freezing at work → Interactive Speaking (3 months, ₹1,599/month). An interview coming up → Interview Preparation (2 months, ₹2,499/month).",
      },
      {
        q: "Do you cover job interviews?",
        a: "Basic Spoken English gives you a confident self-introduction — the first minute of any interview. HR questions, STAR answers and mock rounds are taught in Interview Preparation (2 months, ₹2,499/month); Interactive Speaking also has an interview block.",
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
        waMessage:
          "Hi, I saw Kavya's story and I want a free consultation for Basic Spoken English.",
      },
      {
        quote: "The gamified flashcard sessions are addictive. I look forward to every class now.",
        name: "Rakesh Verma",
        detail: "Spoken English · Shopkeeper, Patna",
        waMessage: "Hi, I want a free consultation for Basic Spoken English.",
      },
      {
        quote: "Small batch + real corrections every class. That's what made the difference.",
        name: "Meera Iyer",
        detail: "Spoken English · Homemaker, Chennai",
        waMessage: "Hi, I want a free consultation for Basic Spoken English.",
      },
    ],
    prerequisites: "None. For adults 15+ who cannot yet finish a sentence out loud in English.",
    visuals: {
      classBlocks: [
        {
          label: "Grammar",
          minutes: 30,
          detail:
            "One structure at a time — to be, nouns, pronouns, present simple — taught through sentences you will say today.",
          tone: "coral",
        },
        {
          label: "Communication",
          minutes: 60,
          detail:
            "Reading, speaking and listening. You use the grammar out loud, with the teacher correcting the same error until it goes.",
          tone: "indigo",
        },
      ],
      skills: [
        { label: "Reading", icon: "book" },
        { label: "Speaking", icon: "record_voice_over" },
        { label: "Listening", icon: "headset" },
      ],
      medium: ["Hindi to English", "English to English"],
      facts: ["Up to 2 classes a week", "About 6 learners", "Extendable", "Flexible schedule"],
      roadmap: [
        {
          from: 1,
          to: 1,
          title: "Build the Base",
          goal: "From single words to full sentences you can say without notes.",
          tone: "coral",
          tracks: [
            {
              skill: "Grammar",
              items: [
                "To be: am, is, are",
                "Sentence construction",
                "Nouns & articles",
                "Pronouns & possessives",
              ],
            },
            {
              skill: "Pronunciation",
              items: ["English sounds & pronunciation drill", "Stress, rhythm, intonation"],
            },
            {
              skill: "Speaking",
              items: ["Daily 10-minute speaking warm-ups", "30-second self-introduction"],
            },
          ],
        },
        {
          from: 2,
          to: 2,
          title: "Daily Life English",
          goal: "Talk about your day, your routine and what happened yesterday.",
          tone: "indigo",
          tracks: [
            {
              skill: "Grammar",
              items: [
                "Present simple tense",
                "Simple past for your own story",
                "Always, usually, never",
                "Prepositions: in, on, at",
              ],
            },
            {
              skill: "Vocabulary",
              items: [
                "Common verbs: go, have, do",
                "Common phrasal verbs",
                "1,000+ everyday words & phrases",
              ],
            },
            { skill: "Speaking", items: ["Speak your opinion in 60 seconds"] },
          ],
        },
        {
          from: 3,
          to: 3,
          title: "Speak Up",
          goal: "Handle the conversations of a normal week — and speak up without freezing.",
          tone: "brand",
          tracks: [
            {
              skill: "Speaking",
              items: [
                "Family, friends & home",
                "Shopping & prices",
                "Asking directions",
                "Requests: can / could",
                "Phone etiquette",
              ],
            },
            {
              skill: "Confidence",
              items: [
                "A confident self-introduction",
                "Final 2-minute talk to the batch, with feedback",
              ],
            },
          ],
        },
      ],
      roadmapNote:
        "Month spans are the plan for a typical batch. The course is extendable — if a phase needs longer, your teacher holds it. Next: Intermediate Spoken English (correct, fluent, work-ready) or Interactive Speaking (meetings and calls).",
    },
    metaDescription:
      "Live online Basic Spoken English for Indian learners: zero to confident in 3 months. Up to 2 classes/week, approximately 6 learners per batch, ₹999/month inclusive of taxes. Self-introduction, daily conversations, a 2-minute talk.",
  },
  "intermediate-english": {
    slug: "intermediate-english",
    title: "Intermediate Spoken English",
    tagline:
      "4 months, ₹1,999/month, inclusive of taxes, approx. 6 learners. Every class: 30 min grammar + 1 hour communication — speaking, writing, active listening and reading. For learners who can make basic sentences and now want them correct, connected and fluent.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "trend",
    heroImage: IMG.speaking,
    midImage: IMG.girlReading,
    footerImage: IMG.teacherWoman,
    duration: "4 months · 1 hr 30 min · up to 2 classes/week",
    durationQualifier: "Extendable — stay longer in a phase if you need it.",
    format: "Live batch · approximately 6 learners",
    price: "₹1,999/month",
    liveNote:
      "✓ 100% online live · ✓ English to English · ✓ 30 min grammar + 1 hr communication · ✓ Flexible afternoon · evening · night slots · ✓ About 6 in a batch · ✓ Kolkata, pan-India, now worldwide",
    prerequisites:
      "You can already make simple English sentences (roughly CEFR A2) — where the 3-month Basic Spoken English course finishes. If you cannot yet finish a sentence out loud, start with Basic Spoken English.",
    outcomes: [
      "Use all 8 parts of speech, tenses and articles correctly while you talk",
      "Speak for 60–90 seconds on a random topic with fewer fillers (um, ah, like)",
      "Link ideas with connectors and modals instead of short broken sentences",
      "Follow podcasts, news clips and simplified TED-style talks — then discuss them",
      "Agree, disagree and interrupt politely in a debate or decision meeting",
      "Give a 2–3 minute presentation and handle the Q&A",
      "Write clear workplace emails, updates and follow-ups in the right tone",
      "Say no, ask for more time and give feedback politely at work",
    ],
    modules: [
      {
        title: "Grammar Foundation",
        items: [
          "Parts of speech — all 8",
          "Tenses & articles",
          "Subject-verb agreement",
          "Wh- and Yes/No questions",
        ],
      },
      {
        title: "Sound & Fluency Drills",
        items: [
          "The LSRW communication loop — listen, speak, read, write",
          "Vowels, consonants and word stress",
          "Timed speaking challenges: 60–90 seconds on random topics",
          "Fluency drills that cut fillers — um, ah, like",
        ],
      },
      {
        title: "Expanding & Connecting",
        items: [
          "Connectors & modals",
          "Declining invitations & summarising points",
          "Describing experiences",
          "Negotiation skills",
        ],
      },
      {
        title: "Listening to Real English",
        items: [
          "Simplified TED-style talks",
          "Podcasts and news clips",
          "Comprehension tasks after every clip",
          "Discussion on what you heard",
        ],
      },
      {
        title: "Fluency & Confidence",
        items: [
          "Conditionals — zero, first, second",
          "Debates, discussion, problem-solving and decision-making language",
          "Agreeing, disagreeing and interrupting politely",
          "2–3 minute presentations + Q&A, situational role-play, storytelling",
        ],
      },
      {
        title: "Vocabulary & Daily Practice",
        items: [
          "News & current events, work & career",
          "Idioms, collocations, phrasal verbs",
          "Daily recordings and shadow speaking",
          "Flashcards and podcasts between classes",
        ],
      },
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
        title: "Professional Tone at Work",
        items: [
          "Polite disagreement with colleagues and seniors",
          "Saying no or requesting more time",
          "Giving and receiving practical feedback",
          "Grammar that makes a message sound sure, not rude",
        ],
      },
    ],
    visuals: {
      classBlocks: [
        {
          label: "Grammar",
          minutes: 30,
          detail:
            "Parts of speech, tenses, agreement, connectors, modals, conditionals — one structure per class, used in a sentence before the block ends.",
          tone: "coral",
        },
        {
          label: "Communication",
          minutes: 60,
          detail:
            "Speaking, writing, active listening and reading. The grammar from the first half goes straight into a timed turn, a role-play or a discussion.",
          tone: "indigo",
        },
      ],
      skills: [
        { label: "Speaking", icon: "record_voice_over" },
        { label: "Writing", icon: "clipboard" },
        { label: "Active listening", icon: "headset" },
        { label: "Reading", icon: "book" },
      ],
      medium: ["English to English"],
      facts: ["Up to 2 classes a week", "About 6 learners", "Extendable", "Flexible schedule"],
      roadmap: [
        {
          from: 1,
          to: 2,
          title: "Foundation",
          goal: "Fix the grammar under your sentences and train the mouth to say them cleanly.",
          tone: "coral",
          tracks: [
            {
              skill: "Grammar",
              items: [
                "Parts of speech — all 8",
                "Tenses & articles",
                "Subject-verb agreement",
                "Wh- and Yes/No questions",
              ],
            },
            {
              skill: "Speaking",
              items: [
                "LSRW communication loop",
                "Timed speaking challenges (60–90 seconds, random topics)",
                "Fluency drills that cut fillers (um, ah, like)",
              ],
            },
            { skill: "Pronunciation", items: ["Vowels, consonants & word stress"] },
          ],
        },
        {
          from: 3,
          to: 3,
          title: "Expanding & Connecting",
          goal: "Join short sentences into connected speech, and understand real English at real speed.",
          tone: "brand",
          tracks: [
            { skill: "Grammar", items: ["Connectors & modals"] },
            {
              skill: "Speaking",
              items: [
                "Declining invitations & summarising points",
                "Describing experiences",
                "Negotiation skills",
              ],
            },
            {
              skill: "Listening",
              items: [
                "Authentic material — simplified TED-style talks, podcasts, news clips — with comprehension and discussion tasks",
              ],
            },
          ],
        },
        {
          from: 4,
          to: 4,
          title: "Fluency & Confidence",
          goal: "Think, argue, present and tell a story in English without rehearsing it first.",
          tone: "indigo",
          tracks: [
            { skill: "Grammar", items: ["Conditionals — zero, first, second"] },
            {
              skill: "Speaking",
              items: [
                "Debates, discussion & problem-solving",
                "Decision-making language: agreeing, disagreeing, interrupting politely",
                "Situational role-play",
                "Storytelling with emotion, detail and natural sequencing",
              ],
            },
            { skill: "Presentation", items: ["2–3 minute presentations + Q&A"] },
            {
              skill: "Workplace writing",
              items: ["Emails, updates and follow-ups", "Polite no, feedback and asking for time"],
            },
          ],
        },
      ],
      roadmapNote:
        "Month spans are the plan for a typical batch. The course is extendable — if a phase needs longer, your teacher holds it, and the extension is confirmed in writing on WhatsApp.",
      vocabulary: [
        "News & current events",
        "Work & career",
        "Idioms",
        "Collocations",
        "Phrasal verbs",
      ],
      practice: [
        "Role-plays",
        "Storytelling",
        "Daily recordings",
        "Shadow speaking",
        "Flashcards",
        "Podcasts",
      ],
    },
    faqs: [
      {
        q: "Does Intermediate cover business emails and workplace English?",
        a: "Yes. Business English is now part of two courses. Intermediate Spoken English (4 months, ₹1,999/month, inclusive of taxes) covers workplace emails, updates and follow-ups, professional tone, polite disagreement and saying no — with the grammar that makes them sound right. For meetings, client calls, standups and presentations, take Interactive Speaking (3 months, ₹1,599/month).",
      },
      {
        q: "Should I take Intermediate or Basic Spoken English?",
        a: "One test: can you finish a simple sentence out loud — “I work in a bank and I live in Pune”? If yes, and the problem is wrong tenses, broken flow and fillers, take Intermediate Spoken English (4 months, ₹1,999/month). If you cannot finish that sentence yet, start with Basic Spoken English (₹999/month). The free consultation decides it in one conversation.",
      },
      {
        q: "How is Intermediate different from Interactive Speaking?",
        a: "Intermediate keeps a 30-minute grammar block in every class and covers all four skills — speaking, writing, active listening and reading. Interactive Speaking (3 months, ₹1,599/month) has no grammar block: it is 90 minutes of speaking reps for people whose grammar is fine and who freeze anyway.",
      },
      {
        q: "What happens in one class?",
        a: "90 minutes, live, about 6 learners. The first 30 minutes are grammar — one structure, used in a sentence. The next hour is communication: timed turns, role-plays, listening tasks, discussion and short writing, using what you just learned.",
      },
      {
        q: "Is the class taught in Hindi?",
        a: "Intermediate is English to English — teaching and practice in English, because at this level hearing English is part of the training. If a concept truly stalls, the teacher can bridge briefly in Hindi or Bengali, then you go back to English.",
      },
      {
        q: "Can I extend the course?",
        a: "Yes. The course is extendable. If a phase needs more time, say so on WhatsApp and we confirm the extension and the fee in writing before you pay.",
      },
      {
        q: "What if I miss a class?",
        a: "Every class is recorded and shared. A reschedule can be requested only within the same week and depends on teacher and slot availability.",
      },
    ],
    metaDescription:
      "Intermediate Spoken English online: 4 months, 30 min grammar + 1 hr communication per class, about 6 learners. ₹1,999/month, inclusive of taxes.",
  },
  "interactive-speaking": {
    slug: "interactive-speaking",
    title: "Interactive Speaking Class",
    tagline:
      "3 months of live speaking — debates, role-plays, meetings, client calls, presentations and interview rounds. Approx. 6 learners, up to 2 classes/week, ₹1,599/month, inclusive of taxes. Built for fluency, not grammar lectures.",
    category: "Speak Confidently",
    categoryColor: "brand",
    icon: "headset",
    heroImage: IMG.interactiveSpeaking,
    midImage: IMG.girlReading,
    footerImage: IMG.groupClass,
    duration: "3 months · 1 hr 30 min · up to 2 classes/week",
    durationQualifier: "Your pace, your progress. Start where you shine.",
    format: "Live batch · approximately 6 learners",
    price: "₹1,599/month",
    liveNote:
      "✓ 100% online live · ✓ Meetings, client calls & interview rounds in this room · ✓ Flexible afternoon · evening · night slots · ✓ About 6 in a batch · ✓ Kolkata, pan-India, now worldwide",
    outcomes: [
      "Speak for 2 minutes on any topic",
      "Lead group conversations",
      "Tell stories that hold attention",
      "Answer 'tell me about yourself' without freezing",
      "Practise HR and STAR answers out loud",
      "Think in English, not translate",
      "Give a clear status update in a standup or team meeting",
      "Handle client calls, questions and misunderstandings calmly",
      "Present an idea with a clear beginning, middle and action",
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
        waMessage:
          "Hi, I saw Ananya's story and I want a free consultation for Interactive Speaking Class.",
      },
    ],
    faqs: [
      {
        q: "Is this a Business English course?",
        a: "It covers the speaking side of Business English. Interactive Speaking (3 months, ₹1,599/month, inclusive of taxes, about 6 learners) now includes team meetings, status updates, client calls, clarifying requirements and presentations with Q&A, as live role-plays. Workplace emails and professional tone are in Intermediate Spoken English (4 months, ₹1,999/month).",
      },
      {
        q: "Do you cover job interviews?",
        a: "Yes. Interactive Speaking includes live interview rounds: the 90-second pitch, HR questions and STAR answers, in a batch of about 6. If the interview is the only gap and you already talk, take Interview Preparation — 2 months, ₹2,499/month.",
      },
    ],
    visuals: {
      classBlocks: [
        {
          label: "Communication",
          minutes: 90,
          detail:
            "The whole class is speaking reps — no grammar lecture. Reading, public speaking and listening, with you on the mic every block.",
          tone: "indigo",
        },
      ],
      skills: [
        { label: "Reading", icon: "book" },
        { label: "Public speaking", icon: "present_to_all" },
        { label: "Listening", icon: "headset" },
      ],
      medium: ["English to English"],
      facts: ["Up to 2 classes a week", "About 6 learners", "Flexible schedule"],
      roadmap: [
        {
          from: 1,
          to: 1,
          title: "Confident Conversations",
          goal: "Start talking before the inner editor stops you.",
          tone: "indigo",
          tracks: [
            {
              skill: "Speaking",
              items: [
                "Icebreakers & small talk",
                "Overcoming hesitation",
                "Daily speaking routine",
              ],
            },
            { skill: "Listening", items: ["Active listening"] },
            { skill: "Pronunciation", items: ["Pronunciation & rhythm"] },
          ],
        },
        {
          from: 2,
          to: 2,
          title: "Expanding Expression",
          goal: "Hold an opinion, tell a story and keep the floor in a group.",
          tone: "coral",
          tracks: [
            {
              skill: "Speaking",
              items: [
                "Opinions & polite debate",
                "Group discussions",
                "Handling interruptions",
                "Team meetings & status updates",
              ],
            },
            { skill: "Storytelling", items: ["Storytelling techniques"] },
            { skill: "Vocabulary", items: ["Idioms & role-plays"] },
          ],
        },
        {
          from: 3,
          to: 3,
          title: "Spontaneous Speaking",
          goal: "Speak with no preparation — to a room, a stranger or an interviewer.",
          tone: "brand",
          tracks: [
            {
              skill: "Speaking",
              items: [
                "Impromptu speaking",
                "Thinking on your feet",
                "Networking simulations",
                "Client calls & clarifying requirements",
              ],
            },
            { skill: "Public speaking", items: ["Public speaking basics", "Final presentation"] },
            { skill: "Interview", items: ["90-second pitch, HR and STAR answers out loud"] },
          ],
        },
      ],
    },
    metaDescription:
      "Interactive English speaking classes online. Games, debates, stories and interview rounds. 3 months · approximately 6 learners · ₹1,599/month, inclusive of taxes.",
  },
  "interview-preparation": {
    slug: "interview-preparation",
    title: "Interview Preparation",
    tagline:
      "2 months of live HR screens, 60-second intros, STAR stories and mocks. Approx. 6 learners, up to 2 classes/week, ₹2,499/month, inclusive of taxes. For people who can already talk — and still fail the interview.",
    category: "Work & Career",
    categoryColor: "indigo",
    icon: "clipboard",
    heroImage: IMG.interview,
    midImage: IMG.womanOffice,
    footerImage: IMG.manOffice,
    duration: "2 months · 1 hr 30 min · up to 2 classes/week",
    durationQualifier: "The interview is a room. Rehearse it before the real one.",
    format: "Live batch · approximately 6 learners",
    price: "₹2,499/month",
    liveNote:
      "✓ 100% online live · ✓ Recorded mocks · ✓ Afternoon · evening · night IST · ✓ About 6 in a batch · ✓ Kolkata, pan-India, now worldwide",
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
        q: "Is there a separate career course?",
        a: "No. Interview Preparation is a live batch about how you sound when someone already invited you to the screen. We do not offer career counselling.",
      },
      {
        q: "Do you guarantee I will get the job?",
        a: "No. We rehearse the English of the interview. The offer depends on the role, the panel and your work. We do not sell a placement.",
      },
      {
        q: "What's the batch size?",
        a: "Approximately 6 learners, so every mock is heard. 1 hr 30 min, up to 2 classes a week, 2 months, ₹2,499/month inclusive of taxes.",
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
        waMessage:
          "Hi, I saw Sneha's story and I want a free consultation for Interview Preparation.",
      },
      {
        quote:
          "STAR was a template I had copied. Saying it out loud in a batch of six is what made it mine.",
        name: "Rahul Menon",
        detail: "Interview Preparation · Support Engineer, Kochi",
        waMessage:
          "Hi, I saw Rahul's story and I want a free consultation for Interview Preparation.",
      },
    ],
    metaDescription:
      "Interview Preparation in English: 2 months, about 6 in a batch, ₹2,499/month inclusive of taxes. HR screens, 60-second intro, STAR, panel, salary, recorded mocks. Kolkata, pan-India, now worldwide.",
  },
};

// Basic Spoken English taught through Hindi or Marathi — same course and fee,
// a teacher who speaks the learner's language (see src/lib/medium-courses.ts).
COURSES["spoken-english-hindi"] = mediumCourse(COURSES["spoken-english"], "hi");
COURSES["spoken-english-marathi"] = mediumCourse(COURSES["spoken-english"], "mr");
