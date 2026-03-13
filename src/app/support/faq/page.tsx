import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ | Festivities Help Center",
  description:
    "Answers to the most common questions about Festivities — getting started, billing, features, and technical issues.",
  alternates: { canonical: `${getBaseUrl()}/support/faq` },
};

const faqCategories = [
  {
    id: "getting-started",
    label: "Getting Started",
    faqs: [
      {
        id: "first-conversation",
        question: "How do I start my first conversation?",
        answer:
          "Download the Festivities app, open it, and tap any language. You'll immediately be connected to your AI tutor who will greet you and start a conversation. No test, no signup required to start.",
      },
      {
        id: "need-account",
        question: "Do I need to create an account?",
        answer:
          "You can start your first conversation without creating an account. An account is required to save your progress, access your conversation history, and subscribe to a paid plan. Signing up takes about 30 seconds.",
      },
      {
        id: "languages-available",
        question: "What languages are available?",
        answer:
          "Festivities currently supports Spanish, French, Japanese, Korean, German, Italian, Portuguese (Brazilian), and Mandarin Chinese. More languages are in development — you can request a specific language on our website.",
      },
      {
        id: "how-ai-knows-level",
        question: "How does the AI know my level?",
        answer:
          "Your AI tutor assesses your level in real time through your first few exchanges — there's no formal test. It notices the vocabulary you use, the complexity of your sentences, and how naturally you respond, then calibrates to give you input that's just slightly beyond your current ability.",
      },
    ],
  },
  {
    id: "billing",
    label: "Account & Billing",
    faqs: [
      {
        id: "how-subscribe",
        question: "How do I subscribe?",
        answer:
          "Go to festivities.io/pricing, choose your plan, and complete checkout with a credit card, Apple Pay, or Google Pay. You can also subscribe within the mobile app via Apple or Google in-app purchase.",
      },
      {
        id: "web-vs-app-billing",
        question: "What's the difference between web and app subscriptions?",
        answer:
          "Same Festivities experience, same plans. Subscribing on the web or in the app both give you full access to all premium features. Choose whichever is most convenient for you.",
      },
      {
        id: "how-cancel",
        question: "How do I cancel?",
        answer:
          "Web subscribers: go to festivities.io/account/billing and click 'Cancel subscription.' App Store subscribers: manage through your iOS Settings > [Your Name] > Subscriptions. Google Play subscribers: manage through the Play Store > Subscriptions. Your access continues until the end of your billing period.",
      },
      {
        id: "refund",
        question: "Will I get a refund?",
        answer:
          "Yes. We offer a full refund within 30 days of your first charge, no questions asked. Email support@festivities.io and we'll process it within 1-2 business days. For in-app purchases, refunds are subject to Apple/Google's refund policies.",
      },
      {
        id: "switch-plans",
        question: "Can I switch plans?",
        answer:
          "Yes. Upgrade anytime — the change takes effect immediately and is prorated. Downgrade anytime — the change takes effect at the end of your current billing period, so you keep your current plan until then.",
      },
    ],
  },
  {
    id: "features",
    label: "App Features",
    faqs: [
      {
        id: "pronunciation",
        question: "How does pronunciation feedback work?",
        answer:
          "The AI tutor listens to your speech and models correct pronunciation in its responses. On paid plans, you also receive specific feedback on sounds you're producing incorrectly — our system analyzes your phoneme production and highlights areas for improvement.",
      },
      {
        id: "scenarios",
        question: "What are real-world scenario simulations?",
        answer:
          "Scenario simulations put you in specific real-life situations: ordering food at a restaurant, checking into a hotel, handling a work meeting, navigating an argument with a roommate. These practice contexts that you'll actually encounter — not generic conversation topics.",
      },
      {
        id: "fluency-score",
        question: "How does the fluency score work?",
        answer:
          "Your fluency score tracks multiple dimensions including vocabulary breadth, grammar accuracy, conversational naturalness, and pronunciation. It maps to the CEFR scale (A1-C2) so you always know roughly where you stand on the international standard.",
      },
      {
        id: "offline",
        question: "Does the app work offline?",
        answer:
          "No. Festivities requires an internet connection to power the AI conversation. We've optimized for minimal data usage, but a connection is required.",
      },
      {
        id: "multiple-devices",
        question: "Can I use Festivities on multiple devices?",
        answer:
          "Yes. Your account works on any device. Your conversation history, vocabulary progress, and fluency score sync across all your devices automatically.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    faqs: [
      {
        id: "devices",
        question: "What devices are supported?",
        answer:
          "Festivities is available on iPhone (iOS 16+) and Android (8.0+). A web version is in development. The app requires a working microphone.",
      },
      {
        id: "mic-not-working",
        question: "The microphone isn't working",
        answer:
          "First, check that Festivities has microphone permission in your device settings (Settings > Privacy > Microphone on iOS). If permission is granted but the mic isn't responding, try restarting the app. If the issue persists, email support@festivities.io with your device model and OS version.",
      },
      {
        id: "app-slow",
        question: "The app is running slowly",
        answer:
          "Response speed depends on your internet connection speed. For best performance, use WiFi or a strong cellular signal. If you're on a good connection and still experiencing slowness, try closing other apps and restarting Festivities. Persistent issues: contact support.",
      },
      {
        id: "no-voice",
        question: "I can't hear the AI's voice",
        answer:
          "Check that your device volume is turned up and not on silent. In the app settings, check that voice output is enabled. If you're using headphones, try unplugging and reconnecting them. If the issue persists, check that Festivities has audio permissions in your device settings.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="pt-20">
        <section className="py-16 bg-[var(--color-brand-bg)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] mb-6">
              <a href="/support" className="hover:text-[var(--color-brand-text)] transition-colors">Support</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">FAQ</span>
            </nav>

            <h1
              className="text-4xl font-bold text-[var(--color-brand-text)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently asked questions
            </h1>
            <p className="text-[var(--color-brand-text-secondary)] mb-12">
              Can&apos;t find your answer?{" "}
              <a href="/support/contact" className="text-[var(--color-brand-primary)] hover:underline font-semibold">
                Contact us
              </a>
              {" "}and we&apos;ll get back to you within 4 hours.
            </p>

            <div className="space-y-12">
              {faqCategories.map((cat) => (
                <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-heading`}>
                  <h2
                    id={`${cat.id}-heading`}
                    className="text-xl font-bold text-[var(--color-brand-text)] mb-4 pb-2 border-b border-[var(--color-brand-border)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.label}
                  </h2>
                  <Accordion items={cat.faqs} />
                </section>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
