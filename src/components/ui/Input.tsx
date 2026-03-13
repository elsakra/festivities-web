import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-[var(--color-brand-text)]"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-[var(--radius-md)] border text-[var(--color-brand-text)] bg-white placeholder:text-[var(--color-brand-text-secondary)] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent min-h-[44px]",
            error
              ? "border-[var(--color-brand-error)]"
              : "border-[var(--color-brand-border)] hover:border-[var(--color-brand-text-secondary)]",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="text-sm text-[var(--color-brand-error)]"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p
            id={`${inputId}-hint`}
            className="text-sm text-[var(--color-brand-text-secondary)]"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
