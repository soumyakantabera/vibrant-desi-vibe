import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["master-excel"];
export const Route = createFileRoute("/course-master-excel")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
