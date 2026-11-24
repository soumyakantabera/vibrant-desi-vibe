/**
 * The teaching team: one lead educator and the co-educators who run each
 * course's live batches.
 *
 * One source for three places that must agree: the /educator page, the
 * "Meet your educator" tile in the middle of every course page, and the
 * Course JSON-LD `instructor` (src/lib/course-seo.ts). Change a name or a
 * course here and all three follow.
 */
import { IMG } from "@/lib/images";
import { SITE_URL, abs } from "@/lib/seo";
import type { IconName } from "@/components/Icon";

export type EducatorId = "sunanda" | "janvi" | "aryakanya" | "sneha";

export type Educator = {
  id: EducatorId;
  name: string;
  /** Short role line, e.g. "Co-Educator · Interactive Speaking Course". */
  role: string;
  /** Schema.org jobTitle. */
  jobTitle: string;
  image: string;
  /** Absolute-path JPEG in /public for JSON-LD and link previews. */
  ogImage: string;
  /** Course page this educator teaches (first one is the primary course). */
  courses: { slug: string; title: string; href: string }[];
  /** One-line hook used as the tile heading's supporting line. */
  headline: string;
  /** Profile paragraph. Written for people first, search second. */
  bio: string;
  /** Teaching background, kept to what the school stands behind. */
  background: string[];
  /** What a learner practises with this educator. Doubles as knowsAbout. */
  focus: string[];
  /** What every learner in the batch can expect. */
  promises: string[];
  /** Spoken in class, for the language chips and knowsLanguage. */
  languages: { label: string; code: string }[];
  icon: IconName;
  waMessage: string;
};

export const EDUCATORS: Record<EducatorId, Educator> = {
  sunanda: {
    id: "sunanda",
    name: "Sunanda Dey",
    role: "Lead Educator · Intermediate English Course",
    jobTitle: "Lead Educator",
    image: IMG.founder,
    ogImage: "/og/founder.jpg",
    courses: [
      {
        slug: "intermediate-english",
        title: "Intermediate English",
        href: "/course-intermediate-english",
      },
    ],
    headline:
      "Takes learners who can already speak basic English to fluent, accurate, professional English in 4 months.",
    bio: "Sunanda Dey is the lead educator at Learn With Smile and teaches the Intermediate English Course herself. Over 7+ years of live online teaching she has trained 500+ learners across India, from college students and homemakers to working professionals preparing for promotions and client calls. Her intermediate batches fix the errors that basic courses leave behind: tense slips, article and preposition mistakes, translated sentences and the long pauses that cost marks in interviews. She also trains and guides every co-educator on the team, so each batch is taught the same way. Having learnt French and Italian herself, she knows how a second language feels from the learner's side.",
    background: [
      "7+ years teaching live online English and career development",
      "Global platform experience in diverse international environments",
      "Multilingual learner: French and Italian",
      "Trains and mentors the Learn With Smile co-educator team",
    ],
    focus: [
      "Intermediate spoken English and grammar accuracy",
      "Business English for meetings, emails and client calls",
      "Interview English and HR-round answers",
      "Presentation and public speaking English",
      "Advanced vocabulary and natural phrasing",
    ],
    promises: [
      "A teacher who knows your name and your progress",
      "Live sessions small enough that you can't hide",
      "Honest feedback, delivered with patience",
      "Outcomes you can show, not hours sat through",
    ],
    languages: [
      { label: "English", code: "en-IN" },
      { label: "Hindi", code: "hi-IN" },
      { label: "Bengali", code: "bn-IN" },
    ],
    icon: "school",
    waMessage: "Hi Sunanda, I want a free consultation for the Intermediate English Course.",
  },

  janvi: {
    id: "janvi",
    name: "Janvi B.",
    role: "Co-Educator · Interactive Speaking Course",
    jobTitle: "Co-Educator, Interactive Speaking",
    image: IMG.educatorJanvi,
    ogImage: "/og/educator-janvi.jpg",
    courses: [
      {
        slug: "interactive-speaking",
        title: "Interactive Speaking",
        href: "/course-interactive-speaking",
      },
    ],
    headline:
      "Runs the talk-first room: group discussions, role-plays and debates where every learner speaks English in every class.",
    bio: "Janvi B. is the co-educator for the Interactive Speaking Course at Learn With Smile. Her live online classes run on speaking time, not theory: group discussions (GD), role-plays, debates, extempore rounds and real-life conversations, with about 6 learners in a batch so nobody sits silent. She listens for the habits that stop Indian learners from speaking English fluently, like translating from the mother tongue in the head, long pauses, filler words and one-line answers, and corrects them in the moment with the better sentence to say instead. Learners leave her room able to join a discussion, hold an opinion in English and speak without freezing in interviews, meetings and everyday conversation.",
    background: [
      "Trained in the Learn With Smile live-class method",
      "Specialist in conversational fluency and public speaking",
      "Coaches college students, freshers and young professionals",
      "Mentored by lead educator Sunanda Dey",
    ],
    focus: [
      "Group discussion (GD) practice",
      "Role-plays for office, interview and daily life",
      "Fluency drills to beat hesitation",
      "Pronunciation, stress and intonation",
      "Debate, opinion and extempore English",
    ],
    promises: [
      "You speak in every single class",
      "Corrections given kindly, with the better sentence",
      "Weekly review of your Bolo speaking recordings",
      "The same teacher for your whole batch",
    ],
    languages: [
      { label: "English", code: "en-IN" },
      { label: "Hindi", code: "hi-IN" },
    ],
    icon: "mic",
    waMessage: "Hi, I want a free demo of the Interactive Speaking Course with Janvi.",
  },

  aryakanya: {
    id: "aryakanya",
    name: "Aryakanya H.",
    role: "Co-Educator · Basic Spoken English Course",
    jobTitle: "Co-Educator, Basic Spoken English",
    image: IMG.educatorAryakanya,
    ogImage: "/og/educator-aryakanya.jpg",
    courses: [
      {
        slug: "spoken-english",
        title: "Basic Spoken English",
        href: "/course-spoken-english",
      },
    ],
    headline:
      "Builds spoken English from zero for learners who understand English but go blank when it is time to speak.",
    bio: "Aryakanya H. teaches the Basic Spoken English Course at Learn With Smile, the starting point for beginners who can read English but struggle to speak it. She rebuilds the basics in the order you actually use them: everyday sentences, simple tenses used correctly, question forms, polite requests and the vocabulary for home, college, office, shopping and phone calls. Classes are live online with about 6 learners, so beginners get real speaking time instead of watching others talk. Her calm, step-by-step style works especially well for school and college students, homemakers and freshers speaking English for the first time, and quiet learners in her batches start answering in full sentences.",
    background: [
      "Trained in the Learn With Smile live-class method",
      "Specialist in spoken English for beginners",
      "Teaches students, homemakers and freshers across India",
      "Mentored by lead educator Sunanda Dey",
    ],
    focus: [
      "Spoken English for beginners",
      "Daily-use English sentences and conversation",
      "Basic grammar for speaking: tenses, questions, prepositions",
      "Vocabulary building and clear pronunciation",
      "Self-introduction and phone-call English",
    ],
    promises: [
      "No question is too basic to ask",
      "Speaking from the very first class",
      "Small steps you can see progress in, week by week",
      "The same teacher for your whole batch",
    ],
    languages: [
      { label: "English", code: "en-IN" },
      { label: "Hindi", code: "hi-IN" },
    ],
    icon: "messages",
    waMessage: "Hi, I want a free demo of the Basic Spoken English Course with Aryakanya.",
  },

  sneha: {
    id: "sneha",
    name: "Sneha C.",
    role: "Co-Educator · Spoken English in Hindi & Bengali",
    jobTitle: "Co-Educator, Hindi- and Bengali-medium Spoken English",
    image: IMG.educatorSneha,
    ogImage: "/og/educator-sneha.jpg",
    courses: [
      {
        slug: "spoken-english-hindi",
        title: "Basic Spoken English through Hindi",
        href: "/course-spoken-english-hindi",
      },
      {
        slug: "spoken-english-bengali",
        title: "Basic Spoken English through Bengali",
        href: "/course-spoken-english-bengali",
      },
    ],
    headline:
      "Explains in Hindi or Bengali when a rule doesn't land, then brings you straight back to speaking English.",
    bio: 'Sneha C. teaches Basic Spoken English for Hindi-medium and Bengali-medium learners at Learn With Smile. When a grammar rule or a word does not land in English, she explains it in Hindi or Bengali, then brings the class straight back to speaking English. That bridge is what lets learners from a vernacular-medium school stop translating in their head and start speaking English with confidence. Her live online batches of about 6 cover daily conversation, simple grammar, pronunciation and the exact mistakes Hindi and Bengali speakers make, such as mixing up he and she, "I am having" for "I have", and word-for-word translation. Spoken English in Hindi and spoken English in Bengali, taught by one teacher who speaks both.',
    background: [
      "Trained in the Learn With Smile live-class method",
      "Fluent in English, Hindi and Bengali",
      "Specialist in vernacular-medium learners",
      "Mentored by lead educator Sunanda Dey",
    ],
    focus: [
      "Spoken English in Hindi (हिंदी में स्पोकन इंग्लिश)",
      "Spoken English in Bengali (বাংলায় স্পোকেন ইংলিশ)",
      "Common mistakes of Hindi and Bengali speakers",
      "Daily conversation and basic grammar",
      "Confidence for first-time English speakers",
    ],
    promises: [
      "Doubts explained in Hindi or Bengali, practice in English",
      "No judgement for a vernacular-medium background",
      "Speaking from the very first class",
      "The same teacher for your whole batch",
    ],
    languages: [
      { label: "English", code: "en-IN" },
      { label: "Hindi", code: "hi-IN" },
      { label: "Bengali", code: "bn-IN" },
    ],
    icon: "languages",
    waMessage: "Hi, I want a free demo of Spoken English in Hindi/Bengali with Sneha.",
  },
};

/** Profile order on /educator: lead first, then co-educators by course level. */
export const EDUCATOR_ORDER: EducatorId[] = ["sunanda", "aryakanya", "sneha", "janvi"];

export const CO_EDUCATORS: Educator[] = EDUCATOR_ORDER.filter((id) => id !== "sunanda").map(
  (id) => EDUCATORS[id],
);

const BY_COURSE: Record<string, EducatorId> = {};
for (const e of Object.values(EDUCATORS)) for (const c of e.courses) BY_COURSE[c.slug] = e.id;

/** The educator who teaches a course, if the course has one assigned. */
export function educatorForCourse(slug: string): Educator | undefined {
  const id = BY_COURSE[slug];
  return id ? EDUCATORS[id] : undefined;
}

/** Anchor on /educator for one profile, e.g. `/educator#janvi`. */
export function educatorHref(e: Educator): string {
  return `/educator#${e.id}`;
}

/** Stable JSON-LD @id. Sunanda keeps the original `#person` so existing links resolve. */
export function educatorLdId(e: Educator): string {
  return e.id === "sunanda" ? `${abs("/educator")}#person` : `${abs("/educator")}#${e.id}`;
}

/** Full schema.org Person for an educator. */
export function educatorPersonLd(e: Educator): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": educatorLdId(e),
    name: e.name,
    jobTitle: e.jobTitle,
    description: `${e.role}. ${e.headline}`,
    image: abs(e.ogImage),
    url: abs(educatorHref(e)),
    knowsAbout: e.focus,
    knowsLanguage: e.languages.map((l) => l.code),
    worksFor: { "@id": `${SITE_URL}/#organization` },
    nationality: { "@type": "Country", name: "India" },
    ...(e.id === "sunanda"
      ? {}
      : { colleague: { "@id": educatorLdId(EDUCATORS.sunanda), name: EDUCATORS.sunanda.name } }),
  };
}
