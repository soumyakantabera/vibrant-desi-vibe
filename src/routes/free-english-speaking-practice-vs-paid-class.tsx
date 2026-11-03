import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/free-english-speaking-practice-vs-paid-class")({
  component: () => <ConfiguredGuide path="/free-english-speaking-practice-vs-paid-class" />,
  head: () => guideHead("/free-english-speaking-practice-vs-paid-class"),
});
