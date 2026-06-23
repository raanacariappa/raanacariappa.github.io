"use client";

import { media } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";
import { MediaReveal } from "./ui/MediaReveal";

export function OnTrack() {
  return (
    <section className="relative bg-coal py-[clamp(6rem,14vh,11rem)]">
      <div className="shell">
        <Reveal className="mb-6">
          <span className="eyebrow">[ On track ]</span>
        </Reveal>
        <h2 className="display text-[clamp(2.6rem,9vw,8rem)] text-bone">
          <KineticHeading lines={["Race day,", "in frame."]} stagger={0.1} />
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-bone-dim">
            From the pit lane to wheel-to-wheel through the infield — the environment the data is built
            for.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {media.onTrack.map((clip) => (
            <figure key={clip.src} className="group">
              <MediaReveal className="relative aspect-[9/16] w-full rounded-2xl border border-line">
                <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
                  <source src={clip.src} type="video/mp4" />
                </video>
              </MediaReveal>
              <figcaption className="mt-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wide2 text-bone-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-rosso" />
                {clip.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
