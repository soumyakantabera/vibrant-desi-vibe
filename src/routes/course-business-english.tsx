import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["business-english"];
export const Route = createFileRoute("/course-business-english")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
