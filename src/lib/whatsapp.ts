/**
 * Construit un lien `wa.me` valide à partir d'un numéro et d'un message
 * pré-rempli. Le numéro peut être saisi avec espaces, points ou indicatif
 * précédé de "+" (ex. "+225 07 00 00 00 00") ; seuls les chiffres sont
 * conservés, comme l'exige le format `wa.me`.
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const digitsOnly = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${digitsOnly}?text=${encodedMessage}`;
}
