import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/free-english-speaking-practice-vs-paid-class")({
  component: () => <ConfiguredGuide path="/free-english-speaking-practice-vs-paid-class" />,
  head: () => guideHead("/free-english-speaking-practice-vs-paid-class"),
});
