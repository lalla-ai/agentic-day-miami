import Nav from "@/components/Nav";
import About from "@/components/About";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "About — Agentic Day",
  description:
    "Agentic Day is the invitation-only summit series where the builders shipping agentic AI meet the capital deciding what scales. Three editions across Miami, Amsterdam, and Toronto.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Agentic Day",
    description:
      "Where the builders shipping agentic AI meet the capital deciding what scales. Three editions across markets.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 100 }}>
        <About />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
