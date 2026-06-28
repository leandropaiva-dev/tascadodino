"use client";

import { useEffect, useState } from "react";

export default function ScrollSmoothProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect if desktop
    const checkDesktop = () => window.innerWidth >= 768;
    setIsMobile(!checkDesktop());

    const handleResize = () => setIsMobile(!checkDesktop());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only load on desktop
    if (isMobile) return;

    let cleanup: (() => void) | undefined;

    const loadScrollSmooth = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");
      if (!wrapper || !content) return;

      const smoother = ScrollSmoother.create({
        wrapper,
        content,
        smooth: 2,
        effects: true,
        smoothTouch: 0.3,
        normalizeScroll: true,
      });

      cleanup = () => {
        smoother?.kill();
      };
    };

    loadScrollSmooth();

    return () => {
      if (cleanup) cleanup();
    };
  }, [isMobile]);

  return <>{children}</>;
}
