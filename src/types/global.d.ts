interface Window {
  gtag: (
    command: "config" | "event" | "consent" | "set",
    targetId: string,
    config?: Record<string, unknown>
  ) => void;
}
