import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DEFAULT_TITLE,
  SITE_DEFAULT_DESCRIPTION,
  SITE_KEYWORDS,
  TWITTER_HANDLE,
  EVENT_DATA,
} from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: "%s | Agentic Day",
  },
  description: SITE_DEFAULT_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Agentic Day", url: SITE_URL }],
  creator: "Agentic Day",
  publisher: "Agentic Day",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentic Day Miami — Where AI meets capital. May 4, 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Day Miami | Where AI meets capital",
    description:
      "300 curated seats. May 4, 2026. Tesla Miami Design District. By invitation only.",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: ["/og-image.png"],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: "Technology",
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

// JSON-LD structured data for the event — helps Google show rich event cards
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_DATA.name,
  description: EVENT_DATA.description,
  startDate: EVENT_DATA.startDate,
  endDate: EVENT_DATA.endDate,
  eventStatus: EVENT_DATA.eventStatus,
  eventAttendanceMode: EVENT_DATA.eventAttendanceMode,
  location: {
    "@type": "Place",
    name: EVENT_DATA.location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: EVENT_DATA.location.address.streetAddress,
      addressLocality: EVENT_DATA.location.address.addressLocality,
      addressRegion: EVENT_DATA.location.address.addressRegion,
      postalCode: EVENT_DATA.location.address.postalCode,
      addressCountry: EVENT_DATA.location.address.addressCountry,
    },
  },
  organizer: {
    "@type": "Organization",
    name: EVENT_DATA.organizer.name,
    url: EVENT_DATA.organizer.url,
    email: EVENT_DATA.organizer.email,
  },
  offers: {
    "@type": "Offer",
    url: EVENT_DATA.offers.url,
    availability: EVENT_DATA.offers.availability,
    validFrom: EVENT_DATA.offers.validFrom,
  },
  image: EVENT_DATA.image,
  performer: {
    "@type": "Organization",
    name: "Agentic Day",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agentic Day",
  url: SITE_URL,
  logo: `${SITE_URL}/images/agentic-day-logo.jpg`,
  email: "pr@helloagentic.ai",
  sameAs: [
    "https://x.com/agenticday",
    "https://www.linkedin.com/company/agenticday-summit/",
    "https://t.me/sheagentic",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Structured data: Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
