"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  FolderTree,
  Video,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const navigation = [
  { name: "Accueil", href: "/dashboard", icon: Home },
  { name: "Recherche", href: "/dashboard/search", icon: Search },
  { name: "Catégories", href: "/dashboard/categories", icon: FolderTree },
  { name: "Vidéos", href: "/dashboard/videos", icon: Video },
  { name: "Mon compte", href: "/dashboard/profile", icon: User },
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const { logout, isLoggingOut } = useAuth();

  const handleLogout = () => {
    void logout();
  };

  useEffect(() => {
    if (isMobile && isOpen) {
      close();
    }
  }, [pathname, isMobile]);

  const handleClose = () => {
    if (isMobile) {
      close();
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
      
           <Link href="/" className="flex items-center justify-center h-16 border-b border-gray-200 space-x-3">
            <img
              src="/logo.png"
              alt="M Impôt"
              className="h-10 w-auto "
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/40x40?text=MI";
              }}
            />
            <span className="text-xl font-bold text-[#3EA7DE] tracking-tight">
              M. Impôt
            </span>
          </Link>

          {/* Navigation principale */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleClose}
                    className={`
                      flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group
                      ${
                        isActive
                          ? "bg-[#3DA7E3] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-100 hover:text-[#3DA7E3]"
                      }
                    `}
                  >
                    <item.icon
                      className={`w-5 h-5 mr-3 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-[#3DA7E3]"
                      }`}
                    />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogOut className="w-4 h-4 mr-3" />
              {isLoggingOut ? "Déconnexion…" : "Déconnexion"}
            </button>
            <div className="mt-4 text-xs text-center text-gray-400">
              Version 1.0.0
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
