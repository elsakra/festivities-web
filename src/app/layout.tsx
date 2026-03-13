import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { ToastProvider } from "@/components/ui/Toast";
import { getBaseUrl } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Festivities — Learn Languages Through Real AI Conversations",
    template: "%s | Festivities",
  },
  description:
    "Festivities is the AI language app that teaches through real adaptive conversations — not flashcards, not quizzes. Start speaking today for free.",
  keywords: [
    "AI language learning",
    "learn Spanish",
    "learn French",
    "learn Japanese",
    "language app",
    "AI tutor",
  ],
  authors: [{ name: "Festivities Inc." }],
  creator: "Festivities Inc.",
  openGraph: {
    type: "website",
    siteName: "Festivities",
    locale: "en_US",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Festivities — AI Language Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@festivitiesapp",
    creator: "@festivitiesapp",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-itunes-app": `app-id=${process.env.NEXT_PUBLIC_APP_STORE_ID ?? "6760388507"}, app-argument=festivities://home`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body>
        <ToastProvider>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ToastProvider>
      </body>
    </html>
  );
}
