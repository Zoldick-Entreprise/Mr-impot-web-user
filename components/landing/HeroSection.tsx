"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import { FileText, Video, Search, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Accédez à toutes vos
              <span className="text-[#3EA7DE]"> ressources juridiques</span>
              en un seul endroit
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Mr Impôt vous offre une plateforme complète pour consulter des
              documents, regarder des vidéos éducatives et rester informé des
              dernières actualités fiscales.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Commencer gratuitement
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-[#3EA7DE]">10k+</p>
                <p className="text-sm text-gray-600">Documents</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#3EA7DE]">500+</p>
                <p className="text-sm text-gray-600">Vidéos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#3EA7DE]">50k+</p>
                <p className="text-sm text-gray-600">Utilisateurs</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#3EA7DE]/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[#3EA7DE]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Documents PDF
              </h3>
              <p className="text-sm text-gray-600">
                Consultez tous vos documents juridiques au format PDF
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FF7F36]/10 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-[#FF7F36]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Vidéos éducatives
              </h3>
              <p className="text-sm text-gray-600">
                Apprenez à votre rythme avec nos vidéos tutorielles
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#3EA7DE]/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[#3EA7DE]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Recherche avancée
              </h3>
              <p className="text-sm text-gray-600">
                Trouvez rapidement ce que vous cherchez
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FF7F36]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#FF7F36]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sécurisé</h3>
              <p className="text-sm text-gray-600">
                Vos données sont protégées et confidentielles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
