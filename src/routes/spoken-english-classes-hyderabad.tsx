import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-hyderabad")({
  component: () => <CityGuide slug="hyderabad" />,
  head: () => cityHead("hyderabad"),
});
