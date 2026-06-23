"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { profile, media } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] overflow-hidden">
      {/* Full-bleed parallax media */}
      <motion.div style={{ y, scale }} className="absolute -inset-[8%] will-change-transform">
        <Image src={media.golden.src} alt={media.golden.alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/35 to-void/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-transparent" />

      {/* Top meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute inset-x-0 top-24 z-10"
      >
        <div className="shell flex items-start justify-between font-mono text-[0.65rem] uppercase tracking-wide2 text-bone-dim">
          <span>MSc Advanced Motorsport Mechatronics</span>
          <span className="hidden text-right sm:block">
            Cranfield University
            <br />
            {profile.availability}
          </span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="absolute inset-x-0 bottom-0 z-10">
        <div className="shell pb-[clamp(3rem,9vh,7rem)]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.8 }}
            className="eyebrow mb-4 text-bone-dim"
          >
            {profile.role} · GT · Endurance · Single-seater
          </motion.p>
          <h1 className="display text-bone">
            <KineticHeading
              lines={["Raana Cariappa", "Kalianda"]}
              delay={1.9}
              className="block text-[clamp(2.4rem,11.5vw,12rem)]"
              amount={0}
            />
          </h1>
        </div>
      </motion.div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[0.6rem] uppercase tracking-wide2 text-bone-dim">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="block h-8 w-px bg-gradient-to-b from-rosso to-transparent"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
