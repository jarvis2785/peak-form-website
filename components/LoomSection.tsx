import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

export default function LoomSection() {
  return (
    <section className="container-px py-24 md:py-32 border-t border-foreground/10">
      <FadeUp>
        <SectionHeading title="Watch This Before You Book" align="center" />
      </FadeUp>
      <FadeUp delay={0.15}>
        <div className="mt-12 max-w-4xl mx-auto aspect-video relative">
          <iframe
            src="https://www.loom.com/embed/349bceeaa3714d9197dee027b0ee6566"
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            title="Peak Form Protocol walkthrough"
          />
        </div>
      </FadeUp>
      <FadeUp delay={0.25}>
        <p className="mt-8 text-center text-foreground/60 max-w-md mx-auto">
          A 4-minute walkthrough of exactly how the Peak Form Protocol works
        </p>
      </FadeUp>
    </section>
  );
}
