import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-ahmedabad")({
  component: () => <CityGuide slug="ahmedabad" />,
  head: () => cityHead("ahmedabad"),
});
