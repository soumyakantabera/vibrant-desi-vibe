import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["spoken-english-marathi"];
export const Route = createFileRoute("/course-spoken-english-marathi")({
  component: () => <CoursePage data={d} />,
  head: () => courseSeo(d),
});
