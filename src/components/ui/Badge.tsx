import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "success" | "warning" | "error" | "neutral";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  const variants = {
    primary: "bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/20",
    accent: "bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)] border border-[var(--color-brand-accent)]/20",
    success: "bg-[var(--color-brand-success)]/10 text-[var(--color-brand-success)] border border-[var(--color-brand-success)]/20",
    warning: "bg-[var(--color-brand-warning)]/10 text-[var(--color-brand-warning)] border border-[var(--color-brand-warning)]/20",
    error: "bg-[var(--color-brand-error)]/10 text-[var(--color-brand-error)] border border-[var(--color-brand-error)]/20",
    neutral: "bg-[var(--color-brand-surface)] text-[var(--color-brand-text-secondary)] border border-[var(--color-brand-border)]",
  };

  const sizes = {
    sm: "text-xs px-2 py-0.5 rounded-full font-medium",
    md: "text-sm px-3 py-1 rounded-full font-semibold",
  };

  return (
    <span
      className={cn("inline-flex items-center gap-1", variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
