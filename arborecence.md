📁webapp
├── 📁 app
│ ├── 📁 (auth)
│ │ ├── 📁 login
│ │ │ └── 📄 page.tsx
│ │ ├── 📁 register
│ │ │ └── 📄 page.tsx
│ │ ├── 📁 forgot-password
│ │ │ └── 📄 page.tsx
│ │ └── 📁 reset-password
│ │ └── 📄 page.tsx
│ │
│ ├── 📁 (dashboard) ← Groupe avec layout persistant
│ │ ├── 📄 layout.tsx ← LAYOUT UNIQUE avec Sidebar intégrée
│ │ ├── 📄 page.tsx ← Dashboard Utilisateur (page d'accueil)
│ │ ├── 📁 documents
│ │ │ ├── 📄 page.tsx ← Liste des documents
│ │ │ └── 📁 [id]
│ │ │ └── 📄 page.tsx ← Détail d'un document
│ │ ├── 📁 videos
│ │ │ └── 📄 page.tsx
│ │ ├── 📁 search
│ │ │ └── 📄 page.tsx
│ │ ├── 📁 profile
│ │ │ └── 📄 page.tsx
│ │ └── 📁 settings
│ │ └── 📄 page.tsx
│ │
│ ├── 📄 favicon.ico
│ ├── 🎨 globals.css
│ ├── 📄 layout.tsx ← Layout racine (pas de sidebar)
│ └── 📄 page.tsx ← Landing Page
│
├── 📁 components
│ ├── 📁 common
│ │ ├── 📄 Button.tsx
│ │ ├── 📄 Card.tsx
│ │ ├── 📄 Input.tsx
│ │ ├── 📄 Modal.tsx
│ │ ├── 📄 LoadingSpinner.tsx
│ │ └── 📄 Avatar.tsx
│ │
│ ├── 📁 layout
│ │ ├── 📄 Header.tsx ← Header du dashboard
│ │ ├── 📄 Sidebar.tsx ← Sidebar complète
│ │ ├── 📄 SidebarItem.tsx ← Item de navigation
│ │ └── 📄 MobileMenu.tsx
│ │
│ ├── 📁 dashboard
│ │ ├── 📄 StatisticsCards.tsx
│ │ ├── 📄 RecentActivity.tsx
│ │ ├── 📄 CategoryGrid.tsx
│ │ ├── 📄 QuickActions.tsx
│ │ └── 📄 WelcomeBanner.tsx
│ │
│ ├── 📁 documents
│ │ ├── 📄 DocumentCard.tsx
│ │ ├── 📄 DocumentList.tsx
│ │ ├── 📄 DocumentFilters.tsx
│ │ └── 📄 PDFViewer.tsx
│ │
│ ├── 📁 videos
│ │ ├── 📄 VideoCard.tsx
│ │ ├── 📄 VideoPlayer.tsx
│ │ └── 📄 VideoList.tsx
│ │
│ ├── 📁 search
│ │ ├── 📄 SearchBar.tsx
│ │ ├── 📄 SearchResults.tsx
│ │ └── 📄 CategoryFilter.tsx
│ │
│ └── 📁 profile
│ ├── 📄 ProfileInfo.tsx
│ ├── 📄 ProfileStats.tsx
│ └── 📄 DocumentHistory.tsx
│
├── 📁 hooks
│ ├── 📄 useAuth.ts
│ ├── 📄 useDocuments.ts
│ ├── 📄 useSearch.ts
│ ├── 📄 useDebounce.ts
│ └── 📄 useSidebar.ts ← Gestion état sidebar (mobile/desktop)
│
├── 📁 services
│ ├── 📄 api.ts
│ ├── 📄 authService.ts
│ ├── 📄 documentService.ts
│ ├── 📄 userService.ts
│ └── 📄 searchService.ts
│
├── 📁 types
│ ├── 📄 index.ts
│ ├── 📄 user.ts
│ ├── 📄 document.ts
│ ├── 📄 video.ts
│ └── 📄 category.ts
│
├── 📁 utils
│ ├── 📄 constants.ts
│ ├── 📄 formatters.ts
│ ├── 📄 validators.ts
│ └── 📄 dateUtils.ts
│
├── 📁 data
│ └── 📄 mockData.ts
│
├── 📁 public
│ ├── 🖼️ file.svg
│ ├── 🖼️ globe.svg
│ ├── 🖼️ logo.png
│ ├── 🖼️ next.svg
│ ├── 🖼️ vercel.svg
│ └── 🖼️ window.svg
│
├── ⚙️ .gitignore
├── 📝 AGENTS.md
├── 📝 CLAUDE.md
├── 📝 README.md
├── 📄 eslint.config.mjs
├── 📄 next-env.d.ts
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
