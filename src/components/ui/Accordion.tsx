"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn("divide-y divide-[var(--color-brand-border)]", className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left font-semibold text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
            >
              <span className="text-base">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-[var(--color-brand-text-secondary)] transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-${item.id}`}
              role="region"
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-[1000px] pb-5" : "max-h-0"
              )}
            >
              <p className="text-[var(--color-brand-text-secondary)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
