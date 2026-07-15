"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "./CTAButton";
import FadeUp from "./FadeUp";

const HEADLINE: { text: string; accent?: boolean }[] = [
  { text: "I" },
  { text: "help" },
  { text: "the" },
  { text: "top" },
  { text: "0.1%", accent: true },
  { text: "of" },
  { text: "entrepreneurs" },
  { text: "get" },
  { text: "to" },
  { text: "peak", accent: true },
  { text: "mental" },
  { text: "&" },
  { text: "physical" },
  { text: "form" },
];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const headlineClass =
    "font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.03em] max-w-4xl";
  const accentClass = "text-accent-bright highlight-shadow";

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end">
      <Image
        src="/images/founder-hero-v2.jpg"
        alt="Dhanil Shah, founder of Peakform"
        fill
        priority
        className="object-cover max-md:scale-[1.2] max-md:origin-bottom md:object-[50%_20%]"
      />

      {/* Legibility scrim between the image and the text content */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,11,0.75) 0%, rgba(10,10,11,0.5) 40%, rgba(10,10,11,0.3) 100%)",
        }}
      />

      {reduceMotion ? (
        <div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[34rem] w-[54rem] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none"
        />
      ) : (
        <motion.div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[34rem] w-[54rem] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none will-change-transform"
          animate={{
            x: [0, 70, 10, -50, 0],
            y: [0, -60, 25, -30, 0],
            scale: [1, 1.07, 0.97, 1.05, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative z-10 container-px w-full pb-16 md:pb-24 pt-40">
        <FadeUp>
          <p className="mb-5 text-xs md:text-sm font-medium uppercase tracking-[0.08em] text-accent-bright">
            1-On-1 Coaching For Founders
          </p>
        </FadeUp>

        {reduceMotion ? (
          <h1 className={headlineClass}>
            {HEADLINE.map((word, i) => (
              <span key={i} className={word.accent ? accentClass : undefined}>
                {word.text}{" "}
              </span>
            ))}
          </h1>
        ) : (
          <motion.h1
            className={headlineClass}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {HEADLINE.map((word, i) => (
              <span key={i}>
                <motion.span
                  variants={wordVariants}
                  className={`inline-block will-change-transform ${
                    word.accent ? accentClass : ""
                  }`}
                >
                  {word.text}
                </motion.span>{" "}
              </span>
            ))}
          </motion.h1>
        )}

        <FadeUp delay={0.45}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted text-balance">
            Most founders build the company and let the body slide. Peak Form
            fixes that — a data-driven system engineered around your calendar,
            built for decades of output.
          </p>
        </FadeUp>
        <FadeUp delay={0.55}>
          <p className="mt-5 text-sm font-medium text-foreground/70">
            <span className="text-accent-bright">20+</span> founders coached
            <span className="mx-2 text-foreground/30">·</span>
            <span className="text-accent-bright">4</span> countries
            <span className="mx-2 text-foreground/30">·</span>
            <span className="text-accent-bright">4 hrs</span>/week protocol
          </p>
        </FadeUp>
        <FadeUp delay={0.7}>
          <div className="mt-10">
            <CTAButton
              href="#book"
              breathing
              wrapperClassName="block sm:inline-block"
              className="w-full sm:w-auto text-center"
            >
              Book Your Call
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
