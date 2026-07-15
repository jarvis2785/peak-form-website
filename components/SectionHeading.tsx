"use client";

import { motion, useReducedMotion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  const eyebrowClass = `mb-3 text-xs md:text-sm font-medium uppercase tracking-[0.08em] ${
    light ? "text-background/60" : "text-accent-bright"
  }`;
  const titleClass = `font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] ${
    light ? "text-background" : "text-foreground"
  }`;

  if (reduceMotion) {
    return (
      <div className={align === "center" ? "text-center" : "text-left"}>
        {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
        <h2 className={titleClass}>{title}</h2>
      </div>
    );
  }

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={eyebrowClass}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className={titleClass}
      >
        {title.split(" ").map((word, i) => (
          <span key={i}>
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>{" "}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
