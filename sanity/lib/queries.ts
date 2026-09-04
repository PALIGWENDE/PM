import { sanityFetch } from "./client";
import type { Faq, Formation, LegalPage, Person, Service, Settings } from "@/types/sanity";

/**
 * Chaque fonction est volontairement tolérante aux pannes : si Sanity est
 * injoignable ou mal configuré (voir TODO-CLIENT.md), on logue une alerte et
 * on renvoie une valeur vide plutôt que de faire planter la page. Les pages
 * appelantes décident elles-mêmes d'un éventuel contenu de secours.
 */
async function safeFetch<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  try {
    return await sanityFetch<T>({ query, params });
  } catch (error) {
    console.warn("[sanity] fetch échoué, valeur de repli utilisée :", error);
    return fallback;
  }
}

const FORMATION_PROJECTION = `{
  _id,
  nom,
  "slug": slug.current,
  domaine,
  niveau,
  format,
  types,
  descriptionCourte,
  presentation,
  publicCible,
  objectifs,
  programme,
  duree,
  tarif,
  image,
  ordre
}`;

export async function getFormations(): Promise<Formation[]> {
  return safeFetch<Formation[]>(
    `*[_type == "formation" && publie == true] | order(ordre asc) ${FORMATION_PROJECTION}`,
    [],
  );
}

export async function getFormationBySlug(slug: string): Promise<Formation | null> {
  return safeFetch<Formation | null>(
    `*[_type == "formation" && publie == true && slug.current == $slug][0] ${FORMATION_PROJECTION}`,
    null,
    { slug },
  );
}

export async function getFormationSlugs(): Promise<string[]> {
  const slugs = await safeFetch<string[]>(
    `*[_type == "formation" && publie == true].slug.current`,
    [],
  );
  return slugs.filter(Boolean);
}

export async function getServices(): Promise<Service[]> {
  return safeFetch<Service[]>(
    `*[_type == "service"] | order(ordre asc) { _id, nom, categorie, description, ordre }`,
    [],
  );
}

export async function getPeople(): Promise<Person[]> {
  return safeFetch<Person[]>(
    `*[_type == "person"] | order(ordre asc) { _id, nom, titre, bio, domainesExpertise, photo, whatsapp, ordre }`,
    [],
  );
}

export async function getFaqs(): Promise<Faq[]> {
  return safeFetch<Faq[]>(
    `*[_type == "faq"] | order(ordre asc) { _id, question, reponse, ordre }`,
    [],
  );
}

export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  return safeFetch<LegalPage | null>(
    `*[_type == "page" && slug.current == $slug][0] { _id, titre, "slug": slug.current, contenu }`,
    null,
    { slug },
  );
}

export async function getSettings(): Promise<Settings | null> {
  return safeFetch<Settings | null>(
    `*[_type == "settings"][0] {
      logo,
      couleurMarketing,
      couleurGenieCivil,
      whatsappPM,
      whatsappPherina,
      whatsappMaurisson,
      reseauxSociaux,
      footerTexte
    }`,
    null,
  );
}
