import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide } from "@/components/RegionalPages";
import { needHead } from "@/lib/regional-head";

export const Route = createFileRoute("/english-for-bank-po-interview")({
  component: () => <NeedGuide need="bank" />,
  head: () => needHead("bank"),
});
