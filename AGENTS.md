# AGENTS.md - M Impôt Project

## Dernière mise à jour : 04/04/2026

## État du projet

- **Phase actuelle :** Développement frontend - Dashboard Utilisateur
- **Statut :** ✅ COMPLÈTÉ (Toutes les pages principales sont terminées)

---

## Travail effectué

### Phase 1 : Configuration & Setup - ✅ COMPLÈTE

#### Étape 1.1 : Installation des dépendances

- ✅ Installation de lucide-react, axios, zustand

#### Étape 1.2 : Configuration Tailwind

- ✅ Configuration des couleurs personnalisées
- ✅ primary: #3DA7E3, accent: #F49600

#### Étape 1.3 : Types TypeScript

- ✅ types/user.ts
- ✅ types/document.ts
- ✅ types/video.ts
- ✅ types/index.ts

#### Étape 1.4 : Données mock

- ✅ data/mockData.ts
  - Catégories (6 principales)
  - Documents (4 exemples)
  - Vidéos (2 exemples)
  - Activités récentes

#### Étape 1.5 : Services API

- ✅ services/api.ts
  - Configuration Axios
  - Intercepteurs pour token
  - Gestion des erreurs 401

#### Étape 1.6 : Composants UI communs (base)

- ✅ Button.tsx (variants, sizes, loading)
- ✅ Input.tsx (avec label et erreur)
- ✅ Card.tsx (padding personnalisable)
- ✅ LoadingSpinner.tsx

#### Étape 1.7 : Composants UI communs (avancés)

- ✅ Modal.tsx (avec overlay et animation)
- ✅ Avatar.tsx (image, fallback, user icon)
- ✅ Badge.tsx (variants: default, primary, success, warning, danger)
- ✅ Dropdown.tsx (avec DropdownItem)
- ✅ Tabs.tsx (variants: underline, pills)

#### Étape 1.8 : Hooks personnalisés

- ✅ hooks/useDebounce.ts
- ✅ hooks/useLocalStorage.ts
- ✅ hooks/useMediaQuery.ts
- ✅ hooks/useClickOutside.ts
- ✅ hooks/useSidebar.ts (zustand)

#### Étape 1.9 : Utilitaires

- ✅ utils/constants.ts
- ✅ utils/formatters.ts (date, file size, text)
- ✅ utils/validators.ts (email, password, phone)
- ✅ utils/dateUtils.ts (timeAgo, isToday, isThisWeek)

---

### Phase 2 : Layout & Navigation - ✅ COMPLÈTE

#### Composants créés

- ✅ components/layout/Sidebar.tsx
- ✅ components/layout/Header.tsx
- ✅ app/(dashboard)/layout.tsx
- ✅ app/layout.tsx (métadonnées SEO)
- ✅ app/globals.css (styles globaux)

#### Pages Landing

- ✅ components/landing/LandingHeader.tsx
- ✅ components/landing/HeroSection.tsx
- ✅ components/landing/FeaturesSection.tsx
- ✅ components/landing/CategoriesSection.tsx
- ✅ components/landing/TestimonialsSection.tsx
- ✅ components/landing/CTASection.tsx
- ✅ components/landing/LandingFooter.tsx
- ✅ app/page.tsx (Landing Page)

---

### Phase 3 : Authentification - ✅ COMPLÈTE

#### Pages créées

- ✅ app/(auth)/login/page.tsx (Connexion avec Google)
- ✅ app/(auth)/register/page.tsx (Inscription 3 étapes avec Google)
- ✅ app/(auth)/forgot-password/page.tsx (Mot de passe oublié)
- ✅ app/(auth)/reset-password/page.tsx (Réinitialisation)

#### Fonctionnalités

- ✅ Bouton "Continuer avec Google"
- ✅ Formulaire email/mot de passe
- ✅ Validation des champs
- ✅ États de chargement
- ✅ Redirection vers dashboard

---

### Phase 4 : Dashboard Utilisateur - ✅ COMPLÈTE

#### Pages créées

| Page                | Route                       | Statut |
| ------------------- | --------------------------- | ------ |
| Dashboard (Accueil) | `/dashboard`                | ✅     |
| Documents           | `/dashboard/documents`      | ✅     |
| Vidéos              | `/dashboard/videos`         | ✅     |
| Recherche           | `/dashboard/search`         | ✅     |
| Catégories          | `/dashboard/categories`     | ✅     |
| Favoris             | `/dashboard/favorites`      | ✅     |
| Profil              | `/dashboard/profile`        | ✅     |
| Paramètres          | `/dashboard/settings`       | ✅     |
| Notifications       | `/dashboard/notifications`  | ✅     |
| Détail document     | `/dashboard/documents/[id]` | ✅     |
| Détail vidéo        | `/dashboard/videos/[id]`    | ✅     |

---

## Structure actuelle du projet

```
webapp/
├── app/
│   ├── (auth)/
│   │   ├── forgot-password/
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/
│   ├── dashboard/
│   │   ├── categories/
│   │   ├── documents/
│   │   │   └── [id]/
│   │   ├── favorites/
│   │   ├── notifications/
│   │   ├── profile/
│   │   ├── search/
│   │   ├── settings/
│   │   ├── videos/
│   │   │   └── [id]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx (Landing)
├── components/
│   ├── common/ (10 composants)
│   ├── landing/ (7 composants)
│   └── layout/ (2 composants)
├── data/
│   └── mockData.ts
├── hooks/ (5 hooks)
├── services/
│   └── api.ts
├── types/ (4 types)
└── utils/ (4 utils)
```

---

## Technologies utilisées

- **Framework :** Next.js (App Router)
- **Styling :** Tailwind CSS
- **Langage :** TypeScript
- **Icônes :** Lucide React
- **État :** Zustand (sidebar)
- **HTTP :** Axios

---

## Couleurs utilisées

| Usage               | Code                       |
| ------------------- | -------------------------- |
| Primaire (bleu)     | `#3DA7E3`                  |
| Secondaire (orange) | `#F49600`                  |
| Texte principal     | `#000000`                  |
| Texte secondaire    | `#000000` (opacité 40-60%) |
| Bordures            | `#E5E7EB` (gray-200)       |
| Fond                | `#FFFFFF`                  |

---

## Fonctionnalités implémentées

### Authentification

- Connexion email/mot de passe
- Inscription en 3 étapes
- Mot de passe oublié
- Connexion avec Google (UI prête)

### Dashboard

- Page d'accueil avec catégories, documents récents, favoris, vidéos
- Sidebar responsive avec navigation
- Header avec recherche et menu utilisateur

### Gestion des documents

- Liste des documents avec filtres (catégorie, format)
- Recherche par titre/description
- Téléchargement de documents
- Visualisation PDF (placeholder)
- Détail document avec informations et recommandations

### Gestion des vidéos

- Liste des vidéos avec grille
- Filtres par catégorie
- Lecteur vidéo personnalisé (play/pause, volume, plein écran)
- Détail vidéo avec informations et recommandations

### Profil utilisateur

- Informations personnelles
- Modification des données
- Activité récente

### Paramètres

- Langue (FR/EN) - prévision backend
- Notifications (email, push, alertes)
- Apparence (thème clair/sombre)
- Sécurité (changement mot de passe)
- Appareils connectés

### Autres pages

- Catégories avec sous-catégories
- Favoris avec gestion
- Centre de notifications (lecture/suppression)

---

## Prévisions backend (TODO)

### API endpoints à créer

#### Authentification

- `POST /api/auth/login` - Connexion
- `POST /api/auth/register` - Inscription
- `POST /api/auth/forgot-password` - Mot de passe oublié
- `POST /api/auth/reset-password` - Réinitialisation
- `POST /api/auth/google` - Connexion Google

#### Documents

- `GET /api/documents` - Liste des documents
- `GET /api/documents/:id` - Détail d'un document
- `GET /api/documents/:id/download` - Téléchargement

#### Vidéos

- `GET /api/videos` - Liste des vidéos
- `GET /api/videos/:id` - Détail d'une vidéo

#### Catégories

- `GET /api/categories` - Liste des catégories
- `GET /api/categories/:slug/documents` - Documents par catégorie

#### Favoris

- `GET /api/favorites` - Liste des favoris
- `POST /api/favorites/:id` - Ajouter aux favoris
- `DELETE /api/favorites/:id` - Retirer des favoris

#### Notifications

- `GET /api/notifications` - Liste des notifications
- `PUT /api/notifications/:id/read` - Marquer comme lu
- `PUT /api/notifications/read-all` - Tout marquer comme lu
- `DELETE /api/notifications/:id` - Supprimer
- `DELETE /api/notifications` - Tout supprimer

#### Utilisateur

- `GET /api/user/profile` - Profil utilisateur
- `PUT /api/user/profile` - Mise à jour profil
- `PUT /api/user/password` - Changement mot de passe
- `PUT /api/user/settings` - Paramètres utilisateur

---

## Commandes utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer le linting
npm run lint
```

---

## Notes importantes

- ✅ Toutes les pages utilisent Lucide React pour les icônes (pas d'emojis)
- ✅ Les couleurs sont appliquées en inline avec Tailwind (`text-[#3DA7E3]`)
- ✅ Pas de dégradés, design épuré
- ✅ Responsive sur toutes les pages
- ✅ États de chargement et erreurs gérés
- ✅ Code prêt pour intégration API Laravel

---

## Prochaines étapes (post-MVP)

1. Intégration API Laravel
2. Tests utilisateurs
3. Optimisations SEO
4. Améliorations performances
5. Ajout analytics

```

Note a moi meme pour la page document/[id] prevoir comment mettre la barre de recherche pour la recherche dans le document
```
