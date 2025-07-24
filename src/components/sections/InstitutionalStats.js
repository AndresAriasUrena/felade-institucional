import Container from '@/components/ui/Container'
import { INSTITUTIONAL_STATS } from '@/lib/constants'
import { FaCalendarAlt, FaGraduationCap, FaUniversity, FaGlobe, FaCertificate, FaChartLine, FaStar } from 'react-icons/fa'

const InstitutionalStats = () => {
  // Configurar estadísticas con iconos y colores específicos
  const statsConfig = [
    {
      ...INSTITUTIONAL_STATS[0],
      icon: <FaGlobe className="text-4xl" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      ...INSTITUTIONAL_STATS[1], 
      icon: <FaCalendarAlt className="text-4xl" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      ...INSTITUTIONAL_STATS[2],
      icon: <FaChartLine className="text-4xl" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      ...INSTITUTIONAL_STATS[3],
      icon: <FaUniversity className="text-4xl" />,
      color: 'text-purple-400', 
      bgColor: 'bg-purple-500/20'
    },
    {
      ...INSTITUTIONAL_STATS[4],
      icon: <FaGraduationCap className="text-4xl" />,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(29, 78, 216, 0.95) 100%), 
                           url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-secondary-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <FaStar className="text-secondary-400 mr-2" />
              <span className="text-secondary-300 font-bold text-sm uppercase tracking-wide">
                Nuestro Impacto
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              FELADE en <span className="text-secondary-400">Números</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Más de dos décadas construyendo excelencia educativa en el sector AML/FT 
              con reconocimiento internacional y presencia en toda Latinoamérica
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
            {statsConfig.map((stat, index) => (
              <div 
                key={stat.label}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-bold text-gray-200 mb-2 leading-tight">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <div className="w-12 h-0.5 bg-secondary-400 mx-auto mb-3 group-hover:w-16 transition-all duration-300"></div>
                  <p className="text-sm text-gray-300">
                    Liderando la transformación educativa
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Recognition Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center mr-4">
                  <FaStar className="text-secondary-400" />
                </div>
                Reconocimiento Internacional
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                FELADE es reconocida por instituciones educativas de prestigio internacional 
                y mantiene alianzas estratégicas con universidades líderes en toda Latinoamérica, 
                garantizando la <strong className="text-white">calidad y validez internacional</strong> de 
                nuestras certificaciones.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  'Certificaciones avaladas internacionalmente',
                  'Red de más de 1,324 empresas confiadas',
                  'Presencia consolidada en 10+ países',
                  'Tasa de recomendación del 99%'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Highlight */}
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl p-10 text-primary-900 relative overflow-hidden shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <div className="text-8xl transform rotate-12">🏆</div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    Logro Destacado
                  </h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold mb-2">17,774+</div>
                    <div className="text-xl font-semibold">
                      Profesionales Capacitados
                    </div>
                  </div>
                  
                  <p className="leading-relaxed">
                    Desde 2005, hemos formado a <strong>más de 17,774 profesionales</strong> 
                    especializados en AML/FT, creando una red sólida de expertos que transforman 
                    el panorama del cumplimiento en Latinoamérica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InstitutionalStats