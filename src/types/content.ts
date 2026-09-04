import type { PortableTextBlock } from "@portabletext/react";
import type { StaticImageData } from "next/image";
import type { CategorieService, Domaine, Niveau, TypeFormation } from "@/types/sanity";

/**
 * Modèles "prêts à afficher", indépendants de la forme brute Sanity : ils
 * permettent aux composants de rendre indifféremment une vraie formation
 * Sanity ou une formation de démonstration (utilisée tant que le projet
 * Sanity du client n'est pas connecté — voir TODO-CLIENT.md).
 */
export type FormationView = {
  id: string;
  slug: string;
  nom: string;
  domaine: Domaine;
  niveau: Niveau;
  format: string;
  types: TypeFormation[];
  descriptionCourte: string;
  presentation?: PortableTextBlock[] | string;
  publicCible?: string;
  objectifs?: string[];
  programme?: { titre: string; contenu?: string }[];
  duree?: string;
  tarif?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type ServiceView = {
  id: string;
  nom: string;
  categorie: CategorieService;
  description: string;
};

export type PersonView = {
  id: string;
  nom: string;
  titre?: string;
  bio?: PortableTextBlock[] | string;
  domainesExpertise?: string[];
  photo: string | StaticImageData;
  whatsapp?: string;
};

export type FaqView = {
  id: string;
  question: string;
  reponse: PortableTextBlock[] | string;
};
