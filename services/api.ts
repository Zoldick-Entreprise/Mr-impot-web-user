import axios from "axios";

/**
 * Client HTTP du frontend.
 *
 * Il pointe sur les routes internes /api/** (BFF) qui proxy vers le backend
 * Laravel. L'authentification passe par un cookie HttpOnly `auth_token` posé
 * par les route handlers server-side : aucun token n'est manipulé côté client.
 *
 * Avantages :
 *  - pas de token exposé au JS → immunisé contre XSS
 *  - pas de config CORS à gérer (same-origin)
 *  - URL backend cachée au navigateur
 */

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  // Inutile en same-origin mais sans effet négatif : garantit l'envoi
  // des cookies si un jour on passe sur un domaine séparé.
  withCredentials: true,
});

// Gestion centralisée des erreurs d'authentification.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      // Évite une boucle de redirection si on est déjà sur une page d'auth.
      const path = window.location.pathname;
      const isAuthPage =
        path.startsWith("/login") ||
        path.startsWith("/register") ||
        path.startsWith("/forgot-password") ||
        path.startsWith("/reset-password");
      if (!isAuthPage) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
