"use client";

import {
  Menu,
  Bell,
  Search,
  User,
  ChevronDown,
  Settings,
  LogOut,
} from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import Avatar from "@/components/common/Avatar";
import Dropdown, { DropdownItem } from "@/components/common/Dropdown";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { toggle } = useSidebar();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion de l'effet au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const userMenuTrigger = (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg px-3 py-2 transition-all duration-200 group">
      <Avatar fallback="John Doe" size="sm" />
      <span className="hidden md:inline text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
        John Doe
      </span>
      <ChevronDown className="hidden md:block w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 lg:hidden"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold text-gray-800 hidden md:block tracking-tight">
            Tableau de bord
          </h2>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher des documents, vidéos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-gray-50/50 focus:bg-white"
            />
          </div>
        </form>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* User menu */}
          <Dropdown trigger={userMenuTrigger} align="right">
            <DropdownItem onClick={() => router.push("/dashboard/profile")}>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span>Mon profil</span>
              </div>
            </DropdownItem>
            <DropdownItem onClick={() => router.push("/dashboard/settings")}>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-500" />
                <span>Paramètres</span>
              </div>
            </DropdownItem>
            <div className="border-t border-gray-200 my-1"></div>
            <DropdownItem onClick={() => console.log("Logout")}>
              <div className="flex items-center gap-2 text-red-600">
                <LogOut className="w-4 h-4" />
                <span>Déconnexion</span>
              </div>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}