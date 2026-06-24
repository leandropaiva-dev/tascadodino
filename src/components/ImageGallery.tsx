"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  layout?: "grid" | "masonry";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ImageGallery({ images, layout = "grid" }: ImageGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (layout === "masonry") {
    return (
      <motion.div
        className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative break-inside-avoid overflow-hidden rounded-lg"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full rounded-lg object-cover transition-all duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/60 rounded-lg flex items-end p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white">
                  <p className="font-serif text-xl font-bold">{image.alt}</p>
                  {image.description && (
                    <p className="mt-2 text-sm font-light">{image.description}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Grid layout
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="group relative aspect-square overflow-hidden rounded-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">
              <p className="font-serif text-xl font-bold">{image.alt}</p>
              {image.description && (
                <p className="mt-2 text-sm font-light">{image.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
