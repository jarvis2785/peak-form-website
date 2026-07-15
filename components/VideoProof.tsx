"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const videos = [
  { id: "mMxPbexws-8", caption: "Moksh Vasant — Meteoric Boost" },
  { id: "ZqeyHPCa5-Q", caption: "Melvin — Entrepreneur" },
];

function VideoCard({ id, caption }: { id: string; caption: string }) {
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <TiltCard>
      <div className="group border border-foreground/15 bg-surface transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5 hover:shadow-[0_0_48px_-12px_rgba(59,90,135,0.6)]">
        <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%", height: 0 }}>
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${caption}`}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <span
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)`,
                }}
              />
              <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
              <span className="relative flex items-center justify-center">
                {!reduceMotion && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full border-2 border-foreground/60 pointer-events-none"
                    animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <svg
                  viewBox="0 0 100 100"
                  className="relative w-14 h-14 md:w-16 md:h-16 drop-shadow-lg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    className="fill-background/70 stroke-foreground/80 transition-colors group-hover:fill-accent"
                    strokeWidth="2"
                  />
                  <path d="M40 30 L72 50 L40 70 Z" className="fill-foreground" />
                </svg>
              </span>
            </button>
          )}
        </div>
        <p className="border-t border-foreground/10 px-5 py-4 text-xs font-medium uppercase tracking-[0.08em] text-muted">
          {caption}
        </p>
      </div>
    </TiltCard>
  );
}

export default function VideoProof() {
  return (
    <section id="proof" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <SectionHeading
        eyebrow="Proof, Not Promises"
        title="Hear It From The People In The Room"
        align="center"
      />

      <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-6 max-w-5xl mx-auto">
        {videos.map((video, i) => (
          <FadeUp key={video.id} delay={i * 0.1}>
            <VideoCard id={video.id} caption={video.caption} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
