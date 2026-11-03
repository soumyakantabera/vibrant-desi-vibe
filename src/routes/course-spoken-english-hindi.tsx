import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/CoursePage";
import { courseSeo } from "@/lib/course-seo";
import { COURSES } from "@/lib/courses";
const d = COURSES["spoken-english-hindi"];
export const Route = createFileRoute("/course-spoken-english-hindi")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
