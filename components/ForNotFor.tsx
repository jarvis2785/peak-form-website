import FadeUp from "./FadeUp";

const forList = [
  "Founders serious about scaling without sacrificing their body",
  "People who want systems, not willpower",
  "Entrepreneurs ready to treat their health like a business input",
  "People who can commit 4 hours a week for 4 months",
];

const notForList = [
  "People looking for a quick fix",
  "People unwilling to follow structure",
  "Anyone not ready to be honest about where they actually are",
  "People who want a plan, not a coach",
];

export default function ForNotFor() {
  return (
    <section className="container-px py-24 md:py-32 border-t border-foreground/10">
      <div className="grid md:grid-cols-2">
        <FadeUp className="border-b md:border-b-0 md:border-r border-foreground/10 pb-12 md:pb-0 md:pr-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-bright mb-6">
            This Is For
          </p>
          <ul className="space-y-5">
            {forList.map((item) => (
              <li
                key={item}
                className="text-xl md:text-2xl leading-snug font-display uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1} className="pt-12 md:pt-0 md:pl-12">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55 mb-6">
            This Is Not For
          </p>
          <ul className="space-y-5">
            {notForList.map((item) => (
              <li
                key={item}
                className="text-xl md:text-2xl leading-snug font-display uppercase text-foreground/55"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
