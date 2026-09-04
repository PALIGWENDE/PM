import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceList } from "@/components/services/ServiceList";
import { FormationCard } from "@/components/formations/FormationCard";
import { CTA } from "@/components/home/CTA";
import { getServices, getFormations } from "../../../../../sanity/lib/queries";
import { toServiceView, toFormationView } from "@/lib/content-mappers";
import { demoServices, demoFormations } from "@/content/demo-content";
import { getConsultingMessage } from "@/lib/whatsapp-messages";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

export const metadata: Metadata = {
  title: "Expertise Marketing Digital",
  description: "Formations et consulting en Marketing Digital avec PM.",
};

export default async function MarketingDigitalPage() {
  const [rawServices, rawFormations, whatsapp] = await Promise.all([
    getServices(),
    getFormations(),
    getWhatsappNumbers(),
  ]);
  const services = rawServices.length > 0 ? rawServices.map(toServiceView) : demoServices;
  const formations = rawFormations.length > 0 ? rawFormations.map(toFormationView) : demoFormations;

  const marketingServices = services.filter((service) => service.categorie === "Marketing Digital");
  const marketingFormations = formations.filter((formation) => formation.domaine === "Marketing Digital");

  return (
    <>
      <Section className="pt-8 md:pt-12">
        <Container>
          <Reveal className="max-w-2xl">
            <TrendingUp className="h-9 w-9 text-mkt-500" aria-hidden="true" />
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Marketing Digital
            </h1>
            <p className="mt-4 text-stone-600">
              [PLACEHOLDER] Formations et consulting pour développer votre présence en ligne, votre
              contenu et vos performances digitales.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Services de consulting</h2>
          </Reveal>
          <div className="mt-6">
            <ServiceList services={marketingServices} accent="mkt" />
          </div>
        </Container>
      </Section>

      {marketingFormations.length > 0 && (
        <Section>
          <Container>
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">Formations associées</h2>
              <Link href="/formations" className="text-sm font-medium text-ink hover:text-mkt-500">
                Voir toutes les formations →
              </Link>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {marketingFormations.map((formation) => (
                <FormationCard key={formation.id} formation={formation} whatsappPhone={whatsapp.pm} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="muted">
        <CTA
          titre="Un projet Marketing Digital ?"
          description="[PLACEHOLDER] Parlons-en directement sur WhatsApp."
          phone={whatsapp.pm}
          message={getConsultingMessage("Marketing Digital")}
        />
      </Section>
    </>
  );
}
