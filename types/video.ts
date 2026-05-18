export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail_url: string;
  duration: number;
  category: Category;
  views_count: number;
  uploadedAt: Date;
  isFavorite?: boolean;
}

export interface VideoCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  childrens?: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}


