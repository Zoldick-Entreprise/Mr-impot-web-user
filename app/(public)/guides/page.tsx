"use client";

import Link from "next/link";
import { FileText, Download, Eye } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

const guides = [
  {
    title: "Guide complet de la déclaration d'impôt sur le revenu",
    description:
      "Tout savoir sur les formulaires, les délais, les réductions d'impôt et la déclaration en ligne.",
    pages: 45,
    downloads: 1250,
    category: "Fiscal",
    slug: "declaration-impot-revenu"
  },
  {
    title: "Créer et gérer une SARL : guide pas à pas",
    description:
      "Des formalités de création aux obligations annuelles, en passant par la rédaction des statuts.",
    pages: 62,
    downloads: 890,
    category: "Sociétés",
    slug: "guide-sarl"
  },
  {
    title: "Le droit du travail pour les RH : 50 fiches pratiques",
    description:
      "Contrat de travail, durée du travail, congés, licenciement, prud'hommes...",
    pages: 98,
    downloads: 2100,
    category: "Travail",
    slug: "droit-travail-rh"
  },
  {
    title: "Comprendre la jurisprudence en droit des contrats",
    description:
      "Analyse des arrêts fondateurs et des principes clés de la responsabilité contractuelle.",
    pages: 34,
    downloads: 560,
    category: "Commercial",
    slug: "jurisprudence-contrats"
  },
  {
    title: "Guide des marchés publics pour les collectivités",
    description:
      "Procédures, seuils, publicité, attribution des contrats...",
    pages: 52,
    downloads: 430,
    category: "Administratif",
    slug: "marches-publics"
  },
  {
    title: "Succession et donation : optimiser la transmission",
    description:
      "Régimes matrimoniaux, abattements, droits de succession, pacte Dutreil.",
    pages: 41,
    downloads: 720,
    category: "Famille",
    slug: "succession-donation"
  }
];

export default function GuidesPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
                Guides
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Apprenez à votre <span className="text-[#3EA7DE]">rythme</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Des guides pratiques téléchargeables pour maîtriser chaque domaine du droit.
              </p>
            </div>
          </div>
        </section>

        {/* Grille des guides */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3EA7DE]/10 flex items-center justify-center mb-5">
                    <FileText className="w-6 h-6 text-[#3EA7DE]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#3EA7DE] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {guide.pages} pages
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {guide.downloads} téléchargements
                    </span>
                  </div>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-[#3EA7DE] hover:underline"
                  >
                    Télécharger le guide
                    <Download className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}