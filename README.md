# Nhi Tran - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Science student and aspiring Software Developer.

## 🚀 Technology Stack

- **React 18** - Modern JavaScript library for building user interfaces
- **Next.js 14** - React framework with server-side rendering and routing
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Type-safe JavaScript for better development experience
- **Lucide React** - Beautiful, customizable SVG icons

## 📁 Project Structure

```
portfolio-website/
├── frontend/                 # Next.js React application
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   │   ├── contact/     # Contact page
│   │   │   ├── projects/    # Projects showcase page
│   │   │   ├── globals.css  # Global styles
│   │   │   ├── layout.tsx   # Root layout
│   │   │   └── page.tsx     # Homepage
│   │   └── components/      # Reusable React components
│   │       ├── Navbar.tsx   # Navigation component
│   │       ├── Hero.tsx     # Hero section
│   │       ├── About.tsx    # About section
│   │       ├── Skills.tsx   # Skills section
│   │       ├── Experience.tsx # Experience section
│   │       └── Education.tsx  # Education section
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── next.config.js
└── README.md               # This file
```

## 🎨 Design Features

- **Modern Neutral Design** - Clean, professional appearance with light grey background
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Subtle hover effects and transitions
- **Accessible Navigation** - Clear, intuitive navigation between pages
- **Interactive Projects** - Expandable project cards with detailed information

## 📄 Pages Overview

### 1. Homepage (About Me)

- Hero section with profile image and introduction
- About section with personal summary
- Skills showcase with technical and soft skills
- Professional experience timeline
- Educational background

### 2. Projects Page

- Categorized project display (Academic vs Professional)
- Interactive project cards with:
  - Technology tags
  - GitHub links
  - Expandable details (responsibilities, outcomes, team info)
- Filter functionality

### 3. Contact Page

- Contact form with validation
- Direct contact information
- Social media links
- Career objectives and availability

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **Git**

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 GitHub Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub repository**
2. **Connect repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set root directory to `frontend`
   - Deploy automatically

### Option 2: Deploy to Netlify

1. **Push to GitHub repository**
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set publish directory to `frontend/out`
   - Set build command to `cd frontend && npm run build && npm run export`

### Option 3: GitHub Pages

1. **Update next.config.js for static export:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

2. **Add to package.json:**

```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "gh-pages -d out"
  }
}
```

3. **Install and deploy:**

```bash
cd frontend
npm install --save-dev gh-pages
npm run export
npm run deploy
```

## 📄 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Key Features

- **Performance Optimized** - Fast loading with Next.js optimizations
- **SEO Friendly** - Proper meta tags and structured data
- **Type Safe** - Full TypeScript implementation
- **Professional Design** - Clean, modern UI suitable for job applications
- **Mobile Responsive** - Perfect display across all device sizes
- **Static Export Ready** - Can be deployed to any static hosting service

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Primary Colors**: Various shades of grey (#f8f9fa to #343a40)
- **Accent Colors**: Blue gradient (#2196f3 to #1565c0)
- **Background**: Light grey (#f8f9fa)
- **Text**: Dark grey (#343a40)

## 📞 Contact Information

**Ngoc Yen Nhi Tran**

- 📧 Email: id.tnyennhi@gmail.com
- 📱 Phone: 0412 480 535
- 📍 Location: Gwynneville NSW 2500
- 💼 LinkedIn: [janny-tran-a31621192](https://www.linkedin.com/in/janny-tran-a31621192)
- 💻 GitHub: [id-nynt](https://github.com/id-nynt)

---

_This portfolio website demonstrates my frontend development skills and serves as a comprehensive showcase of my academic projects, professional experience, and technical competencies. Built with modern React and Next.js following best practices for performance, accessibility, and user experience._
