import { User } from "./user";
import { Category } from "./category";

export interface Document {
  id: string;
  title: string;
  description: string;
  status: string;
  document_views: number;
  published_at: Date;
  created_at: Date;
  category: Category;
  subCategory?: string;
  format: "PDF" | "DOC" | "DOCX" | "TXT";
  url: string;
  thumbnail?: string;
  uploaded_by: User[];
  files: {
    fr: string;
    en: string;
  };
  downloads: number;
  isFavorite?: boolean;
}
