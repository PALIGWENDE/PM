import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getGeneralMessage, getSessionMessage } from "@/lib/whatsapp-messages";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Pherina, Maurisson ou PM directement sur WhatsApp.",
};

export default async function ContactPage() {
  const whatsapp = await getWhatsappNumbers();

  const contacts = [
    {
      nom: "Pherina",
      description: "Pour toute question sur le Marketing Digital.",
      phone: whatsapp.pherina,
      message: getSessionMessage("Pherina"),
    },
    {
      nom: "Maurisson",
      description: "Pour toute question sur le Génie Civil & Géotechnique.",
      phone: whatsapp.maurisson,
      message: getSessionMessage("Maurisson"),
    },
    {
      nom: "PM",
      description: "Pour une demande générale, formation ou consulting.",
      phone: whatsapp.pm,
      message: getGeneralMessage(),
    },
  ];

  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Contact</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Parlons de votre projet.
          </h1>
          <p className="mt-4 text-stone-600">
            [PLACEHOLDER] PM échange exclusivement sur WhatsApp. Choisissez le bon interlocuteur
            ci-dessous selon votre besoin.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contacts.map((contact, index) => (
            <Reveal key={contact.nom} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-3xl bg-paper p-8 text-center shadow-card">
                <h2 className="text-xl font-semibold text-ink">{contact.nom}</h2>
                <p className="mt-2 flex-1 text-sm text-stone-600">{contact.description}</p>
                <WhatsAppButton
                  phone={contact.phone}
                  message={contact.message}
                  label={`Discuter avec ${contact.nom}`}
                  variant="primary"
                  className="mt-6 justify-center"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
