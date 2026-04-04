"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  Save,
  X,
  Camera,
  FileText,
  Video,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Pierre",
    lastName: "Akoa",
    email: "pierre.akoa@example.com",
    phone: "+237 6 99 99 99 99",
    location: "Douala, Cameroun",
    joinDate: "Janvier 2025",
    bio: "Expert-comptable passionné par le droit fiscal.",
  });

  const recentActivities = [
    {
      action: "Consulté",
      target: "Loi de Finances 2025",
      type: "document",
      date: "Il y a 2 heures",
    },
    {
      action: "Regardé",
      target: "Comprendre sa déclaration d'impôts",
      type: "video",
      date: "Il y a 1 jour",
    },
    {
      action: "Téléchargé",
      target: "Guide pratique TVA 2025",
      type: "document",
      date: "Il y a 3 jours",
    },
  ];

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profil sauvegardé:", profile);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-black">Mon profil</h1>
        <p className="text-black/60 mt-1">
          Gérez vos informations personnelles
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Colonne gauche - Photo et infos de base */}
        <div className="lg:w-80 flex-shrink-0">
          <Card className="border border-gray-200">
            <div className="text-center">
              <div className="relative inline-block">
                <Avatar
                  fallback={`${profile.firstName} ${profile.lastName}`}
                  size="xl"
                />
                <button className="absolute bottom-0 right-0 p-1.5 bg-[#F49600] rounded-full text-white hover:bg-[#F49600]/90 transition-colors">
                  <Camera className="w-3 h-3" />
                </button>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-black">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-sm text-black/60 mt-1">
                Membre depuis {profile.joinDate}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-black/40" />
                <span className="text-black/70">{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-black/40" />
                <span className="text-black/70">
                  {profile.phone || "Non renseigné"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-black/40" />
                <span className="text-black/70">
                  {profile.location || "Non renseigné"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-black/40" />
                <span className="text-black/70">
                  Inscrit le {profile.joinDate}
                </span>
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
                    onClick={() => setIsEditing(false)}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Annuler
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSave}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-black/50">Prénom</label>
                    <p className="text-base font-medium text-black mt-0.5">
                      {profile.firstName}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-black/50">Nom</label>
                    <p className="text-base font-medium text-black mt-0.5">
                      {profile.lastName}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-black/50">Email</label>
                  <p className="text-base text-black mt-0.5">{profile.email}</p>
                </div>
                <div>
                  <label className="text-xs text-black/50">Téléphone</label>
                  <p className="text-base text-black mt-0.5">
                    {profile.phone || "Non renseigné"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-black/50">Localisation</label>
                  <p className="text-base text-black mt-0.5">
                    {profile.location || "Non renseigné"}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-black/50">Bio</label>
                  <p className="text-base text-black mt-0.5">{profile.bio}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) =>
                        setProfile({ ...profile, firstName: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) =>
                        setProfile({ ...profile, lastName: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Localisation
                  </label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) =>
                      setProfile({ ...profile, location: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Bio
                  </label>
                  <textarea
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-base text-black focus:outline-none focus:border-[#3DA7E3]"
                  />
                </div>
              </div>
            )}
          </Card>

          {/* Activité récente */}
          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-4">
              Activité récente
            </h3>
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
          </Card>
        </div>
      </div>
    </div>
  );
}
