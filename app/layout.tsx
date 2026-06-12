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
  SERIES_EDITIONS,
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
    // images intentionally omitted — Next.js uses app/opengraph-image.tsx automatically
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Day | Where AI meets capital",
    description:
      "Invitation-only summit series at the intersection of agentic AI and capital. Three editions — Miami · Amsterdam (Jun 22) · Toronto (Jul 21–22).",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    // images intentionally omitted — Next.js uses app/twitter-image.tsx automatically
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

// EventSeries JSON-LD — surfaces all three editions to Google + AI search
const eventSeriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: "Agentic Day",
  description:
    "Agentic Day is the invitation-only summit series at the intersection of agentic AI and capital — three editions across markets.",
  url: SITE_URL,
  organizer: {
    "@type": "Organization",
    name: "Agentic Day",
    url: SITE_URL,
    email: "pr@helloagentic.ai",
  },
  subEvent: SERIES_EDITIONS.map((edition) => ({
    "@type": "Event",
    name: edition.name,
    description: edition.description,
    startDate: edition.startDate,
    endDate: edition.endDate,
    eventStatus: edition.eventStatus,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: edition.locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality: edition.locationCity,
        addressRegion: edition.locationRegion,
        addressCountry: edition.locationCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Agentic Day",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      url: edition.offersUrl,
      availability: "https://schema.org/InviteOnly",
    },
  })),
};

// VideoObject JSON-LD for the Miami recap video — Google video rich results + AI citations
const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Agentic Day Miami — Recap",
  description:
    "Highlight reel from Agentic Day Miami, the flagship edition of the agentic AI summit series, hosted at Tesla Miami Design District.",
  thumbnailUrl: `${SITE_URL}/og-image.png`,
  uploadDate: "2026-05-05",
  contentUrl: `${SITE_URL}/videos/relive-miami.mp4`,
  embedUrl: `${SITE_URL}/#relive`,
  publisher: {
    "@type": "Organization",
    name: "Agentic Day",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/agentic-day-logo.jpg`,
    },
  },
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
        {/* Structured data: EventSeries (all three editions) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSeriesJsonLd) }}
        />
        {/* Structured data: VideoObject (recap reel) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
