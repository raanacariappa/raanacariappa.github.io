# Raana Cariappa Kalianda — Portfolio

Personal portfolio site for a **Race & Data Engineer** (MSc Advanced Motorsport Mechatronics,
Cranfield). Dark-luxury motorsport design, built with **Next.js + Framer Motion**.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3.4**
- **Framer Motion 11** — scroll progress, parallax hero, count-up stats, scroll-filling timeline,
  magnetic buttons, animated nav + mobile menu (all respect `prefers-reduced-motion`)
- Fonts via `next/font`: Space Grotesk · Inter · JetBrains Mono

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typecheck + static export of routes)
npm run start    # serve the production build
```

## Structure
```
src/
├── app/                # layout.tsx, page.tsx, globals.css
├── components/         # section components + chrome (Navbar, Hero, …)
│   └── ui/             # reusable motion primitives (Reveal, CountUp, MagneticButton, …)
└── lib/content.ts      # ALL site copy — single source of truth, edit here
```

## Editing content
Everything visible on the page comes from [`src/lib/content.ts`](src/lib/content.ts) — profile,
experience, research, skills, certifications. Change copy there; components are presentational.

## Deploy
- **Vercel:** `vercel` (zero-config for Next.js).
- **GitHub Pages:** add `output: 'export'` to `next.config.mjs`, run `npm run build`, publish `out/`.

Content is drawn from the base CV under `../CV Optimization/files/base-cv/`. Keep them in sync.
