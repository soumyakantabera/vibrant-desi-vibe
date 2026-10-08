import type { ArticleBody } from "@/content/blog/blocks";
import { admissionCaption, admissionShort } from "@/lib/fees";

type Faq = { q: string; a: string };

export type CityRecord = {
  slug: string;
  path: string;
  name: string;
  state: string;
  geoRegion: string;
  lat: string;
  lng: string;
  neighborhoods: string;
  commute: string;
  industries: string;
  medium: string;
  localRoom: string;
  title: string;
  description: string;
  /** City-specific sections, rendered after the short answer. */
  local: ArticleBody;
  /** City-specific questions, added after the shared ones. */
  localFaqs: Faq[];
};

/**
 * City pages are kept only where the page can say something specific to that
 * city. Ten template-only pages (same offer, same text, a different city name)
 * were retired in October 2026 — that pattern is what Google's doorway-page
 * policy targets. Their URLs redirect; see RETIRED_CITY_PATHS.
 */
export const CITIES: CityRecord[] = [
  {
    slug: "mumbai",
    path: "/spoken-english-classes-mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    geoRegion: "IN-MH",
    lat: "19.0760",
    lng: "72.8777",
    neighborhoods: "Andheri, Bandra, Thane, Navi Mumbai, Powai, Dadar",
    commute: "45–90 minutes on a local, each way, twice a week",
    industries: "finance, media, BPO, hospitality and startups",
    medium: "Hindi, Marathi or English-medium schooling",
    localRoom: "Dadar, Andheri or Thane classrooms of 25–40",
    title: "Spoken English Mumbai | Live, From ₹999",
    description:
      "Live online spoken English for Mumbai and Thane: banking, media, BPO and hospitality English. About 6 per batch, ₹999/month incl. taxes, IST batches.",
    local: [
      { t: "h2", text: "English at work in Mumbai" },
      {
        t: "p",
        text: "Mumbai English is fast and transactional. A relationship manager confirms a KYC document, a production coordinator chases a shoot schedule, a front desk handles a complaint at 11pm, an agent in Malad or Powai takes a UK or US call. The conversation does not wait while you translate in your head — so the practice has to be speaking at speed, not grammar worksheets.",
      },
      {
        t: "ul",
        items: [
          "**Banking, insurance and NBFC desks:** explain a product, a charge or a delay in plain English, without hiding behind jargon — and say what happens next.",
          "**Media, advertising and events:** briefs, call sheets and quick calls where the decision and the owner must be clear by the end.",
          "**Hospitality and retail:** greet, handle a complaint, and say no politely without sounding rude.",
          "**International processes (BPO/KPO):** accent is not the test. Clarity, empathy phrases and call control are. See [client-call English](/english-for-client-calls-india).",
        ],
      },
      { t: "h2", text: "Fitting class around a Mumbai day" },
      {
        t: "p",
        text: "A class you travel to competes with the local train for the same hours; an online one does not. Evening batches start after most commutes end, night batches suit late finishes, and afternoon batches suit retail, hospitality and shift staff. If your shift rotates, say so in the consultation and we place you where the timing holds.",
      },
      {
        t: "p",
        text: "**Language bridge.** Hindi works well as a bridge for most Mumbai learners: when a concept stalls, the teacher explains it in Hindi and you go straight back to English. Marathi is not used as a bridge — if Marathi is your only comfortable language, mention it in the consultation so we can judge the fit honestly.",
      },
    ],
    localFaqs: [
      {
        q: "Is there a batch that fits Mumbai local train timings?",
        a: "Yes. Evening batches start after most commutes end, night batches suit late finishes, and afternoon batches suit retail, hospitality and shift staff. Classes are live online, so there is no second commute for class.",
      },
      {
        q: "I work at a bank in Mumbai. Spoken English or Business English?",
        a: "If daily conversation is already fine but you freeze when explaining a product, a charge or a delay to a customer, take Business English (₹1,999/month, 3 months). If daily conversation itself is hard, start with Basic Spoken English (₹999/month, 6 months). Both are live, about 6 learners, inclusive of taxes.",
      },
    ],
  },
  {
    slug: "delhi",
    path: "/spoken-english-classes-delhi",
    name: "Delhi NCR",
    state: "Delhi",
    geoRegion: "IN-DL",
    lat: "28.6139",
    lng: "77.2090",
    neighborhoods: "Delhi, Gurugram, Noida, Ghaziabad, Faridabad",
    commute: "60–120 minutes on the ring road or metro, each way",
    industries: "IT, consulting, government-adjacent roles, BPO and startups",
    medium: "Hindi-medium or English-medium schooling",
    localRoom: "Karol Bagh, Connaught Place or Gurugram rooms of 25–40",
    title: "Spoken English Delhi NCR | Live From ₹999",
    description:
      "Live online spoken English for Delhi, Gurugram and Noida. Hindi-medium welcome; batches for office and shift workers. About 6 per batch, ₹999/month.",
    local: [
      { t: "h2", text: "English at work in Delhi NCR" },
      {
        t: "p",
        text: "NCR is three job markets in one. Gurugram runs on MNC offices and international voice and non-voice processes; Noida on IT services, media and product companies; Delhi on government-facing work, legal practice, retail and family business. Each needs a different kind of English, and a single 40-seat classroom rarely separates them.",
      },
      {
        t: "ul",
        items: [
          "**Gurugram international processes:** call opening, verification, empathy, escalation and a clean close — on a US or UK line.",
          "**Noida IT and media:** standups, status updates, written tickets and client demos. See [English for IT professionals](/english-for-it-professionals-india).",
          "**Delhi legal, government-facing and business roles:** formal emails, explaining a proposal clearly, and holding your ground with senior people in a meeting.",
          "**Job seekers:** HR rounds where “tell me about yourself” decides whether there is a next round. See [Interview Preparation](/course-interview-preparation).",
        ],
      },
      { t: "h2", text: "Hindi-medium in Delhi is the usual starting point" },
      {
        t: "p",
        text: "Many NCR learners studied in Hindi-medium schools and understand far more English than they can say. That gap is exactly what a small live batch closes: you already understand the question, so every class is spent getting your answer out in English. When a grammar point stalls, the teacher explains it in Hindi and you go back to English — the room never turns into a Hindi lecture.",
      },
      { t: "h2", text: "Timings for NCR schedules" },
      {
        t: "p",
        text: "Afternoon, evening and night batches, arranged around your schedule. If you work a US shift in Gurugram, an afternoon batch before the shift usually fits best; classes are recorded for revision, but the speaking only happens live, so pick a slot you can actually attend.",
      },
    ],
    localFaqs: [
      {
        q: "I work a night shift in Gurugram. Can I still join?",
        a: "Usually, yes — night-shift learners usually take an afternoon batch before the shift. Tell us your shift in the free consultation on WhatsApp and we suggest the slot that holds. Recordings help with revision, but speaking practice only happens in the live class.",
      },
      {
        q: "Is the fee different for Gurugram or Noida?",
        a: "No. Basic Spoken English is ₹999/month inclusive of taxes for every learner in India, whether you join from Delhi, Gurugram, Noida, Ghaziabad or Faridabad. Batches are about 6 learners.",
      },
    ],
  },
  {
    slug: "bengaluru",
    path: "/spoken-english-classes-bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    geoRegion: "IN-KA",
    lat: "12.9716",
    lng: "77.5946",
    neighborhoods: "Whitefield, Koramangala, Indiranagar, Electronic City, HSR, Jayanagar",
    commute: "60–90 minutes across the city for a 60-minute class",
    industries: "IT product, services, startups and GCCs",
    medium: "Kannada, Hindi or English-medium schooling",
    localRoom: "Koramangala or Indiranagar classrooms of 25–40",
    title: "Spoken English Bengaluru | Live From ₹999",
    description:
      "Live spoken English for Bengaluru IT and GCC teams: standups, client calls and interviews. About 6 per batch, ₹999/month incl. taxes, IST batches.",
    local: [
      { t: "h2", text: "English at work in Bengaluru" },
      {
        t: "p",
        text: "In Bengaluru the problem is rarely vocabulary. Engineers, analysts and support staff read and write English all day. The freeze comes in the spoken moments: the daily standup, the demo to a client in another time zone, the one-on-one with a manager, the appraisal conversation where you need to say what you did without underselling it.",
      },
      {
        t: "ul",
        items: [
          "**Standups:** yesterday, today, blocker — in under a minute, without reading from notes.",
          "**Client calls with US, UK or European teams:** confirm requirements, push back on scope politely, and summarise next steps before the call ends.",
          "**GCC roles:** speak up in meetings where the decision-makers are abroad and the call moves fast.",
          "**Switching jobs:** product companies often add a managerial or culture round where communication is assessed directly. See [Interview Preparation](/course-interview-preparation).",
        ],
      },
      { t: "h2", text: "A note on language for Bengaluru learners" },
      {
        t: "p",
        text: "Bengaluru rooms draw people from every state. When a concept stalls, the teacher can bridge in Hindi or Bengali; Kannada, Tamil, Telugu and Malayalam are not used as bridges. If you are comfortable in neither Hindi nor Bengali, that is often fine for [Interactive Speaking](/course-interactive-speaking) or [Business English](/course-business-english), where you already have the English and the work is fluency — say so in the consultation and we will advise honestly.",
      },
      { t: "h2", text: "Timings for tech schedules" },
      {
        t: "p",
        text: "Afternoon, evening or night batches — pick the one that misses your standups and client calls. Release weeks happen; classes are recorded so a missed session can be revised, and rescheduling can be requested within the same week, subject to slot availability.",
      },
    ],
    localFaqs: [
      {
        q: "I can write English but freeze in standups. Which course?",
        a: "If you know the words but they do not come out under pressure, Interactive Speaking (₹1,199/month, 3 months) trains speaking on the spot. If the freeze is specifically in meetings and client calls, Business English (₹1,999/month, 3 months). Both live, about 6 learners, inclusive of taxes.",
      },
      {
        q: "I don't speak Hindi. Can I still join from Bengaluru?",
        a: "Often, yes. Classes run in English; Hindi or Bengali is only used briefly when a concept stalls. If your English is already working-level, Interactive Speaking or Business English rarely needs a bridge. Tell us in the free consultation and we will say honestly whether a batch fits.",
      },
    ],
  },
  {
    slug: "hyderabad",
    path: "/spoken-english-classes-hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    geoRegion: "IN-TS",
    lat: "17.3850",
    lng: "78.4867",
    neighborhoods: "HITEC City, Gachibowli, Madhapur, Secunderabad, Kukatpally",
    commute: "an Outer Ring Road hop that turns a 60-minute class into a three-hour evening",
    industries: "IT, pharma, GCCs and customer support",
    medium: "Telugu, Hindi, Urdu or English-medium schooling",
    localRoom: "Ameerpet or Madhapur classrooms of 25–40",
    title: "Spoken English Hyderabad | Live From ₹999",
    description:
      "Live spoken English for Hyderabad: HITEC City IT, pharma and support roles. About 6 per batch, ₹999/month inclusive of taxes, IST batches.",
    local: [
      { t: "h2", text: "English at work in Hyderabad" },
      {
        t: "p",
        text: "Hyderabad's jobs cluster in a few places — IT services and GCCs around HITEC City, Gachibowli and Madhapur; pharma and life sciences; and large customer-support operations. Each has a recognisable English moment, and most learners arrive knowing exactly which one costs them.",
      },
      {
        t: "ul",
        items: [
          "**IT and GCC teams:** standups, client calls and status updates to managers abroad.",
          "**Pharma and life sciences:** explaining a procedure or a problem clearly to reviewers or clients outside India, then writing it up in plain English.",
          "**Customer support:** clarity, empathy phrases, and closing a call with a clear next step.",
          "**Freshers after a technical course:** the skills are there, but the HR round goes silent. See [spoken English for freshers](/spoken-english-for-freshers-india).",
        ],
      },
      { t: "h2", text: "Language bridge in Hyderabad" },
      {
        t: "p",
        text: "Many Hyderabad learners are comfortable in Hindi or Hindustani as well as Telugu, so the short Hindi explanation the teacher uses when a concept stalls often works here. Telugu is not used as a bridge. If Hindi is difficult for you, mention it in the consultation and we will tell you honestly whether a batch fits.",
      },
      { t: "h2", text: "Timings for Hyderabad schedules" },
      {
        t: "p",
        text: "Afternoon, evening and night batches. Support and GCC staff on rotational shifts can pick the slot that fits the roster — tell us your roster in the consultation.",
      },
    ],
    localFaqs: [
      {
        q: "I work in pharma in Hyderabad. Which course helps with audits and client calls?",
        a: "If everyday conversation is fine and the difficulty is explaining work clearly in meetings, calls and emails, Business English (₹1,999/month, 3 months). If you hesitate even in daily conversation, start with Basic Spoken English (₹999/month). Both live, about 6 learners, inclusive of taxes. We teach communication, not regulatory content.",
      },
      {
        q: "Is the Hindi bridge a problem if I mainly speak Telugu?",
        a: "Not necessarily. Classes run in English and the Hindi explanation is brief. If your English is already working-level, Interactive Speaking or Business English rarely needs it. Tell us in the free consultation and we will say honestly whether a batch fits.",
      },
    ],
  },
];

/**
 * Retired city pages → where their URLs now point. scripts/prerender.mjs writes
 * a static redirect (meta refresh + canonical) at each old path, because GitHub
 * Pages cannot send a 301. Kept out of ALL_PATHS, the sitemap and llms files.
 */
export const RETIRED_CITY_REDIRECT = "/best-online-spoken-english-classes-india";
export const RETIRED_CITY_PATHS = [
  "/spoken-english-classes-pune",
  "/spoken-english-classes-chennai",
  "/spoken-english-classes-ahmedabad",
  "/spoken-english-classes-nagpur",
  "/spoken-english-classes-surat",
  "/spoken-english-classes-coimbatore",
  "/spoken-english-classes-kochi",
  "/spoken-english-classes-visakhapatnam",
  "/spoken-english-classes-patna",
  "/spoken-english-classes-guwahati",
] as const;

export const CITY_PATHS: Record<string, string> = {
  Kolkata: "/spoken-english-classes-kolkata",
  Delhi: "/spoken-english-classes-delhi",
  Mumbai: "/spoken-english-classes-mumbai",
  Bengaluru: "/spoken-english-classes-bengaluru",
  Hyderabad: "/spoken-english-classes-hyderabad",
};

/** Footer + coverage chips. Kolkata is a custom page, not in CITIES. */
export const FOOTER_CITIES: { to: string; label: string }[] = [
  { to: "/spoken-english-classes-kolkata", label: "Kolkata" },
  ...CITIES.map((c) => ({ to: c.path, label: c.name })),
];

export function getCity(slug: string): CityRecord {
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) throw new Error(`Unknown city slug: ${slug}`);
  return city;
}

export function cityFaqs(city: CityRecord): Faq[] {
  return [
    {
      q: `Where in ${city.name} are your spoken English classes held?`,
      a: `Not in a ${city.name} classroom — every class for ${city.name} learners is live online. Our registered office is in Kolkata. Learners join from ${city.neighborhoods}; batch timings are IST and flexible.`,
    },
    {
      q: `How much do spoken English classes cost in ${city.name}?`,
      a: `Offline centres in ${city.name} generally charge ₹1,500–₹6,000 for a 3-month spoken English course, often in batches of 25–40. Learn With Smile charges ₹999 per month for Basic Spoken English in a batch of approximately 6 learners, inclusive of taxes, ${admissionShort()}. The fee is the same in ${city.name} as in Kolkata or Kochi.`,
    },
    {
      q: `Can the teacher explain if I studied in ${city.medium}?`,
      a: `Yes. Instruction is in English and practice stays in English. When a concept is not landing, the teacher explains in Hindi or Bengali (and then you go back to English). ${city.medium} decided how much English you heard in school. It did not decide whether you can run a standup at 28.`,
    },
    {
      q: `What batch timings work with a ${city.name} job?`,
      a: `Afternoon, evening and night batches (IST), arranged around your working hours. Every class is recorded, so a missed session because of a release or a shift does not wipe the week. Message anytime; we reply 10am–midnight IST every day.`,
    },
    {
      q: `Is online better than a coaching centre in ${city.name}?`,
      a: `For speaking minutes, usually yes. ${city.localRoom} cannot give each learner more than a minute or two per class. A live batch of around 6 gives roughly 8–10 minutes. You also save ${city.commute}. What an offline centre does better is peer energy in the same room. We replace that with debates, prompts and a WhatsApp batch group.`,
    },
    ...city.localFaqs,
  ];
}

export function cityBody(city: CityRecord): ArticleBody {
  return [
    {
      t: "p",
      text: `**Short answer.** Spoken English classes in ${city.name} do not have to mean ${city.commute}. Learn With Smile is live online: approximately 6 learners, ₹999/month inclusive of taxes, afternoon / evening / night IST. Learners join from ${city.neighborhoods}. The office is in Kolkata; it is not a walk-in campus.`,
    },
    ...city.local,
    { t: "h2", text: `Why ${city.name} learners take this online` },
    {
      t: "p",
      text: `${city.name} has no shortage of classrooms. The shortage is **minutes you speak**. A room of 25–40 — ${city.localRoom} — sounds like a class and behaves like a lecture. In a 60-minute hour you often wait a week for the mic. In a batch of around 6 you speak every hour. That is the product. See the arithmetic in [speaking minutes](/blog/speaking-minutes-in-a-60-minute-class).`,
    },
    {
      t: "ul",
      items: [
        `**Commute.** ${city.commute} is longer than the class.`,
        `**Industry English.** ${city.industries} need names, numbers and a next step — not a fake accent. That is [client-call English](/english-for-client-calls-india) and [Business English](/workplace-english-course-online-india).`,
        `**School medium.** ${city.medium} is not a wall. [Hindi- and Bengali-medium learners](/english-hindi-bengali-medium) are the majority of our rooms.`,
      ],
    },
    { t: "h2", text: "Fees, in full" },
    {
      t: "table",
      caption: `Same pan-India fees. ${admissionCaption()} ${city.name} is not a different price list.`,
      head: ["Course", "Duration", "Fee"],
      rows: [
        ["Basic Spoken English", "6 months, ~6 learners", "₹999/month"],
        ["Interactive Speaking", "3 months", "₹1,199/month"],
        ["Business English", "3 months", "₹1,999/month"],
        ["Interview Preparation", "2 months, ~6 learners", "₹1,999/month"],
      ],
    },
    {
      t: "p",
      text: `Market bands for ${city.name} offline rooms are in the [India fees guide](/english-class-fees-india). Confirm any other provider on their site before you pay.`,
    },
    { t: "h2", text: "What we do not claim" },
    {
      t: "ul",
      items: [
        "No classroom in " + city.name + " — every class is live online.",
        "No certificate. Indian interviews hear you. Visas read an exam board score — sit IELTS with the test board when a form asks; we do not sell that paper.",
        "No 30-day fluency from zero. Everyday conversation is about 6 months of live practice. [How long it takes](/how-long-to-learn-spoken-english).",
      ],
    },
    {
      t: "cta",
      text: `Sit in the next ${city.name} IST slot. Approx. 6 learners. From ₹999/mo, inclusive of taxes.`,
      course: "/free-consultation",
      label: "Get Free Consultation",
    },
  ];
}
