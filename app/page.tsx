import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ReliveVideo from "@/components/ReliveVideo";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Marquee from "@/components/Marquee";
import EventsSeries from "@/components/EventsSeries";
import JoinCTA from "@/components/JoinCTA";
import Charity from "@/components/Charity";
import FinalCTA from "@/components/FinalCTA";
import AttendedBy from "@/components/AttendedBy";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ReliveVideo />
      <About />
      <Speakers />
      <Marquee />
      <EventsSeries />
      <JoinCTA />
      <Charity />
      <FinalCTA />
      <AttendedBy />
      <Footer />
      <RevealOnScroll />
    </>
  );
}
