"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Phone, Shield, CheckCircle2 } from "lucide-react";
import Button from "@/components/common/Button";

const steps = ["Identité", "Accès", "Confirmation"];

export default function Register() {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "",
    email: "", password: "", confirm: "",
    acceptTerms: false,
  });

  const set = (key: string, val: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logique d'inscription
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex relative overflow-hidden">

      {/* Décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3EA7DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF7F36]/5 rounded-full blur-3xl" />
      </div>

      {/* ── Panneau gauche branding ── */}
      <div className="hidden lg:flex lg:w-2/5 flex-col justify-between p-14 relative">
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
        <div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Rejoignez
            <span className="block text-[#3EA7DE] mt-1">50 000+ utilisateurs</span>
          </h2>
          <div className="space-y-3">
            {[
              { label: "Accès à 10 000+ documents juridiques", color: "#3EA7DE" },
              { label: "Vidéos éducatives par des experts fiscaux", color: "#FF7F36" },
              { label: "Mises à jour en temps réel des lois", color: "#3EA7DE" },
              { label: "Support dédié 24h/24 et 7j/7", color: "#FF7F36" },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color }} />
                <span className="text-sm text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {[{ value: "10k+", label: "Documents" }, { value: "500+", label: "Vidéos" }, { value: "50k+", label: "Utilisateurs" }].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[#3EA7DE]">{value}</span>
              <div className="h-6 w-px bg-gray-200" />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Panneau droit formulaire ── */}
      <div className="relative flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 overflow-y-auto">
        <div className="w-full max-w-lg mx-auto">

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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">Créer votre compte</h2>
            <p className="text-sm text-gray-500 mb-8">
              Déjà inscrit ?{" "}
              <Link href="/login" className="text-[#3EA7DE] font-medium hover:underline">
                Se connecter
              </Link>
            </p>

            {/* Stepper */}
            <div className="flex items-center gap-0 mb-8">
              {steps.map((label, i) => (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all
                      ${i < step
                        ? "bg-[#3EA7DE] border-[#3EA7DE] text-white"
                        : i === step
                        ? "bg-white border-[#3EA7DE] text-[#3EA7DE]"
                        : "bg-white border-gray-200 text-gray-400"
                      }`}
                    >
                      {i < step ? "✓" : i + 1}
                    </div>
                    <span className={`text-[10px] font-medium whitespace-nowrap
                      ${i === step ? "text-[#3EA7DE]" : "text-gray-400"}`}>
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 mb-4 rounded-full transition-colors
                      ${i < step ? "bg-[#3EA7DE]" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Étape 0 — Identité */}
              {step === 0 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Prénom", key: "firstName", placeholder: "Jean" },
                      { label: "Nom", key: "lastName", placeholder: "Dupont" },
                    ].map(({ label, key, placeholder }) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="text" required
                            value={form[key as keyof typeof form] as string}
                            onChange={(e) => set(key, e.target.value)}
                            placeholder={placeholder}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 transition-all"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+237 6XX XXX XXX"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Étape 1 — Accès */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Adresse e-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" required
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="vous@exemple.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 transition-all"
                      />
                    </div>
                  </div>
                  {[
                    { label: "Mot de passe", key: "password", show: showPassword, toggle: () => setShowPassword(!showPassword) },
                    { label: "Confirmer le mot de passe", key: "confirm", show: showConfirm, toggle: () => setShowConfirm(!showConfirm) },
                  ].map(({ label, key, show, toggle }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type={show ? "text" : "password"} required
                          value={form[key as keyof typeof form] as string}
                          onChange={(e) => set(key, e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#3EA7DE] focus:ring-2 focus:ring-[#3EA7DE]/20 transition-all"
                        />
                        <button type="button" onClick={toggle}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Étape 2 — Confirmation */}
              {step === 2 && (
                <>
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                      Récapitulatif
                    </p>
                    {[
                      { label: "Prénom", value: form.firstName },
                      { label: "Nom", value: form.lastName },
                      { label: "Téléphone", value: form.phone || "—" },
                      { label: "E-mail", value: form.email },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-sm">
                        <span className="text-gray-500">{label}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" required
                      checked={form.acceptTerms}
                      onChange={(e) => set("acceptTerms", e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-[#3EA7DE] flex-shrink-0"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      J'accepte les{" "}
                      <Link href="/terms" className="text-[#3EA7DE] hover:underline">conditions d'utilisation</Link>
                      {" "}et la{" "}
                      <Link href="/privacy" className="text-[#3EA7DE] hover:underline">politique de confidentialité</Link>.
                    </label>
                  </div>
                </>
              )}

              {/* Navigation */}
              <div className="flex gap-3 pt-1">
                {step > 0 && (
                  <Button type="button" variant="outline" size="lg"
                    className="flex-1 border-gray-300 hover:border-[#3EA7DE] hover:text-[#3EA7DE] transition-all duration-200"
                    onClick={() => setStep(step - 1)}>
                    Précédent
                  </Button>
                )}
                {step < steps.length - 1 ? (
                  <Button type="button" variant="primary" size="lg"
                    className="flex-1 shadow-md hover:shadow-lg transition-shadow duration-200"
                    onClick={() => setStep(step + 1)}>
                    Continuer →
                  </Button>
                ) : (
                  <Button type="submit" variant="primary" size="lg"
                    className="flex-1 shadow-md hover:shadow-lg transition-shadow duration-200">
                    Créer mon compte
                  </Button>
                )}
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
              <Shield className="w-3.5 h-3.5 text-[#3EA7DE] flex-shrink-0" />
              <span>Inscription sécurisée — vos données sont chiffrées et protégées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}