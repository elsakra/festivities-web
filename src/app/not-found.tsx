import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-[var(--color-brand-bg)] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center py-24">
        <div
          className="text-9xl font-bold text-[var(--color-brand-primary)] opacity-20 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          404
        </div>
        <h1
          className="text-4xl font-bold text-[var(--color-brand-text)] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page not found
        </h1>
        <p className="text-xl text-[var(--color-brand-text-secondary)] mb-8">
          This page doesn&apos;t exist — but your next language conversation does.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/support">Get help</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
