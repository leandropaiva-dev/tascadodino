"use client";

import { motion } from "framer-motion";
import { DishCard } from "./ui/DishCard";
import { DishCarousel } from "./ui/DishCarousel";
import Link from "next/link";

const carouselDishes = [
  {
    imageSrc: "/pratos/RUIR5393.JPG",
    imageAlt: "Prato tradicional da Tasca Dino",
    dishName: "Pataniscas da Dona Amélia",
  },
  {
    imageSrc: "/pratos/RUIR5488.JPG",
    imageAlt: "Especialidade da casa",
    dishName: "Especialidade da Casa",
  },
  {
    imageSrc: "/pratos/RUIR5511.JPG",
    imageAlt: "Prato tradicional português",
    dishName: "Tradição Portuguesa",
  },
  {
    imageSrc: "/pratos/RUIR5558.JPG",
    imageAlt: "Receita da Tasca Dino",
    dishName: "Receita da Tasca",
  },
];

const gridDishes = [
  {
    imageSrc: "/pratos/RUIR5412.JPG",
    imageAlt: "Cozido à portuguesa",
    dishName: "Cozido à Portuguesa",
  },
  {
    imageSrc: "/pratos/RUIR5464.JPG",
    imageAlt: "Francesinha tradicional",
    dishName: "Francesinha",
  },
  {
    imageSrc: "/pratos/RUIR5472.JPG",
    imageAlt: "Alheira grelhada",
    dishName: "Alheira Grelhada",
  },
  {
    imageSrc: "/pratos/RUIR5579.JPG",
    imageAlt: "Prato tradicional",
    dishName: "Tradição à Mesa",
  },
];

export function BentoGrid() {
  // Combine all dishes for mobile carousel
  const allDishes = [...carouselDishes, ...gridDishes];

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="w-full">
        {/* Título */}
        <motion.h2
          className="mb-12 text-center font-serif text-4xl font-bold md:mb-16 md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          À mesa na Tasca Dino
        </motion.h2>

        {/* Bento Grid achatado com aspect-video */}
        <div className="mb-12 grid grid-cols-1 gap-px md:grid-cols-4 md:grid-rows-2 md:gap-px">
          {/* Mobile: Carrossel com TODOS os pratos */}
          <div className="md:hidden h-[400px]">
            <DishCarousel dishes={allDishes} isMobileMain={true} />
          </div>

          {/* Desktop: Bento Grid */}
          <div className="hidden md:col-span-2 md:row-span-2 md:block">
            <DishCarousel dishes={carouselDishes} />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={gridDishes[0].imageSrc}
              imageAlt={gridDishes[0].imageAlt}
              dishName={gridDishes[0].dishName}
            />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={gridDishes[1].imageSrc}
              imageAlt={gridDishes[1].imageAlt}
              dishName={gridDishes[1].dishName}
            />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={gridDishes[2].imageSrc}
              imageAlt={gridDishes[2].imageAlt}
              dishName={gridDishes[2].dishName}
            />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={gridDishes[3].imageSrc}
              imageAlt={gridDishes[3].imageAlt}
              dishName={gridDishes[3].dishName}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center px-4 md:px-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/ementa"
              className="group relative inline-flex items-center overflow-hidden border-2 border-brown px-8 py-3 font-sans text-base font-semibold text-brown transition-all md:px-10 md:py-4 md:text-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Ver ementa completa
              </span>
              <span className="absolute inset-0 -z-0 translate-y-full bg-brown transition-transform duration-300 ease-out group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
