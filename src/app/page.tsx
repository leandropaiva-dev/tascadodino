import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { MerceariaParallax } from "@/components/MerceariaParallax";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { BentoGrid } from "@/components/BentoGrid";
import { VisitarNos } from "@/components/VisitarNos";

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
      <BentoGrid />

      {/* A Mercearia - Parallax com GSAP */}
      <MerceariaParallax />

      {/* Prova social (o passa-palavra) */}
      <TestimonialCarousel />

      {/* Visitar-nos */}
      <VisitarNos />
    </main>
  );
}
