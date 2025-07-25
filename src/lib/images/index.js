// src/lib/images/index.js - Gestor centralizado de imágenes

// Fondos para hero slider
export const heroBackgrounds = {
  ciplad: '/images/hero/ciplad-bg.jpg',
  cimar: '/images/hero/cimar-bg.jpg', 
  cibca: '/images/hero/cibca-bg.jpg',
  wcf: '/images/hero/wcf-bg.jpg',
  default: '/images/hero/felade-hero-bg.jpg'
};

// Ilustraciones para secciones
export const sectionIllustrations = {
  mission: '/images/illustrations/mission-illustration.svg',
  vision: '/images/illustrations/vision-illustration.svg',
  values: '/images/illustrations/values-illustration.svg',
  certifications: '/images/illustrations/certifications-graphic.svg',
  services: '/images/illustrations/services-graphic.svg',
  stats: '/images/illustrations/stats-background.svg',
  upaz: '/images/illustrations/upaz-partnership.jpg',
  countries: '/images/illustrations/latin-america-map.svg'
};

// Logos de partners y alianzas
export const partnerLogos = {
  upaz: '/images/partners/upaz-logo.png',
  costaRica: '/images/partners/costa-rica-ccpa.png',
  mexico: '/images/partners/mexico-cnbv.png',
  peru: '/images/partners/peru-iai.png',
  panama: '/images/partners/panama-ssnf.png',
  dominicana: '/images/partners/dominicana-uaf.png',
  wcf: '/images/partners/wcf-logo.png'
};

// Íconos de certificaciones 
export const certificationIcons = {
  ciplad: '/images/icons/ciplad-shield.svg',
  cimar: '/images/icons/cimar-matrix.svg',
  cibca: '/images/icons/cibca-blockchain.svg',
  wcf: '/images/icons/wcf-globe.svg'
};

// Imágenes de país/flags
export const countryImages = {
  costaRica: '/images/countries/costa-rica.jpg',
  mexico: '/images/countries/mexico.jpg',
  peru: '/images/countries/peru.jpg',
  panama: '/images/countries/panama.jpg',
  dominicana: '/images/countries/dominicana.jpg',
  usa: '/images/countries/usa.jpg'
};

// Fondos de gradiente/texturas
export const backgrounds = {
  blueGradient: '/images/backgrounds/blue-gradient.jpg',
  blockchainPattern: '/images/backgrounds/blockchain-pattern.svg',
  worldMap: '/images/backgrounds/world-map-overlay.svg',
  geometricPattern: '/images/backgrounds/geometric-pattern.svg'
};

// Placeholders SVG mientras no tengas las imágenes reales
export const placeholders = {
  hero: "data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231e3a8a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23172554;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif'%3EFELADE%3C/text%3E%3C/svg%3E",
  certification: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3ECertificación%3C/text%3E%3C/svg%3E",
  partner: "data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3ELogo Partner%3C/text%3E%3C/svg%3E"
};

// Función helper para obtener imagen con fallback
export const getImageWithFallback = (imagePath, fallbackType = 'hero') => {
  if (!imagePath) return placeholders[fallbackType];
  return imagePath;
};

// Función para verificar si una imagen existe
export const checkImageExists = async (imagePath) => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Export default con todas las categorías
export default {
  heroBackgrounds,
  sectionIllustrations, 
  partnerLogos,
  certificationIcons,
  countryImages,
  backgrounds,
  placeholders,
  getImageWithFallback,
  checkImageExists
};