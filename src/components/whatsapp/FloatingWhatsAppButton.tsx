import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getGeneralMessage } from "@/lib/whatsapp-messages";
import { siteConfig } from "@/lib/site-config";

/**
 * Bouton flottant bas-droite, visible uniquement sous le breakpoint `lg`
 * (le header porte déjà un bouton WhatsApp permanent sur desktop).
 */
export function FloatingWhatsAppButton({ phone }: { phone?: string }) {
  return (
    <WhatsAppButton
      phone={phone ?? siteConfig.whatsapp.pm}
      message={getGeneralMessage()}
      label="Contacter PM sur WhatsApp"
      variant="floating"
    />
  );
}
