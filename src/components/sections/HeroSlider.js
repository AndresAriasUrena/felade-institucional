'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import { CERTIFICATIONS } from '../../lib/constants'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length)
    }, 7000) // Slower timing for better UX
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length)
  }

  const currentCert = CERTIFICATIONS[currentSlide]

  // Background images for each certification
  const backgroundImages = {
    ciplad: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
    cimar: "linear-gradient(135deg, #065f46 0%, #059669 100%)", 
    cibca: "linear-gradient(135deg, #581c87 0%, #7c3aed 100%)",
    wcf: "linear-gradient(135deg, #991b1b 0%, #dc2626 100%)"
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: backgroundImages[currentCert.id] || backgroundImages.ciplad
        }}
      />
      
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Dark Overlay for Content Readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-secondary-500 text-primary-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide">
              <span className="mr-2">{currentCert.icon}</span>
              {currentCert.badge}
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentCert.title}
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
              {currentCert.description}
            </p>
            
            {/* Key Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide mb-2">
                  Modalidad
                </div>
                <div className="text-white font-semibold">En línea</div>
                <div className="text-gray-200 text-sm mt-1">
                  Horario Costa Rica
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide mb-2">
                  Duración
                </div>
                <div className="text-white font-semibold">{currentCert.duration}</div>
                <div className="text-gray-200 text-sm mt-1">
                  {currentCert.credits}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide">
                    Inversión
                  </div>
                  <div className="text-3xl font-bold text-white">
                    ${currentCert.priceUSD?.toLocaleString() || 'Consultar'}
                    <span className="text-lg text-gray-200 ml-2">USD</span>
                  </div>
                  {currentCert.installments && (
                    <div className="text-gray-200 text-sm mt-1">
                      {currentCert.installments}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide">
                    Sin Requisitos
                  </div>
                  <div className="text-white">
                    ✓ Acceso inmediato
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="xl"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
                href={currentCert.enrollLink}
              >
                ¡Inscríbete YA!
              </Button>
              <Button 
                variant="outline"
                size="xl"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 text-lg transition-all duration-200"
                href={currentCert.infoLink}
              >
                Más información
              </Button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative lg:flex justify-center items-center hidden">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-96 h-96 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                <div className="text-9xl opacity-80 filter drop-shadow-2xl">
                  {currentCert.icon}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-secondary-500/80 backdrop-blur-sm flex items-center justify-center animate-bounce">
                <span className="text-primary-900 font-bold text-lg">
                  {currentCert.duration.split(' ')[0]}
                </span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {currentCert.credits.split(' ')[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-black/30 backdrop-blur-sm rounded-full px-6 py-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="flex space-x-3">
            {CERTIFICATIONS.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-secondary-500 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider