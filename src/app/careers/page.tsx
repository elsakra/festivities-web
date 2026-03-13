import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers at Festivities",
  description:
    "Join the Festivities team and help build the world's best AI language learning app.",
};

export default function CareersPage() {
  return (
    <div className="pt-20 min-h-screen bg-[var(--color-brand-bg)] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-6xl mb-6" aria-hidden="true">🌍</div>
        <h1
          className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Come build with us.
        </h1>
        <p className="text-xl text-[var(--color-brand-text-secondary)] mb-6 max-w-xl mx-auto">
          Festivities is a small team with a big mission: make world-class language
          learning accessible to everyone on earth through AI conversation.
        </p>
        <p className="text-lg text-[var(--color-brand-text-secondary)] mb-10">
          We&apos;re not hiring yet, but we&apos;re always interested in exceptional people.
          If you&apos;re passionate about language learning, AI, or education technology,
          reach out.
        </p>
        <Button asChild size="lg">
          <a href="mailto:andrew@festivities.io?subject=Careers at Festivities">
            Say hello →
          </a>
        </Button>
        <div className="mt-8">
          <Link
            href="/about"
            className="text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors text-sm"
          >
            Learn more about our team →
          </Link>
        </div>
      </div>
    </div>
  );
}
