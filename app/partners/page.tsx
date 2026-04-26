import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import PartnersHero from "@/components/PartnersHero";
import PartnersOpportunities from "@/components/PartnersOpportunities";
import PartnersExhibit from "@/components/PartnersExhibit";
import PartnersDirectory from "@/components/PartnersDirectory";

export const metadata: Metadata = {
  title: "Partners | Agentic Day Miami",
  description:
    "Position your brand at the forefront of the Agentic Infrastructure Economy. Sponsorship, media, and ecosystem partnership opportunities for Agentic Day Miami.",
};

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <PartnersHero />
      <PartnersOpportunities />
      <PartnersExhibit />
      <PartnersDirectory />
      <Footer />
      <RevealOnScroll />
    </>
  );
}
