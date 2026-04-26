import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Day Miami | Where AI meets capital | May 4, 2026",
  description:
    "Agentic Day Miami — The AI Infrastructure Economy. May 4, 2026 at Tesla Miami Design District. 300 curated seats. By invitation only.",
  openGraph: {
    title: "Agentic Day Miami | Where AI meets capital",
    description:
      "The AI Infrastructure Economy. May 4, 2026 at Tesla Miami Design District.",
    type: "website",
    locale: "en_US",
    siteName: "Agentic Day",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Day Miami",
    description:
      "Where AI meets capital. May 4, 2026 at Tesla Miami Design District.",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1117" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
