"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/content";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";

export function Certifications() {
  return (
    <section className="relative bg-void py-[clamp(5rem,11vh,8rem)]">
      <div className="shell">
        <Reveal className="mb-10">
          <span className="eyebrow">[ Certifications & programmes ]</span>
        </Reveal>
        <StaggerGroup className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2" stagger={0.04}>
          {certifications.map((c) => (
            <motion.div key={c.title} variants={staggerItem} className="flex items-start gap-4 bg-coal p-5">
              <span className="mt-0.5 font-mono text-sm text-rosso">{c.year}</span>
              <div>
                <div className="text-sm font-medium text-bone">{c.title}</div>
                <div className="mt-0.5 text-xs text-bone-faint">{c.org}</div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
