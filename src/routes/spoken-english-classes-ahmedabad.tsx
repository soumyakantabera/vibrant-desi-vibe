import { createFileRoute } from "@tanstack/react-router";

import { CityGuide } from "@/components/CityGuide";
import { cityHead } from "@/lib/guide-head";

export const Route = createFileRoute("/spoken-english-classes-ahmedabad")({
  component: () => <CityGuide slug="ahmedabad" />,
  head: () => cityHead("ahmedabad"),
});
