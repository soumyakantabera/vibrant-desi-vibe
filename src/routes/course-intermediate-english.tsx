import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["intermediate-english"];
export const Route = createFileRoute("/course-intermediate-english")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
