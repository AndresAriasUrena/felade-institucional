import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { CERTIFICATIONS } from '@/lib/constants'
import { FaClock, FaGraduationCap, FaStar, FaUsers, FaCheckCircle, FaCreditCard, FaAward } from 'react-icons/fa'

const CertificationCards = () => {
  const certifications = CERTIFICATIONS.filter(cert => cert.id !== 'wcf') // Exclude WCF from cards

  const getCertificationConfig = (id) => {
    const configs = {
      ciplad: {
        color: 'blue',
        gradient: 'from-blue-600 to-blue-700',
        bgGradient: 'from-blue-50 to-blue-100',
        icon: '🛡️',
        accentColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        buttonClass: 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
      },
      cimar: {
        color: 'emerald',
        gradient: 'from-emerald-600 to-emerald-700',
        bgGradient: 'from-emerald-50 to-emerald-100',
        icon: '📊',
        accentColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        buttonClass: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
      },
      cibca: {
        color: 'purple',
        gradient: 'from-purple-600 to-purple-700',
        bgGradient: 'from-purple-50 to-purple-100',
        icon: '₿',
        accentColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        buttonClass: 'bg-purple-600 hover:bg-purple-700 shadow-purple-200'
      }
    }
    return configs[id] || configs.ciplad
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary-100 rounded-full px-6 py-3 mb-6">
            <FaAward className="text-primary-600 mr-2" />
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wide">Certificaciones Internacionales</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Impulsa tu <span className="text-primary-600">Carrera Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Certificaciones especializadas en AML/FT reconocidas internacionalmente. 
            Diseñadas por expertos para profesionales que buscan excelencia.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => {
            const config = getCertificationConfig(cert.id)
            
            return (
              <div 
                key={cert.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${config.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="text-8xl transform rotate-12">
                      {config.icon}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{config.icon}</div>
                      <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-bold">
                        En línea
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                      {cert.title.split(' ').slice(0, 6).join(' ')}
                    </h3>
                    <div className="text-white/90 font-semibold mb-4">
                      {cert.badge}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8 text-base">
                    {cert.description.substring(0, 150)}...
                  </p>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${config.accentColor} bg-gray-50 rounded-lg flex items-center justify-center`}>
                        <FaClock />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Duración</div>
                        <div className="font-bold text-gray-900">{cert.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${config.accentColor} bg-gray-50 rounded-lg flex items-center justify-center`}>
                        <FaGraduationCap />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Créditos</div>
                        <div className="font-bold text-gray-900">{cert.credits}</div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      Lo que incluye:
                    </h4>
                    <div className="space-y-3">
                      {[
                        'Modalidad 100% en línea',
                        'Certificación internacional',
                        'Sin requisitos previos',
                        'Soporte académico personalizado'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <FaCreditCard className={config.accentColor} />
                          <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Inversión</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900">
                          ${cert.priceUSD?.toLocaleString() || '1,225'}
                          <span className="text-lg text-gray-500 ml-1">USD</span>
                        </div>
                        {cert.installments && (
                          <div className="text-sm text-gray-600 mt-1">
                            {cert.installments}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-green-500 mb-1">✓</div>
                        <div className="text-xs text-gray-500">Sin requisitos</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      href={cert.enrollLink}
                      className={`w-full ${config.buttonClass} text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200`}
                    >
                      ¡Inscribirme Ahora!
                    </Button>
                    <Button 
                      variant="outline"
                      href={cert.infoLink}
                      className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-3"
                    >
                      Más Información
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${config.gradient} rounded-full`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 transform rotate-12">
                <div className="text-9xl">🎓</div>
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold mb-6">
                ¿Listo para <span className="text-secondary-400">Certificarte</span>?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Únete a más de 17,774 profesionales que han confiado en FELADE para impulsar sus carreras
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="xl"
                  className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-8 py-4 text-xl shadow-2xl hover:scale-105 transition-all duration-200"
                  href="/certificaciones"
                >
                  Ver Todas las Certificaciones
                </Button>
                <Button 
                  variant="outline"
                  size="xl"
                  className="border-2 border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900 font-semibold px-8 py-4 text-xl"
                  href="/contacto"
                >
                  Hablar con Asesor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CertificationCards