"use client";

import { motion } from "framer-motion";

interface UspCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function UspCard({ title, description, icon }: UspCardProps) {
  return (
    <motion.div
      className="group flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {icon && (
        <motion.div
          className="mb-6 text-brown transition-colors group-hover:text-brown-dark"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="mb-3 font-serif text-2xl font-bold md:text-3xl">{title}</h3>
      <p className="max-w-sm font-sans text-base leading-relaxed text-zinc-600 md:text-lg">{description}</p>
    </motion.div>
  );
}
