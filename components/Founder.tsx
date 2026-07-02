import Image from "next/image";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";

export default function Founder() {
  return (
    <section className="container-px py-24 md:py-32 border-t border-foreground/10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeUp>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/founder-gym-2.jpg"
                alt="Dhanil Shah"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] mt-8">
              <Image
                src="/images/founder-gym-4.jpg"
                alt="Dhanil Shah"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <SectionHeading eyebrow="The Coach" title="Who's Coaching You" />
          <div className="mt-8 space-y-5 text-foreground/70 leading-relaxed max-w-lg">
            <p>
              Dhanil Shah has coached founders and entrepreneurs across 4
              countries — helping them build the kind of physical and mental
              form that holds up under the weight of running a company.
            </p>
            <p>
              Most of the founders who come to Dhanil are grinding 12-hour
              days, building something incredible — and falling apart
              physically while they do it. Sleep is gone, training is
              inconsistent, and the body keeps sending the bill.
            </p>
            <p>
              Peakform exists to fix that without asking you to choose
              between your business and your body. Not with more willpower —
              with a system built specifically for people who don&apos;t have
              spare hours to figure it out themselves.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
