"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats, education, media } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal, StaggerGroup, staggerItem } from "./ui/Reveal";
import { MediaReveal } from "./ui/MediaReveal";
import { CountUp } from "./ui/CountUp";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-0 bg-void py-[clamp(6rem,14vh,11rem)]">
      <div className="shell">
        <Reveal className="mb-14">
          <span className="eyebrow">[ 01 — Profile ]</span>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <MediaReveal className="relative aspect-[4/5] w-full self-start rounded-2xl border border-line">
            <Image src={media.hero.src} alt={media.hero.alt} fill sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
          </MediaReveal>

          <div>
            <h2 className="display text-[clamp(1.9rem,4.6vw,3.6rem)] text-bone">
              <KineticHeading lines={["On & off", "the pit wall"]} stagger={0.1} />
            </h2>
            <div className="mt-8 space-y-6">
              {profile.about.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-lg leading-relaxed text-bone-dim">{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-10 border-t border-line pt-8">
              <span className="eyebrow">Education</span>
              <ul className="mt-6 space-y-5">
                {education.map((ed) => (
                  <li key={ed.school} className="flex flex-col gap-1 border-l border-rosso/40 pl-4">
                    <span className="text-lg font-semibold text-bone">{ed.school}</span>
                    <span className="text-sm text-bone-dim">{ed.degree}</span>
                    <span className="font-mono text-xs text-bone-faint">{ed.period} · {ed.location}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <StaggerGroup className="mt-[clamp(4rem,9vh,7rem)] grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 sm:grid-cols-4">
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerItem}>
              <div className="display text-[clamp(3rem,7vw,6rem)] leading-none text-rosso">
                <CountUp value={s.value} />
              </div>
              <div className="mt-3 max-w-[150px] text-sm leading-snug text-bone-dim">{s.label}</div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
