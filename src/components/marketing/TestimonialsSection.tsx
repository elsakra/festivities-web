"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "I tried Duolingo for two years and never felt confident speaking. After three months with Festivities, I had my first real conversation with my Mexican coworkers. They were shocked.",
    name: "Alex K.",
    role: "Software Engineer",
    language: "Spanish",
    flag: "🇪🇸",
    rotate: "-1.2deg",
  },
  {
    quote: "The AI corrects me mid-conversation without making me feel dumb. It just... flows. I've never learned this fast.",
    name: "Priya M.",
    role: "Graphic Designer",
    language: "French",
    flag: "🇫🇷",
    rotate: "1.4deg",
  },
  {
    quote: "Japanese has always intimidated me. Festivities broke it down through actual conversations about things I care about — anime, food, travel. Game changer.",
    name: "Jordan T.",
    role: "Marketing Manager",
    language: "Japanese",
    flag: "🇯🇵",
    rotate: "-0.8deg",
  },
  {
    quote: "My grandmother only speaks Portuguese. Six months in and we can actually talk. I cried the first time she said my accent was good.",
    name: "Marcus R.",
    role: "Teacher",
    language: "Portuguese",
    flag: "🇧🇷",
    rotate: "1.1deg",
  },
  {
    quote: "I travel to Germany for work twice a year. Festivities got me from zero to holding meetings in German. My colleagues are still surprised.",
    name: "Sophie L.",
    role: "Consultant",
    language: "German",
    flag: "🇩🇪",
    rotate: "-1.5deg",
  },
  {
    quote: "Korean feels natural now. The adaptive pacing kept me exactly where I needed to be — never bored, never overwhelmed.",
    name: "Min J.",
    role: "Graduate Student",
    language: "Korean",
    flag: "🇰🇷",
    rotate: "0.9deg",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C4521A" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0, 0, 0.2, 1] }}
      style={{ transform: `rotate(${t.rotate})` }}
      className="break-inside-avoid mb-5"
    >
      <div
        className="p-6"
        style={{
          background: "rgba(255, 252, 248, 0.97)",
          borderRadius: "20px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <StarRow />
        <blockquote className="text-gray-800 text-[14px] leading-relaxed mb-4">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #C4521A, #E8834A)", color: "white" }}
          >
            {t.name.charAt(0)}
          </div>
          <div>
            <div className="text-gray-900 text-sm font-semibold">{t.name}</div>
            <div className="text-gray-400 text-xs">{t.role}</div>
          </div>
          <div className="ml-auto text-base" title={`${t.language} learner`}>
            {t.flag}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "#FAF6F0" }}>

      {/* Central glow */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          style={{
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(196,82,26,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C4521A]/60 mb-4">Learners love it</p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.5vw, 48px)",
              color: "#1A1714",
            }}
          >
            Real people. Real progress.
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C4521A 0%, #E8834A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real conversations.
            </span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div
          style={{
            columns: "1",
            columnGap: "20px",
          }}
          className="sm:[columns:2] lg:[columns:3]"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
