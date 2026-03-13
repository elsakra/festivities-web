import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { AppStoreButtons } from "@/components/marketing/AppStoreButtons";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Download Festivities — AI Language Learning App",
  description:
    "Download Festivities on iOS or Android. Start learning a language through real AI conversations today — free.",
  alternates: {
    canonical: `${getBaseUrl()}/download`,
  },
};

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/app/festivities/id6760388507";
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.festivities.app";

export default async function DownloadPage() {
  const headersList = await headers();
  const ua = headersList.get("user-agent") ?? "";

  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && /Mobile/.test(ua));
  const isAndroid = /Android/.test(ua);

  if (isIOS) redirect(APP_STORE_URL);
  if (isAndroid) redirect(PLAY_STORE_URL);

  // Desktop fallback
  return (
    <div className="pt-20 min-h-screen bg-[var(--color-brand-bg)] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-6xl mb-6" aria-hidden="true">📱</div>
        <h1
          className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-text)] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Get Festivities on your phone
        </h1>
        <p className="text-xl text-[var(--color-brand-text-secondary)] mb-10">
          Festivities is available on iOS and Android. Scan the QR code or tap
          your platform below to download.
        </p>

        {/* QR code placeholder */}
        <div className="flex justify-center mb-10">
          <div className="w-48 h-48 bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] flex items-center justify-center border-2 border-dashed border-[var(--color-brand-border)]">
            <div className="text-center">
              <div className="text-3xl mb-2" aria-hidden="true">⬛</div>
              <p className="text-xs text-[var(--color-brand-text-secondary)]">
                QR Code
                <br />
                (coming soon)
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <AppStoreButtons size="md" />
        </div>

        {/* Email link */}
        <div className="bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6">
          <p className="text-sm text-[var(--color-brand-text-secondary)] mb-4">
            Want us to send you the download link?
          </p>
          <form className="flex gap-2 max-w-sm mx-auto" action="/api/newsletter" method="POST">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-brand-border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-[var(--color-brand-primary)] text-white rounded-[var(--radius-md)] text-sm font-semibold hover:bg-[var(--color-brand-primary-dark)] transition-colors"
            >
              Send link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
