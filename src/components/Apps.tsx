"use client";

import { apps } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";

export function Apps() {
  return (
    <section id="apps" className="relative bg-coal py-[clamp(6rem,14vh,11rem)]">
      <div className="shell">
        <Reveal className="mb-6">
          <span className="eyebrow">[ 03 — Software I&apos;m building ]</span>
        </Reveal>
        <h2 className="display text-[clamp(2.4rem,7vw,6rem)] text-bone">
          <KineticHeading lines={["Telemetry,", "turned into", "tools."]} stagger={0.09} />
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-dim">
            When the off-the-shelf workflow falls short, I build my own. A growing suite of trackside
            software, in active development.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-void">
                {/* Window chrome motif */}
                <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rosso/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                  <span className="ml-3 font-mono text-[0.7rem] uppercase tracking-wide2 text-bone-faint">
                    {app.name.toLowerCase().replace(/\s+/g, "-")}.app
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <span className="eyebrow text-rosso">{app.status}</span>
                  <h3 className="mt-4 display text-[clamp(1.8rem,3.4vw,2.8rem)] text-bone">{app.name}</h3>
                  <p className="mt-4 leading-relaxed text-bone-dim">{app.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {app.tags.map((t) => (
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
