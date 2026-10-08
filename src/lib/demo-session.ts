/** Paid seat in a live batch. Not one of the five programmes, and not the free consultation. */
export const DEMO_SESSION = {
  slug: "demo-session" as const,
  path: "/course-demo-session" as const,
  title: "Demo Class",
  minutes: 90,
  price: "₹199",
  scheduleWithinHours: 72,
  adjustWithinHours: 48,
  enrolMessage:
    "Hi, I want to book the ₹199 Demo Class (90 minutes in a live batch, adjusted in my fee if I enrol). Please send me the payment and slot details.",
} as const;
