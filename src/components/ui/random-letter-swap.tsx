"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import clsx from "clsx";

const RANDOM_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NBSP = " ";

function randomChar() {
  return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
}

type RandomLetterSwapProps = {
  label: string;
  className?: string;
  /** Délai (en secondes) ajouté entre chaque lettre. */
  staggerDuration?: number;
  transition?: Transition;
};

/**
 * Au survol, chaque lettre bascule verticalement vers un caractère aléatoire
 * puis revient automatiquement au mot d'origine après l'animation (délai
 * croissant par lettre via `staggerDuration`) — le libellé reste toujours
 * lisible, y compris pendant que le pointeur reste dessus.
 *
 * Le libellé réel reste dans le DOM (`sr-only`) pour les lecteurs d'écran ;
 * les lettres animées sont décoratives (`aria-hidden`). Désactivé si
 * l'utilisateur préfère moins d'animations.
 */
export function RandomLetterSwap({
  label,
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.5, type: "spring" },
}: RandomLetterSwapProps) {
  const uid = useId();
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  // Initialisé avec les vraies lettres (pas de Math.random ici) pour que le
  // rendu serveur et l'hydratation client soient identiques ; le tirage
  // aléatoire n'a lieu qu'au survol, un événement strictement client.
  const [randomChars, setRandomChars] = useState<string[]>(() => label.split(""));
  const revertTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(revertTimeout.current);
  }, []);

  if (prefersReducedMotion) {
    return <span className={className}>{label}</span>;
  }

  const letters = label.split("");

  function handleHoverStart() {
    clearTimeout(revertTimeout.current);
    setRandomChars(letters.map((letter) => (letter === " " ? NBSP : randomChar())));
    setHovered(true);

    const declaredDuration = (transition as { duration?: number } | undefined)?.duration;
    const transitionDuration = typeof declaredDuration === "number" ? declaredDuration : 0.5;
    const totalDuration = (letters.length - 1) * staggerDuration + transitionDuration;
    revertTimeout.current = setTimeout(() => setHovered(false), totalDuration * 1000);
  }

  return (
    <span className={clsx("relative inline-flex", className)} onMouseEnter={handleHoverStart}>
      <span aria-hidden="true" className="flex">
        {letters.map((letter, index) => (
          <span key={`${uid}-${index}`} className="relative inline-block h-[1.2em] overflow-hidden">
            <motion.span
              className="block"
              animate={{ y: hovered ? "-100%" : "0%" }}
              transition={{ ...transition, delay: index * staggerDuration }}
            >
              {letter === " " ? NBSP : letter}
            </motion.span>
            <motion.span
              className="absolute inset-0 block"
              initial={{ y: "100%" }}
              animate={{ y: hovered ? "0%" : "100%" }}
              transition={{ ...transition, delay: index * staggerDuration }}
            >
              {letter === " " ? NBSP : randomChars[index]}
            </motion.span>
          </span>
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
