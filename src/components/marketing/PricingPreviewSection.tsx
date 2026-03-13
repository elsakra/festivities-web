import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    features: ["1 conversation/day", "All 8 languages", "Full-quality AI"],
    cta: "Download Free",
    href: "/download",
    variant: "outline" as const,
  },
  {
    name: "Fluency Path",
    monthlyPrice: 2499,
    annualMonthly: 1667,
    badge: "Most Popular",
    features: ["Unlimited conversations", "Pronunciation coaching", "Progress tracking", "Cultural content"],
    cta: "Start 7-Day Trial",
    href: "/pricing",
    variant: "primary" as const,
  },
  {
    name: "Accelerator",
    monthlyPrice: 4999,
    annualMonthly: 2917,
    features: ["45+ min sessions", "Scenario simulations", "Phoneme analysis", "Fluency credentials"],
    cta: "Start 3-Day Trial",
    href: "/pricing",
    variant: "secondary" as const,
  },
];

export function PricingPreviewSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-[var(--color-brand-bg)]"
      aria-labelledby="pricing-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="pricing-preview-heading"
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple pricing.
          </h2>
          <p className="text-xl text-[var(--color-brand-text-secondary)]">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[var(--radius-xl)] p-6 ${
                plan.badge
                  ? "bg-[var(--color-brand-primary)] text-white ring-2 ring-[var(--color-brand-primary)] shadow-xl"
                  : "bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-brand-accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  {plan.monthlyPrice === 0 ? (
                    <span className="text-3xl font-bold">Free</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">
                        {formatPrice(plan.annualMonthly ?? plan.monthlyPrice)}
                      </span>
                      <span className={`text-sm ${plan.badge ? "text-white/70" : "text-[var(--color-brand-text-secondary)]"}`}>
                        /mo
                      </span>
                    </>
                  )}
                </div>
                {plan.annualMonthly && (
                  <p className={`text-xs mt-1 ${plan.badge ? "text-white/70" : "text-[var(--color-brand-text-secondary)]"}`}>
                    billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.badge ? "text-white/80" : "text-[var(--color-brand-success)]"}`}
                      aria-hidden="true"
                    />
                    <span className={plan.badge ? "text-white/90" : "text-[var(--color-brand-text-secondary)]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.badge ? "ghost" : plan.variant}
                size="md"
                className={`w-full ${plan.badge ? "bg-white text-[var(--color-brand-primary)] hover:bg-white/90" : ""}`}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="text-[var(--color-brand-primary)] font-semibold hover:underline"
          >
            See all plans and features →
          </Link>
        </div>
      </div>
    </section>
  );
}
