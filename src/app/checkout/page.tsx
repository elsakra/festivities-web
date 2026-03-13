import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutClient } from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Start Your Free Trial | Festivities",
  description: "Subscribe to Festivities and start learning a language through real AI conversations.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen bg-[var(--color-brand-bg)]" />}>
      <CheckoutClient />
    </Suspense>
  );
}
