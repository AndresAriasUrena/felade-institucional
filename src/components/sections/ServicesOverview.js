// src/components/sections/ServicesOverview.js
'use client'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { FaArrowRight, FaBuilding, FaGraduationCap, FaBalanceScale, FaGlobe, FaChalkboardTeacher } from 'react-icons/fa'

const ServicesOverview = () => {
  const services = [
    {
      id: 'consultancy',
      title: 'Consultorías AML/FT',
      description: 'Nuestros consultores, con más de 20 años de experiencia individual en diversas áreas especializadas, están altamente capacitados para ofrecer soluciones precisas y efectivas a nuestros clientes.',
      icon: <FaBuilding className="w-8 h-8" />,
      color: '#C38523' // Color principal dorado
    },
    {
      id: 'programs',
      title: 'Programas de Estudio AML/FT',
      description: 'Certificación para Profesionales en Cumplimiento y una Especialización, ambos en colaboración con la Universidad para la Paz, reconocida por la ONU.',
      icon: <FaGraduationCap className="w-8 h-8" />,
      color: '#D4941F' // Tonalidad más clara
    },
    {
      id: 'advisory',
      title: 'Asesorías Especializadas',
      description: 'Nos dedicamos a desarrollar soluciones prácticas y efectivas que no solo ayuden a nuestros clientes a cumplir con las exigencias regulatorias locales e internacionales, sino que también les permitan sobresalir en un entorno cada vez más complejo y competitivo.',
      icon: <FaBalanceScale className="w-8 h-8" />,
      color: '#E6A634' // Tonalidad aún más clara
    },
    {
      id: 'conferences',
      title: 'Congresos Internacionales',
      description: 'En distintos países y en colaboración con el World Compliance Forum.',
      icon: <FaGlobe className="w-8 h-8" />,
      color: '#B07620' // Tonalidad más oscura
    },
    {
      id: 'training',
      title: 'Capacitación y Entrenamiento',
      description: 'Ofrecemos una amplia gama de opciones de capacitación diseñadas para adaptarse a las necesidades específicas de nuestros clientes. A través de diversos formatos como foros, seminarios, certificaciones, charlas virtuales y presenciales, así como entrenamiento personalizado.',
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      color: '#9C661C' // Tonalidad más oscura aún
    }
  ]

  return (
    <section className="py-16 relative overflow-hidden" style={{backgroundColor: '#01123E'}}>
      {/* Background pattern más sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header más compacto */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="font-medium text-sm text-white/90 tracking-wide">
                ORGANIZACIÓN NO GUBERNAMENTAL PRESENTE EN MÁS DE 10 PAÍSES
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-white leading-tight">
              Prevención del Lavado de Activos y Delitos
            </h2>
          </div>

          {/* Grid layout inspirado en la segunda imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Tres servicios principales en la primera fila */}
            {services.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                className="bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:bg-white/5 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform duration-300 border border-current/20"
                    style={{
                      backgroundColor: `${service.color}20`,
                      borderColor: service.color
                    }}
                  >
                    <div style={{color: service.color}}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">
                  {service.description}
                </p>
                <button 
                  className="inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-200 group-hover:translate-x-1 hover:brightness-110"
                  style={{color: service.color}}
                >
                  <span>Conocer más</span>
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Segunda fila con los dos servicios restantes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service) => (
              <div 
                key={service.id}
                className="bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:bg-white/5 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform duration-300 border border-current/20"
                    style={{
                      backgroundColor: `${service.color}20`,
                      borderColor: service.color
                    }}
                  >
                    <div style={{color: service.color}}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button 
                  className="inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-200 group-hover:translate-x-1 hover:brightness-110"
                  style={{color: service.color}}
                >
                  <span>Conocer más</span>
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA button actualizado con el nuevo color */}
          <div className="flex justify-end">
            <Button
              size="lg"
              className="text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-current/30"
              style={{
                backgroundColor: '#C38523',
                borderColor: '#C38523'
              }}
              href="/servicios"
            >
              <span>Servicios</span>
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServicesOverview