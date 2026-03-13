import Link from "next/link";
import { cn } from "@/lib/utils";

interface AppStoreButtonsProps {
  className?: string;
  size?: "sm" | "md";
}

export function AppStoreButtons({ className, size = "md" }: AppStoreButtonsProps) {
  const appStoreUrl =
    process.env.NEXT_PUBLIC_APP_STORE_URL ??
    "https://apps.apple.com/app/festivities/id6760388507";
  const playStoreUrl =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/store/apps/details?id=com.festivities.app";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className={cn(
          "flex items-center gap-2 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] rounded-[var(--radius-lg)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]",
          size === "md" ? "px-4 py-3" : "px-3 py-2"
        )}
      >
        <svg
          className={size === "md" ? "w-6 h-6" : "w-5 h-5"}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <div className={cn("leading-none", size === "md" ? "text-[10px] opacity-70" : "text-[9px] opacity-70")}>
            Download on the
          </div>
          <div className={cn("font-semibold", size === "md" ? "text-sm" : "text-xs")}>
            App Store
          </div>
        </div>
      </a>

      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className={cn(
          "flex items-center gap-2 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] rounded-[var(--radius-lg)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]",
          size === "md" ? "px-4 py-3" : "px-3 py-2"
        )}
      >
        <svg
          className={size === "md" ? "w-6 h-6" : "w-5 h-5"}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3.18 23.76c.31.17.67.22 1.03.1l12.2-7.04-2.68-2.68-10.55 9.62zm16.47-9.48L16.8 12.5l2.85-2.78.01-.01L23 12.15c.57.33.57 1.17 0 1.5l-3.35 1.63zM2.04 1.02C1.78 1.28 1.64 1.68 1.64 2.2v19.6c0 .52.14.91.4 1.17l.06.06 10.98-10.97v-.26L2.1.96l-.06.06zm9.48 10.97L2.43.9l-.01-.01 11.18 6.45-2.08 4.65z" />
        </svg>
        <div>
          <div className={cn("leading-none", size === "md" ? "text-[10px] opacity-70" : "text-[9px] opacity-70")}>
            Get it on
          </div>
          <div className={cn("font-semibold", size === "md" ? "text-sm" : "text-xs")}>
            Google Play
          </div>
        </div>
      </a>
    </div>
  );
}
