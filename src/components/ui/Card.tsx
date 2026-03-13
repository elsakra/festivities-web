import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "glass";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  const variants = {
    default: "bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)]",
    elevated:
      "bg-white rounded-[var(--radius-xl)] shadow-lg hover:shadow-xl transition-shadow duration-300",
    bordered:
      "bg-[var(--color-brand-bg)] rounded-[var(--radius-xl)] border border-[var(--color-brand-border)]",
    glass:
      "bg-white/60 backdrop-blur-md rounded-[var(--radius-xl)] border border-white/30 shadow-lg",
  };

  return (
    <div
      className={cn(variants[variant], className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}
