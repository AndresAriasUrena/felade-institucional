// src/components/sections/MainCertifications.js - Sección consolidada de certificaciones
'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CERTIFICATIONS } from '@/lib/constants'
import { 
  FaClock, 
  FaGraduationCap, 
  FaStar, 
  FaCheckCircle, 
  FaDollarSign,
  FaShieldAlt,
  FaChartLine,
  FaBitcoin,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa'

const MainCertifications = () => {
  // Solo mostrar las primeras 3 certificaciones principales (excluir WCF)
  const mainCertifications = CERTIFICATIONS.slice(0, 3);

  const getCertificationConfig = (id) => {
    const configs = {
      ciplad: {
        gradient: 'from-blue-600 to-blue-800',
        bgCard: 'bg-white',
        border: 'border-gray-200',
        accent: 'bg-blue-600',
        icon: <FaShieldAlt className="w-6 h-6" />,
        color: '#01123E',
        bgPattern: 'rgba(37, 99, 235, 0.05)'
      },
      cimar: {
        gradient: 'from-blue-600 to-blue-800', 
        bgCard: 'bg-white',
        border: 'border-gray-200',
        accent: 'bg-blue-600',
        icon: <FaChartLine className="w-6 h-6" />,
        color: '#01123E',
        bgPattern: 'rgba(37, 99, 235, 0.05)'
      },
      cibca: {
        gradient: 'from-blue-600 to-blue-800',
        bgCard: 'bg-white',
        border: 'border-gray-200', 
        accent: 'bg-blue-600',
        icon: <FaBitcoin className="w-6 h-6" />,
        color: '#01123E',
        bgPattern: 'rgba(37, 99, 235, 0.05)'
      }
    }
    return configs[id] || configs.ciplad;
  }

  // Placeholder image con gradiente
  const getPlaceholderImage = (cert, config) => {
    return `data:image/svg+xml,%3Csvg width='400' height='240' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad-${cert.id}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${config.color};stop-opacity:0.9' /%3E%3Cstop offset='100%25' style='stop-color:${config.color};stop-opacity:0.7' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad-${cert.id})'/%3E%3Ctext x='50%25' y='45%25' font-size='18' fill='white' text-anchor='middle' font-family='Arial, sans-serif' font-weight='bold'%3E${encodeURIComponent(cert.icon)} ${encodeURIComponent(cert.badge)}%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='12' fill='white' text-anchor='middle' font-family='Arial, sans-serif' opacity='0.9'%3ECertificación Internacional%3C/text%3E%3C/svg%3E`
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='80' cy='20' r='1'/%3E%3Ccircle cx='20' cy='80' r='1'/%3E%3Ccircle cx='80' cy='80' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-50 rounded-full px-6 py-3 mb-6">
              <FaStar className="text-primary-600 mr-2" />
              <span className="text-primary-600 font-bold text-sm uppercase tracking-wide">
                Certificaciones Internacionales
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-black text-gray-900 mb-8">
              Impulsa tu Carrera<br />
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Profesional
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Programas de certificación internacional diseñados para profesionales que buscan 
              liderar en prevención de lavado de activos y cumplimiento regulatorio
            </p>
          </div>

          {/* Certification Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {mainCertifications.map((cert, index) => {
              const config = getCertificationConfig(cert.id);
              
              return (
                <div 
                  key={cert.id}
                  className={`group relative overflow-hidden rounded-2xl ${config.bgCard} ${config.border} border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Header with gradient and title */}
                  <div className={`bg-gradient-to-r ${config.gradient} p-6 text-white relative overflow-hidden min-h-[195px] flex flex-col justify-between`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div 
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                        }}
                      ></div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <div style={{color: '#01123E'}}>
                            {config.icon}
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                          {cert.duration}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-semibold opacity-90 mb-1 uppercase tracking-wide">
                          {cert.badge}
                        </div>
                        <h3 className="text-xl font-display font-bold leading-tight">
                          {cert.title.replace('Certificación Internacional en ', '').replace('Certificación en ', '')}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {cert.description.substring(0, 120)}...
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className={`w-10 h-10 ${config.accent} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                          <FaClock className="text-white text-sm" />
                        </div>
                        <div className="font-bold text-gray-900 text-sm">{cert.duration}</div>
                        <div className="text-xs text-gray-500">Duración</div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`w-10 h-10 ${config.accent} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                          <FaGraduationCap className="text-white text-sm" />
                        </div>
                        <div className="font-bold text-gray-900 text-sm">{cert.credits}</div>
                        <div className="text-xs text-gray-500">Créditos</div>
                      </div>
                    </div>

                    {/* Key Benefits - Compact */}
                    <div className="mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                          <span className="text-gray-700 text-xs">Certificación internacional</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                          <span className="text-gray-700 text-xs">Modalidad 100% online</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                          <span className="text-gray-700 text-xs">Material actualizado 2025</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing - Compact */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-1">
                            <FaDollarSign className="text-green-600 text-sm" />
                            <span className="text-2xl font-black text-gray-900">{cert.priceUSD}</span>
                            <span className="text-gray-500 text-sm">USD</span>
                          </div>
                          <div className="text-xs text-gray-500">Precio total</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-green-600">💳 Financiamiento</div>
                          <div className="text-xs text-gray-600">3 cuotas</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Compact */}
                    <div className="flex flex-col gap-3">
                      <Button 
                        size="md"
                        className={`w-full bg-gradient-to-r ${config.gradient} hover:shadow-lg transition-all duration-300 font-bold text-sm`}
                        href={cert.enrollLink}
                      >
                        🚀 Inscribirse Ahora
                      </Button>
                      <Button 
                        variant="outline"
                        size="md"
                        className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm"
                        href={cert.infoLink}
                      >
                        📋 Más Información
                      </Button>
                    </div>
                  </div>

                  {/* Popular badge */}
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-primary-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                      ⭐ Popular
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='11' cy='11' r='3'/%3E%3Ccircle cx='49' cy='11' r='3'/%3E%3Ccircle cx='11' cy='49' r='3'/%3E%3Ccircle cx='49' cy='49' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                  }}
                ></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-4" style={{color: '#01123E'}}>
                  ¿Listo para ser un experto en cumplimiento?
                </h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto" style={{color: '#01123E'}}>
                  Únete a más de <strong style={{color: '#fbbf24'}}>17,774 profesionales</strong> que han transformado sus carreras 
                  con nuestras certificaciones internacionales
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-[#01123E] from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-01123E font-bold shadow-xl"
                    href="/certificaciones"
                  >
                    Ver Todas las Certificaciones
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 font-semibold"
                    style={{
                      borderColor: '#fbbf24',
                      color: '#fbbf24'
                    }}
                    href="/contacto"
                  >
                    💬 Hablar con Asesor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MainCertifications