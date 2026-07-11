"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import Hero from "./Hero";
import FounderVideo from "./FounderVideo";
import TestimonialCarousel from "./TestimonialCarousel";
import Protocol from "./Protocol";
import QualifierForm from "./QualifierForm";
import ContinueButton from "./ContinueButton";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import Footer from "./Footer";

const TOTAL_CHECKPOINTS = 6;

export default function Funnel() {
  const [checkpoint, setCheckpoint] = useState(1);

  const advance = () =>
    setCheckpoint((c) => Math.min(c + 1, TOTAL_CHECKPOINTS));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [checkpoint]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 container-px py-5 flex items-center justify-between bg-background/70 backdrop-blur-sm">
        <span className="font-display text-lg tracking-[0.15em] uppercase">
          Peakform
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
          {checkpoint} / {TOTAL_CHECKPOINTS}
        </span>
      </header>

      <main>
        {checkpoint === 1 && <Hero onContinue={advance} />}

        {checkpoint === 2 && <FounderVideo onContinue={advance} />}

        {checkpoint === 3 && <TestimonialCarousel onContinue={advance} />}

        {checkpoint === 4 && (
          <>
            <div className="pt-8">
              <Protocol />
            </div>
            <div className="container-px pb-24 md:pb-32 text-center">
              <ContinueButton onClick={advance} className="w-full sm:w-auto" />
            </div>
          </>
        )}

        {checkpoint === 5 && (
          <section className="container-px pt-28 pb-24 md:pt-36 md:pb-32">
            <FadeUp>
              <SectionHeading eyebrow="Next Step" title="Apply" align="center" />
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-center text-foreground/60 max-w-md mx-auto">
                Answer a few quick questions so we know how to help you.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-12 max-w-2xl mx-auto">
                <QualifierForm onSubmitted={advance} />
              </div>
            </FadeUp>
          </section>
        )}

        {checkpoint === 6 && (
          <section className="container-px pt-28 pb-24 md:pt-36 md:pb-32">
            <FadeUp>
              <SectionHeading
                eyebrow="Final Step"
                title="Book Your Call"
                align="center"
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-center text-foreground/60 max-w-md mx-auto">
                15 minutes. We&apos;ll figure out if this is the right fit.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-12 max-w-4xl mx-auto bg-foreground">
                <InlineWidget
                  url="https://calendly.com/peakform-dhanil/1-on-1-with-dhanil"
                  styles={{ height: "700px", minWidth: "320px" }}
                />
              </div>
            </FadeUp>
          </section>
        )}
      </main>

      {checkpoint === TOTAL_CHECKPOINTS && <Footer />}
    </>
  );
}
