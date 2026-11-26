import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL, abs, blogPath, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { tagStyle } from "@/lib/tones";
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
            "@id": `${abs("/educator")}#person`,
            name: post.author,
            url: abs("/educator"),
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
  // Course-decision guides lead the page: a reader deciding what to buy should
  // not have to scroll past daily-practice articles to find them.
  const decide = posts.filter((p) => p.tag === "Guides");
  const rest = posts.filter((p) => p.tag !== "Guides");

  return (
    <Layout
      waMessage="Hi, I read the blog and I want a free consultation for spoken English."
      footerImage={IMG.blogDesk}
    >
      <section className="hero-teal relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.blogDesk}
            alt="Student reading and taking notes for English practice"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-veil" />
        </div>
        <div className="hero-bob container-x pt-10 pb-12 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">
            <Icon name="book" size={14} /> Blog
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Choose the right course, <span className="text-sunshine">then practise</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            Hype-free guides for adults who are serious about speaking English: which course fits,
            what it costs in total, what it asks of you, and who should wait. Written by teachers
            who run live classes from ₹1,199/mo, inclusive of taxes.
          </p>
        </div>
      </section>

      {decide.length > 0 && (
        <section className="section pb-0">
          <div className="container-x">
            <SectionHeader
              eyebrow="Choosing a course? Start here"
              title="Which course, for whom, and what it asks of you"
            />
            <ol className="grid gap-3 md:grid-cols-2">
              {decide.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="card-soft group flex h-full items-start gap-3 hover:shadow-md transition"
                  >
                    <span
                      aria-hidden="true"
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tagStyle(p.tag).tone.soft} ${tagStyle(p.tag).tone.text}`}
                    >
                      <Icon name={tagStyle(p.tag).icon} size={20} />
                    </span>
                    <span>
                      <span className="block font-display font-bold text-ink group-hover:text-brand transition">
                        {p.title}
                      </span>
                      <span className="mt-1 block text-sm text-ink/85">{p.excerpt}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Latest Posts" title="Read · Apply · Discuss on WhatsApp" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {rest.map((p) => (
              <article
                key={p.slug}
                className={`card-soft flex flex-col border-t-4 ${tagStyle(p.tag).tone.top}`}
              >
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
                  <span
                    className={`pill inline-flex w-fit items-center gap-1.5 ${tagStyle(p.tag).tone.soft} ${tagStyle(p.tag).tone.text} ${tagStyle(p.tag).tone.border} mb-2`}
                  >
                    <Icon name={tagStyle(p.tag).icon} size={13} /> {p.tag}
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
                  message="Hi, I read your blog and I want a free consultation for spoken English."
                  variant="wa"
                  size="sm"
                  className="mt-4"
                >
                  Chat on WhatsApp
                </WaButton>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
