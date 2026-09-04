# TODO-CLIENT — informations à fournir

Le site est fonctionnellement complet (toutes les pages du cahier des
charges, SEO, accessibilité). Ce qui suit est ce qu'il reste à fournir ou
valider avant une mise en ligne définitive.

## 1. Contenu texte réel (le plus important)

Le cahier des charges initial n'a jamais été fourni avec son contenu réel
(seulement le brief technique). Tous les textes ci-dessous sont donc des
placeholders génériques, identifiés dans le code par `[PLACEHOLDER]` :

- Titre et phrase d'accroche du Hero (accueil)
- Textes des sections "Deux expertises", "Consulting", "Comment ça marche"
  (les 3 étapes), "Pour qui" (accueil)
- Questions/réponses de la FAQ (accueil)
- Bios de Pherina et de Maurisson, et leurs titres/fonctions exacts (À propos)
- Descriptions des services de consulting (Marketing Digital / Génie Civil &
  Géotechnique)
- Détail des 6 formations de démonstration (noms, descriptions, programmes,
  tarifs, durées) — à remplacer par les vraies formations du client
- Contenus des pages légales (mentions légales, confidentialité, CGV) — à
  rédiger avec un professionnel du droit
- Texte exact des messages WhatsApp pré-remplis (`src/lib/whatsapp-messages.ts`)

Tout ce contenu se modifie depuis le Studio (`/studio`) une fois le projet
Sanity connecté (voir point 2) — sauf les messages WhatsApp, qui sont dans le
code (`src/lib/whatsapp-messages.ts`) et les libellés de menu/boutons fixes.

## 2. Connecter un vrai projet Sanity (bloquant pour le Studio et le seed)

Le Studio (`/studio`) et `npm run seed` sont entièrement codés et
fonctionnels, mais pointent vers un projet Sanity factice
(`NEXT_PUBLIC_SANITY_PROJECT_ID=placeholder0` dans `.env.local`) — impossible
à remplacer par un vrai projet à la place du client, car cela nécessite un
compte (email + connexion navigateur). Marche à suivre complète dans
`README.md` > "Configuration Sanity".

Tant qu'aucun projet réel n'est connecté, le site affiche automatiquement un
contenu de démonstration (`src/content/demo-content.ts`, repris du script de
seed) au lieu de planter — c'est le comportement attendu, pas un bug.

## 3. Numéros WhatsApp

- Placeholders dans `.env.local`/`.env.example` (`225070000...`).
- Une fois Sanity connecté, les vrais numéros se saisissent dans le Studio →
  **Réglages du site** (PM, Pherina, Maurisson) : c'est la source
  prioritaire partout sur le site (header, footer, hero, cartes formation,
  page contact, bouton flottant). Les variables d'environnement ne servent
  que de repli si ce document est vide ou Sanity injoignable.

## 4. Couleurs de marque

Seul un logo rouge sur fond blanc/plein a été fourni (`public/brand/logo.png`
et `public/brand/favicon-source.png`), sans charte graphique complète :

- Accent "Génie Civil & Géotechnique" (`geo`, rouge `#D6272B`) : repris
  directement du logo.
- Accent "Marketing Digital" (`mkt`, bleu `#3366F0`) : choix de complément
  **non validé par le client**.

À confirmer ou ajuster dans `tailwind.config.ts` (tokens `geo`/`mkt`).

## 5. Logo sur fond sombre

Le fichier fourni a un fond plein (blanc pour le logo, rouge pour le
favicon), pas de version transparente/blanche du symbole seul. Le footer
(fond sombre) utilise donc un wordmark texte "PM" au lieu de l'image, et la
carte "formation vedette" du Hero utilise un badge rond rouge avec le texte
"PM" plutôt que le logo. Idéalement, demander au client un export du logo en
blanc/transparent pour un rendu plus fidèle à ces deux endroits.

## 6. Attribution des domaines par personne

Le cahier des charges ne précise pas explicitement qui de Pherina ou
Maurisson est associé à quel domaine. Par déduction du prénom du fichier
image et pour équilibrer le contenu de démonstration, ce site suppose :
**Pherina → Marketing Digital**, **Maurisson → Génie Civil & Géotechnique**.
À confirmer avec le client (page "À propos" et script de seed).

## 7. Réseaux sociaux

Liens Instagram/LinkedIn/Facebook du footer pointent vers des URLs
génériques (`instagram.com`, etc.). À remplacer par les vrais profils, soit
dans le code (`src/components/layout/Footer.tsx`), soit en les branchant au
champ `reseauxSociaux` du document `settings` (déjà présent dans le schéma,
pas encore branché au composant Footer par manque de vrais liens à afficher).

## 8. Contenu de démonstration à remplacer

`npm run seed` crée 6 formations d'exemple, 6 services, 4 FAQ, les profils
Pherina/Maurisson et les 3 pages légales — tous marqués `[PLACEHOLDER]`.
Une fois Sanity connecté, remplacer ce contenu depuis le Studio avant mise en
ligne.

## Assets déjà intégrés (fournis par le client)

- `public/brand/logo.png` — logo PM
- `public/brand/favicon-source.png` — decliné en favicon (`src/app/icon.png`)
  et icône Apple (`src/app/apple-icon.png`)
- `public/images/team/pherina-horizontal.png`, `pherina-vertical.png`
- `public/images/team/maurisson-horizontal.jpeg`, `maurisson-alt.jpeg`
