import Container from '@/components/ui/Container'
import { INSTITUTIONAL_STATS } from '@/lib/constants'
import { FaCalendarAlt, FaGraduationCap, FaUniversity, FaGlobe, FaCertificate, FaChartLine } from 'react-icons/fa'

const InstitutionalStats = () => {
  // Usar directamente el array INSTITUTIONAL_STATS del constants.js
  const statsIcons = [
    <FaGlobe className="text-3xl text-blue-600" />,
    <FaCalendarAlt className="text-3xl text-primary-600" />,
    <FaChartLine className="text-3xl text-green-600" />,
    <FaUniversity className="text-3xl text-purple-600" />,
    <FaGraduationCap className="text-3xl text-secondary-600" />
  ]

  const stats = INSTITUTIONAL_STATS.map((stat, index) => ({
    ...stat,
    icon: statsIcons[index] || <FaCertificate className="text-3xl text-gray-600" />
  }))

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            FELADE en Números
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Nuestro impacto y presencia en la educación superior latinoamericana
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-primary-100 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-primary-200">
                Nuestra experiencia y alcance
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-display font-bold mb-4">
              Reconocimiento Internacional
            </h3>
            <p className="text-primary-100 leading-relaxed max-w-4xl mx-auto">
              FELADE es reconocida por instituciones educativas de prestigio internacional y mantiene 
              alianzas estratégicas con universidades líderes en toda Latinoamérica, garantizando 
              la calidad y validez internacional de nuestras certificaciones.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InstitutionalStats