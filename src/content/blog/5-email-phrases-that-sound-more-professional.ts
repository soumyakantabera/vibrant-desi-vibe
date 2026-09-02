import type { ArticleBody } from "./blocks";

export const body: ArticleBody = [
  {
    t: "p",
    text: 'There is a particular register of business English that is standard in Indian offices, taught in Indian schools, and completely normal to everyone you work with. "Please do the needful." "Revert at the earliest." "Kindly find attached herewith."',
  },
  {
    t: "p",
    text: "None of it is wrong. It is grammatical, it is polite, and inside India it reads as perfectly professional. The trouble starts when the reader is in London or Singapore or Austin, because to them that vocabulary sounds like something from 1955 — and, unfairly, people who write in dated English get read as junior. Not less competent, exactly. Just less senior than they are.",
  },
  {
    t: "p",
    text: "That is a bad reason to be passed over, and it is one of the easiest things to fix. Below are five swaps. None of them makes your English harder — a few actually make it simpler.",
  },

  { t: "h2", text: '1. "Sorry for the delay" → "Thanks for your patience"' },
  {
    t: "table",
    head: ["Instead of", "Write"],
    rows: [
      [
        "Sorry for the delayed response, I was caught up with other work.",
        "Thanks for your patience on this — here's where it stands.",
      ],
      [
        "Apologies for the late reply.",
        "Thanks for waiting. Short answer: yes, we can do Thursday.",
      ],
    ],
  },
  {
    t: "p",
    text: 'This is the same information with the frame reversed. "Sorry" makes the email about your failure and asks the reader to forgive you. "Thanks for your patience" makes it about their generosity and credits them for it. The reader has spent no more time waiting either way.',
  },
  {
    t: "p",
    text: "The bigger issue is what happens when you apologise habitually. One apology reads as courteous. An apology at the top of every third email reads as someone who is always slightly behind and knows it. In India that habit is taught as politeness, which is exactly why it is worth unlearning in writing — it is not being read as politeness.",
  },
  {
    t: "p",
    text: 'Keep "sorry" for when you have actually caused someone a problem. It lands much harder when it is rare.',
  },

  { t: "h2", text: '2. "Do the needful / revert / at the earliest" → name a verb and a deadline' },
  {
    t: "table",
    head: ["Instead of", "Write"],
    rows: [
      [
        "Please do the needful and revert at the earliest.",
        "Could you approve the invoice and reply by Thursday?",
      ],
      ["Kindly revert with your inputs.", "Let me know your comments on section 3."],
      ["Please do the needful.", "Please forward this to the vendor and confirm once it's sent."],
    ],
  },
  {
    t: "p",
    text: '"Do the needful" has a real problem beyond sounding old: it does not say what to do. The reader has to work out which action you mean, and a request that requires interpretation gets postponed.',
  },
  {
    t: "p",
    text: '"At the earliest" has the same flaw — it means *soon*, and *soon* is not a deadline. "By Thursday" is a deadline.',
  },
  {
    t: "p",
    text: '**"Revert" is worth a separate note.** In South Asian business English it means *reply*. Everywhere else it means *go back to a previous state* — reverting a code change, reverting to an old policy. So "please revert" reads to an international colleague as "please undo this", which is confusing rather than merely dated. Use *reply*, *get back to me*, or *let me know*.',
  },

  { t: "h2", text: '3. Stacked hedges → "I\'d suggest"' },
  {
    t: "p",
    text: "Count the hedges in this sentence, which is close to one we see in almost every Workplace English batch:",
  },
  {
    t: "example",
    label: "Before",
    lines: [
      "I was just thinking that maybe we could possibly consider looking at perhaps moving the deadline slightly, if that's okay with you?",
    ],
  },
  {
    t: "p",
    text: "That is seven: *just*, *thinking*, *maybe*, *possibly*, *consider*, *perhaps*, *slightly* — plus a request for permission at the end. Each one on its own is fine. Stacked, they say *I do not think my own suggestion is worth your time*, and the reader takes you at your word.",
  },
  {
    t: "example",
    label: "After",
    lines: [
      "I'd suggest moving the deadline to the 14th. It gives us time to test properly. Happy to keep the original date if that causes a problem at your end.",
    ],
  },
  {
    t: "p",
    text: "That is not blunt. Look at the last sentence — it is still open, it still invites disagreement, it still leaves the decision with them. What changed is that the recommendation itself is now stated clearly, once, so there is something concrete to agree or disagree with.",
  },
  {
    t: "p",
    text: '**One hedge is professional. Three is apologetic.** If you cut nothing else from this article, cut the word "just" — it is the one that does the most damage per letter.',
  },

  { t: "h2", text: '4. "Please find attached herewith" → say what it is' },
  {
    t: "table",
    head: ["Retired", "Current"],
    rows: [
      [
        "Please find attached herewith the report.",
        "I've attached the Q3 report — the summary is on page 2.",
      ],
      [
        "PFA for your kind perusal.",
        "Here's the draft. The section you asked about starts on page 4.",
      ],
      ["Attached please find the same.", "I've attached the signed copy."],
      ["The same is enclosed herewith.", "It's attached."],
    ],
  },
  {
    t: "p",
    text: '"Herewith", "the same", "kind perusal" and "PFA" all belong to the same dated register. But the real upgrade in the right-hand column is not the vocabulary — it is that each one **tells the reader where to look.**',
  },
  {
    t: "p",
    text: 'Your colleague is opening this on a phone between two meetings. "The summary is on page 2" saves them ninety seconds. That is what makes an email read as senior: not the words, but the fact that the writer thought about the reader\'s time.',
  },

  { t: "h2", text: '5. "Any updates? Gentle reminder" → name it, assume a default, offer help' },
  {
    t: "example",
    label: "Before",
    lines: ["Gentle reminder. Any updates on this?"],
  },
  {
    t: "example",
    label: "After",
    lines: [
      "Following up on the vendor contract — I'll assume we're going ahead with the current terms unless I hear otherwise by Friday.",
      "If something's stuck at your end, tell me what it is and I'll see if I can move it.",
    ],
  },
  {
    t: "p",
    text: "Three things changed. You **named the item**, so the reader does not have to scroll to work out which thread this is. You **stated a default**, which turns silence into a decision rather than a dead end — and often gets you a fast reply from someone who does not want that default. And you **offered help**, which reframes the chase as support instead of pressure.",
  },
  {
    t: "p",
    text: 'And about "gentle reminder": it does not land gently. It is transparently a reminder wrapped in a softener, and most readers hear the reminder. If you are chasing something, chase it plainly and be useful while you do.',
  },

  { t: "h2", text: 'A note on "kindly", "sir" and "respected"' },
  {
    t: "p",
    text: 'These three come up in every Workplace English batch, and they deserve a more careful answer than "stop using them", because the honest answer depends on who is reading.',
  },
  {
    t: "table",
    head: ["Word", "Inside India", "Outside India"],
    rows: [
      [
        "Kindly",
        "Normal, reads as polite",
        "Reads as either archaic or faintly sarcastic. Use *please*.",
      ],
      [
        "Sir / Madam",
        "Expected with seniors and with clients in many sectors",
        "Reads as excessively deferential in most Western offices; first names are standard even upwards.",
      ],
      [
        "Respected Sir",
        "Still normal in government and academic correspondence",
        "Reads as a form letter. Use *Dear <name>* or just *Hi <name>*.",
      ],
      ["Do the needful", "Universally understood", "Not understood at all."],
    ],
  },
  {
    t: "p",
    text: 'So the rule is not to purge these words. It is to know which reader you have. Writing "Respected Sir" to a government office is correct and writing "Hi Rajesh" there is not. Writing "Respected Sir" to a product manager in Berlin makes you sound like you are applying for a favour.',
  },
  {
    t: "p",
    text: "If you are unsure, **match the other person's register.** Look at how they signed off and how they addressed you, and land one notch more formal than that. It is a reliable rule and it requires no judgement about culture at all.",
  },
  {
    t: "p",
    text: "One exception worth stating plainly: never mirror rudeness. Matching register means matching formality, not matching tone.",
  },

  { t: "h2", text: "The thing all five have in common" },
  {
    t: "p",
    text: 'Go back and read the "after" column of every table. Almost none of it uses a harder word than the "before" column. "Reply" is easier than "revert". "It\'s attached" is easier than "the same is enclosed herewith". "By Thursday" is easier than "at the earliest".',
  },
  {
    t: "quote",
    text: "Sounding professional in English is not about bigger words. It is about being specific, and taking up the amount of space your role actually entitles you to.",
  },
  {
    t: "p",
    text: 'That second half is the harder one, and it is not really an English problem. Plenty of people know exactly how to write "I\'d suggest we move the deadline" and write the seven-hedge version anyway, because stating a recommendation to a senior feels presumptuous. Fixing that takes practice with someone watching, not a vocabulary list.',
  },
  {
    t: "p",
    text: 'If you want to try one thing this week: open your sent folder, find the last five emails you wrote, and count the apologies and the word "just". Rewrite the worst one. That single exercise tells most people more than an hour of reading about it.',
  },
  {
    t: "cta",
    text: "Workplace English offers 3 months of practical meetings, calls, updates, emails and presentation practice in a live batch capped at 8. It runs up to twice a week in morning, evening or weekend IST slots, costs ₹1,499/month including GST, and recorded classes are available for revision.",
    course: "/course-business-english",
    label: "See the Workplace English course",
  },
];
