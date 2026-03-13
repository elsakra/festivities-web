"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-brand-bg)]"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="problem-heading"
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why most apps fail you
          </h2>
          <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-2xl mx-auto">
            The language learning industry built apps that feel like studying. We built one that feels like talking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brand-border)] flex items-center justify-center">
                <span className="text-xl">😐</span>
              </div>
              <h3
                className="text-xl font-semibold text-[var(--color-brand-text-secondary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Most language apps
              </h3>
            </div>

            {/* Flashcard mockup */}
            <div className="space-y-3 mb-6 opacity-60">
              {["🟩 Correct: 'bonjour'", "🟥 Wrong: Try again", "🔄 Tap to flip", "📊 Level: Beginner"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[var(--radius-md)] px-4 py-3 text-sm text-[var(--color-brand-text-secondary)] font-medium grayscale"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <p className="text-center text-sm font-semibold text-[var(--color-brand-text-secondary)] italic">
              "Translate. Tap. Repeat. Forget."
            </p>
          </motion.div>

          {/* Festivities way */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-[var(--color-brand-accent)]/10 rounded-[var(--radius-xl)] p-8 border border-[var(--color-brand-primary)]/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <h3
                className="text-xl font-semibold text-[var(--color-brand-text)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Festivities
              </h3>
            </div>

            {/* Conversation mockup */}
            <div className="space-y-3 mb-6">
              {[
                { role: "ai", text: "¿Qué hiciste este fin de semana?" },
                { role: "user", text: "Fui al mercado. ¿Cómo se dice 'crowded'?" },
                { role: "ai", text: "'Lleno de gente' or 'abarrotado'. Very natural! Tell me more..." },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      msg.role === "ai"
                        ? "bg-white text-[var(--color-brand-text)] shadow-sm"
                        : "bg-[var(--color-brand-primary)] text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-[var(--color-brand-primary)] italic">
              "Talk. Listen. Respond. Remember."
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-lg text-[var(--color-brand-text-secondary)] max-w-2xl mx-auto"
        >
          Great tutors don't quiz you. They{" "}
          <em className="text-[var(--color-brand-text)] not-italic font-semibold">talk</em> to you.
          Festivities is the first app that teaches language the way your brain actually learns it
          — through real, adaptive conversation.
        </motion.p>
      </div>
    </section>
  );
}
