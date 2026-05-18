export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  token?: string; // Token d'authentification pour les requêtes API
}

export interface UserProfile extends User {
  phone?: string;
  address?: string;
  bio?: string;
  documentsCount: number;
  videosWatched: number;
  lastLogin: Date;
}
