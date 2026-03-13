import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
  typescript: true,
});

export const STRIPE_PRICES = {
  path: {
    monthly: process.env.STRIPE_PRICE_PATH_MONTHLY ?? "price_1T9c4TRe1kowKZlSpMUKl3hb",
    annual: process.env.STRIPE_PRICE_PATH_ANNUAL ?? "price_1T9c4URe1kowKZlSMswemVjy",
  },
  accel: {
    monthly: process.env.STRIPE_PRICE_ACCEL_MONTHLY ?? "price_1T9c4URe1kowKZlSgiFR79tn",
    annual: process.env.STRIPE_PRICE_ACCEL_ANNUAL ?? "price_1T9c4VRe1kowKZlS9NdwfDb3",
  },
} as const;

export const PLANS = {
  free: {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    annualMonthly: 0,
    trialDays: 0,
    features: [
      "1 AI conversation per day",
      "Full-quality adaptive AI",
      "Basic progress tracking",
      "All 8 languages",
    ],
  },
  path: {
    id: "path",
    name: "Fluency Path",
    monthlyPrice: 2499,
    annualPrice: 19999,
    annualMonthly: 1667,
    trialDays: 7,
    popular: true,
    features: [
      "Unlimited AI conversations",
      "Full adaptive curriculum engine",
      "Pronunciation coaching",
      "Conversation memory",
      "Invisible spaced repetition",
      "Cultural immersion content",
      "Detailed fluency tracking",
    ],
  },
  accel: {
    id: "accel",
    name: "Fluency Accelerator",
    monthlyPrice: 4999,
    annualPrice: 34999,
    annualMonthly: 2917,
    trialDays: 3,
    features: [
      "Everything in Fluency Path",
      "Deep sessions (45+ minutes)",
      "Real-world scenario simulations",
      "Phoneme-level pronunciation analysis",
      "Shareable fluency credentials",
      "Priority access to new features",
    ],
  },
} as const;

export type PlanId = keyof typeof PLANS;
export type BillingInterval = "monthly" | "annual";

export function getPriceId(planId: "path" | "accel", interval: BillingInterval): string {
  return STRIPE_PRICES[planId][interval];
}
