# TODO-CLIENT — informations à fournir

Le site est fonctionnellement complet (toutes les pages du cahier des
charges, SEO, accessibilité). Ce qui suit est ce qu'il reste à fournir ou
valider avant une mise en ligne définitive.

## 1. Contenu texte réel (le plus important)

Le cahier des charges initial n'a jamais été fourni avec son contenu réel
(seulement le brief technique). Tous les textes du site ont donc été
rédigés pour coller au ton et à l'activité de PM (à défaut du texte exact
du client), plutôt que de rester en `[PLACEHOLDER]` — **à relire et valider**
avant une mise en ligne définitive, en particulier :

- Contenus des pages légales (mentions légales, confidentialité, CGV) —
  seul contenu volontairement laissé en attente : à rédiger avec un
  professionnel du droit, pas par une IA
- Texte exact des messages WhatsApp pré-remplis (`src/lib/whatsapp-messages.ts`)
- Bios de Pherina et de Maurisson, détail des 6 formations, page Consulting,
  témoignages : contenu réel fourni par le client
- Tout le reste (accroches, sections "Deux expertises"/"Comment ça
  marche"/"Pour qui", FAQ, intros de page) : rédigé par défaut, à ajuster
  au besoin

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

Seul un logo rouge (`public/brand/logo.png`, transparent) et un favicon sur
fond plein (`public/brand/favicon-source.png`) ont été fournis, sans charte
graphique complète :

- Accent "Génie Civil & Géotechnique" (`geo`, rouge `#D6272B`) : repris
  directement du logo.
- Accent "Marketing Digital" (`mkt`, bleu `#3366F0`) : choix de complément
  **non validé par le client**.

À confirmer ou ajuster dans `tailwind.config.ts` (tokens `geo`/`mkt`).

## 5. Logo

Résolu : `public/brand/logo.png` est maintenant le logo réel du client, en
PNG transparent — il s'affiche correctement aussi bien sur fond clair (header)
que sur fond sombre (footer). Le favicon (`public/brand/favicon-source.png`)
reste l'ancien fichier fourni (fond plein) ; à mettre à jour séparément si le
client fournit une version transparente.

## 6. Attribution des domaines par personne

Le cahier des charges ne précise pas explicitement qui de Pherina ou
Maurisson est associé à quel domaine. Par déduction du prénom du fichier
image et pour équilibrer le contenu de démonstration, ce site suppose :
**Pherina → Marketing Digital**, **Maurisson → Génie Civil & Géotechnique**.
À confirmer avec le client (page "À propos" et script de seed).

## 7. Réseaux sociaux

Instagram renseigné : https://www.instagram.com/pm_afrique.
LinkedIn/Facebook du footer pointent encore vers des URLs génériques
(`linkedin.com`, `facebook.com`). À remplacer par les vrais profils, soit
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
- `public/images/team/maurisson-costume.jpeg` (photo utilisée sur le site),
  `maurisson-horizontal.jpeg`, `maurisson-alt.jpeg` (non utilisées)
