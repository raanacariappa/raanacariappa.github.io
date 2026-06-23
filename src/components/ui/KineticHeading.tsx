"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Big display headline that reveals line-by-line with a masked wipe-up.
 * Pass each visual line as a separate string.
 */
export function KineticHeading({
  lines,
  className = "",
  delay = 0,
  stagger = 0.09,
  amount = 0.6,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const line: Variants = {
    hidden: { y: reduce ? 0 : "120%" },
    visible: { y: "0%", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {lines.map((text, i) => (
        <span key={i} className="line-mask">
          <motion.span variants={line} className="block">
            {text}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
