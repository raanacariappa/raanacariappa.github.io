# PROGRESS — Portfolio Website (handoff log)

> Append a short dated entry at the END of each work session. What changed + next step.
> Newest at the bottom. `/resume Portfolio Website` reads this first. Mirrored in `[[Portfolio Website]]`.

---

## 2026-06-16 — built from scratch
- **Stack:** Next.js 14 (App Router, TS) + Tailwind CSS 3.4 + Framer Motion 11. Node 24 / npm 11.
- **Direction:** dark-luxury motorsport. Tokens in `tailwind.config.ts` (`ink`, `bone`, `rosso`, `gold`,
  `hairline`). Carbon weave + film grain + engineering grid in `src/app/globals.css`.
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (labels) via `next/font`.
- **Content:** all real, from the base CV (`../CV Optimization/files/base-cv/Raana_Kalianda.pdf`).
  Single source of truth = `src/lib/content.ts` — edit copy there, not in components.
- **Sections** (`src/components/`): Hero, Marquee, About (+CountUp stats, education), Experience
  (scroll-fill timeline), Research, Skills, Certifications, Contact, Footer. Nav + ScrollProgress +
  TelemetryBackground are the chrome. Reusable motion primitives in `src/components/ui/`.
- **Motion:** staggered hero reveal + parallax, animated telemetry SVG trace, infinite marquee,
  count-up numbers, scroll-filling timeline spine, magnetic buttons, `layoutId` nav underline,
  AnimatePresence mobile menu. All gated behind `useReducedMotion`.
- **Verified:** `npm run build` ✓ (≈142 kB first load, 4 static routes). Rendered + screenshotted
  desktop (1280) and mobile (375) — all sections correct.
- **Known cosmetic:** a benign Framer dev warning ("container needs non-static position") from
  `useScroll` targets under React Strict Mode — does not occur in the production build.

### Next (single best step): deploy
- [ ] Deploy to **Vercel** (`vercel`) or **GitHub Pages** (she has `raanacariappa.github.io`).
      For GH Pages, add `output: 'export'` to `next.config.mjs` and push the `out/` build.
- [ ] Then add the live URL to the CV and LinkedIn; add an OG image + favicon.
- [ ] Optional: a case-study page for the GT3 tyre cold-pressure tool (see `[[Individual Thesis]]`).

## 2026-06-16 (later) — light redesign + real photos + AI media
- **Theme flipped dark → light luxury motorsport.** New tokens in `tailwind.config.ts`
  (`canvas`/`surface`/`ink`/`line`/`rosso`/`gold`) + light `globals.css` (paper grain, soft `.lift`
  shadows, light grid). Every component re-themed.
- **Real trackside photography integrated** — the big authenticity win. Sourced from
  `OneDrive/Desktop/Experience Photos/{Dubai,Estoril,F4,Sepang}` (her real events). Optimized to WebP
  via `scripts/optimize-images.mjs` (sharp) → `public/photos/<event>/`. Placements:
  hero = Raana at the Estoril Porsche Cup car; about = golden-hour Estoril; experience cards = one real
  photo per role (Dubai pit wall, Estoril garage, RGB, F4 car, Sepang garage); new **Gallery** bento
  + lightbox. NOTE: the 3 Dubai HEICs failed libheif decode (Live-Photo bursts) — used the Dubai JPG.
  Sepang shots carry a "The Speeding Mole" watermark, so kept minimal (1 small timeline thumb) and
  OUT of hero/gallery.
- **AI-generated media (Higgsfield MCP, ~4.3 of 10 free credits used):**
  `public/generated/tyre-thermal.webp` (z_image) → Research thesis card, labelled "AI-generated";
  `telemetry.webp` (z_image) → faint Skills background; `ambient.mp4` (veo3_1_lite, 4s) → muted loop
  behind the dark Contact band. All honestly labelled / decorative; null-guarded in `content.ts`.
- **New section:** Gallery (`src/components/Gallery.tsx`) with shared-element lightbox. Nav updated.
- **Verified:** `npm run build` ✓ (≈149 kB first load); re-screenshotted every section desktop + mobile.
- ⚠️ Don't run `npm run build` while the preview dev server is live — it clobbers `.next` and wedges
  the dev server (had to `rm -rf .next` + restart). Build OR dev, not both at once.
- **Next:** deploy; optionally regenerate the Dubai HEICs from originals; consider cropping the Sepang
  watermark if those frames are wanted in the gallery.

## 2026-06-16 (later) — Apple.com-style rebuild + real video + GT3 blueprint
- **Redesigned to look like apple.com** — full component rewrite. White / `#f5f5f7` alternating
  sections, near-black `#1d1d1f` text, Apple **blue `#0071e3`** accent (red kept only as a tiny status
  dot), Inter via the SF-Pro system stack, huge tight semibold headlines (`.h-hero`/`.h-section`),
  centered layouts, frosted thin nav, blue pill + "link ›" chevron buttons, generous whitespace.
- **Apple motion:** hero media **scales up on scroll** (`useScroll`+`useTransform`), soft fade-up
  reveals everywhere, the GT3 blueprint **draws its strokes** on view, gallery lightbox. All reduced-
  motion safe. Dropped the dark theme's scroll-progress bar / marquee / magnetic buttons.
- **New tokens** in `tailwind.config.ts` (`paper/mist/fog/line/ink/azure/signal/carbon`) + Apple type
  classes in `globals.css`. Removed `ScrollProgress`, `TelemetryBackground`, `Marquee`,
  `MagneticButton`, `SectionHeading`. New: `ToolStrip`, `PitStop`, `GT3Blueprint`, `SectionIntro`,
  `AppleButton`.
- **GT3 tyre fixed:** z_image kept generating *road* tyres (treaded), so the thermal/road image was
  scrapped and replaced with a **hand-built CAD blueprint SVG** (`GT3Blueprint.tsx`) — a true slick,
  front construction view + section, dimensions, Michelin N3/N3R note. Lives in the Research thesis tile.
- **Lotus Emira GT4 render** (`public/generated/emira-gt4.webp`, z_image) added to the Research concept
  tile, labelled "AI render · concept reference".
- **Real Dubai pit-stop video integrated** — her own clip (`Dubai/E0A67942….MOV`, HEVC portrait) was
  transcoded with **ffmpeg-static** to web H.264 → `public/videos/dubai-pitstop.mp4` (839 KB, muted
  autoplay loop). Featured in a dark Apple "On the wall, on the clock." section as driver assistant.
- Removed the earlier abstract generated media (thermal/telemetry/ambient) — real photos + video carry it now.
- **Verified:** `npm run build` ✓ (≈148 kB); re-screenshotted hero, about, pit-stop, experience,
  research (blueprint + Emira), mobile. Higgsfield credits ≈5.4 left (recraft needs a paid plan).
- **Deps added:** `sharp`, `ffmpeg-static` (now `optionalDependencies` so CI/`npm ci` never breaks on them).

## 2026-06-16 (later) — 🟢 DEPLOYED to GitHub Pages
- **Live:** https://raanacariappa.github.io/ · repo `raanacariappa/raanacariappa.github.io` (public).
- **How:** `next.config.mjs` → `output: 'export'` + `images.unoptimized`. Built locally, copied
  `out/` → `docs/` (+ `docs/.nojekyll`), committed, pushed `main`. GitHub **Pages source = `main` /docs**
  (set via `gh api`). The `gh` token lacks `workflow` scope, so the Actions workflow approach was
  dropped in favour of committing the static build — fully deterministic, no CI.
- **To redeploy:** `npm run build && rm -rf docs && cp -r out docs && touch docs/.nojekyll && git add -A
  && git commit && git push`. (Or have the user run `gh auth refresh -s workflow` once, then re-add the
  Actions workflow for push-to-deploy.)
- First-deploy CDN propagation took a few minutes after build reported "built" (assets 404'd briefly).
  Tip: after pushing, `gh api -X POST repos/<owner>/<repo>/pages/builds` forces a fresh build.

## 2026-06-16 (later) — added two more trackside videos
- Two clips from `Experience Photos/Generic/` (`IMG_9176.mov` 4K HDR + `MVI_4711.MOV` 1080p60) —
  both **portrait** once display-rotation is applied. Transcoded with ffmpeg-static to web H.264,
  **HDR→SDR tonemapped** (`zscale`/`tonemap=hable`), 720w, muted → `public/videos/circuit-hero.mp4`
  (2.1 MB) + `race-pack.mp4` (0.9 MB).
- New **`OnTrack.tsx`** section (dark, "Race day, in frame.") — both as phone-framed autoplay loops,
  placed after Experience. Page now has 3 videos (~3.8 MB total).
- Built, committed (`34bf7c1`), pushed, forced Pages rebuild → live.

## 2026-06-16 (later) — photo animations, interactive auto-scroll, privacy trim
- **Every photo animates:** new `ui/AnimatedImage.tsx` — scroll-linked Ken-Burns zoom (`useScroll`
  + `useTransform`, 1.18→1.0) + fade-in; applied to About / Experience / Research images. Hero golden
  already scales on scroll; Gallery already has reveal + hover zoom. Reduced-motion safe.
- **Interactive auto-scroll:** new `AutoScroll.tsx` — floating bottom-right control with a live blue
  progress ring. Framerate-independent (timestamp-delta, ~95 px/s), stops at page foot, and yields to
  the user (any wheel/touch/keydown stops it). Temporarily forces `scroll-behavior:auto` while running.
- **Privacy:** removed `phone` + `location` from `content.ts`; Contact now shows only email + LinkedIn,
  Hero meta drops the town. (Education still lists the universities' cities — institutional, not personal.)
- Committed `477cebe`, pushed, Pages rebuilt → live.

## 2026-06-16 (later) — REBUILT: dark cinematic scroll-based experience
- **Full from-scratch redesign** per Raana's reference video (Caler Edwards, "5 Must-Visit Scroll-Based
  Website Designs"). Direction chosen via AskUserQuestion: **dark cinematic**, priority **full-bleed
  media reveals**. Replaces the Apple light look entirely.
- **Lenis smooth scroll** (`lenis` dep) via `SmoothScroll.tsx` provider + `useLenis()` context; rAF loop,
  reduced-motion bypass. Nav + AutoScroll drive it (`lenis.scrollTo`).
- **New design system:** dark tokens (`void/coal/carbon/ash/bone/rosso`) in tailwind; **Anton** display
  font (huge condensed uppercase) + Inter + JetBrains Mono; film grain; engineering grid.
- **New primitives:** `MediaReveal` (clip-reveal + scroll zoom — the signature full-bleed reveal),
  `KineticHeading` (line-by-line masked wipe-up), `Reveal`, `Marquee`.
- **New sections:** `Loader` (counter intro, clip-away; has rAF + hard-timeout fallback so it never
  locks scroll), `Nav` (mix-blend wordmark + full-screen Anton menu overlay), `Hero` (full-bleed
  parallax golden-hour + kinetic name), `Manifesto` (kinetic statement + toolchain marquee), `About`,
  `PitStop` (blurred-fill video moment), `Experience` (full-bleed cinematic chapters — photo fills each
  panel, kinetic title overlaid, chapter numbers), `OnTrack`, `Research` (GT3 blueprint recolored for
  dark + Emira MediaReveal), `Skills`, `Gallery` (MediaReveal grid + fade lightbox), `Certifications`,
  `Contact`, `Footer`. `AutoScroll` kept (Lenis-aware). Removed Apple-era `Navbar/ToolStrip/SectionIntro/
  AppleButton/AnimatedImage`.
- **Verified:** `npm run build` ✓ (≈156 kB); screenshotted hero, about, full-bleed experience panels,
  full-screen menu — all dark cinematic. Committed `1b1372a`, pushed, Pages rebuilt.
- **Note:** intro loader + many autoplay videos can make the preview screenshot tool wait on "idle" —
  retry once if it times out (not a real error).
