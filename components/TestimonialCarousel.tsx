"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import CountUp from "./CountUp";
import { testimonials } from "./Results";

const slideTransition = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
};

const arrowClass =
  "w-12 h-12 shrink-0 border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-colors flex items-center justify-center text-xl";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section id="results" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <SectionHeading
        eyebrow="Real Clients. Real Results."
        title="Results"
        align="center"
      />

      <div className="mt-12 max-w-md mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={testimonials[index].name} {...slideTransition}>
            <TestimonialCard testimonial={testimonials[index]} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button type="button" onClick={prev} aria-label="Previous testimonial" className={arrowClass}>
            ←
          </button>
          <div className="flex items-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next testimonial" className={arrowClass}>
            →
          </button>
        </div>

        <p className="mt-8 text-center text-xs font-medium text-foreground/70 uppercase tracking-[0.08em]">
          <span className="text-accent-bright">
            <CountUp to={20} suffix="+" />
          </span>{" "}
          founders coached — these are a few of their stories
        </p>
      </div>
    </section>
  );
}
