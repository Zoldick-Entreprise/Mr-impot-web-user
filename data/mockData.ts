import { Document} from "@/utils/definition";
import { Category } from "@/types/category";
import { Video } from "@/utils/definition";

export const categories: Category[] = [
  {
    id: "1",
    name: "Droit Fiscal",
    slug: "droit-fiscal",
    icon: "Landmark",
    description: "Documents et ressources sur le droit fiscal",
  },
  {
    id: "2",
    name: "Droit des Sociétés",
    slug: "droit-societes",
    icon: "Building2",
    description: "Droit des sociétés commerciales",
  },
  {
    id: "3",
    name: "Droit du Travail",
    slug: "droit-travail",
    icon: "Briefcase",
    description: "Législation sociale et droit du travail",
  },
  {
    id: "4",
    name: "Jurisprudence",
    slug: "jurisprudence",
    icon: "Scale",
    description: "Décisions de justice et jurisprudence",
  },
];

export const documents: Document[] = [
  {
    id: "1",
    title: "Loi de Finances 2025",
    description:
      "Loi de finances pour l'année 2025, incluant les nouvelles dispositions fiscales",
    category: categories[0].id,
    subCategory: "Impôt sur le revenu",
    format: "PDF",
    url: "/documents/loi-finances-2025.pdf",
    thumbnail: "/thumbnails/loi-finances.jpg",
    uploaded_by: "Ministère des Finances",
    uploadedAt: new Date("2025-01-15"),
    downloads: 1250,
    views: 3450,
  },
  {
    id: "2",
    title: "Guide pratique TVA 2025",
    description:
      "Guide complet sur la TVA, taux applicables et obligations déclaratives",
    category: categories[0].id,
    subCategory: "TVA",
    format: "PDF",
    url: "/documents/guide-tva-2025.pdf",
    thumbnail: "/thumbnails/guide-tva.jpg",
    uploaded_by: "Direction Générale des Impôts",
    uploadedAt: new Date("2025-02-01"),
    downloads: 890,
    views: 2100,
  },
  {
    id: "3",
    title: "Code Général des Impôts",
    description: "Version consolidée du Code Général des Impôts",
    category: categories[0].id,
    format: "PDF",
    url: "/documents/cgi-2025.pdf",
    thumbnail: "/thumbnails/cgi.jpg",
    uploaded_by: "Ministère des Finances",
    uploadedAt: new Date("2025-01-10"),
    downloads: 2340,
    views: 5670,
  },
  {
    id: "4",
    title: "Arrêté sur les obligations comptables",
    description:
      "Arrêté ministériel relatif aux obligations comptables des entreprises",
    category: categories[1].id,
    format: "PDF",
    url: "/documents/arrete-comptable.pdf",
    thumbnail: "/thumbnails/arrete.jpg",
    uploaded_by: "Ministère de l'Économie",
    uploadedAt: new Date("2025-01-20"),
    downloads: 567,
    views: 1230,
  },
];

export const videos: Video[] = [
  {
    id: "v1",
    title: "Comprendre sa déclaration d'impôts",
    description:
      "Tutoriel complet pour remplir sa déclaration d'impôts en ligne",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/thumbnails/video-impots.jpg",
    duration: 450,
    category: "Droit Fiscal",
    views: 12500,
    uploadedAt: new Date("2025-01-05"),
  },
  {
    id: "v2",
    title: "Les avantages fiscaux pour les entreprises",
    description:
      "Découvrez les dispositifs de défiscalisation pour les entreprises",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/thumbnails/video-entreprise.jpg",
    duration: 720,
    category: "Droit des Sociétés",
    views: 8900,
    uploadedAt: new Date("2025-01-12"),
  },
];

export const recentActivities = [
  {
    id: "1",
    user: "John Doe",
    action: "download",
    document: "Loi de Finances 2025",
    time: new Date(Date.now() - 2 * 60 * 1000),
  },
  {
    id: "2",
    user: "Marie Curie",
    action: "search",
    document: "TVA",
    time: new Date(Date.now() - 20 * 60 * 1000),
  },
  {
    id: "3",
    user: "Pierre Martin",
    action: "view",
    document: "Code Général des Impôts",
    time: new Date(Date.now() - 60 * 60 * 1000),
  },
];
