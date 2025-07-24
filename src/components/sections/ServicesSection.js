import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'
import { 
  FaArrowRight, 
  FaBuilding, 
  FaGraduationCap, 
  FaBalanceScale, 
  FaMicrophone,
  FaChalkboardTeacher,
  FaStar,
  FaUsers,
  FaGlobe
} from 'react-icons/fa'

const ServicesSection = () => {
  // Enhanced icon mapping for services
  const serviceIcons = {
    consultancy: <FaBuilding className="w-12 h-12" />,
    programs: <FaGraduationCap className="w-12 h-12" />,
    advisory: <FaBalanceScale className="w-12 h-12" />,
    conferences: <FaMicrophone className="w-12 h-12" />,
    training: <FaChalkboardTeacher className="w-12 h-12" />
  }

  const serviceColors = {
    consultancy: {
      bg: 'from-blue-500 to-blue-600',
      icon: 'text-blue-600',
      accent: 'bg-blue-100',
      hover: 'hover:shadow-blue-200'
    },
    programs: {
      bg: 'from-emerald-500 to-emerald-600',
      icon: 'text-emerald-600',
      accent: 'bg-emerald-100',
      hover: 'hover:shadow-emerald-200'
    },
    advisory: {
      bg: 'from-purple-500 to-purple-600',
      icon: 'text-purple-600',
      accent: 'bg-purple-100',
      hover: 'hover:shadow-purple-200'
    },
    conferences: {
      bg: 'from-red-500 to-red-600',
      icon: 'text-red-600',
      accent: 'bg-red-100',
      hover: 'hover:shadow-red-200'
    },
    training: {
      bg: 'from-orange-500 to-orange-600',
      icon: 'text-orange-600',
      accent: 'bg-orange-100',
      hover: 'hover:shadow-orange-200'
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.4'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary-100 rounded-full px-6 py-3 mb-6">
            <FaStar className="text-primary-600 mr-2" />
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wide">
              Servicios Especializados
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Soluciones <span className="text-primary-600">Integrales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Desarrollamos capacidades organizacionales y profesionales con metodologías 
            especializadas y reconocimiento internacional en el sector AML/FT
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const colors = serviceColors[service.id] || serviceColors.consultancy
            
            return (
              <div 
                key={service.id}
                className={`group relative bg-white rounded-3xl shadow-lg ${colors.hover} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden`}
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${colors.bg} p-8 text-white relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                    <div className="text-6xl transform rotate-12">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {serviceIcons[service.id]}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3 mb-8">
                    {[
                      'Metodología especializada',
                      'Certificación internacional',
                      'Expertos con +20 años'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline"
                    className={`w-full border-2 ${colors.icon.replace('text-', 'border-')} ${colors.icon} hover:bg-gray-50 font-semibold py-3 group-hover:scale-105 transition-all duration-200`}
                    href="/servicios"
                  >
                    Conocer Más
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${colors.bg} rounded-full group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaUsers />, number: '17,774+', label: 'Profesionales Capacitados' },
            { icon: <FaGlobe />, number: '1,324+', label: 'Empresas Confiadas' },
            { icon: <FaStar />, number: '99%', label: 'Tasa de Recomendación' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-primary-600 text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 transform rotate-12">
                <div className="text-9xl">🚀</div>
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold mb-6">
                ¿Listo para <span className="text-secondary-400">Transformar</span> tu Organización?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Contáctanos para desarrollar una solución personalizada que impulse 
                el cumplimiento y la excelencia en tu empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="xl"
                  className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-8 py-4 text-xl shadow-2xl hover:scale-105 transition-all duration-200"
                  href="/servicios"
                >
                  Explorar Todos los Servicios
                </Button>
                <Button 
                  variant="outline"
                  size="xl"
                  className="border-2 border-primary-300 text-primary-100 hover:bg-primary-100 hover:text-primary-900 font-semibold px-8 py-4 text-xl"
                  href="/contacto"
                >
                  Solicitar Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection