import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["career-counselling"];
export const Route = createFileRoute("/course-career-counselling")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
