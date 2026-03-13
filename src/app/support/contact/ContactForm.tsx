"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CheckCircle } from "lucide-react";

const categories = [
  "Billing",
  "Technical issue",
  "Feedback",
  "Press inquiry",
  "Partnership",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          category: formData.get("category"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try emailing us directly at support@festivities.io");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-brand-success)]/10 border border-[var(--color-brand-success)]/30 rounded-[var(--radius-xl)] p-8 text-center">
        <CheckCircle className="h-12 w-12 text-[var(--color-brand-success)] mx-auto mb-3" aria-hidden="true" />
        <h2
          className="text-xl font-bold text-[var(--color-brand-text)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Message sent!
        </h2>
        <p className="text-[var(--color-brand-text-secondary)]">
          We&apos;ll get back to you within 4 hours during business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6">
      <Input
        label="Your name"
        name="name"
        type="text"
        required
        autoComplete="name"
        placeholder="Jane Smith"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="jane@example.com"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="category" className="text-sm font-semibold text-[var(--color-brand-text)]">
          Category
        </label>
        <select
          id="category"
          name="category"
          required
          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-brand-border)] text-[var(--color-brand-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] min-h-[44px]"
        >
          <option value="">Select a category...</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-[var(--color-brand-text)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-brand-border)] text-[var(--color-brand-text)] bg-white placeholder:text-[var(--color-brand-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] resize-y"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-[var(--color-brand-error)]">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" loading={loading}>
        Send message
      </Button>
    </form>
  );
}
