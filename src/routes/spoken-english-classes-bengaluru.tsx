import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-bengaluru")({
  component: () => <CityGuide slug="bengaluru" />,
  head: () => cityHead("bengaluru"),
});
