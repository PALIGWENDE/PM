import type { PortableTextBlock } from "@portabletext/react";

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt: string;
};

export type Domaine = "Marketing Digital" | "Génie Civil" | "Géotechnique";
export type Niveau = "Débutant" | "Intermédiaire" | "Avancé";
export type TypeFormation = "Individuel" | "Groupe";
export type CategorieService = "Marketing Digital" | "Génie Civil & Géotechnique";

export type Formation = {
  _id: string;
  nom: string;
  slug: string;
  domaine: Domaine;
  niveau: Niveau;
  format: string;
  types: TypeFormation[];
  descriptionCourte: string;
  presentation?: PortableTextBlock[];
  publicCible?: string;
  objectifs?: string[];
  programme?: { titre: string; contenu?: string }[];
  duree?: string;
  tarif?: string;
  image: SanityImage;
  ordre: number;
};

export type Service = {
  _id: string;
  nom: string;
  categorie: CategorieService;
  description: string;
  ordre: number;
};

export type Person = {
  _id: string;
  nom: string;
  titre?: string;
  bio?: PortableTextBlock[];
  domainesExpertise?: string[];
  photo: SanityImage;
  whatsapp?: string;
  ordre: number;
};

export type Faq = {
  _id: string;
  question: string;
  reponse: PortableTextBlock[];
  ordre: number;
};

export type LegalPage = {
  _id: string;
  titre: string;
  slug: string;
  contenu?: PortableTextBlock[];
};

export type Settings = {
  logo?: SanityImage;
  couleurMarketing?: string;
  couleurGenieCivil?: string;
  whatsappPM?: string;
  whatsappPherina?: string;
  whatsappMaurisson?: string;
  reseauxSociaux?: { instagram?: string; linkedin?: string; facebook?: string };
  footerTexte?: string;
};
