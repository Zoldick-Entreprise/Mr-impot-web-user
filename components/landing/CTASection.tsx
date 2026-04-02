"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3EA7DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF7F36]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#FF7F36]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge optionnel (cohérence avec les sections précédentes) */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-6">
          Démarrez maintenant
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Prêt à simplifier votre gestion ?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Rejoignez des milliers d&apos;utilisateurs et accédez à toutes nos
          ressources dès aujourd&apos;hui.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        {/* Ligne décorative en bas (optionnelle) */}
        <div className="mt-12 h-1 w-20 bg-gradient-to-r from-[#3EA7DE] to-[#FF7F36] rounded-full mx-auto" />
      </div>
    </section>
  );
}
