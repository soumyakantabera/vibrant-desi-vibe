import type { PageSeo } from "@/lib/seo";
import { CITIES, cityFaqs } from "@/lib/cities";

const UPDATED = "2026-09-22";
/** City pages were rewritten with city-specific sections on this date. */
const CITY_UPDATED = "2026-10-08";

const NEW_GUIDES: Record<string, PageSeo> = {
  // Written in Hindi and Bengali for learners who search in their own language.
  // `lang` sets hreflang, og:locale and inLanguage for these two only.
  "/spoken-english-in-hindi": {
    path: "/spoken-english-in-hindi",
    lang: "hi-IN",
    title: "Spoken English in Hindi | English Bolna Kaise Sikhe",
    description:
      "English बोलना कैसे सीखें: रोज़ 15 मिनट का अभ्यास, हिंदी बोलने वालों की आम गलतियाँ और 6 महीने का सच्चा प्लान। लाइव क्लास ₹999/माह से।",
    shortTitle: "Spoken English in Hindi",
    keywords: [
      "spoken english in hindi",
      "english bolna kaise sikhe",
      "english speaking course in hindi",
      "english sikhne ka tarika",
      "hindi se english bolna sikhe",
      "english बोलना कैसे सीखें",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.7,
    changefreq: "monthly",
    dateModified: CITY_UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Spoken English in Hindi", path: "/spoken-english-in-hindi" },
    ],
    summary:
      "Hindi-language guide to learning spoken English: realistic timeline (about 6 months from zero), a 15-minute daily routine, common mistakes Hindi speakers make, and when a live class helps. Classes from ₹999/month inclusive of taxes.",
    faqs: [
      {
        q: "English बोलना सीखने में कितना समय लगता है?",
        a: "शून्य से रोज़मर्रा की बातचीत तक आम तौर पर करीब 6 महीने, अगर हफ़्ते में 2 लाइव क्लास हों और रोज़ थोड़ा अभ्यास। ऑफ़िस की English अक्सर 3 महीने और। 30 दिन में फ़्लुएंसी का दावा विज्ञापन है।",
      },
      {
        q: "क्या हिंदी-मीडियम से पढ़े लोग English बोलना सीख सकते हैं?",
        a: "हाँ। स्कूल की भाषा ने तय किया कि आपने कितनी English सुनी, यह नहीं कि आप बोल सकते हैं या नहीं। Learn With Smile की क्लास English में होती है; कोई बात अटके तो टीचर हिंदी में समझाती हैं, फिर वापस English।",
      },
      {
        q: "Learn With Smile की फ़ीस कितनी है?",
        a: "Basic Spoken English ₹999/माह (6 महीने), Interactive Speaking ₹1,199/माह, Business English ₹1,999/माह, Interview Preparation ₹1,999/माह — सभी टैक्स सहित, करीब 6 लोगों का लाइव बैच। मुफ़्त सलाह WhatsApp पर मिलती है। 90 मिनट का डेमो सेशन ₹199 का है, जो 48 घंटे में दाख़िला लेने पर फ़ीस में एडजस्ट हो जाता है।",
      },
      {
        q: "क्या घर पर बिना क्लास के English बोलना सीख सकते हैं?",
        a: "शुरुआत हाँ — रोज़ ज़ोर से बोलना, रिकॉर्ड करना और शैडोइंग बहुत मदद करते हैं। पर अपनी गलतियाँ खुद पकड़ना मुश्किल है, और असली बातचीत का दबाव अकेले नहीं बनता। अगर 3–4 हफ़्ते बाद भी अटकते हैं, तो छोटा लाइव बैच मदद करता है।",
      },
    ],
  },
  "/spoken-english-in-bengali": {
    path: "/spoken-english-in-bengali",
    lang: "bn-IN",
    title: "Spoken English in Bengali | English Bolte Shikhun",
    description:
      "ইংরেজি বলতে শিখুন: রোজ 15 মিনিটের অভ্যাস, বাঙালিদের সাধারণ ভুল আর 6 মাসের সত্যি পরিকল্পনা। কলকাতা থেকে লাইভ ক্লাস, ₹999/মাস থেকে।",
    shortTitle: "Spoken English in Bengali",
    keywords: [
      "spoken english in bengali",
      "english bolte shikhun",
      "bengali to english speaking course",
      "spoken english class kolkata bengali",
      "bangla theke english bola",
      "ইংরেজি বলতে শিখুন",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.7,
    changefreq: "monthly",
    dateModified: CITY_UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Spoken English in Bengali", path: "/spoken-english-in-bengali" },
    ],
    summary:
      "Bengali-language guide to learning spoken English: realistic timeline (about 6 months from zero), a 15-minute daily routine, common mistakes Bengali speakers make (he/she, v/bh, s/sh), and when a live class helps. Taught from Kolkata, from ₹999/month inclusive of taxes.",
    faqs: [
      {
        q: "ইংরেজি বলতে শিখতে কত সময় লাগে?",
        a: "শূন্য থেকে রোজকার কথাবার্তা পর্যন্ত সাধারণত প্রায় 6 মাস, যদি সপ্তাহে 2টো লাইভ ক্লাস আর রোজ একটু অভ্যাস থাকে। অফিসের ইংরেজির জন্য প্রায়ই আরও 3 মাস। 30 দিনে ফ্লুয়েন্সির দাবি বিজ্ঞাপন।",
      },
      {
        q: "বাংলা মিডিয়ামে পড়লে কি ইংরেজি বলা শেখা যায়?",
        a: "হ্যাঁ। স্কুলের মাধ্যম ঠিক করেছে আপনি কতটা ইংরেজি শুনেছেন, আপনি বলতে পারবেন কিনা তা নয়। Learn With Smile-এর ক্লাস ইংরেজিতে হয়; কিছু না বুঝলে টিচার বাংলায় বুঝিয়ে দেন, তারপর আবার ইংরেজিতে।",
      },
      {
        q: "Learn With Smile-এর ফি কত?",
        a: "Basic Spoken English ₹999/মাস (6 মাস), Interactive Speaking ₹1,199/মাস, Business English ₹1,999/মাস, Interview Preparation ₹1,999/মাস — সবই ট্যাক্স সহ, প্রায় 6 জনের লাইভ ব্যাচ। বিনামূল্যে পরামর্শ WhatsApp-এ। 90 মিনিটের ডেমো সেশন ₹199, যা 48 ঘণ্টার মধ্যে ভর্তি হলে ফি-তে অ্যাডজাস্ট হয়ে যায়।",
      },
      {
        q: "ক্লাস কি কলকাতায় সামনাসামনি হয়?",
        a: "না। সব ক্লাস লাইভ অনলাইন। আমাদের টিচার কলকাতা থেকে পড়ান, আর কলকাতায় একটা অফিস আছে যেখানে আগে থেকে সময় নিয়ে দেখা করা যায় — কিন্তু সেটা ক্লাসরুম নয়।",
      },
    ],
  },
  "/guides": {
    path: "/guides",
    title: "English Class Guides | Fees, Fit, Cities",
    description:
      "Honest guides to choosing a live English class in India: which course fits, fees, how long it takes, beginners, IT, workplace and cities.",
    shortTitle: "Guides",
    keywords: [
      "spoken english class guides india",
      "english class fees india",
      "which english course should i take",
      "free english consultation vs demo class",
      "what happens in free english consultation",
      "help choose spoken english course india",
      "interview preparation course online india",
      "business english course india fees",
      "spoken english for working professionals india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.9,
    changefreq: "weekly",
    dateModified: UPDATED,
    summary:
      "Hub for every long-form English class guide: fees, fit, time, audience, cities, and what the free consultation actually delivers. From ₹999/month inclusive of taxes, batches of around 6.",
    faqs: [
      {
        q: "Where should I start if I want a live English class in India?",
        a: "If you cannot hold a conversation, start with Spoken English for beginners (6 months, ₹999/month, approx. 6 learners). If you freeze with words you already have, take Interactive Speaking (₹1,199/month). If meetings and calls are the gap, take Business English (₹1,999/month). Unsure? Get a free consultation — we diagnose the bottleneck and place you in one room. Fees, comparisons and city pages are linked from this hub. Chat on WhatsApp; we reply 09:00–12:00 IST.",
      },
      {
        q: "What do I get in the free consultation?",
        a: "A named diagnosis of your problem, one course recommendation with fee and IST slot in writing, and answers to every question you bring. It is counselling, not a class — unlike a counsellor pitch or 15 minutes of app talk. Details: https://www.learnwithsmile.app/free-consultation",
      },
    ],
  },
  "/spoken-english-for-beginners-india": {
    path: "/spoken-english-for-beginners-india",
    title: "Spoken English for Beginners | From ₹999",
    description:
      "Zero to a 2-minute turn: 6 months, around 6 learners, ₹999/month inclusive of taxes. Hindi and Bengali support. Live IST batches. No 30-day fluency ads.",
    shortTitle: "Beginners",
    keywords: [
      "spoken english for beginners in india",
      "basic spoken english course online",
      "english speaking classes for zero level",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.85,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Beginners", path: "/spoken-english-for-beginners-india" },
    ],
    summary:
      "Beginner Spoken English: sounds, sentences, a 2-minute turn in 6 months. ₹999/month, approx. 6 learners, inclusive of taxes. Live, not recorded-as-class.",
    faqs: [
      {
        q: "Can a complete beginner learn spoken English online in India?",
        a: "Yes, if the room is small enough that you speak every hour and someone corrects the same error until it goes. Learn With Smile Basic Spoken English is 6 months, ₹999/month inclusive of taxes, approximately 6 learners, up to 2 live classes a week. 30-day fluency from zero is marketing.",
      },
      {
        q: "I studied in Hindi or Bengali medium. Can I still join a beginner class?",
        a: "Yes. Most of our learners did. The class is English; when a concept stalls the teacher explains in Hindi or Bengali, then you go back to English. An English-only room for a genuine beginner produces silence.",
      },
      {
        q: "What will I be able to do after 6 months?",
        a: "Everyday conversation from zero: introduce yourself, shops, a phone call, two minutes on a topic. Workplace meetings are a later room, not this one. Exam bands are a different paper. Results vary with how often you actually speak.",
      },
    ],
  },
  "/how-to-speak-english-fluently": {
    path: "/how-to-speak-english-fluently",
    title: "How to Speak English Fluently in India",
    description:
      "Fluency is minutes you spoke, not 30-day ads. From zero: about 6 months live, around 6 learners, ₹999/mo inclusive of taxes. Drills you can start today.",
    shortTitle: "Speak fluently",
    keywords: [
      "how to speak english fluently",
      "how to speak english fluently in 6 months",
      "english fluency tips india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.85,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Speak fluently", path: "/how-to-speak-english-fluently" },
    ],
    summary:
      "How to speak English fluently: speaking minutes, a 6-month map from zero, and five drills that cost nothing. Paid class only if you need a syllabus and a seat.",
    faqs: [
      {
        q: "How can I speak English fluently?",
        a: "Speak every day in short turns, get the same errors corrected, and keep a map so you are not guessing. From zero, everyday conversation usually takes about 6 months of live practice — not 30 days. A batch of around 6 gives 8–10 minutes per hour; a room of 30 often gives 1–2.",
      },
      {
        q: "Can I become fluent in English without a class?",
        a: "Yes, if you already have discipline: a daily 10-minute voice note, one conversation partner, and honest recordings. A paid class buys a syllabus, a teacher who remembers your errors, and a seat you show up to. If you already have those three, spend nothing.",
      },
    ],
  },
  "/spoken-english-for-freshers-india": {
    path: "/spoken-english-for-freshers-india",
    title: "Spoken English for Freshers | Interview Ready",
    description:
      "Campus intro, HR screen, 60-second chair. Spoken from ₹999/mo or Interactive ₹1,199/mo, around 6 learners, inclusive of taxes. No job promise. Kolkata.",
    shortTitle: "Freshers",
    keywords: [
      "spoken english for freshers",
      "english speaking course after graduation",
      "campus placement english india",
    ],
    ogImage: "/og/interview-prep.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Freshers", path: "/spoken-english-for-freshers-india" },
    ],
    summary:
      "Freshers: if you cannot hold a conversation, Spoken English first. If chat is fine and interviews fail, Interview Preparation — 2 months, ₹1,999/month. No placement guarantee.",
    faqs: [
      {
        q: "Which English course should a fresher take in India?",
        a: "If you cannot hold a two-minute conversation, take Basic Spoken English (6 months, ₹999/month). If you can chat and still bomb HR screens, take Interview Preparation (2 months, ₹1,999/month) — 60-second intro, STAR, recorded mocks. Both are live, approximately 6 learners, inclusive of taxes. We do not promise a job.",
      },
      {
        q: "Do I need IELTS for campus placements in India?",
        a: "Almost never. Indian interviews hear a 60-second intro. Sit IELTS when a university, visa or a specific HR form asks for the band.",
      },
    ],
  },
  "/spoken-english-for-homemakers-india": {
    path: "/spoken-english-for-homemakers-india",
    title: "Spoken English for Homemakers | From ₹999",
    description:
      "Daytime IST batches for homemakers: shops, school meetings, a voice of your own. 6 months, ₹999/month inclusive of taxes, around 6 learners. Live. Kolkata.",
    shortTitle: "Homemakers",
    keywords: [
      "spoken english for housewives india",
      "spoken english for homemakers online",
      "english speaking classes for ladies india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Homemakers", path: "/spoken-english-for-homemakers-india" },
    ],
    summary:
      "Homemakers and housewives: live Spoken English in daytime IST batches, around 6 learners, ₹999/month inclusive of taxes. Not a kids class, not a certificate mill.",
    faqs: [
      {
        q: "Are there spoken English classes for homemakers in India?",
        a: "Yes. Learn With Smile runs live IST morning and weekend batches that homemakers actually attend. Basic Spoken English is 6 months, ₹999/month inclusive of taxes, approximately 6 learners. The class is for adults 15+, not children.",
      },
      {
        q: "I have been out of work for years. Is it too late?",
        a: "No. School medium and a career gap decide how much English you heard, not whether you can take a school meeting or a shop conversation in 6 months of live practice. We do not promise a job at the end.",
      },
    ],
  },
  "/online-vs-offline-spoken-english-classes": {
    path: "/online-vs-offline-spoken-english-classes",
    title: "Online vs Offline Spoken English Classes",
    description:
      "Online small-batch vs a 25–40 student room: commute, mic time, GST. Live from ₹999/mo, around 6 learners, inclusive of taxes. Honest trade-offs for India.",
    shortTitle: "Online vs offline",
    keywords: [
      "online vs offline spoken english classes",
      "is online english class better than coaching centre",
      "spoken english class at home vs institute",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Online vs offline", path: "/online-vs-offline-spoken-english-classes" },
    ],
    summary:
      "Online vs offline spoken English in India: speaking minutes, commute, and what a neighbourhood room still wins. We sell the online row and say so.",
    faqs: [
      {
        q: "Are online spoken English classes better than offline coaching centres?",
        a: "For speaking minutes, a live batch of around 6 is usually better than a 25–40 student classroom. You also skip the commute. Offline still wins on peer energy in the same room. Price is not the tell — ask the cap before you ask the fee.",
      },
    ],
  },
  "/free-english-speaking-practice-vs-paid-class": {
    path: "/free-english-speaking-practice-vs-paid-class",
    title: "Free English Practice vs a Paid Live Class",
    description:
      "Podcasts, YouTube and language exchanges are free. A paid live class buys a syllabus, correction and a seat. From ₹999/mo, inclusive of taxes in India.",
    shortTitle: "Free vs paid",
    keywords: [
      "free english speaking practice vs class",
      "do i need to pay for spoken english",
      "best free way to learn spoken english india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Free vs paid", path: "/free-english-speaking-practice-vs-paid-class" },
    ],
    summary:
      "When free practice is enough and when a ₹999/month live seat is the cheaper way to actually speak. Written by a provider, and says so.",
    faqs: [
      {
        q: "Can I learn spoken English for free in India?",
        a: "Yes. A language-exchange partner, a daily podcast, and speaking to one person in English every day costs nothing and works if you are disciplined. A paid class buys a fixed syllabus, someone who corrects the same mistake, and a schedule you are accountable to. If you already have those, spend nothing.",
      },
    ],
  },
  "/ielts-coaching-fees-india": {
    path: "/ielts-coaching-fees-india",
    title: "IELTS Coaching Fees India 2026 | Market Guide",
    description:
      "IELTS coaching in India: ₹8,000–₹35,000 typical plus the exam fee. Learn With Smile does not sell IELTS. Spoken English from ₹999/mo if speaking is the gap.",
    shortTitle: "IELTS fees",
    keywords: [
      "ielts coaching fees in india",
      "ielts coaching fees 2026",
      "online ielts classes fees india",
    ],
    ogImage: "/og/ielts.jpg",
    priority: 0.85,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "IELTS fees", path: "/ielts-coaching-fees-india" },
    ],
    summary:
      "IELTS coaching fees in India in 2026, what the exam fee is not, and why Learn With Smile does not sell that paper. No band guarantee.",
    faqs: [
      {
        q: "How much does IELTS coaching cost in India in 2026?",
        a: "Full IELTS courses typically run ₹8,000–₹35,000, with large-institute classrooms at the higher end and 20–40 students per batch. The IELTS exam fee is separate and paid to IDP or British Council. Learn With Smile does not sell IELTS as a course. If you cannot yet hold a conversation, start with Spoken English at ₹999/month.",
      },
      {
        q: "Does IELTS coaching guarantee Band 7?",
        a: "No ethical course can. Writing is usually the bottleneck. The test board issues the score. Learn With Smile does not sell IELTS. If you cannot yet hold a conversation, start with Spoken English, not an exam shop.",
      },
    ],
  },
  "/english-for-it-professionals-india": {
    path: "/english-for-it-professionals-india",
    title: "Spoken English for IT Professionals India",
    description:
      "Standups, tickets, client calls for Indian IT. Business English ₹1,999/mo or Spoken ₹999/mo, around 6 learners, inclusive of taxes. IST live batches.",
    shortTitle: "IT professionals",
    keywords: [
      "english for it professionals india",
      "spoken english for software engineers",
      "standup english for developers",
    ],
    ogImage: "/og/business-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "IT professionals", path: "/english-for-it-professionals-india" },
    ],
    summary:
      "IT and GCC English: standups, tickets, client calls. Spoken first if you cannot chat; Workplace if the meeting is the freeze. No promotion guarantee.",
    faqs: [
      {
        q: "Which English course is best for IT professionals in India?",
        a: "If daily English is still the gap, Basic Spoken English (₹999/month, 6 months). If chat is fine and standups, tickets or clients go silent, Business English (₹1,999/month, 3 months). Both live, approximately 6 learners, inclusive of taxes. We do not guarantee a promotion.",
      },
    ],
  },
};

function cityAliases(city: (typeof CITIES)[number]): string[] {
  const slug = city.slug;
  if (slug === "bengaluru") return ["bangalore"];
  if (slug === "delhi") return ["delhi ncr", "gurgaon", "noida", "gurugram"];
  if (slug === "mumbai") return ["thane", "navi mumbai"];
  return [];
}

function cityPage(city: (typeof CITIES)[number]): PageSeo {
  const name = city.name.toLowerCase();
  const aliases = cityAliases(city);
  return {
    path: city.path,
    title: city.title,
    description: city.description,
    shortTitle: city.name,
    keywords: [
      `spoken english classes ${name}`,
      `spoken english classes in ${name} online`,
      `english speaking course ${name} fees`,
      `free consultation spoken english ${name}`,
      `free counselling spoken english ${name}`,
      `free consulting spoken english ${name}`,
      ...aliases.flatMap((a) => [
        `spoken english classes ${a} online`,
        `free consultation spoken english ${a}`,
      ]),
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.75,
    changefreq: "monthly",
    dateModified: CITY_UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: city.name, path: city.path },
    ],
    summary: `Live online Spoken English for ${city.name}, ${city.state}. ₹999/month inclusive of taxes, approximately 6 learners, IST batches. Office in Kolkata, not a local campus.`,
    faqs: cityFaqs(city),
  };
}

export const EXTRA_PAGES: Record<string, PageSeo> = {
  ...NEW_GUIDES,
  ...Object.fromEntries(CITIES.map((c) => [c.path, cityPage(c)])),
};
