/**
 * Article bodies for the needs guides — kept out of needs.ts so the SEO
 * entries (which every page loads through seo.ts) do not ship every guide's
 * text to every visitor. Imported only by the guide routes.
 */
import type { ArticleBody } from "@/content/blog/blocks";
import type { NeedKey } from "@/lib/needs";

export const NEED_BODIES: Record<NeedKey, ArticleBody> = {
  bpo: [
    {
      t: "p",
      text: "**Short answer.** In many voice-process hiring drives, spoken English is checked **first** — by an AI-scored test such as Pearson's **Versant** or SHL's **SVAR**, or by a voice round — and only then come HR, operations and the client round. Employers rarely publish the test or the cut-off, so practise the skills, not tricks.",
    },
    { t: "h2", text: "What the spoken-English screen checks" },
    {
      t: "table",
      caption: "Typical parts of a BPO spoken-English screen (formats vary by employer).",
      head: ["Part", "What you do", "What it rewards"],
      rows: [
        ["Read aloud", "Read sentences from the screen", "Clear sounds, steady pace"],
        ["Repeat", "Hear a sentence, say it back", "Listening + memory for sentence shape"],
        ["Short answers", "Answer simple questions", "Quick, complete replies"],
        ["Sentence builds", "Rearrange words into a sentence", "Grammar you can use fast"],
        [
          "Story retell / open reply",
          "Retell or answer in your words",
          "Fluency without long pauses",
        ],
      ],
    },
    { t: "h2", text: "A customer call in four lines" },
    {
      t: "example",
      label: "Voice process — billing query",
      lines: [
        "Thank you for calling. May I have your registered mobile number, please?",
        "I understand — you were charged twice this month. Let me check that for you.",
        "I've raised a refund request. You'll get an SMS confirmation within 24 hours.",
        "Is there anything else I can help you with today?",
      ],
    },
    {
      t: "p",
      text: "Greeting, empathy, action, close. In class you practise this structure out loud until it stops being a script and becomes how you talk.",
    },
    { t: "h2", text: "How to practise every day" },
    {
      t: "ul",
      items: [
        "Read a short paragraph aloud and record it — in Bolo, your teacher reviews it every week.",
        "Listen to one sentence, pause, repeat it with the same rhythm (shadowing).",
        "Answer three simple questions out loud in full sentences, no notes.",
        "Role-play one customer call a day with a friend or in your live batch.",
      ],
    },
    {
      t: "cta",
      text: "Start from zero with a teacher who can explain in Hindi or Marathi — ₹999/month, about 6 per batch, daily practice in Bolo.",
      course: "/course-spoken-english-hindi",
      label: "Basic Spoken English — Hindi to English",
    },
    { t: "h2", text: "Who this is not" },
    {
      t: "p",
      text: "We do not run accent-neutralisation or test-cheat courses, and nobody can guarantee you a BPO job. If you already speak comfortably and only the interview scares you, [Interview Preparation](/course-interview-preparation) is the room.",
    },
  ],
  it: [
    {
      t: "p",
      text: "**Short answer.** In IT services and GCC hiring, English is checked twice: a **communication assessment** (first, or alongside aptitude — some employers use Versant) and the **HR/technical round**, where you must explain your project clearly. After you join, the test never stops: standups, demos, client calls.",
    },
    { t: "h2", text: "Explain your project in 60 seconds" },
    {
      t: "example",
      label: "Interview — tell me about your project",
      lines: [
        "I built a leave-management app for our college hostel.",
        "The problem: requests were on paper and wardens lost track.",
        "I used React for the front end and Firebase for login and data.",
        "Result: about 300 students used it last semester; approvals took a day instead of a week.",
      ],
    },
    {
      t: "p",
      text: "What, why, how, result. Four sentences you can say without notes beat ten minutes of jargon.",
    },
    { t: "h2", text: "The daily standup" },
    {
      t: "table",
      caption: "Standup lines that sound clear, not rehearsed.",
      head: ["Part", "Say this", "Avoid"],
      rows: [
        [
          "Yesterday",
          "Yesterday I finished the login API and opened a PR.",
          "Long history of the ticket",
        ],
        ["Today", "Today I'll write tests and fix the timeout bug.", "“I will try to do…”"],
        [
          "Blocker",
          "I'm blocked on the staging key — can someone share it?",
          "Silence until the next day",
        ],
      ],
    },
    {
      t: "cta",
      text: "Practise standups, demos and client calls in a live batch of about 6 — 3 months, ₹2,499/month.",
      course: "/course-business-english",
      label: "Business English",
    },
    { t: "h2", text: "Who this is not" },
    {
      t: "p",
      text: "If you cannot yet build a full sentence out loud, start with [Basic Spoken English](/course-spoken-english) or [Intermediate Spoken English](/course-intermediate-english). We do not teach coding, and we do not promise placements.",
    },
  ],
  analyst: [
    {
      t: "p",
      text: "**Short answer.** Analysts are hired and promoted on one skill people underrate: saying what a number **means**, in plain English, to someone who will not open your dashboard.",
    },
    { t: "h2", text: "One insight, four beats" },
    {
      t: "example",
      label: "Weekly review",
      lines: [
        "What changed: repeat orders fell 12% this month.",
        "Why: most of the drop is from Pune, after delivery times went up.",
        "So what: if it continues, we lose about ₹4 lakh in March.",
        "Next step: I'd like to test a faster delivery slot in Pune for two weeks.",
      ],
    },
    {
      t: "p",
      text: "Numbers in the example are illustrative. The structure is the point: change, cause, consequence, ask.",
    },
    { t: "h2", text: "Words that help non-technical people" },
    {
      t: "table",
      head: ["Instead of", "Say"],
      rows: [
        ["“Statistically significant”", "“This isn't random — it's real.”"],
        ["“Correlation of 0.8”", "“When one goes up, the other almost always does too.”"],
        ["“The query shows…”", "“The data shows…”"],
      ],
    },
    {
      t: "cta",
      text: "Practise explaining your real dashboards in a live batch — 3 months, ₹2,499/month.",
      course: "/course-business-english",
      label: "Business English",
    },
  ],
  bank: [
    {
      t: "p",
      text: "**Short answer.** The written exam gets you to the panel; the interview checks how you **speak**. IBPS does not publish a rule that the interview must be in English, and candidates report answering in English or Hindi. If you choose English, practise these answers out loud — not in your head.",
    },
    { t: "h2", text: "Three answers to practise first" },
    {
      t: "example",
      label: "Tell us about yourself (60 seconds)",
      lines: [
        "I'm Ankit, from Gaya. I did my B.Com from Patna University in 2024.",
        "For the last year I've worked at a cooperative bank branch, handling deposits and KYC.",
        "I enjoy explaining products to first-time account holders.",
        "That's why I want to join a public sector bank as a PO.",
      ],
    },
    {
      t: "ul",
      items: [
        "**Why banking?** One real reason from your life, one reason about the job.",
        "**A current-affairs question:** say what happened, one effect on banks, one sentence of your view.",
        "**A question you don't know:** “I'm not sure about the exact figure, but I understand that…” is a good answer.",
      ],
    },
    {
      t: "cta",
      text: "Practise your interview answers live, in a batch of about 6 — 2 months, ₹2,499/month.",
      course: "/course-interview-preparation",
      label: "Interview Preparation",
    },
    { t: "h2", text: "Who this is not" },
    {
      t: "p",
      text: "We do not teach reasoning, quant or the English section of the written paper, and no one can promise selection. If speaking a full sentence is still hard, start with [Basic Spoken English — Hindi to English](/course-spoken-english-hindi).",
    },
  ],
  govt: [
    {
      t: "p",
      text: "**Short answer.** For the UPSC personality test you **choose** the interview language — English, Hindi or another listed Indian language (an interpreter is arranged for languages other than English and Hindi; check the current notice). State PSCs set their own rules. SSC removed interviews for non-gazetted posts in 2016. Choose the language you speak most calmly in.",
    },
    { t: "h2", text: "If you choose English: answer like this" },
    {
      t: "example",
      label: "Panel question — should India ban single-use plastic completely?",
      lines: [
        "I think a complete ban is right in principle, Sir.",
        "But it needs cheap alternatives first — otherwise small vendors lose income.",
        "For example, cloth bags could be made through self-help groups.",
        "So: a phased ban, with support for small businesses.",
      ],
    },
    {
      t: "p",
      text: "Position, problem, example, balanced conclusion. Simple words, said slowly, beat long words said nervously.",
    },
    {
      t: "cta",
      text: "Practise panel-style answers live, in a batch of about 6 — 2 months, ₹2,499/month.",
      course: "/course-interview-preparation",
      label: "Interview Preparation",
    },
    { t: "h2", text: "What we don't do" },
    {
      t: "p",
      text: "We do not coach prelims, mains or any written paper, and we make no promise about selection. Hindi-medium? Build the base first with [Basic Spoken English — Hindi to English](/course-spoken-english-hindi).",
    },
  ],
  campus: [
    {
      t: "p",
      text: "**Short answer.** You will be tested on spoken English in three places: the **group discussion**, the **communication/HR round** and, for higher studies, the **admission interview**. Each one rewards the same thing: getting a clear sentence out on time.",
    },
    { t: "h2", text: "How to enter a group discussion" },
    {
      t: "example",
      label: "GD — Should college attendance be optional?",
      lines: [
        "I'd like to start with one point: attendance and learning are not the same thing.",
        "Building on what Riya said, recorded lectures already exist —",
        "but labs and discussions can't be recorded.",
        "So maybe attendance should be optional for lectures, not for labs.",
      ],
    },
    {
      t: "ul",
      items: [
        "Enter early with one short point.",
        "Build on someone by name.",
        "Summarise in one line if the group stalls.",
      ],
    },
    {
      t: "cta",
      text: "Build flow and confidence — 4 months, ₹1,999/month, about 6 learners, debates every week.",
      course: "/course-intermediate-english",
      label: "Intermediate Spoken English",
    },
  ],
};
