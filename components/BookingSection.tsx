"use client";

import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import QualifierForm from "./QualifierForm";

export default function BookingSection() {
  return (
    <section id="book" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <SectionHeading eyebrow="Next Step" title="Book Your Call" align="center" />
      <FadeUp delay={0.1}>
        <p className="mt-6 text-center text-muted max-w-md mx-auto">
          15 minutes. We&apos;ll figure out if this is the right fit.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-12 max-w-2xl mx-auto">
          <QualifierForm />
        </div>
      </FadeUp>
    </section>
  );
}
