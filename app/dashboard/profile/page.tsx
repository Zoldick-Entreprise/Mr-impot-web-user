"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Calendar,
  Edit2,
  Save,
  X,
  Camera,
  FileText,
  Video,
  Globe,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

type Language = "fr" | "en";

const LANGUAGE_LABELS: Record<Language, string> = {
  fr: "Français",
  en: "English",
};

function formatJoinDate(iso?: string): string {
  if (!iso) return "—";
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("fr-FR", {
      month: "long",
      year: "numeric",
    }).format(d);
  } catch {
    return "—";
  }
}

export default function ProfilePage() {
  const { user, setUser, refresh } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [preferredLanguage, setPreferredLanguage] = useState<Language>(
    (user?.preferred_language as Language) ?? "fr",
  );
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Re-sync local state si le user change (ex : après refresh).
  useEffect(() => {
    if (!isEditing) {
      setName(user?.name ?? "");
      setPreferredLanguage((user?.preferred_language as Language) ?? "fr");
    }
  }, [user, isEditing]);

  const handleAvatarClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("L'avatar ne doit pas dépasser 2 Mo.");
      return;
    }
    setAvatarFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setAvatarPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName(user?.name ?? "");
    setPreferredLanguage((user?.preferred_language as Language) ?? "fr");
    setAvatarFile(null);
    setAvatarPreview(null);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      toast.error("Le nom est requis.");
      return;
    }
    setIsSaving(true);
    try {
      const form = new FormData();
      if (name !== user?.name) form.append("name", name.trim());
      if (preferredLanguage !== user?.preferred_language) {
        form.append("preferred_language", preferredLanguage);
      }
      if (avatarFile) form.append("avatar", avatarFile);

      // Si rien n'a changé, on sort sans appel réseau.
      if (![...form.keys()].length) {
        setIsEditing(false);
        return;
      }

      const res = await fetch("/api/profile", {
        method: "PATCH",
        body: form,
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Impossible de mettre à jour le profil.");
        return;
      }

      if (data?.user) {
        setUser(data.user);
      } else {
        await refresh();
      }
      toast.success("Profil mis à jour avec succès.");
      setIsEditing(false);
      setAvatarFile(null);
      setAvatarPreview(null);
    } catch (err) {
      console.error("[profile] save error:", err);
      toast.error("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsSaving(false);
    }
  };

  // Activité récente — encore mockée tant que le backend ne l'expose pas.
  const recentActivities: {
    action: string;
    target: string;
    type: "document" | "video";
    date: string;
  }[] = [];

  const displayedAvatar = avatarPreview ?? user?.avatar ?? undefined;
  const joinDate = formatJoinDate(user?.created_at);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-black">Mon profil</h1>
        <p className="text-black/60 mt-1">
          Gérez vos informations personnelles
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleAvatarChange}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Colonne gauche - Photo et infos de base */}
        <div className="lg:w-80 flex-shrink-0">
          <Card className="border border-gray-200">
            <div className="text-center">
              <div className="relative inline-block">
                <Avatar
                  fallback={user?.name ?? "Utilisateur"}
                  src={displayedAvatar}
                  size="xl"
                />
                <button
                  type="button"
                  onClick={handleAvatarClick}
                  className="absolute bottom-0 right-0 p-1.5 bg-[#F49600] rounded-full text-white hover:bg-[#F49600]/90 transition-colors"
                  aria-label="Changer la photo de profil"
                >
                  <Camera className="w-3 h-3" />
                </button>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-black">
                {user?.name ?? "Utilisateur"}
              </h2>
              <p className="text-sm text-black/60 mt-1">
                Membre depuis {joinDate}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-black/40" />
                <span className="text-black/70 break-all">
                  {user?.email ?? "—"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-black/40" />
                <span className="text-black/70">
                  {LANGUAGE_LABELS[
                    (user?.preferred_language as Language) ?? "fr"
                  ]}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-black/40" />
                <span className="text-black/70">Inscrit en {joinDate}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Colonne droite - Contenu principal */}
        <div className="flex-1 space-y-6">
          {/* Informations personnelles */}
          <Card className="border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-black">
                Informations personnelles
              </h3>
              {!isEditing ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Modifier
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCancel}
                    disabled={isSaving}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Annuler
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSave}
                    isLoading={isSaving}
                    className="bg-[#F49600] hover:bg-[#F49600]/90"
                  >
                    <Save className="w-4 h-4 mr-1" />
                    Sauvegarder
                  </Button>
                </div>
              )}
            </div>

            {!isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-black/50">Nom complet</label>
                  <p className="text-base font-medium text-black mt-0.5">
                    {user?.name ?? "—"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-black/50">Email</label>
                  <p className="text-base text-black mt-0.5 break-all">
                    {user?.email ?? "—"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-black/50">
                    Langue préférée
                  </label>
                  <p className="text-base text-black mt-0.5">
                    {LANGUAGE_LABELS[
                      (user?.preferred_language as Language) ?? "fr"
                    ]}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={255}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email ?? ""}
                    disabled
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-base text-black/60 cursor-not-allowed"
                  />
                  <p className="text-xs text-black/40 mt-1">
                    L&apos;email ne peut pas être modifié.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Langue préférée
                  </label>
                  <select
                    value={preferredLanguage}
                    onChange={(e) =>
                      setPreferredLanguage(e.target.value as Language)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                  >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                  </select>
                </div>
                {avatarFile && (
                  <div className="text-sm text-black/60">
                    Nouvel avatar sélectionné :{" "}
                    <span className="font-medium text-black">
                      {avatarFile.name}
                    </span>
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* Activité récente */}
          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-4">
              Activité récente
            </h3>
            {recentActivities.length === 0 ? (
              <p className="text-sm text-black/50">
                Aucune activité récente pour le moment.
              </p>
            ) : (
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="p-1.5 rounded-lg bg-gray-100">
                      {activity.type === "document" ? (
                        <FileText className="w-4 h-4 text-[#3DA7E3]" />
                      ) : (
                        <Video className="w-4 h-4 text-[#F49600]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-black">
                        <span className="font-medium">{activity.action}</span>{" "}
                        <span className="text-[#3DA7E3] font-medium">
                          {activity.target}
                        </span>
                      </p>
                      <p className="text-xs text-black/40 mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
