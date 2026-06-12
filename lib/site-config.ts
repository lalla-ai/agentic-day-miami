// ============================================
// SITE-WIDE SEO CONFIG
// Change SITE_URL to your real domain when live.
// All other SEO references pull from here.
// ============================================

export const SITE_URL = "https://www.agenticdaysummit.com";

export const SITE_NAME = "Agentic Day";

export const SITE_DEFAULT_TITLE =
  "Agentic Day | Where AI meets capital | Miami · Amsterdam · Toronto";

export const SITE_DEFAULT_DESCRIPTION =
  "Agentic Day is the invitation-only summit series where the builders shipping agentic AI meet the capital deciding what scales. Three editions across markets — Miami, Amsterdam, Toronto.";

export const SITE_KEYWORDS = [
  "Agentic Day",
  "Agentic Day Amsterdam",
  "Agentic Day Miami",
  "Agentic Day Toronto",
  "agentic AI summit",
  "AI infrastructure economy",
  "AI investment summit",
  "Agentic AI conference",
  "Where AI meets capital",
  "autonomous AI summit",
  "agentic AI conference Europe",
  "AI summit Amsterdam 2026",
  "AI Conference Toronto 2026",
  "AI investors conference",
  "agentic AI founders",
  "on-chain AI summit",
  "AI capital allocators",
  "Dutch Blockchain Week AI",
  "Blockchain Futurist Conference AI",
];

export const TWITTER_HANDLE = "@agenticday";

// ============================================
// NEXT EVENT — Agentic Day Amsterdam (June 22, 2026)
// Used in primary structured data and OG copy
// ============================================
export const EVENT_DATA = {
  name: "Agentic Day Amsterdam",
  description:
    "Where the builders shipping agentic AI meet the capital deciding what scales. Invitation-only summit at the intersection of agentic AI and capital — Europe edition.",
  startDate: "2026-06-22T13:00:00+02:00",
  endDate: "2026-06-22T22:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    name: "Amsterdam",
    address: {
      streetAddress: "",
      addressLocality: "Amsterdam",
      addressRegion: "",
      postalCode: "",
      addressCountry: "NL",
    },
  },
  organizer: {
    name: "Agentic Day",
    url: SITE_URL,
    email: "pr@helloagentic.ai",
  },
  offers: {
    url: "https://luma.com/lo977l6h",
    availability: "https://schema.org/InviteOnly",
    validFrom: "2026-05-01T00:00:00+02:00",
  },
  image: `${SITE_URL}/og-image.png`,
};

// ============================================
// SERIES — all three editions (for EventSeries JSON-LD)
// ============================================
export const SERIES_EDITIONS = [
  {
    name: "Agentic Day Miami",
    description:
      "The flagship edition of the Agentic Day series — where the builders shipping agentic AI meet the capital deciding what scales. Hosted at Tesla Miami Design District.",
    startDate: "2026-05-04T12:30:00-04:00",
    endDate: "2026-05-04T20:00:00-04:00",
    eventStatus: "https://schema.org/EventScheduled",
    locationName: "Tesla Miami Design District",
    locationCity: "Miami",
    locationRegion: "FL",
    locationCountry: "US",
    offersUrl: "https://luma.com/event/evt-CPHbpuc52PLWqp0",
  },
  {
    name: "Agentic Day Amsterdam",
    description:
      "The European edition of the Agentic Day series. Official side event of Dutch Blockchain Week.",
    startDate: "2026-06-22T13:00:00+02:00",
    endDate: "2026-06-22T22:00:00+02:00",
    eventStatus: "https://schema.org/EventScheduled",
    locationName: "Amsterdam",
    locationCity: "Amsterdam",
    locationRegion: "",
    locationCountry: "NL",
    offersUrl: "https://luma.com/lo977l6h",
  },
  {
    name: "Agentic Day Toronto",
    description:
      "The North American closer of the Agentic Day series — held alongside the Blockchain Futurist Conference at Rebel, Toronto.",
    startDate: "2026-07-21T15:00:00-04:00",
    endDate: "2026-07-21T18:00:00-04:00",
    eventStatus: "https://schema.org/EventScheduled",
    locationName: "Rebel, Toronto",
    locationCity: "Toronto",
    locationRegion: "ON",
    locationCountry: "CA",
    offersUrl: "https://luma.com/Agentic_AI_Day",
  },
];
