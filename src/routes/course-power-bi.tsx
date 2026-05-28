import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["power-bi"];
export const Route = createFileRoute("/course-power-bi")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
