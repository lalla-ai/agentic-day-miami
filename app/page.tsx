import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Marquee from "@/components/Marquee";
import Agenda from "@/components/Agenda";
import EventsSeries from "@/components/EventsSeries";
import Partners from "@/components/Partners";
import Charity from "@/components/Charity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Speakers />
      <Marquee />
      <Agenda />
      <EventsSeries />
      <Partners />
      <Charity />
      <FinalCTA />
      <Footer />
      <RevealOnScroll />
    </>
  );
}
