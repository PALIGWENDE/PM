import { defineField, defineType } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reponse",
      title: "Réponse",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
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
    select: { title: "question" },
  },
});
