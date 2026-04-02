"use client";

import {
  Landmark,
  Building2,
  Briefcase,
  Scale,
  Gavel,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";

const categories = [
  {
    name: "Droit Fiscal",
    icon: Landmark,
    description: "Impôts, taxes, déclarations",
    count: 1250,
    color: "#3EA7DE",
  },
  {
    name: "Droit des Sociétés",
    icon: Building2,
    description: "SARL, SAS, SA, statuts",
    count: 890,
    color: "#FF7F36",
  },
  {
    name: "Droit du Travail",
    icon: Briefcase,
    description: "Contrats, licenciements, prud'hommes",
    count: 760,
    color: "#3EA7DE",
  },
  {
    name: "Jurisprudence",
    icon: Scale,
    description: "Décisions de justice, arrêts",
    count: 2340,
    color: "#FF7F36",
  },
  {
    name: "Droit Commercial",
    icon: Gavel,
    description: "Contrats, baux, litiges",
    count: 560,
    color: "#3EA7DE",
  },
  {
    name: "Droit Administratif",
    icon: TrendingUp,
    description: "Marchés publics, collectivités",
    count: 430,
    color: "#FF7F36",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Éléments décoratifs subtils (optionnel, sans impact sur le contenu) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3EA7DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF7F36]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section avec badge et ligne décorative */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF7F36] bg-[#FF7F36]/10 rounded-full mb-4">
            Parcourir par thème
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Explorez nos{" "}
            <span className="text-[#FF7F36]">catégories</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Des milliers de documents et vidéos classés par catégorie pour
            faciliter votre recherche.
          </p>
        </div>

        {/* Grille des catégories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/dashboard/documents?category=${category.name.toLowerCase().replace(/\s/g, "-")}`}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Overlay subtil au survol */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}10` }}
                >
                  <category.icon
                    style={{ color: category.color }}
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 px-3 py-1 rounded-full">
                  {category.count} docs
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-[#3EA7DE] transition-colors">
                {category.name}
              </h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {category.description}
              </p>
              
              {/* Petite ligne décorative au survol (cohérent avec Features) */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] transition-all duration-300 group-hover:w-1/3 rounded-full"
              />
            </Link>
          ))}
        </div>

        {/* Bouton CTA amélioré */}
        <div className="text-center mt-12">
          <Link href="/register">
            <Button
                              variant="primary"
                              size="lg"
                              className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-200"
                            >
              Accéder à toutes les catégories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}