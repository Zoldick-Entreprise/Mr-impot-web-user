"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LegalPage() {
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
                Mentions <span className="text-[#3EA7DE]">légales</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Éditeur du site</h2>
              <p className="text-gray-600">
                <strong>M Impôt SAS</strong><br />
                Société par actions simplifiée au capital de 50 000 €<br />
                RCS Paris 912 345 678<br />
                Siège social : 123 Immeuble Air France, Bonandjo Douala<br />
                Tél : +33 1 23 45 67 89<br />
                Email : <a href="mailto:contact@mimpôt.com" className="text-[#3EA7DE]">contact@mimpôt.com</a><br />
                Numéro de TVA intracommunautaire : FR 12 345678912
              </p>

              <h2 className="text-xl font-bold text-gray-900">Directeur de la publication</h2>
              <p className="text-gray-600">
                M. Jean Dupont, Président de  Impôt SAS.
              </p>

              <h2 className="text-xl font-bold text-gray-900">Hébergement</h2>
              <p className="text-gray-600">
                La Plateforme est hébergée par :<br />
                <strong>OVH Cloud</strong><br />
                2 rue Kellermann, 59100 Roubaix, France<br />
                Tél : 09 72 10 10 07<br />
                Site : <a href="https://www.ovhcloud.com" className="text-[#3EA7DE]">www.ovhcloud.com</a>
              </p>

              <h2 className="text-xl font-bold text-gray-900">Propriété intellectuelle</h2>
              <p className="text-gray-600">
                L'ensemble des contenus (textes, images, vidéos, logos) est la propriété exclusive de M Impôt SAS ou de ses partenaires. Toute reproduction sans autorisation est interdite.
              </p>

              <h2 className="text-xl font-bold text-gray-900">Conformité</h2>
              <p className="text-gray-600">
                Le site a fait l'objet d'une déclaration auprès de la CNIL (n° 2123456). Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès et de rectification.
              </p>

              <h2 className="text-xl font-bold text-gray-900">Conditions d'utilisation</h2>
              <p className="text-gray-600">
                L'utilisation du site est régie par nos <a href="/terms" className="text-[#3EA7DE]">Conditions générales d'utilisation</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}