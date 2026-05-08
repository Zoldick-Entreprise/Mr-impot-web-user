"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import Card from "../common/Card";
import { categories } from "@/data/mockData";
import { useState, useEffect } from "react";
import api from "@/services/api";
import { Category } from "@/types";

export default function CardCategories() {
    const [categoriesData, setCategoriesData] = useState<Category[]>([]);


    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const token = localStorage.getItem("token");
            if (!token) {
              console.warn("No auth token found, skipping categories fetch.");
              return;
            }

            const response = await api.get("/categories");

            setCategoriesData(response.data.data);
            console.log("Categories data:", response.data.data);
          } catch (error) {
            console.error("Failed to fetch categories:", error);
          }
        }
    
        fetchCategories();
    }, [])


    return(
        <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Catégories</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categoriesData.slice(0, 4).map((category) => (
            <Link
              key={category.id}
              href={`/dashboard/documents?category=${category.slug}`}
              className="group"
            >
              <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all cursor-pointer">
                <div className="text-center p-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{
                      backgroundColor: `${category.id === "1" ? "#3DA7E3" : "#F49600"}10`,
                    }}
                  >
                    <FileText
                      className="w-6 h-6"
                      style={{
                        color: category.id === "1" ? "#3DA7E3" : "#F49600",
                      }}
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#3DA7E3] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {category.subCategories?.length || 0} sous-catégories
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    )
}