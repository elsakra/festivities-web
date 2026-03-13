"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

const COOKIE_KEY = "festivities_consent";
const CONSENT_EXPIRY_DAYS = 365;

function setConsentCookie(value: "granted" | "denied") {
  const expires = new Date();
  expires.setDate(expires.getDate() + CONSENT_EXPIRY_DAYS);
  document.cookie = `${COOKIE_KEY}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function getConsentCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_KEY}=`));
  return match ? match.split("=")[1] : null;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentCookie();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setConsentCookie("granted");
    setVisible(false);
    // Enable GA4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
      });
    }
  };

  const handleDeny = () => {
    setConsentCookie("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-50 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] rounded-[var(--radius-xl)] p-5 shadow-2xl"
    >
      <button
        onClick={handleDeny}
        className="absolute top-3 right-3 p-1 rounded-full text-[var(--color-brand-bg)]/50 hover:text-[var(--color-brand-bg)] transition-colors"
        aria-label="Close cookie banner"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-sm leading-relaxed text-[var(--color-brand-bg)]/80 mb-4 pr-6">
        We use cookies to improve your experience and understand how you use Festivities.{" "}
        <Link
          href="/legal/privacy"
          className="underline text-[var(--color-brand-bg)] hover:opacity-80"
        >
          Privacy Policy
        </Link>
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleDeny}
          className="flex-1 py-2 px-3 rounded-[var(--radius-pill)] text-sm font-semibold border border-[var(--color-brand-bg)]/20 text-[var(--color-brand-bg)]/70 hover:text-[var(--color-brand-bg)] hover:border-[var(--color-brand-bg)]/40 transition-colors"
        >
          Decline
        </button>
        <Button onClick={handleAccept} size="sm" className="flex-1 text-sm">
          Accept
        </Button>
      </div>
    </div>
  );
}
