"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrcs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function Hero({
  title,
  subtitle,
  videoSrcs,
  imageSrc,
  imageAlt = "",
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrcs || videoSrcs.length === 0) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSrcs.length);
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [videoSrcs]);

  // Reload video when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {
        // Autoplay might be blocked, ignore error
      });
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        {videoSrcs && videoSrcs.length > 0 ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center"
          >
            <source src={videoSrcs[currentVideoIndex]} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
          />
        ) : null}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          className="mb-6 font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mb-12 max-w-2xl font-sans text-xl font-light italic tracking-wide md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col gap-3 md:flex-row md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Primary CTA */}
          <motion.a
            href={primaryCtaHref}
            className="group relative overflow-hidden bg-white px-8 py-3 font-sans text-base font-semibold text-black transition-all md:px-10 md:py-4 md:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{primaryCtaText}</span>
            <span className="absolute inset-0 -z-0 bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
          </motion.a>

          {/* Secondary CTA */}
          {secondaryCtaText && secondaryCtaHref && (
            <motion.a
              href={secondaryCtaHref}
              className="group relative overflow-hidden border-2 border-white px-8 py-3 font-sans text-base font-semibold text-white transition-all md:px-10 md:py-4 md:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{secondaryCtaText}</span>
              <span className="absolute inset-0 -z-0 bg-white transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg
          className="h-5 w-5 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
