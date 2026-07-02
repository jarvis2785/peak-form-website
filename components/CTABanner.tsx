import CTAButton from "./CTAButton";
import FadeUp from "./FadeUp";

export default function CTABanner({ heading }: { heading: string }) {
  return (
    <section className="border-t border-foreground/10 bg-accent/10">
      <div className="container-px py-20 md:py-24 flex flex-col items-center text-center gap-8">
        <FadeUp>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] max-w-3xl">
            {heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <CTAButton href="#book">Book Your Call</CTAButton>
        </FadeUp>
      </div>
    </section>
  );
}
