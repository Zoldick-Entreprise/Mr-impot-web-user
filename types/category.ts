export interface Category {
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