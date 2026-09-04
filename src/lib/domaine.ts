import type { Domaine } from "@/types/sanity";

export type Accent = "geo" | "mkt";

/**
 * Marketing Digital → accent bleu (mkt). Génie Civil et Géotechnique
 * partagent l'accent rouge (geo), puisqu'ils forment une seule expertise
 * ("Génie Civil & Géotechnique") côté navigation/expertises.
 */
export function getDomaineAccent(domaine: Domaine): Accent {
  return domaine === "Marketing Digital" ? "mkt" : "geo";
}

export function getDomaineHref(domaine: Domaine): string {
  return domaine === "Marketing Digital"
    ? "/expertises/marketing-digital"
    : "/expertises/genie-civil-geotechnique";
}
