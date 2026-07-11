"use client";

import type { ReactNode } from "react";

export default function ContinueButton({
  onClick,
  children = "Continue",
  className = "",
}: {
  onClick: () => void;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-block px-10 py-4 text-sm md:text-base tracking-[0.15em] uppercase font-sans font-medium transition-colors duration-200 bg-accent text-foreground hover:bg-foreground hover:text-background ${className}`}
    >
      {children}
    </button>
  );
}
