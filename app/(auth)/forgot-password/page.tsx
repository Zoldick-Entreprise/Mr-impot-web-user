/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Shield, ArrowLeft, CheckCircle, Send } from "lucide-react";
import Button from "@/components/common/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Logique d'envoi email
    console.log("Reset password for:", email);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* ── Panneau gauche branding ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gray-100 border-r border-gray-200">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/logo.jpg"
            alt="Mr Impôt"
            className="h-12 w-auto"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/48x48?text=MI";
            }}
          />
          <span className="text-2xl font-bold text-[#3DA7E3] tracking-tight">
            M. Impôt
          </span>
        </Link>

        {/* Titre + message */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Mot de passe oublié ?
            <span className="block text-[#3DA7E3] mt-1">
              On vous aide à le retrouver
            </span>
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Saisissez votre adresse e-mail",
                color: "#3DA7E3",
              },
              {
                label: "Recevez un lien de réinitialisation",
                color: "#F49600",
              },
              {
                label: "Créez un nouveau mot de passe",
                color: "#3DA7E3",
              },
              {
                label: "Reconnectez-vous en toute sécurité",
                color: "#F49600",
              },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
          {[
            { value: "10k+", label: "Documents" },
            { value: "500+", label: "Vidéos" },
            { value: "50k+", label: "Utilisateurs" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-[#3DA7E3]">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Panneau droit formulaire ── */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-md mx-auto">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link
              href="/"
              className="flex items-center justify-center space-x-3"
            >
              <img
                src="/logo.jpg"
                alt="Mr Impôt"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/40x40?text=MI";
                }}
              />
              <span className="text-xl font-bold text-[#3DA7E3]">Mr Impôt</span>
            </Link>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            {!isSent ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Mot de passe oublié ?
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Entrez votre adresse e-mail et nous vous enverrons un lien
                    pour réinitialiser votre mot de passe.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Adresse e-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vous@exemple.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-[#F49600] hover:bg-[#F49600]/90"
                    isLoading={isLoading}
                  >
                    Envoyer le lien
                  </Button>
                </form>

                {/* Lien retour connexion (mobile) */}
                <div className="mt-6 text-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 text-sm text-[#3DA7E3] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à la connexion
                  </Link>
                </div>

                {/* Sécurité */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-[#3DA7E3]" />
                  <span>Procédure sécurisée — chiffrement SSL</span>
                </div>
              </>
            ) : (
              <>
                {/* État succès */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    E-mail envoyé !
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Nous avons envoyé un lien de réinitialisation à{" "}
                    <span className="font-medium text-gray-700">{email}</span>
                    .<br />
                    Vérifiez votre boîte de réception et vos spams.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-[#F49600] hover:bg-[#F49600]/90"
                      onClick={() => {
                        setIsSent(false);
                        setEmail("");
                      }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Renvoyer l&apos;e-mail
                    </Button>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-[#3DA7E3] text-[#3DA7E3] hover:bg-[#3DA7E3]/5"
                      >
                        Retour à la connexion
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
