"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

// Dados da ementa real (categorias + pratos com imagens)
const menuData = {
  "Petiscos": [
    { name: "Tábua de Presunto", image: "/pratos/RUIR5608.JPG" },
    { name: "Tábua de Presunto e Queijo", image: "/pratos/RUIR5613.JPG" },
    { name: "Pataniscas de Bacalhau (6unid)", image: "/pratos/RUIR5393.JPG" },
    { name: "Moelas", image: "/pratos/RUIR5488.JPG" },
    { name: "Rojões", image: "/pratos/RUIR5511.JPG" },
    { name: "Alheira", image: "/pratos/RUIR5472.JPG" },
    { name: "Chouriço Grelhado", image: "/pratos/RUIR5558.JPG" },
    { name: "Pastelão", image: "/pratos/RUIR5579.JPG" },
    { name: "Pastelão de Bacalhau", image: "/pratos/RUIR5412.JPG" },
    { name: "Pastelão de Batata", image: "/pratos/RUIR5464.JPG" },
    { name: "Punheta de Bacalhau (2p)", image: "/pratos/RUIR5393.JPG" },
    { name: "Bacalhau aos Trambolhões (2p)", image: "/pratos/RUIR5488.JPG" },
    { name: "Feverinhas em Vinha d'alhos (2p)", image: "/pratos/RUIR5511.JPG" },
    { name: "Pica-Pau (2p)", image: "/pratos/RUIR5558.JPG" },
    { name: "Prego no Pão", image: "/pratos/RUIR5579.JPG" },
    { name: "Prego no Prato", image: "/pratos/RUIR5412.JPG" },
  ],
  "Pratos": [
    { name: "Arroz de Hortos com Posta de Vitela na Brasa", image: "/pratos/RUIR5412.JPG" },
    { name: "Arroz de Feijão com Feverinhas em Vinha d'alho", image: "/pratos/RUIR5488.JPG" },
    { name: "Frango Frito, Batata Rústica e Salada", image: "/pratos/RUIR5511.JPG" },
    { name: "Pataniscas de Bacalhau com Arroz de Tomate", image: "/pratos/RUIR5393.JPG" },
    { name: "Bacalhau Assado na Brasa (2p)", image: "/pratos/RUIR5558.JPG" },
    { name: "Bacalhau Frito de Cebolada e Batata Frita (2p)", image: "/pratos/RUIR5579.JPG" },
  ],
  "Pratos por Encomenda": [
    { name: "Arroz de Cabidela (3p)", image: "/pratos/RUIR5511.JPG" },
    { name: "Arroz de Cabidela (6p)", image: "/pratos/RUIR5511.JPG" },
    { name: "Frango Estufado com Ervilhas e Arroz do Forno (6p)", image: "/pratos/RUIR5488.JPG" },
    { name: "Costela Mendinha Assada no Forno a lenha (6p)", image: "/pratos/RUIR5412.JPG" },
    { name: "Anho Assado no Forno (4p)", image: "/pratos/RUIR5464.JPG" },
    { name: "Bacalhau Assado no Forno (4p)", image: "/pratos/RUIR5558.JPG" },
    { name: "Rabo de Boi Estufado (4p)", image: "/pratos/RUIR5579.JPG" },
    { name: "Galo Assado no Forno a lenha (6p)", image: "/pratos/RUIR5472.JPG" },
    { name: "Lombo Assado no Forno com Castanhas (4p)", image: "/pratos/RUIR5613.JPG" },
  ],
  "Sobremesas": [
    { name: "Leite Creme Quente servido na Panela (2p)", image: "/pratos/RUIR5393.JPG" },
    { name: "Rabanada com Vinho do Porto", image: "/pratos/RUIR5488.JPG" },
    { name: "Pão-de-ló Húmido (se disponível)", image: "/pratos/RUIR5511.JPG" },
    { name: "Aletria Quente (2p)", image: "/pratos/RUIR5558.JPG" },
    { name: "Abacaxi", image: "/pratos/RUIR5579.JPG" },
    { name: "Laranja com Canela", image: "/pratos/RUIR5412.JPG" },
    { name: "Queijo com Compota e Biscoitos de Vinho do Porto", image: "/pratos/RUIR5464.JPG" },
  ],
};

export default function Ementa() {
  const categories = ["Todos", "Petiscos", "Pratos", "Sobremesas", "Pratos por Encomenda"];
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // Combinar todos os pratos quando categoria é "Todos"
  const displayedItems = activeCategory === "Todos"
    ? Object.values(menuData).flat()
    : menuData[activeCategory as keyof typeof menuData];

  // Funções do carrossel
  const openCarousel = (index: number) => {
    setStartIndex(index);
    setCarouselOpen(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
    document.body.style.overflow = 'unset';
    document.documentElement.style.overflow = 'unset';
  };

  // Keyboard navigation (ESC para fechar)
  useEffect(() => {
    if (!carouselOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCarousel();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselOpen]);

  // GSAP Scroll Reveal para os cards
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.menu-card');

    // Primeira fileira (primeiros 4 cards em desktop, primeiro card em mobile)
    const firstRowCards = Array.from(cards).slice(0, 4);
    const restCards = Array.from(cards).slice(4);

    // Primeira fileira: reveal imediato ao carregar
    gsap.fromTo(
      firstRowCards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3, // pequeno delay após página carregar
      }
    );

    // Resto dos cards: reveal com scroll
    if (restCards.length > 0) {
      gsap.fromTo(
        restCards,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: restCards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeCategory]); // Re-run quando mudar categoria

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section com vídeo */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://res.cloudinary.com/dmqpoaiq5/video/upload/v1782676513/tasca-dino/tasca-dino/RUIR5648.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            A Nossa Ementa
          </motion.h1>
          <motion.p
            className="mb-8 font-sans text-lg text-white/90 md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Cozinha tradicional portuguesa. Receitas que passam de geração em geração.
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

      {/* Tabs + Menu Content */}
      <section className="relative w-full py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-sans text-sm font-semibold transition-all cursor-pointer md:px-8 md:py-4 md:text-base ${
                  activeCategory === category
                    ? "bg-brown text-white border-2 border-brown"
                    : "bg-transparent text-brown border-2 border-beige hover:bg-brown/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items - Grid 4 colunas com GSAP Scroll Reveal */}
          <div
            ref={gridRef}
            className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {displayedItems.map((item, index) => (
              <div
                key={`${activeCategory}-${item.name}-${index}`}
                className="menu-card group relative overflow-hidden bg-white cursor-pointer"
                onClick={() => openCarousel(index)}
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={index < 8 ? "eager" : "lazy"}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Nome sobreposto na imagem */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-base font-bold text-white md:text-lg leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota */}
          <motion.p
            className="mt-12 text-center font-sans text-sm text-zinc-500 md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ementa sujeita a alterações sazonais e disponibilidade de produtos.
          </motion.p>
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
            Pronto para provar?
          </motion.h2>
          <motion.p
            className="mb-10 font-sans text-lg text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reservas apenas por telefone. Ligue e garanta a sua mesa.
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

      {/* Carrossel Modal */}
      <AnimatePresence>
        {carouselOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 cursor-pointer overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCarousel}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 z-[101] text-white hover:text-brown transition-colors p-2 cursor-pointer"
              aria-label="Fechar"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Carrossel */}
            <div
              className="w-full max-w-5xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Carousel
                opts={{
                  startIndex: startIndex,
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {displayedItems.map((item, index) => (
                    <CarouselItem key={`carousel-${index}`}>
                      <div className="flex flex-col items-center gap-6">
                        {/* Imagem */}
                        <div className="relative w-full aspect-square max-h-[80vh] md:max-h-[75vh]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 90vw"
                            priority={index === startIndex || index === startIndex + 1 || index === startIndex - 1}
                            loading={index === startIndex || index === startIndex + 1 || index === startIndex - 1 ? "eager" : "lazy"}
                            quality={85}
                          />
                        </div>

                        {/* Nome do prato (fora da imagem) */}
                        <h3 className="font-serif text-2xl font-bold text-white md:text-3xl text-center">
                          {item.name}
                        </h3>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Botões de navegação customizados - apenas desktop */}
                <CarouselPrevious className="hidden md:flex left-4 bg-white/10 border-white/20 text-white hover:bg-brown hover:text-white hover:border-brown cursor-pointer" />
                <CarouselNext className="hidden md:flex right-4 bg-white/10 border-white/20 text-white hover:bg-brown hover:text-white hover:border-brown cursor-pointer" />
              </Carousel>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
