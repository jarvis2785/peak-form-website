import FadeUp from "./FadeUp";

const stats = [
  { value: "20+", label: "Founders Coached" },
  { value: "4", label: "Countries" },
  { value: "12.9K", label: "Followers" },
  { value: "4-Month", label: "Protocol" },
];

export default function StatsBar() {
  return (
    <section className="border-t border-foreground/10 bg-foreground text-background">
      <div className="container-px grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-background/15">
        {stats.map((stat, i) => (
          <FadeUp key={stat.label} delay={i * 0.08} className="py-12 px-4 text-center">
            <p className="font-display text-4xl md:text-5xl uppercase">{stat.value}</p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-background/60">
              {stat.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
