import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["interactive-speaking"];
export const Route = createFileRoute("/course-interactive-speaking")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
