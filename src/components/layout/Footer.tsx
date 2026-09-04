import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getGeneralMessage } from "@/lib/whatsapp-messages";
import { siteConfig } from "@/lib/site-config";

const navColumns = [
  {
    title: "Navigation",
    links: [
      { href: "/formations", label: "Formations" },
      { href: "/consulting", label: "Consulting" },
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Expertises",
    links: [
      { href: "/expertises/marketing-digital", label: "Marketing Digital" },
      { href: "/expertises/genie-civil-geotechnique", label: "Génie Civil & Géotechnique" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
      { href: "/cgv", label: "CGV" },
    ],
  },
];

// Placeholders — à remplacer par les vrais liens du client (voir TODO-CLIENT.md).
const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
];

export function Footer({ whatsappPm }: { whatsappPm?: string }) {
  const phone = whatsappPm ?? siteConfig.whatsapp.pm;

  return (
    // `pb-24` sous 640px : laisse la place à la barre d'onglets tubelight,
    // fixée en bas de l'écran sur mobile (voir Header.tsx).
    <footer className="bg-ink pb-24 text-paper/80 sm:pb-0">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="wordmark" className="text-paper" />
            <p className="max-w-xs text-sm leading-relaxed">
              Formations et consulting en Marketing Digital et en Génie Civil &amp;
              Géotechnique.
            </p>
            <WhatsAppButton
              phone={phone}
              message={getGeneralMessage()}
              label="Discuter sur WhatsApp"
              variant="secondary"
              className="w-fit border-paper/20 text-paper hover:border-whatsapp hover:text-whatsapp"
            />
          </div>

          {navColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-paper/50">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-paper/80 hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-6 border-t border-paper/10 pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} {siteConfig.fullName}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-paper/60 hover:text-paper"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
