"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * The signature move: media that clip-reveals from an inset rectangle and
 * eases a zoom-out as it scrolls through the viewport. Wrap an <Image fill>
 * or <video> as children. Container takes aspect / rounding via className.
 */
export function MediaReveal({
  children,
  className = "",
  zoom = 1.28,
}: {
  children: ReactNode;
  className?: string;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [zoom, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: reduce ? "inset(0%)" : "inset(10%)", opacity: reduce ? 1 : 0 }}
      whileInView={{ clipPath: "inset(0%)", opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  );
}
