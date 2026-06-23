"use client";

import Image from "next/image";
import { research, media } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";
import { MediaReveal } from "./ui/MediaReveal";
import { GT3Blueprint } from "./GT3Blueprint";

export function Research() {
  return (
    <section id="research" className="relative bg-void py-[clamp(6rem,14vh,11rem)]">
      <div className="shell">
        <Reveal className="mb-6">
          <span className="eyebrow">[ 04 — Research · Cranfield ]</span>
        </Reveal>
        <h2 className="display text-[clamp(2.2rem,6.5vw,5.5rem)] text-bone">
          <KineticHeading lines={["Where the", "engineering", "gets deep."]} stagger={0.09} />
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {research.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-coal">
                <div className="relative border-b border-line">
                  {idx === 0 ? (
                    <div className="aspect-[4/3] p-6">
                      <GT3Blueprint />
                    </div>
                  ) : (
                    <>
                      <MediaReveal className="relative aspect-[4/3]">
                        <Image src={media.emira.src} alt={media.emira.alt} fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
                      </MediaReveal>
                      <span className="absolute bottom-3 right-3 rounded-full bg-void/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-bone-dim backdrop-blur-sm">
                        AI render · concept
                      </span>
                    </>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <span className="eyebrow text-rosso">{item.status}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tightest text-bone sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-bone-dim">{item.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-bone-dim">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
