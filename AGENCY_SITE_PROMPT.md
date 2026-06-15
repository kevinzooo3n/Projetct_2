# Prompt — Site Agence Créative (Claude Code)

## Contexte

Tu vas construire le site vitrine d'une agence créative haut de gamme. Le site doit être **visuellement frappant**, **épuré**, **minimaliste** et **ultra-animé**. Chaque interaction doit sembler vivante. L'objectif est de transformer le premier visiteur en client convaincu.

---

## Stack & Outils obligatoires

- **Skill `/ui-ux-pro-max`** → pilote toutes les décisions de design, palettes, typographie, composants
- **MCP `21st`** → génère et recherche des composants UI modernes prêts à l'emploi
- **MCP `higgsfield`** → génère les vidéos animées et clips hero en IA

---

## Architecture des pages

```
/               → Hero + Manifeste
/work           → Portfolio (grille animée)
/services       → Offres (cards interactives)
/about          → Équipe + Valeurs
/contact        → Formulaire minimaliste
```

---

## Instructions de design (via `/ui-ux-pro-max`)

Lance d'abord le skill avec ces paramètres :

```
Style       : dark mode · glassmorphism · minimalisme brutal
Palette     : noir profond #080808 · blanc cassé #F5F0EB · accent électrique #6C63FF
Typographie : titre → "Syne" (bold 700–900) · corps → "Inter" (300–400)
Spacing     : généreux, beaucoup de white space, grilles 12 colonnes
Shadows     : subtiles, colorées (violet/bleu)
Hover       : micro-animations sur chaque élément interactif
```

---

## Génération vidéo (via MCP `higgsfield`)

Utilise Higgsfield pour générer **3 séquences vidéo** :

| Séquence | Usage | Prompt Higgsfield |
|---|---|---|
| **Hero background** | Fond animé page d'accueil | `"Abstract dark fluid motion, electric purple particles, ultra smooth loop, cinematic, 4K, no text"` |
| **Services reveal** | Transition section Services | `"Geometric shapes morphing, minimal dark background, white lines, futuristic, seamless loop"` |
| **About ambient** | Fond section Équipe | `"Slow moving gradient dark smoke, deep blue and violet hues, premium brand feel, loop"` |

Intègre chaque vidéo en `<video autoplay loop muted playsinline>` avec fallback image statique.

---

## Animations (priorité haute)

Implémente **toutes** ces animations :

### Au scroll (GSAP ScrollTrigger ou Framer Motion)
- [ ] Chaque titre entre en **split-text** lettre par lettre
- [ ] Les sections `fade up` avec stagger sur les enfants
- [ ] Parallaxe sur les images et vidéos hero
- [ ] Compteurs animés sur les métriques (clients, projets, années)
- [ ] Barre de progression de scroll en haut de page

### Interactions curseur
- [ ] Curseur custom qui grossit au hover des liens
- [ ] Effet `magnetic` sur les boutons CTA
- [ ] Trailing cursor avec particules légères

### Transitions de page
- [ ] Transition `curtain` noire entre chaque route
- [ ] Durée : 400ms ease-in-out

### Hero
- [ ] Texte principal en **typewriter** puis **glitch** subtil
- [ ] Background video Higgsfield en loop
- [ ] Bouton CTA avec bordure animée (border-drawing SVG)

### Portfolio / Work
- [ ] Grille masonry animée
- [ ] Hover sur chaque projet → overlay avec video preview
- [ ] Filtre de catégories avec animation de reflow fluide

### Composants (via MCP `21st`)
Demande à 21st les composants suivants :
- `animated card` dark glassmorphism
- `infinite marquee` pour logos clients
- `accordion` animé pour FAQ services
- `magnetic button` avec effet ripple
- `timeline` verticale animée pour processus agence

---

## Prototypage — Séquence de travail

Travaille dans cet ordre strict :

1. **Design System** → génère via `/ui-ux-pro-max` : tokens CSS, composants base, animations keyframes
2. **Layout** → page `index` avec hero vidéo Higgsfield intégré
3. **Navigation** → sticky, disparaît au scroll down, réapparaît au scroll up, glassmorphism
4. **Work page** → grille portfolio avec 6 projets placeholder ultra soignés
5. **Services page** → 4 offres en cards interactives 3D (perspective CSS)
6. **About** → vidéo ambient + team cards avec hover flip
7. **Contact** → formulaire minimaliste, champ flottant style Figma
8. **Animations globales** → passe GSAP sur tout le site
9. **Performance** → lazy load vidéos, preload fonts, optimisation LCP

---

## Contraintes techniques

```
Framework    : Next.js 14 (App Router) + TypeScript
Styling      : Tailwind CSS + CSS Modules pour les animations custom
Animations   : GSAP + @gsap/react  (ou Framer Motion si préféré)
Fonts        : Google Fonts → Syne + Inter
Video        : mp4 + webm, max 8MB par fichier
SEO          : metadata complète, Open Graph, sitemap
Perf target  : LCP < 2.5s, CLS < 0.1
```

---

## Livrable attendu

- Site entièrement fonctionnel et déployable
- Toutes les animations actives
- Vidéos Higgsfield intégrées
- Design system documenté dans `/design-tokens`
- Responsive mobile-first (breakpoints : 375 / 768 / 1280 / 1920)
- Commit & push sur la branche feature dédiée

---

> **Note** : À chaque étape, vérifie le rendu dans le navigateur via le skill `/run` avant de passer à la suivante. Ne passe jamais à l'étape suivante sans validation visuelle.
