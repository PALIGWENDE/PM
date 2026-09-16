import pherinaPhoto from "../../public/images/team/pherina-horizontal.png";
import maurissonPhoto from "../../public/images/team/maurisson-costume.jpeg";
import { siteConfig } from "@/lib/site-config";
import type { FaqView, FormationView, PersonView, ServiceView, TemoignageView } from "@/types/content";

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
    types: ["Groupe", "Individuel"],
    descriptionCourte:
      "Une formation pour comprendre les bases du marketing digital et apprendre à les appliquer concrètement à un projet, une activité ou une entreprise.",
    presentation:
      "Une formation pour comprendre les bases du marketing digital et apprendre à les appliquer concrètement à un projet, une activité ou une entreprise.",
    publicCible:
      "Entrepreneurs et porteurs de projets, étudiants, débutants en marketing digital, personnes en reconversion, professionnels souhaitant acquérir les bases du digital.",
    objectifs: [
      "Comprendre les fondamentaux du marketing digital",
      "Identifier et définir sa cible",
      "Définir son positionnement",
      "Comprendre le rôle des différents canaux digitaux",
      "Construire les bases d'une présence digitale cohérente",
      "Élaborer une première stratégie de contenu",
      "Comprendre les bases de la publicité digitale",
      "Identifier les principaux indicateurs de performance",
    ],
    programme: [
      { titre: "Panorama du marketing digital", contenu: "Définition et enjeux, écosystème digital, parcours client." },
      { titre: "Cible et positionnement", contenu: "Identifier son client idéal, construire son persona, définir son positionnement et sa proposition de valeur." },
      { titre: "Les canaux digitaux", contenu: "Réseaux sociaux, site web, email marketing, référencement, publicité digitale." },
      { titre: "Stratégie de contenu", contenu: "Piliers de contenu, formats, calendrier éditorial, storytelling et appel à l'action." },
      { titre: "Mesurer ses résultats", contenu: "Les principaux KPI, l'analyse des performances et l'ajustement d'une stratégie." },
    ],
    duree: "4 semaines",
    tarif: "Groupe : 150 € / personne · Individuel (1:1) : 250 €",
    imageUrl: "/images/formations/marketing-fondamentaux.jpeg",
    imageAlt: "Tableau de bord d'analyse marketing digital consulté sur tablette",
  },
  {
    id: "demo-strategie-reseaux-sociaux",
    slug: "strategie-reseaux-sociaux",
    nom: "Réseaux Sociaux : Stratégie & Community Management",
    domaine: "Marketing Digital",
    niveau: "Débutant à intermédiaire",
    format: "En ligne",
    types: ["Groupe", "Individuel"],
    descriptionCourte:
      "Apprenez à construire et gérer une présence professionnelle sur les réseaux sociaux grâce à une stratégie adaptée à votre activité et à votre audience.",
    presentation:
      "Apprenez à construire et gérer une présence professionnelle sur les réseaux sociaux grâce à une stratégie adaptée à votre activité et à votre audience.",
    publicCible:
      "Entrepreneurs, créateurs de contenu, community managers débutants, responsables de communication, petites entreprises et associations, toute personne souhaitant professionnaliser sa présence sur les réseaux sociaux.",
    objectifs: [
      "Construire une stratégie pour ses réseaux sociaux",
      "Choisir les plateformes adaptées à son activité",
      "Définir ses piliers de contenu",
      "Élaborer un calendrier éditorial",
      "Créer du contenu adapté à sa cible",
      "Développer une communauté",
      "Comprendre les bases du community management",
      "Analyser les performances de ses publications",
    ],
    programme: [
      { titre: "Comprendre les réseaux sociaux", contenu: "Fonctionnement des principales plateformes, choix des réseaux adaptés à son activité, objectifs et stratégie." },
      { titre: "Construire sa stratégie Social Media", contenu: "Cible, positionnement, objectifs, ligne éditoriale, piliers de contenu." },
      { titre: "Création de contenu", contenu: "Trouver des idées de contenu, formats (publications, carrousels, stories, Reels, vidéos), rédaction, storytelling, appels à l'action, introduction à Canva." },
      { titre: "Community Management", contenu: "Gestion quotidienne d'une communauté, réponses aux commentaires et messages, engagement, gestion de la relation avec l'audience." },
      { titre: "Analyse et amélioration", contenu: "Statistiques des réseaux sociaux, KPI, analyse des résultats, optimisation de la stratégie." },
    ],
    duree: "4 à 5 semaines",
    tarif: "Groupe : 200 € / personne · Individuel (1:1) : 320 €",
    imageUrl: "/images/formations/marketing-reseaux-sociaux.jpeg",
    imageAlt: "Écran de smartphone affichant un dossier d'applications de réseaux sociaux",
  },
  {
    id: "demo-construire-sa-strategie-marketing-digitale",
    slug: "construire-sa-strategie-marketing-digitale",
    nom: "Construire sa Stratégie Marketing Digitale",
    domaine: "Marketing Digital",
    niveau: "Intermédiaire",
    format: "En ligne",
    types: ["Individuel"],
    descriptionCourte:
      "Un accompagnement individuel destiné aux entrepreneurs et professionnels qui souhaitent construire une stratégie marketing digitale adaptée à leur activité, leur cible et leurs objectifs.",
    presentation:
      "Un accompagnement individuel destiné aux entrepreneurs et professionnels qui souhaitent construire une stratégie marketing digitale adaptée à leur activité, leur cible et leurs objectifs. Cette formation est réalisée exclusivement en individuel afin de permettre un travail directement adapté au projet du participant.",
    publicCible:
      "Entrepreneurs, porteurs de projets, freelances, petites et moyennes entreprises, professionnels ayant déjà une activité et souhaitant structurer leur stratégie digitale.",
    objectifs: [
      "Analyser son marché et son environnement digital",
      "Définir clairement sa cible",
      "Clarifier son positionnement",
      "Définir ses objectifs marketing",
      "Choisir les canaux adaptés à son activité",
      "Construire une stratégie de contenu",
      "Structurer son parcours client",
      "Définir ses indicateurs de performance",
      "Élaborer un plan d'action concret",
    ],
    programme: [
      { titre: "Diagnostic du projet", contenu: "Analyse de l'activité, analyse de la présence digitale existante, identification des forces et des points à améliorer." },
      { titre: "Cible et positionnement", contenu: "Persona, besoins et attentes de la cible, positionnement, proposition de valeur." },
      { titre: "Construction de la stratégie", contenu: "Objectifs marketing, choix des canaux, stratégie de contenu, parcours client, acquisition et conversion." },
      { titre: "Plan d'action", contenu: "Priorités, calendrier d'actions, KPI, méthode de suivi, plan d'amélioration." },
    ],
    duree: "4 semaines",
    tarif: "350 €",
    imageUrl: "/images/formations/marketing-strategie.jpeg",
    imageAlt: "Personne travaillant sur une présentation de stratégie marketing sur ordinateur portable",
  },
  {
    id: "demo-geotechnique-batiments-etudes-sols-fondations",
    slug: "geotechnique-batiments-etudes-sols-fondations",
    nom: "Géotechnique des Bâtiments : Études de Sols & Fondations",
    domaine: "Géotechnique",
    niveau: "Débutant à intermédiaire",
    format: "En ligne",
    types: ["Groupe", "Individuel"],
    descriptionCourte:
      "Une formation pratique pour comprendre comment exploiter une étude géotechnique de bâtiment, caractériser le sol et participer au choix d'une solution de fondation adaptée au projet.",
    presentation:
      "Une formation pratique pour comprendre comment exploiter une étude géotechnique de bâtiment, caractériser le sol et participer au choix d'une solution de fondation adaptée au projet. L'objectif est de faire le lien entre le sol, les résultats géotechniques et les fondations.",
    publicCible:
      "Étudiants en génie civil, techniciens et ingénieurs, professionnels du BTP, conducteurs de travaux, bureaux d'études, entrepreneurs et constructeurs, personnes souhaitant se spécialiser en géotechnique ou en reconversion vers le BTP.",
    objectifs: [
      "Comprendre les différents types de sols",
      "Comprendre les principales investigations géotechniques",
      "Lire et interpréter un rapport géotechnique",
      "Identifier le bon sol et le niveau d'assise",
      "Comprendre les différents types de fondations",
      "Choisir une fondation adaptée au sol et au projet",
      "Comprendre les paramètres nécessaires au dimensionnement",
      "Étudier des cas réels de projets de bâtiment",
    ],
    programme: [
      { titre: "Reconnaissance et identification des sols", contenu: "Reconnaissance du terrain, identification des principales familles de sols, sondages et investigations géotechniques, prélèvements et échantillonnage, essais géotechniques." },
      { titre: "Lecture et interprétation d'une étude géotechnique", contenu: "Structure d'un rapport géotechnique, lecture des résultats d'essais, coupe / profil lithologique, identification du bon sol, niveau d'assise des fondations, paramètres géotechniques importants." },
      { titre: "Fondations", contenu: "Fondations superficielles (semelles isolées, semelles filantes, radier général), fondations profondes (pieux), critères de choix du type de fondation." },
      { titre: "Application pratique", contenu: "Analyse de cas réels, choix de la fondation adaptée, vérifications géotechniques, analyse des risques, études de cas de bâtiments." },
    ],
    duree: "4 semaines",
    tarif: "Groupe : 199 € / personne · Individuel (1:1) : 249 €",
    imageUrl: "/images/formations/geotechnique-fondations.jpeg",
    imageAlt: "Chantier de fondation avec ferraillage et coffrage en cours de réalisation",
  },
  {
    id: "demo-geotechnique-routiere",
    slug: "geotechnique-routiere",
    nom: "Formation Pratique en Géotechnique Routière",
    domaine: "Géotechnique",
    niveau: "Débutant à intermédiaire",
    format: "En ligne",
    types: ["Groupe", "Individuel"],
    descriptionCourte:
      "Une formation pratique consacrée aux études géotechniques routières, depuis la reconnaissance du terrain jusqu'au dimensionnement des chaussées avec ALIZÉ.",
    presentation:
      "Une formation pratique consacrée aux études géotechniques routières, depuis la reconnaissance du terrain jusqu'au dimensionnement des chaussées avec ALIZÉ. La formation s'appuie sur des cas pratiques et des données issues de projets routiers réels.",
    publicCible:
      "Étudiants en génie civil, techniciens, ingénieurs, géotechniciens, professionnels des travaux publics, bureaux d'études, conducteurs de travaux, professionnels souhaitant se spécialiser dans les routes.",
    objectifs: [
      "Comprendre les spécificités de la géotechnique routière",
      "Réaliser une reconnaissance géotechnique d'un tracé routier",
      "Comprendre les sondages et essais routiers",
      "Identifier et caractériser les sols",
      "Élaborer et interpréter les profils lithologiques",
      "Exploiter les résultats géotechniques",
      "Comprendre les paramètres nécessaires au dimensionnement",
      "Dimensionner une chaussée avec ALIZÉ",
    ],
    programme: [
      { titre: "Reconnaissance géotechnique routière", contenu: "Reconnaissance du tracé, identification des sols, sondages géotechniques, prélèvements, campagne géotechnique, essais de laboratoire et in situ." },
      { titre: "Caractérisation des sols routiers", contenu: "Classification des sols, analyse des résultats, CBR, portance, identification des matériaux, profils / coupes lithologiques." },
      { titre: "Étude géotechnique de la plateforme", contenu: "Définition de la plateforme, classe de sol, portance de la plateforme, exploitation des données géotechniques, choix des matériaux, données nécessaires au dimensionnement." },
      { titre: "Dimensionnement avec ALIZÉ", contenu: "Principe du dimensionnement des chaussées, introduction à ALIZÉ, définition des structures de chaussée, paramétrage, calcul, interprétation des résultats, application sur un cas pratique réel." },
    ],
    duree: "4 semaines",
    tarif: "Groupe : 279 € / personne · Individuel (1:1) : 340 €",
    imageUrl: "/images/formations/geotechnique-routiere.jpeg",
    imageAlt: "Coupe de sol montrant les différentes couches géologiques du terrain",
  },
  {
    id: "demo-geotechnique-stabilite-des-talus",
    slug: "geotechnique-stabilite-des-talus",
    nom: "Études Géotechniques & Stabilité des Talus",
    domaine: "Géotechnique",
    niveau: "Intermédiaire",
    format: "En ligne",
    types: ["Groupe", "Individuel"],
    descriptionCourte:
      "Une formation pratique consacrée à l'étude géotechnique des talus et à l'analyse de leur stabilité.",
    presentation:
      "Une formation pratique consacrée à l'étude géotechnique des talus et à l'analyse de leur stabilité. L'objectif est de comprendre les mécanismes d'instabilité, d'interpréter les données géotechniques et d'identifier les solutions adaptées à un problème de stabilité.",
    publicCible:
      "Étudiants en génie civil, ingénieurs, géotechniciens, techniciens, professionnels des travaux publics, bureaux d'études, professionnels travaillant sur les terrassements, personnes souhaitant approfondir leurs compétences en géotechnique.",
    objectifs: [
      "Comprendre les mécanismes d'instabilité des talus",
      "Identifier les différents types de glissements",
      "Réaliser une reconnaissance géotechnique d'un talus",
      "Identifier les facteurs pouvant provoquer une instabilité",
      "Interpréter les profils géologiques et géotechniques",
      "Définir les paramètres nécessaires à l'étude",
      "Évaluer la stabilité d'un talus",
      "Identifier les solutions de stabilisation adaptées",
    ],
    programme: [
      { titre: "Reconnaissance et diagnostic", contenu: "Reconnaissance du terrain, identification des formations géologiques, identification des signes d'instabilité (fissures, mouvements, glissements), eau et drainage." },
      { titre: "Investigations géotechniques", contenu: "Sondages, essais géotechniques, profils géotechniques, paramètres mécaniques des sols, exploitation des résultats." },
      { titre: "Analyse de stabilité", contenu: "Principes de stabilité des talus, modes de rupture, surface de glissement, paramètres géotechniques, facteur de sécurité, analyse de cas pratiques." },
      { titre: "Solutions de stabilisation", contenu: "Terrassement et reprofilage, drainage, soutènements, renforcement, ancrages, solutions adaptées au contexte géotechnique, études de cas réels." },
    ],
    duree: "4 semaines",
    tarif: "Groupe : 330 € / personne · Individuel (1:1) : 400 €",
    imageUrl: "/images/formations/geotechnique-talus.jpeg",
    imageAlt: "Glissement de terrain affectant un talus et des constructions en surplomb",
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

// Témoignages réels transmis par le client (messages informels, repris tels quels).
export const demoTemoignages: TemoignageView[] = [
  { id: "demo-temoignage-1", citation: "🤣🤣 Tu vois que la persévérance paie ! Tu as juste eu à me montrer le B.A.-BA, et j'ai creusé. Mais c'est à toi que je dois dire merci ! 🙏🏽", nom: "Steven" },
  { id: "demo-temoignage-2", citation: "Vous avez respecté ma vision tout en apportant votre touche.", nom: "Julia" },
  { id: "demo-temoignage-3", citation: "Je n'hésiterai pas à vous recommander autour de moi. Votre formation est de qualité et mérite d'être achetée.", nom: "Elan" },
  { id: "demo-temoignage-4", citation: "Ce que j'ai aimé, c'est qu'on ne s'est pas contenté de la théorie. J'ai pu appliquer directement ce que j'apprenais à mon activité.", nom: "Sarah" },
  { id: "demo-temoignage-5", citation: "Franchement, je ne pensais pas pouvoir appliquer tout ça aussi rapidement 😂 Merci pour ta patience et tes explications !", nom: "Jules" },
  { id: "demo-temoignage-6", citation: "Le fait de travailler directement sur mon propre projet a vraiment fait la différence. Je ne suis pas seulement venu apprendre, j'ai construit quelque chose.", nom: "Divine" },
  { id: "demo-temoignage-7", citation: "J'ai surtout apprécié les exercices pratiques. Ça m'a permis de prendre confiance et de voir concrètement mes progrès." },
  { id: "demo-temoignage-8", citation: "Je suis arrivé avec beaucoup de questions et je suis reparti avec une vraie vision de ce que je dois mettre en place pour mon activité.", nom: "Marion" },
  { id: "demo-temoignage-9", citation: "Maurisaine explique vraiment bien. Même les notions que je trouvais compliquées sont devenues beaucoup plus simples à comprendre.", nom: "Bienvenu" },
  { id: "demo-temoignage-10", citation: "J'ai enfin compris comment structurer ma présence en ligne. La formation était claire, pratique et surtout adaptée à mon niveau.", nom: "Ketsia" },
  { id: "demo-temoignage-11", citation: "L'accompagnement m'a permis de mettre tout ça en ordre et d'avoir un plan clair.", nom: "Ezechiel" },
];

export const demoPeople: PersonView[] = [
  {
    id: "demo-pherina",
    nom: "Pherina",
    titre: "Social Media Manager & Spécialiste en Marketing Digital",
    bio: [
      { _type: "block", _key: "bio1", children: [{ _type: "span", _key: "bio1-span", text: "Passionnée par le digital et la communication, Pherina évolue dans l'univers du marketing digital et des réseaux sociaux depuis plusieurs années." }] },
      { _type: "block", _key: "bio2", children: [{ _type: "span", _key: "bio2-span", text: "Son parcours académique et professionnel lui a permis de développer des compétences en marketing digital, stratégie de communication et gestion des réseaux sociaux." }] },
      { _type: "block", _key: "bio3", children: [{ _type: "span", _key: "bio3-span", text: "À travers PM Formation & Consulting, elle souhaite avant tout transmettre ses connaissances, accompagner les entrepreneurs et professionnels dans leurs projets et les aider à mieux comprendre et exploiter les opportunités offertes par le digital." }] },
      { _type: "block", _key: "bio4", children: [{ _type: "span", _key: "bio4-span", text: "Son approche repose sur une conviction simple : avec de bonnes bases, une stratégie adaptée et de la persévérance, chacun peut développer ses compétences et faire évoluer son projet." }] },
    ],
    domainesExpertise: ["Marketing Digital"],
    photo: pherinaPhoto,
    whatsapp: siteConfig.whatsapp.pherina,
  },
  {
    id: "demo-maurisson",
    nom: "Maurisson",
    titre: "Ingénieur Génie Civil & Géotechnique | Spécialiste des sols, fondations & infrastructures",
    bio: [
      { _type: "block", _key: "bio1", children: [{ _type: "span", _key: "bio1-span", text: "Passionné par le génie civil et particulièrement par la géotechnique, Maurisson évolue dans le domaine des études de sols, des fondations et des infrastructures routières." }] },
      { _type: "block", _key: "bio2", children: [{ _type: "span", _key: "bio2-span", text: "Son parcours académique et professionnel lui a permis de développer des compétences dans l'analyse des sols, les études géotechniques, le dimensionnement des fondations, les études routières et le suivi de projets de génie civil." }] },
      { _type: "block", _key: "bio3", children: [{ _type: "span", _key: "bio3-span", text: "À travers ses expériences sur différents projets, il a développé une approche orientée vers la pratique, avec une volonté de comprendre les problématiques du terrain et de proposer des solutions adaptées aux contraintes réelles des projets." }] },
      { _type: "block", _key: "bio4", children: [{ _type: "span", _key: "bio4-span", text: "À travers ses formations, Maurisson souhaite avant tout transmettre des connaissances pratiques, partager son expérience du terrain et permettre aux étudiants, techniciens, ingénieurs et professionnels de développer des compétences directement applicables dans le domaine du génie civil et de la géotechnique." }] },
      { _type: "block", _key: "bio5", children: [{ _type: "span", _key: "bio5-span", text: "Son approche repose sur une conviction simple : la théorie donne les bases, mais la pratique permet de véritablement maîtriser un métier." }] },
      { _type: "block", _key: "bio6", children: [{ _type: "span", _key: "bio6-span", text: "Aujourd'hui, il accompagne également les personnes qui souhaitent se former, approfondir leurs compétences ou se reconvertir dans les métiers du génie civil et de la géotechnique." }] },
    ],
    domainesExpertise: ["Génie Civil", "Géotechnique"],
    photo: maurissonPhoto,
    whatsapp: siteConfig.whatsapp.maurisson,
  },
];
