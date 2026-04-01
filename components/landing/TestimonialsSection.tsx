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
      className="py-20 bg-[#1577ac] border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ce que disent nos{" "}
            <span className="text-[#ffc86f]">utilisateurs</span>
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Des milliers de professionnels nous font confiance au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-[#F09705] text-[#F09705]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
