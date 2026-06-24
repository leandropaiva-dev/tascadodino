"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface StorySectionProps {
  title: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function StorySection({
  title,
  paragraphs,
  linkText,
  linkHref,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: StorySectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Mobile: Background Image with Overlay */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
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

        {/* Image Side - Desktop Only */}
        <motion.div
          className="hidden lg:block relative w-1/2"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
