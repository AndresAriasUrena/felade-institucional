// src/components/sections/HeroSlider.js - Versión sin tarjeta de certificado
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CERTIFICATIONS } from '../../lib/constants';
import { heroBackgrounds, getImageWithFallback } from '../../lib/images';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 10000);
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

  // Función para obtener el título correcto
  const getTitle = (cert) => {
    switch(cert.id) {
      case 'ciplad':
        return {
          subtitle: 'Certificación en Prevención del Lavado',
          title: 'de Activos y Delitos (CIPLAD)'
        };
      case 'cimar':
        return {
          subtitle: 'Taller Internacional en',
          title: 'Matrices de Riesgo (CIMAR)'
        };
      case 'cibca':
        return {
          subtitle: 'Certificación Internacional Blockchain,',
          title: 'Compliance y Activos Digitales (CIBCA)'
        };
      case 'wcf':
        return {
          subtitle: 'World Compliance Forum -',
          title: 'Costa Rica 2025'
        };
      default:
        return {
          subtitle: 'Certificación en Prevención del Lavado',
          title: 'de Activos y Delitos (CIPLAD)'
        };
    }
  };

  const titleInfo = getTitle(currentCert);

  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: '85vh' }}
    >
      {/* Background con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${currentCert.title} background`}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out"
          priority
        />
        {/* Overlay con color azul uniforme (CIPLAD) */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.85), rgba(29, 78, 216, 0.75))'
          }}
        />
        
        {/* Patrón sutil */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          
          {/* Contenido de texto - Alineado a la izquierda */}
          <div className="space-y-6 text-white">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div 
                className="text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide border shadow-lg"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                ✨ {currentCert.badge}
              </div>
            </div>
            
            {/* Título */}
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-white opacity-90">
                {titleInfo.subtitle}
              </h2>
              <h1 
                className="text-4xl lg:text-5xl font-bold leading-tight"
                style={{
                  color: currentCert.id === 'ciplad' ? '#50D0FF' :
                         currentCert.id === 'cimar' ? '#50D0FF' :
                         currentCert.id === 'cibca' ? '#50D0FF' :
                         '#50D0FF'
                }}
              >
                {titleInfo.title}
              </h1>
            </div>
            
            {/* Descripción */}
            <p className="text-lg text-white opacity-90 leading-relaxed max-w-2xl">
              {currentCert.description.split('.')[0]}.
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-lg text-lg"
                onClick={() => window.open(currentCert.enrollLink, '_blank')}
              >
                ¡Inscríbete YA!
              </button>
              <button 
                className="px-8 py-4 border-2 border-white border-opacity-50 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm rounded-lg font-semibold transition-all duration-300 text-lg"
                onClick={() => window.open(currentCert.infoLink, '_blank')}
              >
                Más información
              </button>
            </div>
          </div>

          {/* Espacio vacío donde estaba la tarjeta */}
          <div className="hidden lg:block">
            {/* Espacio reservado para mantener el layout */}
          </div>
          
        </div>
      </div>
        
      {/* Controles de Navegación */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
        <button
          onClick={prevSlide}
          className="group p-4 rounded-full border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          aria-label="Anterior certificación"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white group-hover:text-white group-hover:scale-110 transition-all duration-200" />
        </button>
        
        {/* Indicadores de Puntos */}
        <div className="flex space-x-3">
          {CERTIFICATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-white rounded-full shadow-lg' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
              }`}
              aria-label={`Ir a certificación ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="group p-4 rounded-full border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          aria-label="Siguiente certificación"
        >
          <ChevronRightIcon className="w-6 h-6 text-white group-hover:text-white group-hover:scale-110 transition-all duration-200" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;