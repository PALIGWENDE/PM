import pherinaPhoto from "../../public/images/team/pherina-horizontal.png";
import maurissonPhoto from "../../public/images/team/maurisson-horizontal.jpeg";
import { siteConfig } from "@/lib/site-config";
import type { FaqView, FormationView, PersonView, ServiceView } from "@/types/content";

/**
 * Contenu de démonstration, utilisé uniquement quand Sanity ne renvoie rien
 * (projet non configuré ou dataset vide). Reprend le contenu du script de
 * seed (`scripts/seed.ts`) pour rester cohérent. À supprimer progressivement
 * une fois que le vrai contenu du client vit dans Sanity — voir
 * TODO-CLIENT.md.
 */

export const demoFormations: FormationView[] = [
  {
    id: "demo-fondamentaux-marketing-digital",
    slug: "fondamentaux-marketing-digital",
    nom: "Fondamentaux du Marketing Digital",
    domaine: "Marketing Digital",
    niveau: "Débutant",
    format: "En ligne",
    types: ["Individuel", "Groupe"],
    descriptionCourte:
      "Les bases du marketing digital : réseaux sociaux, contenu, publicité en ligne.",
    presentation:
      "Une formation d'introduction pour comprendre les leviers essentiels du marketing digital et poser des bases solides.",
    publicCible: "Toute personne souhaitant démarrer en marketing digital.",
    objectifs: [
      "Comprendre les grands leviers du marketing digital",
      "Identifier les canaux pertinents pour son activité",
      "Poser les bases d'une stratégie de contenu",
    ],
    programme: [
      { titre: "Module 1 — Panorama du marketing digital", contenu: "Les canaux, les audiences, les objectifs." },
      { titre: "Module 2 — Réseaux sociaux et contenu", contenu: "Créer et planifier du contenu efficace." },
    ],
    duree: "4 semaines",
    tarif: "Sur devis",
    imageUrl: "/images/formations/marketing-digital-1.jpg",
    imageAlt: "Tableau de bord marketing digital consulté sur tablette",
  },
  {
    id: "demo-strategie-reseaux-sociaux",
    slug: "strategie-reseaux-sociaux",
    nom: "Stratégie Réseaux Sociaux Avancée",
    domaine: "Marketing Digital",
    niveau: "Avancé",
    format: "En ligne",
    types: ["Groupe"],
    descriptionCourte:
      "Construire et piloter une stratégie de contenu et de croissance sur les réseaux sociaux.",
    publicCible: "Professionnels du marketing souhaitant approfondir leur stratégie social media.",
    objectifs: [
      "Construire un calendrier éditorial performant",
      "Analyser les indicateurs de croissance",
      "Optimiser la conversion depuis les réseaux sociaux",
    ],
    programme: [
      { titre: "Module 1 — Stratégie éditoriale", contenu: "Ligne éditoriale et planification." },
      { titre: "Module 2 — Analyse et optimisation", contenu: "KPIs, tests et itérations." },
    ],
    duree: "6 semaines",
    tarif: "Sur devis",
    imageUrl: "/images/formations/marketing-digital-1.jpg",
    imageAlt: "Tableau de bord marketing digital consulté sur tablette",
  },
  {
    id: "demo-initiation-etudes-de-sol",
    slug: "initiation-etudes-de-sol",
    nom: "Initiation aux Études de Sol",
    domaine: "Génie Civil",
    niveau: "Débutant",
    format: "En ligne",
    types: ["Groupe"],
    descriptionCourte:
      "Comprendre les bases des études de sol avant un projet de construction.",
    publicCible: "Techniciens et ingénieurs juniors en génie civil.",
    objectifs: [
      "Comprendre les enjeux d'une étude de sol",
      "Identifier les essais géotechniques courants",
      "Lire un rapport d'étude de sol",
    ],
    programme: [
      { titre: "Module 1 — Pourquoi étudier le sol", contenu: "Risques et enjeux avant construction." },
      { titre: "Module 2 — Essais courants", contenu: "Sondages, essais in situ et laboratoire." },
    ],
    duree: "3 semaines",
    tarif: "Sur devis",
    imageUrl: "/images/formations/genie-civil-1.jpg",
    imageAlt: "Casque de chantier posé sur des plans de construction",
  },
  {
    id: "demo-dimensionnement-fondations",
    slug: "dimensionnement-fondations",
    nom: "Dimensionnement des Fondations",
    domaine: "Génie Civil",
    niveau: "Intermédiaire",
    format: "En ligne",
    types: ["Individuel", "Groupe"],
    descriptionCourte:
      "Méthodes de dimensionnement des fondations superficielles et profondes.",
    publicCible: "Ingénieurs et techniciens en bureau d'études.",
    objectifs: [
      "Choisir un type de fondation adapté",
      "Dimensionner une fondation superficielle",
      "Dimensionner une fondation profonde",
    ],
    programme: [
      { titre: "Module 1 — Fondations superficielles", contenu: "Semelles isolées et filantes." },
      { titre: "Module 2 — Fondations profondes", contenu: "Pieux et micropieux." },
    ],
    duree: "5 semaines",
    tarif: "Sur devis",
    imageUrl: "/images/formations/genie-civil-3.jpg",
    imageAlt: "Relevé de plan de fondation par drone sur un chantier",
  },
  {
    id: "demo-mecanique-des-sols",
    slug: "mecanique-des-sols",
    nom: "Mécanique des Sols Appliquée",
    domaine: "Géotechnique",
    niveau: "Intermédiaire",
    format: "En ligne",
    types: ["Groupe"],
    descriptionCourte:
      "Propriétés mécaniques des sols et leur application aux projets de génie civil.",
    publicCible: "Techniciens et ingénieurs en géotechnique.",
    objectifs: [
      "Comprendre les propriétés mécaniques des sols",
      "Appliquer les modèles de calcul courants",
      "Interpréter des résultats d'essais",
    ],
    programme: [
      { titre: "Module 1 — Propriétés des sols", contenu: "Granulométrie, plasticité, compacité." },
      { titre: "Module 2 — Applications pratiques", contenu: "Tassements et portance." },
    ],
    duree: "6 semaines",
    tarif: "Sur devis",
    imageUrl: "/images/formations/geotechnique-1.jpg",
    imageAlt: "Géotechnicienne réalisant des essais de sol sur le terrain",
  },
  {
    id: "demo-stabilite-des-talus",
    slug: "stabilite-des-talus",
    nom: "Stabilité des Talus et Glissements de Terrain",
    domaine: "Géotechnique",
    niveau: "Avancé",
    format: "En ligne",
    types: ["Individuel"],
    descriptionCourte:
      "Analyse de la stabilité des talus et prévention des glissements de terrain.",
    publicCible: "Ingénieurs géotechniciens expérimentés.",
    objectifs: [
      "Analyser la stabilité d'un talus",
      "Identifier les facteurs de risque de glissement",
      "Proposer des solutions de confortement",
    ],
    programme: [
      { titre: "Module 1 — Analyse de stabilité", contenu: "Méthodes de calcul et logiciels." },
      { titre: "Module 2 — Solutions de confortement", contenu: "Techniques de stabilisation." },
    ],
    duree: "4 semaines",
    tarif: "Sur devis",
    imageUrl: "/images/formations/geotechnique-1.jpg",
    imageAlt: "Géotechnicienne réalisant des essais de sol sur le terrain",
  },
];

export const demoServices: ServiceView[] = [
  { id: "demo-audit-digital", nom: "Audit de présence digitale", categorie: "Marketing Digital", description: "Un état des lieux complet de votre présence en ligne et des recommandations concrètes." },
  { id: "demo-gestion-reseaux", nom: "Gestion de réseaux sociaux", categorie: "Marketing Digital", description: "Création et animation de vos réseaux sociaux au quotidien." },
  { id: "demo-strategie-contenu", nom: "Stratégie de contenu", categorie: "Marketing Digital", description: "Une ligne éditoriale claire pour toucher la bonne audience." },
  { id: "demo-etude-geotechnique", nom: "Étude géotechnique de sol", categorie: "Génie Civil & Géotechnique", description: "Études de sol adaptées à votre projet de construction." },
  { id: "demo-suivi-chantier", nom: "Suivi de chantier", categorie: "Génie Civil & Géotechnique", description: "Un accompagnement rigoureux du chantier jusqu'à la réception." },
  { id: "demo-controle-qualite", nom: "Contrôle qualité des ouvrages", categorie: "Génie Civil & Géotechnique", description: "Vérification de la conformité et de la qualité des ouvrages réalisés." },
];

export const demoFaqs: FaqView[] = [
  { id: "demo-faq-1", question: "Comment s'inscrire à une formation ?", reponse: "Contactez-nous directement sur WhatsApp depuis la fiche de la formation qui vous intéresse : nous confirmons ensemble les modalités et la disponibilité." },
  { id: "demo-faq-2", question: "Les formations sont-elles certifiantes ?", reponse: "Cela dépend de la formation. Le détail est précisé sur chaque fiche formation ; n'hésitez pas à nous demander par WhatsApp si ce n'est pas indiqué." },
  { id: "demo-faq-3", question: "Proposez-vous des sessions individuelles ?", reponse: "Oui, la plupart de nos formations sont disponibles en format individuel (1-to-1) ou en groupe, selon vos préférences." },
  { id: "demo-faq-4", question: "Quels sont les moyens de paiement acceptés ?", reponse: "Les modalités de paiement sont convenues directement avec vous lors de l'échange WhatsApp, selon la formation ou la prestation de consulting choisie." },
];

export const demoPeople: PersonView[] = [
  {
    id: "demo-pherina",
    nom: "Pherina",
    titre: "Experte en Marketing Digital",
    bio: "Bio de Pherina à compléter avec le texte réel fourni par le client.",
    domainesExpertise: ["Marketing Digital"],
    photo: pherinaPhoto,
    whatsapp: siteConfig.whatsapp.pherina,
  },
  {
    id: "demo-maurisson",
    nom: "Maurisson",
    titre: "Expert en Génie Civil & Géotechnique",
    bio: "Bio de Maurisson à compléter avec le texte réel fourni par le client.",
    domainesExpertise: ["Génie Civil", "Géotechnique"],
    photo: maurissonPhoto,
    whatsapp: siteConfig.whatsapp.maurisson,
  },
];
