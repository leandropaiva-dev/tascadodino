"use client";

import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { Section } from "@/components/Section";
import { UspCard } from "@/components/UspCard";
import { DishCard } from "@/components/ui/DishCard";
import { DishCarousel } from "@/components/ui/DishCarousel";
import { ImageGallery } from "@/components/ImageGallery";
import { CtaButton } from "@/components/CtaButton";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero
        title="Tasca do Dino"
        subtitle="Onde a tradição se senta à mesa."
        videoSrcs={["/herocompleto.mp4"]}
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574"
        imageAlt="Interior tradicional do restaurante"
        primaryCtaText="Reservar mesa"
        primaryCtaHref="/contacto"
        secondaryCtaText="Ver ementa"
        secondaryCtaHref="/ementa"
      />

      {/* Boas-vindas / Teaser da história */}
      <StorySection
        title="Entre paredes que contam histórias"
        paragraphs={[
          "Estamos numa casa centenária, levantada em 1889, que durante décadas foi a mercearia e o ponto de encontro da nossa terra. Em 1982, o Sr. Dino e a D. Amélia deram-lhe uma nova vida — e nasceu a Tasca do Dino.",
          "Hoje, já na segunda geração, continuamos a receber como sempre se recebeu por aqui: com a mesa cheia, a porta aberta e o gosto genuíno de quem nos visita se sentir em casa."
        ]}
        linkText="Conhecer a nossa história"
        linkHref="/historia"
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670"
        imageAlt="Fachada da casa centenária"
        imagePosition="right"
      />

      {/* À mesa na Tasca do Dino - Bento Grid */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
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
          <div className="mb-12 grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-2">
            {/* Card grande com carrossel - 2 colunas, 2 linhas */}
            <div className="col-span-1 aspect-[4/5] md:aspect-auto md:col-span-2 md:row-span-2">
              <DishCarousel
                dishes={[
                  {
                    imageSrc: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670",
                    imageAlt: "Pataniscas tradicionais portuguesas",
                    dishName: "Pataniscas da Dona Amélia"
                  },
                  {
                    imageSrc: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574",
                    imageAlt: "Cozido à portuguesa",
                    dishName: "Cozido à Portuguesa"
                  },
                  {
                    imageSrc: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2680",
                    imageAlt: "Francesinha tradicional",
                    dishName: "Francesinha"
                  },
                  {
                    imageSrc: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=2574",
                    imageAlt: "Alheira grelhada",
                    dishName: "Alheira Grelhada"
                  }
                ]}
                autoPlayInterval={5000}
                isMobileMain={true}
              />
            </div>

            {/* 4 cards pequenos - escondidos no mobile */}
            <div className="col-span-1 hidden md:block">
              <DishCard
                imageSrc="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2631"
                imageAlt="Anho assado no forno"
                dishName="Anho no Forno"
              />
            </div>
            <div className="col-span-1 hidden md:block">
              <DishCard
                imageSrc="https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2574"
                imageAlt="Bacalhau à Brás tradicional"
                dishName="Bacalhau à Brás"
              />
            </div>
            <div className="col-span-1 hidden md:block">
              <DishCard
                imageSrc="https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=2574"
                imageAlt="Polvo à lagareiro"
                dishName="Polvo à Lagareiro"
              />
            </div>
            <div className="col-span-1 hidden md:block">
              <DishCard
                imageSrc="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2680"
                imageAlt="Arroz de pato tradicional"
                dishName="Arroz de Pato"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
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
                <span className="absolute inset-0 -z-0 bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Mercearia - Layout split */}
      <StorySection
        title="A Mercearia"
        paragraphs={[
          "Antes de ser tasca, esta casa foi durante décadas a mercearia e o coração comercial da freguesia. Hoje, dentro do espaço, essa mercearia tradicional ainda vive — com produtos locais, memórias e o mesmo espírito de sempre.",
          "É um dos poucos lugares onde ainda se pode comprar como antigamente — e sentir que o tempo parou."
        ]}
        linkText="Conhecer a nossa história"
        linkHref="/historia"
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670"
        imageAlt="Interior da mercearia tradicional"
        imagePosition="left"
      />

      {/* USPs - Strategic placement, animated on scroll */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          <UspCard
            title="Desde 1982"
            description="Mais de 40 anos a servir a melhor gastronomia tradicional portuguesa"
            icon={
              <svg className="h-16 w-16 md:h-14 md:w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <UspCard
            title="Casa de 1889"
            description="História e tradição num edifício com mais de 130 anos"
            icon={
              <svg className="h-16 w-16 md:h-14 md:w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <UspCard
            title="Sabores autênticos"
            description="Receitas tradicionais transmitidas de geração em geração"
            icon={
              <svg className="h-16 w-16 md:h-14 md:w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
        </div>
      </Section>

      {/* About Preview - Two column layout with refined spacing */}
      <Section background="cream">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <FadeInWhenVisible>
            <h2 className="mb-8 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              A Nossa História
            </h2>
            <p className="mb-6 font-sans text-lg leading-relaxed text-zinc-700 md:text-xl">
              No coração de Marco de Canaveses, numa casa centenária de 1889,
              a Tasca do Dino serve desde 1982 o melhor da cozinha tradicional portuguesa.
            </p>
            <p className="mb-10 font-sans text-lg leading-relaxed text-zinc-700 md:text-xl">
              Cada prato conta uma história. Cada refeição é uma celebração
              da nossa terra e das nossas raízes.
            </p>
            <CtaButton
              href="/historia"
              variant="secondary"
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              Conheça a nossa história
            </CtaButton>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670"
                alt="Ambiente do restaurante"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </Section>

      {/* Menu Preview - Osteria Francescana inspired: sophisticated gallery */}
      <Section className="bg-white">
        <FadeInWhenVisible className="mb-16 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
            Ementa
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-zinc-600 md:text-xl">
            Pratos tradicionais confecionados com ingredientes frescos e locais
          </p>
        </FadeInWhenVisible>

        <ImageGallery
          images={[
            {
              src: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=2574",
              alt: "Bacalhau à Brás",
              description: "Clássico português com batata palha e ovos"
            },
            {
              src: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=2574",
              alt: "Francesinha",
              description: "Ícone da gastronomia do Norte"
            },
            {
              src: "https://images.unsplash.com/photo-1633964913295-ceb43826855c?q=80&w=2670",
              alt: "Cozido à Portuguesa",
              description: "Tradição em cada garfada"
            },
            {
              src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669",
              alt: "Arroz de Pato",
              description: "Receita de família, sabor de casa"
            },
            {
              src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2670",
              alt: "Polvo à Lagareiro",
              description: "Tenro, aromático, irresistível"
            },
            {
              src: "https://images.unsplash.com/photo-1580554530778-ca36943938b2?q=80&w=2574",
              alt: "Bitoque",
              description: "Simples, saboroso, português"
            },
          ]}
        />

        <FadeInWhenVisible className="mt-16 text-center">
          <CtaButton
            href="/ementa"
            variant="primary"
            size="large"
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          >
            Ver ementa completa
          </CtaButton>
        </FadeInWhenVisible>
      </Section>

      {/* CTA Final - Cheesecake Factory inspired: persistent, unavoidable, clear value */}
      <Section background="black" className="relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <FadeInWhenVisible className="relative z-10 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Reserve a sua mesa
          </h2>
          <p className="mb-4 font-sans text-lg text-zinc-300 md:text-xl">
            Ligue já e garanta o seu lugar à mesa
          </p>
          <p className="mb-10 font-sans text-sm text-zinc-400">
            Disponível todos os dias · Reservas recomendadas
          </p>

          <CtaButton
            href="tel:+351255522800"
            variant="phone"
            size="large"
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          >
            +351 255 522 800
          </CtaButton>
        </FadeInWhenVisible>
      </Section>
    </main>
  );
}
