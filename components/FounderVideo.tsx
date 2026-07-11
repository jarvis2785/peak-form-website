"use client";

import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import ContinueButton from "./ContinueButton";

const UNLOCK_SECONDS = 8;

export default function FounderVideo({ onContinue }: { onContinue: () => void }) {
  const [secondsLeft, setSecondsLeft] = useState(UNLOCK_SECONDS);

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
        <div className="mt-10 max-w-md mx-auto w-full border border-foreground/15">
          <video
            src="/videos/founder-video.mp4"
            autoPlay
            muted
            playsInline
            loop={false}
            controls
            className="w-full block"
          />
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
