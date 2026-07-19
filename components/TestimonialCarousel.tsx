"use client";

import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import CountUp from "./CountUp";
import FadeUp from "./FadeUp";
import { testimonials } from "./Results";

export default function TestimonialCarousel() {
  return (
    <section id="results" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <SectionHeading
        eyebrow="Real Clients. Real Results."
        title="Results"
        align="center"
      />

      <div className="mt-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </FadeUp>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium text-foreground/70 uppercase tracking-[0.08em]">
          <span className="text-accent-bright">
            <CountUp to={20} suffix="+" />
          </span>{" "}
          founders coached — these are a few of their stories
        </p>
      </div>
    </section>
  );
}
