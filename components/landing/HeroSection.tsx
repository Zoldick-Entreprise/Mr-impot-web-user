"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import { FileText, Video, Search, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      {/* Éléments décoratifs en arrière-plan (sans impact sur le contenu) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3EA7DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF7F36]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonne gauche : texte et CTA */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.2]">
              Accédez à toutes vos
              <span className="block text-[#3EA7DE] mt-2">
                ressources juridiques
              </span>
              en un seul endroit
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Mr Impôt vous offre une plateforme complète pour consulter des
              documents, regarder des vidéos éducatives et rester informé des
              dernières actualités fiscales.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/register">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  Commencer gratuitement
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gray-300 hover:border-[#3EA7DE] hover:text-[#3EA7DE] transition-all duration-200"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>

            {/* Statistiques avec séparateurs visuels */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-[#3EA7DE]">10k+</div>
                <div className="h-6 w-px bg-gray-200" />
                <div className="text-sm text-gray-600">Documents</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-[#3EA7DE]">500+</div>
                <div className="h-6 w-px bg-gray-200" />
                <div className="text-sm text-gray-600">Vidéos</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-[#3EA7DE]">50k+</div>
                <div className="h-6 w-px bg-gray-200" />
                <div className="text-sm text-gray-600">Utilisateurs</div>
              </div>
            </div>
          </div>

          {/* Colonne droite : cartes fonctionnalités */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#3EA7DE]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3EA7DE]/20 transition-colors">
                <FileText className="w-6 h-6 text-[#3EA7DE]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Documents PDF
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Consultez tous vos documents juridiques au format PDF, avec une
                interface de lecture optimisée.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FF7F36]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF7F36]/20 transition-colors">
                <Video className="w-6 h-6 text-[#FF7F36]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vidéos éducatives
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Apprenez à votre rythme avec nos vidéos tutorielles conçues par
                des experts.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#3EA7DE]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3EA7DE]/20 transition-colors">
                <Search className="w-6 h-6 text-[#3EA7DE]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Recherche avancée
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Trouvez rapidement ce que vous cherchez grâce à notre moteur de
                recherche intelligent.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FF7F36]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF7F36]/20 transition-colors">
                <Shield className="w-6 h-6 text-[#FF7F36]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sécurisé & conforme
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Vos données sont protégées et confidentielles, avec une
                conformité RGPD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}