/**
 * Basic Spoken English, taught through Hindi or Marathi (November 2026).
 *
 * Same course as Basic Spoken English — 3 months, ₹999/month inclusive of
 * taxes, about 6 learners, up to 2 live classes a week, Bolo included — with
 * a teacher who speaks the learner's language. Hard concepts are explained in
 * Hindi or Marathi; the speaking practice is in English, and the share of
 * English grows month by month.
 *
 * The native-language block is short on purpose: Google prefers one primary
 * language per page, so these pages stay English-primary (en-IN) and the
 * Course JSON-LD declares the teaching language (hi-IN / mr-IN).
 */
import type { CourseData, NativeSection } from "@/components/CoursePage";
import { ALL_IN_ONE } from "@/lib/positioning";

export type MediumLang = "hi" | "mr";

const HINDI: NativeSection = {
  lang: "hi",
  label: "हिंदी में पढ़ें",
  heading: "हिंदी से इंग्लिश — बेसिक स्पोकन इंग्लिश",
  intro:
    "आपके टीचर हिंदी जानते हैं। जब कोई बात समझ न आए, तो वह हिंदी में समझाई जाती है — फिर आप वही बात इंग्लिश में बोलते हैं। करीब 6 लोगों का लाइव बैच, हफ़्ते में 2 क्लास तक, और हर दिन Bolo ऐप में प्रैक्टिस। फीस ₹999 प्रति माह, टैक्स सहित।",
  points: [
    "6 महीने का कोर्स, हफ़्ते में 2 लाइव क्लास तक (1 घंटा 30 मिनट)",
    "करीब 6 लोगों का छोटा बैच — हर क्लास में आप बोलते हैं",
    "Bolo ऐप: रोज़ ग्रामर, शब्द, पढ़ना और बोलना — स्ट्रीक के साथ",
    "हर हफ़्ते टीचर आपकी रिकॉर्डिंग सुनकर सुधार बताते हैं",
    "₹999 प्रति माह, टैक्स सहित — सब कुछ एक ही फीस में",
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
      a: "₹999 प्रति माह, टैक्स सहित। लाइव क्लास, Bolo ऐप और हर हफ़्ते टीचर का रिव्यू — सब इसी फीस में।",
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

const MARATHI: NativeSection = {
  lang: "mr",
  label: "मराठीत वाचा",
  heading: "मराठीतून इंग्रजी — बेसिक स्पोकन इंग्लिश",
  intro:
    "तुमचे शिक्षक मराठी बोलतात. एखादी गोष्ट समजली नाही तर ती मराठीत समजावून सांगितली जाते — आणि मग तीच गोष्ट तुम्ही इंग्रजीत बोलता. सुमारे 6 जणांची लाइव्ह बॅच, आठवड्याला 2 क्लासपर्यंत, आणि रोज Bolo ॲपमध्ये सराव. फी ₹999 दरमहा, करांसह.",
  points: [
    "6 महिन्यांचा कोर्स, आठवड्याला 2 लाइव्ह क्लासपर्यंत (1 तास 30 मिनिटे)",
    "सुमारे 6 जणांची छोटी बॅच — प्रत्येक क्लासमध्ये तुम्ही बोलता",
    "Bolo ॲप: रोज व्याकरण, शब्द, वाचन आणि बोलण्याचा सराव — स्ट्रीकसह",
    "दर आठवड्याला शिक्षक तुमचे रेकॉर्डिंग ऐकून सुधारणा सांगतात",
    "₹999 दरमहा, करांसह — सर्व काही एकाच फीमध्ये",
  ],
  faqs: [
    {
      q: "शिक्षक मराठीत समजावतील का?",
      a: "हो. अवघड गोष्ट मराठीत समजावली जाते, पण बोलण्याचा सराव इंग्रजीतच होतो. हळूहळू मराठी कमी आणि इंग्रजी जास्त होत जाते.",
    },
    {
      q: "मला अजिबात इंग्रजी येत नाही. मी जॉईन करू शकतो का?",
      a: "हो, हा कोर्स अगदी सुरुवातीपासून आहे — 15 वर्षांवरील सर्वांसाठी.",
    },
    {
      q: "फी किती आहे?",
      a: "₹999 दरमहा, करांसह. लाइव्ह क्लास, Bolo ॲप आणि दर आठवड्याचा शिक्षकांचा रिव्ह्यू — सर्व याच फीमध्ये.",
    },
    {
      q: "सुरुवात कशी करायची?",
      a: "WhatsApp वर मेसेज करा. मोफत सल्ला मिळतो, मग तुम्ही तुमची बॅच निवडता.",
    },
  ],
  cta: "WhatsApp वर मोफत सल्ला घ्या",
  waMessage:
    "Namaskar, mala Marathitun English wala Basic Spoken English course join karaycha aahe. Free consultation havay.",
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
  mr: {
    slug: "spoken-english-marathi",
    name: "Marathi",
    title: "Basic Spoken English — Marathi to English",
    native: MARATHI,
    who: "Marathi-speaking adults 15+ — Marathi-medium students, graduates and working people across Maharashtra and beyond",
    waDemo:
      "Hi, I want a free consultation for Basic Spoken English — Marathi to English (taught by a Marathi-speaking teacher).",
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
    tagline: `3 months, ₹999/month, inclusive of taxes, approx. 6 learners. Taught by a ${m.name}-speaking teacher: hard ideas explained in ${m.name}, practice in English — plus daily practice in the Bolo app.`,
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
        a: `Same course, same fee (₹999/month), same 3 months, same batch size of about 6 and the same Bolo app. The only difference is the medium: here the teacher can explain in ${m.name}. If you are comfortable with English-only explanations, the regular course works too.`,
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
    metaDescription: `Basic Spoken English taught through ${m.name}: a ${m.name}-speaking teacher, live batch of about 6, daily practice in the Bolo app, weekly review. 3 months, ₹999/month incl. taxes.`,
  };
}
