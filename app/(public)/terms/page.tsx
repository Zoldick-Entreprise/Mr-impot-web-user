"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function TermsPage() {
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
                Conditions générales <span className="text-[#3EA7DE]">d'utilisation</span>
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
              <h2 className="text-xl font-bold text-gray-900">1. Objet</h2>
              <p className="text-gray-600">
                Les présentes conditions générales régissent l'utilisation de la plateforme M Impôt (ci-après « la Plateforme »), éditée par la société M Impôt SAS. En accédant ou en utilisant la Plateforme, vous acceptez sans réserve les présentes CGU.
              </p>

              <h2 className="text-xl font-bold text-gray-900">2. Accès à la Plateforme</h2>
              <p className="text-gray-600">
                L'accès à certaines fonctionnalités nécessite la création d'un compte. Vous vous engagez à fournir des informations exactes et à les mettre à jour. Vous êtes responsable de la confidentialité de vos identifiants.
              </p>

              <h2 className="text-xl font-bold text-gray-900">3. Contenus et propriété intellectuelle</h2>
              <p className="text-gray-600">
                Tous les documents, vidéos, textes, logos et autres éléments présents sur la Plateforme sont protégés par le droit d'auteur. Vous disposez d'une licence personnelle, non exclusive et non transférable pour consulter et télécharger les documents à des fins professionnelles internes.
              </p>

              <h2 className="text-xl font-bold text-gray-900">4. Abonnements et tarifs</h2>
              <p className="text-gray-600">
                L'accès à certaines ressources est payant. Les tarifs sont indiqués sur le site. L'abonnement est automatiquement reconduit sauf dénonciation dans les délais prévus. Vous pouvez résilier à tout moment depuis votre espace.
              </p>

              <h2 className="text-xl font-bold text-gray-900">5. Responsabilité</h2>
              <p className="text-gray-600">
                M Impôt s'efforce d'assurer l'exactitude des informations mais ne saurait être tenu responsable des erreurs ou omissions. Les documents fournis ne constituent pas un conseil juridique personnalisé.
              </p>

              <h2 className="text-xl font-bold text-gray-900">6. Données personnelles</h2>
              <p className="text-gray-600">
                Vos données sont traitées conformément à notre Politique de confidentialité. Vous disposez d'un droit d'accès, de rectification et d'opposition.
              </p>

              <h2 className="text-xl font-bold text-gray-900">7. Modification des CGU</h2>
              <p className="text-gray-600">
                M Impôt se réserve le droit de modifier les présentes CGU à tout moment. Les modifications vous seront notifiées par email ou par un avertissement sur la Plateforme.
              </p>

              <h2 className="text-xl font-bold text-gray-900">8. Droit applicable et juridiction</h2>
              <p className="text-gray-600">
                Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.
              </p>

              <div className="pt-4 text-sm text-gray-400">
                <p>Pour toute question, contactez-nous à : <a href="mailto:legal@impôt.com" className="text-[#3EA7DE]">legal@mimpôt.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}