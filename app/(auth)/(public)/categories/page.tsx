"use client";

import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
  Landmark, Building2, Briefcase, Scale, Gavel, TrendingUp,
  Users, Home, Heart, Banknote, Receipt, BarChart
} from "lucide-react";

const categoriesList = [
  {
    name: "Droit Fiscal",
    icon: Landmark,
    description: "Impôts, taxes, déclarations, contrôles fiscaux",
    count: 1250,
    color: "#3EA7DE",
    details: "Toute la documentation sur l'impôt sur le revenu, IS, TVA, impôts locaux, conventions fiscales internationales."
  },
  {
    name: "Droit des Sociétés",
    icon: Building2,
    description: "SARL, SAS, SA, statuts, assemblées générales",
    count: 890,
    color: "#FF7F36",
    details: "Modèles de statuts, procès-verbaux, pactes d'actionnaires, fusions, liquidations."
  },
  {
    name: "Droit du Travail",
    icon: Briefcase,
    description: "Contrats, licenciements, prud'hommes, CSE",
    count: 760,
    color: "#3EA7DE",
    details: "Conventions collectives, durées du travail, rupture du contrat, jurisprudence sociale."
  },
  {
    name: "Jurisprudence",
    icon: Scale,
    description: "Décisions de justice, arrêts, conclusions",
    count: 2340,
    color: "#FF7F36",
    details: "Sélection commentée des arrêts de la Cour de cassation, du Conseil d'État et des cours d'appel."
  },
  {
    name: "Droit Commercial",
    icon: Gavel,
    description: "Contrats, baux, litiges, procédures collectives",
    count: 560,
    color: "#3EA7DE",
    details: "Baux commerciaux, fonds de commerce, droit de la concurrence, surendettement."
  },
  {
    name: "Droit Administratif",
    icon: TrendingUp,
    description: "Marchés publics, collectivités, contentieux",
    count: 430,
    color: "#FF7F36",
    details: "Marchés publics, domanialité, expropriation, responsabilité administrative."
  },
  {
    name: "Droit de la Famille",
    icon: Users,
    description: "Mariage, divorce, succession, pacs",
    count: 520,
    color: "#3EA7DE",
    details: "Régimes matrimoniaux, donations, successions, autorité parentale."
  },
  {
    name: "Droit Immobilier",
    icon: Home,
    description: "Vente, location, copropriété, construction",
    count: 380,
    color: "#FF7F36",
    details: "Promesses de vente, baux d'habitation, règles de copropriété, VEFA."
  },
  {
    name: "Droit de la Santé",
    icon: Heart,
    description: "Établissements de santé, éthique médicale",
    count: 210,
    color: "#3EA7DE",
    details: "Droits des patients, responsabilité médicale, organisation hospitalière."
  },
  {
    name: "Droit Bancaire",
    icon: Banknote,
    description: "Crédits, surendettement, régulation",
    count: 190,
    color: "#FF7F36",
    details: "Crédit à la consommation, surendettement, droit du crédit, réglementation bancaire."
  },
  {
    name: "Droit des Affaires",
    icon: Receipt,
    description: "Contrats d'affaires, distribution, concurrence",
    count: 320,
    color: "#3EA7DE",
    details: "Contrats commerciaux, droit de la distribution, propriété intellectuelle."
  },
  {
    name: "Droit Fiscal International",
    icon: BarChart,
    description: "Prix de transfert, conventions fiscales",
    count: 150,
    color: "#FF7F36",
    details: "Optimisation fiscale internationale, prix de transfert, double imposition."
  }
];

export default function Categories() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="relative bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF7F36] bg-[#FF7F36]/10 rounded-full mb-4">
                Catégories
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Explorez notre
                <span className="text-[#FF7F36]"> documentation juridique</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Plus de 8 000 documents classés par thématique pour répondre
                précisément à vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Grille des catégories */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoriesList.map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/dashboard/documents?category=${cat.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${cat.color}10` }}
                    >
                      <cat.icon
                        style={{ color: cat.color }}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 px-3 py-1 rounded-full">
                      {cat.count} docs
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-[#3EA7DE] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  <p className="mt-3 text-gray-600 text-sm border-t pt-3">
                    {cat.details}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] transition-all duration-300 group-hover:w-1/3 rounded-full" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}