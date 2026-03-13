import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LANGUAGES } from "@/content/languages";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Languages | Festivities",
  description:
    "Learn Spanish, French, Japanese, Korean, German, Italian, Portuguese, or Mandarin through real AI conversations. 8 languages, one approach.",
  alternates: {
    canonical: `${getBaseUrl()}/languages`,
  },
};

export default function LanguagesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1
              className="text-5xl lg:text-6xl font-bold text-[var(--color-brand-text)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose your language
            </h1>
            <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-xl mx-auto">
              8 languages. Real AI conversation. One app. Start speaking today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang.slug}
                href={`/languages/${lang.slug}`}
                className="group bg-[var(--color-brand-surface)] hover:bg-white rounded-[var(--radius-xl)] p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                <span className="text-4xl mb-4 block" role="img" aria-label={lang.name}>
                  {lang.flag}
                </span>
                <h2
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                  lang={lang.bcp47}
                >
                  {lang.native}
                </h2>
                <p className="text-[var(--color-brand-text-secondary)] text-sm mb-3">{lang.name}</p>
                <p className="text-sm text-[var(--color-brand-text-secondary)] leading-relaxed mb-4">
                  {lang.tagline}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn {lang.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--color-brand-text-secondary)]">
              More languages coming soon.{" "}
              <a
                href="https://tally.so/r/festivities-language-request"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-primary)] font-semibold hover:underline"
              >
                Request yours →
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
