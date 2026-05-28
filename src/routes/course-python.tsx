import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
const d = COURSES["python"];
export const Route = createFileRoute("/course-python")({ component: () => <CoursePage data={d}/>, head: () => courseSeo(d) });
