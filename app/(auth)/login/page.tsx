"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import Button from "@/components/common/Button";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logique de connexion
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex relative overflow-hidden">

      {/* Décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3EA7DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF7F36]/5 rounded-full blur-3xl" />
      </div>

      {/* ── Panneau gauche branding ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-14 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/logo2.png"
            alt="Mr Impôt"
            className="h-15 w-auto transition-transform duration-200 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/40x40?text=MI";
            }}
          />
          <span className="text-xl font-bold text-[#3EA7DE] tracking-tight">
            M. Impôt
          </span>
        </Link>

        {/* Titre + features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Votre espace juridique
            <span className="block text-[#3EA7DE] mt-1">en toute sécurité</span>
          </h2>
          <div className="space-y-3">
            {[
              { label: "10 000+ documents juridiques disponibles", color: "#3EA7DE" },
              { label: "Vidéos éducatives par des experts fiscaux", color: "#FF7F36" },
              { label: "Mises à jour en temps réel des lois", color: "#3EA7DE" },
              { label: "Support dédié 24h/24 et 7j/7", color: "#FF7F36" },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <span className="text-sm text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8">
          {[
            { value: "10k+", label: "Documents" },
            { value: "500+", label: "Vidéos" },
            { value: "50k+", label: "Utilisateurs" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[#3EA7DE]">{value}</span>
              <div className="h-6 w-px bg-gray-200" />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Panneau droit formulaire ── */}
      <div className="relative flex-1 flex flex-col justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-md mx-auto">

          {/* Mobile logo */}
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/logo2.png"
                alt="Mr Impôt"
                className="h-15 w-auto transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/40x40?text=MI";
                }}
              />
              <span className="text-xl font-bold text-[#3EA7DE] tracking-tight">
                M. Impôt
              </span>
            </Link>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">Connexion</h2>
            <p className="text-sm text-gray-500 mb-8">
              Pas encore de compte ?{" "}
              <Link href="/register" className="text-[#3EA7DE] font-medium hover:underline">
                Créer un compte
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Adresse e-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                  <Link href="/forgot-password" className="text-xs text-[#3EA7DE] hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"} required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 transition-all"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center gap-2.5">
                <input type="checkbox" id="remember"
                  className="w-4 h-4 rounded border-gray-300 accent-[#3EA7DE]" />
                <label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer">
                  Rester connecté
                </label>
              </div>

              <Button type="submit" variant="primary" size="lg"
                className="w-full shadow-md hover:shadow-lg transition-shadow duration-200">
                Se connecter
              </Button>
            </form>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
              <Shield className="w-3.5 h-3.5 text-[#3EA7DE] flex-shrink-0" />
              <span>Connexion sécurisée — vos données sont chiffrées et protégées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}