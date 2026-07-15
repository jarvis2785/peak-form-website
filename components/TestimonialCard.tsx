"use client";

import Image from "next/image";
import { useState } from "react";
import TiltCard from "./TiltCard";

export type Testimonial = {
  photo?: string;
  name: string;
  credential: string;
  quote: string;
  highlights?: string[];
  expanded?: string;
  instagramUrl?: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderQuote(quote: string, highlights: string[] = []) {
  if (highlights.length === 0) return quote;
  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "g");
  return quote.split(pattern).map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="text-accent-bright highlight-shadow">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [open, setOpen] = useState(false);
  const { photo, name, credential, quote, highlights, expanded, instagramUrl } = testimonial;
  const expandable = Boolean(expanded);

  return (
    <TiltCard>
      <div className="border border-foreground/15 bg-surface flex flex-col transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-12px_rgba(59,90,135,0.5)]">
      {photo && (
        <div className="relative aspect-[4/5] w-full">
          <Image src={photo} alt={name} fill className="object-cover" />
        </div>
      )}
      <div className="p-7 md:p-9 flex flex-col grow">
        <p className="font-display text-xl md:text-2xl leading-snug uppercase">
          &ldquo;{renderQuote(quote, highlights)}&rdquo;
        </p>
        <div className="mt-6">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-foreground/70 mt-1">{credential}</p>
        </div>

        {expandable && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-6 text-xs uppercase tracking-[0.2em] text-accent-bright hover:text-foreground transition-colors self-start"
              aria-expanded={open}
            >
              {open ? "Close Story" : "Read Full Story"}
            </button>
            {open && (
              <div className="mt-4 border-t border-foreground/10 pt-4">
                <p className="text-sm text-muted leading-relaxed">
                  {expanded}
                </p>
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs text-accent-bright hover:text-foreground transition-colors"
                  >
                    View on Instagram →
                  </a>
                )}
              </div>
            )}
          </>
        )}
        {!expandable && instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 self-start text-xs text-accent-bright hover:text-foreground transition-colors"
          >
            View on Instagram →
          </a>
        )}
      </div>
      </div>
    </TiltCard>
  );
}
