// src/components/sections/HeroSlider.js - Versión mejorada con fondos
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { CERTIFICATIONS } from '../../lib/constants';
import { heroBackgrounds, getImageWithFallback } from '../../lib/images';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const currentCert = CERTIFICATIONS[currentSlide];
  const backgroundImage = getImageWithFallback(heroBackgrounds[currentCert.id], 'hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image con Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt={`${currentCert.title} background`}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-700/70"></div>
          
          {/* Patrón de puntos superpuesto */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Text Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div className="bg-gradient-to-r from-secondary-400 to-secondary-500 text-primary-900 px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                ✨ {currentCert.badge}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight">
              <span className="block text-white">{currentCert.title.split(' ').slice(0, 2).join(' ')}</span>
              <span className="block bg-gradient-to-r from-secondary-400 to-secondary-500 bg-clip-text text-transparent">
                {currentCert.title.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-light max-w-2xl">
              {currentCert.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                size="xl"
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-primary-900 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                href={currentCert.enrollLink}
              >
                🚀 ¡Inscríbete Ahora!
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-primary-900 backdrop-blur-sm"
                href={currentCert.infoLink}
              >
                📋 Más Información
              </Button>
            </div>
            
            {/* Quick Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide">Modalidad</div>
                <div className="text-lg font-semibold mt-1">En línea</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide">Duración</div>
                <div className="text-lg font-semibold mt-1">{currentCert.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-secondary-400 font-bold text-sm uppercase tracking-wide">Precio</div>
                <div className="text-lg font-semibold mt-1">${currentCert.priceUSD} USD</div>
              </div>
            </div>
          </div>
          
          {/* Visual/Certificate Preview */}
          <div className="relative">
            <div className="relative">
              {/* Certificate mockup */}
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-center space-y-6">
                  <div className="text-6xl opacity-80">
                    {currentCert.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary-900">
                      Certificado Internacional
                    </h3>
                    <p className="text-gray-600 font-semibold">
                      {currentCert.badge}
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Reconocido en toda Latinoamérica
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                ¡Nuevo!
              </div>
            </div>
          </div>
        </div>
        
        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/30"
            aria-label="Anterior certificación"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {CERTIFICATIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-secondary-500 shadow-lg scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir a certificación ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/30"
            aria-label="Siguiente certificación"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60 animate-pulse">
            <span className="text-xs uppercase tracking-wide font-semibold mb-2">Scroll</span>
            <div className="w-px h-8 bg-white/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;