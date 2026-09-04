# PM — Pherina & Maurisson

Site vitrine de PM : formations et consulting en **Marketing Digital** et en
**Génie Civil & Géotechnique**. Next.js 15 (App Router) + TypeScript +
Tailwind CSS, contenu géré par **Sanity** (Studio embarqué sur `/studio`).

> ⚠️ Avant toute mise en ligne, lire **TODO-CLIENT.md** : il liste tous les
> textes, numéros WhatsApp, couleurs et contenus qui sont actuellement des
> placeholders à valider ou remplacer.

## Stack

- **Next.js 15** (App Router, TypeScript strict, sans `any`)
- **Tailwind CSS 3** — tokens de marque dans `tailwind.config.ts`
- **Sanity** (v3, Studio embarqué) — schémas dans `/sanity`
- **Framer Motion** — animations légères (fade/slide, hover)
- **lucide-react** — icônes
- Déploiement cible : **Vercel**, contenu en ISR (revalidation 60s)

Aucune base de données ni authentification côté Next : tout le contenu vient
de Sanity.

## Installation

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables (voir ci-dessous)
npm run dev
```

- Site public : http://localhost:3000
- Studio Sanity : http://localhost:3000/studio

## Configuration Sanity

Le projet a besoin d'un vrai projet Sanity (gratuit) pour fonctionner
pleinement — tant que `.env.local` pointe vers un projet inexistant, le site
reste utilisable grâce à un contenu de démonstration de repli (voir
`src/content/demo-content.ts`), mais le Studio ne pourra pas se connecter.

1. Créer un compte sur [sanity.io](https://www.sanity.io) si besoin.
2. Depuis la racine du projet : `npx sanity@latest init` (choisir "Create new
   project", dataset `production`) — ou créer le projet depuis
   [sanity.io/manage](https://www.sanity.io/manage).
3. Renseigner dans `.env.local` :
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (généralement `production`)
4. Dans [sanity.io/manage](https://www.sanity.io/manage) → votre projet →
   **API** → **CORS Origins**, ajouter `http://localhost:3000` (dev) et
   l'URL de production Vercel, avec "Allow credentials" coché.
5. Toujours dans **API** → **Tokens**, créer un token avec le rôle **Editor**
   et le renseigner dans `SANITY_API_TOKEN` (nécessaire uniquement pour le
   script de seed, pas pour le site public en lecture).
6. `npm run seed` pour peupler le contenu de démonstration (6 formations,
   services, FAQ, pages légales, Pherina et Maurisson).
7. Se connecter sur `/studio` (compte Sanity) et remplacer progressivement le
   contenu de démonstration par le vrai contenu du client.

## Variables d'environnement

Voir `.env.example` pour la liste complète et leur usage. En résumé :

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (metadata, sitemap) |
| `NEXT_PUBLIC_WHATSAPP_PM` / `_PHERINA` / `_MAURISSON` | Numéros WhatsApp de **secours**, utilisés seulement si le document `settings` Sanity est vide |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` / `_DATASET` / `_API_VERSION` | Connexion au projet Sanity |
| `SANITY_API_TOKEN` | Token d'écriture, requis pour `npm run seed` |

## Comment ajouter une formation

Tout se passe dans le Studio (`/studio` → **Formation** → **Créer**) :
nom, domaine, niveau, format, type(s), description courte, présentation,
public cible, objectifs, programme (modules), durée, tarif, image, ordre
d'affichage, et cocher **Publié**. La page `/formations/[slug]` et la liste
`/formations` se mettent à jour automatiquement (ISR, 60s).

## Comment changer les numéros WhatsApp / couleurs / logo

- **Numéros WhatsApp** : Studio → **Réglages du site** (singleton) → champs
  WhatsApp PM / Pherina / Maurisson. Les variables d'environnement ne servent
  que de repli si ce document est vide.
- **Couleurs** : deux façons de faire.
  - Rapide (juste visuel `settings`) : Studio → **Réglages du site** → codes
    couleur (actuellement non branchés dynamiquement au CSS, à faire évoluer
    si besoin — voir note ci-dessous).
  - Structurelle (recommandée) : éditer les tokens `geo` (Génie Civil &
    Géotechnique) et `mkt` (Marketing Digital) dans `tailwind.config.ts`.
- **Logo** : remplacer `public/brand/logo.png`, ou l'uploader dans Studio →
  **Réglages du site** → Logo (le champ existe mais n'est pas encore branché
  au composant `<Logo>`, qui utilise pour l'instant directement le fichier
  local — voir TODO-CLIENT.md).

## Déploiement sur Vercel

1. Pousser le projet sur un dépôt Git (GitHub/GitLab/Bitbucket).
2. Importer le dépôt sur [vercel.com](https://vercel.com/new).
3. Renseigner les variables d'environnement de `.env.example` dans les
   réglages du projet Vercel (Production + Preview).
4. Ajouter l'URL Vercel dans les CORS Origins du projet Sanity (voir plus
   haut).
5. Déployer. Le site est statique/ISR : les pages se régénèrent seules
   toutes les 60 secondes après une modification dans Sanity.

## Structure du projet

```
sanity/                 Schémas, structure du Studio, client, requêtes GROQ
scripts/seed.ts          Script de seed (npm run seed)
src/app/(site)/          Pages du site public (groupe de routes)
src/app/studio/          Studio Sanity embarqué (racine indépendante)
src/components/          Composants réutilisables (ui, layout, whatsapp, ...)
src/content/             Contenu de démonstration (repli si Sanity est vide)
src/lib/                 Helpers (WhatsApp, mapping de contenu, config)
src/types/               Types TypeScript (Sanity brut + modèles d'affichage)
public/brand/            Logo et favicon
public/images/team/      Photos de Pherina et Maurisson
```

## Le système WhatsApp

Point central du site : `src/lib/whatsapp.ts` (`buildWhatsAppLink`) construit
les liens `wa.me`, `src/lib/whatsapp-messages.ts` centralise les messages
pré-remplis (marqués `[PLACEHOLDER]` tant que le texte exact du client n'est
pas fourni), et `<WhatsAppButton>` (`src/components/whatsapp/WhatsAppButton.tsx`)
gère les 4 variantes visuelles (`primary`, `secondary`, `icon`, `floating`).

## Accessibilité et SEO

- Contraste AA, focus visibles, navigation clavier, FAQ en `<details>` natif.
- `alt` obligatoire sur toutes les images (Sanity + composants).
- Metadata par page, Open Graph, `sitemap.xml` et `robots.txt` générés
  automatiquement (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Données structurées : `Organization` (layout global) et `Course` (fiche
  formation).
- `prefers-reduced-motion` respecté (Framer Motion + effet de survol du menu).

## Évolutivité (phase 2)

Non développé maintenant, mais le code est structuré pour accueillir :

- **Paiement en ligne** : brancher un fournisseur (Stripe, CinetPay…) sur le
  bouton WhatsApp existant de la fiche formation, ou en complément.
- **Espace étudiant** : ajouter une route `/espace-etudiant` protégée
  (nécessiterait une solution d'auth, hors périmètre actuel).
- **Vidéos / PDF** : ajouter des champs `file`/`url` au schéma `formation`
  (ex. `videoUrl`, `supportPdf`) et les afficher sur la page détail.
- **Quiz** : nouveau schéma Sanity `quiz` lié à une `formation`.
- **Calendrier de réservation** : intégrer un service externe (Calendly ou
  équivalent) sur la page `/consulting` ou la fiche formation.
- **Newsletter** : ajouter un formulaire relié à un fournisseur email
  (Mailchimp, Brevo…), un simple composant dans le footer.
- **Blog** : ajouter un schéma Sanity `post` (titre, slug, corps Portable
  Text, image, date, auteur) et une route `/blog` + `/blog/[slug]`, sur le
  même modèle que `/formations`.

## Qualité

```bash
npx tsc --noEmit   # vérification des types
npx eslint .        # lint
npm run build       # build de production
```

## Contenu de démonstration

Tant que le projet Sanity du client n'est pas connecté (ou que son dataset
est vide), les pages affichent un contenu de démonstration défini dans
`src/content/demo-content.ts`, repris du script de seed. Il disparaît
automatiquement dès que du contenu réel existe dans Sanity — voir
TODO-CLIENT.md pour la liste complète de ce qui reste à fournir/valider.
