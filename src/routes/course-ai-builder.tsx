import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["ai-builder"];
export const Route = createFileRoute("/course-ai-builder")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
