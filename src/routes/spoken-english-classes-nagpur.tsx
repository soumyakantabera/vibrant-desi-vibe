import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-nagpur")({
  component: () => <CityGuide slug="nagpur" />,
  head: () => cityHead("nagpur"),
});
