"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const oldWayItems = [
  "Repeat flashcards until you memorize them",
  "Tap the correct grammar answer",
  "Never actually hold a conversation",
  "Quit after 2 weeks because it's boring",
];

const festivitiesItems = [
  "Have a real conversation from day one",
  "Get instant, contextual corrections",
  "Build speaking confidence naturally",
  "Keep going because it's actually fun",
];

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#13110F" }}
    >
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">The problem</p>
          <h2
            className="font-bold text-white leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
            }}
          >
            Most apps keep you studying.
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #E8834A 0%, #C4521A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not speaking.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-5 items-stretch">

          {/* LEFT — dead card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0, 0, 0.2, 1] }}
            className="relative overflow-hidden"
            style={{
              background: "#1A1714",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.06)",
              filter: "grayscale(0.7)",
              opacity: 0.65,
            }}
          >
            {/* Scan-line animation */}
            <motion.div
              className="absolute left-0 right-0 h-20 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(255,60,60,0.04), transparent)",
              }}
              animate={{ top: ["-80px", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              aria-hidden="true"
            />

            <div className="p-7 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <span className="text-white/30 text-xs font-bold tracking-widest uppercase">Most apps</span>
              </div>
              <ul className="space-y-3">
                {oldWayItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-red-500/50 mt-0.5 flex-shrink-0 text-sm">✕</span>
                    <span className="text-white/35 text-sm leading-snug line-through decoration-red-500/30">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — Festivities card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0, 0, 0.2, 1] }}
            className="relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1B4444 0%, #1F5050 40%, #163A3A 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(45,160,160,0.2)",
              boxShadow: "0 20px 60px rgba(45,106,106,0.25), 0 0 0 1px rgba(45,160,160,0.1)",
            }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(45,160,160,0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 p-8 lg:p-10">
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C4521A, #E8834A)" }}
                >
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                <span className="text-white/80 text-sm font-bold tracking-wider uppercase">Festivities</span>
                <span
                  className="ml-1 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(196,82,26,0.2)", color: "#E8834A", border: "1px solid rgba(196,82,26,0.3)" }}
                >
                  Different
                </span>
              </div>

              <ul className="space-y-4">
                {festivitiesItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-[11px] font-bold"
                      style={{ background: "rgba(196,82,26,0.25)", color: "#E8834A" }}
                    >
                      ✓
                    </span>
                    <span className="text-white/85 text-[15px] leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pull quote */}
              <div
                className="mt-8 pt-6 border-t border-white/10"
              >
                <p
                  className="font-bold leading-snug text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(18px, 2vw, 24px)",
                  }}
                >
                  &ldquo;The only app that made me
                  <br />
                  feel ready to actually travel.&rdquo;
                </p>
                <p className="text-white/40 text-sm mt-2">— Alex K., Spanish learner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
