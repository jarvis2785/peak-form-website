"use client";

import Image from "next/image";
import { useState } from "react";

export type Testimonial = {
  photo?: string;
  name: string;
  credential: string;
  quote: string;
  expanded?: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [open, setOpen] = useState(false);
  const { photo, name, credential, quote, expanded } = testimonial;
  const expandable = Boolean(expanded);

  return (
    <div className="border border-foreground/15 bg-foreground/[0.02] flex flex-col">
      {photo && (
        <div className="relative aspect-[4/5] w-full">
          <Image src={photo} alt={name} fill className="object-cover" />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col grow">
        <p className="font-display text-xl md:text-2xl leading-snug uppercase">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-6">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-foreground/50 mt-1">{credential}</p>
        </div>

        {expandable && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-6 text-xs uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors self-start"
              aria-expanded={open}
            >
              {open ? "Close Story" : "Read Full Story"}
            </button>
            {open && (
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed border-t border-foreground/10 pt-4">
                {expanded}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
