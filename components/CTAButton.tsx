import Link from "next/link";
import type { ReactNode } from "react";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
}) {
  const base =
    "inline-block px-8 py-4 text-sm md:text-base tracking-[0.15em] uppercase font-sans font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-accent text-foreground hover:bg-foreground hover:text-background"
      : "border border-foreground/40 text-foreground hover:border-foreground";

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
