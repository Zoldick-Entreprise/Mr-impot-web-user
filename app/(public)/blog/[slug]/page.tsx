"use client";

import { notFound, useParams } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { articles } from "@/types/articles";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* En-tête avec retour */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#3EA7DE] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux articles
            </Link>
            <div className="flex items-center gap-2 text-xs text-[#3EA7DE] mb-3">
              <span className="bg-[#3EA7DE]/10 px-2 py-0.5 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Contenu de l'article */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg prose-gray max-w-none">
              {/* Le contenu HTML est injecté via dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            {/* Signature / appel à l'action */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm">
                Cet article vous a été utile ? Partagez-le ou consultez nos autres ressources.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#3EA7DE] text-white rounded-xl font-medium hover:bg-[#3EA7DE]/90 transition-colors"
              >
                Rejoindre M. Impôt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}