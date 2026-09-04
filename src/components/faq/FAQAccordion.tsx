import { ChevronDown } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { FaqView } from "@/types/content";

/**
 * Accordéon basé sur <details>/<summary> natifs : accessible clavier et aux
 * lecteurs d'écran sans JavaScript supplémentaire (état ouvert/fermé
 * annoncé nativement).
 */
export function FAQAccordion({ faqs }: { faqs: FaqView[] }) {
  if (faqs.length === 0) return null;

  return (
    <div className="divide-y divide-stone-200 rounded-3xl bg-paper shadow-soft">
      {faqs.map((faq) => (
        <details key={faq.id} className="group px-6 py-5 first:rounded-t-3xl last:rounded-b-3xl">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-stone-600">
            {typeof faq.reponse === "string" ? <p>{faq.reponse}</p> : <PortableText value={faq.reponse} />}
          </div>
        </details>
      ))}
    </div>
  );
}
