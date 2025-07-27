'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ACADEMIC_PROGRAMS } from '@/lib/constants'
import { FaClock, FaDesktop, FaGraduationCap, FaStar, FaArrowRight, FaShieldAlt, FaChartLine, FaBitcoin } from 'react-icons/fa'

const AcademicPrograms = () => {
  const getModalityIcon = (modality) => {
    switch(modality.toLowerCase()) {
      case 'virtual': return <FaDesktop className="text-blue-600" />
      case 'presencial': return <FaGraduationCap className="text-blue-600" />
      case 'híbrida': return <FaClock className="text-blue-600" />
      default: return <FaGraduationCap className="text-blue-600" />
    }
  }

  // Configuración específica para cada programa
  const programConfig = {
    'Certificación CIPLAD': {
      image: '/images/hero/ciplad-bg.jpg',
      gradient: 'from-blue-600 to-blue-800',
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: '#01174D',
      bgPattern: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(29, 78, 216, 0.1) 100%)'
    },
    'Certificación CIMAR': {
      image: '/images/certifications/cimar-program.jpg', 
      gradient: 'from-emerald-600 to-emerald-800',
      icon: <FaChartLine className="w-8 h-8" />,
      color: '#01174D',
      bgPattern: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(4, 120, 87, 0.1) 100%)'
    },
    'Certificación CIBCA': {
      image: '/images/certifications/cibca-program.jpg',
      gradient: 'from-purple-600 to-purple-800', 
      icon: <FaBitcoin className="w-8 h-8" />,
      color: '#01174D',
      bgPattern: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(91, 33, 182, 0.1) 100%)'
    }
  }

  // Placeholder image con gradiente si no existe la imagen real
  const getPlaceholderImage = (programName, config) => {
    return `data:image/svg+xml,%3Csvg width='400' height='240' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad-${programName.replace(/\s+/g, '')}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${config.color.replace('#', '%23')};stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:${config.color.replace('#', '%23')};stop-opacity:0.6' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad-${programName.replace(/\s+/g, '')})'/%3E%3Ctext x='50%25' y='45%25' font-size='20' fill='white' text-anchor='middle' font-family='Arial, sans-serif' font-weight='bold'%3E${encodeURIComponent(programName)}%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='14' fill='white' text-anchor='middle' font-family='Arial, sans-serif' opacity='0.9'%3ECertificación Internacional%3C/text%3E%3C/svg%3E`
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorativo sutil */}
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
          {/* Header mejorado */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-900 rounded-full px-6 py-3 mb-6 border border-blue-200">
              <FaStar className="text-[#f59e0b] mr-2" />
              <span className="text-[#f59e0b] font-bold text-sm uppercase tracking-wide">
                Programas Académicos
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Formación <span className="text-blue-600">Profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Certificaciones internacionales diseñadas para impulsar tu carrera en cumplimiento y prevención de lavado de activos
            </p>
          </div>

          {/* Grid de programas mejorado */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {ACADEMIC_PROGRAMS.map((program, index) => {
              const config = programConfig[program.name] || programConfig['Certificación CIPLAD']
              
              return (
                <div 
                  key={program.name}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                >
                  {/* Imagen del programa */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getPlaceholderImage(program.name, config)}
                      alt={program.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay con gradiente */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${config.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Badge de modalidad */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      {getModalityIcon(program.modality)}
                      <span className="text-sm font-medium text-gray-700">{program.modality}</span>
                    </div>

                    {/* Icono del programa */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div style={{color: config.color}}>
                        {config.icon}
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {program.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {program.description}
                    </p>

                    {/* Información de duración con diseño mejorado */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
                        <FaClock className="text-gray-500 text-sm" />
                        <span className="text-sm font-medium text-gray-700">
                          {program.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-3 py-2">
                        <FaGraduationCap className="text-blue-600 text-sm" />
                        <span className="text-sm font-medium text-blue-700">
                          Certificación
                        </span>
                      </div>
                    </div>

                    {/* Beneficios destacados */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: config.color}}></div>
                        <span className="text-sm text-gray-600">Reconocimiento internacional</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Modalidad 100% virtual</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Certificado oficial</span>
                      </div>
                    </div>

                    {/* Botón de acción mejorado con CSS hover */}
                    <button 
                      className={`
                        w-full bg-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 
                        group-hover:scale-105 flex items-center justify-center space-x-2
                        border-2 hover:text-white
                        program-button-${index}
                      `}
                      style={{
                        borderColor: config.color,
                        color: config.color
                      }}
                    >
                      <span>Más Información</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    {/* CSS inline para el hover effect específico */}
                    <style jsx>{`
                      .program-button-${index}:hover {
                        background-color: ${config.color} !important;
                        color: white !important;
                      }
                    `}</style>
                  </div>

                  {/* Indicador de popularidad para el primer programa */}
                  {index === 0 && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 z-10">
                      ⭐ Popular
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Call to Action mejorado */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                ¿Listo para impulsar tu carrera profesional?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Únete a miles de profesionales que han transformado sus carreras con nuestras certificaciones
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="xl"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  href="/certificaciones"
                >
                  <FaGraduationCap className="mr-2" />
                  Ver Todas las Certificaciones
                </Button>
                <Button 
                  variant="outline"
                  size="xl"
                  className="border-2 border-blue-200 text-blue-100 hover:bg-blue-100 hover:text-blue-900 font-semibold"
                  href="/contacto"
                >
                  <FaArrowRight className="mr-2" />
                  Solicitar Información
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">20+</div>
                  <div className="text-blue-200 text-sm">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">17,774+</div>
                  <div className="text-blue-200 text-sm">Profesionales certificados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">99%</div>
                  <div className="text-blue-200 text-sm">Tasa de satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AcademicPrograms