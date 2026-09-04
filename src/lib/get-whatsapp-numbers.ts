import { getSettings } from "../../sanity/lib/queries";
import { siteConfig } from "@/lib/site-config";

/**
 * Numéros WhatsApp effectifs : priorité au document Sanity `settings`,
 * repli sur les variables d'environnement s'il est vide ou inaccessible —
 * conformément au cahier des charges.
 */
export async function getWhatsappNumbers() {
  const settings = await getSettings();
  return {
    pm: settings?.whatsappPM || siteConfig.whatsapp.pm,
    pherina: settings?.whatsappPherina || siteConfig.whatsapp.pherina,
    maurisson: settings?.whatsappMaurisson || siteConfig.whatsapp.maurisson,
  };
}
