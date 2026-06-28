"use client";

import Link from "next/link";

export function MerceariaParallax() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video with parallax */}
      <div
        className="absolute inset-0"
        data-speed="0.8"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/dmqpoaiq5/video/upload/v1782676518/tasca-dino/tasca-dino/mercearia.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="max-w-4xl px-4 text-center text-white">
          <h2 className="mb-8 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
            A Mercearia
          </h2>
          <p className="mb-6 font-sans text-lg leading-relaxed md:text-xl lg:text-2xl">
            Antes de ser tasca, esta casa foi durante décadas a mercearia e o
            coração comercial da freguesia. Hoje, dentro do espaço, essa
            mercearia tradicional ainda vive — com produtos locais, memórias e o
            mesmo espírito de sempre.
          </p>
          <p className="mb-10 font-sans text-lg leading-relaxed md:text-xl lg:text-2xl">
            É um dos poucos lugares onde ainda se pode comprar como antigamente
            — e sentir que o tempo parou.
          </p>
          <Link
            href="/historia"
            className="group relative inline-flex items-center overflow-hidden border-2 border-white px-8 py-3 font-sans text-base font-semibold text-white transition-all md:px-10 md:py-4 md:text-lg"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Conhecer a nossa história
            </span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
