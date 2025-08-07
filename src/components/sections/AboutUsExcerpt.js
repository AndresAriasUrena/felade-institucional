import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import { FaArrowRight, FaQuoteLeft, FaCertificate, FaGlobe, FaAward, FaLightbulb } from 'react-icons/fa'

const AboutUsExcerpt = () => {
  const features = [
    {
      title: 'Experiencia Comprobada',
      description: '29 años liderando la educación superior en Latinoamérica',
      icon: <FaAward className="text-3xl text-blue-400" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Red Internacional',
      description: 'Presencia en 12 países con más de 45 instituciones aliadas',
      icon: <FaGlobe className="text-3xl text-blue-400" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Certificaciones Reconocidas',
      description: 'CIPLAD, CIMAR y CIBCA con validez internacional',
      icon: <FaCertificate className="text-3xl text-blue-400" />,
      color: 'bg-blue-700'
    },
    {
      title: 'Metodología Innovadora',
      description: 'Modalidades presencial, virtual e híbrida adaptadas a tus necesidades',
      icon: <FaLightbulb className="text-3xl text-blue-400" />,
      color: 'bg-blue-800'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 font-semibold border border-blue-200">
                <FaQuoteLeft className="mr-2" />
                Sobre FELADE
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              {COMPANY_INFO.fullName}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {COMPANY_INFO.description}. Desde {COMPANY_INFO.founded}, hemos formado a más de 15,000 
              profesionales con los más altos estándares de calidad educativa.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>Certificaciones con reconocimiento internacional</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span>Metodología probada y adaptada al mercado actual</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-3 h-3 bg-blue-700 rounded-full mr-3"></div>
                <span>Red de contactos profesionales en Latinoamérica</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-3 h-3 bg-blue-800 rounded-full mr-3"></div>
                <span>Soporte académico personalizado</span>
              </div>
            </div>

            <Button 
              href="/certificaciones" 
              variant="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center group"
            >
              Conoce nuestras certificaciones
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`relative p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.color}`}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// Versión completa para la página dedicada
const AboutUsExcerptFull = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-6 border border-blue-200">
              <span className="text-blue-700 font-bold">Quiénes Somos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Fundación para el Estudio del Lavado de Activos y Delitos
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {COMPANY_INFO.fullName} es una institución educativa líder en Latinoamérica, 
              especializada en la formación de profesionales en prevención de lavado de activos, 
              financiamiento del terrorismo y cumplimiento normativo.
            </p>

            <p className="leading-relaxed mb-8">
              Fundada en {COMPANY_INFO.founded}, hemos formado a más de 17,000 profesionales 
              a través de nuestras certificaciones CIPLAD, CIMAR y CIBCA, estableciendo 
              alianzas estratégicas con más de 45 instituciones en 12 países de la región.
            </p>

            <p className="leading-relaxed mb-8">
              Nuestro compromiso con la excelencia académica nos ha posicionado como referente 
              en la educación especializada, ofreciendo programas que combinan rigor académico 
              con aplicación práctica, adaptados a las necesidades del mercado laboral actual.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  📈 Nuestro Crecimiento
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 29 años de experiencia comprobada</li>
                  <li>• Presencia en 12 países latinoamericanos</li>
                  <li>• Más de 17,000 profesionales certificados</li>
                  <li>• 15+ instituciones aliadas</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  🎯 Nuestro Enfoque
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Metodología innovadora y práctica</li>
                  <li>• Certificaciones con validez internacional</li>
                  <li>• Modalidades presencial, virtual e híbrida</li>
                  <li>• Actualización continua de contenidos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutUsExcerpt
export { AboutUsExcerptFull }