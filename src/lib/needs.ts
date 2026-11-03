/**
 * Needs guides: the English each next step actually tests (November 2026).
 *
 * Facts are from public sources listed in
 * research_notes/india-state-seo-geo-research-nov-2026.md §7. Rules:
 * - Never promise a job, a score or a selection (ASCI education guidelines).
 * - Never claim to teach a written exam syllabus. We help with *speaking*:
 *   interviews, calls, group discussions, explaining your work.
 * - Interview language is often the candidate's choice — say "if you choose
 *   English", never "the interview is in English".
 */
import type { ArticleBody } from "@/content/blog/blocks";

export type NeedKey = "bpo" | "it" | "analyst" | "bank" | "govt" | "campus";

export type Need = {
  key: NeedKey;
  path: string;
  /** Short label used in tables on state pages. */
  label: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  standfirst: string;
  shortAnswer: string;
  course: { path: string; name: string };
  keywords: string[];
  summary: string;
  waMessage: string;
  body: ArticleBody;
  faqs: { q: string; a: string }[];
};

export const NEEDS: Record<NeedKey, Need> = {
  bpo: {
    key: "bpo",
    path: "/english-for-bpo-jobs-india",
    label: "BPO / voice process",
    title: "English for BPO Jobs | Voice Round & Versant Prep",
    description:
      "What the BPO voice round and Versant/SVAR spoken tests check, how to practise for them, and which live class fits. From ₹999/month, about 6 per batch.",
    h1: "English for BPO and voice-process jobs",
    eyebrow: "Jobs · BPO / voice process",
    standfirst:
      "Many voice roles start with a spoken-English screen — Versant or SVAR — before HR and the client round. Here is what it checks and how to practise.",
    shortAnswer:
      "Voice-process hiring usually tests spoken English early: an AI-scored test (Versant or SVAR) or a voice round, then HR and operations. Practise clear sentences, listening and repeating, and a calm customer call. If you cannot yet hold a simple conversation, start with Basic Spoken English (₹999/month, also taught in Hindi or Marathi); if you speak but freeze, Interactive Speaking.",
    course: {
      path: "/course-spoken-english-hindi",
      name: "Basic Spoken English — Hindi to English",
    },
    keywords: [
      "english for bpo jobs",
      "bpo voice process english preparation",
      "versant test practice india",
      "svar test spoken english",
      "english for call center job interview",
      "voice and accent training online india",
    ],
    summary:
      "Guide: English for BPO / voice-process jobs in India — Versant (Pearson, AI-scored, ~15–20 minutes) and SHL SVAR spoken tests appear early in many voice hiring processes, then HR, operations and client rounds. Practise sentence clarity, listen-and-repeat, and customer-call structure. Learn With Smile: Basic Spoken English ₹999/month (Hindi or Marathi medium available), Interactive Speaking ₹1,599/month. No job guarantee.",
    waMessage:
      "Hi, I am preparing for a BPO / voice-process job. Which English course should I take?",
    body: [
      {
        t: "p",
        text: "**Short answer.** In many voice-process hiring drives, spoken English is checked **first** — by an AI-scored test such as Pearson's **Versant** or SHL's **SVAR**, or by a voice round — and only then come HR, operations and the client round. Employers rarely publish the test or the cut-off, so practise the skills, not tricks.",
      },
      { t: "h2", text: "What the spoken-English screen checks" },
      {
        t: "table",
        caption: "Typical parts of a BPO spoken-English screen (formats vary by employer).",
        head: ["Part", "What you do", "What it rewards"],
        rows: [
          ["Read aloud", "Read sentences from the screen", "Clear sounds, steady pace"],
          ["Repeat", "Hear a sentence, say it back", "Listening + memory for sentence shape"],
          ["Short answers", "Answer simple questions", "Quick, complete replies"],
          ["Sentence builds", "Rearrange words into a sentence", "Grammar you can use fast"],
          [
            "Story retell / open reply",
            "Retell or answer in your words",
            "Fluency without long pauses",
          ],
        ],
      },
      { t: "h2", text: "A customer call in four lines" },
      {
        t: "example",
        label: "Voice process — billing query",
        lines: [
          "Thank you for calling. May I have your registered mobile number, please?",
          "I understand — you were charged twice this month. Let me check that for you.",
          "I've raised a refund request. You'll get an SMS confirmation within 24 hours.",
          "Is there anything else I can help you with today?",
        ],
      },
      {
        t: "p",
        text: "Greeting, empathy, action, close. In class you practise this structure out loud until it stops being a script and becomes how you talk.",
      },
      { t: "h2", text: "How to practise every day" },
      {
        t: "ul",
        items: [
          "Read a short paragraph aloud and record it — in Bolo, your teacher reviews it every week.",
          "Listen to one sentence, pause, repeat it with the same rhythm (shadowing).",
          "Answer three simple questions out loud in full sentences, no notes.",
          "Role-play one customer call a day with a friend or in your live batch.",
        ],
      },
      {
        t: "cta",
        text: "Start from zero with a teacher who can explain in Hindi or Marathi — ₹999/month, about 6 per batch, daily practice in Bolo.",
        course: "/course-spoken-english-hindi",
        label: "Basic Spoken English — Hindi to English",
      },
      { t: "h2", text: "Who this is not" },
      {
        t: "p",
        text: "We do not run accent-neutralisation or test-cheat courses, and nobody can guarantee you a BPO job. If you already speak comfortably and only the interview scares you, [Interview Preparation](/course-interview-preparation) is the room.",
      },
    ],
    faqs: [
      {
        q: "Which English test do BPO companies use?",
        a: "Many voice-process employers use an AI-scored spoken test — Pearson's Versant or SHL's SVAR are common — usually early in the process, before HR and operations rounds. Companies rarely publish which test or cut-off they use, so the safest preparation is real speaking practice: reading aloud, listen-and-repeat, short answers and customer-call role-plays.",
      },
      {
        q: "Can I prepare for a BPO job if I studied in Hindi or Marathi medium?",
        a: "Yes. Learn With Smile's Basic Spoken English is also taught Hindi to English and Marathi to English — a teacher who speaks your language explains what does not land, and you speak English in every class. ₹999/month, about 6 learners, daily practice in the Bolo app. Message us on WhatsApp for a free consultation.",
      },
      {
        q: "Do you guarantee a BPO job?",
        a: "No. No honest course can. We help you speak clearly and calmly in English — which is what the voice round checks — and you practise it every week with a teacher.",
      },
    ],
  },

  it: {
    key: "it",
    path: "/english-for-software-engineers-india",
    label: "Software / IT and GCC jobs",
    title: "English for Software Engineers | Interviews & Standups",
    description:
      "IT and GCC hiring tests English in the communication round and in explaining your project. How to practise standups, demos and HR answers — live, about 6 per batch.",
    h1: "English for software engineers and IT freshers",
    eyebrow: "Jobs · software / IT / GCC",
    standfirst:
      "IT services and global capability centres check English early — in a communication round and in how you explain your own project. Then you use it every day in standups.",
    shortAnswer:
      "Freshers in IT and GCC drives usually face a communication assessment (often first or alongside aptitude) and an HR round where you explain your work in English. On the job it is standups, demos and client calls. Business English (₹2,499/month, 3 months) practises exactly that; Interview Preparation (₹2,499/month, 2 months) is for the interview itself.",
    course: { path: "/course-business-english", name: "Business English" },
    keywords: [
      "english for software engineers india",
      "communication round preparation it freshers",
      "english for standup meetings",
      "explain project in interview english",
      "gcc interview communication skills",
      "english for it professionals online class",
    ],
    summary:
      "Guide: English for software engineers and IT/GCC freshers in India — communication assessments appear early in campus and lateral drives (some employers add Versant after aptitude), HR rounds ask you to explain your project in English, and the job runs on standups and client calls. Learn With Smile: Business English ₹2,499/month (3 months), Interview Preparation ₹2,499/month (2 months), about 6 per batch.",
    waMessage:
      "Hi, I am a software engineer / IT fresher. I want to speak better English in interviews and standups.",
    body: [
      {
        t: "p",
        text: "**Short answer.** In IT services and GCC hiring, English is checked twice: a **communication assessment** (first, or alongside aptitude — some employers use Versant) and the **HR/technical round**, where you must explain your project clearly. After you join, the test never stops: standups, demos, client calls.",
      },
      { t: "h2", text: "Explain your project in 60 seconds" },
      {
        t: "example",
        label: "Interview — tell me about your project",
        lines: [
          "I built a leave-management app for our college hostel.",
          "The problem: requests were on paper and wardens lost track.",
          "I used React for the front end and Firebase for login and data.",
          "Result: about 300 students used it last semester; approvals took a day instead of a week.",
        ],
      },
      {
        t: "p",
        text: "What, why, how, result. Four sentences you can say without notes beat ten minutes of jargon.",
      },
      { t: "h2", text: "The daily standup" },
      {
        t: "table",
        caption: "Standup lines that sound clear, not rehearsed.",
        head: ["Part", "Say this", "Avoid"],
        rows: [
          [
            "Yesterday",
            "Yesterday I finished the login API and opened a PR.",
            "Long history of the ticket",
          ],
          ["Today", "Today I'll write tests and fix the timeout bug.", "“I will try to do…”"],
          [
            "Blocker",
            "I'm blocked on the staging key — can someone share it?",
            "Silence until the next day",
          ],
        ],
      },
      {
        t: "cta",
        text: "Practise standups, demos and client calls in a live batch of about 6 — 3 months, ₹2,499/month.",
        course: "/course-business-english",
        label: "Business English",
      },
      { t: "h2", text: "Who this is not" },
      {
        t: "p",
        text: "If you cannot yet build a full sentence out loud, start with [Basic Spoken English](/course-spoken-english) or [Intermediate Spoken English](/course-intermediate-english). We do not teach coding, and we do not promise placements.",
      },
    ],
    faqs: [
      {
        q: "How do IT companies test English for freshers?",
        a: "Usually with a communication assessment early in the drive (sometimes an AI-scored spoken test such as Versant) and then in the HR and technical rounds, where you explain your project in English. Practise a 60-second project explanation and clear answers to HR questions out loud.",
      },
      {
        q: "Which Learn With Smile course is best for software engineers?",
        a: "Business English (3 months, ₹2,499/month, about 6 learners) for standups, demos and client calls; Interview Preparation (2 months, ₹2,499/month) if the interview is the only gap. Every course includes the Bolo practice app and a weekly teacher review.",
      },
      {
        q: "Will this guarantee a placement?",
        a: "No. We help you explain your work clearly and calmly in English; selection depends on the employer.",
      },
    ],
  },

  analyst: {
    key: "analyst",
    path: "/english-for-data-analysts-india",
    label: "Data / business analyst",
    title: "English for Data Analysts | Explain Insights Clearly",
    description:
      "Analysts are judged on explaining a number to people who don't read dashboards. A simple structure for insights, client calls and interviews — live, about 6 per batch.",
    h1: "English for data and business analysts",
    eyebrow: "Jobs · analyst",
    standfirst:
      "Your SQL can be perfect. If you cannot explain what the number means in plain English, the meeting moves on without you.",
    shortAnswer:
      "Analyst roles are judged on turning a chart into one clear sentence for non-technical people — in interviews, reviews and client calls. Use 'what changed, why, so what, next step'. Business English (₹2,499/month, 3 months, about 6 learners) practises exactly this out loud.",
    course: { path: "/course-business-english", name: "Business English" },
    keywords: [
      "english for data analysts",
      "how to explain data insights in english",
      "business analyst communication skills",
      "analyst interview english preparation",
      "present dashboard to stakeholders english",
    ],
    summary:
      "Guide: English for data and business analysts in India — explain an insight in one sentence (what changed, why, so what, next step) to non-technical stakeholders, in interviews, reviews and client calls. Learn With Smile Business English: 3 months, ₹2,499/month, about 6 per batch, Bolo practice app included.",
    waMessage:
      "Hi, I work (or want to work) as an analyst. I want to explain my work better in English.",
    body: [
      {
        t: "p",
        text: "**Short answer.** Analysts are hired and promoted on one skill people underrate: saying what a number **means**, in plain English, to someone who will not open your dashboard.",
      },
      { t: "h2", text: "One insight, four beats" },
      {
        t: "example",
        label: "Weekly review",
        lines: [
          "What changed: repeat orders fell 12% this month.",
          "Why: most of the drop is from Pune, after delivery times went up.",
          "So what: if it continues, we lose about ₹4 lakh in March.",
          "Next step: I'd like to test a faster delivery slot in Pune for two weeks.",
        ],
      },
      {
        t: "p",
        text: "Numbers in the example are illustrative. The structure is the point: change, cause, consequence, ask.",
      },
      { t: "h2", text: "Words that help non-technical people" },
      {
        t: "table",
        head: ["Instead of", "Say"],
        rows: [
          ["“Statistically significant”", "“This isn't random — it's real.”"],
          ["“Correlation of 0.8”", "“When one goes up, the other almost always does too.”"],
          ["“The query shows…”", "“The data shows…”"],
        ],
      },
      {
        t: "cta",
        text: "Practise explaining your real dashboards in a live batch — 3 months, ₹2,499/month.",
        course: "/course-business-english",
        label: "Business English",
      },
    ],
    faqs: [
      {
        q: "How can a data analyst improve English communication?",
        a: "Practise turning one chart into one sentence for a non-technical listener: what changed, why, so what, and the next step. Say it out loud, record it, and get feedback. Learn With Smile's Business English (3 months, ₹2,499/month) does this live in a batch of about 6, with weekly teacher review in the Bolo app.",
      },
      {
        q: "Is Business English useful for analyst interviews?",
        a: "Yes — interviews ask you to walk through a project and explain a finding. If the interview is your only gap, Interview Preparation (2 months, ₹2,499/month) focuses on that.",
      },
    ],
  },

  bank: {
    key: "bank",
    path: "/english-for-bank-po-interview",
    label: "Bank PO / bank interview",
    title: "English for Bank PO Interview | Speak Calmly in English",
    description:
      "After the written exam, the bank PO interview checks how you speak. If you choose English, practise these answers out loud — live batch, about 6 learners.",
    h1: "English for the bank PO interview",
    eyebrow: "Government & bank · interview",
    standfirst:
      "We do not teach the written exam. We help with the part after it: speaking calmly to a panel — in English, if that is the language you choose.",
    shortAnswer:
      "IBPS publishes no rule forcing English in the PO interview; candidates report answering in English or Hindi. If you choose English, practise a 60-second introduction, 'why banking', and current-affairs answers out loud. Interview Preparation (₹2,499/month, 2 months) does this live; if basic sentences are hard, start with Basic Spoken English — Hindi to English (₹999/month).",
    course: { path: "/course-interview-preparation", name: "Interview Preparation" },
    keywords: [
      "bank po interview english preparation",
      "ibps po interview in english or hindi",
      "sbi po interview english speaking",
      "bank interview introduction in english",
      "english speaking for bank exam interview",
    ],
    summary:
      "Guide: English for bank PO interviews — IBPS publishes no language clause for the interview and candidates report using English or Hindi; if you choose English, practise a 60-second introduction, 'why banking' and current-affairs answers aloud. Learn With Smile does not teach the written exam. Interview Preparation ₹2,499/month (2 months); Basic Spoken English — Hindi to English ₹999/month.",
    waMessage:
      "Hi, I have a bank PO interview coming up and want to practise answering in English.",
    body: [
      {
        t: "p",
        text: "**Short answer.** The written exam gets you to the panel; the interview checks how you **speak**. IBPS does not publish a rule that the interview must be in English, and candidates report answering in English or Hindi. If you choose English, practise these answers out loud — not in your head.",
      },
      { t: "h2", text: "Three answers to practise first" },
      {
        t: "example",
        label: "Tell us about yourself (60 seconds)",
        lines: [
          "I'm Ankit, from Gaya. I did my B.Com from Patna University in 2024.",
          "For the last year I've worked at a cooperative bank branch, handling deposits and KYC.",
          "I enjoy explaining products to first-time account holders.",
          "That's why I want to join a public sector bank as a PO.",
        ],
      },
      {
        t: "ul",
        items: [
          "**Why banking?** One real reason from your life, one reason about the job.",
          "**A current-affairs question:** say what happened, one effect on banks, one sentence of your view.",
          "**A question you don't know:** “I'm not sure about the exact figure, but I understand that…” is a good answer.",
        ],
      },
      {
        t: "cta",
        text: "Practise your interview answers live, in a batch of about 6 — 2 months, ₹2,499/month.",
        course: "/course-interview-preparation",
        label: "Interview Preparation",
      },
      { t: "h2", text: "Who this is not" },
      {
        t: "p",
        text: "We do not teach reasoning, quant or the English section of the written paper, and no one can promise selection. If speaking a full sentence is still hard, start with [Basic Spoken English — Hindi to English](/course-spoken-english-hindi).",
      },
    ],
    faqs: [
      {
        q: "Is the IBPS PO interview in English or Hindi?",
        a: "IBPS does not publish a language rule for the PO interview, and candidates report answering in English or Hindi. Choose the language you can speak calmly in. If you choose English, practise your introduction and common answers out loud.",
      },
      {
        q: "Does Learn With Smile teach the bank exam?",
        a: "No. We help with speaking — the interview, introductions and explaining your answers calmly in English. Interview Preparation is 2 months at ₹2,499/month, about 6 learners per batch.",
      },
    ],
  },

  govt: {
    key: "govt",
    path: "/english-for-government-job-interview",
    label: "Government job interview",
    title: "English for Govt Job Interviews | UPSC & State PSC",
    description:
      "UPSC lets you choose the interview language. If you choose English, practise speaking to a panel calmly. What we help with, what we don't — live, about 6 per batch.",
    h1: "English for government job interviews",
    eyebrow: "Government · interview / personality test",
    standfirst:
      "For the UPSC personality test you choose the interview language. If you choose English, the panel wants calm, clear answers — not big words.",
    shortAnswer:
      "UPSC lets candidates choose the interview language (English, Hindi or a listed Indian language, with an interpreter for others); state PSCs set their own rules. SSC dropped interviews for non-gazetted posts in 2016. If you choose English, practise structured answers aloud. Interview Preparation (₹2,499/month) does this live; we do not teach any written exam.",
    course: { path: "/course-interview-preparation", name: "Interview Preparation" },
    keywords: [
      "upsc interview in english preparation",
      "personality test english speaking practice",
      "state psc interview english",
      "government job interview english tips",
      "hindi medium upsc interview english",
    ],
    summary:
      "Guide: English for government job interviews in India — UPSC lets candidates choose the interview language (English, Hindi or an Eighth Schedule language, with an interpreter); state PSCs set their own rules; SSC removed interviews for non-gazetted posts from 2016. If you choose English, practise calm, structured answers aloud. Learn With Smile Interview Preparation ₹2,499/month; no written-exam coaching.",
    waMessage: "Hi, I have a government job interview and want to practise speaking in English.",
    body: [
      {
        t: "p",
        text: "**Short answer.** For the UPSC personality test you **choose** the interview language — English, Hindi or another listed Indian language (an interpreter is arranged for languages other than English and Hindi; check the current notice). State PSCs set their own rules. SSC removed interviews for non-gazetted posts in 2016. Choose the language you speak most calmly in.",
      },
      { t: "h2", text: "If you choose English: answer like this" },
      {
        t: "example",
        label: "Panel question — should India ban single-use plastic completely?",
        lines: [
          "I think a complete ban is right in principle, Sir.",
          "But it needs cheap alternatives first — otherwise small vendors lose income.",
          "For example, cloth bags could be made through self-help groups.",
          "So: a phased ban, with support for small businesses.",
        ],
      },
      {
        t: "p",
        text: "Position, problem, example, balanced conclusion. Simple words, said slowly, beat long words said nervously.",
      },
      {
        t: "cta",
        text: "Practise panel-style answers live, in a batch of about 6 — 2 months, ₹2,499/month.",
        course: "/course-interview-preparation",
        label: "Interview Preparation",
      },
      { t: "h2", text: "What we don't do" },
      {
        t: "p",
        text: "We do not coach prelims, mains or any written paper, and we make no promise about selection. Hindi-medium? Build the base first with [Basic Spoken English — Hindi to English](/course-spoken-english-hindi).",
      },
    ],
    faqs: [
      {
        q: "Can I give the UPSC interview in Hindi?",
        a: "Yes. UPSC lets candidates choose the interview language — English, Hindi or a listed Indian language, with an interpreter for languages other than English and Hindi. Check the current year's notice and DAF instructions. Choose the language you can speak most calmly in.",
      },
      {
        q: "Does Learn With Smile coach government exams?",
        a: "No. We help only with speaking — interview and personality-test answers in English, if you choose English. Interview Preparation is 2 months at ₹2,499/month, about 6 learners per batch.",
      },
    ],
  },

  campus: {
    key: "campus",
    path: "/english-for-campus-placements-india",
    label: "Campus placements & higher studies",
    title: "English for Campus Placements | GD, HR & Admissions",
    description:
      "Group discussions, HR rounds and admission interviews test spoken English. What to practise, and which course fits — from ₹999/month, about 6 per batch.",
    h1: "English for campus placements and higher studies",
    eyebrow: "Students · placements / admissions",
    standfirst:
      "Group discussion, HR round, admission interview: three places where students who know the answer still lose because the words don't come out.",
    shortAnswer:
      "Placements test spoken English in group discussions, communication assessments and HR rounds; higher-studies admissions add interviews. Practise entering a GD, a 60-second introduction and 'why this course'. Intermediate Spoken English (₹1,999/month) builds flow; Interview Preparation (₹2,499/month) targets the interview; Basic Spoken English (₹999/month) starts from zero.",
    course: { path: "/course-intermediate-english", name: "Intermediate Spoken English" },
    keywords: [
      "english for campus placement",
      "group discussion english tips",
      "hr round english preparation students",
      "english for admission interview india",
      "spoken english for college students online",
    ],
    summary:
      "Guide: English for campus placements and higher-studies admissions — group discussions, communication assessments, HR rounds and admission interviews. Practise entering a GD, a 60-second introduction and 'why this course'. Learn With Smile: Basic Spoken English ₹999/month (also Hindi or Marathi medium), Intermediate Spoken English ₹1,999/month, Interview Preparation ₹2,499/month.",
    waMessage:
      "Hi, I am a student preparing for placements / admission interviews. Which English course fits?",
    body: [
      {
        t: "p",
        text: "**Short answer.** You will be tested on spoken English in three places: the **group discussion**, the **communication/HR round** and, for higher studies, the **admission interview**. Each one rewards the same thing: getting a clear sentence out on time.",
      },
      { t: "h2", text: "How to enter a group discussion" },
      {
        t: "example",
        label: "GD — Should college attendance be optional?",
        lines: [
          "I'd like to start with one point: attendance and learning are not the same thing.",
          "Building on what Riya said, recorded lectures already exist —",
          "but labs and discussions can't be recorded.",
          "So maybe attendance should be optional for lectures, not for labs.",
        ],
      },
      {
        t: "ul",
        items: [
          "Enter early with one short point.",
          "Build on someone by name.",
          "Summarise in one line if the group stalls.",
        ],
      },
      {
        t: "cta",
        text: "Build flow and confidence — 4 months, ₹1,999/month, about 6 learners, debates every week.",
        course: "/course-intermediate-english",
        label: "Intermediate Spoken English",
      },
    ],
    faqs: [
      {
        q: "How can college students improve English for placements?",
        a: "Speak every day, not just read: a 60-second introduction, one group-discussion point and one HR answer, said out loud and recorded. Learn With Smile courses include the Bolo app for daily practice and a weekly teacher review; Intermediate Spoken English (₹1,999/month) builds flow, Interview Preparation (₹2,499/month) targets the interview.",
      },
      {
        q: "I studied in Hindi or Marathi medium. Am I behind for placements?",
        a: "You are behind on practice, not on ability. Basic Spoken English — Hindi to English or Marathi to English (₹999/month) starts from zero with a teacher who speaks your language.",
      },
    ],
  },
};

export const NEED_KEYS = Object.keys(NEEDS) as NeedKey[];
