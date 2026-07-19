"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

const wins = [
  { src: "/images/win1_pullups.jpg", width: 1145, height: 1140, alt: "Community member hitting a pull-up milestone" },
  { src: "/images/win2_community_entrepreneur.jpg", width: 590, height: 961, alt: "Community member and entrepreneur celebrating a win" },
  { src: "/images/win3_moksh_whoop.jpg", width: 728, height: 1140, alt: "Moksh's Whoop recovery milestone" },
  { src: "/images/win4_prashant_10pm.jpg", width: 734, height: 1101, alt: "Prashant training at 10pm" },
  { src: "/images/win5_tapan_whoop.jpg", width: 1179, height: 1009, alt: "Tapan's Whoop recovery milestone" },
  { src: "/images/win6_aayush_weight.jpg", width: 1179, height: 721, alt: "Aayush's weight-loss milestone" },
  { src: "/images/win7_soham_family.jpg", width: 881, height: 1101, alt: "Soham celebrating with family" },
];

const SWIPE_THRESHOLD = 60;

function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const win = wins[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + wins.length) % wins.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % wins.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onClose, onNavigate]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      onNavigate((index - 1 + wins.length) % wins.length);
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      onNavigate((index + 1) % wins.length);
    }
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Community win image viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-10 h-10 flex items-center justify-center border border-foreground/30 bg-background/70 text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + wins.length) % wins.length);
        }}
        aria-label="Previous image"
        className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center border border-foreground/30 bg-background/70 text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        ←
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % wins.length);
        }}
        aria-label="Next image"
        className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center border border-foreground/30 bg-background/70 text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        →
      </button>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={win.src}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative"
          style={{ maxHeight: "85vh", maxWidth: "90vw" }}
          onClick={(e) => e.stopPropagation()}
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
        >
          <Image
            src={win.src}
            width={win.width}
            height={win.height}
            alt={win.alt}
            sizes="90vw"
            priority
            className="block w-auto h-auto max-h-[85vh] max-w-[90vw] select-none"
          />
        </motion.div>
      </AnimatePresence>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-foreground/60 tracking-[0.08em]">
        {index + 1} / {wins.length}
      </p>
    </motion.div>
  );
}

export default function CommunityWins() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="container-px py-24 md:py-32 border-t border-foreground/10">
      <SectionHeading
        eyebrow="Real Members. Real Momentum."
        title="Community Wins"
        align="center"
      />
      <p className="mt-4 text-center text-muted max-w-xl mx-auto">
        Every day, someone in the Peakform community hits a milestone.
      </p>

      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-6xl mx-auto">
        {wins.map((win, i) => (
          <FadeUp key={win.src} delay={i * 0.05} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View community win image ${i + 1}`}
              className="group relative block w-full overflow-hidden border border-foreground/15 bg-surface cursor-pointer transition-all duration-300 hover:border-accent-bright/60 hover:shadow-[0_0_32px_-10px_rgba(108,155,210,0.55)]"
            >
              <Image
                src={win.src}
                width={win.width}
                height={win.height}
                alt={win.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
          </FadeUp>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={(next) => setActiveIndex(next)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
