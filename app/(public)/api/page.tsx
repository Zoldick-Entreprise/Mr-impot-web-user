"use client";

import { Code, Key, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function APIPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
                API
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Intégrez nos données <span className="text-[#3EA7DE]">juridiques</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Une API REST puissante pour accéder à notre base documentaire et à nos services.
              </p>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-[#3EA7DE]" />
                <h2 className="text-2xl font-bold text-gray-900">Documentation API</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Notre API vous permet d’intégrer nos données juridiques (documents, vidéos, jurisprudence) dans vos propres applications. Elle suit les standards REST et renvoie des réponses en JSON.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Key className="w-5 h-5 text-[#FF7F36] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Authentification</h3>
                    <p className="text-sm text-gray-500">Clé API personnelle ou OAuth2. Sécurisé et chiffré.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BookOpen className="w-5 h-5 text-[#3EA7DE] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Endpoints principaux</h3>
                    <p className="text-sm text-gray-500">/documents, /categories, /search, /users/favorites</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-[#FF7F36] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Limites</h3>
                    <p className="text-sm text-gray-500">1000 requêtes/jour pour les clés gratuites.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Code className="w-5 h-5 text-[#3EA7DE] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">SDK</h3>
                    <p className="text-sm text-gray-500">Librairies officielles pour Node.js, Python, PHP.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <Link
                  href="/api/docs"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3EA7DE] text-white rounded-xl font-medium hover:bg-[#3EA7DE]/90 transition-colors"
                >
                  Accéder à la documentation complète
                </Link>
                <p className="mt-3 text-xs text-gray-400">
                  Besoin d’une clé API ? Contactez-nous à <a href="mailto:api@mrimpôt.com" className="text-[#3EA7DE]">api@mrimpôt.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}