import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa'

const InstitutionalMission = () => {
  const values = [
    {
      title: 'Excelencia Académica',
      description: 'Comprometidos con los más altos estándares educativos internacionales',
      icon: '🎓'
    },
    {
      title: 'Innovación',
      description: 'Incorporamos las últimas tendencias y tecnologías en educación',
      icon: '💡'
    },
    {
      title: 'Integridad',
      description: 'Actuamos con transparencia y ética en todas nuestras actividades',
      icon: '⚖️'
    },
    {
      title: 'Inclusión',
      description: 'Promovemos la diversidad y el acceso equitativo a la educación',
      icon: '🤝'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Nuestra Institución
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <FaBullseye className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mr-4">
                <FaEye className="text-2xl text-secondary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                <FaHeart className="text-xl text-primary-600" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">
                Nuestros Valores
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios fundamentales que guían nuestro trabajo y definen nuestra identidad institucional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founded Year */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-primary-50 rounded-full px-6 py-3">
            <span className="text-primary-600 font-semibold">
              Fundada en {COMPANY_INFO.founded} • {new Date().getFullYear() - parseInt(COMPANY_INFO.founded)} años de experiencia
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InstitutionalMission