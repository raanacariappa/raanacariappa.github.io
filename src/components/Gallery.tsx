"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";
import { MediaReveal } from "./ui/MediaReveal";

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="relative bg-void py-[clamp(6rem,14vh,11rem)]">
      <div className="shell">
        <Reveal className="mb-6">
          <span className="eyebrow">[ 05 — Gallery ]</span>
        </Reveal>
        <h2 className="display text-[clamp(2.6rem,9vw,8rem)] text-bone">
          <KineticHeading lines={["In the", "paddock."]} stagger={0.1} />
        </h2>

        <div className="mt-14 grid auto-rows-[200px] grid-flow-dense grid-cols-2 gap-4 sm:auto-rows-[250px] sm:grid-cols-4">
          {gallery.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setActive(i)}
              className={`group relative h-full w-full ${spanClass[photo.span]}`}
            >
              <MediaReveal className="relative h-full w-full rounded-xl border border-line">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 right-3 text-left font-mono text-[0.6rem] uppercase tracking-wide text-bone opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {photo.alt}
                </span>
              </MediaReveal>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-void/92 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[86vh] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                width={1700}
                height={1100}
                className="h-auto max-h-[86vh] w-full object-contain"
              />
            </motion.div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close photo viewer"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-line text-bone transition-colors hover:bg-bone/10"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
