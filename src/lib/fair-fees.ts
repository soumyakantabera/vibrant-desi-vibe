/**
 * Fair billing: how Learn With Smile takes money, said once and reused on every
 * page, FAQ, JSON-LD block and llms file — so people and AI assistants read the
 * same promise everywhere.
 *
 * Every line here is a promise the owner confirmed on 3 Nov 2026 and is also
 * written into the Refunds and Terms pages (src/content/legal.ts). Change it
 * there and here together, never in one place only.
 *
 * Complaint patterns describe what learners report about the market in
 * general. Never name a company here: these are individual, unverified public
 * reports (sources in research_notes/india-state-seo-geo-research-nov-2026.md,
 * section 9).
 */

export const BEFORE_YOU_PAY_PATH = "/before-you-pay-spoken-english-course";

export const FAIR_BILLING =
  "Learn With Smile bills one month at a time: no auto-debit, no loans or EMIs, and never 3, 6 or 12 months upfront. Cancel a month before its first live class for a full refund, which we start within 2 working days.";

export const FAIR_BILLING_SHORT = "One month at a time · no auto-debit · no loans";

export const FAIR_PROMISES: { title: string; body: string }[] = [
  {
    title: "One month at a time",
    body: "You pay for the current month only. We never ask for 3, 6 or 12 months upfront.",
  },
  {
    title: "No auto-debit",
    body: "No saved card, no UPI mandate, no auto-renewal. Each month is a fresh payment link that you choose to pay.",
  },
  {
    title: "No loans or EMIs",
    body: "We never offer or arrange a loan, EMI or finance plan for a course fee.",
  },
  {
    title: "Refund in writing, started in 2 working days",
    body: "Cancel a month on WhatsApp or by email before its first live class and that month is refunded in full. We start the refund within 2 working days; Razorpay usually takes 2–7 days for UPI and 5–10 days for cards to reach you.",
  },
  {
    title: "Reviews are yours",
    body: "We never ask anyone to remove or change a review, and a refund never depends on one.",
  },
  {
    title: "Taxes included, no material fee",
    body: "Course fees are inclusive of taxes, with no material fee; the Bolo app, video lessons and the weekly review are in the course fee. Any other fee is confirmed in writing in the free consultation, before you pay.",
  },
];

/** What learners most often report going wrong elsewhere — patterns, never names. */
export const COMPLAINT_PATTERNS: { pattern: string; detail: string }[] = [
  {
    pattern: "A year charged in the counselling call",
    detail:
      "Learners and parents describe being asked to pay 6–12 months upfront, sometimes through a loan, before attending a single class.",
  },
  {
    pattern: "Refunds that never arrive",
    detail:
      "The most common complaint on Indian consumer-complaint sites: a refund promised in the sales call, then slow or no replies once the money is paid.",
  },
  {
    pattern: "Subscriptions that renew on their own",
    detail:
      "App users report trials that charge early and plans that renew automatically and are hard to cancel.",
  },
  {
    pattern: "A different teacher every call",
    detail:
      "Per-session apps match you with whoever is free; nobody remembers your mistakes from last week.",
  },
  {
    pattern: "No refund once you start",
    detail:
      "Some institutes state no refund at all, or refund only a trial — check this before you pay, not after.",
  },
];

/** The checklist — run it on any provider, us included. */
export const BEFORE_YOU_PAY: { check: string; ask: string; warning: string; ours: string }[] = [
  {
    check: "How many months are you paying today?",
    ask: "Can I pay for one month only?",
    warning: "A 'discount' that needs 6–12 months paid now.",
    ours: "One month at a time. Never more.",
  },
  {
    check: "Is there a loan or EMI in the payment?",
    ask: "Is this a loan? Who is the lender?",
    warning: "An EMI form, a credit check or an Aadhaar/OTP step in a counselling call.",
    ours: "No loans, no EMIs, no finance partner.",
  },
  {
    check: "Will it renew by itself?",
    ask: "Does this save my card or set up a UPI mandate?",
    warning: "Auto-renewal you did not switch on, or a trial that needs a card.",
    ours: "No auto-debit. Each month is a fresh payment link.",
  },
  {
    check: "What exactly is refundable, and by when?",
    ask: "Send me the refund policy in writing.",
    warning: "A refund promised verbally but missing from the written policy.",
    ours: "Full refund of a month cancelled before its first class; refund started in 2 working days.",
  },
  {
    check: "Is the price the whole price?",
    ask: "Is GST included? Any registration or materials fee?",
    warning: "Tax, materials or an app charged on top of the advertised fee.",
    ours: "Inclusive of taxes, no material fee; app, videos and weekly review included.",
  },
  {
    check: "Is the deadline real?",
    ask: "What happens if I decide next week?",
    warning:
      "'Only 2 seats left today' with no date — false urgency is a dark pattern under India's 2023 guidelines.",
    ours: "Offers carry a printed end date. You can decide next week.",
  },
  {
    check: "How many learners, and the same teacher?",
    ask: "How many people in my batch? Will the teacher change?",
    warning: "'Small batch' with no number; a new tutor every call.",
    ours: "About 6 learners, the same teacher for the course.",
  },
  {
    check: "Where do complaints go?",
    ask: "Who handles complaints, and how fast?",
    warning: "No named person, no timeline, only a sales number.",
    ours: "A named Grievance Officer; acknowledged within 48 hours.",
  },
  {
    check: "Do the reviews read real?",
    ask: "Read the 3-star reviews, not the 5-star wall.",
    warning: "Reviews that disappear after a refund, or only perfect scores with no detail.",
    ours: "We never ask anyone to change a review.",
  },
  {
    check: "Did you speak in the trial?",
    ask: "Is the free session a class, or a sales pitch?",
    warning: "A 'free demo' that is a counsellor and a payment link.",
    ours: "Free consultation is counselling; the ₹199 Demo Class is a real class, adjusted if you join.",
  },
];

export const FAIR_BILLING_FAQ: { q: string; a: string }[] = [
  {
    q: "Do I have to pay for several months upfront, or take a loan or EMI?",
    a: `No. ${FAIR_BILLING}`,
  },
  {
    q: "What should I check before paying for any spoken English course?",
    a: "Ask for one month only, no loan or EMI, no auto-renewal, the refund policy in writing, a price that includes tax, a real deadline, a batch size and the same teacher, and a named person for complaints. Learn With Smile meets every one; the full 10-point checklist is on our Before You Pay page.",
  },
];
