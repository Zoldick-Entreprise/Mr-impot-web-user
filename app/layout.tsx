import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const inter = { className: "font-sans" };

export const metadata: Metadata = {
  title: "M Impôt - Plateforme de ressources juridiques",
  description:
    "Accédez à tous vos documents juridiques, vidéos éducatives et ressources fiscales en un seul endroit.",
  keywords: "impôts, fiscalité, droit, jurisprudence, documents juridiques",
  authors: [{ name: "M Impôt" }],
  openGraph: {
    title: "M Impôt - Plateforme de ressources juridiques",
    description:
      "Accédez à tous vos documents juridiques, vidéos éducatives et ressources fiscales.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
