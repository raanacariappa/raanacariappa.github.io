"use client";

import { useReducedMotion } from "framer-motion";

export function Marquee({
  items,
  className = "",
  duration = 32,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className="flex w-max shrink-0 items-center"
        style={reduce ? undefined : { animation: `marquee ${duration}s linear infinite` }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="display whitespace-nowrap px-6 text-[clamp(1.6rem,3.4vw,3rem)] text-bone">
              {item}
            </span>
            <span className="text-rosso">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
