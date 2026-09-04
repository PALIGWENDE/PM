import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

/**
 * Singleton : réglages globaux du site (logo, couleurs, réseaux, WhatsApp,
 * footer). Un seul document de ce type doit exister — voir
 * `sanity/structure.ts` qui l'affiche comme une entrée unique dans le menu.
 */
export const settings = defineType({
  name: "settings",
  title: "Réglages du site",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
          initialValue: "Logo PM — Pherina & Maurisson",
        }),
      ],
    }),
    defineField({
      name: "couleurMarketing",
      title: "Couleur accent — Marketing Digital",
      description: 'Code hexadécimal, ex. "#3366F0"',
      type: "string",
      initialValue: "#3366F0",
    }),
    defineField({
      name: "couleurGenieCivil",
      title: "Couleur accent — Génie Civil & Géotechnique",
      description: 'Code hexadécimal, ex. "#D6272B"',
      type: "string",
      initialValue: "#D6272B",
    }),
    defineField({
      name: "whatsappPM",
      title: "WhatsApp — PM (numéro général)",
      type: "string",
      description: "Format international, ex. 2250700000000",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "whatsappPherina",
      title: "WhatsApp — Pherina",
      type: "string",
    }),
    defineField({
      name: "whatsappMaurisson",
      title: "WhatsApp — Maurisson",
      type: "string",
    }),
    defineField({
      name: "reseauxSociaux",
      title: "Réseaux sociaux",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram (URL)", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn (URL)", type: "url" }),
        defineField({ name: "facebook", title: "Facebook (URL)", type: "url" }),
      ],
    }),
    defineField({
      name: "footerTexte",
      title: "Texte du footer",
      type: "text",
      rows: 3,
      description: "Courte description affichée sous le logo dans le footer.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Réglages du site" }),
  },
});
