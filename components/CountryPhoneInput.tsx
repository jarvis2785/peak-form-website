"use client";

import { useEffect, useRef, useState } from "react";
import { countryCodes, isoToFlagEmoji, type Country } from "@/lib/countryCodes";

const DEFAULT_COUNTRY: Country =
  countryCodes.find((c) => c.code === "IN") ?? countryCodes[0];

const fieldClass =
  "w-full bg-transparent border border-foreground/20 focus:border-accent outline-none px-4 py-3 text-sm placeholder:text-foreground/40 transition-colors";

export default function CountryPhoneInput({
  phone,
  onPhoneChange,
  onCountryChange,
}: {
  phone: string;
  onPhoneChange: (value: string) => void;
  onCountryChange: (dialCode: string) => void;
}) {
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Report the default selection to the parent on mount.
  useEffect(() => {
    onCountryChange(DEFAULT_COUNTRY.dialCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? countryCodes.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.dialCode.includes(q.startsWith("+") ? q : `+${q}`)
      )
    : countryCodes;

  const selectCountry = (c: Country) => {
    setCountry(c);
    onCountryChange(c.dialCode);
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="flex gap-3">
      <div ref={containerRef} className="relative w-1/4 min-w-[64px] shrink-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`${fieldClass} flex items-center justify-between gap-1 text-left px-2`}
        >
          <span className="truncate">
            {isoToFlagEmoji(country.code)} {country.dialCode}
          </span>
          <span className="text-foreground/40 text-[10px] shrink-0">▾</span>
        </button>

        {open && (
          <div className="absolute z-20 mt-1 left-0 w-[280px] max-w-[85vw] border border-foreground/20 bg-background shadow-xl">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code"
              className="w-full bg-transparent border-b border-foreground/20 outline-none px-4 py-3 text-sm placeholder:text-foreground/40"
            />
            <ul role="listbox" className="max-h-56 overflow-y-auto">
              {filtered.length === 0 && (
                <li className="px-4 py-3 text-sm text-foreground/40">
                  No matches
                </li>
              )}
              {filtered.map((c) => (
                <li key={c.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={c.code === country.code}
                    onClick={() => selectCountry(c)}
                    className="w-full flex items-center gap-3 text-left px-4 py-2.5 text-sm hover:bg-accent/10 transition-colors"
                  >
                    <span>{isoToFlagEmoji(c.code)}</span>
                    <span className="flex-1 truncate">{c.name}</span>
                    <span className="text-foreground/50">{c.dialCode}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <input
        type="tel"
        required
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        className={`${fieldClass} flex-1`}
      />
    </div>
  );
}
