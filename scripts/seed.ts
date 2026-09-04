/**
 * Script de seed — remplit le dataset Sanity avec :
 * - le document `settings` (singleton)
 * - Pherina et Maurisson (`person`)
 * - 6 formations d'exemple (2 par domaine)
 * - les services listés (Marketing Digital + Génie Civil & Géotechnique)
 * - quelques FAQ et les 3 pages légales
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
      instagram: "https://instagram.com",
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
    "images/team/maurisson-horizontal.jpeg",
    "Portrait de Maurisson",
  );

  await client.createOrReplace({
    _id: "person-pherina",
    _type: "person",
    nom: "Pherina",
    titre: "[PLACEHOLDER] Experte en Marketing Digital",
    bio: [
      {
        _type: "block",
        _key: "bio1",
        children: [
          {
            _type: "span",
            _key: "bio1-span",
            text: "[PLACEHOLDER] Bio de Pherina à remplacer par le texte réel fourni par le client.",
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
    titre: "[PLACEHOLDER] Expert en Génie Civil & Géotechnique",
    bio: [
      {
        _type: "block",
        _key: "bio1",
        children: [
          {
            _type: "span",
            _key: "bio1-span",
            text: "[PLACEHOLDER] Bio de Maurisson à remplacer par le texte réel fourni par le client.",
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
    niveau: "Débutant" | "Intermédiaire" | "Avancé";
    types: ("Individuel" | "Groupe")[];
    descriptionCourte: string;
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
      types: ["Individuel", "Groupe"],
      descriptionCourte:
        "[PLACEHOLDER] Les bases du marketing digital : réseaux sociaux, contenu, publicité en ligne.",
      duree: "4 semaines",
      tarif: "Sur devis",
      ordre: 1,
      imagePath: "images/formations/marketing-digital-1.jpg",
      imageAlt: "Tableau de bord marketing digital consulté sur tablette",
    },
    {
      id: "formation-strategie-reseaux-sociaux",
      nom: "Stratégie Réseaux Sociaux Avancée",
      domaine: "Marketing Digital",
      niveau: "Avancé",
      types: ["Groupe"],
      descriptionCourte:
        "[PLACEHOLDER] Construire et piloter une stratégie de contenu et de croissance sur les réseaux sociaux.",
      duree: "6 semaines",
      tarif: "Sur devis",
      ordre: 2,
      imagePath: "images/formations/marketing-digital-1.jpg",
      imageAlt: "Tableau de bord marketing digital consulté sur tablette",
    },
    {
      id: "formation-initiation-etudes-de-sol",
      nom: "Initiation aux Études de Sol",
      domaine: "Génie Civil",
      niveau: "Débutant",
      types: ["Groupe"],
      descriptionCourte:
        "[PLACEHOLDER] Comprendre les bases des études de sol avant un projet de construction.",
      duree: "3 semaines",
      tarif: "Sur devis",
      ordre: 3,
      imagePath: "images/formations/genie-civil-1.jpg",
      imageAlt: "Casque de chantier posé sur des plans de construction",
    },
    {
      id: "formation-dimensionnement-fondations",
      nom: "Dimensionnement des Fondations",
      domaine: "Génie Civil",
      niveau: "Intermédiaire",
      types: ["Individuel", "Groupe"],
      descriptionCourte:
        "[PLACEHOLDER] Méthodes de dimensionnement des fondations superficielles et profondes.",
      duree: "5 semaines",
      tarif: "Sur devis",
      ordre: 4,
      imagePath: "images/formations/genie-civil-3.jpg",
      imageAlt: "Relevé de plan de fondation par drone sur un chantier",
    },
    {
      id: "formation-mecanique-des-sols",
      nom: "Mécanique des Sols Appliquée",
      domaine: "Géotechnique",
      niveau: "Intermédiaire",
      types: ["Groupe"],
      descriptionCourte:
        "[PLACEHOLDER] Propriétés mécaniques des sols et leur application aux projets de génie civil.",
      duree: "6 semaines",
      tarif: "Sur devis",
      ordre: 5,
      imagePath: "images/formations/geotechnique-1.jpg",
      imageAlt: "Géotechnicienne réalisant des essais de sol sur le terrain",
    },
    {
      id: "formation-stabilite-des-talus",
      nom: "Stabilité des Talus et Glissements de Terrain",
      domaine: "Géotechnique",
      niveau: "Avancé",
      types: ["Individuel"],
      descriptionCourte:
        "[PLACEHOLDER] Analyse de la stabilité des talus et prévention des glissements de terrain.",
      duree: "4 semaines",
      tarif: "Sur devis",
      ordre: 6,
      imagePath: "images/formations/geotechnique-1.jpg",
      imageAlt: "Géotechnicienne réalisant des essais de sol sur le terrain",
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
      publicCible: "[PLACEHOLDER] Public cible à préciser.",
      objectifs: [
        "[PLACEHOLDER] Objectif pédagogique 1",
        "[PLACEHOLDER] Objectif pédagogique 2",
        "[PLACEHOLDER] Objectif pédagogique 3",
      ],
      programme: [
        { _type: "module", _key: "m1", titre: "Module 1 — Introduction", contenu: "[PLACEHOLDER]" },
        { _type: "module", _key: "m2", titre: "Module 2 — Approfondissement", contenu: "[PLACEHOLDER]" },
      ],
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
    { id: "service-audit-digital", nom: "Audit de présence digitale", categorie: "Marketing Digital", ordre: 1 },
    { id: "service-gestion-reseaux", nom: "Gestion de réseaux sociaux", categorie: "Marketing Digital", ordre: 2 },
    { id: "service-strategie-contenu", nom: "Stratégie de contenu", categorie: "Marketing Digital", ordre: 3 },
    { id: "service-etude-geotechnique", nom: "Étude géotechnique de sol", categorie: "Génie Civil & Géotechnique", ordre: 4 },
    { id: "service-suivi-chantier", nom: "Suivi de chantier", categorie: "Génie Civil & Géotechnique", ordre: 5 },
    { id: "service-controle-qualite", nom: "Contrôle qualité des ouvrages", categorie: "Génie Civil & Géotechnique", ordre: 6 },
  ] as const;

  for (const s of services) {
    await client.createOrReplace({
      _id: s.id,
      _type: "service",
      nom: s.nom,
      categorie: s.categorie,
      description: "[PLACEHOLDER] Description du service à compléter.",
      ordre: s.ordre,
    });
  }

  console.log(`✔ ${services.length} services`);
}

async function seedFaq() {
  const faqs = [
    "[PLACEHOLDER] Comment s'inscrire à une formation ?",
    "[PLACEHOLDER] Les formations sont-elles certifiantes ?",
    "[PLACEHOLDER] Proposez-vous des sessions individuelles ?",
    "[PLACEHOLDER] Quels sont les moyens de paiement acceptés ?",
  ];

  for (const [index, question] of faqs.entries()) {
    await client.createOrReplace({
      _id: `faq-${index + 1}`,
      _type: "faq",
      question,
      reponse: [
        {
          _type: "block",
          _key: "r1",
          children: [{ _type: "span", _key: "r1-span", text: "[PLACEHOLDER] Réponse à compléter." }],
        },
      ],
      ordre: index + 1,
    });
  }

  console.log(`✔ ${faqs.length} FAQ`);
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
              text: "[PLACEHOLDER] Contenu à rédiger avec un professionnel du droit avant mise en ligne.",
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
  await seedLegalPages();
  console.log("Seed terminé avec succès.");
}

main().catch((error) => {
  console.error("Erreur pendant le seed :", error);
  process.exit(1);
});
