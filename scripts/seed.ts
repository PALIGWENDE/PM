/**
 * Script de seed — remplit le dataset Sanity avec :
 * - le document `settings` (singleton)
 * - Pherina et Maurisson (`person`)
 * - 6 formations d'exemple (2 par domaine)
 * - les services listés (Marketing Digital + Génie Civil & Géotechnique)
 * - quelques FAQ, les témoignages clients et les 3 pages légales
 *
 * ⚠️ Contenu de démonstration : à remplacer par le contenu réel du client
 * (voir TODO-CLIENT.md). Nécessite un projet Sanity valide et un token
 * d'écriture dans `.env.local` (SANITY_API_TOKEN, rôle "Editor" ou +).
 *
 * Usage : npm run seed
 */
import "dotenv/config";
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import path from "node:path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID et SANITY_API_TOKEN sont requis dans .env.local pour lancer le seed.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const PUBLIC_DIR = path.resolve(__dirname, "../public");

async function uploadImage(relativePath: string, altFallback: string) {
  const filePath = path.join(PUBLIC_DIR, relativePath);
  const asset = await client.assets.upload("image", readFileSync(filePath), {
    filename: path.basename(filePath),
  });
  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
    alt: altFallback,
  };
}

async function seedSettings() {
  const logo = await uploadImage("brand/logo.png", "Logo PM — Pherina & Maurisson");

  await client.createOrReplace({
    _id: "settings",
    _type: "settings",
    logo,
    couleurMarketing: "#3366F0",
    couleurGenieCivil: "#D6272B",
    whatsappPM: process.env.NEXT_PUBLIC_WHATSAPP_PM || "2250700000000",
    whatsappPherina: process.env.NEXT_PUBLIC_WHATSAPP_PHERINA || "2250700000000",
    whatsappMaurisson: process.env.NEXT_PUBLIC_WHATSAPP_MAURISSON || "2250700000000",
    reseauxSociaux: {
      instagram: "https://www.instagram.com/pm_afrique",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
    footerTexte:
      "Formations et consulting en Marketing Digital et en Génie Civil & Géotechnique.",
  });
  console.log("✔ settings");
}

async function seedPeople() {
  const photoPherina = await uploadImage(
    "images/team/pherina-horizontal.png",
    "Portrait de Pherina",
  );
  const photoMaurisson = await uploadImage(
    "images/team/maurisson-costume.jpeg",
    "Portrait de Maurisson",
  );

  await client.createOrReplace({
    _id: "person-pherina",
    _type: "person",
    nom: "Pherina",
    titre: "Social Media Manager & Spécialiste en Marketing Digital",
    bio: [
      {
        _type: "block",
        _key: "bio1",
        children: [
          {
            _type: "span",
            _key: "bio1-span",
            text: "Passionnée par le digital et la communication, Pherina évolue dans l'univers du marketing digital et des réseaux sociaux depuis plusieurs années.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio2",
        children: [
          {
            _type: "span",
            _key: "bio2-span",
            text: "Son parcours académique et professionnel lui a permis de développer des compétences en marketing digital, stratégie de communication et gestion des réseaux sociaux.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio3",
        children: [
          {
            _type: "span",
            _key: "bio3-span",
            text: "À travers PM Formation & Consulting, elle souhaite avant tout transmettre ses connaissances, accompagner les entrepreneurs et professionnels dans leurs projets et les aider à mieux comprendre et exploiter les opportunités offertes par le digital.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio4",
        children: [
          {
            _type: "span",
            _key: "bio4-span",
            text: "Son approche repose sur une conviction simple : avec de bonnes bases, une stratégie adaptée et de la persévérance, chacun peut développer ses compétences et faire évoluer son projet.",
          },
        ],
      },
    ],
    domainesExpertise: ["Marketing Digital"],
    photo: photoPherina,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_PHERINA || "2250700000000",
    ordre: 1,
  });

  await client.createOrReplace({
    _id: "person-maurisson",
    _type: "person",
    nom: "Maurisson",
    titre: "Ingénieur Génie Civil & Géotechnique | Spécialiste des sols, fondations & infrastructures",
    bio: [
      {
        _type: "block",
        _key: "bio1",
        children: [
          {
            _type: "span",
            _key: "bio1-span",
            text: "Passionné par le génie civil et particulièrement par la géotechnique, Maurisson évolue dans le domaine des études de sols, des fondations et des infrastructures routières.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio2",
        children: [
          {
            _type: "span",
            _key: "bio2-span",
            text: "Son parcours académique et professionnel lui a permis de développer des compétences dans l'analyse des sols, les études géotechniques, le dimensionnement des fondations, les études routières et le suivi de projets de génie civil.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio3",
        children: [
          {
            _type: "span",
            _key: "bio3-span",
            text: "À travers ses expériences sur différents projets, il a développé une approche orientée vers la pratique, avec une volonté de comprendre les problématiques du terrain et de proposer des solutions adaptées aux contraintes réelles des projets.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio4",
        children: [
          {
            _type: "span",
            _key: "bio4-span",
            text: "À travers ses formations, Maurisson souhaite avant tout transmettre des connaissances pratiques, partager son expérience du terrain et permettre aux étudiants, techniciens, ingénieurs et professionnels de développer des compétences directement applicables dans le domaine du génie civil et de la géotechnique.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio5",
        children: [
          {
            _type: "span",
            _key: "bio5-span",
            text: "Son approche repose sur une conviction simple : la théorie donne les bases, mais la pratique permet de véritablement maîtriser un métier.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio6",
        children: [
          {
            _type: "span",
            _key: "bio6-span",
            text: "Aujourd'hui, il accompagne également les personnes qui souhaitent se former, approfondir leurs compétences ou se reconvertir dans les métiers du génie civil et de la géotechnique.",
          },
        ],
      },
    ],
    domainesExpertise: ["Génie Civil", "Géotechnique"],
    photo: photoMaurisson,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_MAURISSON || "2250700000000",
    ordre: 2,
  });

  console.log("✔ person (Pherina, Maurisson)");
}

async function seedFormations() {
  // Une même image peut être réutilisée par plusieurs formations (un seul
  // visuel disponible par domaine pour l'instant) : on ne l'upload qu'une
  // fois grâce à ce cache.
  const imageCache = new Map<string, Awaited<ReturnType<typeof uploadImage>>>();
  async function getImage(path: string, alt: string) {
    if (!imageCache.has(path)) {
      imageCache.set(path, await uploadImage(path, alt));
    }
    return imageCache.get(path)!;
  }

  type FormationSeed = {
    id: string;
    nom: string;
    domaine: "Marketing Digital" | "Génie Civil" | "Géotechnique";
    niveau: "Débutant" | "Débutant à intermédiaire" | "Intermédiaire" | "Avancé";
    types: ("Individuel" | "Groupe")[];
    descriptionCourte: string;
    presentation: string;
    publicCible: string;
    objectifs: string[];
    programme: { titre: string; contenu: string }[];
    duree: string;
    tarif: string;
    ordre: number;
    imagePath: string;
    imageAlt: string;
  };

  const formations: FormationSeed[] = [
    {
      id: "formation-fondamentaux-marketing-digital",
      nom: "Fondamentaux du Marketing Digital",
      domaine: "Marketing Digital",
      niveau: "Débutant",
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
      ordre: 1,
      imagePath: "images/formations/marketing-fondamentaux.jpeg",
      imageAlt: "Tableau de bord d'analyse marketing digital consulté sur tablette",
    },
    {
      id: "formation-strategie-reseaux-sociaux",
      nom: "Réseaux Sociaux : Stratégie & Community Management",
      domaine: "Marketing Digital",
      niveau: "Débutant à intermédiaire",
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
      ordre: 2,
      imagePath: "images/formations/marketing-reseaux-sociaux.jpeg",
      imageAlt: "Écran de smartphone affichant un dossier d'applications de réseaux sociaux",
    },
    {
      id: "formation-construire-sa-strategie-marketing-digitale",
      nom: "Construire sa Stratégie Marketing Digitale",
      domaine: "Marketing Digital",
      niveau: "Intermédiaire",
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
      ordre: 3,
      imagePath: "images/formations/marketing-strategie.jpeg",
      imageAlt: "Personne travaillant sur une présentation de stratégie marketing sur ordinateur portable",
    },
    {
      id: "formation-geotechnique-batiments-etudes-sols-fondations",
      nom: "Géotechnique des Bâtiments : Études de Sols & Fondations",
      domaine: "Géotechnique",
      niveau: "Débutant à intermédiaire",
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
      ordre: 4,
      imagePath: "images/formations/geotechnique-fondations.jpeg",
      imageAlt: "Chantier de fondation avec ferraillage et coffrage en cours de réalisation",
    },
    {
      id: "formation-geotechnique-routiere",
      nom: "Formation Pratique en Géotechnique Routière",
      domaine: "Géotechnique",
      niveau: "Débutant à intermédiaire",
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
      ordre: 5,
      imagePath: "images/formations/geotechnique-routiere.jpeg",
      imageAlt: "Coupe de sol montrant les différentes couches géologiques du terrain",
    },
    {
      id: "formation-geotechnique-stabilite-des-talus",
      nom: "Études Géotechniques & Stabilité des Talus",
      domaine: "Géotechnique",
      niveau: "Intermédiaire",
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
      ordre: 6,
      imagePath: "images/formations/geotechnique-talus.jpeg",
      imageAlt: "Glissement de terrain affectant un talus et des constructions en surplomb",
    },
  ];

  for (const f of formations) {
    const image = await getImage(f.imagePath, f.imageAlt);
    await client.createOrReplace({
      _id: f.id,
      _type: "formation",
      nom: f.nom,
      slug: { _type: "slug", current: f.id.replace("formation-", "") },
      domaine: f.domaine,
      niveau: f.niveau,
      format: "En ligne",
      types: f.types,
      descriptionCourte: f.descriptionCourte,
      presentation: [
        { _type: "block", _key: "p1", children: [{ _type: "span", _key: "p1-span", text: f.presentation }] },
      ],
      publicCible: f.publicCible,
      objectifs: f.objectifs,
      programme: f.programme.map((module, index) => ({
        _type: "module",
        _key: `m${index + 1}`,
        titre: module.titre,
        contenu: module.contenu,
      })),
      duree: f.duree,
      tarif: f.tarif,
      image,
      ordre: f.ordre,
      publie: true,
    });
  }

  console.log(`✔ ${formations.length} formations`);
}

async function seedServices() {
  const services = [
    { id: "service-audit-digital", nom: "Audit de présence digitale", categorie: "Marketing Digital", description: "Un état des lieux complet de votre présence en ligne et des recommandations concrètes.", ordre: 1 },
    { id: "service-gestion-reseaux", nom: "Gestion de réseaux sociaux", categorie: "Marketing Digital", description: "Création et animation de vos réseaux sociaux au quotidien.", ordre: 2 },
    { id: "service-strategie-contenu", nom: "Stratégie de contenu", categorie: "Marketing Digital", description: "Une ligne éditoriale claire pour toucher la bonne audience.", ordre: 3 },
    { id: "service-etude-geotechnique", nom: "Étude géotechnique de sol", categorie: "Génie Civil & Géotechnique", description: "Études de sol adaptées à votre projet de construction.", ordre: 4 },
    { id: "service-suivi-chantier", nom: "Suivi de chantier", categorie: "Génie Civil & Géotechnique", description: "Un accompagnement rigoureux du chantier jusqu'à la réception.", ordre: 5 },
    { id: "service-controle-qualite", nom: "Contrôle qualité des ouvrages", categorie: "Génie Civil & Géotechnique", description: "Vérification de la conformité et de la qualité des ouvrages réalisés.", ordre: 6 },
  ] as const;

  for (const s of services) {
    await client.createOrReplace({
      _id: s.id,
      _type: "service",
      nom: s.nom,
      categorie: s.categorie,
      description: s.description,
      ordre: s.ordre,
    });
  }

  console.log(`✔ ${services.length} services`);
}

async function seedFaq() {
  const faqs = [
    { question: "Comment s'inscrire à une formation ?", reponse: "Contactez-nous directement sur WhatsApp depuis la fiche de la formation qui vous intéresse : nous confirmons ensemble les modalités et la disponibilité." },
    { question: "Les formations sont-elles certifiantes ?", reponse: "Cela dépend de la formation. Le détail est précisé sur chaque fiche formation ; n'hésitez pas à nous demander par WhatsApp si ce n'est pas indiqué." },
    { question: "Proposez-vous des sessions individuelles ?", reponse: "Oui, la plupart de nos formations sont disponibles en format individuel (1-to-1) ou en groupe, selon vos préférences." },
    { question: "Quels sont les moyens de paiement acceptés ?", reponse: "Les modalités de paiement sont convenues directement avec vous lors de l'échange WhatsApp, selon la formation ou la prestation de consulting choisie." },
  ];

  for (const [index, faq] of faqs.entries()) {
    await client.createOrReplace({
      _id: `faq-${index + 1}`,
      _type: "faq",
      question: faq.question,
      reponse: [
        {
          _type: "block",
          _key: "r1",
          children: [{ _type: "span", _key: "r1-span", text: faq.reponse }],
        },
      ],
      ordre: index + 1,
    });
  }

  console.log(`✔ ${faqs.length} FAQ`);
}

async function seedTemoignages() {
  const temoignages: { citation: string; nom?: string }[] = [
    { citation: "🤣🤣 Tu vois que la persévérance paie ! Tu as juste eu à me montrer le B.A.-BA, et j'ai creusé. Mais c'est à toi que je dois dire merci ! 🙏🏽", nom: "Steven" },
    { citation: "Vous avez respecté ma vision tout en apportant votre touche.", nom: "Julia" },
    { citation: "Je n'hésiterai pas à vous recommander autour de moi. Votre formation est de qualité et mérite d'être achetée.", nom: "Elan" },
    { citation: "Ce que j'ai aimé, c'est qu'on ne s'est pas contenté de la théorie. J'ai pu appliquer directement ce que j'apprenais à mon activité.", nom: "Sarah" },
    { citation: "Franchement, je ne pensais pas pouvoir appliquer tout ça aussi rapidement 😂 Merci pour ta patience et tes explications !", nom: "Jules" },
    { citation: "Le fait de travailler directement sur mon propre projet a vraiment fait la différence. Je ne suis pas seulement venu apprendre, j'ai construit quelque chose.", nom: "Divine" },
    { citation: "J'ai surtout apprécié les exercices pratiques. Ça m'a permis de prendre confiance et de voir concrètement mes progrès." },
    { citation: "Je suis arrivé avec beaucoup de questions et je suis reparti avec une vraie vision de ce que je dois mettre en place pour mon activité.", nom: "Marion" },
    { citation: "Maurisaine explique vraiment bien. Même les notions que je trouvais compliquées sont devenues beaucoup plus simples à comprendre.", nom: "Bienvenu" },
    { citation: "J'ai enfin compris comment structurer ma présence en ligne. La formation était claire, pratique et surtout adaptée à mon niveau.", nom: "Ketsia" },
    { citation: "L'accompagnement m'a permis de mettre tout ça en ordre et d'avoir un plan clair.", nom: "Ezechiel" },
  ];

  for (const [index, t] of temoignages.entries()) {
    await client.createOrReplace({
      _id: `temoignage-${index + 1}`,
      _type: "temoignage",
      citation: t.citation,
      nom: t.nom,
      ordre: index + 1,
    });
  }

  console.log(`✔ ${temoignages.length} témoignages`);
}

async function seedLegalPages() {
  const pages = [
    { slug: "mentions-legales", titre: "Mentions légales" },
    { slug: "politique-de-confidentialite", titre: "Politique de confidentialité" },
    { slug: "cgv", titre: "Conditions Générales de Vente" },
  ];

  for (const p of pages) {
    await client.createOrReplace({
      _id: `page-${p.slug}`,
      _type: "page",
      titre: p.titre,
      slug: { _type: "slug", current: p.slug },
      contenu: [
        {
          _type: "block",
          _key: "c1",
          children: [
            {
              _type: "span",
              _key: "c1-span",
              text: "Cette page est en cours de rédaction. Le contenu doit être rédigé avec un professionnel du droit avant la mise en ligne définitive du site.",
            },
          ],
        },
      ],
    });
  }

  console.log(`✔ ${pages.length} pages légales`);
}

async function main() {
  console.log(`Seed du dataset "${dataset}" (projet ${projectId})…`);
  await seedSettings();
  await seedPeople();
  await seedFormations();
  await seedServices();
  await seedFaq();
  await seedTemoignages();
  await seedLegalPages();
  console.log("Seed terminé avec succès.");
}

main().catch((error) => {
  console.error("Erreur pendant le seed :", error);
  process.exit(1);
});
