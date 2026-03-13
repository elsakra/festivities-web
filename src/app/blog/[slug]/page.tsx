import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { formatDate, getBaseUrl, truncate } from "@/lib/utils";
import { Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: `${getBaseUrl()}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${getBaseUrl()}/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Festivities",
      logo: {
        "@type": "ImageObject",
        url: `${getBaseUrl()}/logo.png`,
      },
    },
    url: `${getBaseUrl()}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="pt-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All posts
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider bg-[var(--color-brand-accent)]/10 px-2 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[var(--color-brand-text-secondary)] mb-10 pb-8 border-b border-[var(--color-brand-border)]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center text-white text-xs font-bold" aria-hidden="true">
                {post.author[0]}
              </div>
              <span className="font-medium text-[var(--color-brand-text)]">{post.author}</span>
            </div>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime} min read
            </span>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <MDXRemote source={post.content} />
          </div>

          {/* Author bio */}
          <div className="mt-12 pt-8 border-t border-[var(--color-brand-border)]">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center text-white font-bold flex-shrink-0" aria-hidden="true">
                {post.author[0]}
              </div>
              <div>
                <p className="font-semibold text-[var(--color-brand-text)]">{post.author}</p>
                <p className="text-sm text-[var(--color-brand-text-secondary)] mt-1">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-[var(--color-brand-accent)]/10 rounded-[var(--radius-xl)] p-8 text-center border border-[var(--color-brand-primary)]/20">
            <h2
              className="text-2xl font-bold text-[var(--color-brand-text)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to put this into practice?
            </h2>
            <p className="text-[var(--color-brand-text-secondary)] mb-6">
              Start a free AI conversation in the language of your choice. No signup required.
            </p>
            <Button asChild size="lg">
              <Link href="/download">Try Festivities free →</Link>
            </Button>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[var(--color-brand-border)]" aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-2xl font-bold text-[var(--color-brand-text)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Related posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-[var(--color-brand-surface)] hover:bg-white rounded-[var(--radius-xl)] p-5 transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                >
                  <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider">
                    {rp.category}
                  </span>
                  <h3
                    className="mt-2 font-bold text-[var(--color-brand-text)] group-hover:text-[var(--color-brand-primary)] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {rp.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-brand-text-secondary)]">
                    {truncate(rp.description, 80)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
