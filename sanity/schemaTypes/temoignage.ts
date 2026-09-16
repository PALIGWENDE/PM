import { defineField, defineType } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const temoignage = defineType({
  name: "temoignage",
  title: "Témoignage",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "citation",
      title: "Citation",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nom",
      title: "Nom (facultatif)",
      type: "string",
      description: "Laisser vide pour un témoignage anonyme.",
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
    select: { title: "nom", subtitle: "citation" },
    prepare({ title, subtitle }) {
      return { title: title || "Anonyme", subtitle };
    },
  },
});
