import { ChevronDown, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getOffreConsultingMessage } from "@/lib/whatsapp-messages";

export type Offre = {
  numero: string;
  titre: string;
  accroche: string;
  description: string;
  detailIntro?: string;
  inclus?: string[];
  groupes?: { titre: string; items: string[] }[];
  note?: string;
  tarif: string;
  cta: string;
};

/**
 * Accordéon basé sur <details>/<summary> natifs (même approche que
 * FAQAccordion) : seuls le titre et l'accroche sont visibles par défaut,
 * le détail complet (description, inclus, tarif, CTA) se déplie au clic.
 */
export function OfferAccordion({ offres, phone }: { offres: Offre[]; phone: string }) {
  return (
    <div className="divide-y divide-stone-200 rounded-3xl bg-paper shadow-soft">
      {offres.map((offre) => (
        <details key={offre.numero} className="group px-6 py-6 first:rounded-t-3xl last:rounded-b-3xl sm:px-8">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:content-none">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 text-sm font-semibold text-stone-400">{offre.numero}</span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{offre.titre}</h3>
                <p className="mt-1 text-sm text-stone-500">{offre.accroche}</p>
              </div>
            </div>
            <ChevronDown
              className="mt-1 h-5 w-5 shrink-0 text-stone-400 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="mt-5 space-y-5 sm:pl-9">
            <p className="whitespace-pre-line text-sm leading-relaxed text-stone-600">{offre.description}</p>

            {offre.inclus && offre.inclus.length > 0 && (
              <ul className="space-y-2">
                {offre.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-geo-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {offre.groupes && offre.groupes.length > 0 && (
              <div>
                {offre.detailIntro && <p className="text-sm font-medium text-ink">{offre.detailIntro}</p>}
                <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {offre.groupes.map((groupe) => (
                    <div key={groupe.titre}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">{groupe.titre}</p>
                      <ul className="mt-2 space-y-2">
                        {groupe.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-geo-500" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {offre.note && <p className="text-sm italic text-stone-500">{offre.note}</p>}

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <p className="text-xl font-bold text-ink">{offre.tarif}</p>
              <WhatsAppButton
                phone={phone}
                message={getOffreConsultingMessage(offre.titre)}
                label={offre.cta}
                variant="secondary"
              />
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
