/**
 * Page bodies for the state pages and the needs guides — imported only by
 * their routes, so this text ships in route chunks, not the shared bundle.
 */
import type { ArticleBody } from "@/content/blog/blocks";
import { NEEDS, type Need } from "@/lib/needs";
import { NEED_BODIES } from "@/lib/needs-bodies";
import { STATES, type StateInfo } from "@/lib/states";
import { ALL_IN_ONE } from "@/lib/positioning";
import { MEDIUM_COURSE } from "@/lib/regional-seo";

/** States whose biggest city already has its own city page. */
const CITY_PAGE: Record<string, { name: string; path: string }> = {
  maharashtra: { name: "Mumbai", path: "/spoken-english-classes-mumbai" },
  "delhi-ncr": { name: "Delhi", path: "/spoken-english-classes-delhi" },
  karnataka: { name: "Bengaluru", path: "/spoken-english-classes-bengaluru" },
  telangana: { name: "Hyderabad", path: "/spoken-english-classes-hyderabad" },
};

export function stateBody(st: StateInfo): ArticleBody {
  const mc = MEDIUM_COURSE[st.medium];
  return [
    {
      t: "p",
      text: `**Short answer.** ${st.intro} Learn With Smile teaches live online in batches of about 6 — [${mc.label}](${mc.path}) is ₹999/month inclusive of taxes, with daily practice in the [Bolo app](/bolo) and a weekly teacher review.`,
    },
    { t: "h2", text: `Where English matters in ${st.name}` },
    {
      t: "table",
      caption: `Jobs and studies in ${st.name} where spoken English is tested, and the guide for each.`,
      head: ["Your next step", `Where in ${st.name}`, "Guide"],
      rows: st.hubs.map((h) => [
        NEEDS[h.need].label,
        h.where,
        `[${NEEDS[h.need].h1.replace(/^English for /, "")}](${NEEDS[h.need].path})`,
      ]),
    },
    { t: "h2", text: `What spoken English costs in ${st.name}` },
    {
      t: "table",
      caption:
        "Typical options and prices from public listings checked in November 2026. Check each provider's current fee.",
      head: ["Option", "Typical price"],
      rows: [
        ...st.prices.map((p) => [p.what, p.range]),
        [
          "**Learn With Smile** — live batch of about 6 + Bolo app + weekly review + same teacher",
          "**₹999/month** (Basic Spoken English)",
        ],
      ],
    },
    { t: "p", text: ALL_IN_ONE },
    { t: "h2", text: "Taught in your language" },
    {
      t: "p",
      text: `For learners in ${st.name}, we lead with [${mc.label}](${mc.path}): ${mc.line}. Same course, same fee, same Bolo app as everyone else.`,
    },
    {
      t: "cta",
      text: `Start with ${mc.label} — ₹999/month, about 6 learners, live online.`,
      course: mc.path,
      label: mc.label,
    },
    { t: "h2", text: `${st.name} — facts that shape how you learn` },
    { t: "ul", items: st.facts },
    { t: "h2", text: `Searching for "spoken English classes near me" in ${st.name}?` },
    {
      t: "p",
      text: `If you are in ${st.localities.flatMap((l) => l.areas.slice(0, 2).map((a) => `${a} (${l.city})`)).join(", ")} or nearby, you do not need a classroom down the road. We have **no branch** in ${st.name} — classes are live online, so the time you would spend travelling becomes speaking time, and the teacher stays the same even if you move.`,
    },
    {
      t: "table",
      caption: `Areas in ${st.name} our learners join from — online, no travel.`,
      head: ["City", "Areas"],
      rows: st.localities.map((l) => [l.city, l.areas.join(", ")]),
    },
    {
      t: "ul",
      items: [
        "No commute and no parking: join from home, hostel or office.",
        "Afternoon, evening and night IST slots — fits shifts and college timings.",
        "Batch of about 6, so you speak more than in a 25–40 seat classroom.",
        "Daily practice in the Bolo app and a weekly teacher review — classrooms send worksheets.",
      ],
    },
    { t: "h2", text: "Cities our learners join from" },
    {
      t: "p",
      text: `${st.cities.join(", ")} — and anywhere else in ${st.name}. Classes are live online in afternoon, evening and night IST slots; there is no classroom to travel to (our only office is in Kolkata). Languages you will hear in ${st.name}: ${st.languages}.${CITY_PAGE[st.slug] ? ` In ${CITY_PAGE[st.slug].name}? Read the [${CITY_PAGE[st.slug].name} city guide](${CITY_PAGE[st.slug].path}).` : ""}`,
    },
    { t: "h2", text: "Before you choose a class" },
    {
      t: "ul",
      items: [
        `Local classroom or online batch? [Online vs offline spoken English classes](/online-vs-offline-spoken-english-classes) compares commute, batch size and speaking time.`,
        `Practising free on apps and YouTube? [Free practice vs a paid live class](/free-english-speaking-practice-vs-paid-class) says when free is enough.`,
        `Just out of college in ${st.name}? [Spoken English for freshers](/spoken-english-for-freshers-india) covers interviews and the first job.`,
        `Learning at home around family work? [Spoken English for homemakers](/spoken-english-for-homemakers-india).`,
        `About to pay anyone? Run the [10 checks before you pay](/before-you-pay-spoken-english-course): months upfront, loans, auto-debit, refund in writing.`,
        ...(st.languages.includes("Bengali")
          ? [
              `Think in Bengali? [Spoken English in Bengali](/spoken-english-in-bengali) — a guide written in Bengali.`,
            ]
          : []),
      ],
    },
  ];
}

export function needBody(n: Need): ArticleBody {
  const where = STATES.filter((s) => s.hubs.some((h) => h.need === n.key));
  return [
    ...NEED_BODIES[n.key],
    { t: "h2", text: "Where these jobs and studies are" },
    {
      t: "table",
      caption: "States where this need is common, and the page for each.",
      head: ["State", "Where", "Page"],
      rows: where.map((s) => [
        s.name,
        s.hubs.find((h) => h.need === n.key)?.where ?? "",
        `[Spoken English in ${s.name}](${s.path})`,
      ]),
    },
    { t: "p", text: NEED_NEXT[n.key] },
    { t: "p", text: ALL_IN_ONE },
  ];
}

/** One related guide per need, so the IT and fresher guides are reachable from the job pages. */
const NEED_NEXT: Record<Need["key"], string> = {
  bpo: "Applying straight after college? Read [spoken English for freshers](/spoken-english-for-freshers-india) too.",
  it: "Already in the job? [English for IT professionals](/english-for-it-professionals-india) covers standups, client calls and appraisals.",
  analyst:
    "Working in a tech team? [English for IT professionals](/english-for-it-professionals-india) covers standups and client calls.",
  bank: "Interviewing straight after graduation? Read [spoken English for freshers](/spoken-english-for-freshers-india) too.",
  govt: "Preparing straight after graduation? Read [spoken English for freshers](/spoken-english-for-freshers-india) too.",
  campus:
    "After placement season: [spoken English for freshers](/spoken-english-for-freshers-india) covers the first job and the first client call.",
};
