// src/components/sections/CertificationCards.js - Diseño más cercano al original
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { CERTIFICATIONS } from '@/lib/constants'
import { FaClock, FaGraduationCap, FaStar, FaUsers, FaCheckCircle, FaDollarSign } from 'react-icons/fa'

const CertificationCards = () => {
  // Solo mostrar las primeras 3 certificaciones principales
  const mainCertifications = CERTIFICATIONS.slice(0, 3);

  const getCertificationTheme = (id) => {
    const themes = {
      ciplad: {
        gradient: 'from-blue-600 to-blue-800',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        accent: 'bg-blue-600',
        icon: '🛡️',
        color: 'blue'
      },
      cimar: {
        gradient: 'from-green-600 to-green-800', 
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-900',
        accent: 'bg-green-600',
        icon: '📊',
        color: 'green'
      },
      cibca: {
        gradient: 'from-purple-600 to-purple-800',
        bg: 'bg-purple-50',
        border: 'border-purple-200', 
        text: 'text-purple-900',
        accent: 'bg-purple-600',
        icon: '₿',
        color: 'purple'
      }
    }
    return themes[id] || themes.ciplad;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary-50 rounded-full px-6 py-3 mb-6">
            <FaStar className="text-primary-600 mr-2" />
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wide">
              Certificaciones Destacadas
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainCertifications.map((cert, index) => {
            const theme = getCertificationTheme(cert.id);
            
            return (
              <div 
                key={cert.id}
                className={`group relative overflow-hidden rounded-3xl ${theme.bg} ${theme.border} border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${theme.gradient} p-8 text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                      }}
                    ></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{theme.icon}</div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {cert.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-lg font-semibold opacity-90 mb-1">
                      {cert.badge}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {cert.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className={`w-12 h-12 ${theme.accent} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <FaClock className="text-white text-lg" />
                      </div>
                      <div className="font-bold text-gray-900">{cert.duration}</div>
                      <div className="text-sm text-gray-500">Duración</div>
                    </div>
                    
                    <div className="text-center">
                      <div className={`w-12 h-12 ${theme.accent} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <FaGraduationCap className="text-white text-lg" />
                      </div>
                      <div className="font-bold text-gray-900">{cert.credits}</div>
                      <div className="text-sm text-gray-500">Créditos</div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Beneficios incluidos:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Certificación internacional</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Modalidad 100% online</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Material actualizado 2025</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">Soporte académico personalizado</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <FaDollarSign className="text-green-600" />
                          <span className="text-3xl font-black text-gray-900">{cert.priceUSD}</span>
                          <span className="text-gray-500">USD</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">Precio total del programa</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">💳 Financiamiento</div>
                        <div className="text-xs text-gray-600">
                          {cert.installments || '3 cuotas disponibles'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    <Button 
                      size="lg"
                      className={`w-full bg-gradient-to-r ${theme.gradient} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-bold`}
                      href={cert.enrollLink}
                    >
                      🚀 Inscribirse Ahora
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full border-2"
                      href={cert.infoLink}
                    >
                      📋 Más Información
                    </Button>
                  </div>
                </div>

                {/* Popular badge */}
                {index === 0 && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-primary-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                    ⭐ Más Popular
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
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
            <h3 className="text-4xl font-display font-bold mb-6">
              ¿Listo para ser un experto en cumplimiento?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Únete a más de <strong>17,774 profesionales</strong> que han transformado sus carreras 
              con nuestras certificaciones internacionales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="xl"
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-primary-900 font-bold shadow-xl"
                href="/certificaciones"
              >
                📚 Ver Todas las Certificaciones
              </Button>
              <Button 
                variant="outline"
                size="xl"
                className="border-2 border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900"
                href="/contacto"
              >
                💬 Hablar con Asesor
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-primary-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">20+</div>
                <div className="text-primary-200 text-sm">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">10+</div>
                <div className="text-primary-200 text-sm">Países con presencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">99%</div>
                <div className="text-primary-200 text-sm">Tasa de satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">1,324+</div>
                <div className="text-primary-200 text-sm">Empresas certificadas</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CertificationCards