"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TemoignageView } from "@/types/content";

/**
 * Colonne de témoignages qui défile verticalement en boucle (liste dupliquée
 * une fois, animée de 0 à -50%, pour un défilement continu sans coupure).
 * Adapté d'un composant registry (defilement "marquee") aux tokens du design
 * system PM — voir `tubelight-navbar.tsx` pour la même convention d'adaptation.
 */
function TestimonialsColumn({
  className,
  temoignages,
  duration = 10,
}: {
  className?: string;
  temoignages: TemoignageView[];
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  // Liste dupliquée uniquement quand l'animation tourne : sans ça, la
  // duplication statique laisserait un grand vide sous les cartes.
  const passes = prefersReducedMotion ? [temoignages] : [temoignages, temoignages];

  return (
    <div className={className}>
      <motion.ul
        animate={prefersReducedMotion ? undefined : { translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="m-0 flex list-none flex-col gap-6 p-0 pb-6"
      >
        {passes.map((pass, passIndex) => (
          <React.Fragment key={passIndex}>
            {pass.map((temoignage, i) => (
              <motion.li
                key={`${passIndex}-${temoignage.id}-${i}`}
                aria-hidden={passIndex === 1 ? true : undefined}
                tabIndex={passIndex === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(26, 26, 24, 0.18), 0 10px 10px -5px rgba(26, 26, 24, 0.06)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                whileFocus={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(26, 26, 24, 0.18), 0 10px 10px -5px rgba(26, 26, 24, 0.06)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="w-full max-w-xs shrink-0 select-none rounded-3xl border border-stone-200 bg-paper p-8 shadow-soft focus:outline-none focus:ring-2 focus:ring-geo-500/30"
              >
                <blockquote className="m-0 p-0">
                  <Quote className="h-5 w-5 text-stone-300" aria-hidden="true" />
                  <p className="mt-4 text-balance text-sm leading-relaxed text-stone-600">
                    {temoignage.citation}
                  </p>
                  {temoignage.nom && (
                    <footer className="mt-6">
                      <cite className="text-sm font-semibold not-italic text-ink">{temoignage.nom}</cite>
                    </footer>
                  )}
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

/** Répartit une liste en `count` colonnes de tailles contiguës équilibrées. */
function splitIntoColumns<T>(items: T[], count: number): T[][] {
  const size = Math.ceil(items.length / count);
  return Array.from({ length: count }, (_, i) => items.slice(i * size, i * size + size)).filter(
    (column) => column.length > 0,
  );
}

const COLUMN_DURATIONS = [15, 19, 17];

export function AnimatedTestimonials({ temoignages }: { temoignages: TemoignageView[] }) {
  const columns = splitIntoColumns(temoignages, 3);

  return (
    <div
      className={cn(
        "flex justify-center gap-6",
        "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]",
        "max-h-[640px] overflow-hidden",
      )}
      role="region"
      aria-label="Témoignages en défilement"
    >
      {columns.map((column, index) => (
        <TestimonialsColumn
          key={index}
          temoignages={column}
          duration={COLUMN_DURATIONS[index % COLUMN_DURATIONS.length]}
          className={cn(index === 1 && "hidden md:block", index === 2 && "hidden lg:block")}
        />
      ))}
    </div>
  );
}
