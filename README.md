# Jack McGhee Real Estate - Sunshine Coast

A professional real estate website built with Astro framework, featuring a clean, luxurious design inspired by the Sunshine Coast.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with Sunshine Coast-inspired color palette
- **Performance Optimized**: Built with Astro for lightning-fast page loads
- **Responsive**: Mobile-first design that looks great on all devices
- **SEO Friendly**: Semantic HTML and optimized meta tags
- **Blog Section**: Dynamic blog with real estate insights and market analysis

## 🎨 Color Palette

The design features a luxurious Sunshine Coast-inspired palette:
- **Ocean Blues**: Deep ocean (#0A2E4D), Rich coastal (#1A5F7A), Light ocean (#86BBD8)
- **Sandy Tones**: Warm beige (#F4E9D8), Light cream (#FAF7F2)
- **Gold Accents**: Elegant gold (#C9A96E), Light gold (#E8D5B7)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── layouts/        # Layout components
│   │   └── Layout.astro
│   ├── pages/          # Page routes
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About Jack page
│   │   ├── blog.astro         # Blog index
│   │   └── blog/              # Blog posts
│   └── components/     # Reusable components (future)
├── astro.config.mjs    # Astro configuration
└── package.json
```

## 🌐 Pages

- **Home** (`/`): Hero section, services, why Sunshine Coast, about preview, blog preview
- **About Jack** (`/about`): Full biography, approach, services
- **Blog** (`/blog`): Market insights and articles
- **Individual Posts**: Detailed blog articles with rich content

## 🛠️ Technology Stack

- **Framework**: Astro 5.16.11
- **Styling**: CSS with custom properties
- **Content**: MDX support
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📝 Content

The website includes:
- Professional biography based on Jack's 20+ years of experience
- Three comprehensive blog posts on Sunshine Coast real estate
- Service descriptions for sellers and buyers
- Market insights and analysis

## 🎯 Performance

- Static site generation for optimal speed
- Minimal JavaScript footprint
- Optimized CSS delivery
- Font preloading
- Clean, semantic HTML

## 🚢 Deployment

### Cloudflare Pages

This project is configured for deployment on Cloudflare Pages:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 18 (specified in `.node-version` and `.nvmrc`)

See [BUILD.md](BUILD.md) for detailed build configuration and troubleshooting.

### GitHub Pages

Alternatively, the project can be deployed to GitHub Pages using the included workflow.

## 📧 Contact Information

Jack McGhee Real Estate  
📞 0400 123 456  
📧 jackmcghee@propertypro.com.au  
📍 Mooloolaba, Sunshine Coast QLD

---

*"Think you know property? You don't know Jack."*