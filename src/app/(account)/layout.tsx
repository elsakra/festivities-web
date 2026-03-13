import Link from "next/link";

const accountNav = [
  { href: "/account/billing", label: "Billing" },
  { href: "/account/settings", label: "Settings" },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 min-h-screen bg-[var(--color-brand-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Account navigation" className="flex gap-2 mb-8 border-b border-[var(--color-brand-border)] pb-4">
          {accountNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-[var(--radius-pill)] text-sm font-semibold text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] hover:bg-[var(--color-brand-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
