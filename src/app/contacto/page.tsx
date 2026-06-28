"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("@/components/ui/MapLeaflet").then((mod) => mod.MapLeaflet), {
  ssr: false,
});

const faqs = [
  {
    question: "Quais são as especialidades da casa?",
    answer: "Todos os dias há bacalhau e posta de vitela na brasa. As verdadeiras especialidades regionais estão disponíveis por encomenda: anho assado no forno de lenha, arroz de cabidela, cozido à portuguesa e as famosas pataniscas da Dona Amélia. Tudo feito com receitas que passam de geração em geração."
  },
  {
    question: "É necessário reservar?",
    answer: "Recomendamos sempre reserva, especialmente ao fim de semana e para grupos. Ligue para +351 919 445 826 e garantimos-lhe lugar à mesa."
  },
  {
    question: "A mercearia está aberta ao público?",
    answer: "Sim! A mercearia tradicional mora à entrada e funciona no mesmo horário da tasca. Pode visitar-nos e levar produtos locais para casa — vinhos regionais, biscoitos tradicionais, compotas caseiras e muito mais."
  },
  {
    question: "Têm opções vegetarianas?",
    answer: "Sim, podemos adaptar alguns pratos. Entre em contacto connosco ao fazer a reserva para que possamos preparar algo especial."
  },
  {
    question: "Como funciona a encomenda de pratos especiais?",
    answer: "Alguns dos nossos melhores pratos — como o anho assado no forno de lenha, o arroz de cabidela e o cozido à portuguesa — só estão disponíveis por encomenda. Ligue-nos com antecedência e preparamos tudo com o cuidado de sempre."
  },
];

export default function Contacto() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero - 1/2 altura */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/storysection.JPG"
            alt="Interior da Tasca Dino"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            className="mb-6 font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reservar Mesa
          </motion.h1>

          <motion.p
            className="mb-8 font-sans text-lg text-white/90 md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Esperamos por si com a porta aberta e a mesa cheia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="tel:+351919445826"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-8 py-3 font-sans text-base font-semibold text-black transition-all md:px-10 md:py-4 md:text-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Reservar mesa
              </span>
              <span className="absolute inset-0 z-0 bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Informação Prática + Mapa (layout split igual VisitarNos) */}
      <section className="relative w-full overflow-hidden lg:h-screen bg-white mt-12 md:mt-16 lg:mt-20">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Info Side - Left */}
          <div className="relative z-10 flex w-full lg:w-1/2 items-center px-4 sm:px-6 lg:px-8 py-12 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl">
                Como Visitar-nos
              </h2>

              {/* Horário */}
              <div className="mb-8">
                <h3 className="mb-4 font-serif text-2xl font-bold text-black">Horário</h3>
                <div className="space-y-2 font-sans text-lg text-zinc-700">
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
                <h3 className="mb-4 font-serif text-2xl font-bold text-black">Contacto</h3>
                <div className="space-y-2 font-sans text-lg text-zinc-700">
                  <p>
                    <a href="tel:+351919445826" className="transition-colors hover:text-brown">
                      +351 919 445 826
                    </a>
                  </p>
                </div>
              </div>

              {/* Morada */}
              <div className="mb-8">
                <h3 className="mb-4 font-serif text-2xl font-bold text-black">Morada</h3>
                <p className="font-sans text-lg text-zinc-700 mb-4">
                  Rua de S.Lourenço, 195<br />
                  4635-645 Marco de Canaveses<br />
                  Portugal
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=41.2020057,-8.0951227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brown transition-colors hover:text-brown-dark"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Abrir no Google Maps
                  </a>
                  <a
                    href="https://waze.com/ul?ll=41.2020057,-8.0951227&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brown transition-colors hover:text-brown-dark"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Abrir no Waze
                  </a>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="tel:+351919445826"
                  className="group relative inline-flex items-center overflow-hidden border-2 border-brown px-8 py-3 font-sans text-base font-semibold text-brown transition-all md:px-10 md:py-4 md:text-lg"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Reservar mesa
                  </span>
                  <span className="absolute inset-0 -z-0 bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Map Side - Right */}
          <motion.div
            className="relative w-full h-96 lg:h-auto lg:w-1/2 lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))]"
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

      {/* FAQs - Accordion */}
      <section className="relative w-full py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <motion.h2
            className="mb-12 text-center font-serif text-4xl font-bold text-black md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Perguntas Frequentes
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-zinc-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-cream transition-colors duration-200"
                >
                  <h3 className="font-serif text-lg font-bold text-black md:text-xl pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="w-6 h-6 flex-shrink-0 text-brown"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2 bg-cream/30">
                        <p className="font-sans text-base text-zinc-700 md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section com vídeo */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://res.cloudinary.com/dmqpoaiq5/video/upload/v1782676518/tasca-dino/tasca-dino/mercearia.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 text-center">
          <motion.h2
            className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Pronto para nos visitar?
          </motion.h2>
          <motion.p
            className="mb-10 font-sans text-lg text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ligue agora e reserve a sua mesa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="tel:+351919445826"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-8 py-3 font-sans text-base font-semibold text-black transition-all md:px-10 md:py-4 md:text-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Reservar mesa
              </span>
              <span className="absolute inset-0 z-0 bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
