"use client";

import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import ContinueButton from "./ContinueButton";

const UNLOCK_SECONDS = 8;

const YOUTUBE_ID = "gntmsPZjoHg";
const THUMBNAIL_SRC = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

export default function FounderVideo({ onContinue }: { onContinue: () => void }) {
  const [secondsLeft, setSecondsLeft] = useState(UNLOCK_SECONDS);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) clearInterval(interval);
        return Math.max(0, s - 1);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const unlocked = secondsLeft === 0;

  return (
    <section className="container-px pt-28 pb-24 md:pt-36 md:pb-32 min-h-[100svh] flex flex-col">
      <FadeUp>
        <SectionHeading eyebrow="Step 2" title="Watch This From Dhanil" align="center" />
      </FadeUp>

      <FadeUp delay={0.15}>
        <div className="mt-10 max-w-3xl mx-auto w-full border border-foreground/15">
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title="Watch This From Dhanil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                width="100%"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="group absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${THUMBNAIL_SRC})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
                <svg
                  viewBox="0 0 100 100"
                  className="relative w-16 h-16 md:w-20 md:h-20 mx-auto drop-shadow-lg"
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
              </button>
            )}
          </div>
        </div>
      </FadeUp>

      <div className="mt-10 text-center">
        {unlocked ? (
          <FadeUp>
            <ContinueButton onClick={onContinue} className="w-full sm:w-auto" />
          </FadeUp>
        ) : (
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/40 py-4">
            Continue unlocks in {secondsLeft}s
          </p>
        )}
      </div>
    </section>
  );
}
