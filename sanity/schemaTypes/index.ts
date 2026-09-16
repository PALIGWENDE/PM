import type { SchemaTypeDefinition } from "sanity";
import { settings } from "./settings";
import { formation } from "./formation";
import { service } from "./service";
import { person } from "./person";
import { faq } from "./faq";
import { page } from "./page";
import { temoignage } from "./temoignage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, formation, service, person, faq, temoignage, page],
};
