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
    <section
      id="categories"
      className="py-20 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explorez nos <span className="text-[#FF7F36]">catégories</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Des milliers de documents et vidéos classés par catégorie pour
            faciliter votre recherche.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/dashboard/documents?category=${category.name.toLowerCase().replace(/\s/g, "-")}`}
              className="group bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}10` }}
                >
                  <category.icon
                    style={{ color: category.color }}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 px-3 py-1 rounded-full">
                  {category.count} docs
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-[#3EA7DE] transition-colors">
                {category.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/register">
            <button className="px-8 py-3 bg-[#FF7F36] text-white rounded-lg font-semibold hover:bg-[#FF7F36]/90 transition-colors">
              Accéder à toutes les catégories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
