// ============================================
// SITE-WIDE SEO CONFIG
// Change SITE_URL to your real domain when live.
// All other SEO references pull from here.
// ============================================

export const SITE_URL = "https://www.agenticdaysummit.com";

export const SITE_NAME = "Agentic Day";

export const SITE_DEFAULT_TITLE =
  "Agentic Day Miami | Where AI meets capital | May 4, 2026";

export const SITE_DEFAULT_DESCRIPTION =
  "Where AI meets capital. Join 300 founders, investors, and operators at Tesla Miami Design District on May 4, 2026 for the AI Infrastructure Economy summit.";

export const SITE_KEYWORDS = [
  "Agentic AI",
  "AI Infrastructure",
  "Miami AI conference",
  "Agentic Day Miami",
  "AI summit 2026",
  "Tesla Miami Design District",
  "AI investors",
  "agentic economy",
  "AI founders Miami",
  "Where AI meets capital",
];

export const TWITTER_HANDLE = "@agenticday";

// Event details — used in structured data (JSON-LD)
export const EVENT_DATA = {
  name: "Agentic Day Miami",
  description:
    "An invitation-only summit bringing together founders, investors, and operators shaping the agentic AI infrastructure economy.",
  startDate: "2026-05-04T12:30:00-04:00",
  endDate: "2026-05-04T20:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    name: "Tesla Miami Design District",
    address: {
      streetAddress: "4039 NE 1st Ave",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33137",
      addressCountry: "US",
    },
  },
  organizer: {
    name: "Agentic Day",
    url: SITE_URL,
    email: "pr@helloagentic.ai",
  },
  offers: {
    url: "https://luma.com/event/evt-CPHbpuc52PLWqp0",
    availability: "https://schema.org/InviteOnly",
    validFrom: "2026-04-01T00:00:00-04:00",
  },
  image: `${SITE_URL}/og-image.png`,
};
