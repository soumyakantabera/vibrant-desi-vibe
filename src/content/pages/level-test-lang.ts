import type { ArticleBody } from "@/content/blog/blocks";
import { LEVEL_BANDS, bandRange } from "@/lib/level-test";
import { LEVEL_TEST_LANG_PATHS, TEST_COPY, type TestLang } from "@/lib/level-test-i18n";

/**
 * Article under the Hindi and Bengali versions of the speaking level test.
 * Built from the same copy the test uses, so the scoring key, the questions
 * and the level names on the page always match the test above them.
 */

const RANGE = Object.fromEntries(LEVEL_BANDS.map((b) => [b.id, bandRange(b)])) as Record<
  (typeof LEVEL_BANDS)[number]["id"],
  string
>;

const WORDS: Record<
  Exclude<TestLang, "en">,
  {
    howH2: string;
    howP: string;
    head: [string, string, string];
    workGoal: string;
    interviewGoal: string;
    questionsH2: string;
    levelsH2: string;
    levelsHead: [string, string, string];
    notCertificate: string;
    moreH2: string;
    more: string;
    basicTitle: string;
  }
> = {
  hi: {
    howH2: "स्कोर कैसे गिनें",
    howP: "हर सवाल पर “हाँ, आसानी से” के **2**, “मुश्किल से” के **1** और “अभी नहीं” के **0** नंबर — कुल 8 में से। हर लेवल का एक सवाल है: बुनियादी परिचय, past tense, जुड़ी हुई बातचीत, और दबाव में बोलना। JavaScript न चले तो यह तालिका देखकर खुद गिन लें:",
    head: ["स्कोर", "लेवल", "शुरू करें"],
    workGoal: "ऑफ़िस/मीटिंग लक्ष्य हो तो",
    interviewGoal: "इंटरव्यू लक्ष्य हो तो",
    questionsH2: "टेस्ट के चार सवाल",
    levelsH2: "हर लेवल का असली मतलब",
    levelsHead: ["लेवल", "CEFR", "मतलब"],
    notCertificate:
      "A1, A2, B1, B2 यूरोप के CEFR स्केल के मोटे अंदाज़े हैं। यह सेल्फ़-चेक है, सर्टिफ़िकेट नहीं — टीचर WhatsApp पर फ़्री कंसल्टेशन में आपको बोलते हुए सुनकर लेवल कन्फ़र्म करती हैं।",
    moreH2: "आगे क्या पढ़ें",
    more: "रोज़ के वाक्य: [हिंदी अर्थ के साथ daily use English sentences](/blog/daily-use-english-sentences-with-hindi)। हिंदी में पूरी गाइड: [Spoken English in Hindi](/spoken-english-in-hindi)। यही टेस्ट [English में](/english-speaking-level-test) या [বাংলায়](/english-speaking-test-bengali)।",
    basicTitle: "Basic Spoken English — Hindi to English",
  },
  bn: {
    howH2: "স্কোর কীভাবে গুনবেন",
    howP: "প্রতিটি প্রশ্নে “হ্যাঁ, সহজেই” হলে **2**, “কষ্ট করে” হলে **1**, “এখনও না” হলে **0** — মোট 8-এর মধ্যে। প্রতিটি লেভেলের একটা করে প্রশ্ন: বেসিক পরিচয়, past tense, জোড়া লাগানো কথা, আর চাপের মধ্যে বলা। JavaScript না চললে এই টেবিল দেখে নিজেই গুনে নিন:",
    head: ["স্কোর", "লেভেল", "শুরু করুন"],
    workGoal: "অফিস/মিটিং লক্ষ্য হলে",
    interviewGoal: "ইন্টারভিউ লক্ষ্য হলে",
    questionsH2: "টেস্টের চারটি প্রশ্ন",
    levelsH2: "প্রতিটি লেভেলের আসল মানে",
    levelsHead: ["লেভেল", "CEFR", "মানে"],
    notCertificate:
      "A1, A2, B1, B2 হল ইউরোপের CEFR স্কেলের মোটামুটি আন্দাজ। এটা সেল্ফ-চেক, সার্টিফিকেট নয় — টিচার WhatsApp-এ ফ্রি কনসালটেশনে আপনার কথা শুনে লেভেল কনফার্ম করেন।",
    moreH2: "এরপর কী পড়বেন",
    more: "বাংলায় পুরো গাইড: [Spoken English in Bengali](/spoken-english-in-bengali)। রোজকার কথোপকথনের প্র্যাকটিস: [10টি English conversation dialogue](/blog/english-conversation-practice-dialogues)। একই টেস্ট [English-এ](/english-speaking-level-test) বা [हिंदी में](/english-speaking-test-hindi)।",
    basicTitle: "Basic Spoken English",
  },
};

export function levelTestBody(lang: Exclude<TestLang, "en">): ArticleBody {
  const t = TEST_COPY[lang];
  const w = WORDS[lang];
  const course = (id: keyof typeof t.rooms, title: string) =>
    `${title} — ${t.rooms[id].fee.split(" · ")[0]}`;

  return [
    { t: "h2", text: w.howH2 },
    { t: "p", text: w.howP },
    {
      t: "table",
      head: w.head,
      rows: [
        [
          RANGE.starting,
          `${t.bands.starting.name} (${t.bands.starting.cefr})`,
          course("basic", w.basicTitle),
        ],
        [
          RANGE.building,
          `${t.bands.building.name} (${t.bands.building.cefr})`,
          course("basic", w.basicTitle),
        ],
        [
          RANGE.connecting,
          `${t.bands.connecting.name} (${t.bands.connecting.cefr})`,
          `${course("intermediate", "Intermediate Spoken English")} (${w.workGoal}: ${course("interactive", "Interactive Speaking")})`,
        ],
        [
          RANGE.performing,
          `${t.bands.performing.name} (${t.bands.performing.cefr})`,
          `${course("interactive", "Interactive Speaking")} (${w.interviewGoal}: ${course("interview", "Interview Preparation")})`,
        ],
      ],
    },
    { t: "p", text: w.notCertificate },

    { t: "h2", text: w.questionsH2 },
    { t: "ol", items: t.questions },

    { t: "h2", text: w.levelsH2 },
    {
      t: "table",
      head: w.levelsHead,
      rows: LEVEL_BANDS.map((b) => [t.bands[b.id].name, t.bands[b.id].cefr, t.bands[b.id].meaning]),
    },

    { t: "h2", text: w.moreH2 },
    { t: "p", text: w.more },
  ];
}

/** For the English page: one line pointing at the other two languages. */
export const OTHER_LANG_LINE = `Prefer Hindi or Bengali? Take the same test [हिंदी में](${LEVEL_TEST_LANG_PATHS.hi}) or [বাংলায়](${LEVEL_TEST_LANG_PATHS.bn}), or switch language inside the test above.`;
