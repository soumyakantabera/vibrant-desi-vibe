import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

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
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer image={footerImage} />
      <WhatsAppFab message={waMessage} />
    </div>
  );
}
