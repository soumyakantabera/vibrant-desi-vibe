import { createFileRoute, notFound, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { SmartImage } from "@/components/SmartImage";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { COURSES } from "@/lib/courses";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ARTICLE_BODIES } from "@/content/blog";
import { blogPostHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => (loaderData ? blogPostHead(loaderData) : { meta: [], links: [] }),
  component: BlogPostPage,
});

/** Human date for the visible byline. The machine copy is in <time dateTime>. */
function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const body = ARTICLE_BODIES[post.slug] ?? [];
  const related = getRelatedPosts(post.slug, 2);
  const heroImage = IMG[post.img as keyof typeof IMG] ?? IMG.blogDesk;
  const waMessage = `Hi, I read "${post.title}" on your blog and I'd like to know more.`;

  return (
    <Layout waMessage={waMessage} footerImage={heroImage}>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage src={heroImage} alt={post.imgAlt} fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-indigo-pop/70 to-brand-deep/70" />
        </div>
        <div className="container-x py-12 md:py-20 max-w-3xl text-cream">
          {/* Visible breadcrumb, matching the BreadcrumbList in the head. */}
          <nav aria-label="Breadcrumb" className="text-sm text-white/90">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sunshine font-semibold">{post.tag}</li>
            </ol>
          </nav>

          <span className="pill bg-cream/15 text-cream border-cream/25 mt-5 inline-flex">
            {post.tag}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">{post.title}</h1>
          <p className="mt-4 text-lg text-white/95">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/90">
            {/* Byline links to the Person entity the BlogPosting author points
                at, so the on-page signal and the structured data agree. */}
            <span>
              By{" "}
              <Link to="/founder" className="text-sunshine font-semibold hover:underline">
                {post.author}
              </Link>
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="section">
        <div className="container-x max-w-3xl">
          <ArticleBody body={body} />

          {post.dateModified !== post.datePublished && (
            <p className="mt-10 text-xs text-ink/70">
              Last updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
            </p>
          )}
        </div>
      </article>

      {/* RELATED COURSES */}
      {post.relatedCourses.length > 0 && (
        <section className="section bg-brand-soft/40 pt-0">
          <div className="container-x max-w-3xl">
            <h2 className="text-2xl font-display font-extrabold text-ink">
              Courses that cover this
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {post.relatedCourses.map((path: string) => {
                const course = COURSES[path.replace(/^\/course-/, "")];
                if (!course) return null;
                return (
                  <Link
                    key={path}
                    to={path}
                    className="card-soft flex flex-col hover:shadow-md transition"
                  >
                    <span className="pill bg-brand-soft text-brand-deep border-brand/20 w-fit">
                      {course.price}
                    </span>
                    <h3 className="mt-3 font-display font-bold text-ink text-lg">{course.title}</h3>
                    <p className="mt-1 text-sm text-ink/85 flex-1">{course.duration}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-brand font-display font-bold text-sm">
                      See the syllabus <Icon name="arrow-right" size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* RELATED READING */}
      {related.length > 0 && (
        <section className="section">
          <div className="container-x max-w-3xl">
            <h2 className="text-2xl font-display font-extrabold text-ink">Read next</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  to="/blog/$slug"
                  params={{ slug: other.slug }}
                  className="card-soft flex flex-col hover:shadow-md transition"
                >
                  <span className="pill bg-brand-soft text-brand-deep border-brand/20 w-fit">
                    {other.tag}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-ink text-base">{other.title}</h3>
                  <p className="mt-2 text-sm text-ink/85 flex-1">{other.excerpt}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/blog" className="btn btn-outline btn-sm">
                <Icon name="arrow-right" size={14} className="rotate-180" /> All articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-14 md:py-16 overflow-hidden" data-cta-location="final_cta">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x text-center text-cream max-w-2xl">
          <h2 className="text-cream text-2xl md:text-3xl">Want to practise this live?</h2>
          <p className="mt-3 text-white">
            The demo class is free and it is a real class, not a sales call. With approximately 6
            learners, you speak in every session.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message={waMessage} variant="sun" size="lg">
              Book a Free Demo
            </WaButton>
            <Link to="/english-career" className="btn btn-white btn-lg">
              See all 6 courses
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
