import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/intermediate-spoken-english-course-india")({
  component: () => <ConfiguredGuide path="/intermediate-spoken-english-course-india" />,
  head: () => guideHead("/intermediate-spoken-english-course-india"),
});
