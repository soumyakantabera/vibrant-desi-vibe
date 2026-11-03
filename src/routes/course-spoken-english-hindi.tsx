import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["spoken-english-hindi"];
export const Route = createFileRoute("/course-spoken-english-hindi")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
