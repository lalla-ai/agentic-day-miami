import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partners | Agentic Day Miami",
  description: "Our sponsors, community partners, and media partners for Agentic Day Miami — May 4, 2026.",
};

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "80px" }}>
        <Partners />
      </main>
      <Footer />
    </>
  );
}
