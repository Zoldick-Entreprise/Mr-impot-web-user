import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import DashboardShell from "./DashboardShell";

/**
 * Layout du dashboard — Server Component.
 *
 * Lit le cookie d'auth, récupère l'utilisateur depuis le backend Laravel,
 * et redirige vers /login si non connecté. L'utilisateur est ensuite injecté
 * dans l'AuthProvider client pour être disponible dans toute la zone /dashboard.
 */
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <DashboardShell initialUser={user}>{children}</DashboardShell>;
}
