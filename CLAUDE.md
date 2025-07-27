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
- All external links point to real FELADE certification sites (ciplad.felade.com, etc.)
- Site is optimized for bilingual content (Spanish primary, some English metadata)
- Built for static export capability (see commented options in next.config.mjs)

### Image Management System
The project uses a centralized image management system:
```javascript
// src/lib/images.js
export const heroBackgrounds = {
  ciplad: '/images/hero/ciplad-bg.jpg',
  cimar: '/images/hero/cimar-bg.jpg', 
  cibca: '/images/hero/cibca-bg.jpg',  // Crypto-themed
  wcf: '/images/hero/wcf-bg.jpg'
}

export const getImageWithFallback = (imagePath, fallbackType = 'hero') => {
  // Returns fallback if primary image fails
}
```

**Image Specifications:**
- Format: Optimized JPEG (80% quality)
- Max Dimensions: 1920px width
- Average Size: ~200-700KB per image
- Location: `public/images/hero/`
- Fallback: `felade-hero-bg.jpg`

### CSS Architecture Guidelines
**DO:**
- Use Tailwind classes for styling (`text-white`, `bg-blue-500`, etc.)
- Add custom FELADE classes in `globals.css` for specific components
- Use CSS variables for consistent theming

**DON'T:**
- Override global HTML tags (h1, h2, etc.) as it conflicts with Tailwind
- Use `!important` unless absolutely necessary for component-specific styles
- Create global styles that interfere with utility-first approach

**Custom Classes Available:**
- `.felade-header` - Custom gradient navbar
- `.glass` / `.glass-dark` - Glass morphism effects
- `.card-hover` - Standard card hover animations
- `.gradient-text` / `.gradient-text-primary` - Gradient text effects

### Recent Major Updates

#### Complete Professional Redesign & UI Optimization (Latest - July 2025)
Comprehensive transformation with modern design system, proper CSS architecture, and optimized performance:

**Core Infrastructure Updates:**
1. **CSS Architecture Cleanup** (`src/app/globals.css`):
   - Removed problematic global heading overrides that conflicted with Tailwind
   - Simplified to essential variables and utilities only
   - Full Tailwind CSS compatibility restored
   - Custom FELADE classes for specific components
   - Proper CSS specificity hierarchy

2. **Image Management System** (`src/lib/images.js` + `public/images/hero/`):
   - Professional hero background images for all certifications
   - Optimized JPEG format (80% quality, max 1920px width)
   - Fallback system for better UX
   - Crypto-themed CIBCA background updated
   - Total image optimization: 2.4MB → 719KB average

3. **New Homepage Components** (`src/components/sections/`):
   - **ServicesOverview.js**: Modern glass-morphism cards with gold accents (#C38523)
   - **MainCertifications.js**: Three main certification programs showcase
   - **SuccessIndicators.js**: Interactive statistics with parallax background and 20th anniversary logo

**Component Updates:**
1. **HeroSlider** (`src/components/sections/HeroSlider.js`):
   - Unified blue overlay for all slides (consistent CIPLAD theme)
   - Removed certificate mockup card for cleaner layout
   - Enhanced typography with proper contrast (#50D0FF accent color)
   - Optimized performance with 10-second rotation timing
   - Real background images with smooth transitions

2. **Header/Navbar** (`src/components/layout/Header.js`):
   - Correct FELADE name: "Fundación para el Estudio del Lavado de Activos y Delitos"
   - Custom gradient: #01174D → #1e3a8a (navy to FELADE blue)
   - Compact design with improved spacing
   - High z-index for proper layering
   - Mobile-optimized navigation

3. **ServicesOverview** (`src/components/sections/ServicesOverview.js`):
   - NEW: Replaced traditional white cards with glass-morphism design
   - Dark blue background (#01123E) with transparent cards
   - Gold color scheme (#C38523) for accents and icons
   - Optimized height with reduced padding and spacing
   - Three-column layout for main services, two-column for additional services
   - Professional backdrop blur effects and hover animations

4. **CertificationCards** (`src/components/sections/CertificationCards.js`):
   - Elevated design with gradient headers and distinctive colors
   - Detailed pricing information with installment options
   - Professional benefits listing and enhanced action buttons
   - Only showing main 3 certifications (excluding WCF from cards)

5. **UpazPartner** (`src/components/sections/UpazPartner.js`):
   - Professional gradient background (blue-50 to indigo-100)
   - Comprehensive UPAZ university statistics grid
   - Academic programs showcase with UN Peace University partnership
   - Enhanced iconography using React Icons

6. **InstitutionalStats** (`src/components/sections/InstitutionalStats.js`):
   - Background image with blue gradient overlay and pattern
   - Colorful icon system for each statistic (17,774+ professionals trained)
   - Recognition card and achievement highlight sections
   - Professional backdrop blur effects throughout

7. **SuccessIndicators** (`src/components/sections/SuccessIndicators.js`):
   - NEW: Full-screen parallax hero section with real background-attachment: fixed
   - 20th anniversary FELADE logo prominently displayed
   - Animated counter effects using Intersection Observer API
   - Unified FELADE blue color scheme (#01174D) for all elements
   - Interactive timeline with achievement milestones
   - Mobile-optimized parallax (disabled on mobile for performance)
   - Glass-morphism cards with backdrop-blur effects

8. **UpazPartner** (`src/components/sections/UpazPartner.js`):
   - Compact accordion-style design with UPAZ logo integration
   - Horizontal layout optimized for better space utilization
   - Enhanced partnership information with educational focus
   - Professional gradient backgrounds and improved typography
   - Interactive accordion functionality for detailed information
   - Streamlined presentation of Universidad para la Paz partnership

9. **CountryAlliances** (`src/components/sections/CountryAlliances.js`):
   - Complete redesign with institutional logo gallery
   - Regional organization with flag indicators
   - Professional partnership descriptions and website links
   - Enhanced visual hierarchy and improved card layouts
   - Logo fallback system for missing institutional images
   - Interactive hover effects and improved accessibility

10. **Header** (`src/components/layout/Header.js`):
    - NEW: Integrated FELADE white logo for professional branding
    - Replaced text-based logo with actual FELADE brand image
    - Optimized logo sizing and positioning for mobile/desktop
    - Improved navigation accessibility and visual consistency

11. **Footer** (`src/components/layout/Footer.js`):
    - Complete redesign with dark gradient background
    - FELADE and UPAZ white logos prominently displayed
    - International presence map with country flags
    - Enhanced contact information and social media integration
    - Newsletter subscription functionality
    - Professional regional presence showcase

**Technical Improvements:**
- Proper Tailwind CSS integration without global conflicts
- Optimized image loading and performance with Next.js Image component
- Real parallax effects with background-attachment: fixed (mobile-optimized)
- Intersection Observer API for smooth animations and performance
- Consistent FELADE blue color theming across all components (#01174D)
- Enhanced accessibility and responsive design
- Clean component architecture with proper error handling
- Improved development experience with better debugging
- Height optimization for better page flow and user experience
- CSS fixes for text color consistency and backdrop-blur effects
- Professional logo integration throughout the site

### Common Issues & Solutions
- **CSS Override Conflicts**: FIXED - Removed global heading color overrides that conflicted with Tailwind classes
- **Text Color Issues**: FIXED - Added specific CSS rules to ensure text colors work properly with Tailwind
- **Parallax on Mobile**: FIXED - Added media queries to disable background-attachment: fixed on mobile devices
- **Logo Display**: FIXED - Integrated actual FELADE and UPAZ logos throughout the site
- **Counter Animations**: FIXED - Implemented Intersection Observer for smooth number animations
- **INSTITUTIONAL_STATS Import Error**: Fixed duplicate export by renaming to INSTITUTIONAL_STATS_DETAILED
- **Missing 'critters' Module**: Removed experimental optimizeCss from next.config.mjs
- **Port Conflicts**: Next.js automatically uses alternative ports (3001, 3003, etc.)
- **Component Import Errors**: Ensure all required exports are available in constants.js
- **Image Loading**: Use the image utility system in `src/lib/images.js` for hero backgrounds with fallbacks
- **Header Z-Index**: Header uses z-index 9999 to stay above hero and other components
- **Backdrop Blur**: Added CSS fixes to ensure backdrop-blur effects work consistently

### Git Repository
- **Remote**: https://github.com/AndresAriasUrena/felade-institucional.git
- **Branch**: main (production ready)
- **Recent Commits**:
  - `536a884` - fixes hero slider (CSS cleanup, unified colors, layout optimization)
  - `602e00a` - feat: Add hero background images and update navbar with FELADE branding
  - `6fb61e5` - feat: Complete professional redesign of FELADE institutional website

### Current Development Status
- ✅ Professional hero slider with optimized images and unified design
- ✅ Correct FELADE branding with actual logos in header and footer
- ✅ Clean CSS architecture without Tailwind conflicts
- ✅ All major components redesigned and optimized
- ✅ Interactive SuccessIndicators with parallax and animated counters
- ✅ Professional UpazPartner section with accordion functionality
- ✅ Enhanced CountryAlliances with institutional logo gallery
- ✅ Complete footer redesign with international presence showcase
- ✅ Image management system implemented with fallbacks
- ✅ Mobile-responsive design with optimized parallax effects
- ✅ 20th anniversary branding integration
- ✅ Real logos (FELADE, UPAZ) implemented throughout the site

### Deployment Preparation
To enable static export for deployment:
1. Uncomment static export options in `next.config.mjs`
2. Ensure all dynamic routes have proper fallbacks
3. Replace any server-side functionality with static alternatives