/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield, CheckCircle } from "lucide-react";
import Button from "@/components/common/Button";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // logique de connexion
    console.log({ email, password, rememberMe });
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Logique connexion Google
    console.log("Login with Google");
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* ── Panneau gauche branding ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gray-50 border-r border-gray-200">
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

        {/* Titre + features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Votre espace juridique
            <span className="block text-[#3DA7E3] mt-1">en toute sécurité</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "10 000+ documents juridiques disponibles",
                color: "#3DA7E3",
              },
              {
                label: "Vidéos éducatives par des experts fiscaux",
                color: "#F49600",
              },
              {
                label: "Mises à jour en temps réel des lois",
                color: "#3DA7E3",
              },
              { label: "Support dédié 24h/24 et 7j/7", color: "#F49600" },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color }} />
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
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Connexion</h1>
              <p className="text-sm text-gray-500 mt-1">
                Accédez à votre espace personnel
              </p>
            </div>

            {/* Bouton Google */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continuer avec Google</span>
            </button>

            {/* Séparateur */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-400">ou</span>
              </div>
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

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#3DA7E3] hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#3DA7E3] focus:ring-[#3DA7E3]"
                  />
                  <span className="text-sm text-gray-600">Rester connecté</span>
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full bg-[#F49600] hover:bg-[#F49600]/90"
                isLoading={isLoading}
              >
                Se connecter
              </Button>
            </form>

            {/* Séparateur pour mobile */}
            <div className="relative my-6 lg:hidden">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Nouveau sur Mr Impôt ?
                </span>
              </div>
            </div>

            {/* Lien inscription (desktop) */}
            <div className="hidden lg:block mt-4 text-center">
              <p className="text-sm text-gray-500">
                Pas encore de compte ?{" "}
                <Link
                  href="/register"
                  className="text-[#3DA7E3] font-medium hover:underline"
                >
                  Créer un compte
                </Link>
              </p>
            </div>

            {/* Lien inscription (mobile) */}
            <div className="lg:hidden">
              <Link href="/register">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-[#3DA7E3] text-[#3DA7E3] hover:bg-[#3DA7E3]/5"
                >
                  Créer un compte
                </Button>
              </Link>
            </div>

            {/* Sécurité */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Shield className="w-3.5 h-3.5 text-[#3DA7E3]" />
              <span>Connexion sécurisée — chiffrement SSL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
