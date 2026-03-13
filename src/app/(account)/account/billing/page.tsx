import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Billing | Festivities Account",
  description: "Manage your Festivities subscription, payment method, and billing history.",
  robots: { index: false, follow: false },
};

// In production this would fetch from API using Supabase auth session
async function getSubscriptionData() {
  return {
    plan: "Fluency Path",
    status: "trialing" as const,
    trialEnd: "2026-03-20",
    nextBillingDate: "2026-03-20",
    nextBillingAmount: 19999,
    paymentMethod: { brand: "Visa", last4: "4242", expiry: "12/27" },
    invoices: [
      { id: "in_1", date: "2026-03-13", description: "Fluency Path Trial Start", amount: 0, status: "paid" },
    ],
  };
}

const statusBadge: Record<string, { label: string; variant: "success" | "warning" | "error" | "neutral" }> = {
  active: { label: "Active", variant: "success" },
  trialing: { label: "Trial", variant: "warning" },
  cancelled: { label: "Cancelled", variant: "error" },
  past_due: { label: "Past Due", variant: "error" },
};

export default async function BillingPage() {
  const sub = await getSubscriptionData();
  const badge = statusBadge[sub.status] ?? statusBadge.active;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-bold text-[var(--color-brand-text)] mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Billing
      </h1>

      {/* Current plan */}
      <section className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 mb-6" aria-labelledby="plan-heading">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 id="plan-heading" className="font-bold text-[var(--color-brand-text)] text-lg" style={{ fontFamily: "var(--font-display)" }}>
              {sub.plan}
            </h2>
            <Badge variant={badge.variant} size="sm" className="mt-1">
              {badge.label}
            </Badge>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/pricing">Change plan</Link>
          </Button>
        </div>

        {sub.status === "trialing" && (
          <p className="text-sm text-[var(--color-brand-text-secondary)] mb-3">
            Trial ends{" "}
            <strong className="text-[var(--color-brand-text)]">
              {new Date(sub.trialEnd).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </strong>
            . You won&apos;t be charged until then.
          </p>
        )}

        <p className="text-sm text-[var(--color-brand-text-secondary)]">
          Next billing:{" "}
          <strong className="text-[var(--color-brand-text)]">
            {new Date(sub.nextBillingDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </strong>
          {" "}·{" "}
          <strong className="text-[var(--color-brand-text)]">
            ${(sub.nextBillingAmount / 100).toFixed(2)}
          </strong>
        </p>
      </section>

      {/* Payment method */}
      <section className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 mb-6" aria-labelledby="payment-heading">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="payment-heading" className="font-bold text-[var(--color-brand-text)] mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Payment method
            </h2>
            <p className="text-sm text-[var(--color-brand-text-secondary)]">
              {sub.paymentMethod.brand} ending in {sub.paymentMethod.last4} · expires {sub.paymentMethod.expiry}
            </p>
          </div>
          <Button variant="ghost" size="sm">Update</Button>
        </div>
      </section>

      {/* Billing history */}
      <section className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 mb-6" aria-labelledby="history-heading">
        <h2 id="history-heading" className="font-bold text-[var(--color-brand-text)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Billing history
        </h2>
        <div className="divide-y divide-[var(--color-brand-border)]">
          {sub.invoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-[var(--color-brand-text)]">{inv.description}</p>
                <p className="text-xs text-[var(--color-brand-text-secondary)]">{inv.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[var(--color-brand-text)]">
                  {inv.amount === 0 ? "Free" : `$${(inv.amount / 100).toFixed(2)}`}
                </span>
                <Badge variant="success" size="sm">{inv.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Danger zone */}
      <section className="bg-[var(--color-brand-error)]/5 rounded-[var(--radius-xl)] p-6 border border-[var(--color-brand-error)]/20" aria-labelledby="cancel-heading">
        <h2 id="cancel-heading" className="font-bold text-[var(--color-brand-text)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Cancel subscription
        </h2>
        <p className="text-sm text-[var(--color-brand-text-secondary)] mb-4">
          Your access continues until the end of your billing period. We&apos;ll be sad to see you go.
        </p>
        <Button variant="danger" size="sm">Cancel subscription</Button>
      </section>
    </div>
  );
}
