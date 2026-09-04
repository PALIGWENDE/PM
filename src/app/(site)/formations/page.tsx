import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FormationsExplorer } from "@/components/formations/FormationsExplorer";
import { getFormations } from "../../../../sanity/lib/queries";
import { toFormationView } from "@/lib/content-mappers";
import { demoFormations } from "@/content/demo-content";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Toutes les formations PM en Marketing Digital et en Génie Civil & Géotechnique, en individuel ou en groupe.",
};

export default async function FormationsPage() {
  const [rawFormations, whatsapp] = await Promise.all([getFormations(), getWhatsappNumbers()]);
  const formations = rawFormations.length > 0 ? rawFormations.map(toFormationView) : demoFormations;

  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Formations</p>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Nos formations en Marketing Digital et Génie Civil &amp; Géotechnique.
          </h1>
          <p className="mt-4 max-w-xl text-stone-600">
            [PLACEHOLDER] Toutes nos formations sont disponibles en ligne, en individuel ou en
            groupe. Filtrez par domaine ou par format pour trouver celle qui vous correspond.
          </p>
        </Reveal>

        <div className="mt-10">
          <FormationsExplorer formations={formations} whatsappPhone={whatsapp.pm} />
        </div>
      </Container>
    </Section>
  );
}
