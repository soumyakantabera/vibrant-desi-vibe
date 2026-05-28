import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["finance-excel"];
export const Route = createFileRoute("/course-finance-excel")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
