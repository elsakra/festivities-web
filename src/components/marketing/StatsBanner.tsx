"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10000, suffix: "+", label: "learners" },
  { value: 8, suffix: "", label: "languages" },
  { value: 4.9, suffix: "★", label: "App Store" },
  { value: 0, suffix: "", label: "cost to start", prefix: "Free" },
];

function useCountUp(target: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started || target === 0) {
      setCount(target);
      return;
    }
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setCount(target < 1 ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatItem({ value, suffix, label, prefix, index, started }: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  index: number;
  started: boolean;
}) {
  const count = useCountUp(value, 2, started);

  const display = prefix
    ? prefix
    : value >= 1000
    ? `${(count / 1000).toFixed(0)},000`
    : value < 1 ? count.toFixed(1)
    : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col items-center text-center px-6 py-6"
    >
      <div
        className="font-bold leading-none mb-1.5"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 52px)",
          background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {display}
        {suffix && (
          <span
            style={{
              background: "linear-gradient(135deg, #E8834A 0%, #C4521A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <div className="text-white/40 text-sm font-medium tracking-wide uppercase">{label}</div>
    </motion.div>
  );
}

export function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#0F0E0C" }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(196,82,26,0.3), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              prefix={stat.prefix}
              index={i}
              started={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
