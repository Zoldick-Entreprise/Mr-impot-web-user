"use client";

import { useState } from "react";
import {
  Globe,
  Bell,
  Lock,
  Palette,
  Moon,
  Sun,
  Shield,
  Smartphone,
  Mail,
  Eye,
  EyeOff,
  Save,
  Languages,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");
  const [isSaving, setIsSaving] = useState(false);

  // Langue
  const [language, setLanguage] = useState("fr");

  // Notifications
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    documentAlerts: true,
    newsletter: false,
  });

  // Apparence
  const [theme, setTheme] = useState("light");

  // Sécurité
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Session
  const [sessions] = useState([
    {
      device: "Chrome sur Windows",
      location: "Douala, Cameroun",
      lastActive: "Aujourd'hui",
      current: true,
    },
    {
      device: "Safari sur iPhone",
      location: "Douala, Cameroun",
      lastActive: "Il y a 2 jours",
      current: false,
    },
  ]);

  const handleSaveSettings = () => {
    setIsSaving(true);
    // TODO: Appel API pour sauvegarder les paramètres
    // await fetch('/api/user/settings', { method: 'PUT', body: JSON.stringify({ language, notifications, theme }) })
    setTimeout(() => {
      setIsSaving(false);
      console.log("Paramètres sauvegardés:", {
        language,
        notifications,
        theme,
      });
    }, 800);
  };

  const handleChangePassword = () => {
    // TODO: Appel API pour changer le mot de passe
    console.log("Changement mot de passe:", passwordForm);
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const sections = [
    { id: "general", name: "Général", icon: Globe },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "appearance", name: "Apparence", icon: Palette },
    { id: "security", name: "Sécurité", icon: Lock },
    { id: "sessions", name: "Appareils connectés", icon: Smartphone },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-black">Paramètres</h1>
        <p className="text-black/60 mt-1">
          Gérez vos préférences et paramètres de compte
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <Card className="border border-gray-200 p-2">
            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                      ${
                        isActive
                          ? "bg-[#3DA7E3] text-white"
                          : "text-black/70 hover:bg-gray-100"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {section.name}
                  </button>
                );
              })}
            </nav>
          </Card>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 space-y-6">
          {/* Section Général */}
          {activeSection === "general" && (
            <Card className="border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-[#3DA7E3]" />
                <h3 className="text-lg font-semibold text-black">
                  Préférences générales
                </h3>
              </div>

              <div className="space-y-6">
                {/* Langue - EN/FR */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Langue de l&apos;application
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setLanguage("fr")}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                        ${
                          language === "fr"
                            ? "border-[#3DA7E3] bg-[#3DA7E3]/10 text-[#3DA7E3]"
                            : "border-gray-200 text-black/70 hover:border-gray-300"
                        }
                      `}
                    >
                      <Languages className="w-4 h-4" />
                      Français
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                        ${
                          language === "en"
                            ? "border-[#3DA7E3] bg-[#3DA7E3]/10 text-[#3DA7E3]"
                            : "border-gray-200 text-black/70 hover:border-gray-300"
                        }
                      `}
                    >
                      <Globe className="w-4 h-4" />
                      English
                    </button>
                  </div>
                  <p className="text-xs text-black/40 mt-2">
                    La langue de l&apos;interface sera modifiée dans toute
                    l&apos;application
                  </p>
                </div>

                <Button
                  onClick={handleSaveSettings}
                  isLoading={isSaving}
                  className="bg-[#F49600] hover:bg-[#F49600]/90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder les préférences
                </Button>
              </div>
            </Card>
          )}

          {/* Section Notifications */}
          {activeSection === "notifications" && (
            <Card className="border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-[#3DA7E3]" />
                <h3 className="text-lg font-semibold text-black">
                  Notifications
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-black">
                      Notifications par email
                    </p>
                    <p className="text-sm text-black/50">
                      Recevez des alertes par email
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications({
                        ...notifications,
                        emailNotifications: !notifications.emailNotifications,
                      })
                    }
                    className={`
                      relative w-11 h-6 rounded-full transition-colors
                      ${notifications.emailNotifications ? "bg-[#3DA7E3]" : "bg-gray-300"}
                    `}
                  >
                    <span
                      className={`
                      absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform
                      ${notifications.emailNotifications ? "translate-x-5" : "translate-x-0"}
                    `}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-black">Notifications push</p>
                    <p className="text-sm text-black/50">
                      Notifications sur votre navigateur
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications({
                        ...notifications,
                        pushNotifications: !notifications.pushNotifications,
                      })
                    }
                    className={`
                      relative w-11 h-6 rounded-full transition-colors
                      ${notifications.pushNotifications ? "bg-[#3DA7E3]" : "bg-gray-300"}
                    `}
                  >
                    <span
                      className={`
                      absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform
                      ${notifications.pushNotifications ? "translate-x-5" : "translate-x-0"}
                    `}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-black">
                      Alertes nouveaux documents
                    </p>
                    <p className="text-sm text-black/50">
                      Soyez informé des nouvelles publications
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications({
                        ...notifications,
                        documentAlerts: !notifications.documentAlerts,
                      })
                    }
                    className={`
                      relative w-11 h-6 rounded-full transition-colors
                      ${notifications.documentAlerts ? "bg-[#3DA7E3]" : "bg-gray-300"}
                    `}
                  >
                    <span
                      className={`
                      absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform
                      ${notifications.documentAlerts ? "translate-x-5" : "translate-x-0"}
                    `}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-black">Newsletter</p>
                    <p className="text-sm text-black/50">
                      Recevez notre newsletter mensuelle
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications({
                        ...notifications,
                        newsletter: !notifications.newsletter,
                      })
                    }
                    className={`
                      relative w-11 h-6 rounded-full transition-colors
                      ${notifications.newsletter ? "bg-[#3DA7E3]" : "bg-gray-300"}
                    `}
                  >
                    <span
                      className={`
                      absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform
                      ${notifications.newsletter ? "translate-x-5" : "translate-x-0"}
                    `}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Button
                  onClick={handleSaveSettings}
                  isLoading={isSaving}
                  className="bg-[#F49600] hover:bg-[#F49600]/90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder les préférences
                </Button>
              </div>
            </Card>
          )}

          {/* Section Apparence */}
          {activeSection === "appearance" && (
            <Card className="border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-5 h-5 text-[#3DA7E3]" />
                <h3 className="text-lg font-semibold text-black">Apparence</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Thème
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setTheme("light")}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                        ${
                          theme === "light"
                            ? "border-[#3DA7E3] bg-[#3DA7E3]/10 text-[#3DA7E3]"
                            : "border-gray-200 text-black/70 hover:border-gray-300"
                        }
                      `}
                    >
                      <Sun className="w-4 h-4" />
                      Clair
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                        ${
                          theme === "dark"
                            ? "border-[#3DA7E3] bg-[#3DA7E3]/10 text-[#3DA7E3]"
                            : "border-gray-200 text-black/70 hover:border-gray-300"
                        }
                      `}
                    >
                      <Moon className="w-4 h-4" />
                      Sombre
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleSaveSettings}
                  isLoading={isSaving}
                  className="bg-[#F49600] hover:bg-[#F49600]/90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder les préférences
                </Button>
              </div>
            </Card>
          )}

          {/* Section Sécurité */}
          {activeSection === "security" && (
            <Card className="border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-[#3DA7E3]" />
                <h3 className="text-lg font-semibold text-black">Sécurité</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Mot de passe actuel
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          currentPassword: e.target.value,
                        })
                      }
                      placeholder="Entrez votre mot de passe actuel"
                      className="w-full px-3 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:border-[#3DA7E3]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="w-4 h-4 text-black/40" />
                      ) : (
                        <Eye className="w-4 h-4 text-black/40" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Nouveau mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={passwordForm.newPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          newPassword: e.target.value,
                        })
                      }
                      placeholder="Entrez votre nouveau mot de passe"
                      className="w-full px-3 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:border-[#3DA7E3]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4 text-black/40" />
                      ) : (
                        <Eye className="w-4 h-4 text-black/40" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={passwordForm.confirmPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="Confirmez votre nouveau mot de passe"
                      className="w-full px-3 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:border-[#3DA7E3]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-black/40" />
                      ) : (
                        <Eye className="w-4 h-4 text-black/40" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleChangePassword}
                  className="bg-[#F49600] hover:bg-[#F49600]/90"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Changer le mot de passe
                </Button>
              </div>
            </Card>
          )}

          {/* Section Appareils connectés */}
          {activeSection === "sessions" && (
            <Card className="border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-5 h-5 text-[#3DA7E3]" />
                <h3 className="text-lg font-semibold text-black">
                  Appareils connectés
                </h3>
              </div>

              <div className="space-y-4">
                {sessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <Smartphone className="w-4 h-4 text-black/60" />
                      </div>
                      <div>
                        <p className="font-medium text-black">
                          {session.device}
                          {session.current && (
                            <span className="ml-2 text-xs text-[#3DA7E3]">
                              (Appareil actuel)
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-black/50">
                          {session.location} • Dernière activité :{" "}
                          {session.lastActive}
                        </p>
                      </div>
                    </div>
                    {!session.current && (
                      <button className="text-sm text-red-500 hover:underline">
                        Déconnecter
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  Déconnecter tous les autres appareils
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
