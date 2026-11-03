import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/CoursePage";
import { courseSeo } from "@/lib/course-seo";
import { COURSES } from "@/lib/courses";
const d = COURSES["intermediate-english"];
export const Route = createFileRoute("/course-intermediate-english")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
