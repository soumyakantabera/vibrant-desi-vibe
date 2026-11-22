/**
 * Every word of the speaking level test in English, Hindi and Bengali.
 *
 * Scoring, bands and course routing stay in src/lib/level-test.ts so the three
 * languages can never disagree about a result — only the words change here.
 * Course names, fees and "WhatsApp" stay in English/Latin script, as on the
 * rest of the site's Hindi and Bengali pages.
 *
 * Kept free of Vite-only imports (the page bodies and llms builders read it).
 */
import { LEVEL_MAX, type LevelBand, type LevelGoal, type LevelRoomId } from "@/lib/level-test";

export type TestLang = "en" | "hi" | "bn";

export const TEST_LANGS: { id: TestLang; label: string; htmlLang: string }[] = [
  { id: "en", label: "English", htmlLang: "en-IN" },
  { id: "hi", label: "हिंदी", htmlLang: "hi-IN" },
  { id: "bn", label: "বাংলা", htmlLang: "bn-IN" },
];

export const LEVEL_TEST_LANG_PATHS: Record<TestLang, string> = {
  en: "/english-speaking-level-test",
  hi: "/english-speaking-test-hindi",
  bn: "/english-speaking-test-bengali",
};

export type TestCopy = {
  title: string;
  sub: string;
  hint: string;
  stepOf: (n: number, total: number) => string;
  back: string;
  /** The four can-do questions, in order (one per level), phrased as questions. */
  questions: string[];
  /** Index by points: [0] "Not yet", [1] "With difficulty", [2] "Yes, easily". */
  options: [string, string, string];
  goalQuestion: string;
  goals: Record<LevelGoal, string>;
  bands: Record<LevelBand["id"], { name: string; meaning: string; cefr: string }>;
  rooms: Record<LevelRoomId, { fee: string; why: string }>;
  resultLabel: string;
  suggested: string;
  feeNote: string;
  send: string;
  freeNote: string;
  retake: string;
  languageLabel: string;
  scaleLabel: string;
  message: (o: { score: number; band: string; goal: string; course: string }) => string;
};

export const TEST_COPY: Record<TestLang, TestCopy> = {
  en: {
    title: "Find your English speaking level",
    sub: "5 quick taps · 1 minute · free",
    hint: "Tap the answer that is honestly true for you today.",
    stepOf: (n, t) => `Question ${n} of ${t}`,
    back: "Back",
    questions: [
      "Can you introduce yourself in 3–4 sentences: name, city, work or studies?",
      "Can you tell someone what you did last weekend, in the past tense?",
      "Can you speak for one minute on a familiar topic without stopping, with tenses mostly right?",
      "Can you speak in a meeting or an interview — even with an unexpected question — without freezing?",
    ],
    options: ["Not yet", "With difficulty", "Yes, easily"],
    goalQuestion: "What do you need English for first?",
    goals: {
      everyday: "Everyday conversation and confidence",
      work: "Meetings, client calls and office English",
      interview: "Job interviews and HR rounds",
    },
    bands: {
      starting: {
        name: "Starting out",
        cefr: "around A1",
        meaning:
          "You understand some English but cannot yet build your own sentences when speaking.",
      },
      building: {
        name: "Building basics",
        cefr: "around A2",
        meaning:
          "Simple sentences work, but you stop often, switch to Hindi or your own language, and tenses slip.",
      },
      connecting: {
        name: "Connecting sentences",
        cefr: "around B1",
        meaning:
          "You can talk about familiar things, but grammar, flow and fillers let you down in longer answers.",
      },
      performing: {
        name: "Ready to perform",
        cefr: "around B2",
        meaning:
          "You have the English; pressure is the problem — meetings, calls, interviews, unexpected questions.",
      },
    },
    rooms: {
      basic: {
        fee: "₹1,199/month · 6 months",
        why: "Sounds, sentence patterns and everyday vocabulary, with speaking in every class. Also taught through Hindi or Bengali.",
      },
      intermediate: {
        fee: "₹1,999/month · 4 months",
        why: "30 minutes of grammar and an hour of communication per class: tenses, flow, fewer fillers, longer answers.",
      },
      interactive: {
        fee: "₹1,599/month · 3 months",
        why: "Role-plays, meetings, client calls and presentations until speaking under pressure feels ordinary.",
      },
      interview: {
        fee: "₹2,499/month · 2 months",
        why: "The 60-second intro, STAR answers, HR and panel rounds, with recorded mock interviews.",
      },
    },
    resultLabel: "Your result",
    suggested: "Suggested course",
    feeNote: "inclusive of taxes · about 6 learners per batch",
    send: "Send my result on WhatsApp",
    freeNote:
      "Free. A teacher confirms your level on WhatsApp — advice, not a class. Replies 10am–midnight IST every day. This is a self-check, not a certificate.",
    retake: "Take it again",
    languageLabel: "Language",
    scaleLabel: "Level scale",
    message: ({ score, band, goal, course }) =>
      `Hi, I took the English speaking level test on your website. My score is ${score}/${LEVEL_MAX} (${band}). My goal is ${goal.charAt(0).toLowerCase() + goal.slice(1)}. It suggested ${course}. I'd like to book a free group consultation to confirm my level. Please send me the booking link.`,
  },

  hi: {
    title: "अपना English बोलने का लेवल जानें",
    sub: "5 आसान टैप · 1 मिनट · बिल्कुल फ़्री",
    hint: "जो आज आपके लिए सच में सही है, वही चुनें।",
    stepOf: (n, t) => `सवाल ${n} / ${t}`,
    back: "पीछे",
    questions: [
      "क्या आप 3–4 वाक्यों में English में अपना परिचय दे सकते हैं — नाम, शहर, काम या पढ़ाई?",
      "क्या आप बता सकते हैं कि पिछले वीकेंड आपने क्या किया (past tense)?",
      "क्या आप किसी जाने-पहचाने विषय पर एक मिनट बिना रुके बोल सकते हैं, ज़्यादातर सही tense के साथ?",
      "क्या आप मीटिंग या इंटरव्यू में — अचानक आए सवाल पर भी — बिना अटके English बोल सकते हैं?",
    ],
    options: ["अभी नहीं", "मुश्किल से", "हाँ, आसानी से"],
    goalQuestion: "आपको सबसे पहले English किस लिए चाहिए?",
    goals: {
      everyday: "रोज़ की बातचीत और आत्मविश्वास",
      work: "मीटिंग, क्लाइंट कॉल और ऑफ़िस की English",
      interview: "जॉब इंटरव्यू और HR राउंड",
    },
    bands: {
      starting: {
        name: "शुरुआत",
        cefr: "लगभग A1",
        meaning: "आप थोड़ी English समझते हैं, पर बोलते समय अपने वाक्य अभी नहीं बना पाते।",
      },
      building: {
        name: "बेसिक बन रहा है",
        cefr: "लगभग A2",
        meaning: "छोटे वाक्य बन जाते हैं, पर आप बार-बार रुकते हैं, हिंदी पर आ जाते हैं और tense गड़बड़ होते हैं।",
      },
      connecting: {
        name: "वाक्य जोड़ने का लेवल",
        cefr: "लगभग B1",
        meaning: "जानी-पहचानी बातें कर लेते हैं, पर लंबे जवाब में grammar, flow और ‘umm’ परेशान करते हैं।",
      },
      performing: {
        name: "परफ़ॉर्म करने को तैयार",
        cefr: "लगभग B2",
        meaning: "English आपके पास है; असली दिक्कत दबाव है — मीटिंग, कॉल, इंटरव्यू, अचानक आए सवाल।",
      },
    },
    rooms: {
      basic: {
        fee: "₹1,199/माह · 6 महीने",
        why: "आवाज़ें, वाक्य-पैटर्न और रोज़ के शब्द — हर क्लास में बोलने की प्रैक्टिस। Hindi to English वर्शन में टीचर ज़रूरत पड़ने पर हिंदी में समझाती हैं।",
      },
      intermediate: {
        fee: "₹1,999/माह · 4 महीने",
        why: "हर क्लास में 30 मिनट grammar और 1 घंटा बातचीत: tense, flow, कम ‘umm’, लंबे जवाब।",
      },
      interactive: {
        fee: "₹1,599/माह · 3 महीने",
        why: "रोल-प्ले, मीटिंग, क्लाइंट कॉल और प्रेज़ेंटेशन — जब तक दबाव में बोलना आम न लगने लगे।",
      },
      interview: {
        fee: "₹2,499/माह · 2 महीने",
        why: "60 सेकंड का परिचय, STAR जवाब, HR और पैनल राउंड, रिकॉर्ड किए गए मॉक इंटरव्यू।",
      },
    },
    resultLabel: "आपका नतीजा",
    suggested: "सुझाया गया कोर्स",
    feeNote: "टैक्स सहित · हर बैच में लगभग 6 लोग",
    send: "WhatsApp पर मेरा नतीजा भेजें",
    freeNote:
      "फ़्री। टीचर WhatsApp पर आपका लेवल कन्फ़र्म करती हैं — यह सलाह है, क्लास नहीं। जवाब रोज़ सुबह 10 बजे से रात 12 बजे (IST) तक। यह सेल्फ़-चेक है, सर्टिफ़िकेट नहीं।",
    retake: "फिर से दें",
    languageLabel: "भाषा",
    scaleLabel: "लेवल स्केल",
    message: ({ score, band, goal, course }) =>
      `नमस्ते, मैंने आपकी वेबसाइट पर English speaking level test दिया। मेरा स्कोर ${score}/${LEVEL_MAX} है (${band})। मेरा लक्ष्य: ${goal}। सुझाया गया कोर्स: ${course}। लेवल कन्फ़र्म करने के लिए मुझे फ़्री ग्रुप कंसल्टेशन बुक करना है। Please send me the booking link.`,
  },

  bn: {
    title: "আপনার ইংরেজি বলার লেভেল জানুন",
    sub: "5টা সহজ ট্যাপ · 1 মিনিট · একদম ফ্রি",
    hint: "আজ আপনার ক্ষেত্রে যেটা সত্যিই ঠিক, সেটাই বেছে নিন।",
    stepOf: (n, t) => `প্রশ্ন ${n} / ${t}`,
    back: "আগের প্রশ্ন",
    questions: [
      "আপনি কি 3–4টি বাক্যে ইংরেজিতে নিজের পরিচয় দিতে পারেন — নাম, শহর, কাজ বা পড়াশোনা?",
      "গত উইকেন্ডে কী করেছেন তা ইংরেজিতে বলতে পারেন (past tense)?",
      "চেনা কোনো বিষয়ে এক মিনিট না থেমে বলতে পারেন, বেশিরভাগ সময় ঠিক tense-এ?",
      "মিটিং বা ইন্টারভিউতে — হঠাৎ প্রশ্ন এলেও — আটকে না গিয়ে ইংরেজিতে বলতে পারেন?",
    ],
    options: ["এখনও না", "কষ্ট করে", "হ্যাঁ, সহজেই"],
    goalQuestion: "সবার আগে ইংরেজি কীসের জন্য দরকার?",
    goals: {
      everyday: "রোজকার কথাবার্তা আর আত্মবিশ্বাস",
      work: "মিটিং, ক্লায়েন্ট কল আর অফিসের ইংরেজি",
      interview: "চাকরির ইন্টারভিউ আর HR রাউন্ড",
    },
    bands: {
      starting: {
        name: "শুরুর ধাপ",
        cefr: "প্রায় A1",
        meaning: "আপনি কিছুটা ইংরেজি বোঝেন, কিন্তু বলার সময় এখনও নিজে বাক্য বানাতে পারেন না।",
      },
      building: {
        name: "বেসিক তৈরি হচ্ছে",
        cefr: "প্রায় A2",
        meaning: "ছোট বাক্য হয়ে যায়, কিন্তু বারবার থামেন, বাংলায় চলে যান আর tense ভুল হয়।",
      },
      connecting: {
        name: "বাক্য জোড়ার ধাপ",
        cefr: "প্রায় B1",
        meaning: "চেনা বিষয়ে কথা বলতে পারেন, কিন্তু লম্বা উত্তরে grammar, flow আর ‘umm’ সমস্যা করে।",
      },
      performing: {
        name: "পারফর্ম করার জন্য তৈরি",
        cefr: "প্রায় B2",
        meaning: "ইংরেজি আপনার আছে; আসল সমস্যা চাপ — মিটিং, কল, ইন্টারভিউ, হঠাৎ প্রশ্ন।",
      },
    },
    rooms: {
      basic: {
        fee: "₹1,199/মাস · 6 মাস",
        why: "উচ্চারণ, বাক্যের প্যাটার্ন আর রোজকার শব্দ — প্রতি ক্লাসে বলার প্র্যাকটিস। দরকার হলে টিচার বাংলায় বুঝিয়ে দেন।",
      },
      intermediate: {
        fee: "₹1,999/মাস · 4 মাস",
        why: "প্রতি ক্লাসে 30 মিনিট grammar আর 1 ঘণ্টা কথাবার্তা: tense, flow, কম ‘umm’, লম্বা উত্তর।",
      },
      interactive: {
        fee: "₹1,599/মাস · 3 মাস",
        why: "রোল-প্লে, মিটিং, ক্লায়েন্ট কল আর প্রেজেন্টেশন — যতক্ষণ না চাপের মধ্যে বলা স্বাভাবিক লাগে।",
      },
      interview: {
        fee: "₹2,499/মাস · 2 মাস",
        why: "60 সেকেন্ডের পরিচয়, STAR উত্তর, HR আর প্যানেল রাউন্ড, রেকর্ড করা মক ইন্টারভিউ।",
      },
    },
    resultLabel: "আপনার ফলাফল",
    suggested: "সাজেস্ট করা কোর্স",
    feeNote: "ট্যাক্স সহ · প্রতি ব্যাচে প্রায় 6 জন",
    send: "WhatsApp-এ আমার ফলাফল পাঠান",
    freeNote:
      "ফ্রি। টিচার WhatsApp-এ আপনার লেভেল কনফার্ম করেন — এটা পরামর্শ, ক্লাস নয়। রোজ সকাল 10টা থেকে রাত 12টা (IST) পর্যন্ত উত্তর। এটা সেল্ফ-চেক, সার্টিফিকেট নয়।",
    retake: "আবার দিন",
    languageLabel: "ভাষা",
    scaleLabel: "লেভেল স্কেল",
    message: ({ score, band, goal, course }) =>
      `নমস্কার, আপনাদের ওয়েবসাইটে English speaking level test দিয়েছি। আমার স্কোর ${score}/${LEVEL_MAX} (${band})। আমার লক্ষ্য: ${goal}। সাজেস্ট করা কোর্স: ${course}। লেভেল কনফার্ম করতে ফ্রি গ্রুপ কনসালটেশন বুক করতে চাই। Please send me the booking link.`,
  },
};
