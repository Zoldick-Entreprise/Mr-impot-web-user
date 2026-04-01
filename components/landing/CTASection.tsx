"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Prêt à simplifier votre gestion ?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Rejoignez des milliers d&apos;utilisateurs et accédez à toutes nos
          ressources dès aujourd&apos;hui.
        </p>
        <Link href="/register">
          <Button variant="primary" size="lg">
            Commencer maintenant
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
        <p className="mt-4 text-sm text-gray-500">
          Gratuit pendant 14 jours, sans engagement
        </p>
      </div>
    </section>
  );
}
