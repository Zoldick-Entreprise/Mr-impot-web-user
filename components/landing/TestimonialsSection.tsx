"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Laurent",
    role: "Expert-comptable",
    content:
      "Mr Impôt a révolutionné ma façon de travailler. Tous les documents fiscaux sont centralisés et faciles d'accès.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Marie+Laurent&background=3EA7DE&color=fff",
  },
  {
    name: "Thomas Dubois",
    role: "Avocat fiscaliste",
    content:
      "Une plateforme indispensable pour ma pratique quotidienne. Les vidéos éducatives sont particulièrement utiles.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Thomas+Dubois&background=FF7F36&color=fff",
  },
  {
    name: "Sophie Martin",
    role: "Chef d'entreprise",
    content:
      "Grâce à Mr Impôt, je gère mes obligations fiscales en toute sérénité. Un outil complet et intuitif.",
    rating: 4,
    avatar:
      "https://ui-avatars.com/api/?name=Sophie+Martin&background=3EA7DE&color=fff",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#1577ac] relative overflow-hidden"
    >
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ffc86f]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section avec badge et ligne décorative */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1577ac] bg-white/90 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ce que disent nos{" "}
            <span className="text-[#ffc86f]">utilisateurs</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#ffc86f] to-white rounded-full mx-auto" />
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Des milliers de professionnels nous font confiance au quotidien.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              {/* Icône de citation décorative */}
              <div className="absolute top-4 right-4 text-6xl font-serif text-[#1577ac]/10 select-none pointer-events-none">
                „
              </div>

              {/* En-tête avec avatar et nom */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full ring-2 ring-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#1577ac] font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Étoiles */}
              <div className="flex mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-[#F09705] text-[#F09705]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Citation */}
              <p className="text-gray-600 leading-relaxed relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Ligne décorative au survol (optionnelle) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ffc86f] to-[#1577ac] transition-all duration-300 group-hover:w-1/3 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}