import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const DOMAINES_FORMATION = ["Marketing Digital", "Génie Civil", "Géotechnique"] as const;
export const NIVEAUX_FORMATION = ["Débutant", "Intermédiaire", "Avancé"] as const;
export const TYPES_FORMATION = ["Individuel", "Groupe"] as const;

export const formation = defineType({
  name: "formation",
  title: "Formation",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "nom", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "domaine",
      title: "Domaine",
      type: "string",
      options: { list: [...DOMAINES_FORMATION] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "niveau",
      title: "Niveau",
      type: "string",
      options: { list: [...NIVEAUX_FORMATION] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      initialValue: "En ligne",
    }),
    defineField({
      name: "types",
      title: "Types",
      description: "Individuel, Groupe, ou les deux.",
      type: "array",
      of: [{ type: "string" }],
      options: { list: [...TYPES_FORMATION] },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "descriptionCourte",
      title: "Description courte",
      description: "Affichée sur les cartes formation (liste + accueil).",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "presentation",
      title: "Présentation",
      description: "Texte long affiché en haut de la page détail.",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "publicCible",
      title: "Public cible",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "objectifs",
      title: "Objectifs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "programme",
      title: "Programme",
      description: "Modules du programme, dans l'ordre d'enseignement.",
      type: "array",
      of: [
        {
          type: "object",
          name: "module",
          fields: [
            defineField({ name: "titre", title: "Titre du module", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "contenu", title: "Contenu", type: "text", rows: 4 }),
          ],
          preview: {
            select: { title: "titre" },
          },
        },
      ],
    }),
    defineField({
      name: "duree",
      title: "Durée",
      type: "string",
      description: 'Ex. "6 semaines", "20 heures"',
    }),
    defineField({
      name: "tarif",
      title: "Tarif",
      type: "string",
      description: 'Texte libre, ex. "150 000 FCFA" ou "Sur devis".',
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Texte alternatif", type: "string", validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "publie",
      title: "Publié",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "ordreAsc",
      by: [{ field: "ordre", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "nom", subtitle: "domaine", media: "image" },
  },
});
