import { MessageCircle } from "lucide-react";
import clsx from "clsx";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export type WhatsAppButtonVariant = "primary" | "secondary" | "icon" | "floating";

type WhatsAppButtonProps = {
  /** Numéro de téléphone (fourni par Sanity, avec fallback env côté appelant). */
  phone: string;
  /** Message pré-rempli, déjà construit via les helpers de `whatsapp-messages.ts`. */
  message: string;
  label?: string;
  variant?: WhatsAppButtonVariant;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<WhatsAppButtonVariant, string> = {
  primary:
    "rounded-full bg-whatsapp px-6 py-3 text-white shadow-soft hover:bg-whatsapp-dark",
  secondary:
    "rounded-full border border-ink/15 px-6 py-3 text-ink hover:border-whatsapp hover:text-whatsapp-dark",
  icon: "h-11 w-11 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark",
  // `bottom-24` (au lieu de `bottom-5`) sous 640px : la barre d'onglets
  // tubelight est fixée en bas sur mobile, ce décalage évite qu'elle
  // chevauche ce bouton. À partir de `sm:`, la barre passe en haut, donc le
  // bouton peut redescendre à `bottom-5`.
  floating:
    "fixed bottom-24 right-5 sm:bottom-5 z-40 h-14 w-14 rounded-full bg-whatsapp text-white shadow-card hover:bg-whatsapp-dark lg:hidden",
};

/**
 * Bouton WhatsApp réutilisable. Toutes les variantes ouvrent `wa.me` dans un
 * nouvel onglet avec le message pré-rempli passé en prop.
 */
export function WhatsAppButton({
  phone,
  message,
  label = "Discuter sur WhatsApp",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(phone, message);
  const isIconOnly = variant === "icon" || variant === "floating";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      <MessageCircle className={isIconOnly ? "h-6 w-6" : "h-5 w-5"} aria-hidden="true" />
      {!isIconOnly && <span>{label}</span>}
    </a>
  );
}
