import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Support | Festivities",
  description: "Get in touch with the Festivities support team. We typically respond within 4 hours on business days.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-[var(--color-brand-bg)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] mb-6">
            <a href="/support" className="hover:text-[var(--color-brand-text)] transition-colors">Support</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>

          <h1
            className="text-4xl font-bold text-[var(--color-brand-text)] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact us
          </h1>
          <p className="text-[var(--color-brand-text-secondary)] mb-8">
            We typically respond within 4 hours during business days.
          </p>

          <ContactForm />

          <div className="mt-8 pt-8 border-t border-[var(--color-brand-border)]">
            <p className="text-sm text-[var(--color-brand-text-secondary)]">
              You can also email us directly at{" "}
              <a
                href="mailto:support@festivities.io"
                className="text-[var(--color-brand-primary)] font-semibold hover:underline"
              >
                support@festivities.io
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
