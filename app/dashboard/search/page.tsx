/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  FileText,
  Video,
  X,
  Filter,
  ChevronDown,
  Eye,
  Download,
  Heart,
  Clock,
  Play,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { documents, videos } from "@/data/mockData";

type ResultType = "all" | "document" | "video";

interface SearchResult {
  id: string;
  type: "document" | "video";
  title: string;
  description: string;
  category: string;
  format?: string;
  duration?: number;
  views: number;
  thumbnail?: string;
  downloads?: number;
}

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<ResultType>("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const performSearch = async (query: string) => {
    setIsLoading(true);

    setTimeout(() => {
      const mockResults: SearchResult[] = [
        ...documents
          .filter(
            (doc) =>
              doc.title.toLowerCase().includes(query.toLowerCase()) ||
              doc.description.toLowerCase().includes(query.toLowerCase()),
          )
          .map((doc) => ({
            id: doc.id,
            type: "document" as const,
            title: doc.title,
            description: doc.description,
            category: doc.category.name,
            format: doc.format,
            views: doc.views,
            downloads: doc.downloads,
          })),
        ...videos
          .filter(
            (video) =>
              video.title.toLowerCase().includes(query.toLowerCase()) ||
              video.description.toLowerCase().includes(query.toLowerCase()),
          )
          .map((video) => ({
            id: video.id,
            type: "video" as const,
            title: video.title,
            description: video.description,
            category: video.category,
            duration: video.duration,
            views: video.views,
            thumbnail: video.thumbnail,
          })),
      ];

      setResults(mockResults);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
      performSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setResults([]);
    router.push("/dashboard/search");
  };

  const filteredResults = results.filter((result) => {
    if (activeTab !== "all" && result.type !== activeTab) return false;
    if (selectedCategory && result.category !== selectedCategory) return false;
    return true;
  });

  const uniqueCategories = Array.from(new Set(results.map((r) => r.category)));

  const hasActiveFilters = selectedCategory !== "" || activeTab !== "all";

  const clearFilters = () => {
    setSelectedCategory("");
    setActiveTab("all");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Recherche</h1>
        <p className="text-gray-500 mt-1">
          Trouvez rapidement documents et vidéos
        </p>
      </div>

      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un document, une vidéo, un thème..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-2 focus:ring-[#3DA7E3]/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="bg-[#F49600] hover:bg-[#F49600]/90 sm:w-auto w-full"
          >
            <Search className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Rechercher</span>
          </Button>
        </div>
      </form>

      {(results.length > 0 || isLoading || initialQuery) && (
        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === "all"
                    ? "border-[#3DA7E3] text-[#3DA7E3]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Tous ({results.length})
              </button>
              <button
                onClick={() => setActiveTab("document")}
                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-1 whitespace-nowrap ${
                  activeTab === "document"
                    ? "border-[#3DA7E3] text-[#3DA7E3]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <FileText className="w-4 h-4" />
                Documents ({results.filter((r) => r.type === "document").length}
                )
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-1 whitespace-nowrap ${
                  activeTab === "video"
                    ? "border-[#3DA7E3] text-[#3DA7E3]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Video className="w-4 h-4" />
                Vidéos ({results.filter((r) => r.type === "video").length})
              </button>
            </div>

            <div className="hidden sm:flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Filter className="w-4 h-4" />
                  Filtrer par :
                </span>
                {uniqueCategories.length > 0 && (
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#3DA7E3] cursor-pointer"
                    >
                      <option value="">Toutes les catégories</option>
                      {uniqueCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                )}
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
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center justify-center gap-2 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
            </button>

            {showFilters && uniqueCategories.length > 0 && (
              <Card className="border border-gray-200 p-4 sm:hidden">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Catégorie
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                    >
                      <option value="">Toutes les catégories</option>
                      {uniqueCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="w-full"
                    >
                      Effacer les filtres
                    </Button>
                  )}
                </div>
              </Card>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {filteredResults.length} résultat(s) trouvé(s)
              {searchQuery && (
                <span className="font-medium text-gray-700">
                  {" "}
                  pour &quot;{searchQuery}&quot;
                </span>
              )}
            </p>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3DA7E3]"></div>
            </div>
          )}

          {!isLoading && filteredResults.length === 0 && (
            <Card className="border border-gray-200 text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-500 text-sm">
                Essayez avec d&apos;autres mots-clés ou modifiez vos filtres
              </p>
            </Card>
          )}

          {!isLoading && filteredResults.length > 0 && (
            <div className="space-y-3">
              {filteredResults.map((result) => (
                <Link
                  key={`${result.type}-${result.id}`}
                  href={`/dashboard/${result.type}s/${result.id}`}
                  className="block"
                >
                  <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div
                        className="p-2 rounded-lg flex-shrink-0 self-start"
                        style={{
                          backgroundColor:
                            result.type === "document"
                              ? "#3DA7E310"
                              : "#F4960010",
                        }}
                      >
                        {result.type === "document" ? (
                          <FileText
                            className="w-5 h-5"
                            style={{ color: "#3DA7E3" }}
                          />
                        ) : (
                          <Video
                            className="w-5 h-5"
                            style={{ color: "#F49600" }}
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-gray-900 group-hover:text-[#3DA7E3] transition-colors">
                            {result.title}
                          </h3>
                          <Badge
                            variant={
                              result.type === "document" ? "default" : "primary"
                            }
                            size="sm"
                          >
                            {result.type === "document" ? "PDF" : "Vidéo"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <Badge variant="default" size="sm">
                            {result.category}
                          </Badge>
                          {result.type === "document" && result.format && (
                            <Badge variant="default" size="sm">
                              {result.format}
                            </Badge>
                          )}
                          {result.type === "video" && result.duration && (
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {Math.floor(result.duration / 60)}:
                              {(result.duration % 60)
                                .toString()
                                .padStart(2, "0")}
                            </span>
                          )}
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {result.views.toLocaleString()} vues
                          </span>
                          {result.type === "document" && result.downloads && (
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              {result.downloads} téléch.
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("Ajouter aux favoris", result.id);
                          }}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Heart className="w-4 h-4 text-gray-400 hover:text-[#F49600]" />
                        </button>
                        {result.type === "document" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log("Télécharger", result.id);
                            }}
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Télécharger
                          </Button>
                        )}
                        {result.type === "video" && (
                          <Button
                            variant="primary"
                            size="sm"
                            className="bg-[#F49600] hover:bg-[#F49600]/90"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log("Regarder", result.id);
                            }}
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Regarder
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {!initialQuery && results.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Que cherchez-vous ?
          </h3>
          <p className="text-gray-500 text-sm text-center max-w-md">
            Recherchez des documents juridiques, des vidéos éducatives, ou
            parcourez par catégorie
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Loi de Finances",
              "TVA",
              "Droit des sociétés",
              "Jurisprudence",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setSearchQuery(suggestion);
                  router.push(
                    `/dashboard/search?q=${encodeURIComponent(suggestion)}`,
                  );
                  performSearch(suggestion);
                }}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3DA7E3]"></div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
