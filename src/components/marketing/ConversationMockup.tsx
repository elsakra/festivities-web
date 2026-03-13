"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const messages = [
  { role: "ai", text: "¡Hola! ¿Cómo te llamas? I'm your Festivities tutor.", delay: 0 },
  { role: "user", text: "Hola, me llamo Sarah. ¿Y tú?", delay: 1500 },
  { role: "ai", text: "Mucho gusto, Sarah! 😊 ¿De dónde eres?", delay: 3000 },
  { role: "user", text: "Soy de Nueva York. ¿Hablas inglés también?", delay: 5000 },
  { role: "ai", text: "Sí, but let's keep it in Spanish! You're doing great.", delay: 7000 },
];

export function ConversationMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showNext = (index: number) => {
      if (index >= messages.length) {
        timeoutRef.current = setTimeout(() => {
          setVisibleCount(0);
          showNext(0);
        }, 3500);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleCount(index + 1);
          showNext(index + 1);
        }, 900);
      }, index === 0 ? 600 : 2000);
    };

    showNext(0);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ width: "400px", maxWidth: "100%" }}>

      {/* Outer glow ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "320px",
          height: "80px",
          bottom: "-24px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(196,82,26,0.35) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      {/* Ambient side glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "200px",
          height: "400px",
          right: "-60px",
          top: "10%",
          background: "radial-gradient(ellipse, rgba(45,106,106,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Phone with 3D perspective */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: 15, rotateX: -5 }}
        animate={{ opacity: 1, y: 0, rotateY: -6, rotateX: 3 }}
        transition={{ duration: 1.1, ease: [0, 0, 0.2, 1] }}
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Phone frame */}
          <div
            className="relative"
            style={{
              width: "300px",
              background: "linear-gradient(145deg, #2A2520 0%, #1A1714 60%, #0F0E0C 100%)",
              borderRadius: "44px",
              padding: "14px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {/* Screen */}
            <div
              style={{
                background: "#111010",
                borderRadius: "32px",
                overflow: "hidden",
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-2">
                <span className="text-white/50 text-[11px] font-medium">9:41</span>
                <div className="w-[88px] h-[26px] bg-black rounded-full" />
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5 items-end">
                    {[3, 5, 7, 9].map((h, i) => (
                      <div key={i} className="w-1 rounded-sm bg-white/40" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <div className="w-4 h-3 border border-white/40 rounded-[3px] ml-1 relative">
                    <div className="absolute left-0.5 top-0.5 right-0.5 bottom-0.5 bg-white/40 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div
                className="flex items-center gap-3 px-4 py-3 mx-3 mb-2 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C4521A, #E8834A)" }}
                >
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold">Spanish Tutor</div>
                  <div className="text-white/35 text-[11px]">Adaptive conversation</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[11px] font-medium">Live</span>
                </div>
              </div>

              {/* Messages */}
              <div className="px-4 pb-3 space-y-2.5 min-h-[300px] max-h-[300px] overflow-hidden">
                {messages.slice(0, visibleCount).map((msg, i) => (
                  <motion.div
                    key={`${i}-${visibleCount}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                    className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
                  >
                    {msg.role === "ai" && (
                      <div className="w-6 h-6 rounded-full flex-shrink-0 mr-1.5 mt-0.5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C4521A, #E8834A)" }}>
                        <span className="text-white text-[9px] font-bold">F</span>
                      </div>
                    )}
                    <div
                      className="max-w-[72%] text-[12px] leading-relaxed px-3 py-2"
                      style={{
                        borderRadius: msg.role === "ai" ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
                        background: msg.role === "ai"
                          ? "rgba(255,255,255,0.08)"
                          : "linear-gradient(135deg, #C4521A, #E8834A)",
                        color: "rgba(255,255,255,0.88)",
                        border: msg.role === "ai" ? "1px solid rgba(255,255,255,0.07)" : "none",
                      }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start items-center gap-1.5"
                  >
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C4521A, #E8834A)" }}>
                      <span className="text-white text-[9px] font-bold">F</span>
                    </div>
                    <div
                      className="flex gap-1 px-3.5 py-3 rounded-[4px_16px_16px_16px]"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-white/40"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input bar */}
              <div className="px-4 pb-5 pt-1">
                <div
                  className="flex items-center gap-2 px-4 py-2.5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex-1 text-white/25 text-[11px]">Respond in Spanish...</div>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #C4521A, #E8834A)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2v20M2 12l10-10 10 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated waveform below phone */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-0.5"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: "rgba(196,82,26,0.25)" }}
            animate={{ height: [`${4 + Math.sin(i * 0.7) * 8}px`, `${12 + Math.sin(i * 0.5) * 12}px`, `${4 + Math.sin(i * 0.7) * 8}px`] }}
            transition={{
              duration: 1.2 + (i % 4) * 0.2,
              delay: i * 0.06,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
