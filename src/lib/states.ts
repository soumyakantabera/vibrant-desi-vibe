/**
 * State pages (November 2026): ten states chosen from ~120 live searches,
 * plus Tamil Nadu and Assam & the North-East (added 4 Nov 2026) —
 * research_notes/india-state-seo-geo-research-nov-2026.md §6.
 *
 * Each page must only make sense for its own state (the doorway test): real
 * cities, languages, job and study hubs, local price ranges seen in public
 * listings, and the medium we teach in there. We have one office (Kolkata);
 * classes are live online — no branches are implied anywhere.
 */
import type { NeedKey } from "@/lib/needs";

export type StateMedium = "hindi" | "marathi" | "english";

export type StateInfo = {
  slug: string;
  path: string;
  name: string;
  geoRegion: string;
  cities: string[];
  /** Localities people search "classes near me" from. No classroom there —
   *  the page says so and offers the live online batch instead. */
  localities: { city: string; areas: string[] }[];
  languages: string;
  /** The teaching medium we lead with here. */
  medium: StateMedium;
  intro: string;
  /** Where each need shows up locally. */
  hubs: { need: NeedKey; where: string }[];
  /** Typical local options and price ranges seen in public listings (Nov 2026). */
  prices: { what: string; range: string }[];
  /** Facts that only fit this state. */
  facts: string[];
  faqs: { q: string; a: string }[];
  title: string;
  description: string;
  keywords: string[];
  /** Page written or last changed on a different day from the original ten. */
  updated?: string;
};

const S = (slug: string) => `/spoken-english-classes-${slug}`;

export const STATES: StateInfo[] = [
  {
    slug: "maharashtra",
    path: S("maharashtra"),
    name: "Maharashtra",
    geoRegion: "IN-MH",
    cities: [
      "Pune",
      "Mumbai",
      "Thane",
      "Nagpur",
      "Nashik",
      "Chh. Sambhajinagar",
      "Kolhapur",
      "Solapur",
    ],
    localities: [
      {
        city: "Pune",
        areas: [
          "Kothrud",
          "Hinjewadi",
          "Wakad",
          "Baner",
          "Hadapsar",
          "Viman Nagar",
          "Pimpri-Chinchwad",
        ],
      },
      { city: "Mumbai", areas: ["Andheri", "Dadar", "Borivali", "Thane", "Vashi (Navi Mumbai)"] },
      { city: "Nagpur", areas: ["Dharampeth", "Sadar", "Ramdaspeth"] },
      { city: "Nashik", areas: ["College Road", "Gangapur Road", "Panchavati"] },
    ],
    languages: "Marathi, Hindi, English",
    medium: "marathi",
    intro:
      "Marathi-medium graduates in Pune, Mumbai and the MIDC belts often know the answer and still freeze in an English interview. Live, small-batch English taught by a Marathi-speaking teacher was hard to find in our November 2026 research — we teach it.",
    hubs: [
      { need: "it", where: "Pune (Hinjewadi, Kharadi, Magarpatta), Mumbai and Thane IT parks" },
      {
        need: "bpo",
        where: "Pune and Navi Mumbai voice processes — many ask for English and Marathi",
      },
      { need: "analyst", where: "Mumbai BFSI and Pune GCCs" },
      { need: "bank", where: "Mumbai head offices; PO aspirants statewide" },
      {
        need: "campus",
        where: "Pune, Nagpur and Kolhapur colleges; placements and higher studies",
      },
    ],
    prices: [
      { what: "Offline classes, Nashik / Nagpur", range: "₹3,000–₹10,000 a month" },
      { what: "Live online chain course", range: "from ₹7,500 a course" },
      { what: "1:1 practice apps", range: "₹2,700 for 25 short sessions" },
      { what: "Premium brands (Mumbai)", range: "₹8,800–₹16,000 a module" },
    ],
    facts: [
      "Marathi is India's third-largest mother tongue (8.3 crore speakers, Census 2011).",
      "Google AI Mode answers in Marathi since October 2025 — this page has a Marathi section for that reason.",
      "Many Pune voice-process roles ask for English and Marathi together.",
    ],
    faqs: [
      {
        q: "Is there a spoken English class in Maharashtra taught in Marathi?",
        a: "Yes. Learn With Smile's Basic Spoken English — Marathi to English is taught live online by a Marathi-speaking teacher, in a batch of about 6: hard ideas explained in Marathi, speaking practice in English. 6 months, ₹999/month inclusive of taxes, with daily practice in the Bolo app. Attend from Pune, Mumbai, Nagpur, Nashik or anywhere. Message us on WhatsApp.",
      },
      {
        q: "What do spoken English classes cost in Pune or Mumbai?",
        a: "Public listings we checked in November 2026 show offline classes at roughly ₹3,000–₹10,000 a month in tier-2 cities, live online chain courses from about ₹7,500, and premium brands at ₹8,800–₹16,000 a module in Mumbai. Learn With Smile is ₹999/month for Basic Spoken English, including live classes, the Bolo practice app and a weekly teacher review.",
      },
    ],
    title: "Spoken English Classes in Maharashtra | Marathi Medium",
    description:
      "Live online spoken English for Pune, Nagpur, Nashik and all of Maharashtra — taught by a Marathi-speaking teacher, about 6 per batch, ₹999/month incl. taxes.",
    keywords: [
      "spoken english classes maharashtra",
      "spoken english classes pune online",
      "english speaking course nashik online",
      "marathi medium english speaking class",
      "english speaking class nagpur online",
    ],
  },
  {
    slug: "uttar-pradesh",
    path: S("uttar-pradesh"),
    name: "Uttar Pradesh",
    geoRegion: "IN-UP",
    cities: ["Lucknow", "Noida", "Ghaziabad", "Kanpur", "Varanasi", "Prayagraj", "Agra", "Meerut"],
    localities: [
      { city: "Lucknow", areas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar"] },
      { city: "Noida", areas: ["Sector 18", "Sector 62", "Greater Noida West"] },
      { city: "Kanpur", areas: ["Swaroop Nagar", "Kakadeo", "Mall Road"] },
      { city: "Varanasi", areas: ["Lanka", "Sigra"] },
      { city: "Prayagraj", areas: ["Civil Lines", "Katra", "George Town"] },
    ],
    languages: "Hindi, Urdu, English",
    medium: "hindi",
    intro:
      "From Noida's voice processes to Lucknow's colleges, the jobs ask for 'good English communication' — and most learners think in Hindi. In our research no Lucknow seller said they teach live in Hindi; we do.",
    hubs: [
      {
        need: "bpo",
        where:
          "Noida and Greater Noida BPO, KYC and telecaller roles (many open to 12th-pass freshers)",
      },
      { need: "it", where: "Noida Sectors 62/63 and the Expressway IT parks" },
      { need: "govt", where: "UPSC and UPPSC aspirants in Prayagraj and Lucknow" },
      { need: "bank", where: "Bank PO aspirants statewide" },
      { need: "campus", where: "Lucknow, Kanpur, Varanasi and Prayagraj universities" },
    ],
    prices: [
      { what: "Offline classes, Kanpur / Prayagraj / Varanasi", range: "₹2,500–₹10,000 a month" },
      { what: "Hybrid / offline, Lucknow (Gomti Nagar, Hazratganj)", range: "₹3,000–₹10,000" },
      { what: "1:1 practice apps", range: "₹2,700 for 25 short sessions" },
      { what: "Native-speaker apps", range: "around ₹8,500 a month" },
    ],
    facts: [
      "UP converted 15,000 government schools to English medium and added English-speaking modules to skill training for rural youth.",
      "Hindi is spoken by 52.8 crore people as a mother tongue (Census 2011).",
      "Noida voice roles often ask for English together with Hindi.",
    ],
    faqs: [
      {
        q: "Is there a live spoken English class in Hindi for UP learners?",
        a: "Yes. Basic Spoken English — Hindi to English is taught live online by a Hindi-speaking teacher, about 6 learners per batch, 6 months, ₹999/month inclusive of taxes, with daily practice in the Bolo app. Learners join from Lucknow, Noida, Kanpur, Varanasi, Prayagraj and across UP. Message us on WhatsApp.",
      },
      {
        q: "Which English course helps for Noida BPO jobs?",
        a: "If you cannot yet hold a simple conversation, start with Basic Spoken English — Hindi to English (₹999/month). If you speak but freeze, Interactive Speaking (₹1,599/month). Our guide to BPO English explains the voice round and spoken tests.",
      },
    ],
    title: "Spoken English Classes in Uttar Pradesh | Hindi Medium",
    description:
      "Live online spoken English for Lucknow, Noida, Kanpur and all of UP — taught by a Hindi-speaking teacher, about 6 per batch, daily practice app, ₹999/month.",
    keywords: [
      "spoken english classes lucknow online",
      "spoken english classes uttar pradesh",
      "english speaking course noida online",
      "hindi medium english speaking class up",
      "english speaking class kanpur online",
    ],
  },
  {
    slug: "bihar",
    path: S("bihar"),
    name: "Bihar",
    geoRegion: "IN-BR",
    cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia"],
    localities: [
      { city: "Patna", areas: ["Boring Road", "Kankarbagh", "Rajendra Nagar", "Bailey Road"] },
      { city: "Gaya", areas: ["Civil Lines"] },
      { city: "Muzaffarpur", areas: ["Juran Chhapra"] },
      { city: "Bhagalpur", areas: ["Tilka Manjhi"] },
    ],
    languages: "Hindi, Bhojpuri, Maithili, Magahi, Urdu, English",
    medium: "hindi",
    intro:
      "Many learners from Bihar move to Delhi, Pune or Bengaluru for work, where English is the neutral language at the office. Searching in Hindi for a live Hindi-medium English class in Patna returned no institute at all in our research — only recorded courses.",
    hubs: [
      { need: "govt", where: "Patna's UPSC / BPSC aspirants" },
      { need: "bank", where: "Bank PO and clerk aspirants statewide" },
      { need: "bpo", where: "Jobs in Delhi NCR, Pune, Bengaluru after migrating" },
      { need: "campus", where: "Patna University, colleges in Gaya, Muzaffarpur, Bhagalpur" },
    ],
    prices: [
      { what: "Offline classes, Patna (Boring Road, Kankarbagh)", range: "₹2,000–₹7,000 a month" },
      { what: "Live online chain course", range: "from ₹7,500" },
      { what: "Private tutors, Patna", range: "about ₹814 an hour" },
    ],
    facts: [
      "The British Council surveyed 1,949 people in Patna, Bhojpur and West Champaran on English as aspiration and status.",
      "Bengaluru is the main hub for interstate workers in Karnataka, most from Bihar, Jharkhand and four other states.",
      "Hindi-medium learners here are the exact audience for a Hindi-medium English class.",
    ],
    faqs: [
      {
        q: "Is there a spoken English class in Hindi for Bihar students?",
        a: "Yes. Basic Spoken English — Hindi to English is taught live online by a Hindi-speaking teacher: about 6 learners, 6 months, ₹999/month inclusive of taxes, with daily Bolo practice and a weekly teacher review. Join from Patna, Gaya, Muzaffarpur or wherever you work. Message us on WhatsApp.",
      },
      {
        q: "I'm moving from Bihar to Delhi or Bengaluru for work. Which course?",
        a: "Start with Basic Spoken English — Hindi to English if full sentences are hard; Interactive Speaking (₹1,599/month) if you already speak and need meetings and calls. Classes are online, so you keep the same teacher when you move.",
      },
    ],
    title: "Spoken English Classes in Bihar | Hindi Medium, Live",
    description:
      "Live online spoken English for Patna, Gaya, Muzaffarpur and all of Bihar — Hindi-speaking teacher, about 6 per batch, daily practice in the Bolo app, ₹999/month.",
    keywords: [
      "spoken english classes patna online",
      "spoken english classes bihar",
      "english speaking course in hindi bihar",
      "hindi medium english class patna",
    ],
  },
  {
    slug: "delhi-ncr",
    path: S("delhi-ncr"),
    name: "Delhi NCR",
    geoRegion: "IN-DL",
    cities: ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "Greater Noida"],
    localities: [
      {
        city: "Delhi",
        areas: [
          "Laxmi Nagar",
          "Mukherjee Nagar",
          "Old Rajinder Nagar",
          "Rajouri Garden",
          "Dwarka",
          "Rohini",
          "Saket",
        ],
      },
      { city: "Gurugram", areas: ["Cyber City", "Sohna Road", "DLF Phase 3"] },
      { city: "Noida", areas: ["Sector 62", "Sector 18"] },
      { city: "Ghaziabad", areas: ["Indirapuram", "Vaishali"] },
      { city: "Faridabad", areas: ["Sector 15"] },
    ],
    languages: "Hindi, Punjabi, Urdu, English",
    medium: "hindi",
    intro:
      "Delhi NCR led India's fresher hiring in August 2026 (19% share). Working people here rarely make a fixed 7 PM batch — evening and night slots and a practice app that fits around shifts matter more than a classroom nearby.",
    hubs: [
      { need: "it", where: "Gurugram Cyber City, Noida Sectors 62/63 and the Expressway GCCs" },
      { need: "bpo", where: "Gurugram and Noida voice and international processes" },
      { need: "analyst", where: "Gurugram consulting, fintech and analytics firms" },
      { need: "govt", where: "Delhi's UPSC coaching belt (Mukherjee Nagar, Old Rajinder Nagar)" },
      { need: "campus", where: "DU, IP and NCR engineering colleges" },
    ],
    prices: [
      { what: "1:1 practice apps", range: "₹2,700 for 25 short sessions" },
      { what: "Fixed-schedule online classes", range: "about ₹4,890 a month (20 sessions)" },
      { what: "Live online chain course", range: "from ₹7,500" },
      { what: "Native-speaker apps", range: "about ₹800–₹1,500 a session" },
    ],
    facts: [
      "Delhi NCR had 19% of India's fresher hiring in August 2026, ahead of Bengaluru, Mumbai and Pune.",
      "Many learners here pair an app with live practice; we put both in one fee.",
      "Night slots matter: shifts and late releases rule out fixed early-evening batches.",
    ],
    faqs: [
      {
        q: "Which spoken English class suits working professionals in Delhi NCR?",
        a: "Learn With Smile runs live online batches of about 6 in afternoon, evening and night IST slots, plus the Bolo app for daily practice between classes. Interactive Speaking (₹1,599/month) for meetings and calls; Basic Spoken English — Hindi to English (₹999/month) if you are starting out.",
      },
      {
        q: "Is there a Hindi-medium spoken English class in Delhi?",
        a: "Yes — Basic Spoken English — Hindi to English, taught live online by a Hindi-speaking teacher, ₹999/month inclusive of taxes. You attend from anywhere in NCR; no commute.",
      },
    ],
    title: "Spoken English Classes in Noida, Gurugram & NCR",
    description:
      "Live online spoken English for Noida, Gurugram, Ghaziabad and Faridabad — Hindi-speaking teacher, night slots, about 6 per batch, ₹999/month incl. taxes.",
    keywords: [
      "spoken english classes noida",
      "english speaking course gurugram",
      "spoken english classes ghaziabad online",
      "english speaking class faridabad",
    ],
  },
  {
    slug: "madhya-pradesh",
    path: S("madhya-pradesh"),
    name: "Madhya Pradesh",
    geoRegion: "IN-MP",
    cities: ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain"],
    localities: [
      { city: "Indore", areas: ["Vijay Nagar", "Palasia", "Bhawarkua"] },
      { city: "Bhopal", areas: ["MP Nagar", "Arera Colony"] },
      { city: "Gwalior", areas: ["City Centre"] },
      { city: "Jabalpur", areas: ["Wright Town", "Napier Town"] },
    ],
    languages: "Hindi, English",
    medium: "hindi",
    intro:
      "In MP, many local centres teach English grammar in Hindi for competitive exams — and very little speaking. Learners can write the rule and still cannot say the sentence. We fix the speaking.",
    hubs: [
      { need: "it", where: "Indore's IT parks and Super Corridor" },
      { need: "govt", where: "MPPSC and UPSC aspirants in Indore and Bhopal" },
      { need: "bank", where: "Bank PO aspirants statewide" },
      { need: "campus", where: "Indore, Bhopal, Gwalior and Jabalpur colleges" },
    ],
    prices: [
      { what: "Offline classes, Indore", range: "₹3,500–₹10,000 a month" },
      { what: "Offline classes, Gwalior", range: "₹2,500–₹8,000 a month" },
      { what: "University certificate course, Bhopal", range: "about ₹3,600" },
      { what: "Private tutors, MP", range: "about ₹708 an hour" },
    ],
    facts: [
      "Jabalpur centres mostly teach grammar in Hindi for written exams, with little conversation practice (local guide, 2026).",
      "Hindi-dominant daily life makes practice partners rare — daily app practice fills that gap.",
    ],
    faqs: [
      {
        q: "Is there a Hindi-medium spoken English class for Indore or Bhopal?",
        a: "Yes. Basic Spoken English — Hindi to English is taught live online by a Hindi-speaking teacher: about 6 learners, ₹999/month inclusive of taxes, daily practice in the Bolo app. Join from Indore, Bhopal, Gwalior, Jabalpur or anywhere in MP.",
      },
      {
        q: "I know grammar from exam prep but can't speak. Which course?",
        a: "If basic sentences work, Intermediate Spoken English (₹1,999/month, 30 min grammar + 1 hr speaking every class). If you freeze, Interactive Speaking (₹1,599/month). If full sentences are hard, Basic Spoken English — Hindi to English.",
      },
    ],
    title: "Spoken English Classes in Madhya Pradesh | Hindi Medium",
    description:
      "Live online spoken English for Indore, Bhopal, Gwalior and Jabalpur — speaking practice, not just grammar. Hindi-speaking teacher, about 6 per batch, ₹999/month.",
    keywords: [
      "spoken english classes indore online",
      "spoken english classes bhopal",
      "english speaking course madhya pradesh",
      "hindi medium english speaking class indore",
    ],
  },
  {
    slug: "rajasthan",
    path: S("rajasthan"),
    name: "Rajasthan",
    geoRegion: "IN-RJ",
    cities: ["Jaipur", "Jodhpur", "Kota", "Udaipur", "Ajmer", "Bikaner"],
    localities: [
      {
        city: "Jaipur",
        areas: ["Tonk Road", "C-Scheme", "Malviya Nagar", "Mansarovar", "Vaishali Nagar"],
      },
      { city: "Kota", areas: ["Talwandi", "Rajeev Gandhi Nagar"] },
      { city: "Udaipur", areas: ["Sukhadia Circle", "Chetak Circle"] },
      { city: "Jodhpur", areas: ["Sardarpura", "Paota"] },
    ],
    languages: "Hindi, Rajasthani, English",
    medium: "hindi",
    intro:
      "Rajasthan's learners are often told an app is 'best for Hindi-medium beginners' — then find it teaches only in English. Our Hindi-medium course has a Hindi-speaking teacher who explains when you are stuck.",
    hubs: [
      { need: "campus", where: "Kota and Jaipur students, placements and admission interviews" },
      { need: "govt", where: "RPSC and UPSC aspirants in Jaipur" },
      { need: "bank", where: "Bank PO aspirants statewide" },
      { need: "bpo", where: "Jaipur voice processes and jobs in NCR" },
    ],
    prices: [
      { what: "Offline classes, Jaipur (Tonk Road, C-Scheme)", range: "₹2,000–₹10,000 a month" },
      { what: "Offline classes, Jodhpur / Udaipur", range: "₹2,500–₹8,000 a month" },
      { what: "Live online chain course", range: "from ₹7,500" },
      { what: "Private tutors, Kota", range: "about ₹602 an hour" },
    ],
    facts: [
      "Kota's student population makes admission-interview and placement English a real need.",
      "Local listings are mostly offline; live online Hindi-medium options were scarce in our research.",
    ],
    faqs: [
      {
        q: "Is there a live English speaking class in Hindi for Jaipur?",
        a: "Yes. Basic Spoken English — Hindi to English: a Hindi-speaking teacher, about 6 learners, live online, ₹999/month inclusive of taxes, daily Bolo practice. Join from Jaipur, Jodhpur, Kota, Udaipur or anywhere.",
      },
    ],
    title: "Spoken English Classes in Rajasthan | Hindi Medium",
    description:
      "Live online spoken English for Jaipur, Jodhpur, Kota and Udaipur — Hindi-speaking teacher, about 6 per batch, daily practice in the Bolo app, ₹999/month incl. taxes.",
    keywords: [
      "spoken english classes jaipur online",
      "spoken english classes rajasthan",
      "english speaking course kota students",
      "hindi medium english speaking class jaipur",
    ],
  },
  {
    slug: "karnataka",
    path: S("karnataka"),
    name: "Karnataka",
    geoRegion: "IN-KA",
    cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    localities: [
      {
        city: "Bengaluru",
        areas: [
          "Koramangala",
          "Indiranagar",
          "Whitefield",
          "Electronic City",
          "Marathahalli",
          "HSR Layout",
          "BTM Layout",
          "Jayanagar",
        ],
      },
      { city: "Mysuru", areas: ["Vijayanagar", "Kuvempunagar"] },
      { city: "Mangaluru", areas: ["Hampankatta"] },
      { city: "Hubballi", areas: ["Vidyanagar"] },
    ],
    languages: "Kannada, English, Hindi (widely spoken by migrants)",
    medium: "english",
    intro:
      "In Bengaluru, English is the office language and about 44% of the city are migrants. Kannada-medium graduates and Hindi-speaking newcomers both need workplace English — for GCC interviews, standups and client calls.",
    hubs: [
      { need: "it", where: "Bengaluru's Whitefield, Electronic City, Outer Ring Road GCCs" },
      { need: "analyst", where: "Bengaluru analytics and product companies" },
      { need: "bpo", where: "Bengaluru and Mysuru voice processes" },
      { need: "campus", where: "Engineering colleges across the state" },
    ],
    prices: [
      { what: "Classroom, 3 months (budget)", range: "about ₹5,000" },
      { what: "Live online chain course", range: "from ₹7,500" },
      { what: "Premium brands (Koramangala, Indiranagar)", range: "₹8,000–₹20,000 a month" },
      { what: "Private tutors, Hubballi / Mangaluru", range: "₹500–₹750 an hour" },
    ],
    facts: [
      "About 44% of Bengaluru's population are migrants (Census 2011).",
      "GCC fresher drives test English communication in the first round.",
      "Hindi-speaking newcomers can take the Hindi-medium course and keep the same teacher online.",
    ],
    faqs: [
      {
        q: "Which English course helps for Bengaluru GCC and IT interviews?",
        a: "Interactive Speaking (3 months, ₹1,599/month) for standups, demos and client calls; Interview Preparation (2 months, ₹2,499/month) for the interview itself. Live online batches of about 6, with the Bolo app for daily practice.",
      },
      {
        q: "I moved to Bengaluru from a Hindi-speaking state. Is there a Hindi-medium option?",
        a: "Yes — Basic Spoken English — Hindi to English, taught by a Hindi-speaking teacher, ₹999/month inclusive of taxes.",
      },
    ],
    title: "Spoken English Classes in Karnataka | Mysuru & Mangaluru",
    description:
      "Live online spoken English across Karnataka — Mysuru, Mangaluru, Hubballi, Belagavi. Interviews and client calls, about 6 per batch, ₹999/month incl. taxes.",
    keywords: [
      "spoken english classes karnataka",
      "spoken english classes mysore online",
      "english speaking course mangalore",
      "english speaking class hubli online",
    ],
  },
  {
    slug: "telangana",
    path: S("telangana"),
    name: "Telangana",
    geoRegion: "IN-TG",
    cities: ["Hyderabad", "Secunderabad", "Warangal", "Karimnagar"],
    localities: [
      {
        city: "Hyderabad",
        areas: [
          "Ameerpet",
          "Himayatnagar",
          "Dilsukhnagar",
          "Kukatpally",
          "Gachibowli",
          "HITEC City",
          "Madhapur",
          "Secunderabad",
        ],
      },
      { city: "Warangal", areas: ["Hanamkonda"] },
    ],
    languages: "Telugu, Urdu, Hindi, English",
    medium: "english",
    intro:
      "Hyderabad's IT and GCC jobs test English early, and a large share of the city speaks Hindi or Urdu at home. In our research no Hyderabad seller offered a live Hindi-medium course; ours is taught by a Hindi-speaking teacher.",
    hubs: [
      { need: "it", where: "HITEC City, Gachibowli and Financial District GCCs" },
      { need: "analyst", where: "Hyderabad analytics and pharma-tech firms" },
      { need: "bpo", where: "Hyderabad voice and international processes" },
      { need: "campus", where: "Engineering colleges; GCC campus drives" },
    ],
    prices: [
      { what: "Offline classes (Ameerpet, Himayatnagar)", range: "₹4,000–₹15,000 a month" },
      { what: "Short courses (45 days – 1 month)", range: "₹3,000–₹4,500" },
      { what: "Live online chain course", range: "from ₹7,500" },
    ],
    facts: [
      "Hyderabad had 11% of India's fresher hiring in August 2026.",
      "GCCs pay campus hires far more than IT services firms in Hyderabad — and test communication first.",
    ],
    faqs: [
      {
        q: "Which spoken English course is best for Hyderabad IT freshers?",
        a: "If you can talk but freeze in interviews, Interview Preparation (₹2,499/month). For standups and client calls, Interactive Speaking (₹1,599/month). Starting from zero, Basic Spoken English (₹999/month) — also taught Hindi to English. All live online, about 6 per batch, Bolo app included.",
      },
    ],
    title: "Spoken English Classes in Telangana | Warangal & Karimnagar",
    description:
      "Live online spoken English across Telangana — Warangal, Karimnagar, Secunderabad and beyond. Hindi-medium option, about 6 per batch, ₹999/month incl. taxes.",
    keywords: [
      "spoken english classes telangana",
      "english speaking course warangal online",
      "spoken english classes karimnagar",
      "english for it jobs telangana",
    ],
  },
  {
    slug: "jharkhand",
    path: S("jharkhand"),
    name: "Jharkhand",
    geoRegion: "IN-JH",
    cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    localities: [
      { city: "Ranchi", areas: ["Lalpur", "Kanke Road", "Harmu", "Doranda"] },
      { city: "Jamshedpur", areas: ["Bistupur", "Sakchi"] },
      { city: "Dhanbad", areas: ["Bank More", "Hirapur"] },
      { city: "Bokaro", areas: ["City Centre"] },
    ],
    languages: "Hindi, Santali, Khortha, Bengali, English",
    medium: "hindi",
    intro:
      "Jharkhand has steel and mining towns, engineering colleges and a large workforce that moves to Bengaluru, Pune and Delhi. Local spoken-English options are few and mostly offline; ours is live online and taught in Hindi.",
    hubs: [
      {
        need: "campus",
        where: "Ranchi, Jamshedpur and Dhanbad engineering and management colleges",
      },
      { need: "it", where: "Jobs in Bengaluru, Pune and Hyderabad after campus" },
      { need: "bank", where: "Bank PO aspirants statewide" },
      { need: "govt", where: "JPSC and UPSC aspirants in Ranchi" },
    ],
    prices: [
      { what: "Offline classes, Ranchi", range: "₹3,500–₹4,000 a month" },
      { what: "Private tutors, Jamshedpur / Dhanbad", range: "₹555–₹713 an hour" },
      { what: "Live online chain course", range: "from ₹7,500" },
    ],
    facts: [
      "Bihar and Jharkhand together send over a lakh workers to Tamil Nadu alone, and many more to Bengaluru.",
      "Bilingual (Hindi + English) live batches from big exam brands exist but are exam-focused, not daily speaking.",
    ],
    faqs: [
      {
        q: "Is there a Hindi-medium spoken English class for Ranchi or Jamshedpur?",
        a: "Yes. Basic Spoken English — Hindi to English is taught live online by a Hindi-speaking teacher: about 6 learners, ₹999/month inclusive of taxes, daily practice in the Bolo app.",
      },
    ],
    title: "Spoken English Classes in Jharkhand | Hindi Medium",
    description:
      "Live online spoken English for Ranchi, Jamshedpur, Dhanbad and Bokaro — Hindi-speaking teacher, about 6 per batch, daily practice in the Bolo app, ₹999/month.",
    keywords: [
      "spoken english classes ranchi online",
      "spoken english classes jamshedpur",
      "english speaking course jharkhand",
      "hindi medium english class ranchi",
    ],
  },
  {
    slug: "gujarat",
    path: S("gujarat"),
    name: "Gujarat",
    geoRegion: "IN-GJ",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    localities: [
      {
        city: "Ahmedabad",
        areas: ["Navrangpura", "Maninagar", "Satellite", "Bopal", "Odhav", "Ghatlodiya"],
      },
      { city: "Surat", areas: ["Adajan", "Vesu", "Katargam", "Varachha"] },
      { city: "Vadodara", areas: ["Alkapuri", "Fatehgunj", "Manjalpur"] },
      { city: "Rajkot", areas: ["Kalawad Road"] },
    ],
    languages: "Gujarati, Hindi, English",
    medium: "english",
    intro:
      "Gujarat's spoken-English market is mostly classroom chains. Surat's textile markets run in Gujarati and Hindi; for Hindi-speaking workers and anyone short on time, a live online batch with daily app practice is the easier fit.",
    hubs: [
      { need: "bpo", where: "Ahmedabad and Vadodara processes" },
      { need: "it", where: "GIFT City and Ahmedabad IT parks" },
      { need: "campus", where: "Ahmedabad, Vadodara and Surat colleges; study-abroad applicants" },
      { need: "analyst", where: "GIFT City finance and Ahmedabad firms" },
    ],
    prices: [
      { what: "Offline classes, 3 months (budget)", range: "₹5,000–₹10,000" },
      { what: "Offline classes, Vadodara", range: "₹3,500–₹9,000 a month" },
      { what: "Premium institutes, Ahmedabad", range: "₹15,000–₹30,000" },
      { what: "Live online chain course (90 days)", range: "from ₹7,500" },
    ],
    facts: [
      "Gujarati is a mother tongue for about 5.5 crore people (Census 2011).",
      "Surat's markets run in Gujarati and Hindi, so a Hindi-medium course fits many workers there.",
    ],
    faqs: [
      {
        q: "Is there an online spoken English class for Ahmedabad or Surat?",
        a: "Yes. Learn With Smile teaches live online in batches of about 6, in afternoon, evening and night IST slots. Basic Spoken English is ₹999/month (also taught Hindi to English), with daily practice in the Bolo app and a weekly teacher review.",
      },
    ],
    title: "Spoken English Classes in Gujarat | Live Online",
    description:
      "Live online spoken English for Ahmedabad, Surat, Vadodara and Rajkot — small batch of about 6, Hindi-medium option, daily Bolo practice, from ₹999/month incl. taxes.",
    keywords: [
      "spoken english classes ahmedabad online",
      "spoken english classes surat online",
      "english speaking course gujarat",
      "online english class vadodara",
    ],
  },
  {
    slug: "tamil-nadu",
    updated: "2026-11-04",
    path: S("tamil-nadu"),
    name: "Tamil Nadu",
    geoRegion: "IN-TN",
    cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Hosur"],
    localities: [
      {
        city: "Chennai",
        areas: ["Velachery", "T. Nagar", "Anna Nagar", "Adyar", "Tambaram", "OMR"],
      },
      { city: "Coimbatore", areas: ["Gandhipuram", "R.S. Puram", "Peelamedu", "Saravanampatti"] },
      { city: "Madurai", areas: ["K.K. Nagar", "Anna Nagar"] },
      { city: "Tiruchirappalli", areas: ["Thillai Nagar", "Srirangam"] },
    ],
    languages: "Tamil, English; Hindi and Urdu in some Chennai communities",
    medium: "english",
    intro:
      "Tamil Nadu's spoken-English market is classroom chains and short crash courses in Chennai and Coimbatore. We do not teach in Tamil — explanations are in English, or Hindi for Hindi speakers — so the fit here is people who already read English and freeze when they have to speak it: in IT and support work, interviews and meetings.",
    hubs: [
      { need: "it", where: "Chennai's OMR IT corridor and Coimbatore's IT parks" },
      { need: "bpo", where: "Chennai and Coimbatore support and back-office centres" },
      {
        need: "campus",
        where: "Chennai, Coimbatore and Tiruchirappalli engineering colleges and placement drives",
      },
      { need: "analyst", where: "Chennai's GCCs and finance back offices" },
    ],
    prices: [
      { what: "Classroom course, Chennai (ACTE)", range: "₹16,500" },
      { what: "Classroom course, Velachery (EnglishLabs)", range: "₹8,000" },
      { what: "One month online (Speak Now, Chennai)", range: "₹5,000" },
      { what: "Live online chain course, Coimbatore (90 days)", range: "₹7,500" },
      { what: "Offline classes, Tiruchirappalli", range: "₹3,000–₹6,000 a month" },
      { what: "1:1 tutor, Coimbatore", range: "from ₹1,000 an hour" },
    ],
    facts: [
      "Tamil is a mother tongue for about 6.9 crore people (Census 2011).",
      "Tamil-medium spoken English is already offered by other institutes; we do not teach in Tamil, and we say so.",
      "Even in Chennai an institute sells English taught through Hindi (₹3,800 a month), so Hindi-speaking learners here have a real choice; our Hindi-to-English course is ₹999 a month.",
    ],
    faqs: [
      {
        q: "Do you teach spoken English in Tamil?",
        a: "No. Learn With Smile teaches in English, with Hindi explanations in the Hindi-to-English course. If you need concepts explained in Tamil, a Tamil-medium institute will suit you better. If you already read English and freeze when you speak it, our live online batch of about 6 is built for that: ₹999/month inclusive of taxes for Basic Spoken English, ₹1,599/month for Interactive Speaking (meetings, client calls, interviews).",
      },
      {
        q: "Is there an online spoken English class for Chennai or Coimbatore IT jobs?",
        a: "Yes. Interactive Speaking (3 months, ₹1,599/month) practises standups, status updates, client calls and interview rounds live, in afternoon, evening and night IST slots that fit around shifts on OMR or in Coimbatore. Every class is recorded for revision, and Bolo gives daily practice between classes.",
      },
    ],
    title: "Spoken English Classes in Tamil Nadu | Live Online",
    description:
      "Live online spoken English for Chennai, Coimbatore, Madurai and Trichy — batch of about 6, IT and interview speaking, daily Bolo practice, from ₹999/mo.",
    keywords: [
      "spoken english classes chennai online",
      "spoken english classes coimbatore online",
      "english speaking course tamil nadu",
      "online english class madurai",
      "english speaking practice for it jobs chennai",
    ],
  },
  {
    slug: "assam",
    updated: "2026-11-04",
    path: S("assam"),
    name: "Assam & the North-East",
    geoRegion: "IN-AS",
    cities: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Tezpur", "Agartala", "Imphal"],
    localities: [
      {
        city: "Guwahati",
        areas: ["Dispur", "Zoo Road", "Beltola", "Ganeshguri", "Maligaon", "Paltan Bazaar"],
      },
      { city: "Dibrugarh", areas: ["Chowkidinghee", "Mancotta Road"] },
      { city: "Jorhat", areas: ["Garali", "A.T. Road"] },
      { city: "Silchar", areas: ["Tarapur", "Ambicapatty"] },
    ],
    languages:
      "Assamese, Bengali, Hindi, Bodo and many other languages; Bengali in the Barak Valley and Tripura",
    medium: "english",
    intro:
      "Our office is in Kolkata, the nearest metro for much of the North-East, and our teachers can bridge briefly in Bengali or Hindi. In Guwahati the choice is mostly classroom coaching or chain pages; Upper Assam, the Barak Valley, Tripura and Manipur have very little live small-batch teaching at all. A live online batch removes the travel.",
    hubs: [
      { need: "govt", where: "Guwahati, for state and central government interviews" },
      { need: "bank", where: "Guwahati, Dibrugarh and Silchar banking aspirants" },
      { need: "campus", where: "Guwahati, Jorhat, Silchar and Tezpur colleges and universities" },
      { need: "bpo", where: "Guwahati support and back-office centres" },
    ],
    prices: [
      { what: "Offline classes, Guwahati", range: "₹3,000–₹6,000 a month" },
      { what: "Live online chain course, Jorhat (90 days)", range: "₹7,500" },
      { what: "Private tutor, Shillong (average)", range: "₹653–₹748 an hour" },
    ],
    facts: [
      "Bengali is widely spoken in the Barak Valley (Silchar) and in Tripura; our teachers can bridge briefly in Bengali or Hindi.",
      "In Meghalaya, Mizoram and Nagaland English is already a school and official language, so learners there usually need speaking practice, not a beginners' course.",
      "Classes run on IST like everywhere in India; afternoon, evening and night slots fit an early North-East working day.",
    ],
    faqs: [
      {
        q: "Is there an online spoken English class for Guwahati?",
        a: "Yes. Learn With Smile teaches live online in batches of about 6 — there is no classroom in Guwahati; our only office is in Kolkata. Basic Spoken English is ₹999/month inclusive of taxes, with daily practice in the Bolo app and a weekly teacher review. Our teachers can bridge in Bengali or Hindi when a concept does not land.",
      },
      {
        q: "Can learners from Tripura, Manipur or Meghalaya join?",
        a: "Yes, from anywhere in India: the class is the same live online batch. For Bengali speakers in Tripura and the Barak Valley, the teacher can bridge briefly in Bengali or Hindi when something does not land; the speaking itself is in English. If you already speak English at school or work, Interactive Speaking (3 months, ₹1,599/month) is speaking practice for interviews, meetings and calls rather than a beginners' course.",
      },
    ],
    title: "Spoken English Classes in Assam & North-East | Online",
    description:
      "Live online spoken English for Guwahati, Dibrugarh, Silchar, Agartala and Imphal — batch of about 6, Bengali/Hindi help, from ₹999/mo incl. taxes.",
    keywords: [
      "spoken english classes guwahati online",
      "english speaking course assam",
      "spoken english classes silchar",
      "online english class agartala",
      "spoken english classes north east india",
    ],
  },
];

export const STATE_BY_SLUG: Record<string, StateInfo> = Object.fromEntries(
  STATES.map((s) => [s.slug, s]),
);
