import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { CookieBar } from "./CookieBar";
import { CountryProvider, useCountry } from "@/lib/country-context";
import { CountrySelect } from "./CountrySelect";

export function Layout({
  children,
  waMessage,
  footerImage,
}: {
  children: ReactNode;
  waMessage?: string;
  footerImage?: string;
}) {
  return (
    <CountryProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:rounded-lg focus:bg-sunshine focus:px-3 focus:py-2 focus:font-display focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <CountryConfirmBanner />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer image={footerImage} />
        <CookieBar />
        <WhatsAppFab message={waMessage} />
      </div>
    </CountryProvider>
  );
}

function CountryConfirmBanner() {
  const { choice, ready } = useCountry();
  if (!ready || !choice.needsConfirm) return null;
  return (
    <div className="bg-sunshine text-ink border-b border-ink/10">
      <div className="container-x py-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm font-semibold leading-snug">
          {choice.reason ||
            "We could not confirm your country. Choose Country/Region to see the fee that applies to you."}
        </p>
        <CountrySelect tone="light" id="country-region-banner" />
      </div>
    </div>
  );
}
