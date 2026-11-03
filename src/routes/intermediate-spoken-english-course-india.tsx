import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/intermediate-spoken-english-course-india")({
  component: () => <ConfiguredGuide path="/intermediate-spoken-english-course-india" />,
  head: () => guideHead("/intermediate-spoken-english-course-india"),
});
