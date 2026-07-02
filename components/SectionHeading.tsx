export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs md:text-sm uppercase tracking-[0.3em] ${
            light ? "text-background/60" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-5xl md:text-7xl leading-[0.95] uppercase ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
