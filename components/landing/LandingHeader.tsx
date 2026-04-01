"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/common/Button";

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Mr Impôt"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/40x40?text=MI";
              }}
            />
            <span className="text-xl font-bold text-[#3EA7DE]">Mr Impôt</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-[#3EA7DE] transition-colors"
            >
              Fonctionnalités
            </Link>
            <Link
              href="#categories"
              className="text-gray-600 hover:text-[#3EA7DE] transition-colors"
            >
              Catégories
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-[#3EA7DE] transition-colors"
            >
              Témoignages
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Connexion
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">
                Inscription
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                href="#features"
                className="px-4 py-2 text-gray-600 hover:text-[#3EA7DE] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                href="#categories"
                className="px-4 py-2 text-gray-600 hover:text-[#3EA7DE] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catégories
              </Link>
              <Link
                href="#testimonials"
                className="px-4 py-2 text-gray-600 hover:text-[#3EA7DE] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
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
        )}
      </div>
    </header>
  );
}
