# Janny Tran - Portfolio Website

A multi-phase portfolio website showcasing my journey as a Computer Science graduate student and aspiring Software Developer.
[Profile Website](https://250020-profile-web.vercel.app/)

## 📋 Navigation Menu

- **🏠 Homepage** - Profile introduction with 6 sections (Hero, About, Skills, Education, Competitions, Experience)
- **💼 Projects** - Dynamic project showcase with filtering and categorization
- **📞 Contact** - Professional contact information and career objectives

## 🏗️ Project Architecture & Development Phases

### **Phase 1: Frontend Foundation** ✅ **COMPLETED**

Complete React + Next.js application with responsive design, dark theme hero section, dynamic project showcase, and consistent footer component across all pages.

### **Phase 2: Backend Integration** 🔄 **PLANNED**

RESTful API and PostgreSQL integration for dynamic content management, contact form processing, and admin dashboard.

### **Phase 3: Cloud Hosting** 📋 **FUTURE**

AWS deployment with CI/CD pipeline, advanced analytics, and scalable infrastructure.

## 🚀 Technology Stack

- **Frontend**: React + TailwindCSS
- **Backend**: ASP.NET + PostgreSQL _(planned)_
- **Deployment**: AWS \_(planned)

## 📁 Project Architecture

```
250020_Profile-Web/
├── 📂 frontend/                    # Phase 1: Next.js Application
│   ├── 📂 src/
│   │   ├── 📂 app/                # Next.js App Router
│   │   │   ├── 📂 contact/        # Contact page with background
│   │   │   ├── 📂 projects/       # Dynamic project showcase
│   │   │   ├── 📄 globals.css     # Global styles & Tailwind
│   │   │   ├── 📄 layout.tsx      # Root layout with navigation
│   │   │   └── 📄 page.tsx        # Homepage (6 sections)
│   │   ├── 📂 components/         # Reusable UI Components
│   │   │   ├── 📄 Navbar.tsx      # Responsive navigation
│   │   │   ├── 📄 Hero.tsx        # Dark theme hero section
│   │   │   ├── 📄 About.tsx       # Personal introduction
│   │   │   ├── 📄 Skills.tsx      # Technical skills grid
│   │   │   ├── 📄 Education.tsx   # Academic background
│   │   │   ├── 📄 Competitions.tsx # Achievements showcase
│   │   │   ├── 📄 Experience.tsx  # Work experience timeline
│   │   │   └── 📄 Footer.tsx      # Consistent footer component
│   │   ├── 📂 data/               # Static data management
│   │   ├── 📂 services/           # API service layer
│   │   ├── 📂 types/              # TypeScript definitions
│   │   └── 📂 lib/                # Utility functions
│   ├── 📂 public/                 # Static assets
│   │   ├── 📂 images/             # Optimized images
│   │   │   ├── 📂 contact/        # Contact page assets
│   │   │   ├── 📂 projects/       # Project screenshots
│   │   │   └── 📂 home/           # Homepage assets
│   │   └── 📂 documents/          # Resume and documents
│   ├── 📄 package.json            # Dependencies & scripts
│   ├── 📄 tailwind.config.js      # Custom design system
│   ├── 📄 next.config.js          # Next.js configuration
│   └── 📄 tsconfig.json           # TypeScript configuration
├── 📂 backend/                     # Phase 2: Future API (Planned)
├── 📂 docs/                        # Phase 3: Documentation (Future)
├── 📄 README.md                    # This comprehensive guide
├── 📄 ARCHITECTURE.md              # Detailed architecture docs
└── 📄 PHASE1-DEPLOYMENT.md         # Phase 1 deployment guide
```

## 🛠️ Quick Start - Local Development

```bash
# Clone the repository
git clone https://github.com/id-nynt/250020_Profile-Web.git
cd 250020_Profile-Web

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

**Local URL**: `http://localhost:3000`

## 📞 Contact & Website

**Janny Tran** _(Ngoc Yen Nhi Tran)_

- 📧 **Email**: [id.tnyennhi@gmail.com](mailto:id.tnyennhi@gmail.com)
- 📱 **Phone**: [0412 480 535](tel:0412480535)
- 💼 **LinkedIn**: [janny-tran-a31621192](https://www.linkedin.com/in/janny-tran-a31621192)
- 💻 **GitHub**: [id-nynt](https://github.com/id-nynt)
- 🌐 **Live Website via Vercel**: [Profile Website](https://250020-profile-web.vercel.app/)
