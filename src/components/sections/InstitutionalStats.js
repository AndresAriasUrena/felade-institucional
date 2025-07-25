// src/components/sections/InstitutionalStats.js - Mejorada con fondo y animaciones
import Container from '@/components/ui/Container'
import { INSTITUTIONAL_STATS } from '@/lib/constants'
import { FaCalendarAlt, FaGraduationCap, FaUniversity, FaGlobe, FaCertificate, FaChartLine } from 'react-icons/fa'

const InstitutionalStats = () => {
  // Estadísticas con íconos y colores específicos
  const statsWithIcons = [
    {
      ...INSTITUTIONAL_STATS[0], // 10+ Países
      icon: <FaGlobe className="text-4xl" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      ...INSTITUTIONAL_STATS[1], // 20+ Años
      icon: <FaCalendarAlt className="text-4xl" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      ...INSTITUTIONAL_STATS[2], // 99% Tasa
      icon: <FaChartLine className="text-4xl" />,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      ...INSTITUTIONAL_STATS[3], // 1.324+ Empresas
      icon: <FaUniversity className="text-4xl" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      ...INSTITUTIONAL_STATS[4], // 17.774+ Profesionales
      icon: <FaGraduationCap className="text-4xl" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10'
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* Patrón geométrico de fondo */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-20 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm40 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-20-20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <FaCertificate className="text-secondary-400 mr-2" />
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                Nuestro Impacto
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-display font-black text-white mb-8">
              FELADE en
              <span className="block bg-gradient-to-r from-secondary-400 to-secondary-500 bg-clip-text text-transparent">
                Números
              </span>
            </h2>
            
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Más de dos décadas liderando la educación especializada en prevención de lavado de activos 
              y cumplimiento regulatorio en Latinoamérica
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
            {statsWithIcons.map((stat, index) => (
              <div 
                key={stat.label}
                className="group text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  {/* Card Background */}
                  <div className={`${stat.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300`}>
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="text-5xl lg:text-6xl font-black text-white mb-4 group-hover:text-secondary-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-lg font-bold text-primary-100 mb-2 leading-tight">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-primary-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      Experiencia que respalda la calidad
                    </p>
                  </div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <span className="text-primary-900 text-xs font-bold">✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Recognition Text */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Reconocimiento Internacional
              </h3>
              <p className="text-primary-100 leading-relaxed text-lg mb-8">
                FELADE es reconocida por instituciones educativas de prestigio internacional y mantiene 
                alianzas estratégicas con universidades líderes en toda Latinoamérica, garantizando 
                la calidad y validez internacional de nuestras certificaciones.
              </p>
              
              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-secondary-400">45+</div>
                  <div className="text-sm text-primary-200">Instituciones Aliadas</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-secondary-400">12</div>
                  <div className="text-sm text-primary-200">Países con Presencia</div>
                </div>
              </div>
            </div>

            {/* Right - Achievement Highlights */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Crecimiento Sostenido</h4>
                    <p className="text-primary-200">Desde 2005</p>
                  </div>
                </div>
                <p className="text-primary-100">
                  Crecimiento constante en estudiantes certificados y alianzas estratégicas año tras año.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Alcance Internacional</h4>
                    <p className="text-primary-200">Latinoamérica y USA</p>
                  </div>
                </div>
                <p className="text-primary-100">
                  Presencia consolidada en los principales mercados latinoamericanos con expansión continua.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Excelencia Académica</h4>
                    <p className="text-primary-200">Estándares internacionales</p>
                  </div>
                </div>
                <p className="text-primary-100">
                  Programas diseñados bajo los más altos estándares internacionales de calidad educativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InstitutionalStats