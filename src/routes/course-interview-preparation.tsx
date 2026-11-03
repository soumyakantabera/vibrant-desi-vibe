import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/CoursePage";
import { courseSeo } from "@/lib/course-seo";
import { COURSES } from "@/lib/courses";
const d = COURSES["interview-preparation"];
export const Route = createFileRoute("/course-interview-preparation")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
