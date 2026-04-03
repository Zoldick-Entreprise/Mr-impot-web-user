// app/api/docs/page.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Code, Key, BookOpen, Shield, Copy, Check } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

const endpoints = [
  {
    method: "GET",
    path: "/documents",
    description: "Récupère la liste des documents (avec pagination et filtres)",
    params: [
      { name: "category", type: "string", description: "Filtre par catégorie (ex: fiscal, societes)" },
      { name: "limit", type: "integer", description: "Nombre de résultats par page (max 50)", default: "20" },
      { name: "page", type: "integer", description: "Numéro de la page", default: "1" },
      { name: "search", type: "string", description: "Recherche par mots-clés" }
    ],
    auth: true,
    example: `curl -X GET "https://api.mrimpôt.com/v1/documents?category=fiscal&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  {
    method: "GET",
    path: "/documents/{id}",
    description: "Récupère un document spécifique par son identifiant",
    params: [
      { name: "id", type: "string", description: "Identifiant unique du document" }
    ],
    auth: true,
    example: `curl -X GET "https://api.mrimpôt.com/v1/documents/doc_123456" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  {
    method: "GET",
    path: "/categories",
    description: "Liste toutes les catégories avec leurs métadonnées",
    params: [],
    auth: false,
    example: `curl -X GET "https://api.mrimpôt.com/v1/categories"`
  },
  {
    method: "GET",
    path: "/search",
    description: "Recherche avancée dans tous les contenus (documents, vidéos, jurisprudence)",
    params: [
      { name: "q", type: "string", required: true, description: "Requête de recherche" },
      { name: "type", type: "string", description: "Filtre par type (document, video, jurisprudence)" },
      { name: "limit", type: "integer", description: "Nombre de résultats", default: "20" }
    ],
    auth: true,
    example: `curl -X GET "https://api.mrimpôt.com/v1/search?q=licenciement+économique&type=document" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  {
    method: "POST",
    path: "/users/favorites",
    description: "Ajoute un document aux favoris de l'utilisateur authentifié",
    params: [
      { name: "document_id", type: "string", required: true, description: "ID du document" }
    ],
    auth: true,
    example: `curl -X POST "https://api.mrimpôt.com/v1/users/favorites" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document_id": "doc_123456"}'`
  }
];

const codeExamples = {
  javascript: `import { MrImpôtAPI } from 'mrimpôt-sdk';

const api = new MrImpôtAPI('YOUR_API_KEY');

// Récupérer les documents fiscaux
const documents = await api.documents.list({
  category: 'fiscal',
  limit: 10
});

console.log(documents);`,
  python: `from mrimpôt import Client

client = Client(api_key='YOUR_API_KEY')

# Recherche avancée
results = client.search(
    q='licenciement économique',
    type='document'
)

for doc in results:
    print(doc.title)`,
  php: `<?php
require_once 'vendor/autoload.php';

use MrImpôt\\Client;

$client = new Client('YOUR_API_KEY');

// Ajouter aux favoris
$client->favorites->add('doc_123456');
?>`
};

export default function APIDocsPage() {
  const [openEndpoint, setOpenEndpoint] = useState<number | null>(0);
  const [copied, setCopied] = useState<string | null>(null);
  const [activeLang, setActiveLang] = useState<keyof typeof codeExamples>("javascript");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleEndpoint = (index: number) => {
    setOpenEndpoint(openEndpoint === index ? null : index);
  };

  return (
    <>
      <LandingHeader />
      <main className="bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3EA7DE] bg-[#3EA7DE]/10 rounded-full mb-4">
                API Documentation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Documentation <span className="text-[#3EA7DE]">API</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Intégrez facilement les données juridiques de Mr Impôt dans vos applications.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-5 h-5 text-[#FF7F36]" />
                <h2 className="text-xl font-bold text-gray-900">Authentification</h2>
              </div>
              <p className="text-gray-600 mb-3">
                Toutes les requêtes doivent inclure une clé API dans l'en-tête <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Authorization</code>.
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
                <code>Authorization: Bearer votre_clé_api</code>
              </pre>
              <p className="text-sm text-gray-500 mt-3">
                Pour obtenir une clé, contactez-nous à <a href="mailto:api@mrimpôt.com" className="text-[#3EA7DE]">api@mrimpôt.com</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Endpoints disponibles</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleEndpoint(idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                        endpoint.method === "GET" ? "bg-green-100 text-green-700" :
                        endpoint.method === "POST" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-gray-800 font-mono text-sm">{endpoint.path}</code>
                    </div>
                    {openEndpoint === idx ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${
                    openEndpoint === idx ? "block" : "hidden"
                  }`}>
                    <p className="text-gray-600 mb-4">{endpoint.description}</p>
                    {endpoint.params.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Paramètres</h4>
                        <table className="w-full text-sm">
                          <thead className="text-gray-500 border-b">
                            <tr>
                              <th className="text-left py-2">Nom</th>
                              <th className="text-left py-2">Type</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.params.map((param, i) => (
                              <tr key={i} className="border-b border-gray-100">
                                <td className="py-2 font-mono text-gray-800">{param.name}</td>
                                <td className="py-2 text-gray-500">{param.type}</td>
                                <td className="py-2 text-gray-500">
                                  {param.required && <span className="text-red-500 mr-1">*</span>}
                                  {param.description}
                                  {param.default && <span className="text-gray-400 ml-1">(défaut: {param.default})</span>}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Exemple</h4>
                      <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
                          <code>{endpoint.example}</code>
                        </pre>
                        <button
                          onClick={() => copyToClipboard(endpoint.example, `endpoint-${idx}`)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                          {copied === `endpoint-${idx}` ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK / Code examples */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-[#3EA7DE]" />
                <h2 className="text-xl font-bold text-gray-900">Exemples de code (SDK)</h2>
              </div>
              <div className="flex gap-2 mb-4 border-b">
                {Object.keys(codeExamples).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang as keyof typeof codeExamples)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeLang === lang
                        ? "text-[#3EA7DE] border-b-2 border-[#3EA7DE]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {lang === "javascript" ? "JavaScript" : lang === "python" ? "Python" : "PHP"}
                  </button>
                ))}
              </div>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
                  <code>{codeExamples[activeLang]}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(codeExamples[activeLang], "sdk-example")}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {copied === "sdk-example" ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Les SDK officiels sont disponibles sur <a href="#" className="text-[#3EA7DE] hover:underline">GitHub</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-12 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[#FF7F36]" />
                <h2 className="text-xl font-bold text-gray-900">Limites d'utilisation</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Gratuit</strong> : 1000 requêtes par jour</li>
                <li>• <strong>Professionnel</strong> : 10 000 requêtes par jour</li>
                <li>• <strong>Entreprise</strong> : limites personnalisables</li>
                <li>• Taux de rafraîchissement : 10 requêtes/seconde maximum</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <a
                  href="mailto:api@mrimpôt.com"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3EA7DE] text-white rounded-xl font-medium hover:bg-[#3EA7DE]/90 transition-colors"
                >
                  Demander une clé API
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}