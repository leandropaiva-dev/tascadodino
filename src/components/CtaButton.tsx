"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "phone";
  size?: "default" | "large";
  icon?: React.ReactNode;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  icon
}: CtaButtonProps) {
  const baseStyles = "group relative inline-flex items-center justify-center gap-3 overflow-hidden font-semibold text-center transition-all";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-zinc-800",
    secondary: "border-2 border-black text-black hover:border-brown hover:text-brown",
    phone: "bg-brown text-white hover:bg-brown-dark shadow-lg hover:shadow-xl",
  };

  const sizeStyles = {
    default: "px-8 py-4 text-base md:px-10 md:py-5 md:text-lg",
    large: "px-10 py-5 text-lg md:px-12 md:py-6 md:text-xl",
  };

  const MotionLink = motion(Link);

  return (
    <MotionLink
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "secondary" && (
        <span className="absolute inset-0 -z-10 bg-cream transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
      )}
      <span className="relative z-10 flex items-center gap-3">
        {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
        {children}
      </span>
    </MotionLink>
  );
}
