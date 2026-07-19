import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import VideoProof from "@/components/VideoProof";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CommunityWins from "@/components/CommunityWins";
import Protocol from "@/components/Protocol";
import ForNotFor from "@/components/ForNotFor";
import CTAButton from "@/components/CTAButton";
import FadeUp from "@/components/FadeUp";
import BookingSection from "@/components/BookingSection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VideoProof />
        <TestimonialCarousel />
        <CommunityWins />
        <Protocol />
        <ForNotFor />

        <section className="container-px py-16 md:py-20 border-t border-foreground/10">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-center">
              <p className="text-lg md:text-xl text-muted">
                Ready to find out if you qualify?
              </p>
              <CTAButton href="#book">Book Your Call</CTAButton>
            </div>
          </FadeUp>
        </section>

        <BookingSection />
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
