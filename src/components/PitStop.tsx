"use client";

import { media } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";
import { MediaReveal } from "./ui/MediaReveal";

export function PitStop() {
  return (
    <section className="relative overflow-hidden bg-coal py-[clamp(6rem,14vh,11rem)]">
      {/* Blurred video fill for atmosphere */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src={media.pitstop.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-void/40" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <Reveal className="mb-6">
            <span className="eyebrow">[ Michelin 24H Dubai ]</span>
          </Reveal>
          <h2 className="display text-[clamp(2.6rem,8vw,7rem)] text-bone">
            <KineticHeading lines={["On the wall,", "on the clock."]} stagger={0.1} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-bone-dim">
              Endurance racing is won and lost in the pit box. As driver assistant on the HRT
              Performance crew, I worked the stops — fuel, tyres, and driver changes against the clock
              through the night.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-mono text-xs uppercase tracking-wide2 text-bone-faint">
              {media.pitstop.caption}
            </p>
          </Reveal>
        </div>

        <MediaReveal className="relative mx-auto aspect-[9/16] w-full max-w-[300px] rounded-2xl border border-line lg:max-w-none">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
            <source src={media.pitstop.src} type="video/mp4" />
          </video>
        </MediaReveal>
      </div>
    </section>
  );
}
