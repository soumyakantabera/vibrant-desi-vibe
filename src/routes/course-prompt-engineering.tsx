import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["prompt-engineering"];
export const Route = createFileRoute("/course-prompt-engineering")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
