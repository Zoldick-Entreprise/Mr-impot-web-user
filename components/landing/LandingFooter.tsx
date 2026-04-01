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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.jpg"
                alt="Mr Impôt"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/40x40?text=MI";
                }}
              />
              <span className="text-xl font-bold text-white">Mr Impôt</span>
            </div>
            <p className="text-gray-400 mb-4">
              La plateforme de référence pour tous vos besoins en documentation
              juridique et fiscale.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiTwitterXLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiLinkedinBoxLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiFacebookFill className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiInstagramLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiGlobalLine className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <RiMailLine className="w-4 h-4" />
                contact@mrimpôt.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <RiPhoneLine className="w-4 h-4" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <RiMapPinLine className="w-4 h-4" />
                123 Avenue de la République, 75011 Paris
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Mr Impôt. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
