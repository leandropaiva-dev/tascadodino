"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Dish {
  imageSrc: string;
  imageAlt: string;
  dishName: string;
}

interface DishCarouselProps {
  dishes: Dish[];
  autoPlayInterval?: number;
  isMobileMain?: boolean;
}

export function DishCarousel({ dishes, autoPlayInterval = 4000, isMobileMain = false }: DishCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [dishes.length, autoPlayInterval]);

  const currentDish = dishes[currentIndex];

  return (
    <Link href="/ementa">
      <div
        className="group relative h-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentDish.imageSrc}
            alt={currentDish.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Gradient de baixo para cima - sempre visível */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Overlay escuro no hover (desktop) */}
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} ${isMobileMain ? 'md:block hidden' : ''}`} />

          {/* Tag com nome do prato */}
          <motion.div
            className={`absolute inset-x-0 bottom-0 p-6 z-10 ${isMobileMain ? 'md:opacity-0' : ''}`}
            initial={{ y: 20, opacity: isMobileMain ? 1 : 0 }}
            animate={{
              y: isMobileMain ? 0 : (isHovered ? 0 : 20),
              opacity: isMobileMain ? 1 : (isHovered ? 1 : 0)
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
              {currentDish.dishName}
            </h3>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots de navegação */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {dishes.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para prato ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </Link>
  );
}
