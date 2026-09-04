import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

/**
 * Pages de contenu libre (mentions légales, confidentialité, CGV).
 * Le `slug` doit correspondre à la route Next.js correspondante.
 */
export const page = defineType({
  name: "page",
  title: "Page légale",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'Doit correspondre à la route, ex. "mentions-legales".',
      options: { source: "titre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contenu",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { title: "titre" },
  },
});
