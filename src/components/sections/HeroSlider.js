// src/components/sections/HeroSlider.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { CERTIFICATIONS } from '../../lib/constants';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const currentCert = CERTIFICATIONS[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern - FIXED */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block bg-secondary-500 text-primary-900 px-4 py-2 rounded-full text-sm font-semibold">
              {currentCert.badge}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {currentCert.title}
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              {currentCert.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                href={currentCert.enrollLink}
              >
                ¡Inscríbete YA!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href={currentCert.infoLink}
              >
                Más información
              </Button>
            </div>
            
            {/* Certification Details */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-secondary-500 font-semibold">Modalidad</div>
                <div className="text-sm">{currentCert.modality}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-secondary-500 font-semibold">Duración</div>
                <div className="text-sm">{currentCert.duration}</div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
              <div className="text-8xl opacity-50">
                {currentCert.icon}
              </div>
            </div>
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="flex space-x-2">
            {CERTIFICATIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-secondary-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;