"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    text: "Comida caseira de excelência. As pataniscas são mesmo as melhores que já comi. Ambiente familiar e acolhedor.",
  },
  {
    name: "João Santos",
    text: "Restaurante tradicional português autêntico. Qualidade consistente há anos. Recomendo vivamente o cabrito no forno.",
  },
  {
    name: "Ana Costa",
    text: "Uma verdadeira tasca portuguesa. Atendimento simpático, doses generosas e preços justos. Voltamos sempre!",
  },
  {
    name: "Carlos Oliveira",
    text: "O melhor bacalhau à Brás que já provei. A receita da casa é incomparável. Um verdadeiro tesouro gastronómico!",
  },
  {
    name: "Teresa Fernandes",
    text: "Ambiente autêntico, comida deliciosa e atendimento familiar. Sinto-me em casa sempre que venho. Altamente recomendado!",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-brown-dark py-16 md:py-24">
      {/* Gradiente leve para textura */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Stars */}
        <div className="mb-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-8 w-8 fill-current text-yellow-400 md:h-10 md:w-10"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="relative mb-10 min-h-[240px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-8 font-sans text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="font-serif text-lg font-semibold text-white md:text-xl">
                {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-yellow-400 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para testemunho ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-base font-semibold text-white transition-colors hover:text-yellow-400 md:text-lg"
          >
            Read This on Google
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
