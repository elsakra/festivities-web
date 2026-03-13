"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AppStoreButtons } from "@/components/marketing/AppStoreButtons";
import { ConversationMockup } from "@/components/marketing/ConversationMockup";

const floatingWords = [
  { text: "¡Hola!", top: "12%", left: "8%", delay: 0, duration: 6 },
  { text: "Bonjour", top: "20%", right: "6%", delay: 1.2, duration: 7 },
  { text: "こんにちは", top: "65%", left: "5%", delay: 2, duration: 8 },
  { text: "안녕하세요", top: "78%", right: "4%", delay: 0.6, duration: 6.5 },
  { text: "Ciao!", top: "45%", left: "3%", delay: 1.8, duration: 7.5 },
  { text: "你好", top: "88%", left: "12%", delay: 2.4, duration: 6 },
  { text: "Olá!", top: "35%", right: "5%", delay: 3, duration: 8 },
  { text: "Guten Tag", top: "55%", right: "3%", delay: 0.4, duration: 7 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: "linear-gradient(145deg, #1A1714 0%, #2D1810 50%, #1A1F1A 100%)" }}>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            right: "-80px",
            background: "radial-gradient(circle, rgba(196,82,26,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-60px",
            left: "-60px",
            background: "radial-gradient(circle, rgba(45,106,106,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: "40%",
            left: "40%",
            background: "radial-gradient(circle, rgba(196,82,26,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Floating language words */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {floatingWords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute text-white/[0.07] font-bold select-none hidden lg:block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14px, 1.5vw, 22px)",
              top: word.top,
              left: word.left,
              right: word.right,
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: word.duration,
              delay: word.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              AI-powered language learning
            </motion.div>

            {/* Headline */}
            <h1
              className="font-bold leading-[1.0] tracking-tight text-white mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 7vw, 88px)",
              }}
            >
              Talk your way
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #E8834A 0%, #C4521A 40%, #F0A060 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to fluency.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-10 max-w-lg">
              Festivities teaches language through real AI conversations — not flashcards,
              not quizzes, not swiping. Open the app. Start talking. Get fluent.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-block" }}
              >
                <Button
                  asChild
                  size="xl"
                  className="relative overflow-hidden font-bold"
                  style={{
                    background: "linear-gradient(135deg, #C4521A 0%, #E8834A 100%)",
                    boxShadow: "0 0 0 0 rgba(196,82,26,0)",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(196,82,26,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(196,82,26,0)";
                  }}
                >
                  <Link href="/download">Download Free</Link>
                </Button>
              </motion.div>
              <a
                href="#how-it-works"
                className="text-white/40 text-sm font-semibold hover:text-white/70 transition-colors inline-flex items-center gap-2 group"
              >
                See how it works
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  ↓
                </motion.span>
              </a>
            </div>

            <AppStoreButtons className="mt-2 opacity-70 hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Phone side */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ConversationMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(26,23,20,0.6))" }}
        aria-hidden="true"
      />
    </section>
  );
}
