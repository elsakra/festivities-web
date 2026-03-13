"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AppStoreButtons } from "@/components/marketing/AppStoreButtons";

const floatingWords = [
  { text: "¡Hola!", top: "10%", left: "8%", delay: 0, duration: 7 },
  { text: "Bonjour", top: "18%", right: "7%", delay: 1, duration: 8 },
  { text: "こんにちは", top: "60%", left: "4%", delay: 2.5, duration: 9 },
  { text: "안녕하세요", top: "70%", right: "5%", delay: 0.5, duration: 7.5 },
  { text: "Ciao!", top: "40%", left: "3%", delay: 1.5, duration: 8.5 },
  { text: "你好", top: "82%", left: "10%", delay: 3, duration: 7 },
  { text: "Olá!", top: "32%", right: "4%", delay: 2, duration: 9 },
  { text: "Guten Tag", top: "52%", right: "3%", delay: 0.8, duration: 8 },
];

export function FinalCtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative overflow-hidden py-32 lg:py-48"
      style={{ background: "linear-gradient(160deg, #0D0B0A 0%, #1A0E08 40%, #8B3712 100%)" }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Floating words */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {floatingWords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute font-bold select-none hidden md:block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 48px)",
              color: "rgba(255,255,255,0.07)",
              top: word.top,
              left: word.left,
              right: word.right,
            }}
            animate={{ y: [0, -18, 0] }}
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

      {/* Large pulsing glow behind CTA */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -20%)",
          background: "radial-gradient(circle, rgba(196,82,26,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      >
        <motion.div
          className="w-full h-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 mb-10 border border-white/10 bg-white/5 backdrop-blur-sm text-white/50 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8834A] animate-pulse" />
          Start speaking today
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="font-bold text-white leading-[1.0] tracking-tight mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 96px)",
          }}
        >
          Your first
          <br />
          conversation
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #F5D78E 0%, #F0A060 40%, #E8834A 70%, #F5D78E 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
              fontStyle: "italic",
            }}
          >
            is free.
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="text-lg sm:text-xl text-white/45 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          No credit card. No trial clock ticking. Just download and start talking.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              size="xl"
              className="w-full sm:w-auto relative overflow-hidden font-bold text-gray-900 group"
              style={{
                background: "white",
                minWidth: "220px",
                boxShadow: "0 0 0 0 rgba(255,255,255,0)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(255,255,255,0)";
              }}
            >
              <Link href="/download">
                <span className="relative z-10">Download Free</span>
                {/* Shimmer on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(196,82,26,0.15) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s linear infinite",
                  }}
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </motion.div>
          <Link
            href="/pricing"
            className="text-white/35 text-sm font-semibold hover:text-white/60 transition-colors"
          >
            View plans →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <AppStoreButtons className="justify-center opacity-50 hover:opacity-80 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
}
