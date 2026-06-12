import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Partners — Agentic Day",
  description: "Sponsors, community partners, and media partners powering the Agentic Day summit series.",
};

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 40 }}>
        <Partners />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
