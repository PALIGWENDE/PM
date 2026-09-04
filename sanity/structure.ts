import type { StructureResolver } from "sanity/structure";
import { CogIcon } from "@sanity/icons";

/**
 * Structure du Studio : `settings` est épinglé en haut comme document
 * unique (singleton), les autres types suivent la liste par défaut.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu")
    .items([
      S.listItem()
        .title("Réglages du site")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== "settings"),
    ]);
