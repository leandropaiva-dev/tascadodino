"use client";

import { motion } from "framer-motion";
import { DishCard } from "@/components/ui/DishCard";
import { DishCarousel } from "@/components/ui/DishCarousel";

interface MenuSectionProps {
  carouselDishes: Array<{
    imageSrc: string;
    imageAlt: string;
    dishName: string;
  }>;
  gridDishes: Array<{
    imageSrc: string;
    imageAlt: string;
    dishName: string;
  }>;
}

export function MenuSection({ carouselDishes, gridDishes }: MenuSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Mobile: Apenas o carrossel em fullscreen */}
      <div className="absolute inset-0 h-screen lg:hidden">
        <DishCarousel
          dishes={carouselDishes}
          autoPlayInterval={5000}
          isMobileMain={true}
        />
      </div>

      {/* Desktop: Grid com carrossel quadrado ao centro */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-0" style={{ height: '50vw' }}>
        {/* Coluna esquerda: 3 cards verticais (1/4 da largura = 25vw) */}
        <motion.div
          className="relative col-span-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid h-full grid-cols-1 grid-rows-3 gap-0">
            {gridDishes.slice(0, 3).map((dish, index) => (
              <div key={index} className="relative">
                <DishCard
                  imageSrc={dish.imageSrc}
                  imageAlt={dish.imageAlt}
                  dishName={dish.dishName}
                  fullHeight={true}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Centro: Carrossel quadrado (2/4 da largura = 50vw × 50vw) */}
        <motion.div
          className="relative col-span-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative" style={{ width: '50vw', height: '50vw' }}>
            <DishCarousel
              dishes={carouselDishes}
              autoPlayInterval={5000}
              isMobileMain={false}
            />
          </div>
        </motion.div>

        {/* Coluna direita: 3 cards verticais (1/4 da largura = 25vw) */}
        <motion.div
          className="relative col-span-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid h-full grid-cols-1 grid-rows-3 gap-0">
            {gridDishes.slice(3, 6).map((dish, index) => (
              <div key={index} className="relative">
                <DishCard
                  imageSrc={dish.imageSrc}
                  imageAlt={dish.imageAlt}
                  dishName={dish.dishName}
                  fullHeight={true}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
