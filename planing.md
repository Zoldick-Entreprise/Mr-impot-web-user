## 🗺️ **PLAN D'ATTAQUE - M IMPÔT**

### **PHASE 1 : Configuration & Setup (Jour 1)**

**Objectif :** Avoir une base de travail fonctionnelle

| Étape | Tâche                                                   | Fichiers/Composants                                       |
| ----- | ------------------------------------------------------- | --------------------------------------------------------- |
| 1.1   | Configuration Tailwind avec les couleurs personnalisées | `tailwind.config.js`                                      |
| 1.2   | Création des types TypeScript                           | `types/user.ts`, `types/document.ts`, `types/category.ts` |
| 1.3   | Création des données mock                               | `data/mockData.ts`                                        |
| 1.4   | Configuration Axios et services de base                 | `services/api.ts`                                         |
| 1.5   | Composants UI communs (Button, Input, Card)             | `components/common/`                                      |

---

### **PHASE 2 : Layout & Navigation (Jour 2)**

**Objectif :** Structure de navigation complète

| Étape | Tâche                               | Fichiers/Composants             |
| ----- | ----------------------------------- | ------------------------------- |
| 2.1   | Layout racine avec métadonnées      | `app/layout.tsx`                |
| 2.2   | Layout dashboard avec Sidebar       | `app/(dashboard)/layout.tsx`    |
| 2.3   | Composant Sidebar (responsive)      | `components/layout/Sidebar.tsx` |
| 2.4   | Composant Header (avec menu mobile) | `components/layout/Header.tsx`  |
| 2.5   | Hook useSidebar (gestion état)      | `hooks/useSidebar.ts`           |

---

### **PHASE 3 : Landing Page (Jour 3)**

**Objectif :** Page d'accueil publique attractive

| Étape | Tâche                         | Fichiers/Composants            |
| ----- | ----------------------------- | ------------------------------ |
| 3.1   | Hero section avec CTA         | `app/page.tsx`                 |
| 3.2   | Section fonctionnalités       | Composant intégré              |
| 3.3   | Section catégories populaires | Composant intégré              |
| 3.4   | Section témoignages           | Composant intégré              |
| 3.5   | Footer                        | `components/common/Footer.tsx` |

---

### **PHASE 4 : Dashboard Utilisateur (Jour 4)**

**Objectif :** Page principale après connexion

| Étape | Tâche                     | Fichiers/Composants                        |
| ----- | ------------------------- | ------------------------------------------ |
| 4.1   | Statistiques (cards)      | `components/dashboard/StatisticsCards.tsx` |
| 4.2   | Graphique d'activité      | `components/dashboard/ActivityChart.tsx`   |
| 4.3   | Activités récentes        | `components/dashboard/RecentActivity.tsx`  |
| 4.4   | Catégories principales    | `components/dashboard/CategoryGrid.tsx`    |
| 4.5   | Actions rapides           | `components/dashboard/QuickActions.tsx`    |
| 4.6   | Assemblage page dashboard | `app/(dashboard)/page.tsx`                 |

---

### **PHASE 5 : Gestion des Documents (Jour 5-6)**

**Objectif :** Consultation et recherche de documents

| Étape | Tâche                  | Fichiers/Composants                        |
| ----- | ---------------------- | ------------------------------------------ |
| 5.1   | Page liste documents   | `app/(dashboard)/documents/page.tsx`       |
| 5.2   | Composant DocumentCard | `components/documents/DocumentCard.tsx`    |
| 5.3   | Filtres et recherche   | `components/documents/DocumentFilters.tsx` |
| 5.4   | Pagination             | `components/common/Pagination.tsx`         |
| 5.5   | Page détail document   | `app/(dashboard)/documents/[id]/page.tsx`  |
| 5.6   | Visualiseur PDF        | `components/documents/PDFViewer.tsx`       |
| 5.7   | Hook useDocuments      | `hooks/useDocuments.ts`                    |

---

### **PHASE 6 : Vidéos Éducatives (Jour 7)**

**Objectif :** Consultation des vidéos

| Étape | Tâche                 | Fichiers/Composants                     |
| ----- | --------------------- | --------------------------------------- |
| 6.1   | Page liste vidéos     | `app/(dashboard)/videos/page.tsx`       |
| 6.2   | Composant VideoCard   | `components/videos/VideoCard.tsx`       |
| 6.3   | Lecteur vidéo intégré | `components/videos/VideoPlayer.tsx`     |
| 6.4   | Catégories vidéos     | `components/videos/VideoCategories.tsx` |

---

### **PHASE 7 : Recherche Avancée (Jour 8)**

**Objectif :** Système de recherche performant

| Étape | Tâche                        | Fichiers/Composants                    |
| ----- | ---------------------------- | -------------------------------------- |
| 7.1   | Barre de recherche           | `components/search/SearchBar.tsx`      |
| 7.2   | Filtres par catégorie        | `components/search/CategoryFilter.tsx` |
| 7.3   | Résultats de recherche       | `components/search/SearchResults.tsx`  |
| 7.4   | Page recherche complète      | `app/(dashboard)/search/page.tsx`      |
| 7.5   | Hook useSearch avec debounce | `hooks/useSearch.ts`                   |

---

### **PHASE 8 : Profil Utilisateur (Jour 9)**

**Objectif :** Gestion du profil personnel

| Étape | Tâche                     | Fichiers/Composants                      |
| ----- | ------------------------- | ---------------------------------------- |
| 8.1   | Informations personnelles | `components/profile/ProfileInfo.tsx`     |
| 8.2   | Statistiques utilisateur  | `components/profile/ProfileStats.tsx`    |
| 8.3   | Historique documents      | `components/profile/DocumentHistory.tsx` |
| 8.4   | Modification profil       | Formulaire intégré                       |
| 8.5   | Page profil complète      | `app/(dashboard)/profile/page.tsx`       |

---

### **PHASE 9 : Authentification (Jour 10)**

**Objectif :** Pages d'authentification

| Étape | Tâche                        | Fichiers/Composants                   |
| ----- | ---------------------------- | ------------------------------------- |
| 9.1   | Page Connexion               | `app/(auth)/login/page.tsx`           |
| 9.2   | Page Inscription             | `app/(auth)/register/page.tsx`        |
| 9.3   | Page Mot de passe oublié     | `app/(auth)/forgot-password/page.tsx` |
| 9.4   | Page Réinitialisation        | `app/(auth)/reset-password/page.tsx`  |
| 9.5   | Hook useAuth                 | `hooks/useAuth.ts`                    |
| 9.6   | Middleware protection routes | `middleware.ts`                       |

---

### **PHASE 10 : Optimisations & Finalisation (Jour 11-12)**

**Objectif :** Peaufiner et préparer pour l'API

| Étape | Tâche               | Fichiers/Composants           |
| ----- | ------------------- | ----------------------------- |
| 10.1  | États de chargement | Composants LoadingSpinner     |
| 10.2  | Gestion des erreurs | Composants ErrorBoundary      |
| 10.3  | Notifications toast | `components/common/Toast.tsx` |
| 10.4  | Tests responsive    | Toutes les pages              |
| 10.5  | Optimisation SEO    | Métadonnées, sitemap          |
| 10.6  | Documentation API   | Services commentés            |

---
