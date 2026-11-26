/**
 * The ₹99 Demo Class (back from 24 November 2026).
 *
 * One paid seat in a real live batch, so a learner can see the teaching
 * before enrolling. It is not a course, not a trial week and not the free
 * consultation (that is advice, not a class).
 *
 * Booking is WhatsApp only: the button opens a prefilled request and the team
 * sends the slot and payment link. The written rule lives in the Terms
 * (#demo-session). Outside India the fee comes from the local list in
 * src/lib/intl-fees.ts (`demo`).
 */
export const DEMO_SESSION = {
  slug: "demo-session" as const,
  path: "/course-demo-session" as const,
  title: "Demo Class",
  minutes: 90,
  inr: 99,
  price: "₹99",
  scheduleWithinHours: 72,
  adjustWithinHours: 48,
  /** One sentence for assistants, schema and FAQs. India figure. */
  rule: "The Demo Class is one real 90-minute live class in a batch of about 6, for ₹99 inclusive of taxes. Book it on WhatsApp. It is not refunded in cash; if you take admission within 48 hours after the class, the ₹99 is adjusted against your course fee.",
  enrolMessage:
    "Hi, I want to book the Demo Class (one live class). Please send me the slot and payment details.",
} as const;

/** Visible on /course-demo-session and in its FAQPage schema. India figures. */
export const DEMO_FAQS: { q: string; a: string }[] = [
  {
    q: "What do I actually sit in?",
    a: "One real live class: 90 minutes, with our teacher, in a batch of about 6. It is the class enrolled learners attend, not a counselling call and not a recording.",
  },
  {
    q: "How much is the Demo Class?",
    a: "₹99, inclusive of taxes, for one class. It is not free and it is not a trial week. The free option is the consultation, which is advice, not a class.",
  },
  {
    q: "Is the ₹99 adjusted if I join a course?",
    a: "Yes. Take admission within 48 hours after the Demo Class (in that course or any course we currently offer) and the ₹99 is adjusted against your course fee. It is not refunded in cash. The written rule is in the Demo Class section of our Terms.",
  },
  {
    q: "How do I book it?",
    a: "Message us on WhatsApp at +91 96744 79949 and ask for the Demo Class. We send a slot and the payment link, and place you in a live batch within 72 hours of payment. We reply 10am–midnight IST every day.",
  },
  {
    q: "Demo Class or free consultation, which should I pick?",
    a: "Pick the free consultation if you are not sure which course fits: we name your speaking gap and put the course, fee and timing in writing. Pick the ₹99 Demo Class if you want to see the teaching yourself before you pay for a month.",
  },
  {
    q: "Who can take the Demo Class?",
    a: "Adults 15 and above, in India or outside India. If the learner is under 18, a parent or guardian books and pays. We do not run classes for children under 15.",
  },
];
