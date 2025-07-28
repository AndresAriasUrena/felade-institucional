import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'
import { FaEye, FaBullseye, FaHeart, FaLightbulb, FaBalanceScale, FaUsers } from 'react-icons/fa'

const InstitutionalMission = () => {
  const values = [
    {
      title: 'Excelencia Académica',
      description: 'Comprometidos con los más altos estándares educativos internacionales',
      icon: <FaLightbulb className="text-4xl text-blue-500" />,
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Innovación',
      description: 'Incorporamos las últimas tendencias y tecnologías en educación',
      icon: <FaHeart className="text-4xl text-blue-600" />,
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Integridad',
      description: 'Actuamos con transparencia y ética en todas nuestras actividades',
      icon: <FaBalanceScale className="text-4xl text-blue-700" />,
      bgColor: 'bg-blue-700'
    },
    {
      title: 'Inclusión',
      description: 'Promovemos la diversidad y el acceso equitativo a la educación',
      icon: <FaUsers className="text-4xl text-blue-800" />,
      bgColor: 'bg-blue-800'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-blue-25 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-6 border border-blue-200">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-wide">
              Nuestra Institución
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Misión, Visión y Valores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Los pilares fundamentales que definen nuestra identidad y guían nuestro compromiso 
            con la excelencia educativa
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold">Nuestra Misión</h3>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              Formar profesionales de alta calidad en temas de cumplimiento, 
              anti lavado de activos y financiamiento del terrorismo, contribuyendo 
              al fortalecimiento del sistema financiero internacional.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <FaEye className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold">Nuestra Visión</h3>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              Ser la organización líder en Latinoamérica en capacitación 
              especializada en prevención de lavado de activos y 
              financiamiento del terrorismo.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios fundamentales que guían nuestro trabajo y definen nuestra identidad institucional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${value.bgColor} opacity-5 rounded-full -translate-y-10 translate-x-10 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founded Year */}
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-8 py-4 border border-blue-200">
            <span className="text-blue-700 font-bold text-lg">
              Fundada en {COMPANY_INFO.founded} • {new Date().getFullYear() - parseInt(COMPANY_INFO.founded)} años de experiencia
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InstitutionalMission