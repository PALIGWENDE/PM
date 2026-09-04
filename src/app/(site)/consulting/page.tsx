import type { Metadata } from "next";
import { TrendingUp, HardHat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceList } from "@/components/services/ServiceList";
import { CTA } from "@/components/home/CTA";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getServices } from "../../../../sanity/lib/queries";
import { toServiceView } from "@/lib/content-mappers";
import { demoServices } from "@/content/demo-content";
import { getConsultingMessage, getGeneralMessage } from "@/lib/whatsapp-messages";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Le consulting PM en Marketing Digital et en Génie Civil & Géotechnique : un accompagnement sur-mesure pour particuliers et professionnels.",
};

export default async function ConsultingPage() {
  const [rawServices, whatsapp] = await Promise.all([getServices(), getWhatsappNumbers()]);
  const services = rawServices.length > 0 ? rawServices.map(toServiceView) : demoServices;

  const marketingServices = services.filter((service) => service.categorie === "Marketing Digital");
  const geoServices = services.filter((service) => service.categorie === "Génie Civil & Géotechnique");

  return (
    <>
      <Section className="pt-8 md:pt-12">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Consulting</p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Un accompagnement sur-mesure, au-delà des formations.
            </h1>
            <p className="mt-4 text-stone-600">
              [PLACEHOLDER] PM accompagne particuliers et professionnels avec des prestations de
              consulting adaptées à chaque projet, en Marketing Digital comme en Génie Civil &amp;
              Géotechnique.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <Reveal className="flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-mkt-500" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Marketing Digital</h2>
          </Reveal>
          <div className="mt-6">
            <ServiceList services={marketingServices} accent="mkt" />
          </div>
          <Reveal delay={0.1} className="mt-6">
            <WhatsAppButton
              phone={whatsapp.pm}
              message={getConsultingMessage("Marketing Digital")}
              label="Discuter de mon projet Marketing Digital"
              variant="secondary"
            />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="flex items-center gap-3">
            <HardHat className="h-7 w-7 text-geo-500" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Génie Civil &amp; Géotechnique</h2>
          </Reveal>
          <div className="mt-6">
            <ServiceList services={geoServices} accent="geo" />
          </div>
          <Reveal delay={0.1} className="mt-6">
            <WhatsAppButton
              phone={whatsapp.pm}
              message={getConsultingMessage("Génie Civil & Géotechnique")}
              label="Discuter de mon projet Génie Civil & Géotechnique"
              variant="secondary"
            />
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <CTA
          titre="Un projet en tête ?"
          description="[PLACEHOLDER] Parlons-en directement sur WhatsApp, sans engagement."
          phone={whatsapp.pm}
          message={getGeneralMessage()}
        />
      </Section>
    </>
  );
}
