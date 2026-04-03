export type Article = {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
};

export const articles: Article[] = [
{
  "title": "TVA : les erreurs les plus fréquentes des entrepreneurs",
  "excerpt": "Facturation incorrecte, mauvaise déclaration, oubli de déduction… découvrez les erreurs de TVA les plus courantes et comment les éviter.",
  "content": `
  <p>La TVA représente l'une des obligations fiscales les plus complexes pour les entrepreneurs. Une mauvaise gestion peut entraîner des pénalités importantes.</p>

  <h2>Erreur n°1 : appliquer le mauvais taux</h2>
  <p>En France plusieurs taux existent : 20%, 10%, 5,5% et 2,1%. Chaque activité doit appliquer le taux correspondant à son secteur.</p>

  <h2>Erreur n°2 : oublier de collecter la TVA</h2>
  <p>Certaines entreprises facturent sans TVA alors qu'elles dépassent les seuils de franchise.</p>

  <h2>Erreur n°3 : mauvaise déduction de la TVA</h2>
  <p>Toutes les dépenses ne permettent pas de récupérer la TVA. Par exemple certains frais de véhicule.</p>

  <p>Une bonne organisation comptable et l'utilisation d'outils adaptés permettent d'éviter ces erreurs.</p>
  `,
  "date": "22 février 2025",
  "author": "Claire Bernard",
  "readTime": "6 min",
  "category": "Fiscal",
  "slug": "erreurs-tva-entrepreneurs"
},

{
  "title": "Auto-entrepreneur : les seuils de chiffre d'affaires 2025",
  "excerpt": "Quels sont les plafonds de chiffre d'affaires pour rester en micro-entreprise en 2025 ?",
  "content": `
  <p>Le régime de la micro-entreprise reste très populaire en France. Il permet une gestion simplifiée des obligations fiscales.</p>

  <h2>Seuils pour les activités commerciales</h2>
  <p>Le plafond est fixé à 188 700 € de chiffre d'affaires annuel.</p>

  <h2>Seuils pour les prestations de services</h2>
  <p>Le plafond est de 77 700 € par an.</p>

  <h2>Dépassement des seuils</h2>
  <p>Si ces seuils sont dépassés deux années consécutives, l'entreprise bascule vers un régime réel d'imposition.</p>

  <p>Il est donc essentiel de suivre régulièrement son chiffre d'affaires.</p>
  `,
  "date": "10 février 2025",
  "author": "Julien Morel",
  "readTime": "4 min",
  "category": "Entrepreneuriat",
  "slug": "seuils-auto-entrepreneur-2025"
},

{
"title":"Comment optimiser la fiscalité de votre PME",
"excerpt":"Plusieurs dispositifs permettent aux PME de réduire leur charge fiscale légalement.",
"content":`
<p>Les PME disposent de nombreux leviers fiscaux pour optimiser leur fiscalité.</p>

<h2>Amortissements accélérés</h2>
<p>Certains investissements peuvent bénéficier d'amortissements plus rapides.</p>

<h2>Crédit d'impôt recherche</h2>
<p>Le CIR permet de financer une partie des dépenses de R&D.</p>

<h2>Déduction des investissements</h2>
<p>Certains équipements peuvent être déduits du résultat fiscal.</p>
`,
"date":"5 février 2025",
"author":"Sophie Martin",
"readTime":"7 min",
"category":"Fiscal",
"slug":"optimiser-fiscalite-pme"
},

{
"title":"Les obligations comptables des sociétés",
"excerpt":"Tenue des comptes, dépôt des comptes annuels, documents obligatoires : ce que toute société doit respecter.",
"content":`
<p>Toute société doit respecter des obligations comptables strictes.</p>

<h2>Tenue d'une comptabilité régulière</h2>
<p>Les entreprises doivent enregistrer chronologiquement toutes les opérations.</p>

<h2>Établissement des comptes annuels</h2>
<p>Ils comprennent le bilan, le compte de résultat et l'annexe.</p>

<h2>Dépôt au greffe</h2>
<p>Les comptes doivent être déposés chaque année.</p>
`,
"date":"28 janvier 2025",
"author":"Marc Lefevre",
"readTime":"6 min",
"category":"Comptabilité",
"slug":"obligations-comptables-societes"
},

{
"title":"Facturation électronique : ce qui change pour les entreprises",
"excerpt":"La réforme de la facturation électronique va transformer la gestion administrative des entreprises.",
"content":`
<p>La facturation électronique deviendra progressivement obligatoire.</p>

<h2>Objectifs de la réforme</h2>
<p>Lutter contre la fraude à la TVA et simplifier les échanges entre entreprises.</p>

<h2>Calendrier</h2>
<p>La mise en place se fera progressivement entre 2026 et 2028.</p>
`,
"date":"20 janvier 2025",
"author":"Thomas Dubois",
"readTime":"5 min",
"category":"Fiscal",
"slug":"facturation-electronique-entreprises"
},

{
"title":"Comment choisir entre SAS et SARL",
"excerpt":"Ces deux formes juridiques sont très populaires, mais présentent des différences importantes.",
"content":`
<p>Le choix du statut juridique influence la gestion et la fiscalité de l'entreprise.</p>

<h2>La SARL</h2>
<p>Structure plus encadrée et adaptée aux projets familiaux.</p>

<h2>La SAS</h2>
<p>Structure flexible souvent choisie par les startups.</p>
`,
"date":"15 janvier 2025",
"author":"Marie Laurent",
"readTime":"7 min",
"category":"Sociétés",
"slug":"sas-ou-sarl"
},

{
"title":"Les aides financières pour les jeunes entrepreneurs",
"excerpt":"Plusieurs dispositifs existent pour aider les créateurs d'entreprise.",
"content":`
<p>Les jeunes entrepreneurs peuvent bénéficier d'aides financières.</p>

<h2>ACRE</h2>
<p>Réduction de charges sociales pendant la première année.</p>

<h2>Prêt d'honneur</h2>
<p>Prêt sans intérêt accordé par certains organismes.</p>
`,
"date":"8 janvier 2025",
"author":"Claire Bernard",
"readTime":"6 min",
"category":"Entrepreneuriat",
"slug":"aides-jeunes-entrepreneurs"
},

{
"title":"Déclaration d'impôt : les dates clés à retenir",
"excerpt":"Voici le calendrier fiscal à connaître pour éviter les pénalités.",
"content":`
<p>Chaque année les contribuables doivent respecter plusieurs échéances.</p>

<h2>Déclaration en ligne</h2>
<p>Les dates varient selon les départements.</p>

<h2>Paiement de l'impôt</h2>
<p>Le prélèvement à la source permet d'étaler le paiement.</p>
`,
"date":"3 janvier 2025",
"author":"Julien Morel",
"readTime":"5 min",
"category":"Fiscal",
"slug":"dates-declaration-impot"
},

{
"title":"Comment préparer un contrôle fiscal",
"excerpt":"Un contrôle fiscal peut arriver à toute entreprise. Voici comment s'y préparer.",
"content":`
<p>Un contrôle fiscal vise à vérifier la conformité des déclarations.</p>

<h2>Documents à préparer</h2>
<p>Factures, relevés bancaires et livres comptables.</p>

<h2>Attitude à adopter</h2>
<p>Coopérer avec l'administration et fournir les informations demandées.</p>
`,
"date":"28 décembre 2024",
"author":"Marc Lefevre",
"readTime":"6 min",
"category":"Fiscal",
"slug":"preparer-controle-fiscal"
},

{
"title":"Les charges déductibles pour les indépendants",
"excerpt":"Certaines dépenses peuvent être déduites du revenu imposable.",
"content":`
<p>Les travailleurs indépendants peuvent déduire plusieurs types de charges.</p>

<h2>Frais professionnels</h2>
<p>Matériel, logiciels, déplacements.</p>

<h2>Frais de formation</h2>
<p>Les formations professionnelles sont déductibles.</p>

<h2>Frais de bureau</h2>
<p>Location d'espace ou bureau à domicile.</p>
`,
"date":"20 décembre 2024",
"author":"Sophie Martin",
"readTime":"5 min",
"category":"Fiscal",
"slug":"charges-deductibles-independants"
}
];