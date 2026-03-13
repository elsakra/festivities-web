"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const languages = [
  { id: "spanish", name: "Spanish", native: "Español", flag: "🇪🇸", phrase: "¡Hola!", color: "#E8A87C" },
  { id: "french", name: "French", native: "Français", flag: "🇫🇷", phrase: "Bonjour!", color: "#87AADE" },
  { id: "japanese", name: "Japanese", native: "日本語", flag: "🇯🇵", phrase: "こんにちは", color: "#E8879A" },
  { id: "korean", name: "Korean", native: "한국어", flag: "🇰🇷", phrase: "안녕하세요", color: "#87C8DE" },
  { id: "german", name: "German", native: "Deutsch", flag: "🇩🇪", phrase: "Guten Tag!", color: "#A8D87C" },
  { id: "italian", name: "Italian", native: "Italiano", flag: "🇮🇹", phrase: "Ciao!", color: "#E8C87C" },
  { id: "portuguese", name: "Portuguese", native: "Português", flag: "🇧🇷", phrase: "Olá!", color: "#87DEB8" },
  { id: "mandarin", name: "Mandarin", native: "中文", flag: "🇨🇳", phrase: "你好", color: "#DE9887" },
];

export function LanguagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-brand-bg)]"
      aria-labelledby="languages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="languages-heading"
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            8 languages. One approach.
          </h2>
          <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-xl mx-auto">
            Real conversation in every language we support. More coming soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/languages/${lang.id}`}
                className="group relative block bg-[var(--color-brand-surface)] hover:bg-white rounded-[var(--radius-xl)] p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
              >
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-3" role="img" aria-label={lang.name}>
                    {lang.flag}
                  </span>
                  <div
                    className="text-2xl font-bold mb-1 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                    lang={lang.id === "mandarin" ? "zh" : lang.id === "japanese" ? "ja" : lang.id === "korean" ? "ko" : "en"}
                  >
                    {lang.native}
                  </div>
                  <div className="text-sm text-[var(--color-brand-text-secondary)] mb-3">
                    {lang.name}
                  </div>
                  <div
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: `${lang.color}30`,
                      color: `color-mix(in srgb, ${lang.color} 60%, #333)`,
                    }}
                  >
                    {lang.phrase}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <div className="flex items-center gap-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                    Learn <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="https://tally.so/r/festivities-language-request"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors text-sm font-semibold"
          >
            More languages coming soon. Request yours →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
