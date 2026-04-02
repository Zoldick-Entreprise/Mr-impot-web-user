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
  { name: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Vidéos", href: "/dashboard/videos", icon: Video },
  { name: "Recherche", href: "/dashboard/search", icon: Search },
  { name: "Profil", href: "/dashboard/profile", icon: User },
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

const categories = [
  {
    name: "Droit Fiscal",
    href: "/dashboard/documents?category=fiscal",
    icon: Landmark,
    color: "#3DA7E3",
  },
  {
    name: "Droit des Sociétés",
    href: "/dashboard/documents?category=societes",
    icon: Building2,
    color: "#F49600",
  },
  {
    name: "Droit du Travail",
    href: "/dashboard/documents?category=travail",
    icon: Briefcase,
    color: "#3DA7E3",
  },
  {
    name: "Jurisprudence",
    href: "/dashboard/documents?category=jurisprudence",
    icon: Scale,
    color: "#F49600",
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
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img
                src="/logo2.png"
                alt="Mr Impôt"
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/32x32?text=MI";
                }}
              />
              <span className="text-xl font-bold text-[#3DA7E3]">Mr Impôt</span>
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

            {/* Séparateur */}
            <div className="my-6 border-t border-gray-200" />

            {/* Catégories */}
            <div>
              <h3 className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Catégories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={handleClose}
                    className="flex items-center px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 hover:text-[#3DA7E3] transition-colors group"
                  >
                    <category.icon
                      className="w-4 h-4 mr-3"
                      style={{ color: category.color }}
                    />
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => {
                console.log("Logout");
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Déconnexion
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
