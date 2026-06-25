"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./ui/MapLeaflet").then((mod) => mod.MapLeaflet), {
  ssr: false,
});

export function VisitarNos() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Mobile: Background Map with Overlay */}
      <div className="absolute inset-0 lg:hidden">
        <MapLeaflet
          latitude={41.2020057}
          longitude={-8.0951227}
          zoom={15}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Desktop: Split Layout */}
      <div className="flex h-full flex-row">
        {/* Text Side - Left */}
        <div className="relative z-10 flex w-full lg:w-1/2 items-center px-4 py-16 md:px-8 lg:pl-[max(2rem,calc((100vw-1536px)/2))]">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-white lg:text-black md:text-5xl lg:text-6xl">
              Visitar-nos
            </h2>

            {/* Horário */}
            <div className="mb-8">
              <h3 className="mb-4 font-serif text-2xl font-bold text-white lg:text-black">Horário</h3>
              <div className="space-y-2 font-sans text-lg text-white lg:text-zinc-700">
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  <span className="font-medium">Segunda:</span>
                  <span>12:30–16:00</span>

                  <span className="font-medium">Terça a Quinta:</span>
                  <span>12:30–17:00 · 19:00–23:00</span>

                  <span className="font-medium">Sexta e Sábado:</span>
                  <span>12:30–17:00 · 19:30–00:00</span>

                  <span className="font-medium">Domingo:</span>
                  <span className="opacity-70">Encerrado</span>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="mb-8">
              <h3 className="mb-4 font-serif text-2xl font-bold text-white lg:text-black">Contacto</h3>
              <div className="space-y-2 font-sans text-lg text-white lg:text-zinc-700">
                <p>
                  <a href="tel:+351919445826" className="transition-colors hover:text-cream lg:hover:text-brown">
                    +351 919 445 826
                  </a>
                </p>
              </div>
            </div>

            {/* Morada */}
            <div className="mb-8">
              <h3 className="mb-4 font-serif text-2xl font-bold text-white lg:text-black">Morada</h3>
              <p className="font-sans text-lg text-white lg:text-zinc-700">
                Rua de S.Lourenço, 195<br />
                4635-645 Marco de Canaveses<br />
                Portugal
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="tel:+351919445826"
                className="group relative inline-flex items-center overflow-hidden border-2 border-white lg:border-brown px-8 py-3 font-sans text-base font-semibold text-white lg:text-brown transition-all md:px-10 md:py-4 md:text-lg"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black lg:group-hover:text-white">
                  Reservar mesa
                </span>
                <span className="absolute inset-0 -z-0 bg-white lg:bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Side - Desktop Only, Right */}
        <motion.div
          className="hidden lg:block relative w-1/2"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MapLeaflet
            latitude={41.2020057}
            longitude={-8.0951227}
            zoom={15}
          />
        </motion.div>
      </div>
    </section>
  );
}
