/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, BookOpen, Scale, Briefcase } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Demande d’information",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez envoyer les données à votre API
    console.log("Formulaire soumis :", formState);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        company: "",
        subject: "Demande d’information",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="relative bg-white border-b border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,#e5e7eb_1px,transparent_1px)] bg-[length:40px_40px] opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF7F36] bg-[#FF7F36]/10 rounded-full mb-4">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Besoin d’aide pour vos
                <span className="text-[#FF7F36]"> recherches juridiques ?</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Que vous consultiez le <strong>code des impôts</strong>, des 
                <strong> codes de droit privé</strong> ou que vous prépariez un 
                <strong> concours</strong>, notre équipe d’experts est là pour vous accompagner.
              </p>
            </div>
          </div>
        </section>

        {/* Formulaire + coordonnées */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Formulaire */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Envoyez-nous votre demande
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    Réponse sous 24h ouvrées (sauf week-end et jours fériés).
                  </p>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle className="w-16 h-16 text-[#3EA7DE] mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Demande envoyée !
                      </h3>
                      <p className="text-gray-500 mt-1">
                        Un de nos juristes vous contactera très rapidement.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            Nom &amp; prénom *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="Jean Dupont"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/70 text-gray-900 placeholder:text-gray-400 text-sm transition hover:border-[#3EA7DE]/40 focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            Email professionnel *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="jean@cabinet.fr"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/70 text-gray-900 placeholder:text-gray-400 text-sm transition hover:border-[#3EA7DE]/40 focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Cabinet / Entreprise (optionnel)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Cabinet Martin & associés"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/70 text-gray-900 placeholder:text-gray-400 text-sm transition hover:border-[#3EA7DE]/40 focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Objet de votre demande
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/70 text-gray-900 text-sm transition hover:border-[#3EA7DE]/40 focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 outline-none appearance-none"
                        >
                          <option>Demande d’information sur l’offre</option>
                          <option>Assistance sur une recherche (code, doctrine)</option>
                          <option>Préparation aux concours (CRFPA, ENM, etc.)</option>
                          <option>Devis personnalisé</option>
                          <option>Autre</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Votre message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                          placeholder="Précisez votre demande (références, textes recherchés, difficultés rencontrées...)"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/70 text-gray-900 placeholder:text-gray-400 text-sm transition hover:border-[#3EA7DE]/40 focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 outline-none resize-y"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#FF7F36] rounded-full hover:bg-[#e86f2a] transition shadow-sm hover:shadow-md active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        Envoyer la demande
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Coordonnées et informations juridiques */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Nous contacter
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#3EA7DE]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#3EA7DE]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          Email
                        </p>
                        <a
                          href="mailto:support@m-impot.fr"
                          className="text-gray-800 hover:text-[#FF7F36] transition"
                        >
                          contact@mimpôt.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FF7F36]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#FF7F36]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          Téléphone (assistance juridique)
                        </p>
                        <a
                          href="tel:+33123456789"
                          className="text-gray-800 hover:text-[#FF7F36] transition"
                        >
                          +237 699 99 99 99
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#3EA7DE]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#3EA7DE]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          Siège
                        </p>
                        <address className="not-italic text-gray-800">
                          123 Immeuble Air France, <br />Bonandjo Douala
                        </address>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Encart spécifique aux contenus juridiques */}
                <div className="bg-[#3EA7DE]/5 rounded-3xl p-8 border border-[#3EA7DE]/10">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#3EA7DE]" />
                    Notre base documentaire
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#FF7F36]" />
                      <span>Code général des impôts &amp; annotations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FF7F36]" />
                      <span>Codes de droit commercial, civil et privé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#FF7F36]" />
                      <span>Préparation aux concours (CRFPA, ENM, etc.)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500">
                    Besoin d’un extrait ou d’une analyse ? Notre équipe de juristes est à votre disposition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appel à l'action - orienté juridique */}
        <section className="py-16 border-t border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Accédez à toute la richesse du droit et de la fiscalité
            </h2>
            <p className="text-gray-600 mb-6">
              Plus de 50 000 avocats, experts-comptables et juristes utilisent M. Impôt au quotidien.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-[#FF7F36] rounded-full hover:bg-[#e86f2a] transition shadow-sm hover:shadow-md"
            >
              Démarrer l’essai gratuit
            </a>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}