"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FolderTree,
  FileText,
  Video,
  ChevronRight,
  Eye,
  Download,
  Heart,
  ArrowLeft,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { categories, documents } from "@/data/mockData";

interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  subCategories?: { id: string; name: string; slug: string }[];
}

interface Document {
  id: string;
  title: string;
  description: string;
  category: Category;
  format: string;
  views: number;
  downloads: number;
}

export default function CategoriesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("cat");

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [categoryDocs, setCategoryDocs] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simuler chargement des documents par catégorie
  useEffect(() => {
    if (categorySlug) {
      const category = categories.find((cat) => cat.slug === categorySlug);
      if (category) {
        setSelectedCategory(category);
        loadCategoryDocuments(category);
      } else {
        setSelectedCategory(null);
        setCategoryDocs([]);
      }
    } else {
      setSelectedCategory(null);
      setCategoryDocs([]);
    }
  }, [categorySlug]);

  const loadCategoryDocuments = async (category: Category) => {
    setIsLoading(true);

    // TODO: Remplacer par appel API Laravel
    // const response = await fetch(`/api/documents?category=${category.slug}`);
    // const data = await response.json();

    setTimeout(() => {
      const filteredDocs = documents.filter(
        (doc) => doc.category.name === category.name,
      );
      setCategoryDocs(filteredDocs);
      setIsLoading(false);
    }, 300);
  };

  const handleCategoryClick = (category: Category) => {
    router.push(`/dashboard/categories?cat=${category.slug}`);
  };

  const handleBackToCategories = () => {
    router.push("/dashboard/categories");
  };

  // Si une catégorie est sélectionnée, afficher les documents
  if (selectedCategory) {
    return (
      <div className="space-y-6">
        {/* Header avec retour */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToCategories}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-black/60" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-black">
              {selectedCategory.name}
            </h1>
            <p className="text-black/60 mt-1">
              {selectedCategory.description ||
                `Explorez tous les documents de la catégorie ${selectedCategory.name}`}
            </p>
          </div>
        </div>

        {/* Sous-catégories si disponibles */}
        {selectedCategory.subCategories &&
          selectedCategory.subCategories.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-black mb-3">
                Sous-catégories
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-[#3DA7E3]/10 rounded-full text-sm text-black/70 hover:text-[#3DA7E3] transition-colors"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          )}

        {/* Documents de la catégorie */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-black">
              Documents ({categoryDocs.length})
            </h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3DA7E3]"></div>
            </div>
          ) : categoryDocs.length === 0 ? (
            <Card className="border border-gray-200 text-center py-12">
              <FileText className="w-12 h-12 text-black/20 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-black mb-1">
                Aucun document
              </h3>
              <p className="text-black/50 text-sm">
                Aucun document n&apos;est disponible dans cette catégorie pour
                le moment.
              </p>
            </Card>
          ) : (
            <div className="space-y-3">
              {categoryDocs.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/dashboard/documents/${doc.id}`}
                  className="block"
                >
                  <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: "#3DA7E310" }}
                        >
                          <FileText
                            className="w-5 h-5"
                            style={{ color: "#3DA7E3" }}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-black group-hover:text-[#3DA7E3] transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-black/60 mt-0.5 line-clamp-1">
                            {doc.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <Badge variant="default" size="sm">
                              {doc.format}
                            </Badge>
                            <span className="text-xs text-black/40 flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {doc.views} vues
                            </span>
                            <span className="text-xs text-black/40 flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              {doc.downloads} téléchargements
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("Ajouter aux favoris", doc.id);
                          }}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Heart className="w-4 h-4 text-black/40 hover:text-[#F49600]" />
                        </button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Télécharger
                        </Button>
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

  // Vue principale : toutes les catégories
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-black">Catégories</h1>
        <p className="text-black/60 mt-1">
          Parcourez tous nos documents et vidéos par catégorie
        </p>
      </div>

      {/* Grille des catégories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className="group text-left"
          >
            <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all h-full">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "#3DA7E310" }}
                >
                  <FolderTree
                    className="w-6 h-6"
                    style={{ color: "#3DA7E3" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-[#3DA7E3] transition-colors">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-black/60 mt-1 line-clamp-2">
                      {category.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs text-black/40">
                      {
                        documents.filter(
                          (d) => d.category.name === category.name,
                        ).length
                      }{" "}
                      documents
                    </span>
                    {category.subCategories &&
                      category.subCategories.length > 0 && (
                        <span className="text-xs text-black/40">
                          {category.subCategories.length} sous-catégories
                        </span>
                      )}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-black/30 group-hover:text-[#3DA7E3] transition-colors flex-shrink-0" />
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Section vidéos par catégorie */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-black mb-4">
          Vidéos populaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.slice(0, 3).map((category) => (
            <button
              key={`video-${category.id}`}
              onClick={() =>
                router.push(`/dashboard/videos?cat=${category.slug}`)
              }
              className="group text-left"
            >
              <Card className="border border-gray-200 hover:border-[#F49600] hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#F49600]/10">
                    <Video className="w-5 h-5 text-[#F49600]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-black group-hover:text-[#F49600] transition-colors">
                      Vidéos {category.name}
                    </h3>
                    <p className="text-xs text-black/40">
                      Tutoriels et formations
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-black/30" />
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
