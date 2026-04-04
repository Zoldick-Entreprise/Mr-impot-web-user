"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
                Légal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Politique des <span className="text-[#3EA7DE]">cookies</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Dernière mise à jour : 1er avril 2025
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-600">
                Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site. Il permet de reconnaître votre navigateur et de collecter certaines informations.
              </p>

              <h2 className="text-xl font-bold text-gray-900">Types de cookies utilisés</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Cookies strictement nécessaires</h3>
                  <p className="text-gray-600 text-sm">Ils sont essentiels pour naviguer sur la Plateforme et utiliser ses fonctionnalités (exemple : authentification). Ils ne peuvent pas être désactivés.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cookies de performance</h3>
                  <p className="text-gray-600 text-sm">Ils nous aident à analyser l'utilisation du site (pages visitées, temps passé) pour améliorer nos services. Exemple : Google Analytics.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cookies fonctionnels</h3>
                  <p className="text-gray-600 text-sm">Ils mémorisent vos préférences (langue, affichage) pour faciliter votre navigation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cookies de ciblage / publicitaires</h3>
                  <p className="text-gray-600 text-sm">Ils sont utilisés pour vous proposer des offres adaptées à vos centres d'intérêt, sur notre site ou sur des sites tiers. Vous pouvez les refuser.</p>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900">Durée de conservation</h2>
              <p className="text-gray-600">
                Les cookies ont une durée de vie maximale de 13 mois. Au-delà, votre consentement est à nouveau demandé.
              </p>

              <h2 className="text-xl font-bold text-gray-900">Gérer vos cookies</h2>
              <p className="text-gray-600">
                Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment via le lien « Gérer les cookies » en bas de page.
              </p>
              <p className="text-gray-600">
                Vous pouvez également paramétrer votre navigateur pour bloquer les cookies. Les procédures varient selon le navigateur (Chrome, Firefox, Safari, Edge). Attention, la désactivation des cookies strictement nécessaires peut rendre certaines fonctionnalités inaccessibles.
              </p>

              <div className="pt-4 text-sm text-gray-400">
                <p>Pour toute question, contactez notre Délégué à la Protection des Données : <a href="mailto:dpo@mimpôt.com" className="text-[#3EA7DE]">dpo@mimpôt.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}