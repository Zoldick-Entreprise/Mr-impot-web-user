"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Heart,
  Share2,
  Eye,
  Calendar,
  User,
  FileText,
  BookOpen,
  CheckCircle,
  Loader2,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { documents } from "@/data/mockData";

interface DocumentDetail {
  id: string;
  title: string;
  description: string;
  category: { name: string; slug: string };
  subCategory?: string;
  format: string;
  url: string;
  thumbnail?: string;
  uploadedBy: string;
  uploadedAt: Date;
  downloads: number;
  views: number;
  isFavorite?: boolean;
}

export default function DocumentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const documentId = params.id as string;

  const [document, setDocument] = useState<DocumentDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Charger le document
  useEffect(() => {
    const loadDocument = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/documents/${documentId}`);
        const data = await response.json();
        setDocument(data.data);
      } catch (error) {
        setDocument(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadDocument();
  }, [documentId]);

  const handleDownload = async () => {
    setIsDownloading(true);

    // TODO: Remplacer par appel API Laravel
    // const response = await fetch(`/api/documents/${documentId}/download`);
    // const blob = await response.blob();
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = `${document?.title}.pdf`;
    // document.body.appendChild(a);
    // a.click();
    // window.URL.revokeObjectURL(url);
    // document.body.removeChild(a);

    setTimeout(() => {
      console.log("Téléchargement du document:", document?.title);
      setIsDownloading(false);
    }, 1000);
  };

  const handleToggleFavorite = async () => {
    // TODO: Appel API pour ajouter/retirer des favoris
    // await fetch(`/api/favorites/${documentId}`, {
    //   method: isFavorite ? 'DELETE' : 'POST',
    // });
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document?.title,
        text: document?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-[#3DA7E3] animate-spin mx-auto mb-4" />
          <p className="text-black/60">Chargement du document...</p>
        </div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="text-center py-20">
        <FileText className="w-16 h-16 text-black/20 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-black mb-2">
          Document non trouvé
        </h2>
        <p className="text-black/60 mb-6">
          Le document que vous recherchez n&apos;existe pas ou a été supprimé.
        </p>
        <Link href="/dashboard/documents">
          <Button
            variant="primary"
            className="bg-[#F49600] hover:bg-[#F49600]/90"
          >
            Retour aux documents
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header avec retour */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-black/60" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-black">{document.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Link
                href={`/dashboard/categories?cat=${document.category.slug}`}
                className="text-sm text-[#3DA7E3] hover:underline"
              >
                {document.category.name}
              </Link>
              {document.subCategory && (
                <>
                  <span className="text-black/40">•</span>
                  <span className="text-sm text-black/60">
                    {document.subCategory}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleFavorite}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite
                ? "bg-[#F49600]/10 text-[#F49600]"
                : "hover:bg-gray-100 text-black/60"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? "fill-[#F49600]" : ""}`}
            />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-black/60"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visualisation PDF */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#3DA7E3]" />
                <span className="text-sm text-black/60">
                  Aperçu du document
                </span>
              </div>
              <Badge variant="default" size="sm">
                {document.format}
              </Badge>
            </div>
            <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center">
              {/* TODO: Intégrer un vrai visualiseur PDF */}
              <div className="text-center p-8">
                <FileText className="w-20 h-20 text-black/20 mx-auto mb-4" />
                <p className="text-black/60 mb-4">Visualiseur PDF intégré</p>
                <Button
                  variant="primary"
                  onClick={handleDownload}
                  isLoading={isDownloading}
                  className="bg-[#F49600] hover:bg-[#F49600]/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le PDF
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Informations du document */}
        <div className="space-y-4">
          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-4">
              Informations
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Eye className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Vues</p>
                  <p className="font-medium text-black">{document.views}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Download className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Téléchargements</p>
                  <p className="font-medium text-black">{document.downloads}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Publié par</p>
                  <p className="font-medium text-black">
                    {document.uploadedBy}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Date de publication</p>
                  <p className="font-medium text-black">
                    {new Date(document.uploadedAt).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Description
            </h3>
            <p className="text-black/70 text-sm leading-relaxed">
              {document.description}
            </p>
          </Card>

          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-3">Actions</h3>
            <div className="space-y-2">
              <Button
                variant="primary"
                className="w-full bg-[#F49600] hover:bg-[#F49600]/90"
                onClick={handleDownload}
                isLoading={isDownloading}
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger le document
              </Button>
              <Link href="/dashboard/documents">
                <Button variant="outline" className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Voir tous les documents
                </Button>
              </Link>
            </div>
          </Card>

          {/* Documents recommandés */}
          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-3">
              Vous pourriez aussi aimer
            </h3>
            <div className="space-y-3">
              {documents
                .filter(
                  (doc) =>
                    doc.id !== document.id &&
                    doc.category === document.category.name,
                )
                .slice(0, 2)
                .map((relatedDoc) => (
                  <Link
                    key={relatedDoc.id}
                    href={`/dashboard/documents/${relatedDoc.id}`}
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-[#3DA7E3] mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-black hover:text-[#3DA7E3] transition-colors">
                          {relatedDoc.title}
                        </p>
                        <p className="text-xs text-black/40">
                          {relatedDoc.views} vues • {relatedDoc.downloads} téléchargements
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
