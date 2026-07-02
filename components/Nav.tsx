import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 container-px py-6 flex items-center justify-between">
      <Image
        src="/images/logo-peakform.jpg"
        alt="Peakform"
        width={40}
        height={40}
        className="object-contain"
      />
      <CTAButton
        href="#book"
        variant="secondary"
        className="hidden sm:inline-block !px-6 !py-3 text-xs"
      >
        Book Your Call
      </CTAButton>
    </header>
  );
}
