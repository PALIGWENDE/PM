/**
 * Modèles de messages WhatsApp pré-remplis.
 *
 * ⚠️ PLACEHOLDER — le cahier des charges du client doit fournir le texte
 * exact de chaque message (voir TODO-CLIENT.md). Ces formulations sont
 * provisoires : ne pas les considérer comme validées côté client.
 */

export function getFormationMessage(nomFormation: string): string {
  return `Bonjour, je suis intéressé(e) par la formation "${nomFormation}". Pouvez-vous me donner plus d'informations sur le programme, les dates et le tarif ?`;
}

export function getConsultingMessage(domaine: string): string {
  return `Bonjour, je souhaite être accompagné(e) en consulting dans le domaine : ${domaine}. Pouvez-vous me recontacter pour en discuter ?`;
}

export function getSessionMessage(prenom: string): string {
  return `Bonjour, je m'appelle ${prenom}. Je souhaite réserver une session individuelle (1-to-1). Quelles sont vos disponibilités ?`;
}

export function getGeneralMessage(): string {
  return "Bonjour, je découvre le site PM et j'aimerais en savoir plus sur vos formations et vos services.";
}

export function getContactMessage(destinataire: "Pherina" | "Maurisson" | "PM"): string {
  return `Bonjour ${destinataire}, je vous contacte depuis le site PM. J'aimerais échanger avec vous.`;
}
