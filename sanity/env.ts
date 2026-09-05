/**
 * Ces valeurs ne doivent JAMAIS faire planter le build ou une page : le site
 * doit rester utilisable (avec le contenu de démonstration, voir
 * `src/content/demo-content.ts`) tant qu'aucun projet Sanity réel n'est
 * connecté — voir TODO-CLIENT.md. Le repli `"placeholder"` produit un
 * `projectId` syntaxiquement valide pour `createClient`, qui échouera
 * proprement (et sans crash) au moment de la requête, déjà géré par
 * `safeFetch` dans `sanity/lib/queries.ts`.
 */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
