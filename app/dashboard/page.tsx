"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Video,
  Heart,
  ChevronRight,
  Play,
  Clock,
  Eye,
  Download,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { documents, videos, categories } from "@/data/mockData";

// Type pour les favoris (union de Document et Video)
type FavoriteItem = (typeof documents)[0] | (typeof videos)[0];

export default function DashboardPage() {
  const [favorites] = useState<FavoriteItem[]>([
    documents[0],
    documents[2],
    videos[0],
  ]);

  // Fonction pour vérifier si un item est un document
  const isDocument = (item: FavoriteItem): item is (typeof documents)[0] => {
    return "format" in item;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bonjour, Pierre</h1>
        <p className="text-gray-500 mt-1">
          Découvrez les dernières ressources juridiques
        </p>
      </div>

      {/* Catégories principales */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Catégories</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.id}
              href={`/dashboard/documents?category=${category.slug}`}
              className="group"
            >
              <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all cursor-pointer">
                <div className="text-center p-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{
                      backgroundColor: `${category.id === "1" ? "#3DA7E3" : "#F49600"}10`,
                    }}
                  >
                    <FileText
                      className="w-6 h-6"
                      style={{
                        color: category.id === "1" ? "#3DA7E3" : "#F49600",
                      }}
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#3DA7E3] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {category.subCategories?.length || 0} sous-catégories
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Documents récents */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Documents récents
          </h2>
          <Link
            href="/dashboard/documents"
            className="text-sm text-[#3DA7E3] hover:underline flex items-center gap-1"
          >
            Voir tout
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.slice(0, 3).map((doc) => (
            <Link
              key={doc.id}
              href={`/dashboard/documents/${doc.id}`}
              className="group"
            >
              <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all h-full">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "#3DA7E310" }}
                    >
                      <FileText
                        className="w-5 h-5"
                        style={{ color: "#3DA7E3" }}
                      />
                    </div>
                    <Badge variant="default" size="sm">
                      {doc.format}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {doc.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {doc.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {doc.downloads}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Favoris */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Mes favoris</h2>
          <Link
            href="/dashboard/favorites"
            className="text-sm text-[#3DA7E3] hover:underline flex items-center gap-1"
          >
            Voir tout
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item, index) => {
            const isDoc = isDocument(item);
            return (
              <Link
                key={item.id || index}
                href={
                  isDoc
                    ? `/dashboard/documents/${item.id}`
                    : `/dashboard/videos/${item.id}`
                }
                className="group"
              >
                <Card className="border border-gray-200 hover:border-[#F49600] hover:shadow-md transition-all h-full">
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: "#F4960010" }}
                      >
                        {isDoc ? (
                          <FileText
                            className="w-5 h-5"
                            style={{ color: "#F49600" }}
                          />
                        ) : (
                          <Video
                            className="w-5 h-5"
                            style={{ color: "#F49600" }}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {isDoc ? item.category.name : item.category}
                        </p>
                      </div>
                      <Heart className="w-4 h-4 fill-[#F49600] text-[#F49600]" />
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Vidéos récentes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Vidéos recommandées
          </h2>
          <Link
            href="/dashboard/videos"
            className="text-sm text-[#3DA7E3] hover:underline flex items-center gap-1"
          >
            Voir tout
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.slice(0, 3).map((video) => (
            <Link
              key={video.id}
              href={`/dashboard/videos/${video.id}`}
              className="group"
            >
              <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all overflow-hidden">
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/640x360?text=Mr+Impôt";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#3DA7E3] ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {Math.floor(video.duration / 60)}:
                    {(video.duration % 60).toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <Badge variant="default" size="sm">
                      {video.category}
                    </Badge>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
