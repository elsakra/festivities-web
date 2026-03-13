"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { AppStoreButtons } from "@/components/marketing/AppStoreButtons";

const floatingMessages = [
  { text: "¡Hola!", lang: "Spanish", x: "10%", delay: 0 },
  { text: "Bonjour!", lang: "French", x: "30%", delay: 0.5 },
  { text: "こんにちは", lang: "Japanese", x: "55%", delay: 1.0 },
  { text: "안녕하세요", lang: "Korean", x: "75%", delay: 1.5 },
  { text: "Ciao!", lang: "Italian", x: "20%", delay: 2.0 },
  { text: "你好", lang: "Mandarin", x: "65%", delay: 0.8 },
];

export function FinalCtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[var(--color-brand-primary)] to-[#8B3712]"
      aria-labelledby="final-cta-heading"
    >
      {/* Floating greetings background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {floatingMessages.map((msg) => (
          <motion.div
            key={msg.lang}
            className="absolute bottom-0 text-white/10 text-2xl font-bold select-none pointer-events-none"
            style={{ left: msg.x, fontFamily: "var(--font-display)" }}
            animate={{
              y: [0, -120, -240],
              opacity: [0, 0.15, 0],
            }}
            transition={{
              duration: 5,
              delay: msg.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="final-cta-heading"
            className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your first conversation
            <br />
            <em>is free.</em>
          </h2>

          <p className="text-xl text-white/80 mb-10">
            No credit card. No signup. Just open and talk.
          </p>

          <Button
            asChild
            size="xl"
            className="bg-white text-[var(--color-brand-primary)] hover:bg-white/95 shadow-lg mb-8 font-bold"
          >
            <Link href="/download">Download Festivities</Link>
          </Button>

          <div className="flex justify-center">
            <AppStoreButtons />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
