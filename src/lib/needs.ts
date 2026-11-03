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
      "Analysts are judged on explaining a number to people who don't read dashboards. A structure for insights, client calls and interviews — live, about 6 per batch.",
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
