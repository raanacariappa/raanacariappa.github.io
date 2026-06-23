import type { Metadata, Viewport } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FrameGuard } from "@/components/FrameGuard";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://raanacariappa.github.io";

// Defense-in-depth CSP for a fully static, no-backend site. Inline script/style
// are required by Next's hydration + Framer Motion; everything else is self-only.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "media-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060607",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
  applicationName: `${profile.name} — Portfolio`,
  referrer: "strict-origin-when-cross-origin",
  robots: { index: true, follow: true },
  keywords: [
    "motorsport engineer",
    "race engineer",
    "data engineer",
    "telemetry",
    "Cranfield",
    "GT3",
    "vehicle dynamics",
    "Raana Cariappa Kalianda",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.role}`, description: profile.intro },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </head>
      <body className="grain min-h-screen bg-void text-bone antialiased">
        <FrameGuard />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
