import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { CERTIFICATIONS } from '@/lib/constants'
import { FaClock, FaGraduationCap, FaStar, FaUsers, FaCheckCircle } from 'react-icons/fa'

const CertificationCards = () => {
  const certifications = CERTIFICATIONS

  const getCertificationColor = (id) => {
    const colors = {
      ciplad: 'blue',
      cimar: 'green', 
      cibca: 'purple'
    }
    return colors[id] || 'blue'
  }

  const getColorClasses = (color) => {
    const classes = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        badge: 'bg-blue-600 text-white',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-100 text-green-600',
        badge: 'bg-green-600 text-white',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        badge: 'bg-purple-600 text-white',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    }
    return classes[color]
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 mb-4">
            <FaStar className="text-primary-600 mr-2" />
            <span className="text-primary-600 font-semibold">Certificaciones Destacadas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Nuestras Certificaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Programas de certificación internacional diseñados para impulsar tu desarrollo profesional 
            con reconocimiento en toda Latinoamérica
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert) => {
            const color = getCertificationColor(cert.id)
            const colorClasses = getColorClasses(color)
            
            return (
              <Card 
                key={cert.id}
                className={`relative overflow-hidden ${colorClasses.bg} ${colorClasses.border} border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                padding="none"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${colorClasses.icon} rounded-xl flex items-center justify-center`}>
                      <FaGraduationCap className="text-2xl" />
                    </div>
                    <div className={`${colorClasses.badge} px-3 py-1 rounded-full text-sm font-semibold`}>
                      En línea
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-3">
                    {cert.badge}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Details */}
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <FaClock className="text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Duración</div>
                        <div className="font-semibold text-gray-900">{cert.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaUsers className="text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Créditos</div>
                        <div className="font-semibold text-gray-900">{cert.credits}</div>
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Modalidad en línea</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Certificación internacional</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Sin requisitos previos</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">${cert.priceUSD}</span>
                      <span className="text-gray-500 ml-1">USD</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Financiamiento</div>
                      <div className="text-sm font-semibold text-gray-700">
                        {cert.installments || 'Disponible'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      href={cert.infoLink}
                      className={`flex-1 ${colorClasses.button} text-white`}
                    >
                      Más Información
                    </Button>
                    <Button 
                      variant="outline"
                      href={cert.enrollLink}
                      className="flex-1"
                    >
                      Inscribirse
                    </Button>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full ${colorClasses.icon.split(' ')[0]} rounded-bl-full`}></div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              ¿Listo para certificarte?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Únete a más de 15,000 profesionales que han confiado en FELADE para impulsar sus carreras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
                href="/certificaciones"
              >
                Comparar Certificaciones
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900"
                href="/contacto"
              >
                Hablar con Asesor
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CertificationCards