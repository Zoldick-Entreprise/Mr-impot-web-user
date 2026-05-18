"use client";

import { useEffect, useState } from "react";
import { Category } from "@/types/category"

type Props = {
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function Categories({ selectedCategory, onSelect }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();

        setCategories(data.data);
        console.log("Catégories récupérées :", data);
      } catch (error) {
        console.error("Erreur catégories :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">Chargement...</p>;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* ALL */}
      <button
        onClick={() => onSelect("all")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition
          ${
            selectedCategory === "all"
              ? "bg-[#3DA7E3] text-white"
              : "bg-gray-100 text-gray-600"
          }
        `}
      >
        Toutes
      </button>

      {/* API categories */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.name)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition
            ${
              selectedCategory === cat.name
                ? "bg-[#3DA7E3] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}