// Single source of truth for all site content.
// Every fact here is drawn from Raana's real CV — nothing invented.

export const profile = {
  name: "Raana Cariappa Kalianda",
  shortName: "Raana Cariappa",
  role: "Race & Data Engineer",
  tagline: "Motorsport Mechatronics",
  availability: "Available for UK & international travel",
  email: "raanacariappa@outlook.com",
  linkedin: "https://www.linkedin.com/in/raanacariappa",
  linkedinHandle: "raanacariappa",
  intro:
    "Graduate electrical engineer completing an MSc in Advanced Motorsport Mechatronics at Cranfield University — turning raw telemetry into setup direction, strategy calls, and driver feedback across GT, endurance, and single-seater racing.",
  about: [
    "I work at the seam between data and the racetrack. Across GT, endurance, and single-seater programmes I've supported telemetry review, run-plan preparation, setup changes, fuel strategy, and driver debriefs — translating five drivers' worth of braking, throttle, and balance traces into decisions the engineers can act on.",
    "My background is electrical and electronics engineering, so I'm comfortable down at the CAN bus and harness level as well as up in the analysis tools. I build my own Python tooling when the off-the-shelf workflow falls short — like a per-driver fuel-load estimator for Code 60 endurance scenarios.",
    "Right now I'm finishing a Cranfield MSc thesis: a MATLAB/Simulink tool that predicts per-corner cold tyre pressures for a GT3 car straight from whole-car telemetry.",
  ],
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "5", label: "drivers analysed at Michelin 24H Dubai" },
  { value: "181", label: "laps run at the Sepang 1000km" },
  { value: "5", label: "countries of trackside operations" },
  { value: "7+", label: "race & engineering programmes" },
];

export type Experience = {
  role: string;
  org: string;
  car?: string;
  location: string;
  period: string;
  series: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Data Engineer",
    org: "HRT Performance — Michelin 24H Dubai",
    car: "GT — Endurance",
    location: "Dubai, UAE",
    period: "2026",
    series: "Michelin 24H Series",
    points: [
      "Analysed telemetry across five drivers to surface braking, throttle, and balance trends that fed setup direction and driver feedback.",
      "Took part in driver debriefs alongside the race engineer, turning session data into clear discussion points and follow-up actions.",
      "Built a Python tool to estimate per-driver fuel loads from race consumption and Code 60 scenarios, supporting fuel planning and pit strategy.",
      "Assisted with refuelling strategy and pit-stop operations through the 24-hour event.",
    ],
  },
  {
    role: "Data Engineer",
    org: "RGB Racing — Porsche Sprint Cup Iberica, Rds. 5 & 6",
    car: "Porsche 991.1 GT3 Cup",
    location: "Spain & Portugal",
    period: "2025",
    series: "Porsche Sprint Challenge",
    points: [
      "Built data-capture and post-processing workflows for the Porsche 991.1 GT3 Cup across practice, qualifying, and race.",
      "Developed tyre-pressure recommendations that accounted for ambient and track temperature swings to guide setup across the weekend.",
      "Ran post-session telemetry analysis and contributed to driver debriefs, converting data into setup and driving recommendations.",
    ],
  },
  {
    role: "Performance Engineer",
    org: "RGB Racing Team",
    car: "GT Programme",
    location: "Madrid, Spain",
    period: "2025",
    series: "Performance Engineering Programme",
    points: [
      "Completed a structured GT race-engineering programme spanning vehicle dynamics, aerodynamics, and driver data analysis.",
      "Sharpened the analysis-to-communication loop — presenting findings clearly to engineers and technical staff.",
      "Carried this foundation directly into later GT and endurance trackside roles.",
    ],
  },
  {
    role: "Trackside Engineer",
    org: "MP Motorsport structure — Indian F4 Championship",
    car: "FIA Formula 4",
    location: "India",
    period: "2024",
    series: "Indian F4 Championship",
    points: [
      "Supported driver Aqil Alibhai across a full championship season of race-weekend operations.",
      "Ran pre-track preparation, start-up and system checks, hot runs, brake servicing, and fluid changes to keep the car ready.",
      "Operated pit-lane equipment — fuelling systems, tyre-pressure gauges, and pit boards for driver communication.",
      "Used Wintax to review tyre wear and driver-performance data for telemetry-based race support.",
    ],
  },
  {
    role: "Trackside Engineer",
    org: "DV Motorsport — Sepang 1000km",
    car: "Suzuki Swift ZC31",
    location: "Sepang, Malaysia",
    period: "2024",
    series: "Sepang 1000km Endurance",
    points: [
      "Supported endurance race operations through 181 laps of Sepang International Circuit.",
      "Performed corner balancing and setup changes — camber, toe, and ride-height adjustments.",
      "Contributed to reliable, organised car preparation across the weekend and the pit-stop crew.",
    ],
  },
  {
    role: "Brakes Engineer & Management Associate",
    org: "Team Shaurya Racing — Formula Student",
    car: "FSAE",
    location: "Chennai, India",
    period: "2021 — 2024",
    series: "Formula Student",
    points: [
      "Designed brake rotors, wheel hubs, and pedal assemblies in SolidWorks to rulebook, packaging, and ergonomics constraints.",
      "Ran material selection, static analysis in ANSYS, and MATLAB-based validation of hand calculations.",
      "Assisted TIG welding in manufacturing — and secured sponsorship as a management associate.",
    ],
  },
  {
    role: "Process Improvement Engineer",
    org: "BMW India Private Limited — Plant 20.00",
    car: "Production Engineering",
    location: "Chennai, India",
    period: "2024",
    series: "Production Engineering Support",
    points: [
      "Supported production-engineering projects focused on process improvement and practical problem solving.",
      "Delivered a weight-and-design improvement for an assembly jig and built an Arduino-based Vehicle Detection Module.",
    ],
  },
];

export type Research = {
  title: string;
  status: string;
  org: string;
  blurb: string;
  tags: string[];
};

export const research: Research[] = [
  {
    title: "Telemetry-Driven Tyre Cold-Pressure Prediction for GT3",
    status: "MSc Thesis · 2026 · ongoing",
    org: "Cranfield University",
    blurb:
      "A MATLAB/Simulink tool that estimates per-corner cold tyre-pressure targets for a Porsche 992.1 GT3 Cup car from whole-car telemetry. Cosworth logger data is exported from Pi Toolbox into MATLAB, tyre forces are estimated from the vehicle traces, and outputs are validated against measured hot-pressure channels — built to support tyre prep and pre-event engineering calls.",
    tags: ["MATLAB", "Simulink", "Pi Toolbox", "Cosworth", "Tyre Modelling"],
  },
  {
    title: "Dual-Fuel Endurance Rally Car — Lotus Emira GT4 concept",
    status: "Group Project · 2026 · ongoing",
    org: "Cranfield University",
    blurb:
      "Conceptual design of an endurance rally vehicle based on the Lotus Emira GT4, combining hydrogen and sustainable gasoline for mixed-surface competition. I lead vehicle dynamics, suspension development, and EDU integration, with hands in simulation and systems integration across the multidisciplinary team.",
    tags: ["Vehicle Dynamics", "Suspension", "Hydrogen", "EDU Integration", "Simulation"],
  },
];

export type App = { name: string; status: string; blurb: string; tags: string[] };

// Personal engineering software Raana is building — described factually, in-progress.
export const apps: App[] = [
  {
    name: "F4 Car Health",
    status: "Desktop app · in development · 2026",
    blurb:
      "A standalone, fully-offline desktop app that decodes Magneti Marelli WinTAX Formula 4 telemetry and turns it into car-reliability diagnostics — physics-first where / when / why alarms, editable limit gauges, cross-session health trends, a synchronised scrub cursor, and themed PDF health reports. Built on a reverse-engineered logger format with name-agnostic channel ingestion, so it reads a session whatever the channels are called.",
    tags: ["Python", "pywebview", "Telemetry", "Reverse Engineering", "Reliability", "Chart.js"],
  },
  {
    name: "F4 Performance",
    status: "Companion app · in development · 2026",
    blurb:
      "A driver-analysis companion to Car Health: time-delta versus distance with per-corner and braking / throttle breakdowns from the same Formula 4 telemetry — built to show where lap time is found and lost.",
    tags: ["Python", "Data Visualisation", "Driver Analysis", "Vehicle Dynamics"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Race Engineering & Strategy",
    items: [
      "Race-car setup support",
      "Driver debriefs & performance analysis",
      "Run-plan & session analysis",
      "Fuel-strategy tooling (Python)",
      "Pit-stop & endurance operations",
      "Pre- & post-event reporting",
    ],
  },
  {
    title: "Data Systems",
    items: [
      "Pi Toolbox",
      "McLaren ATLAS",
      "Magneti Marelli Wintax",
      "MoTeC i2 Pro",
      "Racecon",
      "RaceStudio 3",
      "Porsche Toolset",
      "VBox Circuit Tools & Video",
    ],
  },
  {
    title: "Engineering Software",
    items: ["MATLAB", "Simulink", "Python", "SolidWorks", "Ansys", "AVL Boost", "AVL Cruise", "IPG CarMaker"],
  },
  {
    title: "Electronics & Vehicle Systems",
    items: [
      "CAN bus communication",
      "Wiring & harness construction",
      "Tyre analysis & thermal behaviour",
      "Mechanical & electrical fundamentals",
    ],
  },
];

// Toolchain marquee — the tools she actually runs.
export const toolchain: string[] = [
  "Pi Toolbox",
  "McLaren ATLAS",
  "MoTeC i2 Pro",
  "Magneti Marelli Wintax",
  "MATLAB",
  "Simulink",
  "Python",
  "Racecon",
  "RaceStudio 3",
  "SolidWorks",
  "Ansys",
  "IPG CarMaker",
  "VBox",
  "CAN bus",
];

export type Credential = { year: string; title: string; org: string };

export const certifications: Credential[] = [
  { year: "2025", title: "Race Engineering Program (ongoing)", org: "6 Engineers & B2 Racing Academy" },
  { year: "2025", title: "United Motorsport Academy Bootcamp", org: "RGB Racing Team" },
  { year: "2025", title: "CAN Bus Communication Decoded", org: "High Performance Academy" },
  { year: "2025", title: "Practical Wiring — Professional Motorsport", org: "High Performance Academy" },
  { year: "2025", title: "Practical Harness Construction", org: "High Performance Academy" },
  { year: "2024", title: "Wiring Fundamentals", org: "High Performance Academy" },
  { year: "2024", title: "Motorsports Engineering Program", org: "Rex Keen · United Motorsports Academy" },
  { year: "2023", title: "F1 Data Analysis Workshop", org: "Ian Wright · United Motorsports Academy" },
];

export const education = [
  {
    school: "Cranfield University",
    degree: "MSc — Advanced Motorsport Mechatronics",
    period: "Sep 2025 — Sep 2026",
    location: "Bedford, United Kingdom",
  },
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech — Electrical & Electronics Engineering",
    period: "Sep 2020 — Jul 2024",
    location: "Chennai, India",
  },
];

export type Photo = { src: string; alt: string };

// Real trackside photography + media (optimized from Raana's "Experience Photos").
export const media = {
  hero: {
    src: "/photos/estoril/img-8822.webp",
    alt: "Raana with run sheets beside an open Porsche 911 GT3 Cup in the Estoril pit lane",
  },
  golden: {
    src: "/photos/estoril/img-8961.webp",
    alt: "Porsche 911 GT3 Cup cars at golden hour, Estoril — Porsche Sprint Challenge Iberica",
  },
  // Her real Dubai pit-stop clip (driver assistant) — transcoded to web H.264.
  pitstop: {
    src: "/videos/dubai-pitstop.mp4",
    caption: "Michelin 24H Dubai — assisting the pit stop as driver assistant",
  },
  // Her own trackside clips — portrait, muted autoplay loops.
  onTrack: [
    { src: "/videos/circuit-hero.mp4", caption: "Out of the pit lane" },
    { src: "/videos/race-pack.mp4", caption: "Wheel-to-wheel" },
  ],
  // AI render of the Lotus Emira GT4 her concept is based on (honestly labelled).
  emira: {
    src: "/generated/emira-gt4.webp",
    alt: "Render of a Lotus Emira GT4 race car — concept reference for the endurance rally project",
  },
};

// One signature photo per experience entry (index-aligned with `experience`).
export const experiencePhotos: Record<number, Photo> = {
  0: { src: "/photos/dubai/dsc-7608.webp", alt: "Endurance pit-wall data crew on laptops at the Michelin 24H Dubai" },
  1: { src: "/photos/estoril/img-8927.webp", alt: "Porsche Cup driver gloving up in the Estoril garage" },
  2: { src: "/photos/estoril/img-8958.webp", alt: "Porsche 911 GT3 Cup on track during the Sprint Challenge" },
  3: { src: "/photos/f4/irf-r4-ib-nz90596.webp", alt: "Indian F4 single-seater on circuit" },
  4: { src: "/photos/sepang/dsc-0166.webp", alt: "Touring car prepared in the team garage, Sepang 1000km" },
};

// Editorial gallery — favours clean, un-watermarked frames.
export const gallery: (Photo & { span: "tall" | "wide" | "normal" })[] = [
  { src: "/photos/f4/irf-r4-ib-dsc6135.webp", alt: "Race-winning Indian F4 team celebrating with the #47 car", span: "tall" },
  { src: "/photos/estoril/img-8961.webp", alt: "Porsche 911 GT3 Cup cars at golden hour, Estoril", span: "wide" },
  { src: "/photos/dubai/dsc-7608.webp", alt: "Data crew on the pit wall at the Michelin 24H Dubai", span: "tall" },
  { src: "/photos/f4/irf-r4-ib-dsc6980.webp", alt: "Indian F4 paddock", span: "normal" },
  { src: "/photos/estoril/img-8970.webp", alt: "Porsche Sprint Challenge running at Estoril", span: "normal" },
  { src: "/photos/f4/irf-r4-ib-nz91511.webp", alt: "Indian F4 car through a corner", span: "wide" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "apps", label: "Apps" },
  { id: "research", label: "Research" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];
