/**
 * Schéma utilisateur aligné sur le backend Laravel M Impôt.
 * Correspond à la ressource UserResource renvoyée par /api/user et /api/profile.
 */
export interface User {
  id: string | number;
  name: string;
  email: string;
  avatar?: string | null;
  preferred_language?: "fr" | "en" | string | null;
  created_at?: string;
}

/**
 * Extension locale — les statistiques et activités ne sont pas encore
 * exposées par le backend. À compléter une fois les endpoints disponibles.
 */
export interface UserProfile extends User {
  documentsCount?: number;
  videosWatched?: number;
  lastLogin?: string;
}
