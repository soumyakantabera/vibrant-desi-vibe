import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["ms-office"];
export const Route = createFileRoute("/course-ms-office")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
