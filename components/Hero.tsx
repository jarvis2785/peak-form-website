import Image from "next/image";
import ContinueButton from "./ContinueButton";
import FadeUp from "./FadeUp";

export default function Hero({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end">
      <Image
        src="/images/founder-hero-v2.jpg"
        alt="Dhanil Shah, founder of Peakform"
        fill
        priority
        className="object-cover max-md:scale-[1.2] max-md:origin-bottom md:object-[50%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />

      <div className="relative z-10 container-px w-full pb-16 md:pb-24 pt-40">
        <FadeUp>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.92] uppercase max-w-4xl text-balance">
            I help entrepreneurs achieve their peak physical and mental form
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80 text-balance">
            Coached founders across 4 countries to get jacked and improve
            longevity while building 5-figure USD businesses
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10">
            <ContinueButton onClick={onContinue} className="w-full sm:w-auto" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
