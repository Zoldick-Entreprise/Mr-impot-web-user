export const APP_NAME = "M Impôt";
export const APP_DESCRIPTION =
  "Plateforme de documents et ressources juridiques";
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const FILE_FORMATS = {
  PDF: "application/pdf",
  DOC: "application/msword",
  DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  TXT: "text/plain",
} as const;

export const DOCUMENT_CATEGORIES = [
  "Droit Fiscal",
  "Droit des Sociétés",
  "Droit du Travail",
  "Jurisprudence",
  "Droit Commercial",
  "Droit Administratif",
] as const;
