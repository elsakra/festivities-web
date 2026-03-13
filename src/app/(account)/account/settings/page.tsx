import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Account Settings | Festivities",
  description: "Manage your Festivities account settings, email, and password.",
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-bold text-[var(--color-brand-text)] mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Account Settings
      </h1>

      {/* Profile */}
      <section className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 mb-6" aria-labelledby="profile-heading">
        <h2 id="profile-heading" className="font-bold text-[var(--color-brand-text)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Profile
        </h2>
        <form className="space-y-4">
          <Input label="Email address" type="email" defaultValue="user@example.com" />
          <Button type="submit" size="md">Save changes</Button>
        </form>
      </section>

      {/* Password */}
      <section className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 mb-6" aria-labelledby="password-heading">
        <h2 id="password-heading" className="font-bold text-[var(--color-brand-text)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Password
        </h2>
        <form className="space-y-4">
          <Input label="Current password" type="password" autoComplete="current-password" />
          <Input label="New password" type="password" autoComplete="new-password" hint="At least 12 characters" />
          <Input label="Confirm new password" type="password" autoComplete="new-password" />
          <Button type="submit" size="md">Update password</Button>
        </form>
      </section>

      {/* Data */}
      <section className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6 mb-6" aria-labelledby="data-heading">
        <h2 id="data-heading" className="font-bold text-[var(--color-brand-text)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Your data
        </h2>
        <p className="text-sm text-[var(--color-brand-text-secondary)] mb-4">
          Download a copy of all your learning data, conversation history, and account information.
        </p>
        <Button variant="outline" size="sm">
          Export my data (JSON)
        </Button>
      </section>

      {/* Danger zone */}
      <section className="bg-[var(--color-brand-error)]/5 rounded-[var(--radius-xl)] p-6 border border-[var(--color-brand-error)]/20" aria-labelledby="delete-heading">
        <h2 id="delete-heading" className="font-bold text-[var(--color-brand-text)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Delete account
        </h2>
        <p className="text-sm text-[var(--color-brand-text-secondary)] mb-4">
          Permanently delete your account and all associated data. This cannot be undone.
          Per GDPR, your data will be deleted within 30 days.
        </p>
        <Button variant="danger" size="sm">Delete my account</Button>
      </section>
    </div>
  );
}
