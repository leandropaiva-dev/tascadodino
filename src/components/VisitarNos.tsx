"use client";

import { motion } from "framer-motion";

export function VisitarNos() {
  return (
    <Section background="cream">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
            Visitar-nos
          </h2>

          {/* Horário */}
          <div className="mb-8">
            <h3 className="mb-4 font-serif text-2xl font-bold">Horário</h3>
            <div className="space-y-2 font-sans text-lg text-zinc-700">
              <p>Segunda a Domingo: 12:00 - 15:00 · 19:00 - 22:00</p>
              <p className="text-sm italic text-zinc-600">
                Reservas recomendadas
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="mb-8">
            <h3 className="mb-4 font-serif text-2xl font-bold">Contacto</h3>
            <div className="space-y-2 font-sans text-lg text-zinc-700">
              <p>
                <a
                  href="tel:+351255522800"
                  className="transition-colors hover:text-brown"
                >
                  +351 255 522 800
                </a>
              </p>
            </div>
          </div>

          {/* Morada */}
          <div className="mb-8">
            <h3 className="mb-4 font-serif text-2xl font-bold">Morada</h3>
            <p className="font-sans text-lg text-zinc-700">
              Marco de Canaveses
              <br />
              Portugal
            </p>
          </div>

          {/* Formas de pagamento */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold">
              Formas de pagamento
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-md border border-zinc-300 bg-white px-4 py-2 font-sans text-sm font-medium">
                Dinheiro
              </span>
              <span className="rounded-md border border-zinc-300 bg-white px-4 py-2 font-sans text-sm font-medium">
                Multibanco
              </span>
              <span className="rounded-md border border-zinc-300 bg-white px-4 py-2 font-sans text-sm font-medium">
                Visa
              </span>
              <span className="rounded-md border border-zinc-300 bg-white px-4 py-2 font-sans text-sm font-medium">
                Mastercard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mapa placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full min-h-[400px] overflow-hidden rounded-lg bg-zinc-200 lg:min-h-[600px]"
        >
          <div className="flex h-full items-center justify-center">
            <p className="font-sans text-zinc-500">
              Mapa (integrar Google Maps)
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Section component inline
function Section({
  children,
  background = "white",
  className = "",
}: {
  children: React.ReactNode;
  background?: "white" | "cream" | "black";
  className?: string;
}) {
  const bgClass =
    background === "cream"
      ? "bg-cream"
      : background === "black"
        ? "bg-black text-white"
        : "bg-white";

  return (
    <section
      className={`relative w-full ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8 md:py-32">
        {children}
      </div>
    </section>
  );
}
