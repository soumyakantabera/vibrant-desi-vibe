import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/CoursePage";
import { courseSeo } from "@/lib/course-seo";
import { COURSES } from "@/lib/courses";
const d = COURSES["business-english"];
export const Route = createFileRoute("/course-business-english")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
