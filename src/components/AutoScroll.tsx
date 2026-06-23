"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLenis } from "./SmoothScroll";

/**
 * Interactive auto-scroll. Drives Lenis (or native scroll under reduced motion)
 * down the page with a live progress ring, and yields instantly to any manual
 * wheel / touch / key input.
 */
export function AutoScroll() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lenis = useLenis();
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const R = 21;
  const CIRC = 2 * Math.PI * R;
  const dashArray = useTransform(progress, (v) => `${Math.max(v, 0.001) * CIRC} ${CIRC}`);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!active) return;
    const SPEED = 120; // px/s
    const stop = () => setActive(false);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (lenis) {
      const distance = maxScroll - window.scrollY;
      if (distance <= 4) {
        setActive(false);
      } else {
        lenis.scrollTo(maxScroll, {
          duration: distance / SPEED,
          easing: (t: number) => t,
          onComplete: () => setActive(false),
        });
      }
      return () => {
        lenis.scrollTo(window.scrollY, { immediate: true, duration: 0 });
        window.removeEventListener("wheel", stop);
        window.removeEventListener("touchstart", stop);
        window.removeEventListener("keydown", stop);
      };
    }

    // Fallback (reduced motion / no Lenis): native rAF
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    let last = 0;
    let rem = 0;
    const step = (now: number) => {
      if (!last) last = now;
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      rem += SPEED * dt;
      const move = Math.floor(rem);
      rem -= move;
      if (move > 0) window.scrollBy(0, move);
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActive(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
      document.documentElement.style.scrollBehavior = prev;
    };
  }, [active, lenis]);

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setActive((a) => !a)}
      aria-label={active ? "Stop auto-scroll" : "Start auto-scroll tour"}
      title={active ? "Stop auto-scroll" : "Auto-scroll tour"}
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full border border-line bg-coal/80 backdrop-blur-xl transition-colors hover:bg-carbon sm:flex"
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(244,243,240,0.14)" strokeWidth="2.5" />
        <motion.circle cx="24" cy="24" r={R} fill="none" stroke="#ff2e2e" strokeWidth="2.5" strokeLinecap="round" style={{ strokeDasharray: dashArray }} />
      </svg>
      <span className="relative text-bone">
        {active ? (
          <svg width="15" height="15" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
            <rect x="2" y="1.5" width="3" height="9" rx="1" />
            <rect x="7" y="1.5" width="3" height="9" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
            <path d="M2.5 1.6c0-.5.5-.8.9-.5l6.6 4.1c.4.2.4.8 0 1L3.4 10.4c-.4.3-.9 0-.9-.5V1.6Z" />
          </svg>
        )}
      </span>
    </motion.button>
  );
}
