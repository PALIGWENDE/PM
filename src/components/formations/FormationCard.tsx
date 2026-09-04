import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Clock, Laptop, BookOpen } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getFormationMessage } from "@/lib/whatsapp-messages";
import { getDomaineAccent, type Accent } from "@/lib/domaine";
import { siteConfig } from "@/lib/site-config";
import type { FormationView } from "@/types/content";

const accentStyles: Record<Accent, { badge: string; iconBg: string }> = {
  mkt: { badge: "bg-mkt-50 text-mkt-700", iconBg: "from-mkt-100 to-mkt-50 text-mkt-400" },
  geo: { badge: "bg-geo-50 text-geo-700", iconBg: "from-geo-100 to-geo-50 text-geo-400" },
};

export function FormationCard({ formation, whatsappPhone }: { formation: FormationView; whatsappPhone?: string }) {
  const accent = getDomaineAccent(formation.domaine);
  const styles = accentStyles[accent];
  const phone = whatsappPhone ?? siteConfig.whatsapp.pm;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-paper shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        {formation.imageUrl ? (
          <Image
            src={formation.imageUrl}
            alt={formation.imageAlt ?? formation.nom}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${styles.iconBg}`}>
            <BookOpen className="h-12 w-12" aria-hidden="true" />
          </div>
        )}
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles.badge}`}>
          {formation.domaine}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{formation.nom}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-stone-600">{formation.descriptionCourte}</p>

        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
          <div className="flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Niveau</dt>
            <dd>{formation.niveau}</dd>
          </div>
          {formation.duree && (
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <dt className="sr-only">Durée</dt>
              <dd>{formation.duree}</dd>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Laptop className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Format</dt>
            <dd>{formation.format}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center justify-between gap-3">
          <WhatsAppButton
            phone={phone}
            message={getFormationMessage(formation.nom)}
            label="Je suis intéressé(e)"
            variant="secondary"
            className="border-stone-200 px-4 py-2 text-xs"
          />
          <Link
            href={`/formations/${formation.slug}`}
            className="text-sm font-medium text-ink hover:text-geo-500"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </article>
  );
}
