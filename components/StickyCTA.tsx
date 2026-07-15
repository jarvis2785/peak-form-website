"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      // Show once the hero (and its own CTA) is scrolled away; hide once the
      // qualifier form section approaches, since that is the conversion point.
      const heroPassed = window.scrollY > window.innerHeight * 0.85;
      const book = document.getElementById("book");
      const bookApproaching = book
        ? book.getBoundingClientRect().top < window.innerHeight * 0.5
        : false;
      setVisible(heroPassed && !bookApproaching);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-40 bottom-0 inset-x-0 px-4 pt-10 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none sm:inset-x-auto sm:right-6 sm:bottom-6 sm:px-0 sm:pt-0 sm:pb-0 sm:bg-none"
        >
          <div className="pointer-events-auto">
            <CTAButton
              href="#book"
              wrapperClassName="block sm:inline-block"
              className="w-full sm:w-auto text-center"
            >
              Book Your Call
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
