"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/content";

export function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const DUR = 1700;
    let t0 = 0;
    let raf = 0;
    const tick = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / DUR, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 400);
    };
    raf = requestAnimationFrame(tick);
    // Hard fallback so the intro never blocks scroll if rAF is throttled.
    const fallback = window.setTimeout(() => setDone(true), 2600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [reduce]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-end bg-void"
        >
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
          <div className="shell relative pb-[clamp(2rem,6vh,5rem)]">
            <div className="flex items-end justify-between gap-6">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="eyebrow"
                >
                  Race &amp; Data Engineer
                </motion.p>
                <div className="mt-3 overflow-hidden">
                  <motion.p
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="display text-[clamp(2rem,7vw,5rem)] text-bone"
                  >
                    {profile.shortName}
                  </motion.p>
                </div>
              </div>
              <span className="display text-[clamp(2.5rem,9vw,7rem)] leading-none text-rosso">
                {String(count).padStart(3, "0")}
              </span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ ease: "linear" }}
              className="mt-5 h-px origin-left bg-rosso"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
