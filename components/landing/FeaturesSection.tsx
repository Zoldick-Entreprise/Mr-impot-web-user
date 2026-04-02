"use client";

import {
  BookOpen,
  Download,
  Zap,
  Clock,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Bibliothèque complète",
    description:
      "Accédez à des milliers de documents juridiques classés par catégorie.",
    color: "#3EA7DE",
  },
  {
    icon: Download,
    title: "Téléchargement facile",
    description:
      "Téléchargez vos documents en un clic pour une consultation hors ligne.",
    color: "#FF7F36",
  },
  {
    icon: Zap,
    title: "Rapide et intuitif",
    description:
      "Une interface moderne et fluide pour une expérience optimale.",
    color: "#3EA7DE",
  },
  {
    icon: Clock,
    title: "Mises à jour régulières",
    description:
      "Contenu actualisé en temps réel avec les dernières lois et règlements.",
    color: "#FF7F36",
  },
  {
    icon: Globe,
    title: "Accessible partout",
    description: "Consultez vos documents depuis n'importe quel appareil.",
    color: "#3EA7DE",
  },
  {
    icon: Headphones,
    title: "Support client",
    description: "Une équipe dédiée pour vous accompagner 24h/24 et 7j/7.",
    color: "#FF7F36",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Élément décoratif subtil (sans impact sur le contenu) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#3EA7DE]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FF7F36]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section avec une meilleure hiérarchie */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
            Pourquoi nous choisir ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Pourquoi choisir{" "}
            <span className="text-[#3EA7DE]">Mr Impôt</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Une plateforme complète pour tous vos besoins en matière de
            documentation juridique et fiscale.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Overlay subtil au survol */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon
                  style={{ color: feature.color }}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Petite ligne décorative au survol */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] transition-all duration-300 group-hover:w-1/3 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}