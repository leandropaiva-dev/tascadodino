"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface DishCardProps {
  imageSrc: string;
  imageAlt: string;
  dishName: string;
  fullHeight?: boolean;
}

export function DishCard({ imageSrc, imageAlt, dishName, fullHeight = false }: DishCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/ementa">
      <motion.div
        className={`group relative overflow-hidden cursor-pointer ${fullHeight ? 'h-full' : 'aspect-square'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlay escuro que aparece no hover */}
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Tag com nome do prato */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
          {dishName}
        </h3>
      </motion.div>
      </motion.div>
    </Link>
  );
}
