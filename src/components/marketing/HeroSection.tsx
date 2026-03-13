"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AppStoreButtons } from "@/components/marketing/AppStoreButtons";
import { ConversationMockup } from "@/components/marketing/ConversationMockup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F5EEE4] to-[#EDE0CC] pt-20">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196,82,26,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45,106,106,0.08) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              AI-powered language learning
            </motion.div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--color-brand-text)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Talk your way
              <br />
              <span className="text-[var(--color-brand-primary)] italic">to fluency.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--color-brand-text-secondary)] leading-relaxed mb-10 max-w-lg">
              Festivities teaches language through real AI conversations — not flashcards,
              not quizzes, not swiping. Open the app. Start talking. Get fluent.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Button asChild size="xl">
                <Link href="/download">Download Free</Link>
              </Button>
              <a
                href="#how-it-works"
                className="text-[var(--color-brand-text-secondary)] font-semibold hover:text-[var(--color-brand-text)] transition-colors inline-flex items-center gap-2 group"
              >
                See how it works
                <span
                  className="group-hover:translate-y-1 transition-transform duration-150 inline-block"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>
            </div>

            <AppStoreButtons className="mt-2" />
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ConversationMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
