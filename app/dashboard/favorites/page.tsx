"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  FileText,
  Video,
  Trash2,
  Download,
  Eye,
  Clock,
  Play,
  X,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

// Types
interface FavoriteDocument {
  id: string;
  type: "document";
  title: string;
  description: string;
  category: string;
  format: string;
  views: number;
  addedAt: string;
}

interface FavoriteVideo {
  id: string;
  type: "video";
  title: string;
  description: string;
  category: string;
  duration: number;
  views: number;
  thumbnail: string;
  addedAt: string;
}

type Favorite = FavoriteDocument | FavoriteVideo;

export default function FavoritesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "documents" | "videos">(
    "all",
  );
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Remplacer par appel API Laravel
  // const [favorites, setFavorites] = useState<Favorite[]>([]);
  // useEffect(() => {
  //   fetchFavorites();
  // }, []);

  // Données mock pour les favoris
  const [favorites, setFavorites] = useState<Favorite[]>([
    {
      id: "1",
      type: "document",
      title: "Loi de Finances 2025",
      description:
        "Loi de finances pour l'année 2025, incluant les nouvelles dispositions fiscales",
      category: "Droit Fiscal",
      format: "PDF",
      views: 3450,
      addedAt: "2025-01-15",
    },
    {
      id: "2",
      type: "video",
      title: "Comprendre sa déclaration d'impôts",
      description:
        "Tutoriel complet pour remplir sa déclaration d'impôts en ligne",
      category: "Droit Fiscal",
      duration: 450,
      views: 12500,
      thumbnail: "",
      addedAt: "2025-01-20",
    },
    {
      id: "3",
      type: "document",
      title: "Code Général des Impôts",
      description: "Version consolidée du Code Général des Impôts",
      category: "Droit Fiscal",
      format: "PDF",
      views: 5670,
      addedAt: "2025-01-10",
    },
    {
      id: "4",
      type: "video",
      title: "Les avantages fiscaux pour les entreprises",
      description:
        "Découvrez les dispositifs de défiscalisation pour les entreprises",
      category: "Droit des Sociétés",
      duration: 720,
      views: 8900,
      thumbnail: "",
      addedAt: "2025-01-25",
    },
  ]);

  const removeFavorite = (id: string) => {
    // TODO: Appel API pour supprimer des favoris
    // await fetch(`/api/favorites/${id}`, { method: 'DELETE' })
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const filteredFavorites = favorites.filter((fav) => {
    if (activeTab === "documents") return fav.type === "document";
    if (activeTab === "videos") return fav.type === "video";
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-black">Mes favoris</h1>
        <p className="text-black/60 mt-1">
          Retrouvez tous vos documents et vidéos préférés
        </p>
      </div>

      {/* Onglets */}
      <div className="flex items-center gap-1 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === "all"
              ? "border-[#3DA7E3] text-[#3DA7E3]"
              : "border-transparent text-black/60 hover:text-black"
          }`}
        >
          Tous ({favorites.length})
        </button>
        <button
          onClick={() => setActiveTab("documents")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-1 ${
            activeTab === "documents"
              ? "border-[#3DA7E3] text-[#3DA7E3]"
              : "border-transparent text-black/60 hover:text-black"
          }`}
        >
          <FileText className="w-4 h-4" />
          Documents ({favorites.filter((f) => f.type === "document").length})
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-1 ${
            activeTab === "videos"
              ? "border-[#3DA7E3] text-[#3DA7E3]"
              : "border-transparent text-black/60 hover:text-black"
          }`}
        >
          <Video className="w-4 h-4" />
          Vidéos ({favorites.filter((f) => f.type === "video").length})
        </button>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3DA7E3]"></div>
        </div>
      )}

      {/* Liste des favoris */}
      {!isLoading && filteredFavorites.length === 0 && (
        <Card className="border border-gray-200 text-center py-12">
          <Heart className="w-12 h-12 text-black/20 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-black mb-1">Aucun favori</h3>
          <p className="text-black/50 text-sm">
            Vous n&apos;avez pas encore ajouté de documents ou vidéos en
            favoris.
          </p>
          <Link href="/dashboard/documents">
            <Button
              variant="primary"
              className="mt-4 bg-[#F49600] hover:bg-[#F49600]/90"
            >
              Découvrir des documents
            </Button>
          </Link>
        </Card>
      )}

      {!isLoading && filteredFavorites.length > 0 && (
        <div className="space-y-3">
          {filteredFavorites.map((favorite) => (
            <Link
              key={`${favorite.type}-${favorite.id}`}
              href={`/dashboard/${favorite.type}s/${favorite.id}`}
              className="block"
            >
              <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Left section */}
                  <div className="flex items-start gap-3 flex-1">
                    {/* Icon */}
                    <div
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{
                        backgroundColor:
                          favorite.type === "document"
                            ? "#3DA7E310"
                            : "#F4960010",
                      }}
                    >
                      {favorite.type === "document" ? (
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

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-black group-hover:text-[#3DA7E3] transition-colors">
                          {favorite.title}
                        </h3>
                        <Badge variant="default" size="sm">
                          {favorite.type === "document"
                            ? favorite.format
                            : "Vidéo"}
                        </Badge>
                      </div>
                      <p className="text-sm text-black/60 mt-1 line-clamp-2">
                        {favorite.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <Badge variant="default" size="sm">
                          {favorite.category}
                        </Badge>
                        {favorite.type === "video" && (
                          <span className="text-xs text-black/40 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {Math.floor(favorite.duration / 60)}:
                            {(favorite.duration % 60)
                              .toString()
                              .padStart(2, "0")}
                          </span>
                        )}
                        <span className="text-xs text-black/40 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {favorite.views.toLocaleString()} vues
                        </span>
                        <span className="text-xs text-black/40">
                          Ajouté le {formatDate(favorite.addedAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {favorite.type === "document" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("Télécharger", favorite.id);
                        }}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Télécharger
                      </Button>
                    )}
                    {favorite.type === "video" && (
                      <Button
                        variant="primary"
                        size="sm"
                        className="bg-[#F49600] hover:bg-[#F49600]/90"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("Regarder", favorite.id);
                        }}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Regarder
                      </Button>
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFavorite(favorite.id);
                      }}
                      className="p-2 rounded-lg hover:bg-red-50 transition-colors group/delete"
                    >
                      <Trash2 className="w-4 h-4 text-black/40 group-hover/delete:text-red-500" />
                    </button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Message si liste vide après filtrage */}
      {!isLoading && favorites.length > 0 && filteredFavorites.length === 0 && (
        <Card className="border border-gray-200 text-center py-8">
          <X className="w-10 h-10 text-black/20 mx-auto mb-2" />
          <p className="text-black/60 text-sm">
            Aucun {activeTab === "documents" ? "document" : "vidéo"} dans vos
            favoris
          </p>
          <button
            onClick={() => setActiveTab("all")}
            className="text-sm text-[#3DA7E3] hover:underline mt-2"
          >
            Voir tous les favoris
          </button>
        </Card>
      )}
    </div>
  );
}
