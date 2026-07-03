"use client";

import { InlineWidget } from "react-calendly";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import QualifierForm from "./QualifierForm";

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

      <FadeUp delay={0.2}>
        <div className="mt-12 max-w-2xl mx-auto">
          <QualifierForm />
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="mt-24 text-center text-xs uppercase tracking-[0.2em] text-foreground/40">
          Prefer to skip ahead? Book directly below.
        </p>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="mt-6 max-w-4xl mx-auto bg-foreground">
          <InlineWidget
            url="https://calendly.com/peakform-dhanil/1-on-1-with-dhanil"
            styles={{ height: "700px", minWidth: "320px" }}
          />
        </div>
      </FadeUp>
    </section>
  );
}
