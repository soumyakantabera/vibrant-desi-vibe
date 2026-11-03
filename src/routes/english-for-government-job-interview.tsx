import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide, needHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/english-for-government-job-interview")({
  component: () => <NeedGuide need="govt" />,
  head: () => needHead("govt"),
});
