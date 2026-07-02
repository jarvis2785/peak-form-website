import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LoomSection from "@/components/LoomSection";
import StatsBar from "@/components/StatsBar";
import Protocol from "@/components/Protocol";
import CTABanner from "@/components/CTABanner";
import Results from "@/components/Results";
import Founder from "@/components/Founder";
import ForNotFor from "@/components/ForNotFor";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LoomSection />
        <StatsBar />
        <Protocol />
        <CTABanner heading="Ready to build the body that matches your ambition" />
        <Results />
        <Founder />
        <ForNotFor />
        <BookingSection />
        <CTABanner heading="Fifteen minutes to find out if this is the right fit" />
      </main>
      <Footer />
    </>
  );
}
