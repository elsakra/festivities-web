import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, CreditCard, Zap, Cpu, MessageSquare } from "lucide-react";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Help Center | Festivities Support",
  description:
    "Find answers to common questions about Festivities, your subscription, the AI tutor, and technical issues.",
  alternates: { canonical: `${getBaseUrl()}/support` },
};

const categories = [
  {
    icon: HelpCircle,
    title: "Getting Started",
    description: "New to Festivities? Start here.",
    href: "/support/faq#getting-started",
    color: "var(--color-brand-primary)",
  },
  {
    icon: CreditCard,
    title: "Account & Billing",
    description: "Subscriptions, payments, and invoices.",
    href: "/support/faq#billing",
    color: "var(--color-brand-accent)",
  },
  {
    icon: Zap,
    title: "App Features",
    description: "How the AI tutor and features work.",
    href: "/support/faq#features",
    color: "#7A4D2D",
  },
  {
    icon: Cpu,
    title: "Technical Issues",
    description: "Device, microphone, and performance help.",
    href: "/support/faq#technical",
    color: "#2D5A8E",
  },
  {
    icon: MessageSquare,
    title: "Contact Us",
    description: "Can't find what you need? We're here.",
    href: "/support/contact",
    color: "#4A7A2D",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[var(--color-brand-surface)] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h1
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How can we help?
          </h1>
          <p className="text-xl text-[var(--color-brand-text-secondary)] mb-8">
            Find answers quickly, or reach our team directly.
          </p>
          <a
            href="mailto:support@festivities.io"
            className="inline-flex items-center gap-2 text-[var(--color-brand-primary)] font-semibold hover:underline"
          >
            support@festivities.io
          </a>
          <p className="text-sm text-[var(--color-brand-text-secondary)] mt-1">
            We typically respond within 4 hours on business days.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[var(--color-brand-bg)]" aria-labelledby="categories-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="categories-heading"
            className="sr-only"
          >
            Help categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group flex gap-4 bg-[var(--color-brand-surface)] hover:bg-white rounded-[var(--radius-xl)] p-6 transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                >
                  <div
                    className="w-11 h-11 rounded-[var(--radius-lg)] flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.color}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: cat.color }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[var(--color-brand-text)] group-hover:text-[var(--color-brand-primary)] transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[var(--color-brand-text-secondary)] mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
