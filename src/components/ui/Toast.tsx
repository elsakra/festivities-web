"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  toast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue>({
  toast: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

const variantStyles = {
  success: "bg-white border-[var(--color-brand-success)] text-[var(--color-brand-success)]",
  error: "bg-white border-[var(--color-brand-error)] text-[var(--color-brand-error)]",
  info: "bg-white border-[var(--color-brand-accent)] text-[var(--color-brand-accent)]",
  warning: "bg-white border-[var(--color-brand-warning)] text-[var(--color-brand-warning)]",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    (message: string, variant: ToastVariant = "info") => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, message, variant }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
    },
    []
  );

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 pointer-events-none"
      >
        {toasts.map((t) => {
          const Icon = icons[t.variant];
          return (
            <div
              key={t.id}
              role="alert"
              className={cn(
                "pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-[var(--radius-lg)] border-l-4 shadow-lg max-w-sm w-full animate-in slide-in-from-right-5 fade-in duration-300",
                variantStyles[t.variant]
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="flex-1 text-sm font-medium text-[var(--color-brand-text)]">
                {t.message}
              </p>
              <button
                onClick={() => dismiss(t.id)}
                className="text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] transition-colors flex-shrink-0"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
