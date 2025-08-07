// src/components/sections/SuccessIndicators.js - Con logo 20 aniversario
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { INSTITUTIONAL_STATS } from '@/lib/constants'
import { 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaUniversity, 
  FaGlobe, 
  FaCertificate, 
  FaChartLine,
  FaTrophy,
  FaAward,
  FaHandshake,
  FaStar,
  FaArrowRight,
  FaUsers
} from 'react-icons/fa'

// Hook para animación de números
const useCountUp = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      let startTime
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Extraer número del string
        const numericEnd = parseInt(end.replace(/[^\d]/g, '')) || 0
        const currentCount = Math.floor(numericEnd * progress)
        
        // Mantener el formato original (con + o %)
        if (end.includes('+')) {
          setCount(`${currentCount}+`)
        } else if (end.includes('%')) {
          setCount(`${currentCount}%`)
        } else {
          setCount(currentCount.toString())
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, end, duration, delay])

  return [count, ref]
}

const SuccessIndicators = () => {
  // Estadísticas principales con íconos y colores específicos
  const mainStats = [
    {
      ...INSTITUTIONAL_STATS[1], // 20+ Años
      icon: <FaCalendarAlt className="text-3xl" />,
      color: 'from-[#01174D] to-blue-600',
      accent: 'text-blue-400'
    },
    {
      ...INSTITUTIONAL_STATS[0], // 10+ Países
      icon: <FaGlobe className="text-3xl" />,
      color: 'from-[#01174D] to-blue-600',
      accent: 'text-green-400'
    },
    {
      ...INSTITUTIONAL_STATS[4], // 17.774+ Profesionales
      icon: <FaUsers className="text-3xl" />,
      color: 'from-[#01174D] to-blue-600',
      accent: 'text-purple-400'
    },
    {
      ...INSTITUTIONAL_STATS[3], // 1.324+ Empresas
      icon: <FaUniversity className="text-3xl" />,
      color: 'from-[#01174D] to-blue-600',
      accent: 'text-orange-400'
    },
    {
      ...INSTITUTIONAL_STATS[2], // 99% Tasa
      icon: <FaChartLine className="text-3xl" />,
      color: 'from-[#01174D] to-blue-600',
      accent: 'text-yellow-400'
    }
  ]

  // Timeline de logros compacto
  const timelineAchievements = [
    {
      year: '2005',
      icon: <FaStar className="w-6 h-6" />,
      title: 'Primer Congreso',
      description: 'Inicio de la misión educativa especializada',
      gradient: 'from-[#01174D] to-blue-600'
    },
    {
      year: '2018',
      icon: <FaAward className="w-6 h-6" />,
      title: 'Alianza con UPEACE-ONU',
      description: 'Partnership con Universidad para la Paz',
      gradient: 'from-[#01174D] to-blue-600'
    },
    {
      year: '2020',
      icon: <FaTrophy className="w-6 h-6" />,
      title: 'Liderazgo Regional',
      description: 'Reconocidos como referentes AML/FT',
      gradient: 'from-[#01174D] to-blue-600'
    },
    {
      year: '2025',
      icon: <FaHandshake className="w-6 h-6" />,
      title: 'Red Internacional',
      description: '15+ instituciones aliadas en el continente Americano.',
      gradient: 'from-[#01174D] to-blue-600'
    }
  ]

  return (
    <div className="relative">
      
      {/* Hero Section con Parallax REAL */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/backgrounds/success-bg.jpg")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay azul */}
        <div className="absolute inset-0" />
        
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-20 text-center">
            {/* Header */}
            <div className="mb-16 mt-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <FaStar className="text-yellow-400 mr-2" />
                <span className="text-white font-bold text-sm uppercase tracking-wide">
                  Nuestro Impacto
                </span>
              </div>
              
              {/* Logo 20 Aniversario FELADE */}
              <div className="mb-8 flex justify-center">
                <div className="max-w-2xl w-full relative">
                  <Image
                    src="/images/icons/10-aniversario.png"
                    alt="FELADE 20 Aniversario - Fundación para el Estudio del Lavado de Activos y Delitos"
                    width={600}
                    height={200}
                    className="object-contain w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Más de una décadaa liderando la educación especializada en prevención de lavado de activos
              </p>
            </div>

            {/* Stats Grid - Cuadros del mismo tamaño con animación */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8">
              {mainStats.map((stat, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [animatedCount, statRef] = useCountUp(stat.number, 2000, index * 200)
                
                return (
                  <div 
                    key={stat.label}
                    ref={statRef}
                    className="group text-center transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-48 flex flex-col justify-between">
                      {/* Number - Animated */}
                      <div className="text-3xl lg:text-4xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300 min-h-[48px] flex items-center justify-center">
                        {animatedCount}
                      </div>
                      
                      {/* Label */}
                      <h3 className="text-sm font-bold text-white/90 leading-tight">
                        {stat.label}
                      </h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* Timeline Section - Sobre fondo blanco para cubrir la imagen */}
      <div className="relative bg-white py-20 z-30">
        <Container>
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Trayectoria de <span className="text-blue-600">Excelencia</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hitos importantes que han definido nuestro liderazgo en la región
            </p>
          </div>

          {/* Timeline horizontal en desktop, vertical en mobile */}
          <div className="relative">
            {/* Línea de tiempo - horizontal desktop, vertical mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
              {timelineAchievements.map((achievement, index) => (
                <div 
                  key={achievement.year}
                  className="relative group"
                >
                  {/* Punto en la línea de tiempo */}
                  <div className="flex lg:justify-center">
                    <div className={`relative z-20 w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white lg:mx-auto`}>
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="lg:text-center text-left lg:mt-8 mt-4">
                    <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow duration-300 ml-0 border-[#fbbf24] border-2">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {achievement.year}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Reconocimiento Internacional */}
      <div className="relative py-16 z-30 overflow-hidden">
        {/* Background con textura geométrica animada */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#1e3a8a',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
            }}
          />
          
          {/* Elementos geométricos animados */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 transform rotate-45 animate-bounce" style={{animationDuration: '3s'}}></div>
          
          {/* Gradiente overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#01174D] to-[#1e3a8a]"></div>
        </div>

        <Container>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 relative z-10">
            <div className="grid lg:grid-cols-4 gap-8 items-center">
              
              {/* Contenido principal - 2 columnas */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Reconocimiento Internacional
                  </h3>
                </div>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  FELADE mantiene alianzas estratégicas con universidades líderes en Latinoamérica, 
                  garantizando la calidad y validez internacional de nuestras certificaciones.
                </p>
                
                <Button 
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 font-bold shadow-lg inline-flex items-center transition-all duration-300"
                  href="/sobre-nosotros"
                >
                  <FaArrowRight className="mr-2" />
                  Conoce Nuestra Historia
                </Button>
              </div>

              {/* Stats compactos - 2 columnas */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                <div className="text-center bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
                  <div className="text-4xl font-black mb-2">15+</div>
                  <div className="text-sm opacity-90">Instituciones Aliadas</div>
                  <div className="mt-2">
                    <FaUniversity className="text-2xl mx-auto opacity-80" />
                  </div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-yellow-300/30 to-yellow-500/30 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
                  <div className="text-4xl font-black mb-2">12</div>
                  <div className="text-sm opacity-90">Países con Presencia</div>
                  <div className="mt-2">
                    <FaGlobe className="text-2xl mx-auto opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SuccessIndicators