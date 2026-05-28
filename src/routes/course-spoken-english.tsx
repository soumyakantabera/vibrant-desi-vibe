import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["spoken-english"];
export const Route = createFileRoute("/course-spoken-english")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
