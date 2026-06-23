"use client";

import { profile } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-coal py-[clamp(7rem,18vh,14rem)]">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rosso/15 blur-[160px]" />

      <div className="shell relative text-center">
        <Reveal className="mb-8">
          <span className="eyebrow">[ Contact ]</span>
        </Reveal>
        <h2 className="display mx-auto text-[clamp(2.8rem,11vw,10rem)] text-bone">
          <KineticHeading lines={["Let's build", "the next", "session."]} stagger={0.09} amount={0.4} />
        </h2>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-bone-dim">
            Open to race &amp; data engineering roles across GT, endurance, and single-seater
            programmes — trackside or at the factory. {profile.availability}.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-[clamp(1.4rem,4vw,2.75rem)] font-semibold tracking-tightest text-bone transition-colors hover:text-rosso"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-wide2 text-bone-dim transition-colors hover:text-rosso"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
