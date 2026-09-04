import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CheckCircle2, GraduationCap, Clock, Laptop, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getFormationBySlug, getFormationSlugs } from "../../../../../sanity/lib/queries";
import { toFormationView } from "@/lib/content-mappers";
import { demoFormations } from "@/content/demo-content";
import { getFormationMessage } from "@/lib/whatsapp-messages";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";
import { siteConfig } from "@/lib/site-config";
import type { FormationView } from "@/types/content";

async function getFormation(slug: string): Promise<FormationView | null> {
  const raw = await getFormationBySlug(slug);
  if (raw) return toFormationView(raw);
  return demoFormations.find((formation) => formation.slug === slug) ?? null;
}

export async function generateStaticParams() {
  const slugs = await getFormationSlugs();
  const list = slugs.length > 0 ? slugs : demoFormations.map((formation) => formation.slug);
  return list.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formation = await getFormation(slug);
  if (!formation) return {};

  return {
    title: formation.nom,
    description: formation.descriptionCourte,
    openGraph: { title: formation.nom, description: formation.descriptionCourte },
  };
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [formation, whatsapp] = await Promise.all([getFormation(slug), getWhatsappNumbers()]);
  if (!formation) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: formation.nom,
    description: formation.descriptionCourte,
    provider: {
      "@type": "Organization",
      name: siteConfig.fullName,
      sameAs: siteConfig.url,
    },
  };

  return (
    <Section className="pt-8 md:pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-600">
                {formation.domaine}
              </span>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {formation.nom}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-stone-600">{formation.descriptionCourte}</p>
            </Reveal>

            {formation.imageUrl && (
              <Reveal delay={0.05} className="mt-8 overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={formation.imageUrl} alt={formation.imageAlt ?? formation.nom} fill className="object-cover" />
                </div>
              </Reveal>
            )}

            {formation.presentation && (
              <Reveal delay={0.1} className="prose prose-stone mt-10 max-w-none">
                {typeof formation.presentation === "string" ? (
                  <p>{formation.presentation}</p>
                ) : (
                  <PortableText value={formation.presentation} />
                )}
              </Reveal>
            )}

            {formation.publicCible && (
              <Reveal delay={0.15} className="mt-10">
                <h2 className="text-xl font-semibold text-ink">Public cible</h2>
                <p className="mt-2 text-stone-600">{formation.publicCible}</p>
              </Reveal>
            )}

            {formation.objectifs && formation.objectifs.length > 0 && (
              <Reveal delay={0.2} className="mt-10">
                <h2 className="text-xl font-semibold text-ink">Objectifs</h2>
                <ul className="mt-3 space-y-2">
                  {formation.objectifs.map((objectif) => (
                    <li key={objectif} className="flex items-start gap-2 text-stone-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-geo-500" aria-hidden="true" />
                      {objectif}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {formation.programme && formation.programme.length > 0 && (
              <Reveal delay={0.25} className="mt-10">
                <h2 className="text-xl font-semibold text-ink">Programme</h2>
                <ol className="mt-4 space-y-4">
                  {formation.programme.map((module, index) => (
                    <li key={module.titre} className="rounded-2xl bg-stone-50 p-5">
                      <p className="text-sm font-semibold text-ink">
                        {index + 1}. {module.titre}
                      </p>
                      {module.contenu && <p className="mt-1 text-sm text-stone-600">{module.contenu}</p>}
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}
          </div>

          <aside className="h-fit rounded-3xl bg-stone-50 p-6 lg:sticky lg:top-24">
            <dl className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-stone-500" aria-hidden="true" />
                <div>
                  <dt className="text-stone-500">Niveau</dt>
                  <dd className="font-medium text-ink">{formation.niveau}</dd>
                </div>
              </div>
              {formation.duree && (
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-stone-500" aria-hidden="true" />
                  <div>
                    <dt className="text-stone-500">Durée</dt>
                    <dd className="font-medium text-ink">{formation.duree}</dd>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Laptop className="h-5 w-5 text-stone-500" aria-hidden="true" />
                <div>
                  <dt className="text-stone-500">Format</dt>
                  <dd className="font-medium text-ink">{formation.format}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-stone-500" aria-hidden="true" />
                <div>
                  <dt className="text-stone-500">Type</dt>
                  <dd className="font-medium text-ink">{formation.types.join(" / ")}</dd>
                </div>
              </div>
            </dl>

            {formation.tarif && (
              <p className="mt-6 text-2xl font-bold text-ink">{formation.tarif}</p>
            )}

            <WhatsAppButton
              phone={whatsapp.pm}
              message={getFormationMessage(formation.nom)}
              label="Je suis intéressé(e)"
              variant="primary"
              className="mt-6 w-full"
            />
          </aside>
        </div>
      </Container>
    </Section>
  );
}
