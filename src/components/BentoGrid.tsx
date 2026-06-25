"use client";

import { motion } from "framer-motion";
import { DishCard } from "./ui/DishCard";
import { DishCarousel } from "./ui/DishCarousel";
import Link from "next/link";

const dishes = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670",
    imageAlt: "Pataniscas tradicionais portuguesas",
    dishName: "Pataniscas da Dona Amélia",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574",
    imageAlt: "Cozido à portuguesa",
    dishName: "Cozido à Portuguesa",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2680",
    imageAlt: "Francesinha tradicional",
    dishName: "Francesinha",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=2574",
    imageAlt: "Alheira grelhada",
    dishName: "Alheira Grelhada",
  },
];

export function BentoGrid() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="w-full">
        {/* Título */}
        <motion.h2
          className="mb-12 text-center font-serif text-4xl font-bold md:mb-16 md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          À mesa na Tasca do Dino
        </motion.h2>

        {/* Bento Grid achatado com aspect-video */}
        <div className="mb-12 grid grid-cols-1 gap-px md:grid-cols-4 md:grid-rows-2 md:gap-px">
          {/* Mobile: Carrossel */}
          <div className="md:hidden">
            <DishCarousel dishes={dishes} isMobileMain={true} />
          </div>

          {/* Desktop: Bento Grid */}
          <div className="hidden md:col-span-2 md:row-span-2 md:block">
            <DishCarousel dishes={dishes} />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={dishes[1].imageSrc}
              imageAlt={dishes[1].imageAlt}
              dishName={dishes[1].dishName}
            />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={dishes[2].imageSrc}
              imageAlt={dishes[2].imageAlt}
              dishName={dishes[2].dishName}
            />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={dishes[3].imageSrc}
              imageAlt={dishes[3].imageAlt}
              dishName={dishes[3].dishName}
            />
          </div>

          <div className="hidden md:block">
            <DishCard
              imageSrc={dishes[0].imageSrc}
              imageAlt={dishes[0].imageAlt}
              dishName={dishes[0].dishName}
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
