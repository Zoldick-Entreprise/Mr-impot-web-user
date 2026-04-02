/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  Shield,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/common/Button";

const steps = ["Identité", "Accès", "Confirmation"];

export default function Register() {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
    acceptTerms: false,
  });

  const set = (key: string, val: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Inscription:", form);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleGoogleRegister = () => {
    setIsLoading(true);
    console.log("Register with Google");
    setTimeout(() => setIsLoading(false), 1000);
  };

  const isStepValid = () => {
    if (step === 0) {
      return form.firstName.trim() !== "" && form.lastName.trim() !== "";
    }
    if (step === 1) {
      return (
        form.email.trim() !== "" &&
        form.password.length >= 8 &&
        form.password === form.confirm
      );
    }
    if (step === 2) {
      return form.acceptTerms === true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* ── Panneau gauche branding ── */}
      <div className="hidden lg:flex lg:w-2/5 flex-col justify-between p-12 bg-gray-50 border-r border-gray-200">
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

        <div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Rejoignez
            <span className="block text-[#3DA7E3] mt-1">
              50 000+ utilisateurs
            </span>
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Accès à 10 000+ documents juridiques",
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
                <CheckCircle2 className="w-5 h-5" style={{ color }} />
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>

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
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 overflow-y-auto">
        <div className="w-full max-w-lg mx-auto">
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
              <h1 className="text-2xl font-bold text-gray-900">
                Créer votre compte
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Déjà inscrit ?{" "}
                <Link
                  href="/login"
                  className="text-[#3DA7E3] font-medium hover:underline"
                >
                  Se connecter
                </Link>
              </p>
            </div>

            {/* Bouton Google */}
            <button
              onClick={handleGoogleRegister}
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
              <span>S&apos;inscrire avec Google</span>
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

            {/* Stepper */}
            <div className="flex items-center gap-0 mb-8">
              {steps.map((label, i) => (
                <div
                  key={label}
                  className="flex items-center flex-1 last:flex-none"
                >
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all
                      ${
                        i < step
                          ? "bg-[#3DA7E3] border-[#3DA7E3] text-white"
                          : i === step
                            ? "bg-white border-[#3DA7E3] text-[#3DA7E3]"
                            : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {i < step ? "✓" : i + 1}
                    </div>
                    <span
                      className={`text-[10px] font-medium whitespace-nowrap
                      ${i === step ? "text-[#3DA7E3]" : "text-gray-400"}`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 mb-4 rounded-full transition-colors
                      ${i < step ? "bg-[#3DA7E3]" : "bg-gray-200"}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Étape 0 — Identité */}
              {step === 0 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Prénom
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => set("firstName", e.target.value)}
                          placeholder="Pierre"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nom
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => set("lastName", e.target.value)}
                          placeholder="Akoa"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Téléphone (optionnel)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+237 6 99 99 99 99"
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Étape 1 — Accès */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Adresse e-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="vous@exemple.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={form.password}
                        onChange={(e) => set("password", e.target.value)}
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
                    {form.password && form.password.length < 8 && (
                      <p className="mt-1 text-xs text-red-500">
                        Minimum 8 caractères
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showConfirm ? "text" : "password"}
                        required
                        value={form.confirm}
                        onChange={(e) => set("confirm", e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-12 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3DA7E3] focus:ring-1 focus:ring-[#3DA7E3] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirm ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {form.confirm && form.password !== form.confirm && (
                      <p className="mt-1 text-xs text-red-500">
                        Les mots de passe ne correspondent pas
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Étape 2 — Confirmation */}
              {step === 2 && (
                <>
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                      Récapitulatif
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Prénom</span>
                        <span className="text-gray-900 font-medium">
                          {form.firstName}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Nom</span>
                        <span className="text-gray-900 font-medium">
                          {form.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Téléphone</span>
                        <span className="text-gray-900 font-medium">
                          {form.phone || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">E-mail</span>
                        <span className="text-gray-900 font-medium">
                          {form.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={form.acceptTerms}
                      onChange={(e) => set("acceptTerms", e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#3DA7E3] focus:ring-[#3DA7E3]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-xs text-gray-500 leading-relaxed cursor-pointer"
                    >
                      J&apos;accepte les{" "}
                      <Link
                        href="/terms"
                        className="text-[#3DA7E3] hover:underline"
                      >
                        conditions d&apos;utilisation
                      </Link>{" "}
                      et la{" "}
                      <Link
                        href="/privacy"
                        className="text-[#3DA7E3] hover:underline"
                      >
                        politique de confidentialité
                      </Link>
                      .
                    </label>
                  </div>
                </>
              )}

              {/* Navigation */}
              <div className="flex gap-3 pt-4">
                {step > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(step - 1)}
                  >
                    Précédent
                  </Button>
                )}
                {step < steps.length - 1 ? (
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    className="flex-1 bg-[#F49600] hover:bg-[#F49600]/90 disabled:bg-gray-500"
                    disabled={!isStepValid()}
                    onClick={() => setStep(step + 1)}
                  >
                    Continuer →
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1 bg-[#F49600] hover:bg-[#F49600]/90"
                    isLoading={isLoading}
                  >
                    Créer mon compte
                  </Button>
                )}
              </div>
            </form>

            {/* Sécurité */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Shield className="w-3.5 h-3.5 text-[#3DA7E3]" />
              <span>Inscription sécurisée — chiffrement SSL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
