"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-[9999px] transition-all duration-150 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-dark)] focus-visible:outline-[var(--color-brand-primary)] shadow-md hover:shadow-lg",
      secondary:
        "bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent-dark)] focus-visible:outline-[var(--color-brand-accent)] shadow-md hover:shadow-lg",
      ghost:
        "bg-transparent text-[var(--color-brand-text)] hover:bg-[var(--color-brand-surface)] focus-visible:outline-[var(--color-brand-primary)]",
      outline:
        "bg-transparent border-2 border-[var(--color-brand-border)] text-[var(--color-brand-text)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] focus-visible:outline-[var(--color-brand-primary)]",
      danger:
        "bg-[var(--color-brand-error)] text-white hover:opacity-90 focus-visible:outline-[var(--color-brand-error)]",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 min-h-[36px]",
      md: "text-base px-6 py-3 min-h-[44px]",
      lg: "text-lg px-8 py-4 min-h-[52px]",
      xl: "text-xl px-10 py-5 min-h-[60px]",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
