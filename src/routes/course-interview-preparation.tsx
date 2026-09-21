import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["interview-preparation"];
export const Route = createFileRoute("/course-interview-preparation")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
