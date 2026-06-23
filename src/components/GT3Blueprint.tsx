"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hand-built CAD blueprint of a GT3 slick tyre — front construction view + section.
 * Drawn in code so it's a true slick (no tread) and matches the design system exactly.
 */
export function GT3Blueprint() {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? { initial: { pathLength: 1, opacity: 1 }, animate: { pathLength: 1, opacity: 1 } }
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay },
        };

  const ink = "#f4f3f0";
  const blue = "#ff2e2e";
  const faint = "#6f6e6b";

  return (
    <svg viewBox="0 0 800 560" className="h-full w-full" fill="none" role="img" aria-label="CAD blueprint of a GT3 slick tyre">
      {/* construction crosshair */}
      <g stroke={faint} strokeWidth={0.75} strokeDasharray="4 5" opacity={0.6}>
        <line x1="250" y1="60" x2="250" y2="500" />
        <line x1="60" y1="280" x2="470" y2="280" />
      </g>

      {/* FRONT VIEW — concentric construction */}
      <motion.circle cx="250" cy="280" r="185" stroke={ink} strokeWidth={1.5} {...draw(0)} />
      <motion.circle cx="250" cy="280" r="172" stroke={faint} strokeWidth={0.75} {...draw(0.15)} />
      <motion.circle cx="250" cy="280" r="120" stroke={ink} strokeWidth={1.25} {...draw(0.3)} />
      <motion.circle cx="250" cy="280" r="108" stroke={faint} strokeWidth={0.75} {...draw(0.4)} />
      <motion.circle cx="250" cy="280" r="44" stroke={ink} strokeWidth={1.25} {...draw(0.5)} />

      {/* wheel spokes */}
      <g stroke={ink} strokeWidth={1}>
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
          return (
            <motion.line
              key={i}
              x1={250 + Math.cos(a) * 46}
              y1={280 + Math.sin(a) * 46}
              x2={250 + Math.cos(a) * 106}
              y2={280 + Math.sin(a) * 106}
              {...draw(0.6 + i * 0.03)}
            />
          );
        })}
      </g>
      <circle cx="250" cy="280" r="6" fill={blue} />

      {/* diameter dimension */}
      <g stroke={blue} strokeWidth={1}>
        <line x1="44" y1="95" x2="44" y2="465" />
        <line x1="38" y1="95" x2="50" y2="95" />
        <line x1="38" y1="465" x2="50" y2="465" />
      </g>
      <text x="30" y="285" fill={blue} fontSize="13" fontFamily="monospace" transform="rotate(-90 30 285)">
        Ø 720 mm
      </text>

      {/* SECTION VIEW — slick cross-section (smooth, treadless) */}
      <g>
        {/* outer carcass — flat slick crown, rounded shoulders, curved sidewalls to beads */}
        <motion.path
          d="M560,170 L700,170 Q726,170 728,210 L724,330 Q720,360 700,372 L688,378 L672,372 Q662,366 662,352 L662,200 Q662,188 650,188 L610,188 Q598,188 598,200 L598,352 Q598,366 588,372 L572,378 L560,372 Q540,360 536,330 L532,210 Q534,170 560,170 Z"
          stroke={ink}
          strokeWidth={1.5}
          {...draw(0.4)}
        />
        {/* inner liner */}
        <motion.path
          d="M566,196 L694,196 Q710,196 712,224 L708,322 Q705,344 690,352 L630,352 L570,352 Q555,344 552,322 L548,224 Q550,196 566,196 Z"
          stroke={faint}
          strokeWidth={0.75}
          {...draw(0.7)}
        />
        {/* carcass hatching */}
        <g stroke={faint} strokeWidth={0.5} opacity={0.5}>
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={548 + i * 13} y1="176" x2={534 + i * 13} y2="368" />
          ))}
        </g>
      </g>

      {/* slick crown contact line (flat = slick, no tread grooves) */}
      <motion.line x1="540" y1="172" x2="722" y2="172" stroke={blue} strokeWidth={2} {...draw(0.5)} />

      {/* width dimension */}
      <g stroke={blue} strokeWidth={1}>
        <line x1="532" y1="120" x2="728" y2="120" />
        <line x1="532" y1="114" x2="532" y2="126" />
        <line x1="728" y1="114" x2="728" y2="126" />
      </g>
      <text x="592" y="110" fill={blue} fontSize="13" fontFamily="monospace">
        305 mm
      </text>

      {/* leader labels */}
      <g fontFamily="monospace" fontSize="12" fill={faint}>
        <line x1="630" y1="172" x2="630" y2="430" stroke={faint} strokeWidth={0.5} strokeDasharray="3 4" />
        <text x="600" y="448">slick crown · contact patch</text>
        <text x="118" y="500" fill={ink}>FRONT VIEW 1:5</text>
        <text x="560" y="510" fill={ink}>SECTION A–A</text>
      </g>

      {/* title block */}
      <g fontFamily="monospace">
        <text x="44" y="44" fill={ink} fontSize="15" fontWeight="bold">GT3 SLICK — CONSTRUCTION</text>
        <text x="44" y="62" fill={faint} fontSize="11">Michelin Pilot Sport Cup · N3 front / N3R rear</text>
      </g>
    </svg>
  );
}
