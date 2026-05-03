import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Partners | Sponsorship & Media Accreditation",
  description:
    "Sponsor Agentic Day Miami. Reach 300 founders, investors, and operators driving the agentic AI economy. Sponsorship packages, media accreditation, and ecosystem partnership opportunities.",
  keywords: [
    "Agentic Day sponsorship",
    "AI conference sponsor",
    "Miami AI event partner",
    "media accreditation AI",
    "AI summit exhibition",
    "agentic AI partners",
  ],
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partners | Agentic Day Miami",
    description:
      "Position your brand at the forefront of AI. Sponsorship packages and media accreditation for Agentic Day Miami, May 4, 2026.",
    url: "/partners",
    type: "website",
    images: [
      {
        url: "/og-image-partners.png",
        width: 1200,
        height: 630,
        alt: "Agentic Day Partners — Position your brand at the forefront of AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Agentic Day Miami",
    description:
      "Sponsorship and media partnership opportunities for Agentic Day Miami.",
  },
};

export default function PartnersPage() {
  redirect("/");
}
