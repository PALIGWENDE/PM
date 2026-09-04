import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const person = defineType({
  name: "person",
  title: "Personne",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titre",
      title: "Titre / fonction",
      type: "string",
      description: 'Ex. "Experte en Marketing Digital"',
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "domainesExpertise",
      title: "Domaines d'expertise",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Texte alternatif", type: "string", validation: (Rule) => Rule.required() }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "whatsapp",
      title: "Numéro WhatsApp",
      type: "string",
      description: "Format international, ex. 2250700000000",
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
      initialValue: 0,
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
    select: { title: "nom", subtitle: "titre", media: "photo" },
  },
});
