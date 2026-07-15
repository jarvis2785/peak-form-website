"use client";

import Link from "next/link";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

const MotionLink = motion(Link);

const MAX_MAGNET_PX = 9;

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  wrapperClassName = "inline-block",
  target,
  breathing = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  wrapperClassName?: string;
  target?: string;
  breathing?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (reduceMotion || !linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-MAX_MAGNET_PX, Math.min(MAX_MAGNET_PX, dx * 0.12)));
    y.set(Math.max(-MAX_MAGNET_PX, Math.min(MAX_MAGNET_PX, dy * 0.3)));
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-block px-9 py-4 md:px-10 md:py-5 text-sm md:text-base tracking-[0.15em] uppercase font-sans font-semibold transition-[background-color,color,border-color,box-shadow] duration-300";
  const styles =
    variant === "primary"
      ? "bg-accent text-foreground shadow-[0_0_36px_-8px_rgba(59,90,135,0.65)] hover:bg-foreground hover:text-background hover:shadow-[0_0_44px_-8px_rgba(59,90,135,0.5)]"
      : "border border-foreground/40 text-foreground hover:border-foreground";

  return (
    <span
      className={`${wrapperClassName} sm:p-7 sm:-m-7`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMagnet}
    >
      <MotionLink
        ref={linkRef}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        style={reduceMotion ? undefined : { x, y }}
        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        className={`${base} ${styles} ${className}`}
      >
        {breathing && !reduceMotion && (
          <motion.span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "0 0 52px -2px rgba(59,90,135,0.75)" }}
            animate={{ opacity: [0.3, 0.85, 0.3], scale: [0.98, 1.04, 0.98] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <span className="relative">{children}</span>
      </MotionLink>
    </span>
  );
}
