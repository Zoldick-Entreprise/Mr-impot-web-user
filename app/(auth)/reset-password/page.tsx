/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/common/Button";
import toast from "react-hot-toast";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Le backend Laravel envoie généralement un email avec un lien du type
  // ${FRONTEND_URL}/reset-password?token=<xxx>&email=<yyy>
  useEffect(() => {
    const t = searchParams.get("token") || "";
    const e = searchParams.get("email") || "";
    setToken(t);
    setEmail(e);
  }, [searchParams]);

  const canSubmit =
    token.trim() !== "" &&
    email.trim() !== "" &&
    password.length >= 8 &&
    password === confirm;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          email,
          password,
          password_confirmation: confirm,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data?.message || "Lien invalide ou expiré.");
        return;
      }
      setIsDone(true);
      toast.success("Mot de passe réinitialisé.");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      console.error("[reset-password] error:", err);
      toast.error("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Panneau gauche branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gray-100 border-r border-gray-200">
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/logo.png"
            alt="M Impôt"
            className="h-12 w-auto"
            onError={(ev) => {
              ev.currentTarget.src =
                "https://via.placeholder.com/48x48?text=MI";
            }}
          />
          <span className="text-2xl font-bold text-[#3DA7E3] tracking-tight">
            M. Impôt
          </span>
        </Link>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Nouveau mot de passe
            <span className="block text-[#3DA7E3] mt-1">
              Choisissez-le soigneusement
            </span>
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Minimum 8 caractères</li>
            <li>• Mélangez lettres, chiffres et symboles</li>
            <li>• N&apos;utilisez pas un mot de passe déjà utilisé ailleurs</li>
          </ul>
        </div>

        <div className="text-xs text-gray-400">
          Procédure sécurisée — chiffrement SSL
        </div>
      </div>

      {/* Panneau droit formulaire */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-md mx-auto">
          <div className="lg:hidden mb-8 text-center">
            <Link
              href="/"
              className="flex items-center justify-center space-x-3"
            >
              <img
                src="/logo.png"
                alt="M Impôt"
                className="h-10 w-auto"
                onError={(ev) => {
                  ev.currentTarget.src =
                    "https://via.placeholder.com/40x40?text=MI";
                }}
              />
              <span className="text-xl font-bold text-[#3DA7E3]">M Impôt</span>
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            {!isDone ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Réinitialiser le mot de passe
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Choisissez un nouveau mot de passe pour votre compte.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email (pré-rempli, éditable au cas où) */}
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

                  {/* Nouveau mot de passe */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nouveau mot de passe
                    </label>
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
                    {password && password.length < 8 && (
                      <p className="mt-1 text-xs text-red-500">
                        Minimum 8 caractères
                      </p>
                    )}
                  </div>

                  {/* Confirmation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showConfirm ? "text" : "password"}
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
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
                    {confirm && password !== confirm && (
                      <p className="mt-1 text-xs text-red-500">
                        Les mots de passe ne correspondent pas
                      </p>
                    )}
                  </div>

                  {!token && (
                    <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      Aucun jeton détecté dans l&apos;URL. Utilisez le lien
                      reçu par e-mail.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-[#F49600] hover:bg-[#F49600]/90"
                    isLoading={isLoading}
                    disabled={!canSubmit}
                  >
                    Réinitialiser le mot de passe
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 text-sm text-[#3DA7E3] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à la connexion
                  </Link>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-[#3DA7E3]" />
                  <span>Procédure sécurisée — chiffrement SSL</span>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Mot de passe mis à jour !
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Vous allez être redirigé vers la page de connexion.
                </p>
                <Link href="/login">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-[#F49600] hover:bg-[#F49600]/90"
                  >
                    Se connecter maintenant
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-sm text-gray-500">
          Chargement…
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
