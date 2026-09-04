import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProfileGrid } from "@/components/people/ProfileGrid";
import { getPeople } from "../../../../sanity/lib/queries";
import { toPersonView } from "@/lib/content-mappers";
import { demoPeople } from "@/content/demo-content";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

export const metadata: Metadata = {
  title: "À propos",
  description: "Pherina et Maurisson, les deux experts derrière PM.",
};

export default async function AProposPage() {
  const [rawPeople, whatsapp] = await Promise.all([getPeople(), getWhatsappNumbers()]);
  const people = rawPeople.length > 0 ? rawPeople.map(toPersonView) : demoPeople;

  // Repli sur les numéros des réglages Sanity si le champ WhatsApp de la
  // personne n'est pas renseigné.
  const peopleWithFallbackPhone = people.map((person) => ({
    ...person,
    whatsapp:
      person.whatsapp ||
      (person.nom === "Pherina" ? whatsapp.pherina : person.nom === "Maurisson" ? whatsapp.maurisson : whatsapp.pm),
  }));

  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">À propos</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Pherina &amp; Maurisson
          </h1>
          <p className="mt-4 text-stone-600">
            [PLACEHOLDER] Deux parcours, deux expertises, une seule ambition : rendre le Marketing
            Digital et le Génie Civil &amp; Géotechnique accessibles à travers des formations et un
            accompagnement de qualité.
          </p>
        </Reveal>

        <div className="mt-12">
          <ProfileGrid people={peopleWithFallbackPhone} />
        </div>
      </Container>
    </Section>
  );
}
