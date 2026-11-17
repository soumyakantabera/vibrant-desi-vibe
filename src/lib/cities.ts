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
    title: "Spoken English Mumbai | Live, From ₹1,199",
    description:
      "Live online spoken English for Mumbai and Thane: banking, media, BPO and hospitality English. About 6 per batch, ₹1,199/month incl. taxes, IST batches.",
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
        q: "I work at a bank in Mumbai. Spoken English or a Business English course?",
        a: "If daily conversation is already fine but you freeze when explaining a product, a charge or a delay to a customer, take Interactive Speaking (₹1,599/month, 3 months) — it now carries our Business English work: client calls, meetings and explaining a product. If daily conversation itself is hard, start with Basic Spoken English (₹1,199/month, 6 months). Both are live, about 6 learners, inclusive of taxes.",
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
    title: "Spoken English Classes Delhi | Live From ₹1,199",
    description:
      "Live online spoken English for Delhi, Gurugram and Noida. Hindi-medium welcome; batches for office and shift workers. About 6 per batch, ₹1,199/month.",
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
        a: "No. Basic Spoken English is ₹1,199/month inclusive of taxes for every learner in India, whether you join from Delhi, Gurugram, Noida, Ghaziabad or Faridabad. Batches are about 6 learners.",
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
    title: "Spoken English Bengaluru | Live From ₹1,199",
    description:
      "Live spoken English for Bengaluru IT and GCC teams: standups, client calls and interviews. About 6 per batch, ₹1,199/month incl. taxes, IST batches.",
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
        text: "Bengaluru rooms draw people from every state. When a concept stalls, the teacher can bridge in Hindi or Bengali; Kannada, Tamil, Telugu and Malayalam are not used as bridges. If you are comfortable in neither Hindi nor Bengali, that is often fine for [Interactive Speaking](/course-interactive-speaking), where you already have the English and the work is fluency — say so in the consultation and we will advise honestly.",
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
        a: "If you know the words but they do not come out under pressure, Interactive Speaking (₹1,599/month, 3 months) trains speaking on the spot — including meetings and client calls. Live, about 6 learners, inclusive of taxes.",
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
    title: "Spoken English Hyderabad | Live From ₹1,199",
    description:
      "Live spoken English for Hyderabad: HITEC City IT, pharma and support roles. About 6 per batch, ₹1,199/month inclusive of taxes, IST batches.",
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
        a: "If everyday conversation is fine and the difficulty is explaining work clearly in meetings, calls and emails, Interactive Speaking (₹1,599/month, 3 months). If you hesitate even in daily conversation, start with Basic Spoken English (₹1,199/month). Both live, about 6 learners, inclusive of taxes. We teach communication, not regulatory content.",
      },
      {
        q: "Is the Hindi bridge a problem if I mainly speak Telugu?",
        a: "Not necessarily. Classes run in English and the Hindi explanation is brief. If your English is already working-level, Interactive Speaking or Business English rarely needs it. Tell us in the free consultation and we will say honestly whether a batch fits.",
      },
    ],
  },
  {
    slug: "pune",
    path: "/spoken-english-classes-pune",
    name: "Pune",
    state: "Maharashtra",
    geoRegion: "IN-MH",
    lat: "18.5204",
    lng: "73.8567",
    neighborhoods:
      "Hinjewadi, Kharadi, Wakad, Baner, Kothrud, Karve Nagar, Hadapsar, Pimpri-Chinchwad",
    commute: "45–75 minutes through Hinjewadi or Kharadi traffic, each way",
    industries: "IT services, automotive and manufacturing, BFSI back offices and colleges",
    medium: "Marathi, Hindi or English-medium schooling",
    localRoom: "Kothrud, Deccan or FC Road classrooms of 25–40",
    title: "Spoken English Classes Pune | Live, ₹1,199/mo",
    description:
      "Spoken English classes for Pune: live online, about 6 per batch, ₹1,199/month incl. taxes. Marathi-medium option, IT and campus interview English.",
    local: [
      { t: "h2", text: "English at work and college in Pune" },
      {
        t: "p",
        text: "Pune runs on three kinds of English. Hinjewadi and Kharadi IT teams need standups and client calls. Chakan, Talegaon and Pimpri-Chinchwad plants need supervisors who can report a delay or a quality issue to a visiting auditor. And Pune’s colleges send thousands of students into campus placements every year, where the HR round is the first time many of them speak English under pressure.",
      },
      {
        t: "ul",
        items: [
          "**IT services:** status updates, client calls with US or European teams, and the appraisal conversation. See [English for IT professionals](/english-for-it-professionals-india).",
          "**Automotive and manufacturing:** explain a delay, a defect or a shift handover clearly to a manager or an auditor — short sentences, the right numbers.",
          "**Students and freshers:** the 60-second introduction and the HR round. See [campus placement English](/english-for-campus-placements-india).",
        ],
      },
      { t: "h2", text: "Marathi medium? There is a course for that" },
      {
        t: "p",
        text: "Many Pune learners studied in Marathi medium. [Basic Spoken English](/course-spoken-english) starts from zero, with short, simple sentences and a teacher who slows down until each idea lands. Hindi-medium learners can take the [Hindi to English](/course-spoken-english-hindi) version.",
      },
    ],
    localFaqs: [
      {
        q: "Are there spoken English classes in Pune with fees listed?",
        a: "Yes. Learn With Smile publishes its fees: Basic Spoken English ₹1,199/month (6 months), Intermediate ₹1,999/month, Interactive Speaking ₹1,599/month, Interview Preparation ₹2,499/month — all inclusive of taxes, about 6 learners, live online. Pune learners pay the same as everyone else in India.",
      },
    ],
  },
  {
    slug: "chennai",
    path: "/spoken-english-classes-chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    geoRegion: "IN-TN",
    lat: "13.0827",
    lng: "80.2707",
    neighborhoods: "T Nagar, Tambaram, Velachery, Anna Nagar, OMR, Porur, Adyar, Guindy",
    commute: "an hour or more on OMR or GST Road, each way",
    industries: "IT and GCCs on OMR, automobile plants, healthcare and BPO",
    medium: "Tamil or English-medium schooling",
    localRoom: "T Nagar or Tambaram classrooms of 25–40",
    title: "Spoken English Classes Chennai | Live, ₹1,199",
    description:
      "Spoken English classes for Chennai learners: live online, about 6 per batch, ₹1,199/month incl. taxes. OMR IT, BPO and interview English. No commute.",
    local: [
      { t: "h2", text: "English at work in Chennai" },
      {
        t: "p",
        text: "Chennai learners often read and write English well — Tamil Nadu’s colleges see to that — and still go quiet when they have to speak it fast. The gap shows up on OMR client calls, in BPO and healthcare process interviews, and in the automobile corridor around Sriperumbudur and Oragadam when a supervisor has to brief a visiting team.",
      },
      {
        t: "ul",
        items: [
          "**OMR IT and GCCs:** standups, demos and the one-on-one with a manager abroad.",
          "**BPO, KPO and healthcare process roles:** call openings, empathy phrases and closing a call cleanly. See [English for BPO jobs](/english-for-bpo-jobs-india).",
          "**Freshers from engineering and arts colleges:** the HR round and group discussion, where speaking — not grammar — decides the result.",
        ],
      },
      { t: "h2", text: "A straight answer on Tamil" },
      {
        t: "p",
        text: "Our teachers do not use Tamil as a bridge language. For most Chennai learners that is not a problem: if you can read English and follow a class, [Interactive Speaking](/course-interactive-speaking) or [Intermediate Spoken English](/course-intermediate-english) works in English throughout. If you are a complete beginner who needs explanations in Tamil, a local Tamil-medium class may suit you better at the start — we will tell you honestly in the free consultation.",
      },
    ],
    localFaqs: [
      {
        q: "Do you explain in Tamil?",
        a: "No. Explanations are in simple English, with Hindi or Bengali as the only bridge languages. Most Chennai learners already read English and need speaking practice, which works fine in English. Complete beginners who need Tamil explanations should say so in the free consultation; we will advise honestly.",
      },
      {
        q: "Which course suits a Chennai IT employee who freezes on calls?",
        a: "Interactive Speaking: 3 months, ₹1,599/month inclusive of taxes, about 6 learners, live online. It drills meetings, client calls and presentations until speaking under pressure feels routine.",
      },
    ],
  },
  {
    slug: "ahmedabad",
    path: "/spoken-english-classes-ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    geoRegion: "IN-GJ",
    lat: "23.0225",
    lng: "72.5714",
    neighborhoods:
      "Navrangpura, Satellite, Bopal, Maninagar, Vastrapur, Chandkheda, Gandhinagar and GIFT City",
    commute: "40–60 minutes across the SG Highway or the old city, each way",
    industries: "family businesses, textiles, pharma, diamonds and trading, and GIFT City finance",
    medium: "Gujarati, Hindi or English-medium schooling",
    localRoom: "Navrangpura or Satellite classrooms of 25–40",
    title: "Spoken English Classes Ahmedabad | Live ₹1,199",
    description:
      "Spoken English classes for Ahmedabad and Gandhinagar: live online, about 6 per batch, ₹1,199/month incl. taxes. Business, export and interview English.",
    local: [
      { t: "h2", text: "English for Ahmedabad business" },
      {
        t: "p",
        text: "In Ahmedabad, English is usually a business tool before it is a job requirement. A second-generation owner wants to handle an export buyer on a video call without a relative translating. A pharma sales executive presents to a doctor. A GIFT City analyst sits in calls with Singapore and London. Many learners are fluent in Gujarati and Hindi deal-making and simply need the same confidence in English.",
      },
      {
        t: "ul",
        items: [
          "**Export and trading:** price, quantity, delivery dates and a polite no to a discount — on a call, not just on email.",
          "**Pharma and healthcare sales:** a two-minute product explanation that sounds natural, not memorised.",
          "**GIFT City and finance roles:** meetings with overseas teams. See [English for client calls](/english-for-client-calls-india).",
        ],
      },
      { t: "h2", text: "Gujarati or Hindi medium" },
      {
        t: "p",
        text: "Gujarati is not used as a bridge language. Most Ahmedabad learners are comfortable in Hindi, and the [Hindi to English course](/course-spoken-english-hindi) explains stuck concepts in Hindi before moving you back to English — same ₹1,199/month.",
      },
    ],
    localFaqs: [
      {
        q: "I run a family business in Ahmedabad. Which course helps with buyer calls?",
        a: "If basic conversation is fine but calls with buyers feel stiff, Interactive Speaking (3 months, ₹1,599/month) practises calls, negotiation phrases and presentations. If everyday sentences are still hard, start with Basic Spoken English (₹1,199/month). Both live, about 6 learners, inclusive of taxes.",
      },
      {
        q: "Can the teacher explain in Gujarati?",
        a: "No — Hindi or Bengali are the bridge languages. Most Ahmedabad learners take the Hindi to English version without difficulty. If you are comfortable only in Gujarati, tell us in the free consultation and we will advise honestly.",
      },
    ],
  },
  {
    slug: "patna",
    path: "/spoken-english-classes-patna",
    name: "Patna",
    state: "Bihar",
    geoRegion: "IN-BR",
    lat: "25.5941",
    lng: "85.1376",
    neighborhoods: "Boring Road, Kankarbagh, Rajendra Nagar, Bailey Road, Ashok Rajpath, Danapur",
    commute: "30–60 minutes through Boring Road or Ashok Rajpath traffic",
    industries:
      "government job aspirants, banking, teaching, healthcare and students moving to metros",
    medium: "Hindi-medium or English-medium schooling",
    localRoom: "Boring Road or Ashok Rajpath coaching rooms of 30–60",
    title: "Spoken English Classes Patna | Live Online ₹1,199",
    description:
      "Spoken English classes for Patna, taught through Hindi: live online, about 6 per batch, ₹1,199/month incl. taxes. Interview and job English. No coaching rush.",
    local: [
      { t: "h2", text: "Why Patna learners want spoken English" },
      {
        t: "p",
        text: "Patna is a city of preparation. Many learners have spent years on competitive exams and know grammar rules better than most graduates elsewhere — and still cannot answer “Tell me about yourself” in English in an interview. Others are about to move to Delhi, Bengaluru or Pune for work and know that English will be the first test in the new city.",
      },
      {
        t: "ul",
        items: [
          "**Government and bank interviews:** the personal interview round, where the board hears you speak. See [English for bank PO interviews](/english-for-bank-po-interview) and [government job interviews](/english-for-government-job-interview).",
          "**Moving to a metro for work:** office small talk, calls and meetings in the first month.",
          "**Teachers and healthcare staff:** explaining clearly to students, patients and parents.",
        ],
      },
      { t: "h2", text: "Taught through Hindi" },
      {
        t: "p",
        text: "Most Patna learners think in Hindi. [Basic Spoken English — Hindi to English](/course-spoken-english-hindi) uses a Hindi-speaking teacher who explains in Hindi when a concept stalls, then switches you back to English. Grammar you already know from exam preparation becomes sentences you can say — that is usually the fastest part of the journey.",
      },
    ],
    localFaqs: [
      {
        q: "I know grammar from exam preparation but cannot speak. Where do I start?",
        a: "Usually Intermediate Spoken English (4 months, ₹1,999/month) or Interactive Speaking (3 months, ₹1,599/month), because the rules exist and the speaking does not. If even simple sentences are hard to say aloud, start with Basic Spoken English — Hindi to English at ₹1,199/month. The free level test at /english-speaking-level-test suggests one.",
      },
      {
        q: "Is an online class better than a Boring Road coaching centre?",
        a: "For speaking, usually yes. Big coaching rooms are built for lectures; a batch of about 6 gives each learner roughly 8–10 minutes of speaking per hour. Coaching centres do better at exam syllabus and peer energy. We bill one month at a time with no loans or EMIs.",
      },
    ],
  },
  {
    slug: "jaipur",
    path: "/spoken-english-classes-jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    geoRegion: "IN-RJ",
    lat: "26.9124",
    lng: "75.7873",
    neighborhoods:
      "Malviya Nagar, Mansarovar, Vaishali Nagar, C-Scheme, Raja Park, Jagatpura, Sitapura",
    commute: "30–60 minutes through Tonk Road or Ajmer Road traffic",
    industries:
      "tourism and hospitality, gems and jewellery, IT in Sitapura and Mahindra SEZ, and students",
    medium: "Hindi-medium or English-medium schooling",
    localRoom: "Malviya Nagar or Raja Park classrooms of 25–40",
    title: "Spoken English Classes Jaipur | Live, ₹1,199/mo",
    description:
      "Spoken English classes for Jaipur, taught through Hindi: live online, about 6 per batch, ₹1,199/month incl. taxes. Hospitality, IT and interview English.",
    local: [
      { t: "h2", text: "English at work in Jaipur" },
      {
        t: "p",
        text: "Jaipur’s English is face to face. A hotel front desk checks in a foreign family, a guide explains Amber Fort, a jeweller on Johari Bazaar quotes a price to a visiting buyer, and an IT team in Sitapura or Mahindra World City joins a client call. In each case the person usually knows the words — what is missing is the confidence to keep talking when the other person replies.",
      },
      {
        t: "ul",
        items: [
          "**Hospitality and tourism:** greetings, complaints, directions and saying no politely. Practise with [conversation dialogues](/blog/english-conversation-practice-dialogues).",
          "**Gems, jewellery and handicraft exports:** price, quality and delivery on a call with a buyer.",
          "**IT and students:** standups, client calls and the HR round. See [Interview Preparation](/course-interview-preparation).",
        ],
      },
      { t: "h2", text: "Taught through Hindi" },
      {
        t: "p",
        text: "Most Jaipur learners are comfortable in Hindi. [Basic Spoken English — Hindi to English](/course-spoken-english-hindi) explains stuck ideas in Hindi and keeps speaking practice in English, at the same ₹1,199/month.",
      },
    ],
    localFaqs: [
      {
        q: "I work in a Jaipur hotel. Which English course fits?",
        a: "If you can manage basic guest conversations but freeze on complaints or long questions, Interactive Speaking (3 months, ₹1,599/month) practises exactly those situations. If guest conversations are still hard, start with Basic Spoken English — Hindi to English (₹1,199/month). Both live online, about 6 learners, inclusive of taxes.",
      },
      {
        q: "Do classes fit around hotel or shop shift timings?",
        a: "Usually. There are afternoon, evening and night IST batches, and classes are recorded so a missed session during a busy season can be revised. Tell us your shift in the free consultation.",
      },
    ],
  },
  {
    slug: "lucknow",
    path: "/spoken-english-classes-lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    geoRegion: "IN-UP",
    lat: "26.8467",
    lng: "80.9462",
    neighborhoods: "Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Alambagh, Aminabad",
    commute: "30–60 minutes across Gomti Nagar, Hazratganj or Alambagh",
    industries: "government and secretariat jobs, banking, healthcare, teaching and students",
    medium: "Hindi-medium or English-medium schooling",
    localRoom: "Hazratganj or Aliganj classrooms of 25–40",
    title: "Spoken English Classes Lucknow | Live, ₹1,199",
    description:
      "Spoken English classes for Lucknow, taught through Hindi: live online, about 6 per batch, ₹1,199/month incl. taxes. Interview, office and daily English.",
    local: [
      { t: "h2", text: "Why Lucknow learners want spoken English" },
      {
        t: "p",
        text: "Lucknow learners are often polished speakers in Hindi and Urdu — tehzeeb is not the problem. The problem is that English feels like a performance rather than a conversation. It shows up in bank and government interviews, in private-sector jobs in Gomti Nagar, and for students preparing to move to Noida, Delhi or Bengaluru.",
      },
      {
        t: "ul",
        items: [
          "**Interviews:** the personal interview, the HR round, and “Tell me about yourself”. See [tell me about yourself in 60 seconds](/blog/tell-me-about-yourself-in-60-seconds).",
          "**Office English:** short updates, calls and polite disagreement in meetings.",
          "**Daily conversation:** with colleagues, at hospitals and banks, and on the phone. Start with [daily use English sentences](/blog/daily-use-english-sentences-with-hindi).",
        ],
      },
      { t: "h2", text: "Taught through Hindi" },
      {
        t: "p",
        text: "[Basic Spoken English — Hindi to English](/course-spoken-english-hindi) uses a Hindi-speaking teacher who explains in Hindi when a concept is not landing and then moves you back to English — same course and fee, ₹1,199/month.",
      },
    ],
    localFaqs: [
      {
        q: "Is there a Hindi-medium spoken English class for Lucknow learners?",
        a: "Yes. Basic Spoken English — Hindi to English is taught live online by a Hindi-speaking teacher: 6 months, ₹1,199/month inclusive of taxes, about 6 learners per batch.",
      },
      {
        q: "I have a bank interview coming up. Which course?",
        a: "If you can already hold a conversation, Interview Preparation (2 months, ₹2,499/month) drills the introduction, situational questions and mock interviews. If conversation itself is hard, start with Basic Spoken English. Take the free level test at /english-speaking-level-test to see where you stand.",
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

/**
 * Retired cities that now sit inside a state page go there instead of the
 * national page: someone searching "spoken english classes pune" lands on the
 * Maharashtra page that names Pune, its localities and the Marathi medium.
 */
export const RETIRED_CITY_TARGET: Partial<Record<(typeof RETIRED_CITY_PATHS)[number], string>> = {
  "/spoken-english-classes-nagpur": "/spoken-english-classes-maharashtra",
  "/spoken-english-classes-surat": "/spoken-english-classes-gujarat",
  "/spoken-english-classes-coimbatore": "/spoken-english-classes-tamil-nadu",
  "/spoken-english-classes-guwahati": "/spoken-english-classes-assam",
};

/** Coverage-strip state chips → their page. Delhi is the Delhi NCR page. */
export const STATE_PAGE_PATHS: Record<string, string> = {
  "West Bengal": "/spoken-english-classes-kolkata",
  Delhi: "/spoken-english-classes-delhi-ncr",
  Maharashtra: "/spoken-english-classes-maharashtra",
  "Uttar Pradesh": "/spoken-english-classes-uttar-pradesh",
  Bihar: "/spoken-english-classes-bihar",
  Jharkhand: "/spoken-english-classes-jharkhand",
  "Madhya Pradesh": "/spoken-english-classes-madhya-pradesh",
  Rajasthan: "/spoken-english-classes-rajasthan",
  Gujarat: "/spoken-english-classes-gujarat",
  Karnataka: "/spoken-english-classes-karnataka",
  Telangana: "/spoken-english-classes-telangana",
  "Tamil Nadu": "/spoken-english-classes-tamil-nadu",
  Assam: "/spoken-english-classes-assam",
};

/** States with a page that are not in COVERAGE_STATES (where learners already
 *  join from) — shown as extra chips so every state page is linked. */
export const EXTRA_STATE_CHIPS = ["Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Jharkhand"];

/** Cities without their own page link to the state page that names them. */
export const CITY_STATE_PATHS: Record<string, string> = {
  Nagpur: "/spoken-english-classes-maharashtra",
  Surat: "/spoken-english-classes-gujarat",
  Coimbatore: "/spoken-english-classes-tamil-nadu",
  Guwahati: "/spoken-english-classes-assam",
};
export const RETIRED_CITY_PATHS = [
  "/spoken-english-classes-nagpur",
  "/spoken-english-classes-surat",
  "/spoken-english-classes-coimbatore",
  "/spoken-english-classes-kochi",
  "/spoken-english-classes-visakhapatnam",
  "/spoken-english-classes-guwahati",
] as const;

export const CITY_PATHS: Record<string, string> = {
  Kolkata: "/spoken-english-classes-kolkata",
  Delhi: "/spoken-english-classes-delhi",
  Mumbai: "/spoken-english-classes-mumbai",
  Bengaluru: "/spoken-english-classes-bengaluru",
  Hyderabad: "/spoken-english-classes-hyderabad",
  Pune: "/spoken-english-classes-pune",
  Chennai: "/spoken-english-classes-chennai",
  Ahmedabad: "/spoken-english-classes-ahmedabad",
  Patna: "/spoken-english-classes-patna",
  Jaipur: "/spoken-english-classes-jaipur",
  Lucknow: "/spoken-english-classes-lucknow",
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
      a: `Offline centres in ${city.name} generally charge ₹1,500–₹6,000 for a 3-month spoken English course, often in batches of 25–40. Learn With Smile charges ₹1,199 per month for Basic Spoken English in a batch of approximately 6 learners, inclusive of taxes, ${admissionShort()}. The fee is the same in ${city.name} as in Kolkata or Kochi.`,
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

/** City → its state page, so the two pages point at each other instead of competing. */
const HINDI = {
  lang: "Hindi",
  label: "Basic Spoken English — Hindi to English",
  path: "/course-spoken-english-hindi",
};
const STATE_PAGE: Record<
  string,
  { name: string; path: string; medium?: { lang: string; label: string; path: string } }
> = {
  mumbai: { name: "Maharashtra", path: "/spoken-english-classes-maharashtra" },
  delhi: { name: "Delhi NCR", path: "/spoken-english-classes-delhi-ncr", medium: HINDI },
  bengaluru: { name: "Karnataka", path: "/spoken-english-classes-karnataka" },
  hyderabad: { name: "Telangana", path: "/spoken-english-classes-telangana" },
  pune: { name: "Maharashtra", path: "/spoken-english-classes-maharashtra" },
  chennai: { name: "Tamil Nadu", path: "/spoken-english-classes-tamil-nadu" },
  ahmedabad: { name: "Gujarat", path: "/spoken-english-classes-gujarat", medium: HINDI },
  patna: { name: "Bihar", path: "/spoken-english-classes-bihar", medium: HINDI },
  jaipur: { name: "Rajasthan", path: "/spoken-english-classes-rajasthan", medium: HINDI },
  lucknow: { name: "Uttar Pradesh", path: "/spoken-english-classes-uttar-pradesh", medium: HINDI },
};

export function cityBody(city: CityRecord): ArticleBody {
  const st = STATE_PAGE[city.slug];
  return [
    {
      t: "p",
      text: `**Short answer.** Spoken English classes in ${city.name} do not have to mean ${city.commute}. Learn With Smile is live online: approximately 6 learners, ₹1,199/month inclusive of taxes, afternoon / evening / night IST. Learners join from ${city.neighborhoods}. The office is in Kolkata; it is not a walk-in campus.`,
    },
    ...(st
      ? [
          {
            t: "p" as const,
            text: `Not in ${city.name} itself? The [${st.name} page](${st.path}) covers the other cities and towns of ${st.name}, with the same live classes and fee.${st.medium ? ` Think in ${st.medium.lang}? [${st.medium.label}](${st.medium.path}) is the same course and fee, explained by a ${st.medium.lang}-speaking teacher.` : ""}`,
          },
        ]
      : []),
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
        ["Basic Spoken English", "6 months, ~6 learners", "₹1,199/month"],
        ["Intermediate Spoken English", "4 months", "₹1,999/month"],
        ["Interactive Speaking", "3 months", "₹1,599/month"],
        ["Interview Preparation", "2 months, ~6 learners", "₹2,499/month"],
      ],
    },
    {
      t: "p",
      text: `Market bands for ${city.name} offline rooms are in the [India fees guide](/english-class-fees-india). Confirm any other provider on their site before you pay, and run the [10 checks before you pay](/before-you-pay-spoken-english-course) on anyone, us included. We bill one month at a time: no auto-debit, no loans or EMIs.`,
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
      text: `Sit in the next ${city.name} IST slot. Approx. 6 learners. From ₹1,199/mo, inclusive of taxes.`,
      course: "/free-consultation",
      label: "Get Free Consultation",
    },
  ];
}
