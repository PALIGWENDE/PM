"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Décalage vertical de départ, en pixels. */
  y?: number;
};

/**
 * Fondu + léger glissement à l'entrée dans le viewport.
 * Désactivé automatiquement si l'utilisateur préfère moins d'animations.
 */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
