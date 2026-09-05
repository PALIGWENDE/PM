/**
 * Configuration de secours (fallback) lue depuis les variables d'environnement.
 *
 * En production, les numéros WhatsApp et les informations de marque sont
 * pilotés depuis Sanity (`settings` singleton, ajouté à l'étape 2). Ces
 * valeurs ne servent que de repli si le document Sanity est vide ou
 * inaccessible, conformément au cahier des charges.
 */
export const siteConfig = {
  name: "PM",
  fullName: "PM — Pherina & Maurisson",
  defaultTitle: "PM — Formations & Consulting en Marketing Digital et Génie Civil",
  defaultDescription:
    "PM accompagne particuliers et professionnels avec des formations et du consulting en Marketing Digital et en Génie Civil & Géotechnique.",
  // `||` (pas `??`) : une variable d'environnement définie mais vide (ex.
  // ajoutée sans valeur sur Vercel) doit aussi déclencher le repli, sinon
  // `new URL("")` fait planter tout le build (voir metadataBase du layout).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  whatsapp: {
    pm: process.env.NEXT_PUBLIC_WHATSAPP_PM || "0000000000",
    pherina: process.env.NEXT_PUBLIC_WHATSAPP_PHERINA || "0000000000",
    maurisson: process.env.NEXT_PUBLIC_WHATSAPP_MAURISSON || "0000000000",
  },
} as const;
