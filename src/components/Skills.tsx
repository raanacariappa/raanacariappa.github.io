"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative bg-coal py-[clamp(6rem,14vh,11rem)]">
      <div className="shell">
        <Reveal className="mb-6">
          <span className="eyebrow">[ Capabilities ]</span>
        </Reveal>
        <h2 className="display text-[clamp(2.4rem,7vw,6rem)] text-bone">
          <KineticHeading lines={["The engineering", "toolkit."]} stagger={0.1} />
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {skills.map((group, gi) => (
            <Reveal key={group.title}>
              <div className="h-full bg-void p-8 sm:p-10">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-rosso">{String(gi + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold tracking-tightest text-bone">{group.title}</h3>
                </div>
                <StaggerGroup className="flex flex-wrap gap-2.5" stagger={0.04}>
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={staggerItem}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm text-bone-dim transition-colors hover:border-rosso/40 hover:text-bone"
                    >
                      {item}
                    </motion.span>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
