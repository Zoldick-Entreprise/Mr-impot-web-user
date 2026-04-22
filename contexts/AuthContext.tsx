"use client";

/**
 * AuthContext
 *
 * Expose l'utilisateur courant à toute l'app côté client.
 * - L'état initial est injecté par le Server Component (dashboard layout)
 *   qui a lu le cookie d'auth et appelé /user sur le backend.
 * - `refresh()` recharge l'utilisateur via /api/auth/me (utile après une
 *   mise à jour du profil par exemple).
 * - `logout()` appelle /api/auth/logout puis redirige vers /login.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

export type AuthUser = {
  id: number | string;
  name: string;
  email: string;
  avatar?: string | null;
  preferred_language?: string | null;
  created_at?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  refresh: () => Promise<AuthUser | null>;
  logout: () => Promise<void>;
  isLoggingOut: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({
  initialUser,
  children,
}: {
  initialUser: AuthUser | null;
  children: ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(initialUser);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const refresh = useCallback(async (): Promise<AuthUser | null> => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (!res.ok) {
        setUser(null);
        return null;
      }
      const data = await res.json();
      const u = (data?.user ?? null) as AuthUser | null;
      setUser(u);
      return u;
    } catch (err) {
      console.error("[AuthContext] refresh error:", err);
      return null;
    }
  }, []);

  const logout = useCallback(async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (err) {
      console.error("[AuthContext] logout error:", err);
    } finally {
      setUser(null);
      router.push("/login");
      router.refresh();
    }
  }, [isLoggingOut, router]);

  const value = useMemo(
    () => ({ user, setUser, refresh, logout, isLoggingOut }),
    [user, refresh, logout, isLoggingOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  }
  return ctx;
}

/**
 * Retourne le prénom (premier mot du `name`).
 * Fallback sur "Utilisateur" si pas de nom.
 */
export function getFirstName(user: AuthUser | null): string {
  if (!user?.name) return "Utilisateur";
  return user.name.trim().split(/\s+/)[0] ?? user.name;
}
