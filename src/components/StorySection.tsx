"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

interface StorySectionProps {
  title: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
  images: { src: string; alt: string }[];
  imagePosition?: "left" | "right";
  autoPlayInterval?: number;
}

export function StorySection({
  title,
  paragraphs,
  linkText,
  linkHref,
  images,
  imagePosition = "right",
  autoPlayInterval = 4000,
}: StorySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const currentImage = images[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Mobile: Background Image with Overlay - Carousel */}
      <div className="absolute inset-0 lg:hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Dots de navegação - Mobile */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Split Layout */}
      <div className={`flex h-full ${imagePosition === "left" ? "flex-row-reverse" : "flex-row"}`}>
        {/* Text Side */}
        <div className={`relative z-10 flex w-full lg:w-1/2 items-center px-4 py-16 md:px-8 ${
          imagePosition === "left"
            ? "lg:pr-[max(2rem,calc((100vw-1536px)/2))] lg:pl-8"
            : "lg:pl-[max(2rem,calc((100vw-1536px)/2))]"
        }`}>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-white lg:text-black md:text-5xl lg:text-6xl">
              {title}
            </h2>

            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 font-sans text-lg leading-relaxed text-white lg:text-zinc-700 md:text-xl"
              >
                {paragraph}
              </p>
            ))}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={linkHref}
                className="group relative inline-flex items-center overflow-hidden border-2 border-white lg:border-brown px-8 py-3 font-sans text-base font-semibold text-white lg:text-brown transition-all md:px-10 md:py-4 md:text-lg"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black lg:group-hover:text-white">
                  {linkText}
                </span>
                <span className="absolute inset-0 -z-0 bg-white lg:bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Side - Desktop Carousel */}
        <div className="hidden lg:block relative w-1/2">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots de navegação - Desktop */}
          {images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
