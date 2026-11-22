/**
 * Basic Spoken English, taught through Hindi or Bengali (November 2026).
 *
 * Same course as Basic Spoken English — 6 months, ₹1,199/month inclusive of
 * taxes, about 6 learners, up to 2 live classes a week, Bolo included — with
 * a teacher who speaks the learner's language. Hard concepts are explained in
 * Hindi or Bengali; the speaking practice is in English, and the share of
 * English grows month by month.
 *
 * The native-language block is short on purpose: Google prefers one primary
 * language per page, so these pages stay English-primary (en-IN) and the
 * Course JSON-LD declares the teaching language (hi-IN / bn-IN).

 */
import type { CourseData, NativeSection } from "@/components/CoursePage";
import { ALL_IN_ONE } from "@/lib/positioning";

export type MediumLang = "hi" | "bn";

const HINDI: NativeSection = {
  lang: "hi",
  anchor: "hindi",
  linkLabel: "In Hindi (हिंदी में)",
  label: "हिंदी में पढ़ें",
  heading: "हिंदी से इंग्लिश — बेसिक स्पोकन इंग्लिश",
  intro:
    "आपके टीचर हिंदी जानते हैं। जब कोई बात समझ न आए, तो वह हिंदी में समझाई जाती है — फिर आप वही बात इंग्लिश में बोलते हैं। करीब 6 लोगों का लाइव बैच, हफ़्ते में 2 क्लास तक, और हर दिन Bolo ऐप में प्रैक्टिस। फीस ₹1,199 प्रति माह, टैक्स सहित।",
  points: [
    "6 महीने का कोर्स, हफ़्ते में 2 लाइव क्लास तक (1 घंटा 30 मिनट)",
    "करीब 6 लोगों का छोटा बैच — हर क्लास में आप बोलते हैं",
    "Bolo ऐप: रोज़ ग्रामर, शब्द, पढ़ना और बोलना — स्ट्रीक के साथ",
    "हर हफ़्ते टीचर आपकी रिकॉर्डिंग सुनकर सुधार बताते हैं",
    "₹1,199 प्रति माह, टैक्स सहित — सब कुछ एक ही फीस में",
  ],
  faqs: [
    {
      q: "क्या टीचर हिंदी में समझाएंगे?",
      a: "हाँ। जो बात समझ न आए, वो हिंदी में समझा दी जाती है — लेकिन बोलना इंग्लिश में ही होता है। धीरे-धीरे हिंदी कम होती जाती है और इंग्लिश बढ़ती जाती है।",
    },
    {
      q: "मुझे बिल्कुल भी इंग्लिश नहीं आती। क्या मैं जॉइन कर सकता हूँ?",
      a: "हाँ, बिल्कुल। ये कोर्स एकदम शुरू से है — 15 साल से ऊपर कोई भी जॉइन कर सकता है।",
    },
    {
      q: "फीस कितनी है?",
      a: "₹1,199 प्रति माह, टैक्स सहित। लाइव क्लास, Bolo ऐप और हर हफ़्ते टीचर का रिव्यू — सब इसी फीस में।",
    },
    {
      q: "कैसे शुरू करें?",
      a: "बस WhatsApp पर मैसेज कीजिए। फ़्री में सलाह मिलती है, फिर आप अपना बैच चुन लेते हैं।",
    },
  ],
  cta: "WhatsApp पर फ़्री सलाह लें",
  waMessage:
    "Namaste, mujhe Hindi se English wala Basic Spoken English course join karna hai. Free consultation chahiye.",
};

const BENGALI: NativeSection = {
  lang: "bn",
  anchor: "bengali",
  linkLabel: "In Bengali (বাংলায়)",
  label: "বাংলায় পড়ুন",
  heading: "বাংলা থেকে ইংরেজি — বেসিক স্পোকেন ইংলিশ",
  intro:
    "আপনার টিচার বাংলা জানেন। কোনো কিছু বুঝতে না পারলে সেটা বাংলায় বুঝিয়ে দেওয়া হয় — তারপর আপনি সেই কথাটাই ইংরেজিতে বলেন। প্রায় 6 জনের লাইভ ব্যাচ, সপ্তাহে ম্যাক্সিমাম 2টো ক্লাস, আর রোজ Bolo অ্যাপে প্র্যাকটিস। ফি ₹1,199 প্রতি মাসে, ট্যাক্স সহ।",
  points: [
    "6 মাসের কোর্স, সপ্তাহে ম্যাক্সিমাম 2টো লাইভ ক্লাস (1 ঘণ্টা 30 মিনিট)",
    "প্রায় 6 জনের ছোট ব্যাচ — প্রতিটা ক্লাসে আপনি কথা বলেন",
    "Bolo অ্যাপ: রোজ গ্রামার, শব্দ, পড়া আর বলা — স্ট্রিক সহ",
    "প্রতি সপ্তাহে টিচার আপনার রেকর্ডিং শুনে কোথায় ভুল হচ্ছে বলে দেন",
    "₹1,199 প্রতি মাসে, ট্যাক্স সহ — সব কিছু একটাই ফি-তে",
  ],
  faqs: [
    {
      q: "টিচার কি বাংলায় বোঝাবেন?",
      a: "হ্যাঁ। যেটা বুঝতে অসুবিধা হয়, সেটা বাংলায় বুঝিয়ে দেওয়া হয় — কিন্তু বলা হয় ইংরেজিতেই। মাস যত এগোয়, বাংলা তত কমে আর ইংরেজি তত বাড়ে।",
    },
    {
      q: "আমি একদম ইংরেজি বলতে পারি না। আমি কি জয়েন করতে পারি?",
      a: "হ্যাঁ, অবশ্যই। এই কোর্স একদম শুরু থেকে — 15 বছরের বেশি বয়সী যে কেউ জয়েন করতে পারেন।",
    },
    {
      q: "ফি কত?",
      a: "₹1,199 প্রতি মাসে, ট্যাক্স সহ। লাইভ ক্লাস, Bolo অ্যাপ আর প্রতি সপ্তাহে টিচারের রিভিউ — সব এই ফি-তেই।",
    },
    {
      q: "কীভাবে শুরু করব?",
      a: "শুধু WhatsApp-এ মেসেজ করুন। ফ্রি-তে পরামর্শ পাবেন, তারপর আপনি নিজের ব্যাচ বেছে নেবেন।",
    },
  ],
  cta: "WhatsApp-এ ফ্রি পরামর্শ নিন",
  waMessage:
    "Nomoskar, ami Bengali theke English wala Basic Spoken English course join korte chai. Free consultation chai.",
};

const MEDIUM = {
  hi: {
    slug: "spoken-english-hindi",
    name: "Hindi",
    title: "Basic Spoken English — Hindi to English",
    native: HINDI,
    who: "Hindi-speaking adults 15+ — from UP, Bihar, Delhi NCR, MP, Rajasthan, Jharkhand, or anyone who thinks in Hindi",
    waDemo:
      "Hi, I want a free consultation for Basic Spoken English — Hindi to English (taught by a Hindi-speaking teacher).",
  },
  bn: {
    slug: "spoken-english-bengali",
    name: "Bengali",
    title: "Basic Spoken English — Bengali to English",
    native: BENGALI,
    who: "Bengali-speaking adults 15+ — from Kolkata and the rest of West Bengal, Tripura, Assam's Barak Valley, or anyone who thinks in Bengali",
    waDemo:
      "Hi, I want a free consultation for Basic Spoken English — Bengali to English (taught by a Bengali-speaking teacher).",
  },
} as const;

export function mediumCourse(base: CourseData, lang: MediumLang): CourseData {
  const m = MEDIUM[lang];
  const visuals = base.visuals
    ? { ...base.visuals, medium: [`${m.name} to English`, "English to English"] }
    : undefined;
  return {
    ...base,
    slug: m.slug,
    feeSlug: "spoken-english",
    title: m.title,
    tagline: `6 months, ₹1,199/month, inclusive of taxes, approx. 6 learners. Taught by a ${m.name}-speaking teacher: hard ideas explained in ${m.name}, practice in English — plus daily practice in the Bolo app.`,
    liveNote: `✓ 100% online live · ✓ ${m.name}-speaking teacher · ✓ Practice in English, help in ${m.name} · ✓ Daily practice in Bolo · ✓ About 6 in a batch · ✓ Afternoon · evening · night slots`,
    prerequisites: `None. For ${m.who}, who cannot yet finish a sentence out loud in English.`,
    waDemo: m.waDemo,
    native: m.native,
    visuals,
    outcomes: [
      `Stop translating from ${m.name} in your head before every sentence`,
      ...base.outcomes,
    ],
    faqs: [
      {
        q: `Is the teacher really ${m.name}-speaking?`,
        a: `Yes. ${m.title} is taught by a teacher who speaks ${m.name}. When a grammar point or a word does not land, the teacher explains it in ${m.name}; the speaking practice itself is in English. As the months go on, there is less ${m.name} and more English.`,
      },
      {
        q: `How is this different from the regular Basic Spoken English course?`,
        a: `Same course, same fee (₹1,199/month), same 6 months, same batch size of about 6 and the same Bolo app. The only difference is the medium: here the teacher can explain in ${m.name}. If you are comfortable with English-only explanations, the regular course works too.`,
      },
      {
        q: "What daily practice do I get?",
        a: "Bolo, the Learn With Smile practice app: daily grammar and vocabulary, reading aloud, speaking practice you record, video lessons and a weekly teacher review — with a streak to keep you going. It is included in the fee.",
      },
      {
        q: "Why choose this over a free app or a cheaper recorded course?",
        a: `${ALL_IN_ONE} Apps and recorded courses give you practice without anyone correcting you live; here a teacher hears you speak in every class and reviews your recordings every week.`,
      },
      ...(base.faqs ?? []),
    ],
    metaDescription: `Basic Spoken English taught through ${m.name}: a ${m.name}-speaking teacher, live batch of about 6, daily practice in the Bolo app, weekly review. 6 months, ₹1,199/month incl. taxes.`,
  };
}
