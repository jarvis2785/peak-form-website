import Image from "next/image";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

const phases = [
  {
    number: "01",
    label: "Month 1",
    title: "Diagnose and build the system",
    body: "We analyze your current state and identify what's actually holding you back. From there we build a custom training plan (Heavy app) and nutrition plan (Healthify Me) around your schedule. This is where the mental load of “am I doing this right” gets removed for good — you get a system, not a guess.",
  },
  {
    number: "02",
    label: "Ongoing",
    title: "Consistency, not motivation",
    body: "Weekly check-ins, a personal Notion fitness dashboard, and 1-on-1 WhatsApp access keep you accountable between sessions. Consistency is the compounding variable — it's what separates founders who get results from founders who just have a plan.",
  },
  {
    number: "03",
    label: "Month 3",
    title: "Athletic endeavor and the Longevity OS",
    body: "Focus shifts to a defined athletic goal, layered on top of the Longevity OS: reverse pyramid training, Whoop-tracked recovery, and roughly 4 hours a week — built to compound for decades, not just the next 12 weeks.",
  },
  {
    number: "04",
    label: "Month 4",
    title: "Peak performance",
    body: "Everything comes together — physically, mentally, and inside a community of like-minded founders holding the same standard you are.",
  },
];

export default function Protocol() {
  return (
    <section id="protocol" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <FadeUp>
        <SectionHeading eyebrow="How It Works" title="The System" />
      </FadeUp>

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

        <div className="flex flex-col divide-y divide-foreground/10">
          {phases.map((phase, i) => (
            <FadeUp key={phase.number} delay={i * 0.1} className="py-8 first:pt-0">
              <div className="flex gap-6">
                <span className="font-display text-3xl md:text-4xl text-accent shrink-0">
                  {phase.number}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                    {phase.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl uppercase leading-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed max-w-lg">
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
