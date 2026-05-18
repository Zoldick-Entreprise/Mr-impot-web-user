"use client";

import { useState, Suspense, useEffect } from "react";
import Link from "next/link";
import {
  Video as VideoIcon,
  Search,
  Filter,
  X,
  Play,
  Clock,
  Eye,
  Heart,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { Video } from "@/types/video";
import Categories from "@/components/categories";



function VideosContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const [videos, setVideos] = useState<Video[]>([]);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || video.category.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  

  const hasActiveFilters = selectedCategory !== "all" || searchQuery !== "";

  //fonction pour récupérer les vidéos depuis l'API
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        console.log("Vidéos récupérées :", data);
        setVideos(data.data);

      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos :", error);
      }
    };

    fetchVideos();
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Vidéos éducatives</h1>
        <p className="text-gray-500 mt-1">
          Apprenez à votre rythme avec nos experts fiscaux
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une vidéo..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
            />
          </div>
          <Button
            variant="outline"
            size="md"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>

        <div className="hidden sm:flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Filter className="w-4 h-4" />
              Catégories :
            </span>
            <Categories
  selectedCategory={selectedCategory}
  onSelect={(cat) => setSelectedCategory(cat)}
/>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-[#F49600] hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Effacer les filtres
            </button>
          )}
        </div>

        {showFilters && (
          <Card className="border border-gray-200 p-4 sm:hidden">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Catégorie
              </label>
              <div className="flex flex-wrap gap-2">
                {videos.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.category.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                      ${
                        selectedCategory === cat.id
                          ? "bg-[#3DA7E3] text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    {cat.category.name}
                  </button>
                ))}
              </div>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full mt-2"
                >
                  Effacer les filtres
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filteredVideos.length} vidéo(s) trouvée(s)
          </p>
        </div>

        {filteredVideos.length === 0 ? (
          <Card className="border border-gray-200 text-center py-12">
            <VideoIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Aucune vidéo trouvée
            </h3>
            <p className="text-gray-500 text-sm">
              Essayez de modifier vos filtres ou votre recherche
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="mt-4"
            >
              Voir toutes les vidéos
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVideos.map((video) => (
              <Link
                key={video.id}
                href={`/dashboard/videos/${video.id}`}
                className="group"
              >
                <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-lg transition-all overflow-hidden p-0 h-full flex flex-col">
                  <div className="relative bg-gray-900 aspect-video">
                    <img
                      src={
                        video.thumbnail_url ||
                        "https://via.placeholder.com/640x360?text=M+Impôt"
                      }
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/640x360?text=M+Impôt";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-[#3DA7E3] transition-colors">
                        <Play className="w-5 h-5 text-gray-800 group-hover:text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {Math.floor(video.duration / 60)}:
                      {(video.duration % 60).toString().padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#3DA7E3] transition-colors line-clamp-2 flex-1">
                        {video.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("Ajouter aux favoris", video.id);
                        }}
                        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                      >
                        <Heart className="w-4 h-4 text-gray-400 hover:text-[#F49600]" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-1">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <Badge variant="default" size="sm">
                        {video.category.name}
                      </Badge>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views_count.toLocaleString()} vues
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideosPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3DA7E3]"></div>
        </div>
      }
    >
      <VideosContent />
    </Suspense>
  );
}
