import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/child-protection")({
  component: () => <LegalPage path="/child-protection" />,
  head: () => pageHead("/child-protection"),
});
