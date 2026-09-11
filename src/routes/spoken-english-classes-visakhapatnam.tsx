import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-visakhapatnam")({
  component: () => <CityGuide slug="visakhapatnam" />,
  head: () => cityHead("visakhapatnam"),
});
