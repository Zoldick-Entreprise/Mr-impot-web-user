"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  FileText,
  Video,
  Download,
  Heart,
  User,
  CheckCheck,
  Check,
  Trash2,
  Circle,
  Filter,
  X,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

interface Notification {
  id: string;
  type: "document" | "video" | "download" | "favorite" | "system";
  title: string;
  message: string;
  targetId?: string;
  read: boolean;
  createdAt: string;
}

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "unread" | "read">(
    "all",
  );
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Remplacer par appel API Laravel
  // const [notifications, setNotifications] = useState<Notification[]>([]);
  // useEffect(() => {
  //   fetchNotifications();
  // }, []);

  // Données mock pour les notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "document",
      title: "Nouveau document disponible",
      message: "La loi de finances 2025 a été ajoutée à la bibliothèque",
      targetId: "1",
      read: false,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      type: "video",
      title: "Nouvelle vidéo éducative",
      message:
        "Comprendre sa déclaration d'impôts - Nouveau tutoriel disponible",
      targetId: "2",
      read: false,
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "3",
      type: "download",
      title: "Téléchargement effectué",
      message: "Vous avez téléchargé le document 'Guide pratique TVA 2025'",
      targetId: "2",
      read: true,
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "4",
      type: "favorite",
      title: "Ajout aux favoris",
      message:
        "Le document 'Code Général des Impôts' a été ajouté à vos favoris",
      targetId: "3",
      read: true,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "5",
      type: "system",
      title: "Mise à jour de la plateforme",
      message: "De nouvelles fonctionnalités sont disponibles",
      read: false,
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]);

  const markAsRead = (id: string) => {
    // TODO: Appel API pour marquer comme lu
    // await fetch(`/api/notifications/${id}/read`, { method: 'PUT' });
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif,
      ),
    );
  };

  const markAllAsRead = () => {
    // TODO: Appel API pour tout marquer comme lu
    // await fetch('/api/notifications/read-all', { method: 'PUT' });
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: string) => {
    // TODO: Appel API pour supprimer
    // await fetch(`/api/notifications/${id}`, { method: 'DELETE' });
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const deleteAllNotifications = () => {
    // TODO: Appel API pour tout supprimer
    // await fetch('/api/notifications', { method: 'DELETE' });
    setNotifications([]);
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "document":
        return <FileText className="w-4 h-4 text-[#3DA7E3]" />;
      case "video":
        return <Video className="w-4 h-4 text-[#F49600]" />;
      case "download":
        return <Download className="w-4 h-4 text-green-500" />;
      case "favorite":
        return <Heart className="w-4 h-4 text-[#F49600]" />;
      default:
        return <Bell className="w-4 h-4 text-gray-400" />;
    }
  };

  const getNotificationBg = (type: Notification["type"]) => {
    switch (type) {
      case "document":
        return "#3DA7E310";
      case "video":
        return "#F4960010";
      case "download":
        return "#22C55E10";
      case "favorite":
        return "#F4960010";
      default:
        return "#F3F4F610";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `Il y a ${diffMins} minute${diffMins > 1 ? "s" : ""}`;
    } else if (diffHours < 24) {
      return `Il y a ${diffHours} heure${diffHours > 1 ? "s" : ""}`;
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
    } else {
      return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    }
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (activeFilter === "unread") return !notif.read;
    if (activeFilter === "read") return notif.read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Notifications</h1>
          <p className="text-black/60 mt-1">
            Restez informé des dernières actualités
          </p>
        </div>

        {notifications.length > 0 && (
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                <CheckCheck className="w-4 h-4 mr-1" />
                Tout marquer comme lu
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={deleteAllNotifications}
              className="text-red-500 border-red-200 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Tout supprimer
            </Button>
          </div>
        )}
      </div>

      {/* Filtres */}
      <div className="flex items-center gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeFilter === "all"
              ? "border-[#3DA7E3] text-[#3DA7E3]"
              : "border-transparent text-black/60 hover:text-black"
          }`}
        >
          Toutes ({notifications.length})
        </button>
        <button
          onClick={() => setActiveFilter("unread")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeFilter === "unread"
              ? "border-[#3DA7E3] text-[#3DA7E3]"
              : "border-transparent text-black/60 hover:text-black"
          }`}
        >
          Non lues ({unreadCount})
        </button>
        <button
          onClick={() => setActiveFilter("read")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeFilter === "read"
              ? "border-[#3DA7E3] text-[#3DA7E3]"
              : "border-transparent text-black/60 hover:text-black"
          }`}
        >
          Lues ({notifications.filter((n) => n.read).length})
        </button>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3DA7E3]"></div>
        </div>
      )}

      {/* Liste des notifications */}
      {!isLoading && filteredNotifications.length === 0 && (
        <Card className="border border-gray-200 text-center py-12">
          <Bell className="w-12 h-12 text-black/20 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-black mb-1">
            Aucune notification
          </h3>
          <p className="text-black/50 text-sm">
            {activeFilter !== "all"
              ? "Aucune notification dans cette catégorie"
              : "Vous n'avez pas encore de notifications"}
          </p>
        </Card>
      )}

      {!isLoading && filteredNotifications.length > 0 && (
        <div className="space-y-2">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                relative bg-white border rounded-xl transition-all hover:shadow-sm
                ${notification.read ? "border-gray-200" : "border-[#3DA7E3]/30 bg-[#3DA7E3]/5"}
              `}
            >
              {/* Indicateur non lu */}
              {!notification.read && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#3DA7E3] rounded-r-full" />
              )}

              <div className="flex items-start gap-4 p-4 pl-5">
                {/* Icône */}
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{
                    backgroundColor: getNotificationBg(notification.type),
                  }}
                >
                  {getNotificationIcon(notification.type)}
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="font-semibold text-black">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-black/60 mt-0.5">
                        {notification.message}
                      </p>
                      <p className="text-xs text-black/40 mt-2">
                        {formatDate(notification.createdAt)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                          title="Marquer comme lu"
                        >
                          <Check className="w-4 h-4 text-black/40" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4 text-black/40 hover:text-red-500" />
                      </button>
                    </div>
                  </div>

                  {/* Lien d'action si target existe */}
                  {notification.targetId && (
                    <Link
                      href={`/dashboard/${notification.type}s/${notification.targetId}`}
                      className="inline-block mt-3 text-xs text-[#3DA7E3] hover:underline"
                    >
                      Voir le contenu →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
