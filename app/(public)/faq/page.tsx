"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

const faqItems = [
  {
    question: "Quels types de documents puis-je trouver sur M. Impôt ?",
    answer:
      "Vous trouverez des lois, décrets, circulaires, commentaires d'experts, modèles de contrats, statuts juridiques, décisions de justice, et bien plus encore. Tous les domaines du droit sont couverts : fiscal, société, travail, commercial, etc."
  },
  {
    question: "Les documents sont-ils régulièrement mis à jour ?",
    answer:
      "Oui, notre équipe de veille juridique met à jour le contenu en temps réel dès qu'un texte officiel est publié. Vous êtes informés des modifications par notification si vous le souhaitez."
  },
  {
    question: "Puis-je télécharger les documents pour une consultation hors ligne ?",
    answer:
      "Absolument. Tous les documents sont disponibles en téléchargement au format PDF. Vous pouvez les consulter sans connexion Internet et les imprimer."
  },
  {
    question: "L'inscription est-elle vraiment gratuite pendant 14 jours ?",
    answer:
      "Oui, vous bénéficiez de 14 jours d'essai gratuit, sans engagement. À l'issue de cette période, vous pouvez choisir l'abonnement qui vous convient."
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express) et les virements bancaires pour les abonnements annuels professionnels."
  },
  {
    question: "Puis-je partager mon compte avec mes collaborateurs ?",
    answer:
      "Des formules multi-utilisateurs sont disponibles pour les cabinets et entreprises. Contactez notre service commercial pour un devis personnalisé."
  },
  {
    question: "Comment accéder aux vidéos éducatives ?",
    answer:
      "Les vidéos sont accessibles directement depuis votre tableau de bord, classées par niveau et par thématique. De nouvelles vidéos sont ajoutées chaque semaine."
  },
  {
    question: "Que faire en cas de problème technique ou de question ?",
    answer:
      "Notre support client est joignable 24h/24 et 7j/7 par chat en ligne, email (support@mrimpôt.com) ou téléphone au +33 1 23 45 67 89."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
                Foire aux questions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Réponses à vos <span className="text-[#3EA7DE]">questions</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Tout ce que vous devez savoir sur Mr Impôt
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">
                      {item.question}
                    </span>
                    {openIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#3EA7DE]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openIndex === idx ? "pb-4 max-h-96" : "max-h-0 pb-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed border-t pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500">
                Vous n'avez pas trouvé votre réponse ?{" "}
                <a href="/support" className="text-[#3EA7DE] hover:underline">
                  Contactez notre support
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}