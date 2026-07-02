"use client";

import { InlineWidget } from "react-calendly";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

export default function BookingSection() {
  return (
    <section id="book" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <FadeUp>
        <SectionHeading eyebrow="Next Step" title="Book Your Call" align="center" />
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-6 text-center text-foreground/60 max-w-md mx-auto">
          15 minutes. We&apos;ll figure out if this is the right fit.
        </p>
      </FadeUp>

      {/* QUALIFYING QUESTIONS GO HERE - to be added before Calendly embed */}

      <FadeUp delay={0.2}>
        <div className="mt-12 max-w-4xl mx-auto bg-foreground">
          <InlineWidget
            url="https://calendly.com/peakform-dhanil/1-on-1-with-dhanil"
            styles={{ height: "700px", minWidth: "320px" }}
          />
        </div>
      </FadeUp>
    </section>
  );
}
