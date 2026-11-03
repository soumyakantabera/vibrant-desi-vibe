import { createFileRoute } from "@tanstack/react-router";

import { CityGuide } from "@/components/CityGuide";
import { cityHead } from "@/lib/guide-head";

export const Route = createFileRoute("/spoken-english-classes-hyderabad")({
  component: () => <CityGuide slug="hyderabad" />,
  head: () => cityHead("hyderabad"),
});
