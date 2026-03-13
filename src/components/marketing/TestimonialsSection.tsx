"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I've tried Duolingo, Babbel, Rosetta Stone — nothing clicked until Festivities. Actual conversations make all the difference. I ordered my first coffee in Spanish last month and the barista understood me perfectly.",
    name: "Sarah K.",
    language: "Spanish",
    timeUsing: "3 months",
    initials: "SK",
    color: "#C4521A",
  },
  {
    id: 2,
    quote:
      "The AI remembers what I've said in previous sessions and builds on it. It's not generic — it feels like it actually knows me. My Japanese has improved more in 6 weeks than in 2 years of classroom study.",
    name: "Marcus T.",
    language: "Japanese",
    timeUsing: "6 weeks",
    initials: "MT",
    color: "#2D6A6A",
  },
  {
    id: 3,
    quote:
      "I'm learning French for a work assignment in Paris. The business conversation practice is exactly what I needed. My colleagues were surprised by how natural I sounded on my first call.",
    name: "Priya M.",
    language: "French",
    timeUsing: "2 months",
    initials: "PM",
    color: "#7A4D2D",
  },
  {
    id: 4,
    quote:
      "As someone with language anxiety, being judged by an AI rather than a human tutor makes it way less stressful to make mistakes. I've made more progress than ever because I'm not afraid to try.",
    name: "James L.",
    language: "Korean",
    timeUsing: "5 weeks",
    initials: "JL",
    color: "#2D5A7A",
  },
  {
    id: 5,
    quote:
      "My kids and I are learning Portuguese together before our trip to Brazil. We do sessions separately and compare notes at dinner — it's become a family thing. Worth every penny.",
    name: "Elena R.",
    language: "Portuguese",
    timeUsing: "2 months",
    initials: "ER",
    color: "#4A7A2D",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[var(--color-brand-primary)] text-[var(--color-brand-primary)]" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-brand-surface)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real people. Real fluency.
          </h2>
          <p className="text-xl text-[var(--color-brand-text-secondary)]">
            Don't take our word for it.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="break-inside-avoid mb-5"
            >
              <blockquote className="bg-white rounded-[var(--radius-xl)] p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--color-brand-border)]">
                <StarRating />
                <p className="mt-3 text-[var(--color-brand-text)] leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-brand-text)]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--color-brand-text-secondary)]">
                      Learning {t.language} · {t.timeUsing}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
