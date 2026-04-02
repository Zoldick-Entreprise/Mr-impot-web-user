"use client";

import { Link, Star } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { ArrowRight } from "lucide-react";


const testimonialsList = [
  {
    name: "Marie Laurent",
    role: "Expert-comptable",
    content:
      "Mr Impôt a révolutionné ma façon de travailler. Tous les documents fiscaux sont centralisés et faciles d'accès. Je gagne un temps précieux chaque jour.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Marie+Laurent&background=3EA7DE&color=fff",
  },
  {
    name: "Thomas Dubois",
    role: "Avocat fiscaliste",
    content:
      "Une plateforme indispensable pour ma pratique quotidienne. Les vidéos éducatives sont particulièrement utiles pour former mes collaborateurs.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Thomas+Dubois&background=FF7F36&color=fff",
  },
  {
    name: "Sophie Martin",
    role: "Chef d'entreprise",
    content:
      "Grâce à Mr Impôt, je gère mes obligations fiscales en toute sérénité. Un outil complet et intuitif, je le recommande à tous mes confrères.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Sophie+Martin&background=3EA7DE&color=fff",
  },
  {
    name: "Jean-Paul Lefèvre",
    role: "Directeur juridique",
    content:
      "Nous utilisons Mr Impôt au sein de notre service juridique. La veille réglementaire et les mises à jour automatiques sont un vrai gain de sécurité.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Jean-Paul+Lefevre&background=FF7F36&color=fff",
  },
  {
    name: "Camille Rousseau",
    role: "Juriste en droit social",
    content:
      "Les modèles de contrats et les analyses de jurisprudence m'ont sauvé à plusieurs reprises. Une base de données exceptionnelle.",
    rating: 4,
    avatar:
      "https://ui-avatars.com/api/?name=Camille+Rousseau&background=3EA7DE&color=fff",
  },
  {
    name: "Ahmed Benali",
    role: "Notaire",
    content:
      "Je recommande vivement Mr Impôt à tous les professionnels du droit. La recherche avancée permet de trouver rapidement la réponse à des questions pointues.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Ahmed+Benali&background=FF7F36&color=fff",
  },
  {
    name: "Élise Durand",
    role: "DRH",
    content:
      "La rubrique droit du travail est parfaite : actualités, conventions collectives, modèles de courriers. Un outil complet pour les RH.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Elise+Durand&background=3EA7DE&color=fff",
  },
  {
    name: "Philippe Garnier",
    role: "Expert fiscal",
    content:
      "Les commentaires d'experts et les analyses de la doctrine fiscale sont d'une grande qualité. Mr Impôt est devenu ma référence.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Philippe+Garnier&background=FF7F36&color=fff",
  },
  {
    name: "Nadia Merabet",
    role: "Chef de projet conformité",
    content:
      "Un outil très complet qui nous aide à rester à jour sur les évolutions réglementaires. L'interface est fluide et agréable.",
    rating: 4,
    avatar:
      "https://ui-avatars.com/api/?name=Nadia+Merabet&background=3EA7DE&color=fff",
  }
];

export default function Testimonials() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="relative bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF7F36] bg-[#FF7F36]/10 rounded-full mb-4">
                Témoignages
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Ce que nos utilisateurs
                <span className="text-[#FF7F36]"> disent de nous</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Des milliers de professionnels nous font confiance au quotidien.
                Découvrez leurs retours d'expérience.
              </p>
            </div>
          </div>
        </section>

        {/* Grille des témoignages */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsList.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icône citation décorative */}
                  <div className="absolute top-4 right-4 text-6xl font-serif text-[#3EA7DE]/5 select-none pointer-events-none">
                    „
                  </div>

                  {/* En-tête */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full ring-2 ring-[#3EA7DE]/20 shadow-sm"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#3EA7DE] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Étoiles */}
                  <div className="flex mb-4 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-[#F09705] text-[#F09705]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Citation */}
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Ligne décorative au survol */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] transition-all duration-300 group-hover:w-1/3 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 border-t border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-gray-600 mb-6">
              Déjà plus de 50 000 professionnels utilisent Mr Impôt.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3EA7DE] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Créer un compte gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}