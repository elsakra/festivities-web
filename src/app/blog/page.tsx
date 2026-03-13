import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { formatDate, truncate, getBaseUrl } from "@/lib/utils";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Festivities Blog — Language Learning Tips & Insights",
  description:
    "Research-backed articles on language learning, AI tutoring, and how to become fluent faster. Tips for Spanish, French, Japanese, Korean, and more.",
  alternates: { canonical: `${getBaseUrl()}/blog` },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="pt-20">
      <section className="py-16 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Language Learning Insights
          </h1>
          <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-xl">
            Research, stories, and practical guides to help you become fluent faster.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-8 bg-[var(--color-brand-bg)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-[var(--color-brand-accent)]/10 rounded-[var(--radius-xl)] p-8 lg:p-10 border border-[var(--color-brand-primary)]/20 hover:shadow-lg transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-[var(--color-brand-primary)] uppercase tracking-wider bg-[var(--color-brand-primary)]/10 px-2 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider bg-[var(--color-brand-accent)]/10 px-2 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[var(--color-brand-text)] mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featured.title}
              </h2>
              <p className="text-lg text-[var(--color-brand-text-secondary)] mb-4 max-w-2xl">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-[var(--color-brand-text-secondary)]">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {featured.readTime} min read
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="py-12 pb-24 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[var(--color-brand-surface)] hover:bg-white rounded-[var(--radius-xl)] p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                <div className="mb-3">
                  <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider bg-[var(--color-brand-accent)]/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2
                  className="text-xl font-bold text-[var(--color-brand-text)] mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-brand-text-secondary)] leading-relaxed mb-4">
                  {truncate(post.description, 120)}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--color-brand-text-secondary)]">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readTime} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
