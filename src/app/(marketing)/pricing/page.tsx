import type { Metadata } from "next";
import { PricingPageClient } from "./PricingPageClient";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Festivities Pricing — AI Language Tutor Plans | Start Free",
  description:
    "Learn a new language with Festivities. Free tier with 1 daily AI conversation. Paid plans from $16.67/mo with unlimited conversations, pronunciation coaching, and fluency tracking.",
  alternates: {
    canonical: `${getBaseUrl()}/pricing`,
  },
  openGraph: {
    title: "Festivities Pricing — AI Language Tutor Plans",
    description:
      "Start free. Upgrade when you're ready. Plans from $16.67/mo with unlimited AI conversations.",
    url: `${getBaseUrl()}/pricing`,
  },
};

const pricingFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I switch plans later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — upgrade or downgrade anytime. Upgrades take effect immediately (prorated). Downgrades take effect at the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when my trial ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll be charged automatically at the end of your trial period. Cancel anytime before the trial ends to avoid charges — no questions asked.",
      },
    },
    {
      "@type": "Question",
      name: "What is your refund policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a full refund within 30 days of your first charge, no questions asked. Contact support@festivities.io.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd) }}
      />
      <PricingPageClient />
    </>
  );
}
