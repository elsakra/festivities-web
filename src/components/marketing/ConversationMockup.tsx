"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const messages = [
  { role: "ai", text: "¡Hola! ¿Cómo te llamas? I'm your Festivities tutor.", delay: 0 },
  { role: "user", text: "Hola, me llamo Sarah. ¿Y tú?", delay: 1500 },
  { role: "ai", text: "Mucho gusto, Sarah! 😊 I'm your AI tutor. ¿De dónde eres?", delay: 3000 },
  { role: "user", text: "Soy de Nueva York. ¿Hablas inglés también?", delay: 5000 },
  { role: "ai", text: "Sí, but let's keep it in Spanish! You're doing great. What brought you to learn español?", delay: 7000 },
];

export function ConversationMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const showNext = (index: number) => {
      if (index >= messages.length) {
        timeout = setTimeout(() => {
          setVisibleCount(0);
          showNext(0);
        }, 3000);
        return;
      }

      timeout = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleCount(index + 1);
          showNext(index + 1);
        }, 800);
      }, index === 0 ? 500 : 1800);
    };

    showNext(visibleCount);
    return () => clearTimeout(timeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Phone frame */}
      <div className="relative bg-[var(--color-brand-text)] rounded-[3rem] p-3 shadow-2xl">
        <div className="bg-[#1A1714] rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2">
            <span className="text-white/60 text-xs">9:41</span>
            <div className="w-20 h-5 bg-black rounded-full" />
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-white/40" />
              <div className="w-3 h-3 rounded-full bg-white/40" />
            </div>
          </div>

          {/* App header */}
          <div className="px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Spanish Tutor</div>
              <div className="text-white/40 text-xs">Adaptive conversation</div>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs">Live</span>
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-3 min-h-[340px] max-h-[340px] overflow-hidden">
            {messages.slice(0, visibleCount).map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex animate-in fade-in slide-in-from-bottom-2 duration-300",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-3 py-2 text-xs leading-relaxed",
                    msg.role === "ai"
                      ? "bg-white/10 text-white/90 rounded-tl-sm"
                      : "bg-[var(--color-brand-primary)] text-white rounded-tr-sm"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-200">
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="px-4 pb-6 pt-2">
            <div className="bg-white/10 rounded-full flex items-center gap-2 px-4 py-2.5">
              <div className="flex-1 text-white/30 text-xs">Respond in Spanish...</div>
              <div className="w-7 h-7 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waveform decoration */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-0.5"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-[var(--color-brand-primary)]/30 animate-pulse"
            style={{
              height: `${Math.random() * 20 + 4}px`,
              animationDelay: `${i * 80}ms`,
              animationDuration: `${800 + Math.random() * 400}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
