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
    <section id="features" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi choisir <span className="text-[#3EA7DE]">Mr Impôt</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Une plateforme complète pour tous vos besoins en matière de
            documentation juridique et fiscale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon
                  style={{ color: feature.color }}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
