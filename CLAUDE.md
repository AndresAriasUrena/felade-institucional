# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the FELADE institutional website, built with Next.js 15.4.3 and React 19. FELADE (Fundación para el Estudio del Lavado de Activos y Delitos) is an organization specializing in AML/FT (Anti-Money Laundering/Financing of Terrorism) training and compliance certifications across Latin America.

## Development Commands

```bash
# Start development server (usually runs on port 3000, may use alternate ports if occupied)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture Overview

### Core Structure
- **Next.js App Router**: Uses the modern App Router pattern with `src/app/` directory structure
- **Component-based Architecture**: Organized into layout, sections, and reusable UI components
- **Centralized Data Management**: All content and configuration stored in `src/lib/constants.js`

### Key Directories
- `src/app/`: Next.js App Router pages with individual route folders
- `src/components/layout/`: Shared layout components (Header, Footer)
- `src/components/sections/`: Page section components for the homepage
- `src/components/ui/`: Reusable UI components (Button, Card, Container)
- `src/lib/constants.js`: Single source of truth for all site data

### Styling System
- **TailwindCSS v4**: Configured with FELADE brand colors (primary blues, secondary yellows/golds)
- **Custom Design System**: 
  - Primary colors: Blue scale (#eff6ff to #172554)
  - Secondary colors: Yellow/gold scale (#fefce8 to #422006)
  - Responsive container system with custom breakpoints
  - Custom fonts: Inter (sans), Georgia (serif)

### Content Architecture
The `constants.js` file contains all site content organized into exports:
- `CERTIFICATIONS`: Array of certification programs (CIPLAD, CIMAR, CIBCA, WCF)
- `SERVICES`: Educational services offered
- `INSTITUTIONAL_STATS`: Statistics for homepage display
- `COUNTRIES_ALLIANCES`: Partner institutions by country
- `CONTACT_INFO`: Office locations (Costa Rica, Miami)
- `COMPANY_INFO`: Mission, vision, founding info

### Homepage Components
The main page (`src/app/page.js`) renders these sections in order:
1. `HeroSlider`: Interactive certification carousel
2. `InstitutionalMission`: Mission, vision, values
3. `CertificationCards`: Detailed certification displays
4. `ServicesSection`: Services overview
5. `AcademicPrograms`: Academic offerings
6. `InstitutionalStats`: Statistics display
7. `UpazPartner`: UN University partnership info
8. `CountryAlliances`: International presence
9. `AboutUsExcerpt`: Company overview

### Key Configuration Files
- `next.config.mjs`: SEO redirects, image optimization, security headers, static export ready
- `tailwind.config.js`: Brand colors, custom fonts, responsive breakpoints
- `src/app/globals.css`: Custom CSS variables, animations, utility classes

### Static Assets
- Partner logos expected in `public/images/partners/` (currently using CSS placeholders)
- Favicon and basic icons in `public/` root

### Important Development Notes
- Uses React Icons (`react-icons`) and Heroicons (`@heroicons/react`) for iconography
- Framer Motion available for animations (v12.23.9)
- All external links point to real FELADE certification sites (ciplad.felade.com, etc.)
- Site is optimized for bilingual content (Spanish primary, some English metadata)
- Built for static export capability (see commented options in next.config.mjs)

### Recent Major Updates

#### Professional Redesign (Latest - December 2024)
Complete transformation of all major components with modern, professional design system:

**Component Updates:**
1. **HeroSlider** (`src/components/sections/HeroSlider.js`):
   - Full-screen professional hero with dynamic certification backgrounds
   - Color-coded gradients per certification (CIPLAD: blue, CIMAR: emerald, CIBCA: purple, WCF: red)
   - Interactive pricing display and detailed certification information
   - Auto-rotation every 7 seconds with manual navigation controls

2. **CertificationCards** (`src/components/sections/CertificationCards.js`):
   - Elevated card design with gradient headers and distinctive colors
   - Detailed pricing information with installment options
   - Professional benefits listing and enhanced action buttons
   - WCF certification excluded from main display

3. **UpazPartner** (`src/components/sections/UpazPartner.js`):
   - Professional gradient background (blue-50 to indigo-100)
   - Comprehensive UPAZ university statistics grid
   - Academic programs showcase with UN Peace University partnership
   - Enhanced iconography using React Icons

4. **InstitutionalStats** (`src/components/sections/InstitutionalStats.js`):
   - Background image with blue gradient overlay and pattern
   - Colorful icon system for each statistic (17,774+ professionals trained)
   - Recognition card and achievement highlight sections
   - Professional backdrop blur effects throughout

5. **ServicesSection** (`src/components/sections/ServicesSection.js`):
   - Enhanced responsive grid layout (2/3 columns)
   - Professional React Icons replacing emoji icons
   - Color-coded services (consultancy: blue, programs: emerald, advisory: purple, conferences: red, training: orange)
   - Integrated statistics section with key business metrics
   - Modern card design with gradient headers and hover effects

**Design System Improvements:**
- Consistent gradient backgrounds and backdrop blur effects
- Professional color theming with certification-specific palettes
- Enhanced typography and visual hierarchy
- Smooth hover animations and interactive elements
- Mobile-responsive layouts across all components
- Modern card designs with shadow and elevation effects
- Professional iconography throughout the site

### Common Issues & Solutions
- **INSTITUTIONAL_STATS Import Error**: Fixed duplicate export by renaming to INSTITUTIONAL_STATS_DETAILED
- **Missing 'critters' Module**: Removed experimental optimizeCss from next.config.mjs
- **Port Conflicts**: Next.js automatically uses alternative ports (3001, 3003, etc.)
- **Component Import Errors**: Ensure all required exports are available in constants.js

### Git Repository
- **Remote**: https://github.com/AndresAriasUrena/felade-institucional.git
- **Branch**: main (production ready)
- **Latest Commit**: Professional redesign with enhanced components and design system

### Deployment Preparation
To enable static export for deployment:
1. Uncomment static export options in `next.config.mjs`
2. Ensure all dynamic routes have proper fallbacks
3. Replace any server-side functionality with static alternatives