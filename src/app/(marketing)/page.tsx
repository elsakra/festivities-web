import type { Metadata } from "next";
import { HeroSection } from "@/components/marketing/HeroSection";
import { StatsBanner } from "@/components/marketing/StatsBanner";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { LanguagesSection } from "@/components/marketing/LanguagesSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { PricingPreviewSection } from "@/components/marketing/PricingPreviewSection";
import { FinalCtaSection } from "@/components/marketing/FinalCtaSection";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Festivities — Talk Your Way to Fluency",
  description:
    "Festivities is the AI language app that teaches through real adaptive conversations — not flashcards, not quizzes. Start speaking for free today.",
  alternates: {
    canonical: `${getBaseUrl()}/`,
  },
  openGraph: {
    url: `${getBaseUrl()}/`,
    title: "Festivities — Talk Your Way to Fluency",
    description:
      "Learn a language through real AI conversations. Not flashcards. Not quizzes. Just talking.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Festivities",
  url: getBaseUrl(),
  logo: `${getBaseUrl()}/logo.png`,
  description:
    "Festivities is an AI-powered language learning app that teaches through real adaptive conversations.",
  sameAs: [
    "https://twitter.com/festivitiesapp",
    "https://instagram.com/festivitiesapp",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@festivities.io",
    contactType: "customer support",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsBanner />
      <ProblemSection />
      <HowItWorksSection />
      <LanguagesSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FinalCtaSection />
    </>
  );
}
