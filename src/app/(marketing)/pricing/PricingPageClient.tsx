"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import { PLANS } from "@/lib/stripe";

type BillingInterval = "monthly" | "annual";

const pricingFaqs = [
  {
    id: "switch",
    question: "Can I switch plans later?",
    answer:
      "Yes — upgrade or downgrade anytime. Upgrades take effect immediately and are prorated (you only pay the difference). Downgrades take effect at the end of your current billing period, so you keep your current plan until then.",
  },
  {
    id: "trial-end",
    question: "What happens when my trial ends?",
    answer:
      "When your trial ends, you'll be automatically charged for your chosen plan. You'll receive a reminder email 3 days before your trial expires. Cancel anytime before the trial ends to avoid charges — we make it easy and never ask why.",
  },
  {
    id: "student",
    question: "Is there a student discount?",
    answer:
      "Yes! Students get 30% off any paid plan. Email us at support@festivities.io with proof of student status (university email or student ID) and we'll apply the discount to your account within 24 hours.",
  },
  {
    id: "family",
    question: "Can I share my plan with family?",
    answer:
      "Family plans are coming in a future update. Each Festivities account tracks individual progress, vocabulary, and conversation history — a shared plan will let family members each have their own profile within a single subscription.",
  },
  {
    id: "refund",
    question: "What is your refund policy?",
    answer:
      "We offer a full, no-questions-asked refund within 30 days of your first charge. If you're not satisfied for any reason, email support@festivities.io and we'll process your refund within 1-2 business days.",
  },
  {
    id: "web-vs-app",
    question: "Why subscribe on the web?",
    answer:
      "Subscribing on the web gives you the same premium Festivities experience at the same great price — whichever is most convenient for you. Your subscription works seamlessly across the app and web.",
  },
];

const trustSignals = [
  "Cancel anytime",
  "No questions asked",
  "30-day money-back guarantee",
  "Secure payment via Stripe",
];

export function PricingPageClient() {
  const [interval, setInterval] = useState<BillingInterval>("annual");

  const getPrice = (planId: "path" | "accel") => {
    const plan = PLANS[planId];
    if (interval === "annual") {
      return { amount: plan.annualMonthly, suffix: "/mo, billed annually" };
    }
    return { amount: plan.monthlyPrice, suffix: "/mo" };
  };

  const getCheckoutLink = (planId: "path" | "accel") => {
    return `/checkout?plan=${planId}-${interval}`;
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-[var(--color-brand-bg)] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-5xl lg:text-6xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple pricing.{" "}
            <span className="text-[var(--color-brand-primary)] italic">Real results.</span>
          </h1>
          <p className="text-xl text-[var(--color-brand-text-secondary)] mb-10">
            Start free. Upgrade when you&apos;re ready.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-[var(--color-brand-surface)] rounded-[var(--radius-pill)] p-1 gap-1" role="group" aria-label="Billing interval">
            <button
              onClick={() => setInterval("monthly")}
              className={`px-5 py-2 rounded-[var(--radius-pill)] text-sm font-semibold transition-all duration-150 ${
                interval === "monthly"
                  ? "bg-white shadow text-[var(--color-brand-text)]"
                  : "text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)]"
              }`}
              aria-pressed={interval === "monthly"}
            >
              Monthly
            </button>
            <button
              onClick={() => setInterval("annual")}
              className={`px-5 py-2 rounded-[var(--radius-pill)] text-sm font-semibold transition-all duration-150 flex items-center gap-2 ${
                interval === "annual"
                  ? "bg-white shadow text-[var(--color-brand-text)]"
                  : "text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)]"
              }`}
              aria-pressed={interval === "annual"}
            >
              Annual
              <Badge variant="success" size="sm">Save up to 42%</Badge>
            </button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="pb-20 bg-[var(--color-brand-bg)]" aria-label="Pricing plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--color-brand-border)]">
              <div className="mb-6">
                <h2
                  className="text-xl font-bold text-[var(--color-brand-text)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Free
                </h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--color-brand-text)]">$0</span>
                </div>
                <p className="text-sm text-[var(--color-brand-text-secondary)] mt-1">
                  Forever free
                </p>
              </div>

              <Button asChild variant="outline" size="lg" className="w-full mb-6">
                <Link href="/download">Download Free</Link>
              </Button>

              <ul className="space-y-3">
                {PLANS.free.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-[var(--color-brand-success)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--color-brand-text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fluency Path */}
            <div className="relative bg-[var(--color-brand-primary)] rounded-[var(--radius-xl)] p-8 shadow-xl ring-2 ring-[var(--color-brand-primary)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 bg-[var(--color-brand-accent)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                  <Star className="h-3 w-3 fill-white" aria-hidden="true" />
                  Most Popular
                </div>
              </div>

              <div className="mb-6">
                <h2
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Fluency Path
                </h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {formatPrice(getPrice("path").amount)}
                  </span>
                  <span className="text-white/70 text-sm">{getPrice("path").suffix}</span>
                </div>
                {interval === "annual" && (
                  <p className="text-white/60 text-sm mt-1 line-through">
                    {formatPrice(PLANS.path.monthlyPrice)}/mo
                  </p>
                )}
              </div>

              <Button
                asChild
                size="lg"
                className="w-full mb-6 bg-white text-[var(--color-brand-primary)] hover:bg-white/95 font-bold"
              >
                <Link href={getCheckoutLink("path")}>
                  Start {PLANS.path.trialDays}-Day Free Trial
                </Link>
              </Button>

              <ul className="space-y-3">
                {PLANS.path.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-white/80 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fluency Accelerator */}
            <div className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--color-brand-border)]">
              <div className="mb-6">
                <h2
                  className="text-xl font-bold text-[var(--color-brand-text)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Fluency Accelerator
                </h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--color-brand-text)]">
                    {formatPrice(getPrice("accel").amount)}
                  </span>
                  <span className="text-[var(--color-brand-text-secondary)] text-sm">
                    {getPrice("accel").suffix}
                  </span>
                </div>
                {interval === "annual" && (
                  <p className="text-[var(--color-brand-text-secondary)] text-sm mt-1 line-through">
                    {formatPrice(PLANS.accel.monthlyPrice)}/mo
                  </p>
                )}
              </div>

              <Button asChild variant="secondary" size="lg" className="w-full mb-6">
                <Link href={getCheckoutLink("accel")}>
                  Start {PLANS.accel.trialDays}-Day Free Trial
                </Link>
              </Button>

              <ul className="space-y-3">
                {PLANS.accel.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-[var(--color-brand-success)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--color-brand-text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)]">
                <Check className="h-4 w-4 text-[var(--color-brand-success)]" aria-hidden="true" />
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--color-brand-surface)]" aria-labelledby="pricing-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="pricing-faq-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Questions about pricing
          </h2>
          <Accordion items={pricingFaqs} />
        </div>
      </section>
    </div>
  );
}
