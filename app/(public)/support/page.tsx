"use client";

import { Mail, Phone, MessageCircle, Clock, Headphones } from "lucide-react";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function SupportPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF7F36] bg-[#FF7F36]/10 rounded-full mb-4">
                Support
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Comment pouvons-nous <span className="text-[#FF7F36]">vous aider ?</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Notre équipe est à votre écoute 24h/24 et 7j/7.
              </p>
            </div>
          </div>
        </section>

        {/* Options de contact */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#3EA7DE]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-[#3EA7DE]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Une réponse sous 24h ouvrées
                </p>
                <a
                  href="mailto:support@mrimpôt.com"
                  className="text-[#3EA7DE] font-medium hover:underline"
                >
                  support@mrimpôt.com
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#FF7F36]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-[#FF7F36]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Du lundi au vendredi, 9h‑18h
                </p>
                <a
                  href="tel:+33123456789"
                  className="text-[#FF7F36] font-medium hover:underline"
                >
                  +33 1 23 45 67 89
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#3EA7DE]/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-[#3EA7DE]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chat en ligne</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Disponible immédiatement
                </p>
                <button className="text-[#3EA7DE] font-medium hover:underline">
                  Ouvrir le chat
                </button>
              </div>
            </div>

            {/* FAQ rapide */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="w-6 h-6 text-[#3EA7DE]" />
                <h3 className="text-xl font-semibold text-gray-900">Centre d'aide</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Consultez notre FAQ pour des réponses immédiates aux questions les plus fréquentes.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#3EA7DE] text-white rounded-xl font-medium hover:bg-[#3EA7DE]/90 transition-colors"
              >
                Voir la FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}