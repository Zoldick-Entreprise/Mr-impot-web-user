"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/components/common/Button";

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion de l'effet au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo2.png"
              alt="Mr Impôt"
              className="h-15 w-auto transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/40x40?text=MI";
              }}
            />
            <span className="text-xl font-bold text-[#3EA7DE] tracking-tight">
              M. Impôt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="relative text-gray-600 hover:text-[#3EA7DE] transition-colors group py-2"
            >
              Fonctionnalités
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3EA7DE] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/categories"
              className="relative text-gray-600 hover:text-[#3EA7DE] transition-colors group py-2"
            >
              Catégories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3EA7DE] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/testimonials"
              className="relative text-gray-600 hover:text-[#3EA7DE] transition-colors group py-2"
            >
              Témoignages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3EA7DE] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:border-[#3EA7DE] hover:text-[#3EA7DE] transition-all duration-200"
              >
                Connexion
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="primary"
                size="sm"
                className="shadow-md hover:shadow-lg transition-all duration-200"
              >
                Inscription
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-100 space-y-3">
            <Link
              href="/features"
              className="block px-4 py-2 text-gray-600 hover:text-[#3EA7DE] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 text-gray-600 hover:text-[#3EA7DE] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Catégories
            </Link>
            <Link
              href="/testimonials"
              className="block px-4 py-2 text-gray-600 hover:text-[#3EA7DE] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </Link>
            <div className="pt-2 flex flex-col space-y-2 px-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Connexion
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}