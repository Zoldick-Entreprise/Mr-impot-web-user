"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function PrivacyPage() {
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
                Politique de <span className="text-[#3EA7DE]">confidentialité</span>
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
              <h2 className="text-xl font-bold text-gray-900">1. Responsable du traitement</h2>
              <p className="text-gray-600">
                M Impôt SAS, située 123 Immeuble Air France, Bonandjo Douala, est responsable du traitement des données personnelles collectées sur la Plateforme.
              </p>

              <h2 className="text-xl font-bold text-gray-900">2. Données collectées</h2>
              <p className="text-gray-600">
                Nous collectons les informations suivantes : nom, prénom, adresse email, numéro de téléphone, profession, historique de navigation, documents consultés, adresse IP.
              </p>

              <h2 className="text-xl font-bold text-gray-900">3. Finalités du traitement</h2>
              <p className="text-gray-600">
                Vos données sont utilisées pour : vous fournir l'accès à la Plateforme, personnaliser votre expérience, vous envoyer des communications liées à votre abonnement, améliorer nos services, respecter nos obligations légales.
              </p>

              <h2 className="text-xl font-bold text-gray-900">4. Base légale</h2>
              <p className="text-gray-600">
                Les traitements reposent sur l'exécution du contrat (abonnement), le consentement (pour certains cookies), l'intérêt légitime (amélioration des services) et les obligations légales.
              </p>

              <h2 className="text-xl font-bold text-gray-900">5. Destinataires des données</h2>
              <p className="text-gray-600">
                Vos données sont accessibles aux personnels habilités de M Impôt, à nos sous-traitants techniques (hébergeur, outil d'emailing) et, le cas échéant, aux autorités judiciaires.
              </p>

              <h2 className="text-xl font-bold text-gray-900">6. Transferts hors UE</h2>
              <p className="text-gray-600">
                Certains sous-traitants peuvent être situés hors de l'Union européenne. Nous encadrons ces transferts par des clauses contractuelles types de la Commission européenne.
              </p>

              <h2 className="text-xl font-bold text-gray-900">7. Durée de conservation</h2>
              <p className="text-gray-600">
                Les données sont conservées pendant la durée de votre abonnement et jusqu'à 3 ans après la fin de la relation commerciale, sauf obligation légale contraire.
              </p>

              <h2 className="text-xl font-bold text-gray-900">8. Vos droits</h2>
              <p className="text-gray-600">
                Vous pouvez accéder, rectifier ou supprimer vos données, limiter le traitement, vous opposer au traitement, ou demander la portabilité. Pour exercer ces droits, écrivez à <a href="mailto:rgpd@mimpôt.com" className="text-[#3EA7DE]">rgpd@mimpôt.com</a>.
              </p>

              <h2 className="text-xl font-bold text-gray-900">9. Droit de réclamation</h2>
              <p className="text-gray-600">
                Vous avez le droit d'introduire une réclamation auprès de la CNIL (3 place de Fontenoy, 75007 Paris).
              </p>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}