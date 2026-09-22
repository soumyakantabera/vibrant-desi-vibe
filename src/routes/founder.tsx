import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/founder")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Sunanda Dey | Educator" },
      { name: "robots", content: "noindex, follow" },
      { "http-equiv": "refresh", content: `0;url=${SITE_URL}/educator` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/educator` }],
  }),
});

function Page() {
  return (
    <Layout waMessage="Hi, I want a free consultation with Sunanda.">
      <Navigate to="/educator" replace />
      <section className="section">
        <div className="container-x max-w-xl py-16">
          <h1 className="text-3xl md:text-4xl text-ink">Sunanda Dey, educator</h1>
          <p className="mt-3 text-ink/85">This profile now lives on the educator page.</p>
          <Link to="/educator" className="btn btn-primary mt-6 inline-flex">
            Meet the educator
          </Link>
        </div>
      </section>
    </Layout>
  );
}
