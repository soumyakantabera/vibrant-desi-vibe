import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["kids-english"];
export const Route = createFileRoute("/course-kids-english")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
