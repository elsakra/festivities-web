import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { AppStoreButtons } from "@/components/marketing/AppStoreButtons";
import { getLanguageBySlug, getAllLanguageSlugs } from "@/content/languages";
import { getBaseUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLanguageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguageBySlug(slug);
  if (!lang) return {};

  return {
    title: lang.seoTitle,
    description: lang.seoDescription,
    alternates: {
      canonical: `${getBaseUrl()}/languages/${slug}`,
    },
    openGraph: {
      title: lang.seoTitle,
      description: lang.seoDescription,
      url: `${getBaseUrl()}/languages/${slug}`,
      images: [
        {
          url: `/og/languages/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Learn ${lang.name} with Festivities`,
        },
      ],
    },
  };
}

export default async function LanguagePage({ params }: Props) {
  const { slug } = await params;
  const lang = getLanguageBySlug(slug);
  if (!lang) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lang.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      {
        "@type": "ListItem",
        position: 2,
        name: "Languages",
        item: `${getBaseUrl()}/languages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: lang.name,
        item: `${getBaseUrl()}/languages/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[var(--color-brand-bg)] via-[var(--color-brand-surface)] to-[var(--color-brand-bg)]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, ${lang.color}30 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] mb-8">
            <Link href="/" className="hover:text-[var(--color-brand-text)] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/languages" className="hover:text-[var(--color-brand-text)] transition-colors">Languages</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-brand-text)]" aria-current="page">{lang.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl" role="img" aria-label={lang.name}>{lang.flag}</span>
              <span
                className="text-2xl font-bold"
                style={{ color: lang.color, fontFamily: "var(--font-display)" }}
                lang={lang.bcp47}
              >
                {lang.native}
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl font-bold text-[var(--color-brand-text)] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {lang.heroHeadline}
            </h1>
            <p className="text-xl text-[var(--color-brand-text-secondary)] mb-10 max-w-2xl">
              {lang.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="/download">
                  Start speaking {lang.name} — free
                </Link>
              </Button>
            </div>
            <AppStoreButtons size="sm" />
          </div>
        </div>
      </section>

      {/* Why Festivities for this language */}
      <section className="py-20 bg-[var(--color-brand-bg)]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2
                id="why-heading"
                className="text-3xl font-bold text-[var(--color-brand-text)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why Festivities for {lang.name}?
              </h2>
              <div className="prose max-w-none">
                {lang.whyContent.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[var(--color-brand-text-secondary)] leading-relaxed mb-5 text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 sticky top-24">
                <h3
                  className="text-lg font-bold text-[var(--color-brand-text)] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Key challenges we address
                </h3>
                <ul className="space-y-3">
                  {lang.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-brand-text-secondary)]">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${lang.color}20` }}
                      >
                        <Check className="h-3 w-3" style={{ color: lang.color }} aria-hidden="true" />
                      </div>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example conversation */}
      <section className="py-20 bg-[var(--color-brand-surface)]" aria-labelledby="conversation-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="conversation-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-2 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A real Festivities conversation
          </h2>
          <p className="text-center text-[var(--color-brand-text-secondary)] mb-10">
            This is what a session actually looks like. Hover messages to see translations.
          </p>

          <div className="bg-[var(--color-brand-text)] rounded-[var(--radius-xl)] overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{lang.name} Tutor</div>
                <div className="text-white/40 text-xs">Adaptive AI conversation</div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4">
              {lang.conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`group max-w-[75%] rounded-2xl px-4 py-3 relative ${
                      msg.role === "ai"
                        ? "bg-white/10 text-white/90 rounded-tl-sm"
                        : "bg-[var(--color-brand-primary)] text-white rounded-tr-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed" lang={msg.role === "ai" && msg.translation ? lang.bcp47 : undefined}>
                      {msg.text}
                    </p>
                    {msg.translation && (
                      <p className="text-xs opacity-0 group-hover:opacity-60 transition-opacity mt-1 italic">
                        {msg.translation}
                      </p>
                    )}
                    {msg.role === "ai" && msg.translation && (
                      <div className="absolute -bottom-5 left-0 text-[10px] text-white/30 group-hover:text-white/60 transition-colors">
                        hover for translation
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-[var(--color-brand-bg)]" aria-labelledby="topics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="topics-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What you&apos;ll learn
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {lang.topics.map((topic) => (
              <div
                key={topic}
                className="bg-[var(--color-brand-surface)] rounded-[var(--radius-lg)] p-4 text-center text-sm font-semibold text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] hover:bg-white transition-colors duration-150"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-[var(--color-brand-surface)]" aria-labelledby="compare-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="compare-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Festivities vs. {lang.competitor}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-brand-border)]">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[var(--color-brand-text-secondary)]">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--color-brand-text-secondary)]">
                    {lang.competitor}
                    <br />
                    <span className="font-normal text-xs">{lang.competitorDescription}</span>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--color-brand-primary)]">
                    Festivities
                    <br />
                    <span className="font-normal text-xs text-[var(--color-brand-text-secondary)]">AI conversation</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Learning approach", "Lessons & exercises", "Real conversation"],
                  ["Conversation practice", "Limited / scripted", "Unlimited adaptive AI"],
                  ["Adapts to your level", "Partially", "Yes, every session"],
                  ["Speaking from day 1", "No", "Yes"],
                  ["Pronunciation feedback", "Basic", "Detailed (premium)"],
                  ["Free tier", "Yes", "Yes"],
                ].map(([feature, competitor, ours]) => (
                  <tr key={feature} className="border-b border-[var(--color-brand-border)]">
                    <td className="py-4 px-4 text-sm text-[var(--color-brand-text)]">{feature}</td>
                    <td className="py-4 px-4 text-sm text-center text-[var(--color-brand-text-secondary)]">{competitor}</td>
                    <td className="py-4 px-4 text-sm text-center font-semibold text-[var(--color-brand-primary)]">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {lang.testimonials.length > 0 && (
        <section className="py-20 bg-[var(--color-brand-bg)]" aria-labelledby="reviews-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="reviews-heading"
              className="text-3xl font-bold text-[var(--color-brand-text)] mb-8 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {lang.name} learners love Festivities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lang.testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 border border-[var(--color-brand-border)]"
                >
                  <p className="text-[var(--color-brand-text)] leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="text-sm text-[var(--color-brand-text-secondary)]">
                    <strong className="text-[var(--color-brand-text)]">{t.name}</strong>
                    {" · "}Learning {lang.name} for {t.time}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-brand-primary)] to-[#8B3712]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start learning {lang.name} today — free
          </h2>
          <p className="text-white/80 text-lg mb-8">
            No credit card. No signup. Your first conversation starts in seconds.
          </p>
          <Button
            asChild
            size="xl"
            className="bg-white text-[var(--color-brand-primary)] hover:bg-white/95 font-bold shadow-lg mb-6"
          >
            <Link href="/download">Download Festivities</Link>
          </Button>
          <div className="flex justify-center">
            <AppStoreButtons />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--color-brand-bg)]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently asked questions
          </h2>
          <Accordion items={lang.faqs} />
        </div>
      </section>

      {/* Related languages */}
      <section className="py-16 bg-[var(--color-brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-[var(--color-brand-text)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore other languages
          </h2>
          <Link
            href="/languages"
            className="inline-flex items-center gap-2 text-[var(--color-brand-primary)] font-semibold hover:underline"
          >
            See all 8 languages <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
