import type { MetadataRoute } from "next";
import { getFormationSlugs } from "../../sanity/lib/queries";
import { demoFormations } from "@/content/demo-content";
import { siteConfig } from "@/lib/site-config";

const staticRoutes = [
  "",
  "/formations",
  "/consulting",
  "/a-propos",
  "/expertises/marketing-digital",
  "/expertises/genie-civil-geotechnique",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/cgv",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getFormationSlugs();
  const formationSlugs = slugs.length > 0 ? slugs : demoFormations.map((formation) => formation.slug);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const formationEntries: MetadataRoute.Sitemap = formationSlugs.map((slug) => ({
    url: `${siteConfig.url}/formations/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...formationEntries];
}
