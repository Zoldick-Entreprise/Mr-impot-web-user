export type Category = {
    id: string;
    name: { en: string; fr: string };
    slug: string;
    icon: string;
    description: string;
    subCategories?: {
        id: string;
        name: { en: string; fr: string };
        slug: string;
        categoryId: string;
    }[];
};

export type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: number;
  category: string;
  views: number;
  uploadedAt: Date;
  isFavorite?: boolean;
}

export type Document = {
  id: string;
  title: string;
    description: string;
    category: string;
    subCategory?: string;
    format: "PDF" | "DOC" | "DOCX" | "TXT";
    url: string;
    thumbnail?: string;
    uploaded_by: string;
    uploadedAt: Date;
    downloads: number;
    isFavorite?: boolean;
    views: number;
}