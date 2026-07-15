import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-px py-12 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <Image
        src="/images/logo-peakform.jpg"
        alt="Peakform"
        width={36}
        height={36}
        className="object-contain"
      />

      <p className="text-xs text-foreground/60 uppercase tracking-[0.2em] order-last sm:order-none">
        Peakform — Fitness Coaching for Founders
      </p>

      <div className="flex gap-6 text-xs uppercase tracking-[0.2em]">
        <Link
          href="https://instagram.com/dhanil.shah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-bright transition-colors"
        >
          @dhanil.shah
        </Link>
        <Link
          href="https://instagram.com/peakformhq"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-bright transition-colors"
        >
          @peakformhq
        </Link>
      </div>
    </footer>
  );
}
