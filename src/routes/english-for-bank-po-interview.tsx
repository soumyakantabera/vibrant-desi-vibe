import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide, needHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/english-for-bank-po-interview")({
  component: () => <NeedGuide need="bank" />,
  head: () => needHead("bank"),
});
