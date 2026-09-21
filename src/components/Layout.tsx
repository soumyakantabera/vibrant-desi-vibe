import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { CookieBar } from "./CookieBar";

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
    <div className="min-h-screen flex flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:rounded-lg focus:bg-sunshine focus:px-3 focus:py-2 focus:font-display focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content" className="flex-1" data-snippet="">
        {children}
      </main>
      <Footer image={footerImage} />
      <CookieBar />
      <WhatsAppFab message={waMessage} />
    </div>
  );
}
