import Image from "next/image";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

const phases = [
  {
    number: "01",
    label: "Month 1",
    title: "Diagnose and build the system",
    body: "We diagnose what's actually holding you back, then build your training and nutrition plan around your calendar. The “am I doing this right” load disappears — you get a system, not a guess.",
  },
  {
    number: "02",
    label: "Ongoing",
    title: "Consistency, not motivation",
    body: "Weekly check-ins. A personal fitness dashboard. Direct WhatsApp access. Consistency is the compounding variable — it separates founders who get results from founders who just have a plan.",
  },
  {
    number: "03",
    label: "Month 3",
    title: "Athletic endeavor and the Longevity OS",
    body: "Now we chase a defined athletic goal on top of the Longevity OS: reverse pyramid training, Whoop-tracked recovery, 4 hours a week. Built to compound for decades, not 12 weeks.",
  },
  {
    number: "04",
    label: "Month 4",
    title: "Peak performance",
    body: "Everything compounds — body, mind, and a community of founders holding the same standard you are.",
  },
];

export default function Protocol() {
  return (
    <section id="protocol" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <SectionHeading eyebrow="The Peak Form Protocol" title="The System" />

      <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <FadeUp delay={0.1}>
          <div className="relative grid grid-cols-2 gap-4 lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] mt-8">
              <Image
                src="/images/founder-gym-1.jpg"
                alt="Dhanil Shah training"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/founder-gym-3.jpg"
                alt="Dhanil Shah training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-5">
          {phases.map((phase, i) => (
            <FadeUp key={phase.number} delay={i * 0.1}>
              <div className="flex gap-6 border border-foreground/10 bg-surface p-6 md:p-8 transition-all duration-300 hover:border-foreground/25 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-12px_rgba(59,90,135,0.5)]">
                <span className="font-display font-bold text-3xl md:text-4xl text-accent-bright shrink-0">
                  {phase.number}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/60">
                    {phase.label}
                  </p>
                  <h3 className="mt-2 font-display font-bold text-xl md:text-2xl tracking-[-0.01em] leading-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed max-w-lg">
                    {phase.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
