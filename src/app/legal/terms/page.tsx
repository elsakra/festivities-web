import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Festivities",
  description: "Terms of Service for Festivities — the rules for using our AI language learning app and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] mb-6">
          <span>Legal</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Terms of Service</span>
        </nav>
        <h1
          className="text-4xl font-bold text-[var(--color-brand-text)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--color-brand-text-secondary)] mb-12">
          Last updated: March 13, 2026
        </p>

        <div className="prose max-w-none text-[var(--color-brand-text-secondary)]">
          <p className="text-[var(--color-brand-text)] font-medium mb-6">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Festivities mobile application and website
            operated by Festivities Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using our Services, you agree to these Terms.
          </p>

          <h2>Account registration</h2>
          <p>
            You may use certain features without an account. To subscribe to a paid plan, create an account with accurate,
            current information. You are responsible for maintaining the confidentiality of your credentials and all
            activity under your account.
          </p>

          <h2>Subscriptions and billing</h2>
          <p>
            Festivities offers free and paid subscription tiers. Paid subscriptions are billed in advance on a monthly or
            annual basis. You authorize us (or our payment processor, Stripe) to charge your payment method on the
            applicable billing date.
          </p>
          <p>
            Trial periods: if a free trial is offered, you will not be charged until the trial ends. Cancel before the
            trial ends to avoid charges.
          </p>
          <p>
            Cancellations: you may cancel anytime. Your subscription remains active through the end of your current
            billing period. We do not provide prorated refunds for mid-period cancellations, except under our
            30-day refund guarantee for your first charge.
          </p>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services to generate harmful, illegal, or harassing content</li>
            <li>Attempt to access other users&apos; accounts or data</li>
            <li>Reverse engineer, decompile, or disassemble the Services</li>
            <li>Use the Services for any purpose that violates applicable law</li>
            <li>Share your account credentials with others</li>
          </ul>

          <h2>AI-generated content</h2>
          <p>
            Festivities uses AI to generate conversation responses and educational content. AI responses are generated
            automatically and may occasionally be inaccurate, incomplete, or not reflect current facts. Festivities
            is not responsible for any actions taken based on AI-generated content. Always verify important information
            from authoritative sources.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Festivities name, logo, and all original content in the Services are the property of Festivities Inc.
            Your conversation data remains yours; you grant us a limited license to use it to improve the Services.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Festivities&apos; liability for any claim arising from these Terms or
            use of the Services is limited to the amount you paid us in the 12 months preceding the claim.
            We are not liable for indirect, incidental, special, or consequential damages.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of California, USA, without regard to conflict of law
            provisions. Disputes shall be resolved in the courts of San Francisco County, California.
          </p>

          <h2>Changes to terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes by email. Continued
            use of the Services after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms: <a href="mailto:legal@festivities.io">legal@festivities.io</a>
          </p>
        </div>
      </div>
    </div>
  );
}
