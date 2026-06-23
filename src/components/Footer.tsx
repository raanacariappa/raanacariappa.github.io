import { profile } from "@/lib/content";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line bg-void py-12">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl text-bone">{profile.shortName}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide2 text-bone-faint">{profile.role}</p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-xs text-bone-dim sm:items-end">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-rosso">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rosso">
            LinkedIn ↗
          </a>
          <span className="text-bone-faint">Built with Next.js · Lenis · Framer Motion · {YEAR}</span>
        </div>
      </div>
    </footer>
  );
}
