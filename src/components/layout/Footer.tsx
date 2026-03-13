import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  product: {
    label: "Product",
    links: [
      { href: "/download", label: "Download" },
      { href: "/pricing", label: "Pricing" },
      { href: "/languages", label: "Languages" },
      { href: "/blog", label: "Blog" },
    ],
  },
  company: {
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/about#press", label: "Press" },
    ],
  },
  support: {
    label: "Support",
    links: [
      { href: "/support", label: "Help Center" },
      { href: "/support/faq", label: "FAQ" },
      { href: "/support/contact", label: "Contact" },
    ],
  },
};

const socialLinks = [
  {
    href: "https://twitter.com/festivitiesapp",
    label: "Follow Festivities on X (Twitter)",
    icon: Twitter,
  },
  {
    href: "https://instagram.com/festivitiesapp",
    label: "Follow Festivities on Instagram",
    icon: Instagram,
  },
  {
    href: "https://linkedin.com/company/festivities",
    label: "Follow Festivities on LinkedIn",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-text)] text-[var(--color-brand-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] rounded-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">F</span>
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Festivities
              </span>
            </Link>
            <p className="text-sm text-[var(--color-brand-bg)]/60 leading-relaxed mb-5">
              The AI language app that teaches through real conversation, not flashcards.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[var(--color-brand-bg)]/20 flex items-center justify-center text-[var(--color-brand-bg)]/60 hover:text-[var(--color-brand-bg)] hover:border-[var(--color-brand-bg)]/40 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-bg)]/40 mb-4">
                {section.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-brand-bg)]/70 hover:text-[var(--color-brand-bg)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-brand-bg)]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-brand-bg)]/40">
            © 2026 Festivities Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/legal/privacy"
              className="text-sm text-[var(--color-brand-bg)]/40 hover:text-[var(--color-brand-bg)]/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] rounded-sm"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms"
              className="text-sm text-[var(--color-brand-bg)]/40 hover:text-[var(--color-brand-bg)]/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] rounded-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
