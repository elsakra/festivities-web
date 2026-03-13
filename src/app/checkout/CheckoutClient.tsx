"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PLANS } from "@/lib/stripe";
import { formatPrice } from "@/lib/utils";

type PlanKey = "path-monthly" | "path-annual" | "accel-monthly" | "accel-annual";

const PLAN_MAP: Record<PlanKey, { plan: typeof PLANS.path | typeof PLANS.accel; interval: string }> = {
  "path-monthly": { plan: PLANS.path, interval: "monthly" },
  "path-annual": { plan: PLANS.path, interval: "annual" },
  "accel-monthly": { plan: PLANS.accel, interval: "monthly" },
  "accel-annual": { plan: PLANS.accel, interval: "annual" },
};

type AuthMode = "signin" | "signup";

export function CheckoutClient() {
  const searchParams = useSearchParams();
  const planParam = (searchParams.get("plan") ?? "path-annual") as PlanKey;
  const selectedPlan = PLAN_MAP[planParam] ?? PLAN_MAP["path-annual"];

  const [authMode, setAuthMode] = useState<AuthMode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const price =
    selectedPlan.interval === "annual"
      ? selectedPlan.plan.annualMonthly
      : selectedPlan.plan.monthlyPrice;

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // In production, connect to Supabase auth
      await new Promise((r) => setTimeout(r, 1000));
      setIsAuthed(true);
    } catch {
      setError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      // In production, call POST /api/stripe/create-checkout
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planParam }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch {
      setError("Could not start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[var(--color-brand-bg)]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to pricing
        </Link>

        <h1
          className="text-3xl font-bold text-[var(--color-brand-text)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Start your free trial
        </h1>
        <p className="text-[var(--color-brand-text-secondary)] mb-8">
          {selectedPlan.plan.trialDays} days free, then{" "}
          {selectedPlan.interval === "annual"
            ? `${formatPrice(selectedPlan.plan.annualPrice)}/year`
            : `${formatPrice(price)}/month`}
        </p>

        {/* Plan summary card */}
        <div className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-5 mb-8 border border-[var(--color-brand-border)]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-semibold text-[var(--color-brand-text)]">
                {selectedPlan.plan.name}
              </div>
              <div className="text-sm text-[var(--color-brand-text-secondary)] capitalize">
                {selectedPlan.interval} billing
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-[var(--color-brand-text)]">
                {selectedPlan.interval === "annual"
                  ? `${formatPrice(selectedPlan.plan.annualPrice)}/yr`
                  : `${formatPrice(price)}/mo`}
              </div>
              <Badge variant="success" size="sm">
                {selectedPlan.plan.trialDays}-day free trial
              </Badge>
            </div>
          </div>
          <ul className="space-y-1.5">
            {selectedPlan.plan.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)]">
                <Check className="h-3.5 w-3.5 text-[var(--color-brand-success)]" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {!isAuthed ? (
          /* Auth step */
          <div className="bg-white rounded-[var(--radius-xl)] p-6 shadow-sm border border-[var(--color-brand-border)]">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setAuthMode("signup")}
                className={`flex-1 py-2 rounded-[var(--radius-md)] text-sm font-semibold transition-colors ${
                  authMode === "signup"
                    ? "bg-[var(--color-brand-primary)] text-white"
                    : "bg-[var(--color-brand-surface)] text-[var(--color-brand-text-secondary)]"
                }`}
              >
                Create account
              </button>
              <button
                onClick={() => setAuthMode("signin")}
                className={`flex-1 py-2 rounded-[var(--radius-md)] text-sm font-semibold transition-colors ${
                  authMode === "signin"
                    ? "bg-[var(--color-brand-primary)] text-white"
                    : "bg-[var(--color-brand-surface)] text-[var(--color-brand-text-secondary)]"
                }`}
              >
                Sign in
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <Input
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={authMode === "signup" ? "At least 12 characters" : "Your password"}
                required
                autoComplete={authMode === "signup" ? "new-password" : "current-password"}
              />
              {error && (
                <p role="alert" className="text-sm text-[var(--color-brand-error)]">
                  {error}
                </p>
              )}
              <Button type="submit" size="lg" className="w-full" loading={loading}>
                {authMode === "signup" ? "Create account & continue" : "Sign in & continue"}
              </Button>
            </form>
          </div>
        ) : (
          /* Payment step */
          <div className="bg-white rounded-[var(--radius-xl)] p-6 shadow-sm border border-[var(--color-brand-border)]">
            <h2 className="font-semibold text-[var(--color-brand-text)] mb-4">Payment</h2>

            {/* Stripe Elements would be embedded here in production */}
            <div className="bg-[var(--color-brand-surface)] rounded-[var(--radius-lg)] p-4 mb-6 text-sm text-[var(--color-brand-text-secondary)] text-center">
              <p className="font-medium text-[var(--color-brand-text)] mb-1">
                Secure payment via Stripe
              </p>
              <p>Apple Pay, Google Pay, and all major cards accepted</p>
            </div>

            {error && (
              <p role="alert" className="text-sm text-[var(--color-brand-error)] mb-4">
                {error}
              </p>
            )}

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full mb-4"
              loading={loading}
            >
              Start Free Trial
            </Button>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-[var(--color-brand-text-secondary)]">
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3" aria-hidden="true" />
                256-bit encryption
              </span>
              <span>Cancel anytime</span>
              <span>No charge during trial</span>
            </div>

            <p className="text-xs text-[var(--color-brand-text-secondary)] text-center mt-4">
              By subscribing, you agree to our{" "}
              <Link href="/legal/terms" className="underline">Terms</Link> and{" "}
              <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
