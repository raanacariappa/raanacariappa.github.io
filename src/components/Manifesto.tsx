"use client";

import { profile, toolchain } from "@/lib/content";
import { KineticHeading } from "./ui/KineticHeading";
import { Reveal } from "./ui/Reveal";
import { Marquee } from "./Marquee";

export function Manifesto() {
  return (
    <section className="relative bg-void py-[clamp(6rem,16vh,12rem)]">
      <div className="shell">
        <Reveal className="mb-12">
          <span className="eyebrow">[ Approach ]</span>
        </Reveal>

        <h2 className="display max-w-5xl text-[clamp(2.2rem,7vw,6rem)] text-bone">
          <KineticHeading
            lines={["Raw telemetry,", "turned into setup,", "strategy & driver"]}
            stagger={0.1}
          />
          <span className="line-mask">
            <KineticHeading lines={["feedback."]} delay={0.25} className="text-rosso" />
          </span>
        </h2>

        <Reveal delay={0.1} className="mt-12 max-w-xl lg:ml-auto">
          <p className="text-lg leading-relaxed text-bone-dim">{profile.intro}</p>
        </Reveal>
      </div>

      <div className="mt-[clamp(4rem,9vh,8rem)] border-y border-line py-6">
        <Marquee items={toolchain} />
      </div>
    </section>
  );
}
