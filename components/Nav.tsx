"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CTAButton from "./CTAButton";

const links = [
  { label: "The System", href: "#protocol" },
  { label: "Results", href: "#results" },
  { label: "Who's Coaching You", href: "#founder" },
  { label: "Book a Call", href: "#book" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleLinkClick = () => {
    // Clear the scroll lock synchronously so the browser's native hash
    // navigation (and the site's global smooth-scroll) isn't blocked by
    // overflow:hidden still being in effect for this click.
    document.body.style.overflow = "";
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 container-px py-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex items-center gap-3 group"
        >
          <span className="flex flex-col gap-[5px] w-6">
            <span className="block h-[2px] w-full bg-foreground transition-colors group-hover:bg-accent" />
            <span className="block h-[2px] w-full bg-foreground transition-colors group-hover:bg-accent" />
            <span className="block h-[2px] w-4 bg-foreground transition-colors group-hover:bg-accent" />
          </span>
          <span className="font-display text-lg tracking-[0.15em] uppercase">
            Peakform
          </span>
        </button>

        <CTAButton
          href="#book"
          variant="secondary"
          className="hidden sm:inline-block !px-6 !py-3 text-xs"
        >
          Book Your Call
        </CTAButton>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="container-px py-6 flex items-center justify-between">
              <span className="font-display text-lg tracking-[0.15em] uppercase">
                Peakform
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative w-6 h-6"
              >
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground rotate-45" />
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground -rotate-45" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center container-px gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-4xl sm:text-6xl uppercase leading-tight text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
