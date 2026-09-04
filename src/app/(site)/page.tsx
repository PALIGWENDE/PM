import Link from "next/link";
import { TrendingUp, HardHat, User, Building2, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Steps } from "@/components/home/Steps";
import { CTA } from "@/components/home/CTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FormationCard } from "@/components/formations/FormationCard";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getFormations, getFaqs } from "../../../sanity/lib/queries";
import { toFormationView, toFaqView } from "@/lib/content-mappers";
import { demoFormations, demoFaqs } from "@/content/demo-content";
import { getConsultingMessage, getGeneralMessage } from "@/lib/whatsapp-messages";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

const steps = [
  {
    titre: "Contactez-nous sur WhatsApp",
    description:
      "[PLACEHOLDER] Décrivez votre besoin (formation ou consulting) directement en message.",
  },
  {
    titre: "Échangeons sur vos objectifs",
    description:
      "[PLACEHOLDER] Nous précisons ensemble le format, le calendrier et les modalités adaptées.",
  },
  {
    titre: "Démarrez avec PM",
    description:
      "[PLACEHOLDER] Vous démarrez votre formation ou votre accompagnement en toute confiance.",
  },
];

export default async function HomePage() {
  const [rawFormations, rawFaqs, whatsapp] = await Promise.all([
    getFormations(),
    getFaqs(),
    getWhatsappNumbers(),
  ]);

  const formations = rawFormations.length > 0 ? rawFormations.map(toFormationView) : demoFormations;
  const faqs = rawFaqs.length > 0 ? rawFaqs.map(toFaqView) : demoFaqs;
  const formationsApercu = formations.slice(0, 3);

  return (
    <>
      <Hero phone={whatsapp.pm} />

      {/* Deux expertises */}
      <Section>
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Nos expertises
            </p>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Deux univers, un même niveau d&apos;exigence.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <Link
                href="/expertises/marketing-digital"
                className="group flex h-full flex-col rounded-3xl bg-mkt-50 p-8 shadow-soft transition-transform hover:-translate-y-1"
              >
                <TrendingUp className="h-9 w-9 text-mkt-600" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-ink">Marketing Digital</h3>
                <p className="mt-2 flex-1 text-sm text-stone-600">
                  [PLACEHOLDER] Formations et consulting pour développer votre présence en ligne
                  et vos performances digitales.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-mkt-700">
                  Découvrir
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/expertises/genie-civil-geotechnique"
                className="group flex h-full flex-col rounded-3xl bg-geo-50 p-8 shadow-soft transition-transform hover:-translate-y-1"
              >
                <HardHat className="h-9 w-9 text-geo-600" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-ink">Génie Civil &amp; Géotechnique</h3>
                <p className="mt-2 flex-1 text-sm text-stone-600">
                  [PLACEHOLDER] Formations et consulting pour sécuriser vos projets de
                  construction, du sol jusqu&apos;à l&apos;ouvrage.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-geo-700">
                  Découvrir
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Formations en aperçu */}
      <Section tone="muted">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Formations
              </p>
              <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Apprenez avec des experts du terrain.
              </h2>
            </div>
            <Link href="/formations" className="text-sm font-medium text-ink hover:text-geo-500">
              Voir toutes les formations →
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {formationsApercu.map((formation, index) => (
              <Reveal key={formation.id} delay={index * 0.08}>
                <FormationCard formation={formation} whatsappPhone={whatsapp.pm} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Consulting */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Consulting
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Un accompagnement sur-mesure pour votre projet.
              </h2>
              <p className="mt-4 max-w-md text-stone-600">
                [PLACEHOLDER] Au-delà des formations, PM accompagne les particuliers et les
                professionnels avec des prestations de consulting en Marketing Digital et en
                Génie Civil &amp; Géotechnique.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WhatsAppButton
                  phone={whatsapp.pm}
                  message={getConsultingMessage("Marketing Digital ou Génie Civil & Géotechnique")}
                  label="Discuter de mon projet"
                  variant="primary"
                />
                <Link
                  href="/consulting"
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 font-medium text-ink transition-colors hover:border-ink/40"
                >
                  Voir le consulting
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-stone-100 p-8">
                <ul className="space-y-4 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-mkt-500" aria-hidden="true" />
                    Audit, stratégie de contenu, gestion de réseaux sociaux…
                  </li>
                  <li className="flex items-start gap-2">
                    <HardHat className="mt-0.5 h-4 w-4 shrink-0 text-geo-500" aria-hidden="true" />
                    Étude de sol, suivi de chantier, contrôle qualité…
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Comment ça marche */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Comment ça marche
            </p>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Trois étapes, sans complexité.
            </h2>
          </Reveal>

          <div className="mt-10">
            <Steps steps={steps} />
          </div>
        </Container>
      </Section>

      {/* Pour qui */}
      <Section>
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Pour qui</p>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Particuliers ou professionnels, un accompagnement pensé pour vous.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-3xl bg-paper p-8 shadow-soft">
                <User className="h-8 w-8 text-ink" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">Particuliers</h3>
                <p className="mt-2 text-sm text-stone-600">
                  [PLACEHOLDER] Vous souhaitez monter en compétences ou être accompagné(e) sur un
                  projet personnel.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col rounded-3xl bg-paper p-8 shadow-soft">
                <Building2 className="h-8 w-8 text-ink" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">Professionnels</h3>
                <p className="mt-2 text-sm text-stone-600">
                  [PLACEHOLDER] Votre équipe ou votre structure a besoin d&apos;une expertise
                  ponctuelle ou continue.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="muted">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">FAQ</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Questions fréquentes
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-2xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </Container>
      </Section>

      {/* CTA WhatsApp */}
      <Section>
        <CTA
          titre="Prêt(e) à démarrer avec PM ?"
          description="[PLACEHOLDER] Écrivez-nous sur WhatsApp, nous répondons rapidement pour construire ensemble la formule qui vous convient."
          phone={whatsapp.pm}
          message={getGeneralMessage()}
          secondaryHref="/formations"
          secondaryLabel="Voir les formations"
        />
      </Section>
    </>
  );
}
