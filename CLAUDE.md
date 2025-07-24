# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the FELADE institutional website, built with Next.js 15.4.3 and React 19. FELADE (Federación Latinoamericana de Estudios en Administración y Derecho Económico) is an organization specializing in AML/FT (Anti-Money Laundering/Financing of Terrorism) training and compliance certifications across Latin America.

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

### Common Issues
- If `INSTITUTIONAL_STATS` import errors occur, ensure it's properly exported as an array in constants.js
- TailwindCSS experimental features may require specific versions - avoid `optimizeCss` which needs additional dependencies
- Port conflicts are common - Next.js will automatically use available ports (3001, 3003, etc.)

### Deployment Preparation
To enable static export for deployment:
1. Uncomment static export options in `next.config.mjs`
2. Ensure all dynamic routes have proper fallbacks
3. Replace any server-side functionality with static alternatives