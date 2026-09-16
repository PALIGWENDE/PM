import type { Metadata } from "next";
import { TrendingUp, HardHat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { OfferAccordion, type Offre } from "@/components/consulting/OfferAccordion";
import { CTA } from "@/components/home/CTA";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getConsultingMessage } from "@/lib/whatsapp-messages";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Le consulting PM en Marketing Digital et en Génie Civil & Géotechnique : audit, consultation ponctuelle et accompagnement stratégique sur-mesure.",
};

const offres: Offre[] = [
  {
    numero: "01",
    titre: "Audit & Diagnostic Digital",
    accroche: "Comprendre avant d'agir.",
    description:
      "Vous avez déjà une présence en ligne, mais vous ne savez pas ce qui fonctionne réellement ou ce qui doit être amélioré ?\n\nNous analysons votre présence digitale afin d'identifier vos forces, vos points faibles et les opportunités d'amélioration.",
    inclus: [
      "Analyse de vos réseaux sociaux",
      "Analyse de votre contenu",
      "Analyse de votre présence digitale",
      "Analyse de votre communication",
      "Analyse de votre positionnement",
      "Identification des points forts et des axes d'amélioration",
      "Recommandations personnalisées",
    ],
    tarif: "150 €",
    cta: "Demander mon audit",
  },
  {
    numero: "02",
    titre: "Consultation & Conseil ponctuel",
    accroche: "Une question ? Parlons-en.",
    description:
      "Vous avez une question, une inquiétude, une décision à prendre ou simplement besoin d'être éclairé par un spécialiste ?\n\nRéservez une séance individuelle avec l'un de nos experts.",
    detailIntro: "Cette consultation peut concerner :",
    groupes: [
      {
        titre: "Marketing Digital",
        items: [
          "Une stratégie",
          "Un projet digital",
          "Une problématique sur vos réseaux sociaux",
          "Votre communication",
          "Votre positionnement",
          "Une décision marketing",
        ],
      },
      {
        titre: "Génie Civil & Géotechnique",
        items: [
          "Une problématique technique",
          "Une question liée à un projet",
          "Une étude ou un résultat à comprendre",
          "Une question concernant les sols, fondations ou la géotechnique",
          "Un besoin d'avis ou d'orientation technique",
        ],
      },
    ],
    note: "Une séance individuelle en ligne avec l'expert correspondant à votre besoin.",
    tarif: "50 € / 1 heure",
    cta: "Réserver une consultation",
  },
  {
    numero: "03",
    titre: "Accompagnement stratégique",
    accroche: "Ne restez pas seul face à votre projet.",
    description:
      "Vous avez un projet ou une activité et vous avez besoin d'un accompagnement régulier pour avancer avec plus de clarté et de méthode ?\n\nL'accompagnement stratégique vous permet de bénéficier d'un suivi personnalisé pendant 1 mois, avec des échanges réguliers et des recommandations adaptées à l'évolution de votre projet.",
    inclus: [
      "Analyse de votre situation",
      "Identification des priorités",
      "Conseils personnalisés",
      "Aide à la prise de décision",
      "Suivi de la mise en œuvre",
      "Ajustements stratégiques",
      "Réponses à vos questions au cours de l'accompagnement",
      "Points de suivi réguliers",
    ],
    note: "L'objectif est de vous aider à prendre de meilleures décisions, structurer vos actions et avancer concrètement sur votre projet.",
    tarif: "350 € / mois",
    cta: "Demander mon accompagnement",
  },
];

const approche = [
  { titre: "Échange initial", description: "Vous nous présentez votre besoin, votre projet ou votre problématique." },
  { titre: "Analyse", description: "Nous identifions les éléments importants et les priorités." },
  { titre: "Conseil", description: "Nous vous apportons une analyse et des recommandations adaptées à votre situation." },
  { titre: "Suivi", description: "Selon la formule choisie, nous vous accompagnons dans la mise en œuvre et l'évolution de votre projet." },
];

const pourQui = [
  "Entrepreneurs",
  "Porteurs de projets",
  "Freelances",
  "Startups",
  "PME",
  "Entreprises",
  "Associations",
  "Professionnels du digital",
  "Professionnels du BTP",
  "Acteurs de la construction",
];

export default async function ConsultingPage() {
  const whatsapp = await getWhatsappNumbers();
  const messageProjet = getConsultingMessage("Marketing Digital ou Génie Civil & Géotechnique");

  return (
    <>
      {/* Hero */}
      <Section className="pt-8 md:pt-12">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Consulting</p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Un accompagnement adapté à vos projets
            </h1>
            <p className="mt-4 text-stone-600">
              Vous avez une question, une problématique ou un projet que vous souhaitez faire évoluer ?
            </p>
            <p className="mt-2 text-stone-600">
              PM vous accompagne avec des conseils adaptés à votre situation, en Marketing Digital ainsi
              qu&apos;en Génie Civil &amp; Géotechnique.
            </p>
            <div className="mt-6">
              <WhatsAppButton phone={whatsapp.pm} message={messageProjet} label="Parler de mon projet" variant="primary" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Services de consulting */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Nos services de consulting
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <OfferAccordion offres={offres} phone={whatsapp.pm} />
          </Reveal>
        </Container>
      </Section>

      {/* Domaines d'expertise */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Nos domaines d&apos;expertise
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-3xl bg-mkt-50 p-8 shadow-soft">
                <TrendingUp className="h-8 w-8 text-mkt-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">Marketing Digital</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Accompagnement et conseil sur vos problématiques liées au digital, au marketing, aux
                  réseaux sociaux, à la communication et au développement de votre présence en ligne.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col rounded-3xl bg-geo-50 p-8 shadow-soft">
                <HardHat className="h-8 w-8 text-geo-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">Génie Civil &amp; Géotechnique</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Conseil et accompagnement sur les problématiques liées au génie civil, à la
                  géotechnique, aux sols, aux fondations et aux projets de construction.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Notre approche */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Un accompagnement pensé pour votre situation
            </h2>
          </Reveal>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approche.map((etape, index) => (
              <Reveal key={etape.titre} delay={index * 0.08}>
                <li className="h-full rounded-3xl bg-paper p-6 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{etape.titre}</h3>
                  <p className="mt-2 text-sm text-stone-600">{etape.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Pour qui */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">Pour qui ?</h2>
            <p className="mt-3 max-w-2xl text-stone-600">
              Nos services de consulting s&apos;adressent notamment aux :
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2">
            {pourQui.map((cible) => (
              <span
                key={cible}
                className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600"
              >
                {cible}
              </span>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* CTA final */}
      <Section tone="muted">
        <CTA
          titre="Vous avez une question ou un projet ?"
          description="Vous ne savez pas encore quelle formule correspond à votre besoin ? Présentez-nous simplement votre situation, nous vous aiderons à identifier l'accompagnement le plus adapté."
          phone={whatsapp.pm}
          message={messageProjet}
        />
      </Section>
    </>
  );
}
