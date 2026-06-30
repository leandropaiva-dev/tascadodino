"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "A Nossa História", href: "/historia" },
  { label: "Ementa", href: "/ementa" },
  { label: "Reservas", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brown-dark shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/pratos/Sem-titulo-1.png"
                alt="Tasca Dino"
                width={120}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>

            {/* Desktop Menu - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="font-sans text-sm font-medium text-white transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="tel:+351919445826"
              className="hidden md:block bg-white px-6 py-2.5 font-sans text-sm font-semibold text-brown-dark transition-all hover:bg-cream"
            >
              Reservar
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Menu"
            >
              <motion.span
                className={`block h-0.5 w-6 bg-white transition-all`}
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className={`block h-0.5 w-6 bg-white transition-all`}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className={`block h-0.5 w-6 bg-white transition-all`}
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-brown-dark md:hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={
          isOpen
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: "100%" }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="font-serif text-4xl font-bold text-white transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Mobile CTA */}
          <motion.a
            href="tel:+351919445826"
            onClick={() => setIsOpen(false)}
            className="group relative mt-8 inline-flex items-center justify-center overflow-hidden bg-white px-8 py-3 font-sans text-base font-semibold text-black transition-all md:px-10 md:py-4 md:text-lg shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Reservar mesa
            </span>
            <span className="absolute inset-0 z-0 bg-brown transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
