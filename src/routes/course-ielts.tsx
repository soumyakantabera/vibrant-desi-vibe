import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["ielts"];
export const Route = createFileRoute("/course-ielts")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
