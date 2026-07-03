"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountryPhoneInput from "./CountryPhoneInput";

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
  "w-full text-left px-6 py-5 border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-colors uppercase tracking-wide text-sm md:text-base";

const optionClassSelected =
  "w-full text-left px-6 py-5 border border-accent bg-accent/10 transition-colors uppercase tracking-wide text-sm md:text-base";

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
  };

  if (submitted) {
    return (
      <div className="border border-foreground/15 bg-foreground/[0.02] p-10 md:p-16 text-center">
        <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
          Confirmed
        </p>
        <h3 className="font-display text-3xl md:text-5xl uppercase leading-[0.95]">
          Application Received
        </h3>
        <p className="mt-6 text-foreground/70 max-w-md mx-auto leading-relaxed">
          A member of Dhanil&apos;s team will reach out within 24 hours to
          confirm your call.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-foreground/15 bg-foreground/[0.02] p-8 md:p-12">
      <p className="text-center text-sm text-foreground/60 mb-8">
        Takes 60 seconds. We only work with founders serious about this.
      </p>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Step {step} of 3
          </p>
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
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
            <h3 className="font-display text-2xl md:text-3xl uppercase mb-6 leading-tight">
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
            <h3 className="font-display text-2xl md:text-3xl uppercase mb-6 leading-tight">
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
            <h3 className="font-display text-2xl md:text-3xl uppercase mb-6 leading-tight">
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
                className="w-full mt-6 px-8 py-4 text-sm md:text-base tracking-[0.15em] uppercase font-medium transition-colors bg-accent text-foreground hover:bg-foreground hover:text-background disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:hover:text-foreground"
              >
                Apply Now
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
