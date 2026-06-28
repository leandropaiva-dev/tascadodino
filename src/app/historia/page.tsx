"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";

export default function Historia() {
  return (
    <main>
      {/* Hero - altura completa */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/storysection.JPG"
            alt="Casa centenária da Tasca Dino"
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
            1982 — Nasce a Tasca Dino
          </motion.h1>

          <motion.p
            className="mb-6 max-w-3xl font-sans text-lg leading-relaxed text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Foi em 1982 que o Sr. Dino e a D. Amélia deram uma nova vida à casa. O negócio de cereais — milho e centeio para as padarias do Grande Porto — foi dando lugar, aos poucos, à taberna.
          </motion.p>

          <motion.p
            className="mb-6 max-w-3xl font-sans text-lg leading-relaxed text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.27, ease: [0.22, 1, 0.36, 1] }}
          >
            A D. Amélia entrou na cozinha — e nunca mais saiu. As pataniscas, o cabrito, a cabidela: receitas que eram da casa e que passaram a ser da tasca.
          </motion.p>

          <motion.p
            className="mb-8 max-w-3xl font-sans text-lg leading-relaxed text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.29, ease: [0.22, 1, 0.36, 1] }}
          >
            O que era ponto de passagem virou ponto de paragem. A mercearia ficou, mas a mesa encheu-se.
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

      {/* 1889 — A Casa Centenária */}
      <StorySection
        title="1889 — Uma casa levantada para durar"
        paragraphs={[
          "Esta casa nasceu em 1889, pelas mãos de António Ferraz Conde. Madeira, pedra e trabalho — levantada para abrigar uma família e, com o tempo, tornar-se no coração comercial da freguesia.",
          "Durante décadas, foi a mercearia onde toda a gente passava. O pão, o azeite, as conversas do dia. Um espaço que guardava tanto mantimentos como memórias."
        ]}
        linkText="Reservar mesa"
        linkHref="/contacto"
        images={[
          { src: "/storysection2.JPG", alt: "Interior histórico da casa" },
          { src: "/storysection3.JPG", alt: "Detalhes da construção centenária" }
        ]}
        imagePosition="right"
      />

      {/* Segunda Geração com Parallax */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image com Parallax */}
        <div
          className="absolute inset-0"
          data-speed="0.8"
        >
          <Image
            src="/pratos/fundomercearia.JPG"
            alt="Fundo mercearia"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Hoje — A segunda geração
            </motion.h2>
            <motion.p
              className="mb-6 font-sans text-lg leading-relaxed text-white/90 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A Tasca Dino está agora na segunda geração. Continuamos a receber como sempre se recebeu por aqui: com a mesa cheia, a porta aberta e o gosto genuíno de quem nos visita se sentir em casa.
            </motion.p>
            <motion.p
              className="mb-8 font-sans text-lg leading-relaxed text-white/90 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              O compromisso é simples: honrar o legado, manter as receitas e preservar o lugar onde as histórias acontecem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="/contacto"
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
        </div>
      </section>

      {/* A Mercearia Tradicional */}
      <StorySection
        title="A mercearia que resiste ao tempo"
        paragraphs={[
          "Daquelas casas onde a mercearia mora à entrada e a tradição se senta logo à mesa. Ainda hoje, dentro da Tasca Dino, produtos locais, memórias de um tempo que teima em não passar, e o mesmo espírito de sempre.",
          "É um dos poucos lugares onde ainda se pode comprar como antigamente — e sentir que o tempo parou."
        ]}
        linkText="Ver a nossa ementa"
        linkHref="/ementa"
        images={[
          { src: "/storysection.JPG", alt: "Mercearia tradicional" }
        ]}
        imagePosition="left"
      />
    </main>
  );
}
