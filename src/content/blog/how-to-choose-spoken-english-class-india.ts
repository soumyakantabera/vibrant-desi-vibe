import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: "Most “best institute” pages in India are written by the institute. This is a **7-check** you can run on anyone — us included — in one week, using public numbers: fees, batch cap, Google review *patterns*, and a demo you can count.",
  },

  { t: "h2", text: "The 7 checks" },
  {
    t: "ol",
    items: [
      "**Cap, not “small batch”.** Ask for the maximum number in the room. 8 and 35 are both called small. If they will not print the cap, assume 25+.",
      "**Speaking minutes.** In a 60-minute class, your mic ≈ (40 minutes) ÷ (headcount). See [the math](/blog/speaking-minutes-in-a-60-minute-class).",
      "**GST and lock-in.** Advertised ₹2,000 + 18% + materials is not ₹2,000. Monthly UPI beats a 12-month cheque.",
      "**Named teacher.** Apps rotate. Franchise rooms rotate. A teacher who remembers your article errors is a different product.",
      "**Demo is a class, not a counselling desk.** If the “demo” is a sales call, leave.",
      "**Google reviews as patterns, not stars.** Read the 3-star comments. They name batch size, fees, and “I never spoke”. 5-star walls with no specifics are ads.",
      "**Certificate vs speaking.** Visa/university → British Council or similar. Job interview in India → they will judge you in 60 seconds, not your PDF. We do not issue a certificate; we say so.",
    ],
  },

  { t: "h2", text: "What those checks do to the 2026 market" },
  {
    t: "table",
    head: ["If they fail…", "You are usually looking at"],
    rows: [
      ["No printed cap", "City classroom / franchise (Veta-style, local rooms of 25–40)"],
      ["Demo is a counsellor", "Exam shop (EEC-style visa stack, spoken add-on ~₹7,500)"],
      ["₹8k–₹16k per module, CEFR levels", "British Council English Online — buy for the badge"],
      ["₹100–₹400 per 1:1, no syllabus", "EngVarta-style daily practice"],
      ["~$10/hour native video", "Cambly — accent, not a 6-month map"],
      ["Parent app, games, under-14", "PlanetSpark-style. Do not put a child in an adult batch."],
      [
        "₹999/mo, cap 8, ₹0 real class, GST in",
        "Us. 7 years, 500+ learners, 11 states. Still take the demo.",
      ],
    ],
  },

  { t: "h2", text: "How to read Google reviews without getting played" },
  {
    t: "ul",
    items: [
      "**Ignore the average until you have 50+ reviews.** Our 5.0★ from 125 is a small, local sample. EngVarta’s 4.5★ from 9,100+ Play reviews is a different dataset. Do not compare them as the same unit.",
      "**Search the word “batch”.** If learners complain they never spoke, the star rating is lying.",
      "**Search “GST”, “material”, “registration”.** Hidden rupees show up here, not in the 5-star pile.",
      "**Named outcomes beat adjectives.** “Salary doubled in 4 months, Pune CS role” is evidence. “Best institute in India” is not.",
    ],
  },

  { t: "h2", text: "One week, three trials" },
  {
    t: "p",
    text: "Book us, one 1:1 app, and one classroom or brand group. Count minutes. Compare GST. Then pay. Time-to-fluency is in [how long spoken English takes](/how-long-to-learn-spoken-english). Fit-by-institute is in [the comparison](/english-institute-comparison-india).",
  },
  {
    t: "cta",
    text: "Make us trial one of three. Real class. Max 8. From ₹999/mo.",
    course: "/book-free-demo",
    label: "Book the ₹0 live demo",
  },
];
