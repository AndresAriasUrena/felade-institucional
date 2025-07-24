import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa'

const AboutUsExcerpt = () => {
  const features = [
    {
      title: 'Experiencia Comprobada',
      description: '29 años liderando la educación superior en Latinoamérica',
      icon: '🏆'
    },
    {
      title: 'Red Internacional',
      description: 'Presencia en 12 países con más de 45 instituciones aliadas',
      icon: '🌎'
    },
    {
      title: 'Certificaciones Reconocidas',
      description: 'CIPLAD, CIMAR y CIBCA con validez internacional',
      icon: '🎓'
    },
    {
      title: 'Metodología Innovadora',
      description: 'Modalidades presencial, virtual e híbrida adaptadas a tus necesidades',
      icon: '💡'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 text-primary-600 font-semibold">
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

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestra Misión</h3>
                <p className="text-gray-600">{COMPANY_INFO.mission}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestra Visión</h3>
                <p className="text-gray-600">{COMPANY_INFO.vision}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/sobre-nosotros" size="lg">
                Conocer Más
                <FaArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" href="/contacto" size="lg">
                Contáctanos
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">
                ¿Por qué elegir FELADE?
              </h3>
              <ul className="space-y-2 text-primary-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                  Certificaciones con reconocimiento internacional
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                  Metodología probada y adaptada al mercado actual
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                  Red de contactos profesionales en Latinoamérica
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                  Soporte académico personalizado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutUsExcerpt