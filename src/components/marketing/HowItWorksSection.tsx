"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Pick your language and level",
    description:
      "Choose from 8 languages — Spanish, French, Japanese, Korean, German, Italian, Portuguese, and Mandarin. Tell us where you're starting. Festivities adapts from day one.",
    visual: <StepOneVisual />,
    flip: false,
  },
  {
    number: "02",
    title: "Have a real conversation",
    description:
      "No multiple-choice grids. No swiping. You type or speak; your AI tutor responds, corrects your grammar naturally mid-conversation, and keeps things moving forward.",
    visual: <StepTwoVisual />,
    flip: true,
  },
  {
    number: "03",
    title: "Watch your fluency grow",
    description:
      "After each session, your Fluency Score updates. You'll see exactly which grammar rules you've mastered and which you're still building — then practice exactly those.",
    visual: <StepThreeVisual />,
    flip: false,
  },
];

function StepOneVisual() {
  const languages = ["🇪🇸 Spanish", "🇫🇷 French", "🇯🇵 Japanese", "🇰🇷 Korean", "🇩🇪 German", "🇮🇹 Italian"];
  return (
    <div className="space-y-2.5">
      {languages.map((lang, i) => (
        <motion.div
          key={lang}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{
            background: i === 0 ? "rgba(196,82,26,0.15)" : "rgba(255,255,255,0.04)",
            border: i === 0 ? "1px solid rgba(196,82,26,0.3)" : "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span className="text-base">{lang}</span>
          {i === 0 && (
            <span
              className="ml-auto text-[11px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(196,82,26,0.25)", color: "#E8834A" }}
            >
              Selected
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function StepTwoVisual() {
  const msgs = [
    { role: "ai", text: "¿Cómo fue tu día hoy?" },
    { role: "user", text: "Mi día fue muy bueno, gracias!" },
    { role: "ai", text: "Great! Small tip: add 'estuvo' for past tense — '...estuvo muy bueno'." },
    { role: "user", text: "Ah, estuvo muy bueno! 😊" },
  ];
  return (
    <div className="space-y-3">
      {msgs.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className="max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed"
            style={{
              borderRadius: msg.role === "ai" ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
              background: msg.role === "ai" ? "rgba(255,255,255,0.07)" : "linear-gradient(135deg, #C4521A, #E8834A)",
              color: "rgba(255,255,255,0.85)",
              border: msg.role === "ai" ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}
          >
            {msg.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StepThreeVisual() {
  const skills = [
    { label: "Vocabulary", value: 78 },
    { label: "Grammar", value: 62 },
    { label: "Speaking confidence", value: 84 },
    { label: "Listening", value: 71 },
  ];
  return (
    <div className="space-y-4">
      {skills.map((skill, i) => (
        <div key={skill.label}>
          <div className="flex justify-between mb-1.5 text-sm">
            <span className="text-white/60">{skill.label}</span>
            <span className="text-white/40 font-medium">{skill.value}%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, #C4521A, #E8834A)`,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.15, ease: [0, 0, 0.2, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Watermark step number */}
      <div
        className="absolute pointer-events-none select-none font-bold leading-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 16vw, 200px)",
          color: "rgba(255,255,255,0.022)",
          top: step.flip ? "-40px" : "-30px",
          [step.flip ? "right" : "left"]: "-20px",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {step.number}
      </div>

      <div
        className={`relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 lg:py-24 ${
          step.flip ? "" : ""
        }`}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className={step.flip ? "lg:order-2" : "lg:order-1"}
        >
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#C4521A" }}
          >
            Step {step.number}
          </div>
          <h3
            className="font-bold text-white leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 2.8vw, 38px)",
            }}
          >
            {step.title}
          </h3>
          <p className="text-white/50 leading-relaxed text-[15px]">{step.description}</p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0, 0, 0.2, 1] }}
          className={step.flip ? "lg:order-1" : "lg:order-2"}
        >
          <div
            className="p-6 lg:p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {step.visual}
          </div>
        </motion.div>
      </div>

      {/* Divider (not after last) */}
      {index < steps.length - 1 && (
        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export function HowItWorksSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-8"
      style={{ background: "#1A1714" }}
    >
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-center pt-20 pb-8"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">How it works</p>
          <h2
            className="font-bold text-white leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
            }}
          >
            Three steps to your
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
              first real conversation.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        {steps.map((step, index) => (
          <Step key={step.number} step={step} index={index} />
        ))}

        <div className="pb-20" />
      </div>
    </section>
  );
}
