import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Festivities",
  description: "Privacy Policy for Festivities — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] mb-6">
          <span>Legal</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Privacy Policy</span>
        </nav>
        <h1
          className="text-4xl font-bold text-[var(--color-brand-text)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--color-brand-text-secondary)] mb-12">
          Last updated: March 13, 2026
        </p>

        <div className="prose max-w-none text-[var(--color-brand-text-secondary)]">
          <p className="text-[var(--color-brand-text)] font-medium mb-6">
            This Privacy Policy describes how Festivities Inc. (&ldquo;Festivities,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            collects, uses, and shares information about you when you use our mobile application and website (collectively, the &ldquo;Services&rdquo;).
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you provide directly to us, including when you create an account (name, email address, password),
            subscribe to a plan (handled via Stripe — we never see your card details), or contact us for support.
          </p>
          <p>
            We automatically collect certain information about how you interact with our Services, including conversation data
            (transcripts of your language practice sessions, used to power the adaptive AI and track progress),
            device information (device type, OS version, app version), and usage data (features used, session duration).
          </p>

          <h2>How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Services</li>
            <li>Personalize your AI tutor to your level, goals, and history</li>
            <li>Process transactions and send related information</li>
            <li>Send transactional and promotional communications (you may opt out anytime)</li>
            <li>Monitor and analyze usage patterns to improve the product</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data sharing</h2>
          <p>
            We do not sell your personal data. We share data only with trusted service providers necessary to operate the
            Services (payment processing via Stripe, cloud hosting, email delivery, analytics) under strict data processing
            agreements. We may disclose data if required by law.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain your data as long as your account is active or as needed to provide the Services. You may request
            deletion of your account and data at any time via account settings or by emailing privacy@festivities.io.
            We will delete your data within 30 days of a verified deletion request.
          </p>

          <h2>Your rights (GDPR / CCPA)</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data (right to erasure)</li>
            <li>Restrict processing</li>
            <li>Data portability (download your data)</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>
          <p>
            To exercise any of these rights, email privacy@festivities.io. We will respond within 30 days.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            Festivities is not directed to children under 13. We do not knowingly collect personal information from
            children under 13. If you believe we have collected such information, contact us and we will delete it immediately.
          </p>

          <h2>Security</h2>
          <p>
            We use industry-standard security measures including encryption in transit (TLS), encryption at rest, and
            access controls. No system is perfectly secure — if you suspect unauthorized access to your account,
            contact us immediately.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will notify you of material changes by email or in-app
            notification. Your continued use of the Services after any change constitutes acceptance.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href="mailto:privacy@festivities.io">privacy@festivities.io</a><br />
            Festivities Inc., San Francisco, CA, USA
          </p>
        </div>
      </div>
    </div>
  );
}
