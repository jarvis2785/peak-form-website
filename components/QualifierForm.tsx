"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import CountryPhoneInput from "./CountryPhoneInput";

const CALENDLY_URL = "https://calendly.com/peakform-dhanil/1-on-1-with-dhanil";

const GOAL_OPTIONS = [
  "Build Muscle Mass",
  "Lose Fat & Get Lean",
  "Build Athletic Performance",
  "Improve Longevity & Energy",
];

const TIMING_OPTIONS = ["This Week", "Next Week", "This Month"];

const BUDGET_OPTIONS = ["$1,000 - $1,500", "$1,500 - $2,000", "$2,000+"];

type Answers = {
  goal: string;
  timing: string;
  budget: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
};

const initialAnswers: Answers = {
  goal: "",
  timing: "",
  budget: "",
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
};

const optionClass =
  "w-full text-left px-6 py-5 border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-colors font-medium text-sm md:text-base";

const optionClassSelected =
  "w-full text-left px-6 py-5 border border-accent bg-accent/10 transition-colors font-medium text-sm md:text-base";

const inputClass =
  "w-full bg-transparent border border-foreground/20 focus:border-accent outline-none px-4 py-3 text-sm placeholder:text-foreground/40 transition-colors";

const stepTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
};

export default function QualifierForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showCalendly ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCalendly]);

  const selectAndAdvance = (field: "goal" | "timing", value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { ...answers, submittedAt: new Date().toISOString() };

    // WEBHOOK INTEGRATION POINT - connect to Make.com here
    fetch("https://hook.us2.make.com/a91dnsl35k4fcjnklgh9x6u1w7ymnvxq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error("Qualifier form webhook failed:", err);
    });

    setSubmitted(true);
    setShowCalendly(true);
  };

  return (
    <>
      {submitted ? (
        <div className="border border-foreground/15 bg-foreground/[0.02] p-10 md:p-16 text-center">
          <p className="mb-3 text-xs md:text-sm font-medium uppercase tracking-[0.08em] text-accent-bright">
            Confirmed
          </p>
          <h3 className="font-display font-bold text-2xl md:text-4xl tracking-[-0.02em] leading-[1.05]">
            Application Received
          </h3>
          <p className="mt-6 text-muted max-w-md mx-auto leading-relaxed">
            A member of Dhanil&apos;s team will reach out within 24 hours to
            confirm your call.
          </p>
        </div>
      ) : (
        <div className="border border-foreground/15 bg-foreground/[0.02] p-8 md:p-12">
          <p className="text-center text-sm text-muted mb-8">
            Takes 60 seconds. We only work with founders serious about this.
          </p>

          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent-bright">
                Step {step} of 3
              </p>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/50 hover:text-foreground transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
            <div className="h-[2px] w-full bg-foreground/10">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" {...stepTransition}>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-[-0.01em] mb-6 leading-tight">
                  What&apos;s your fitness goal?
                </h3>
                <div className="grid gap-3">
                  {GOAL_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => selectAndAdvance("goal", opt)}
                      className={
                        answers.goal === opt ? optionClassSelected : optionClass
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...stepTransition}>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-[-0.01em] mb-6 leading-tight">
                  When do you want to get started?
                </h3>
                <div className="grid gap-3">
                  {TIMING_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => selectAndAdvance("timing", opt)}
                      className={
                        answers.timing === opt ? optionClassSelected : optionClass
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" {...stepTransition}>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-[-0.01em] mb-6 leading-tight">
                  If we believe you&apos;re a good fit, what would you be
                  comfortable investing to get to your dream physique?
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-3 mb-8">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, budget: opt }))
                        }
                        className={
                          answers.budget === opt
                            ? optionClassSelected
                            : optionClass
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={answers.name}
                      onChange={(e) =>
                        setAnswers((p) => ({ ...p, name: e.target.value }))
                      }
                      className={inputClass}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={answers.email}
                      onChange={(e) =>
                        setAnswers((p) => ({ ...p, email: e.target.value }))
                      }
                      className={inputClass}
                    />
                    <CountryPhoneInput
                      phone={answers.phone}
                      onPhoneChange={(value) =>
                        setAnswers((p) => ({ ...p, phone: value }))
                      }
                      onCountryChange={(dialCode) =>
                        setAnswers((p) => ({ ...p, countryCode: dialCode }))
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!answers.budget}
                    className="w-full mt-6 px-8 py-4 text-sm md:text-base tracking-[0.08em] uppercase font-semibold transition-all duration-200 bg-accent text-foreground shadow-[0_0_36px_-8px_rgba(59,90,135,0.65)] hover:bg-foreground hover:text-background hover:shadow-[0_0_44px_-8px_rgba(59,90,135,0.5)] hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:hover:text-foreground disabled:hover:scale-100 disabled:shadow-none"
                  >
                    Check Call Availability
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {showCalendly && (
        <div
          className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowCalendly(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowCalendly(false)}
              aria-label="Close booking widget"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-background text-foreground text-lg leading-none hover:bg-accent transition-colors"
            >
              ×
            </button>
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: "700px", minWidth: "320px" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
