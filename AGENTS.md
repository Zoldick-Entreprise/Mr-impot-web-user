# AGENTS.md - M Impôt Project

## Dernière mise à jour : 22/04/2026

## État du projet

- **Phase actuelle :** Intégration backend Laravel — Auth + Profil utilisateur
- **Statut :** ✅ Auth email/mot de passe branchée · ✅ Profil utilisateur branché · 🟡 Google OAuth en attente de config backend · 🔴 Forgot-password 500 (SMTP backend)

---

## Architecture Backend-For-Frontend (BFF)

Le frontend Next.js ne parle **jamais directement** au backend Laravel depuis
le navigateur. Toutes les requêtes passent par des **route handlers internes**
`app/api/*` qui :

1. Lisent le token JWT depuis un **cookie HttpOnly** (`auth_token`, 30 jours).
2. Forwardent la requête vers `BACKEND_API_URL` (env var, fallback sur
   `https://mr-impots-back.onrender.com/api`).
3. Re-sérialisent la réponse pour le client.

Avantages : URL backend cachée, pas de CORS, token inaccessible au JavaScript
(anti-XSS), possibilité de normaliser les erreurs côté Next.

### Fichiers clés

| Fichier | Rôle |
| --- | --- |
| `lib/backend.ts` | Client HTTP serveur (JSON + FormData multipart) |
| `lib/auth.ts` | Cookie helpers + `getCurrentUser()` server-side |
| `contexts/AuthContext.tsx` | Provider client : `useAuth()` expose user, refresh, logout |
| `app/dashboard/layout.tsx` | Server Component — SSR le user, redirect `/login` sinon |
| `app/dashboard/DashboardShell.tsx` | Wrapper client — monte `AuthProvider` |

---

## Intégrations réalisées

### Phase 5 : Authentification backend — ✅ COMPLÈTE

#### Endpoints BFF créés

| Route frontend | Méthode | Cible backend | État |
| --- | --- | --- | --- |
| `/api/auth/login` | POST | `/auth/login` | ✅ OK (testé) |
| `/api/auth/register` | POST | `/auth/register` | ✅ OK (testé) |
| `/api/auth/logout` | POST | `/auth/logout` | ✅ OK (testé) |
| `/api/auth/me` | GET | `/user` | ✅ OK |
| `/api/auth/forgot-password` | POST | `/auth/forgot-password` | 🔴 500 backend (SMTP) |
| `/api/auth/reset-password` | POST | `/auth/reset-password` | 🟡 Non testé |
| `/api/auth/google/redirect` | GET | `/auth/google/redirect` | 🟡 Voir ci-dessous |
| `/api/auth/google/callback` | GET | — (reçoit `?token=xxx`) | 🟡 Voir ci-dessous |

#### Pages branchées

- `app/(auth)/login/page.tsx` — `fetch('/api/auth/login')` + flux Google
- `app/(auth)/register/page.tsx` — concat `firstName + lastName → name`, `phone` ignoré (non supporté backend)
- `app/(auth)/forgot-password/page.tsx` — branchée
- `app/(auth)/reset-password/page.tsx` — **créée** (lit `token` + `email` depuis l'URL)
- Déconnexion branchée dans `Sidebar.tsx` ET `Header.tsx` (via `useAuth().logout`)
- Notifications via `react-hot-toast` (Toaster monté dans `app/layout.tsx`)

#### Inscription — mapping des champs

| Frontend | Backend |
| --- | --- |
| `firstName` + `lastName` | `name` (concaténation) |
| `email` | `email` |
| `password` | `password` |
| `confirm` | `password_confirmation` |
| `phone` | ❌ ignoré (pas de champ backend) |

---

### Phase 6 : Profil utilisateur — ✅ COMPLÈTE

#### Endpoints créés

| Route frontend | Méthode | Cible backend | Détails |
| --- | --- | --- | --- |
| `/api/profile` | GET | `/user` | Renvoie l'user courant |
| `/api/profile` | PATCH | `/profile` (POST + `_method=PATCH`) | multipart/form-data |

> Laravel ne supporte pas nativement PATCH en multipart, on utilise donc
> l'astuce `_method=PATCH` sur un POST (pattern standard Laravel).

#### Schéma UserResource (backend)

```ts
{
  id: string | number,
  name: string,
  email: string,
  avatar: string | null,
  preferred_language: "fr" | "en",
  created_at: string
}
```

#### Pages branchées

- `components/layout/Header.tsx` — affiche `user.name` + avatar réels (plus de "Pierre Akoa" en dur)
- `app/dashboard/page.tsx` — "Bonjour, {prénom}" avec helper `getFirstName()`
- `app/dashboard/profile/page.tsx` — **refondue** pour matcher le schéma backend :
  - Champs éditables : `name`, `preferred_language`, `avatar` (upload)
  - Email en lecture seule (le backend ne le modifie pas)
  - Suppression des champs non supportés : `firstName/lastName/phone/location/bio`
  - Upload avatar avec preview local + validation taille (2 Mo max)
  - Appel `PATCH /api/profile` en FormData
  - Après succès : `setUser(data.user)` rafraîchit tout le contexte (sidebar, header, dashboard)

---

## Configuration requise

### Variables d'environnement Vercel

| Variable | Valeur | Requis ? |
| --- | --- | --- |
| `BACKEND_API_URL` | `https://mr-impots-back.onrender.com/api` | Optionnel (fallback codé) |

### Cookie d'authentification

- Nom : `auth_token`
- Scope : `/`
- Flags : `HttpOnly`, `SameSite=Lax`, `Secure` (prod uniquement)
- Durée : 30 jours

---

## Google OAuth — ce qu'il reste à faire

### Symptôme actuel

Google retourne `Missing required parameter: redirect_uri`. Cela signifie que
l'URL de redirection générée par Laravel Socialite ne contient pas le paramètre
`redirect_uri` — donc la config backend est incomplète.

### À configurer côté backend Laravel (Render)

Dans le `.env` du backend, vérifier la présence de :

```env
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REDIRECT_URI=https://mr-impots-back.onrender.com/api/auth/google/callback
FRONTEND_URL=https://<ton-domaine-vercel>
```

À la fin de `GoogleController@handleGoogleCallback`, le backend doit rediriger vers :

```php
return redirect(env('FRONTEND_URL') . '/api/auth/google/callback?token=' . $token);
```

### À configurer côté Google Cloud Console

> Tu n'as **pas** besoin de saisir `client_id` / `client_secret` côté frontend :
> c'est le backend Laravel qui les utilise. Le frontend n'en voit jamais.

- **Origines JavaScript autorisées :**
  - `http://localhost:3000`
  - `https://<ton-domaine-vercel>`
- **URI de redirection autorisé :**
  - `https://mr-impots-back.onrender.com/api/auth/google/callback`

### URL de preview v0

L'URL `https://vm-74g1a4nxih3ryzikjtsdmir2.vusercontent.net/` est bien la
preview v0, mais **elle change à chaque session**. Google n'autorisera pas
de wildcard. Pour tester OAuth ici :

1. Soit ajouter l'URL preview actuelle dans la Google Console (à refaire à chaque nouvelle session v0)
2. Soit tester OAuth uniquement sur le déploiement Vercel final (domaine stable)

**Recommandé :** tester OAuth après déploiement sur Vercel, pas dans la preview v0.

---

## Problème connu : forgot-password 500

Le backend Laravel renvoie 500 sur `/auth/forgot-password`. Probable :
- Variables SMTP non configurées sur Render (`MAIL_MAILER`, `MAIL_HOST`, etc.)
- Ou la route email n'est pas implémentée côté backend

Le frontend est correctement branché ; il affichera l'erreur backend dans un
toast. Côté backend, vérifier les logs Render.

---

## Structure actuelle du projet

```
webapp/
├── app/
│   ├── (auth)/
│   │   ├── forgot-password/
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/      ← créé phase 5
│   ├── api/                     ← créé phase 5-6
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── logout/
│   │   │   ├── forgot-password/
│   │   │   ├── reset-password/
│   │   │   ├── me/
│   │   │   └── google/
│   │   │       ├── redirect/
│   │   │       └── callback/
│   │   └── profile/             ← créé phase 6
│   ├── dashboard/
│   │   ├── DashboardShell.tsx   ← créé phase 6 (client shell)
│   │   ├── layout.tsx           ← Server Component (phase 6)
│   │   └── ... (pages existantes)
│   ├── layout.tsx               ← Toaster ajouté phase 5
│   └── ...
├── contexts/                    ← créé phase 6
│   └── AuthContext.tsx
├── lib/                         ← créé phase 5
│   ├── auth.ts
│   └── backend.ts
├── services/
│   └── api.ts                   ← refactoré phase 5 (baseURL /api)
└── ...
```

---

## Commandes utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Type-check
npx tsc --noEmit

# Build de production
npm run build
```

---

## Prochaines étapes

1. 🟡 Finaliser Google OAuth (config backend Laravel — voir section ci-dessus)
2. 🔴 Corriger forgot-password côté backend (SMTP / mail driver)
3. ⬜ Brancher les endpoints Documents/Videos (actuellement mockés)
4. ⬜ Brancher Favoris + Notifications
5. ⬜ Page Settings — changement mot de passe
6. ⬜ Remplacer les `mockData.ts` par des calls API réels
