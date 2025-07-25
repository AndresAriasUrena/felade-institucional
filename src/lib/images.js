// src/lib/images.js - Image paths and fallback configuration

/**
 * Hero background images for each certification
 */
export const heroBackgrounds = {
  ciplad: '/images/hero/ciplad-bg.jpg',
  cimar: '/images/hero/cimar-bg.jpg', 
  cibca: '/images/hero/cibca-bg.jpg',
  wcf: '/images/hero/wcf-bg.jpg'
}

/**
 * Default fallback images for different sections
 */
export const fallbackImages = {
  hero: '/images/hero/felade-hero-bg.jpg',
  // Add more fallbacks as needed
}

/**
 * Get image path with fallback support
 * @param {string} imagePath - Primary image path
 * @param {string} fallbackType - Type of fallback ('hero', etc.)
 * @returns {string} Image path or fallback
 */
export const getImageWithFallback = (imagePath, fallbackType = 'hero') => {
  if (!imagePath) {
    return fallbackImages[fallbackType] || fallbackImages.hero
  }
  return imagePath
}

/**
 * Preload hero images for better performance
 */
export const preloadHeroImages = () => {
  if (typeof window !== 'undefined') {
    Object.values(heroBackgrounds).forEach(src => {
      const img = new Image()
      img.src = src
    })
  }
}