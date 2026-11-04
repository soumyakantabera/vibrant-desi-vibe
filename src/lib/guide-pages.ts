import type { PageSeo } from "@/lib/seo";
import { RATING } from "@/lib/rating";
import { CITIES, cityFaqs } from "@/lib/cities";
import { BEFORE_YOU_PAY_PATH, FAIR_BILLING } from "@/lib/fair-fees";

const UPDATED = "2026-09-22";
/** City pages (and the Hindi/Bengali guides) last changed — the shared fee table gained Intermediate. */
const CITY_UPDATED = "2026-10-30";

const NEW_GUIDES: Record<string, PageSeo> = {
  [BEFORE_YOU_PAY_PATH]: {
    path: BEFORE_YOU_PAY_PATH,
    title: "Before You Pay for a Spoken English Course | 10 Checks",
    description:
      "Refunds, loans, EMIs, auto-renewal, hidden charges: 10 checks to run on any spoken English course in India before you pay — and how we answer each.",
    shortTitle: "Before you pay for an English course",
    keywords: [
      "spoken english course refund policy",
      "english course refund india",
      "english speaking course emi",
      "is online english course safe to pay",
      "english course without loan",
      "english app auto renewal cancel",
      "spoken english course monthly payment",
      "english course complaint india",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.7,
    changefreq: "monthly",
    dateModified: "2026-11-03",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Before you pay", path: BEFORE_YOU_PAY_PATH },
    ],
    summary: `A 10-point checklist for paying for any spoken English course in India: months paid upfront, loans and EMIs, auto-renewal, written refund terms, tax-inclusive price, real deadlines, batch size and teacher, complaint handling, review patterns, and whether the trial is a class. Common complaint patterns (upfront yearly fees, refunds not paid, auto-renewing app plans, rotating tutors). Indian rules: CCPA Dark Patterns Guidelines 2023, Ministry of Education coaching guidelines 2024, National Consumer Helpline 1915. ${FAIR_BILLING}`,
    faqs: [
      {
        q: "Is it safe to pay for an online spoken English course in advance?",
        a: "Pay for one month at a time, never a year, and get the refund rule in writing before you pay. Avoid any plan that needs a loan, an EMI or a saved card. Learn With Smile bills one month at a time with no auto-debit, and refunds a month in full if you cancel before its first class.",
      },
      {
        q: "Can I get a refund on a spoken English course in India?",
        a: "It depends on the provider's written policy, so ask for it before paying. Some refund only a trial; some refund nothing once you start. At Learn With Smile, cancel a month before its first live class for a full refund, which we start within 2 working days. After that class, that month is not refunded for a change of mind.",
      },
      {
        q: "Should I take a loan or EMI to pay for an English course?",
        a: "Usually not. A spoken English course is a monthly habit, not a one-off purchase; a loan locks you into a year whether or not the class works for you. Learn With Smile never offers or arranges a loan or EMI — fees start at ₹999 a month, inclusive of taxes.",
      },
      {
        q: "How do I stop an English app subscription from renewing?",
        a: "Cancel it in the store, not by deleting the app: Google Play → Payments & subscriptions → Subscriptions, or iPhone Settings → your name → Subscriptions. Learn With Smile has nothing to cancel: there is no auto-debit, and each month is a fresh payment link.",
      },
      {
        q: "What is a dark pattern in online course selling?",
        a: "A design or sales trick that pushes you to pay. India's 2023 dark-pattern guidelines name 13, including false urgency (fake countdowns or 'last 2 seats'), the subscription trap (hard-to-cancel plans, trials that auto-debit) and drip pricing (charges revealed in stages).",
      },
    ],
  },
  // Written in Hindi and Bengali for learners who search in their own language.
  // `lang` sets hreflang, og:locale and inLanguage for these two only.
  "/spoken-english-in-hindi": {
    path: "/spoken-english-in-hindi",
    lang: "hi-IN",
    title: "Spoken English in Hindi | English Bolna Kaise Sikhe",
    description:
      "English बोलना कैसे सीखें: रोज़ 15 मिनट की प्रैक्टिस, हिंदी बोलने वालों की आम गलतियाँ और 6 महीने का असली प्लान। लाइव क्लास ₹999/माह से।",
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
      "Hindi-language guide to learning spoken English: realistic timeline (about 3 months from zero to confident), a 15-minute daily routine, common mistakes Hindi speakers make, and when a live class helps. Classes from ₹999/month inclusive of taxes.",
    faqs: [
      {
        q: "English बोलना सीखने में कितना समय लगता है?",
        a: "बिल्कुल शुरू से रोज़मर्रा की बातचीत तक आम तौर पर करीब 6 महीने लगते हैं — अगर हफ़्ते में 2 लाइव क्लास हों और रोज़ थोड़ी प्रैक्टिस। ऑफ़िस की English अक्सर 3 महीने और। 30 दिन में फ़्लुएंसी का दावा विज्ञापन है।",
      },
      {
        q: "क्या हिंदी-मीडियम से पढ़े लोग English बोलना सीख सकते हैं?",
        a: "हाँ। स्कूल की भाषा ने तय किया कि आपने कितनी English सुनी, यह नहीं कि आप बोल सकते हैं या नहीं। Learn With Smile की क्लास English में होती है; कोई बात अटके तो टीचर हिंदी में समझाती हैं, फिर वापस English।",
      },
      {
        q: "Learn With Smile की फ़ीस कितनी है?",
        a: "Basic Spoken English ₹999/माह (6 महीने), Intermediate Spoken English ₹1,999/माह (4 महीने), Interactive Speaking ₹1,599/माह (मीटिंग और कॉल भी), Interview Preparation ₹2,499/माह — सभी टैक्स सहित, करीब 6 लोगों का लाइव बैच। फ़्री सलाह WhatsApp पर मिलती है — यह क्लास नहीं, सलाह है। फ़ीस हर महीने, कोई ऑटो-डेबिट नहीं।",
      },
      {
        q: "क्या घर पर बिना क्लास के English बोलना सीख सकते हैं?",
        a: "शुरुआत तो हाँ — रोज़ ज़ोर से बोलना, रिकॉर्ड करना और शैडोइंग बहुत मदद करते हैं। पर अपनी गलतियाँ खुद पकड़ना मुश्किल है, और असली बातचीत का दबाव अकेले नहीं बनता। अगर 3–4 हफ़्ते बाद भी अटकते हैं, तो छोटा लाइव बैच मदद करता है।",
      },
    ],
  },
  "/spoken-english-in-bengali": {
    path: "/spoken-english-in-bengali",
    lang: "bn-IN",
    title: "Spoken English in Bengali | English Bolte Shikhun",
    description:
      "ইংরেজি বলতে শিখুন: রোজ 15 মিনিটের প্র্যাকটিস, বাঙালিদের কমন ভুল আর 6 মাসের সত্যিকারের প্ল্যান। কলকাতা থেকে লাইভ ক্লাস, ₹999/মাস থেকে।",
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
      "Bengali-language guide to learning spoken English: realistic timeline (about 3 months from zero to confident), a 15-minute daily routine, common mistakes Bengali speakers make (he/she, v/bh, s/sh), and when a live class helps. Taught from Kolkata, from ₹999/month inclusive of taxes.",
    faqs: [
      {
        q: "ইংরেজি বলতে শিখতে কত সময় লাগে?",
        a: "একদম গোড়া থেকে রোজকার কথাবার্তা পর্যন্ত সাধারণত প্রায় 6 মাস লাগে — যদি সপ্তাহে 2টো লাইভ ক্লাস আর রোজ একটু প্র্যাকটিস থাকে। অফিসের ইংরেজির জন্য প্রায়ই আরও 3 মাস। 30 দিনে ফ্লুয়েন্সির দাবিটা শুধুই বিজ্ঞাপন।",
      },
      {
        q: "বাংলা মিডিয়ামে পড়লে কি ইংরেজি বলা শেখা যায়?",
        a: "হ্যাঁ। স্কুলের মাধ্যম ঠিক করেছে আপনি কতটা ইংরেজি শুনেছেন, আপনি বলতে পারবেন কিনা তা নয়। Learn With Smile-এর ক্লাস ইংরেজিতে হয়; কিছু না বুঝলে টিচার বাংলায় বুঝিয়ে দেন, তারপর আবার ইংরেজিতে।",
      },
      {
        q: "Learn With Smile-এর ফি কত?",
        a: "Basic Spoken English ₹999/মাস (6 মাস), Intermediate Spoken English ₹1,999/মাস (4 মাস), Interactive Speaking ₹1,599/মাস (মিটিং আর কলও), Interview Preparation ₹2,499/মাস — সবই ট্যাক্স সহ, প্রায় 6 জনের লাইভ ব্যাচ। ফ্রি পরামর্শ WhatsApp-এ — এটা ক্লাস নয়, পরামর্শ। ফি মাসে মাসে, কোনো অটো-ডেবিট নেই।",
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
    dateModified: "2026-10-30",
    summary:
      "Hub for every long-form English class guide: fees, fit, time, audience, cities, and what the free consultation actually delivers. From ₹999/month inclusive of taxes, batches of around 6.",
    faqs: [
      {
        q: "Where should I start if I want a live English class in India?",
        a: "If you cannot hold a conversation, start with Spoken English for beginners (3 months, ₹999/month, approx. 6 learners). If basic sentences work but grammar and flow do not, take Intermediate Spoken English (4 months, ₹1,999/month). If you freeze with words you already have, or meetings and calls are the gap, take Interactive Speaking (₹1,599/month). Unsure? Get a free consultation — we diagnose the bottleneck and place you in one room. Fees, comparisons and city pages are linked from this hub. Chat on WhatsApp; we reply 10am–midnight IST every day.",
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
      "Zero to a 2-minute turn: 3 months, around 6 learners, ₹999/month inclusive of taxes. Hindi and Bengali support. Live IST batches. No 30-day fluency ads.",
    shortTitle: "Beginners",
    keywords: [
      "spoken english for beginners in india",
      "basic spoken english course online",
      "english speaking classes for zero level",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.85,
    changefreq: "monthly",
    dateModified: "2026-10-08",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Beginners", path: "/spoken-english-for-beginners-india" },
    ],
    summary:
      "Beginner Spoken English: sounds, sentences, a 2-minute turn in 3 months. ₹999/month, approx. 6 learners, inclusive of taxes. Live, not recorded-as-class.",
    faqs: [
      {
        q: "Can a complete beginner learn spoken English online in India?",
        a: "Yes, if the room is small enough that you speak every hour and someone corrects the same error until it goes. Learn With Smile Basic Spoken English is 3 months, ₹999/month inclusive of taxes, approximately 6 learners, up to 2 live classes a week. 30-day fluency from zero is marketing.",
      },
      {
        q: "I studied in Hindi or Bengali medium. Can I still join a beginner class?",
        a: "Yes. Most of our learners did. The class is English; when a concept stalls the teacher explains in Hindi or Bengali, then you go back to English. An English-only room for a genuine beginner produces silence.",
      },
      {
        q: "What will I be able to do after 3 months?",
        a: "Confident everyday English from zero: introduce yourself, shops, a phone call, a two-minute talk. Correct, fluent English (Intermediate) and workplace meetings (Interactive Speaking) are the next rooms, not this one. Exam bands are a different paper. Results vary with how often you actually speak.",
      },
      {
        q: "Should a beginner start with an app or a live class?",
        a: "Either can start the habit. Apps are good for vocabulary and a daily routine but rarely make you speak in full sentences. If after a month you can read simple English but cannot say it without notes, a small live class is the next step — a beginner needs someone to hear the sentence and correct it.",
      },
    ],
  },
  "/intermediate-spoken-english-course-india": {
    path: "/intermediate-spoken-english-course-india",
    title: "Intermediate Spoken English Course in India",
    description:
      "Basic sentences work, flow does not? A 4-month intermediate plan: grammar + fluency every class, debates, presentations. ₹1,999/mo, about 6 per batch.",
    shortTitle: "Intermediate spoken English",
    keywords: [
      "intermediate spoken english course online india",
      "spoken english course after basic level",
      "how to improve english from basic to fluent",
      "english grammar mistakes while speaking",
      "how to stop saying um and ah in english",
      "lsrw skills english course online",
      "advanced spoken english course online india",
    ],
    ogImage: "/og/intermediate-english.jpg",
    priority: 0.85,
    changefreq: "monthly",
    dateModified: "2026-10-30",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Intermediate spoken English", path: "/intermediate-spoken-english-course-india" },
    ],
    summary:
      "Intermediate spoken English guide: who is intermediate (simple sentences work, accuracy and flow do not), a self-test, what 4 months cover month by month, free drills (shadowing, 60-second turns, filler counting), and when a class helps. Course: ₹1,999/month, 4 months, approx. 6 learners, 30 min grammar + 1 hr communication.",
    faqs: [
      {
        q: "How do I know if I am an intermediate English speaker?",
        a: "You can introduce yourself, order food and answer simple questions in English, but tenses slip when you talk fast, you fill gaps with um and like, and longer ideas come out as short broken sentences. Roughly CEFR A2–B1. If you cannot yet finish a simple sentence aloud, you are a beginner — start with Basic Spoken English.",
      },
      {
        q: "How can I improve my English from intermediate to fluent?",
        a: "Three things together: fix the few grammar patterns you repeat wrongly (usually tenses, articles and agreement), speak in timed 60–90 second turns every day, and listen to real English — podcasts, news, talks — then retell it. Record yourself and count fillers. A live class adds a teacher who hears the same error and a group to debate and present to.",
      },
      {
        q: "What is the fee for the intermediate course at Learn With Smile?",
        a: "Intermediate Spoken English is ₹1,999 per month, inclusive of taxes, for 4 months — up to 2 live classes a week of 90 minutes, approximately 6 learners. Each class is 30 minutes of grammar and 1 hour of communication. The course is extendable.",
      },
      {
        q: "Is an intermediate course the same as an advanced spoken English course?",
        a: "Many Indian institutes call the step after basic “advanced”. Here it is called Intermediate: grammar accuracy plus connected speech, debates and presentations. Workplace English — meetings, client calls, emails — is a separate room, Business English.",
      },
    ],
  },
  "/how-to-speak-english-fluently": {
    path: "/how-to-speak-english-fluently",
    title: "How to Speak English Fluently in India",
    description:
      "Fluency is minutes you spoke, not 30-day ads. From zero: about 3 months live to confident, around 6 learners, ₹999/mo inclusive of taxes. Drills you can start today.",
    shortTitle: "Speak fluently",
    keywords: [
      "how to speak english fluently",
      "how to speak english fluently in 6 months",
      "english fluency tips india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.85,
    changefreq: "monthly",
    dateModified: "2026-10-30",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Speak fluently", path: "/how-to-speak-english-fluently" },
    ],
    summary:
      "How to speak English fluently: speaking minutes, a 3-month start from zero, and five drills that cost nothing. Paid class only if you need a syllabus and a seat.",
    faqs: [
      {
        q: "How can I speak English fluently?",
        a: "Speak every day in short turns, get the same errors corrected, and keep a map so you are not guessing. From zero, speaking up with confidence usually takes about 3 months of live practice, and fluent, correct English about 7 — not 30 days. A batch of around 6 gives 8–10 minutes per hour; a room of 30 often gives 1–2.",
      },
      {
        q: "Can I become fluent in English without a class?",
        a: "Yes, if you already have discipline: a daily 10-minute voice note, one conversation partner, and honest recordings. A paid class buys a syllabus, a teacher who remembers your errors, and a seat you show up to. If you already have those three, spend nothing.",
      },
      {
        q: "Which app is best to speak English fluently?",
        a: "No single app makes you fluent. Duolingo-style apps build a vocabulary habit, ELSA-style apps help pronunciation, and AI voice chat gives unlimited speaking practice. Fluency needs months of speaking with correction; apps work best as practice between live conversations, not as a replacement for them.",
      },
    ],
  },
  "/spoken-english-for-freshers-india": {
    path: "/spoken-english-for-freshers-india",
    title: "Spoken English for Freshers | Interview Ready",
    description:
      "Campus intro, HR screen, 60-second chair. Spoken from ₹999/mo or Interactive ₹1,599/mo, around 6 learners, inclusive of taxes. No job promise. Kolkata.",
    shortTitle: "Freshers",
    keywords: [
      "spoken english for freshers",
      "english speaking course after graduation",
      "campus placement english india",
    ],
    ogImage: "/og/interview-prep.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-10-08",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Freshers", path: "/spoken-english-for-freshers-india" },
    ],
    summary:
      "Freshers: if you cannot hold a conversation, Spoken English first. If chat is fine and interviews fail, Interview Preparation — 2 months, ₹2,499/month. No placement guarantee.",
    faqs: [
      {
        q: "Which English course should a fresher take in India?",
        a: "If you cannot hold a two-minute conversation, take Basic Spoken English (3 months, ₹999/month). If you can chat and still bomb HR screens, take Interview Preparation (2 months, ₹2,499/month) — 60-second intro, STAR, recorded mocks. Both are live, approximately 6 learners, inclusive of taxes. We do not promise a job.",
      },
      {
        q: "Do I need IELTS for campus placements in India?",
        a: "Almost never. Indian interviews hear a 60-second intro. Sit IELTS when a university, visa or a specific HR form asks for the band.",
      },
      {
        q: "Is the college placement cell's training enough for interviews?",
        a: "For many freshers it is a good start — it is free and covers aptitude, group discussion and company patterns. What it rarely gives is repeated speaking practice with someone correcting your answers. If your HR round still collapses after placement training, a small live batch with mock interviews fills that gap.",
      },
    ],
  },
  "/spoken-english-for-homemakers-india": {
    path: "/spoken-english-for-homemakers-india",
    title: "Spoken English for Homemakers | From ₹999",
    description:
      "Daytime IST batches for homemakers: shops, school meetings, a voice of your own. 3 months, ₹999/month inclusive of taxes, around 6 learners. Live. Kolkata.",
    shortTitle: "Homemakers",
    keywords: [
      "spoken english for housewives india",
      "spoken english for homemakers online",
      "english speaking classes for ladies india",
    ],
    ogImage: "/og/spoken-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-10-08",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Homemakers", path: "/spoken-english-for-homemakers-india" },
    ],
    summary:
      "Homemakers and housewives: live Spoken English in daytime IST batches, around 6 learners, ₹999/month inclusive of taxes. Not a kids class, not a certificate mill.",
    faqs: [
      {
        q: "Are there spoken English classes for homemakers in India?",
        a: "Yes. Learn With Smile runs live IST afternoon batches that homemakers actually attend. Basic Spoken English is 3 months, ₹999/month inclusive of taxes, approximately 6 learners. The class is for adults 15+, not children.",
      },
      {
        q: "I have been out of work for years. Is it too late?",
        a: "No. School medium and a career gap decide how much English you heard, not whether you can take a school meeting or a shop conversation in 3 months of live practice. We do not promise a job at the end.",
      },
      {
        q: "Is it too late to learn spoken English at 40 or 50?",
        a: "No. Adults can learn to speak a new language at any age; what changes is time and confidence, not ability. Short daily practice and a small batch where mistakes are normal matter more than age. Learn With Smile classes are for adults 15+, with afternoon and evening batches.",
      },
    ],
  },
  "/answers": {
    path: "/answers",
    title: "Answers: Fees, Syllabus, Roadmap and FAQs by Link",
    description:
      "Every Learn With Smile answer with its own link: fees, month-by-month roadmaps, syllabus modules and every course question. Live online, from ₹999/mo.",
    shortTitle: "Answers",
    keywords: [
      "learn with smile answers",
      "spoken english course syllabus month by month",
      "spoken english course fees and syllabus india",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "weekly",
    dateModified: "2026-11-04",
    breadcrumb: [{ name: "Answers", path: "/answers" }],
    summary:
      "Index of deep links into every course page (fee, outcomes, class split, each roadmap month, each syllabus module, each FAQ question) and the short-answer pages. Cite page#anchor so readers land on the answer.",
    faqs: [],
  },
  "/is-learn-with-smile-genuine": {
    path: "/is-learn-with-smile-genuine",
    title: "Is Learn With Smile Genuine? Reviews, Fees, Refunds",
    description: `Registered in Kolkata (GSTIN), 7 years, ${RATING.value}★ from ${RATING.count} ${RATING.source} reviews. Monthly billing, no auto-debit, refund rule in writing. From ₹999/mo.`,
    shortTitle: "Is it genuine?",
    keywords: [
      "is learn with smile genuine",
      "learn with smile reviews",
      "learn with smile legit or fake",
      "learn with smile kolkata spoken english review",
      "is online spoken english class worth it india",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-11-04",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Is it genuine?", path: "/is-learn-with-smile-genuine" },
    ],
    summary: `Is Learn With Smile genuine? A registered sole proprietorship in Kolkata (GSTIN 19CFGPD7931C1ZL), teaching live online spoken English for 7 years to 500+ adult learners, rated ${RATING.value}★ from ${RATING.count} ${RATING.source} reviews. Monthly billing through Razorpay, no auto-debit or loans, and a written refund rule.`,
    faqs: [
      {
        q: "Is Learn With Smile a real, registered institute?",
        a: "Yes. Learn With Smile is LEARN WITH SMILE SOLE PROPRIETORSHIP, GSTIN 19CFGPD7931C1ZL, registered at 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008. It has taught live online spoken English for 7 years to 500+ adult learners. There is one office (Kolkata); classes are live online.",
      },
      {
        q: "Where can I read Learn With Smile reviews?",
        a: `On its Google Business Profile: ${RATING.value}★ from ${RATING.count} ${RATING.source} reviews, which you can read in full at ${RATING.readUrl}. The site does not publish its own star ratings or testimonials as reviews.`,
      },
      {
        q: "Do I have to pay before I talk to someone?",
        a: "No. The free consultation on WhatsApp (+91 96744 79949) has no payment. You get the course, fee, timings and batch size in writing first, then decide. If you enrol, you pay one month at a time through Razorpay — UPI or card — with no auto-debit, no loans and no EMI.",
      },
      {
        q: "Can I get a refund?",
        a: "Yes, under a written rule: cancel a paid month before its first live class and the full fee is refunded, started within 2 working days. After that class, the month is not refunded for a change of mind, and you can stop any later month before it is billed. The full policy is at /refunds.",
      },
    ],
  },
  "/how-to-join-learn-with-smile": {
    path: "/how-to-join-learn-with-smile",
    title: "How to Join Learn With Smile | 4 Steps on WhatsApp",
    description:
      "Message WhatsApp, get a free consultation, pick an afternoon, evening or night IST batch, pay one month via Razorpay. From ₹999/mo incl. taxes. No auto-debit.",
    shortTitle: "How to join",
    keywords: [
      "how to join learn with smile",
      "learn with smile admission",
      "learn with smile whatsapp number",
      "how to enrol spoken english class online india",
      "learn with smile contact",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-11-04",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "How to join", path: "/how-to-join-learn-with-smile" },
    ],
    summary:
      "How to join Learn With Smile: message WhatsApp +91 96744 79949 (replies 10am–midnight IST every day), take the free consultation, choose a batch slot, pay the first month through Razorpay. Bolo app login arrives on WhatsApp after admission. No website checkout.",
    faqs: [
      {
        q: "What is the Learn With Smile WhatsApp number?",
        a: "+91 96744 79949 (wa.me/919674479949). Admissions reply 10am–midnight IST every day. Phone is a fallback; there is no website checkout or login.",
      },
      {
        q: "What do I need for the online class?",
        a: "A phone or laptop with a working microphone, a stable internet connection and a quiet place for 90 minutes. Classes run live online on IST. Learners must be 15 or older; for a learner under 18, a parent or guardian completes admission.",
      },
      {
        q: "How do I pay the fee?",
        a: "Through a Razorpay link sent on WhatsApp after you confirm the course: UPI, Google Pay, PhonePe, Paytm, Visa, Mastercard or RuPay. One month at a time, inclusive of taxes. No auto-debit, no UPI mandate, no loans or EMIs.",
      },
      {
        q: "Can I change my batch time later?",
        a: "Ask on WhatsApp. A change depends on a seat being free in another batch of the same course. A single missed class can be rescheduled within the same week if a seat exists, and every class is recorded for revision.",
      },
    ],
  },
  "/what-happens-in-a-live-english-class": {
    path: "/what-happens-in-a-live-english-class",
    title: "What Happens in One Live English Class (90 Minutes)",
    description:
      "One 90-minute live class: about 6 learners, the same teacher, 30 min grammar + 60 min speaking (or 90 min speaking), then daily Bolo practice. From ₹999/mo.",
    shortTitle: "Inside one class",
    keywords: [
      "what happens in online spoken english class",
      "spoken english class structure",
      "how online english class works india",
      "learn with smile class format",
      "90 minute spoken english class",
    ],
    ogImage: "/og/default.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-11-04",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "Inside one class", path: "/what-happens-in-a-live-english-class" },
    ],
    summary:
      "One Learn With Smile class is 90 minutes, live, about 6 learners, the same teacher every time. Basic and Intermediate: 30 minutes of grammar, then 60 minutes of communication. Interactive Speaking: 90 minutes of speaking. Between classes: daily practice in the Bolo app and a weekly teacher review of your reading and speaking.",
    faqs: [
      {
        q: "How long is one Learn With Smile class?",
        a: "90 minutes, live, with up to 2 classes a week. Basic Spoken English and Intermediate Spoken English split it into 30 minutes of grammar and 60 minutes of communication; Interactive Speaking is 90 minutes of speaking.",
      },
      {
        q: "How many students are in one class?",
        a: "About 6. A small batch is the point: everyone speaks in every class and the teacher corrects each person's errors, not a general list.",
      },
      {
        q: "Is the class recorded?",
        a: "Yes. Every class is recorded and shared for revision. The class itself is live — the recording is not the class.",
      },
      {
        q: "What do I do between classes?",
        a: "Practise in Bolo, the Learn With Smile app: daily grammar and vocabulary with a streak, reading and speaking practice, and video lessons chosen for your course. Every week your teacher reviews the reading and speaking you send. It is included in the monthly fee.",
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
    dateModified: "2026-10-08",
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
      {
        q: "Which is cheaper, online or offline spoken English classes?",
        a: "On the brochure, offline centres often look cheaper — ₹1,500–₹6,000 for three months in a city classroom of 25–40. Add commute time and the minutes you actually speak (1–2 an hour in a big room, 8–10 in a batch of about 6) and an online small batch usually costs less per minute of speaking. Learn With Smile Spoken English is ₹999/month, inclusive of taxes.",
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
    dateModified: "2026-10-08",
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
      {
        q: "Can I learn spoken English with AI like ChatGPT for free?",
        a: "AI voice chat is genuinely useful for practice: it is free or cheap, always available and never judges you. What it does not do well is notice your repeated mistakes unless you ask, keep you accountable, or give you a syllabus. Use it between classes or as a free start; if you are still freezing after a month, add a human who corrects you.",
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
    dateModified: "2026-10-08",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "IELTS fees", path: "/ielts-coaching-fees-india" },
    ],
    summary:
      "IELTS coaching fees in India in 2026, what the exam fee is not, and why Learn With Smile does not sell that paper. No band guarantee.",
    faqs: [
      {
        q: "How much does IELTS coaching cost in India in 2026?",
        a: "Full IELTS courses typically run ₹8,000–₹35,000, with large-institute classrooms at the higher end and 20–40 students per batch. The IELTS exam fee is separate — ₹19,000 since April 2026, paid to IDP, the IELTS provider in India. Learn With Smile does not sell IELTS as a course. If you cannot yet hold a conversation, start with Spoken English at ₹999/month.",
      },
      {
        q: "Does IELTS coaching guarantee Band 7?",
        a: "No ethical course can. Writing is usually the bottleneck. The test board issues the score. Learn With Smile does not sell IELTS. If you cannot yet hold a conversation, start with Spoken English, not an exam shop.",
      },
      {
        q: "What is the IELTS exam fee in India in 2026?",
        a: "₹19,000 for IELTS Academic or General Training, from 1 April 2026 (₹19,250 for IELTS for UKVI). In India the test is run by IDP; check the current fee on IDP's site before booking. Coaching, if you buy it, is separate. Learn With Smile does not sell IELTS coaching.",
      },
    ],
  },
  "/english-for-it-professionals-india": {
    path: "/english-for-it-professionals-india",
    title: "Spoken English for IT Professionals India",
    description:
      "Standups, tickets, client calls for Indian IT. Interactive Speaking ₹1,599/mo or Spoken ₹999/mo, around 6 learners, inclusive of taxes. IST live batches.",
    shortTitle: "IT professionals",
    keywords: [
      "english for it professionals india",
      "spoken english for software engineers",
      "standup english for developers",
    ],
    ogImage: "/og/business-english.jpg",
    priority: 0.8,
    changefreq: "monthly",
    dateModified: "2026-10-08",
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: "IT professionals", path: "/english-for-it-professionals-india" },
    ],
    summary:
      "IT and GCC English: standups, tickets, client calls. Spoken first if you cannot chat; Workplace if the meeting is the freeze. No promotion guarantee.",
    faqs: [
      {
        q: "Which English course is best for IT professionals in India?",
        a: "If daily English is still the gap, Basic Spoken English (₹999/month, 3 months). If chat is fine and standups, tickets or clients go silent, Interactive Speaking (₹1,599/month, 3 months). Both live, approximately 6 learners, inclusive of taxes. We do not guarantee a promotion.",
      },
      {
        q: "Is Toastmasters or a course better for IT professionals?",
        a: "They do different jobs. Toastmasters is good for prepared speaking — presentations and confidence in front of a group — with feedback from fellow members. A Business English course drills unprepared work English — standups, client calls, clarifying and pushing back — with a teacher correcting the same errors every week. Many people do both. If calls and standups are the problem, start with the course.",
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
