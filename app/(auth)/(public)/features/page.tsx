"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
  BookOpen, Video, Search, User, Smartphone, Download, Zap, Clock,
  Globe, Headphones, Shield, FileText, TrendingUp, Users
} from "lucide-react";

// Fonctionnalités principales (demandées)
const mainFeatures = [
  {
    icon: BookOpen,
    title: "Bibliothèque de documents",
    description: "Accédez à des milliers de documents juridiques classés par catégorie.",
    color: "#3EA7DE",
    details:
      "Notre bibliothèque rassemble plus de 10 000 documents : lois, décrets, circulaires, commentaires, modèles de contrats… Tous sont indexés et facilement accessibles."
  },
  {
    icon: Video,
    title: "Vidéos éducatives",
    description: "Apprenez à votre rythme avec des contenus vidéo.",
    color: "#FF7F36",
    details:
      "Accédez à plus de 500 vidéos classées par niveau : découverte, approfondissement, cas pratiques. Des experts fiscaux vous guident pas à pas."
  },
  {
    icon: Search,
    title: "Recherche avancée",
    description: "Trouvez rapidement ce que vous cherchez.",
    color: "#3EA7DE",
    details:
      "Notre moteur de recherche utilise l'intelligence artificielle pour interpréter votre requête et vous proposer les résultats les plus pertinents."
  },
  {
    icon: User,
    title: "Espace personnel",
    description: "Gérez vos favoris et votre historique.",
    color: "#FF7F36",
    details:
      "Personnalisez votre expérience : ajoutez des documents en favoris, consultez votre historique de consultation, créez des dossiers personnalisés."
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Utilisable sur tous vos appareils.",
    color: "#3EA7DE",
    details:
      "Site responsive, application mobile (iOS/Android) et synchronisation automatique. Votre bibliothèque vous suit partout, même hors ligne."
  },
  {
    icon: Download,
    title: "Téléchargement facile",
    description: "Téléchargez vos documents en un clic pour une consultation hors ligne.",
    color: "#FF7F36",
    details:
      "Tous les documents sont disponibles en PDF haute définition. Vous pouvez les télécharger, les imprimer et les partager dans le respect des droits d'usage."
  }
];

// Fonctionnalités avancées (complémentaires)
const advancedFeatures = [
  {
    icon: Zap,
    title: "Rapide et intuitif",
    description: "Une interface moderne et fluide pour une expérience optimale.",
    color: "#3EA7DE",
    details:
      "L'interface a été pensée avec des experts métier pour une prise en main immédiate. Navigation par catégories, recherche instantanée, favoris…"
  },
  {
    icon: Clock,
    title: "Mises à jour régulières",
    description: "Contenu actualisé en temps réel avec les dernières lois et règlements.",
    color: "#FF7F36",
    details:
      "Notre veille juridique garantit que tous les textes sont à jour. Vous recevez des notifications pour les modifications impactant votre domaine."
  },
  {
    icon: Globe,
    title: "Accessible partout",
    description: "Consultez vos documents depuis n'importe quel appareil.",
    color: "#3EA7DE",
    details:
      "Site responsive, application mobile (iOS/Android) et synchronisation automatique. Votre bibliothèque vous suit partout."
  },
  {
    icon: Headphones,
    title: "Support client",
    description: "Une équipe dédiée pour vous accompagner 24h/24 et 7j/7.",
    color: "#FF7F36",
    details:
      "Un service client réactif par chat, téléphone ou email. Des experts juridiques sont également disponibles pour répondre à vos questions."
  },
  {
    icon: Shield,
    title: "Sécurité des données",
    description: "Vos informations sont chiffrées et protégées.",
    color: "#3EA7DE",
    details:
      "Nous utilisons le chiffrement AES-256 pour vos données personnelles et respectons strictement le RGPD."
  },
  {
    icon: FileText,
    title: "Modèles personnalisables",
    description: "Créez vos documents à partir de modèles prédéfinis.",
    color: "#FF7F36",
    details:
      "Des centaines de modèles (contrats, statuts, déclarations) sont disponibles. Complétez‑les en ligne et exportez‑les au format Word ou PDF."
  },
  {
    icon: TrendingUp,
    title: "Alertes juridiques",
    description: "Soyez informé des évolutions législatives.",
    color: "#3EA7DE",
    details:
      "Configurez des alertes personnalisées sur les sujets qui vous intéressent (fiscal, social, commercial…) et recevez des notifications instantanées."
  },
  {
    icon: Users,
    title: "Espace collaboratif",
    description: "Partagez des documents avec vos collaborateurs.",
    color: "#FF7F36",
    details:
      "Créez des dossiers partagés, gérez les droits d’accès et travaillez en équipe sur vos dossiers juridiques."
  }
];

export default function FeaturesPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero section */}
        <section className="relative bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
                Fonctionnalités
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Tous les outils pour
                <span className="text-[#3EA7DE]"> simplifier votre quotidien</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez l’ensemble des fonctionnalités de Mr Impôt, conçues
                pour les professionnels du droit et de la fiscalité.
              </p>
            </div>
          </div>
        </section>

        {/* Principales fonctionnalités */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Les fonctionnalités essentielles
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] rounded-full mx-auto" />
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Tout ce dont vous avez besoin pour une gestion juridique efficace
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${feature.color}10` }}
                  >
                    <feature.icon
                      style={{ color: feature.color }}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <p className="text-gray-600 text-sm border-t pt-3 mt-3">
                    {feature.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités avancées */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Fonctionnalités avancées
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] rounded-full mx-auto" />
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Pour aller encore plus loin dans votre expertise
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${feature.color}10` }}
                  >
                    <feature.icon
                      style={{ color: feature.color }}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <p className="text-gray-600 text-sm border-t pt-3 mt-3">
                    {feature.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}