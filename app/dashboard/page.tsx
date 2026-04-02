"use client";

import {
  FileText,
  Download,
  Search,
  Users,
  TrendingUp,
  Eye,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { documents, recentActivities } from "@/data/mockData";
import { formatDateTime } from "@/utils/formatters";

export default function DashboardPage() {
  const stats = [
    {
      title: "Documents consultés",
      value: "245",
      change: "+12%",
      icon: Eye,
      color: "#3DA7E3",
    },
    {
      title: "Téléchargements",
      value: "89",
      change: "+8%",
      icon: Download,
      color: "#F49600",
    },
    {
      title: "Recherches",
      value: "156",
      change: "+23%",
      icon: Search,
      color: "#3DA7E3",
    },
    {
      title: "Documents déposés",
      value: "12",
      change: "+3",
      icon: Users,
      color: "#F49600",
    },
  ];

  const getActionIcon = (action: string) => {
    switch (action) {
      case "download":
        return <Download className="w-4 h-4 text-[#F49600]" />;
      case "search":
        return <Search className="w-4 h-4 text-[#3DA7E3]" />;
      case "view":
        return <Eye className="w-4 h-4 text-[#3DA7E3]" />;
      default:
        return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const getActionText = (action: string) => {
    switch (action) {
      case "download":
        return "a téléchargé";
      case "search":
        return "a recherché";
      case "view":
        return "a consulté";
      default:
        return "a interagi avec";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500 mt-1">
          Bienvenue sur votre espace personnel Mr Impôt
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            padding="md"
            className="border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <div className="mt-2">
                  <Badge variant="success" size="sm">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    {stat.change}
                  </Badge>
                </div>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${stat.color}10` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Documents & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Documents */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Documents récents
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "/dashboard/documents")}
              >
                Voir tout
              </Button>
            </div>
            <div className="space-y-3">
              {documents.slice(0, 3).map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/dashboard/documents/${doc.id}`)
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "#3DA7E310" }}
                    >
                      <FileText
                        className="w-5 h-5"
                        style={{ color: "#3DA7E3" }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc.title}</p>
                      <p className="text-sm text-gray-500">
                        {doc.category.name} • {doc.views} vues
                      </p>
                    </div>
                  </div>
                  <Badge variant="default" size="sm">
                    {doc.format}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card className="border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Activité récente
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0"
                >
                  <div className="p-1.5 rounded-lg bg-gray-100">
                    {getActionIcon(activity.action)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {getActionText(activity.action)}{" "}
                      <span className="font-medium text-[#3DA7E3]">
                        {activity.document}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDateTime(activity.time)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Categories Quick Access */}
      <Card className="border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Accès rapide par catégorie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Droit Fiscal", color: "#3DA7E3" },
            { name: "Droit des Sociétés", color: "#F49600" },
            { name: "Droit du Travail", color: "#3DA7E3" },
            { name: "Jurisprudence", color: "#F49600" },
          ].map((category) => (
            <button
              key={category.name}
              onClick={() =>
                (window.location.href = `/dashboard/documents?category=${category.name.toLowerCase().replace(/\s/g, "-")}`)
              }
              className="p-4 text-center rounded-lg border border-gray-200 hover:border-[#3DA7E3] hover:shadow-sm transition-all group"
            >
              <p className="font-medium text-gray-900 group-hover:text-[#3DA7E3] transition-colors">
                {category.name}
              </p>
              <p className="text-sm text-gray-400 mt-1">Accéder</p>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
