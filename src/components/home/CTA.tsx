import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

export function CTA({
  titre,
  description,
  phone,
  message,
  secondaryHref,
  secondaryLabel,
}: {
  titre: string;
  description: string;
  phone: string;
  message: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Container>
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-ink px-6 py-16 text-center md:rounded-[2.5rem] md:px-16">
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-paper md:text-4xl">
            {titre}
          </h2>
          <p className="max-w-xl text-balance text-paper/70">{description}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <WhatsAppButton phone={phone} message={message} label="Discuter sur WhatsApp" variant="primary" />
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-paper/25 px-6 py-3 font-medium text-paper transition-colors hover:border-paper/50"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
