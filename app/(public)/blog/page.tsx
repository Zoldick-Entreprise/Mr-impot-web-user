"use client";

import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { articles } from "@/types/articles";

export default function BlogPage() {
  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero identique */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF7F36] bg-[#FF7F36]/10 rounded-full mb-4">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Actualités et <span className="text-[#FF7F36]">conseils juridiques</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Restez informé des dernières évolutions législatives et des bonnes pratiques.
              </p>
            </div>
          </div>
        </section>

        {/* Grille d'articles */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#3EA7DE] mb-3">
                      <span className="bg-[#3EA7DE]/10 px-2 py-0.5 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#3EA7DE] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-4 inline-block text-sm font-medium text-[#3EA7DE] hover:underline"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}