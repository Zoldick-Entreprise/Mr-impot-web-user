"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Video,
  Search,
  User,
  Settings,
  Landmark,
  Building2,
  Briefcase,
  Scale,
  LogOut,
} from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect } from "react";

const navigation = [
  {
    name: "Tableau de bord",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    name: "Vidéos",
    href: "/dashboard/videos",
    icon: Video,
  },
  {
    name: "Recherche",
    href: "/dashboard/search",
    icon: Search,
  },
  {
    name: "Profil",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const categories = [
  {
    name: "Droit Fiscal",
    href: "/dashboard/documents?category=fiscal",
    icon: Landmark,
  },
  {
    name: "Droit des Sociétés",
    href: "/dashboard/documents?category=societes",
    icon: Building2,
  },
  {
    name: "Droit du Travail",
    href: "/dashboard/documents?category=travail",
    icon: Briefcase,
  },
  {
    name: "Jurisprudence",
    href: "/dashboard/documents?category=jurisprudence",
    icon: Scale,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 1024px)");

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
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:translate-x-0 lg:static lg:inset-auto lg:shadow-none lg:w-72
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo avec un peu plus d'élégance */}
          <div className="flex items-center justify-center h-20 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50/50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">MI</span>
              </div>
              <h1 className="text-2xl font-bold text-primary tracking-tight">
                Mr Impôt
              </h1>
            </div>
          </div>

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
                      flex items-center px-4 py-3 rounded-xl transition-all duration-200 group relative
                      ${
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }
                    `}
                  >
                    <item.icon
                      className={`w-5 h-5 mr-3 transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-primary"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="absolute left-0 w-1 h-8 bg-white rounded-r-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Séparateur décoratif */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-gray-400">Catégories</span>
              </div>
            </div>

            {/* Catégories */}
            <div className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  onClick={handleClose}
                  className="flex items-center px-4 py-2.5 text-sm text-gray-600 rounded-xl hover:bg-gray-50 hover:text-primary transition-all duration-200 group"
                >
                  <category.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-primary transition-colors" />
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer avec déconnexion */}
          <div className="p-4 border-t border-gray-100 bg-gray-50/30">
            <button
              onClick={() => {
                // Logout logic here
                console.log("Logout");
              }}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
            >
              <LogOut className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="font-medium">Déconnexion</span>
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