"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/lib/content";
import { useLenis } from "./SmoothScroll";

export function Nav() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const go = (id: string) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="shell flex h-20 items-center justify-between">
          <button type="button" aria-label="Back to top" onClick={() => go("top")} className="flex items-center gap-2.5 text-left">
            <span className="h-2 w-2 rounded-full bg-rosso" />
            <span className="font-mono text-xs leading-tight tracking-wide text-white">
              RAANA
              <br />
              CARIAPPA
            </span>
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide2 text-white"
          >
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
            <span className="relative flex h-4 w-6 flex-col justify-center gap-1.5">
              <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-px w-full bg-white" />
              <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-px w-full bg-white" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-coal py-20"
          >
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
            <nav className="shell relative">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <li key={link.id} className="overflow-hidden">
                    <motion.button
                      type="button"
                      onClick={() => go(link.id)}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.06 }}
                      className="group flex items-baseline gap-5 py-1"
                    >
                      <span className="font-mono text-xs text-bone-faint">0{i + 1}</span>
                      <span className="display text-[clamp(2.5rem,9vw,7rem)] text-bone transition-colors duration-300 group-hover:text-rosso">
                        {link.label}
                      </span>
                    </motion.button>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs text-bone-dim">
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-rosso">
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rosso">
                  LinkedIn ↗
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
