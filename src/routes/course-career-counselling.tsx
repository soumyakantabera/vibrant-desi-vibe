import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/course-career-counselling")({
  component: Retired,
  head: () => {
    const head = buildHead({
      path: "/course-career-counselling",
      title: "Career counselling is not offered | Learn With Smile",
      description:
        "We do not offer career counselling. Live English courses for adults 15+ start at ₹999/month, inclusive of taxes.",
      ogImage: "/og/default.jpg",
    });
    for (const meta of head.meta) {
      if (meta.name === "robots" || meta.name === "googlebot" || meta.name === "bingbot") {
        meta.content = "noindex, follow";
      }
    }
    return head;
  },
});

function Retired() {
  return (
    <Layout>
      <section className="section">
        <div className="container-x max-w-2xl">
          <h1 className="text-3xl text-ink md:text-5xl">We do not offer career counselling.</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            The live rooms are Spoken English, Interactive Speaking, Business English and Interview
            Preparation. From ₹999/month, inclusive of taxes.
          </p>
          <Link to="/english-career" className="btn btn-primary mt-6">
            See the courses
          </Link>
        </div>
      </section>
    </Layout>
  );
}
