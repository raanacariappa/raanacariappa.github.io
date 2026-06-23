"use client";

import { useEffect } from "react";

/**
 * Best-effort anti-clickjacking. GitHub Pages can't set X-Frame-Options /
 * frame-ancestors headers, so if the page is ever framed by another origin we
 * break out (or hide if the frame is sandboxed and we can't navigate).
 */
export function FrameGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.top && window.top !== window.self) {
      try {
        window.top.location.href = window.location.href;
      } catch {
        document.documentElement.style.display = "none";
      }
    }
  }, []);
  return null;
}
