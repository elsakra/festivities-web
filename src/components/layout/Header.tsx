"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/languages", label: "Languages" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isHeroPage = pathname === "/" || pathname.startsWith("/languages/");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-brand-primary)] focus:text-white focus:rounded-[var(--radius-md)]"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled || !isHeroPage
            ? "bg-[var(--color-brand-bg)]/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-primary)] rounded-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">F</span>
              </div>
              <span
                className="font-display text-xl font-bold text-[var(--color-brand-text)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Festivities
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-[var(--radius-pill)] text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]",
                      isActive
                        ? "text-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10"
                        : "text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] hover:bg-[var(--color-brand-surface)]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild size="md">
                <Link href="/download">Download Free</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-[var(--radius-md)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-0 z-30 transition-opacity duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-72 bg-[var(--color-brand-bg)] shadow-2xl flex flex-col transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-[var(--color-brand-border)]">
            <span
              className="font-bold text-lg text-[var(--color-brand-text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Festivities
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-brand-surface)] transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex-1 p-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-[var(--radius-lg)] text-base font-semibold transition-colors duration-150",
                    isActive
                      ? "text-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10"
                      : "text-[var(--color-brand-text)] hover:bg-[var(--color-brand-surface)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-[var(--color-brand-border)]">
            <Button asChild size="lg" className="w-full">
              <Link href="/download">Download Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
