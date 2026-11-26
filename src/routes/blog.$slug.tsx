import { PackageBand } from "@/components/package/PackageSections";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { ArticleBody, ArticleToc, ShortAnswer } from "@/components/ArticleBody";
import { CourseFitCheck } from "@/components/CourseFitCheck";
import { fitSlugsFromCoursePaths } from "@/lib/course-fit";
import { tagStyle } from "@/lib/tones";
import { FaqSection } from "@/components/FaqSection";
import { SmartImage } from "@/components/SmartImage";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { LevelTestPromo } from "@/components/LevelTestPromo";
import { IMG } from "@/lib/images";
import { COURSES } from "@/lib/courses";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ARTICLE_BODIES } from "@/content/blog";
import { articleToc } from "@/content/blog/blocks";
import { blogPostHead } from "@/lib/seo";
import { CHAT_MSG } from "@/lib/whatsapp";

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
  const waMessage = "Hi, I read your blog and I want a free consultation for spoken English.";
  const toc = articleToc(body);

  return (
    <Layout waMessage={waMessage} footerImage={heroImage}>
      <section className="hero-teal relative">
        <div className="absolute inset-0 z-0">
          <SmartImage src={heroImage} alt={post.imgAlt} fill priority sizes="100vw" />
          <div className="absolute inset-0 hero-veil" />
        </div>
        <div className="hero-bob container-x pt-8 pb-10 md:py-20 max-w-3xl text-cream">
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

          <span
            className={`pill mt-5 inline-flex items-center gap-1.5 border-transparent ${tagStyle(post.tag).tone.solid}`}
          >
            <Icon name={tagStyle(post.tag).icon} size={14} /> {post.tag}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">{post.title}</h1>
          <p className="mt-4 text-lg text-white/95">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/90">
            <span>
              By{" "}
              <Link to="/educator" className="text-sunshine font-semibold hover:underline">
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

      <article className="section">
        <div className="container-x max-w-3xl">
          {post.shortAnswer && <ShortAnswer text={post.shortAnswer} />}
          <ArticleToc items={toc} />
          <ArticleBody body={body} waMessage={waMessage} />
          <CourseFitCheck slugs={fitSlugsFromCoursePaths(post.relatedCourses)} />

          {post.sources && post.sources.length > 0 && (
            <section aria-labelledby="sources-title" className="mt-10">
              <h2 id="sources-title" className="font-display font-bold text-ink text-lg">
                Sources
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/85">
                {post.sources.map((src: { name: string; url: string }) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      rel="noopener"
                      target="_blank"
                      className="text-brand underline decoration-1 underline-offset-2 hover:decoration-2"
                    >
                      {src.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {post.dateModified !== post.datePublished && (
            <p className="mt-10 text-xs text-ink/70">
              Last updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
            </p>
          )}
        </div>
      </article>

      <div className="pb-10 md:pb-14">
        <LevelTestPromo />
      </div>

      <PackageBand />

      {post.relatedCourses.length > 0 && (
        <section className="section bg-brand-soft/40 pt-0">
          <div className="container-x max-w-3xl">
            <h2 className="font-display font-extrabold text-ink section-title">
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

      {related.length > 0 && (
        <section className="section">
          <div className="container-x max-w-3xl">
            <h2 className="font-display font-extrabold text-ink section-title">Read next</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  to="/blog/$slug"
                  params={{ slug: other.slug }}
                  className={`card-soft flex flex-col border-t-4 hover:shadow-md transition ${tagStyle(other.tag).tone.top}`}
                >
                  <span
                    className={`pill inline-flex w-fit items-center gap-1.5 ${tagStyle(other.tag).tone.soft} ${tagStyle(other.tag).tone.text} ${tagStyle(other.tag).tone.border}`}
                  >
                    <Icon name={tagStyle(other.tag).icon} size={13} /> {other.tag}
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

      <FaqSection
        faqs={post.faqs ?? []}
        title="Questions this article answers"
        waMessage={waMessage}
        bolo
      />
    </Layout>
  );
}
