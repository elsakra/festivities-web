"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, TrendingUp, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Open and talk",
    description:
      "Pick a language and start a conversation. No signup. No test. Your AI tutor greets you and adapts to your level in seconds.",
    color: "var(--color-brand-primary)",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Get smarter every session",
    description:
      "Festivities tracks hundreds of dimensions — vocabulary, grammar, pronunciation — and adjusts every response to push you forward.",
    color: "var(--color-brand-accent)",
  },
  {
    number: "03",
    icon: Award,
    title: "Watch yourself become fluent",
    description:
      "Track your fluency score rising. See real, measurable progress that compounds over days, weeks, and months.",
    color: "var(--color-brand-primary)",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-brand-surface)]"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="how-heading"
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How it works
          </h2>
          <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-xl mx-auto">
            Three steps. Zero friction. One goal: you speaking the language.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-[var(--color-brand-bg)] rounded-[var(--radius-xl)] p-8 group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Step number */}
                <div
                  className="text-6xl font-bold mb-4 leading-none opacity-10"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: step.color,
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[var(--radius-lg)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-150"
                  style={{ background: `color-mix(in srgb, ${step.color} 15%, transparent)` }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: step.color }}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-[var(--color-brand-text)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--color-brand-text-secondary)] leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-[var(--color-brand-border)] z-10"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
