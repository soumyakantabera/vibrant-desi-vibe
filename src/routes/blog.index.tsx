import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL, abs, blogPath, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { getPostsSorted } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  component: Page,
  head: () => {
    const head = pageHead("/blog");
    // Each post now has its own URL and its own BlogPosting entity (see
    // src/lib/seo.ts → blogPostHead). This Blog entity is the collection they
    // belong to, and every entry here carries the url, dates and author it was
    // previously missing — without those, an entry is a headline with nothing
    // behind it and is not eligible for anything.
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${abs("/blog")}#blog`,
        name: "Learn With Smile Blog",
        description:
          "Practical English and career articles for Indian learners, written by Learn With Smile teachers.",
        url: abs("/blog"),
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
        blogPost: getPostsSorted().map((post) => ({
          "@type": "BlogPosting",
          "@id": `${abs(blogPath(post))}#post`,
          headline: post.title,
          description: post.description,
          url: abs(blogPath(post)),
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          articleSection: post.tag,
          inLanguage: "en-IN",
          author: {
            "@type": "Person",
            "@id": `${abs("/founder")}#person`,
            name: post.author,
            url: abs("/founder"),
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        })),
      }),
    });
    return head;
  },
});

/** Human date for the card. The machine copy lives in <time dateTime>. */
function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Page() {
  const posts = getPostsSorted();

  return (
    <Layout
      waMessage="Hi, I read the blog. I'd like to discuss my learning goal."
      footerImage={IMG.blogDesk}
    >
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.blogDesk}
            alt="Student reading and taking notes for English practice"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-indigo-pop/70 to-brand-deep/65" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="book" size={14} /> Blog
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Tips & Stories for <span className="text-sunshine">Indian Learners</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            Practical, hype-free articles on English and career building — written by teachers who
            run live classes from ₹999/mo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Latest Posts" title="Read · Apply · Discuss on WhatsApp" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {posts.map((p) => (
              <article key={p.slug} className="card-soft flex flex-col">
                {/* The whole card links to the article. This is the bug the blog
                    had: the titles were unlinked <h3> elements, so none of the
                    five posts had a URL a reader or a crawler could reach. */}
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col flex-1"
                >
                  <SmartImage
                    src={IMG[p.img as keyof typeof IMG] ?? IMG.blogDesk}
                    alt={p.imgAlt}
                    className="mb-3 w-full rounded-xl"
                    ratio="4/3"
                    imgClassName="group-hover:scale-105 transition duration-500"
                    position="center 22%"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  />
                  <span className="pill bg-brand-soft text-brand-deep border-brand/20 mb-2 w-fit">
                    {p.tag}
                  </span>
                  <h3 className="font-display font-bold text-ink text-lg group-hover:text-brand transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink/85 mt-2 flex-1">{p.excerpt}</p>
                  <p className="text-xs text-ink/70 mt-3">
                    <time dateTime={p.datePublished}>{formatDate(p.datePublished)}</time> ·{" "}
                    {p.readingTime} min read
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-brand font-display font-bold text-sm">
                    Read the article <Icon name="arrow-right" size={14} />
                  </span>
                </Link>
                <WaButton
                  message={`Hi, I read "${p.title}" and want to know more.`}
                  variant="wa"
                  size="sm"
                  className="mt-4"
                >
                  Ask about this on WhatsApp
                </WaButton>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
