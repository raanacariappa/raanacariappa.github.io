"use client";

import Image from "next/image";
import { experience, experiencePhotos } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";
import { MediaReveal } from "./ui/MediaReveal";

export function Experience() {
  const featured = experience.filter((_, i) => experiencePhotos[i]);
  const earlier = experience.filter((_, i) => !experiencePhotos[i]);

  return (
    <section id="experience" className="relative bg-void">
      <div className="shell py-[clamp(5rem,11vh,9rem)]">
        <Reveal className="mb-6">
          <span className="eyebrow">[ 02 — Track record ]</span>
        </Reveal>
        <h2 className="display text-[clamp(2.6rem,9vw,8rem)] text-bone">
          <KineticHeading lines={["GT. Endurance.", "Single-seater."]} stagger={0.1} />
        </h2>
      </div>

      {/* Full-bleed cinematic chapters */}
      <div>
        {featured.map((job, i) => {
          const idx = experience.indexOf(job);
          const photo = experiencePhotos[idx];
          return (
            <div key={idx} className="relative min-h-[90svh] overflow-hidden border-t border-line">
              <MediaReveal className="absolute inset-0" zoom={1.22}>
                <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-cover" />
              </MediaReveal>
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-void/60 to-transparent" />

              <div className="shell absolute inset-0 flex flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-28">
                <span className="pointer-events-none absolute right-[clamp(1.25rem,4vw,3rem)] top-28 display text-[clamp(3rem,8vw,7rem)] leading-none text-bone/15">
                  0{i + 1}
                </span>
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wide2 text-bone-dim">
                  <span className="text-rosso">{job.period}</span>
                  {job.car && <span>{job.car}</span>}
                  <span>{job.location}</span>
                </div>
                <h3 className="display max-w-3xl text-[clamp(2rem,6vw,5.5rem)] text-bone">{job.role}</h3>
                <p className="mt-2 text-lg text-bone-dim">{job.org}</p>
                <Reveal delay={0.1} className="mt-7 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {job.points.map((pt, j) => (
                    <p key={j} className="border-l border-rosso/40 pl-4 text-sm leading-relaxed text-bone-dim">
                      {pt}
                    </p>
                  ))}
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>

      {/* Earlier roles — compact */}
      <div className="shell border-t border-line py-[clamp(5rem,11vh,9rem)]">
        <Reveal className="mb-10">
          <span className="eyebrow">Earlier roles</span>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {earlier.map((job) => (
            <Reveal key={job.org}>
              <div className="h-full bg-coal p-8">
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wide2 text-bone-dim">
                  <span className="text-rosso">{job.period}</span>
                  <span>{job.location}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tightest text-bone">{job.role}</h3>
                <p className="mt-1 text-bone-dim">{job.org}</p>
                <ul className="mt-5 space-y-2">
                  {job.points.map((pt, j) => (
                    <li key={j} className="border-l border-line pl-4 text-sm leading-relaxed text-bone-dim">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
