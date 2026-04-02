"use client";

import Link from "next/link";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiGlobalLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiFacebookFill,
  RiInstagramLine,
} from "@remixicon/react";

const footerSections = [
  {
    title: "Produit",
    links: [
      { name: "Fonctionnalités", href: "#features" },
      { name: "Catégories", href: "#categories" },
      { name: "Tarifs", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "Support", href: "/support" },
      { name: "API", href: "/api" },
    ],
  },
  {
    title: "Légal",
    links: [
      { name: "Conditions générales", href: "/terms" },
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "Mentions légales", href: "/legal" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
];

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Élément décoratif subtil en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3EA7DE]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo2.png"
                alt="Mr Impôt"
                className="h-20 w-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/40x40?text=MI";
                }}
              />
              <span className="text-xl font-bold text-white tracking-tight">
                M. Impôt
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plateforme de référence pour tous vos besoins en documentation
              juridique et fiscale.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <RiTwitterXLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <RiFacebookFill className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <RiInstagramLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
                aria-label="Global"
              >
                <RiGlobalLine className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-base tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#3EA7DE] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400 group">
                <RiMailLine className="w-4 h-4 text-[#3EA7DE] flex-shrink-0" />
                <a
                  href="mailto:contact@mrimpôt.com"
                  className="hover:text-white transition-colors"
                >
                  contact@mrimpôt.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 group">
                <RiPhoneLine className="w-4 h-4 text-[#FF7F36] flex-shrink-0" />
                <a
                  href="tel:+33123456789"
                  className="hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <RiMapPinLine className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                <span>123 Avenue de la République, 75011 Paris</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="text-center text-sm text-gray-500">
            <p>© {currentYear} M. Impôt. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}