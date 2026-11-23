import { BATCH_HOURS, DEMO_MSG, DEMO_PRICE } from "@/lib/whatsapp";

/**
 * Paid seat in a live batch. Not one of the courses, and not the free
 * consultation. Retired 4 Nov 2026, restored 23 Nov 2026 as the main call to
 * action: the small payment filters out chats that only ask "price?" or want
 * free material.
 */
export const DEMO_SESSION = {
  slug: "demo-session" as const,
  path: "/course-demo-session" as const,
  title: "Demo Class",
  minutes: 90,
  price: DEMO_PRICE,
  inr: 99,
  scheduleWithinHours: 72,
  adjustWithinHours: 48,
  batchHours: BATCH_HOURS,
  enrolMessage: DEMO_MSG,
} as const;

/** Rendered on /course-demo-session and fed to FAQPage JSON-LD — same list, same words. */
export const DEMO_FAQS: { q: string; a: string }[] = [
  {
    q: "What is the ₹99 Demo Class?",
    a: "One real live class: 90 minutes with our teacher in a batch of about 6 learners, between 3pm and 10pm IST. It is the class enrolled learners attend — not a sales call, not a recording and not the free consultation. ₹99, inclusive of taxes.",
  },
  {
    q: "Is the demo class free?",
    a: "No. It is ₹99, inclusive of taxes. Take admission in any course we currently offer within 48 hours of the class and the ₹99 is adjusted against the course fee, so a learner who joins pays nothing extra. It is not refunded in cash if you do not join. The written rule (https://www.learnwithsmile.app/terms#demo-session) is in our Terms.",
  },
  {
    q: "Why do you charge for a demo class?",
    a: "So the seat goes to someone who plans to join. A batch has about 6 learners and the teacher's time is the course. If you join within 48 hours the ₹99 is adjusted in your fee, so it costs a serious learner nothing.",
  },
  {
    q: "How do I book it?",
    a: "Tap Book ₹99 Demo Class. WhatsApp opens with the request typed; add your goal and preferred time between 3pm and 10pm IST. We reply with the ₹99 payment link (UPI or card through Razorpay) and schedule your seat within 72 hours of payment. Replies 10am–midnight IST, every day.",
  },
  {
    q: "What are the batch timings?",
    a: "Live batches run between 3pm and 10pm IST, up to 2 classes a week. There are no morning batches. Tell us your preferred time on WhatsApp and we place you in a batch that fits.",
  },
  {
    q: "What do the courses cost after the demo?",
    a: "Basic Spoken English ₹1,199/month (6 months), Intermediate Spoken English ₹1,999/month (4 months), Interactive Speaking ₹1,599/month (3 months), Interview Preparation ₹2,499/month (2 months). Inclusive of taxes, billed one month at a time, no auto-debit. The ₹99 comes off the first month if you join within 48 hours.",
  },
  {
    q: "I am not sure which course fits. Should I book the demo or the free consultation?",
    a: "If you want to hear a real class, book the ₹99 Demo Class. If you want advice first, Get Free Consultation is a free group slot on WhatsApp where we name your speaking gap and put the right course and fee in writing. It is advice, not a class.",
  },
  {
    q: "Who is the demo class for?",
    a: "Adults 15+ who are ready to join a paid live course and want to see the teaching first: working professionals, graduates, job seekers and homemakers. It is not a free lesson, and we do not send free study material or PDFs on WhatsApp.",
  },
];

export const DEMO_HOWTO = {
  name: "How to book the ₹99 Demo Class",
  description:
    "Book one 90-minute live class in a real batch of about 6, between 3pm and 10pm IST. The ₹99 is adjusted in the course fee if you join within 48 hours.",
  steps: [
    "Tap Book ₹99 Demo Class. WhatsApp opens with the request typed; add your goal and preferred time between 3pm and 10pm IST.",
    "Pay ₹99, inclusive of taxes, through the Razorpay link we send (UPI or card). We schedule your seat within 72 hours.",
    "Sit the 90-minute live class with the teacher and a batch of about 6.",
    "Join any current course within 48 hours and the ₹99 is adjusted against the fee.",
  ],
  totalTime: "PT90M",
};

/** Copy for the sitewide closing band. The consultation stays as the secondary link. */
export const DEMO_BAND = {
  hook: "₹99 Demo Class — one real 90-minute live class. Adjusted in your fee if you join.",
  headline: "See the class first. Then join.",
  punch:
    "Sit one live class with our teacher and a batch of about 6, between 3pm and 10pm IST. Join any course within 48 hours and the ₹99 comes off your fee. Courses from ₹1,199/month, inclusive of taxes.",
  pills: ["Real live class", "About 6 learners", "3pm–10pm IST", "₹99 adjusted"],
  proof: [
    {
      kicker: "Book",
      title: "On WhatsApp",
      body: "Tell us your goal and preferred time. We send the ₹99 payment link.",
      tone: "coral",
    },
    {
      kicker: "Sit",
      title: "90 minutes, live",
      body: "The same class enrolled learners attend. Not a sales call, not a recording.",
      tone: "indigo",
    },
    {
      kicker: "Join",
      title: "₹99 adjusted",
      body: "Take admission within 48 hours and the ₹99 comes off the course fee.",
      tone: "sun",
    },
  ],
} as const;
