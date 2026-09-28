/** Paid seat in a live batch. Not one of the five programmes, and not the free consultation. */
export const DEMO_SESSION = {
  slug: "demo-session" as const,
  path: "/course-demo-session" as const,
  title: "Demo Session",
  minutes: 90,
  price: "₹199",
  scheduleWithinHours: 72,
  adjustWithinHours: 48,
  enrolMessage:
    "Hi, I want to enrol for the Demo Session — 90 minutes, ₹199 — and schedule my seat in a live batch.",
} as const;
