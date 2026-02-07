import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../components/PrimaryButton";
import Typewriter2 from "../components/Typewriter2";

export default function LetterPage({ onNext, onBack }) {
  const [reveal, setReveal] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 sm:px-6">
      {/* Wrapper responsive: full di HP, lebih lebar di desktop */}
      <div className="w-full max-w-[92vw] sm:max-w-[680px] md:max-w-[860px]">
        {/* Card buku */}
        <div className="relative overflow-hidden rounded-3xl bg-[#FFFDF8] shadow-[0_30px_80px_rgba(0,0,0,0.18)] isolate">
          {/* Reveal anim (anti bug) */}
          <motion.div
            className="
              relative notebook-page text-left
              pt-10 pb-24
              pr-6 sm:pr-10 md:pr-14
              pl-[88px] sm:pl-[120px] md:pl-[140px]
            "
            initial={{ clipPath: "inset(0 0 0 100% round 24px)" }}
            animate={{
              clipPath: reveal
                ? "inset(0 0 0 0 round 24px)"
                : "inset(0 0 0 100% round 24px)",
            }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
            onAnimationComplete={() => setStep((s) => (s === 0 ? 1 : s))}
          >
            {/* Header */}
            <div className="mb-5 sm:mb-6">
              <div className="text-xs sm:text-sm text-slate-500">
                February 14
              </div>

              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                My Love <span className="opacity-70">🤍</span>
              </h3>
            </div>

            {/* Isi — feel nulis di buku */}
            <div className="space-y-4 sm:space-y-5 text-slate-700 leading-[2.05] text-[14.5px] sm:text-[15.5px] md:text-[16.5px]">
              {step >= 1 && (
                <Typewriter2
                  text="Happy Valentine’s Day. I just want you to know how grateful I am to have you."
                  speed={18}
                  startDelay={150}
                  className="block"
                  onDone={() => setStep(2)}
                />
              )}

              {step >= 2 && (
                <Typewriter2
                  text="You make ordinary days feel special, and you make my heart feel safe."
                  speed={18}
                  startDelay={120}
                  className="block"
                  onDone={() => setStep(3)}
                />
              )}

              {step >= 3 && (
                <Typewriter2
                  text={"Always yours,\n— Me"}
                  speed={20}
                  startDelay={120}
                  className="block whitespace-pre-line font-semibold text-primary"
                  cursor={false}
                  onDone={() => setStep(4)}
                />
              )}
            </div>
          </motion.div>

          {/* Binder holes responsive */}
          <div className="pointer-events-none absolute left-3 sm:left-4 top-10 bottom-10 z-20 w-4 flex flex-col items-center justify-between opacity-35">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-slate-400 bg-white" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-slate-400 bg-white" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-slate-400 bg-white" />
          </div>

          {/* Buttons bottom */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {onBack && (
              <PrimaryButton onClick={onBack} className="px-7 sm:px-8">
                Back
              </PrimaryButton>
            )}
            {onNext && (
              <PrimaryButton
                onClick={onNext}
                className="px-9 sm:px-10"
                disabled={step < 4}
              >
                Next
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
