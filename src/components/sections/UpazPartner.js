'use client'

import { 
  FaUsers, 
  FaGlobe, 
  FaHandshake, 
  FaCheckCircle, 
  FaExternalLinkAlt,
  FaUniversity,
  FaGraduationCap,
  FaAward
} from 'react-icons/fa'
import Container from '../ui/Container'
import Button from '../ui/Button'

const UpazPartner = () => {
  const upazStats = [
    {
      icon: <FaUniversity className="w-10 h-10" />,
      number: 'Desde 1980',
      label: 'Institución de la ONU',
      description: 'Creada por la Asamblea General'
    },
    {
      icon: <FaUsers className="w-10 h-10" />,
      number: '+6,000',
      label: 'Egresados',
      description: 'Graduados de más de 120 países'
    },
    {
      icon: <FaGlobe className="w-10 h-10" />,
      number: '120+',
      label: 'Países',
      description: 'Alcance mundial'
    },
    {
      icon: <FaHandshake className="w-10 h-10" />,
      number: '2018',
      label: 'Alianza FELADE',
      description: 'Partnership estratégico'
    }
  ]

  const academicPrograms = [
    'Educación para la paz y derechos humanos',
    'Resolución de conflictos internacionales', 
    'Desarrollo sostenible y medio ambiente',
    'Cooperación internacional',
    'Derecho internacional humanitario',
    'Estudios de género y paz'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-white">
                <div className="text-lg font-bold">UN</div>
                <div className="w-6 h-0.5 bg-white mx-auto"></div>
                <div className="text-xs">PEACE</div>
              </div>
            </div>
            <div className="h-16 w-1 bg-gradient-to-b from-primary-300 to-primary-500 rounded-full"></div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
                Universidad para la Paz
              </h2>
              <div className="flex items-center space-x-3">
                <FaAward className="text-secondary-500" />
                <span className="text-secondary-600 font-bold text-lg">
                  Partner Académico Global
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            La <strong>Universidad para la Paz (UPEACE)</strong> es una institución académica internacional 
            creada en 1980 por la Asamblea General de las Naciones Unidas. Su mandato 
            exclusivo es la educación para la paz, siendo la <strong>única universidad en el sistema 
            de la ONU</strong> dedicada a este propósito.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {upazStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary-900 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Programs Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mr-4">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-900 mb-1">
                  Programas Académicos
                </h3>
                <p className="text-gray-600">Maestrías y Doctorados</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              UPEACE ofrece programas de <strong>maestría y doctorado</strong> con enfoque interdisciplinario 
              que combina formación académica rigurosa con aprendizaje práctico en resolución 
              de conflictos, derechos humanos y desarrollo sostenible.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {academicPrograms.map((program, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <span className="text-gray-800 font-medium">{program}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Highlight Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="text-8xl transform rotate-12">🕊️</div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold mb-4">
                    <span className="text-secondary-400">44</span>
                    <span className="text-4xl text-primary-200 ml-2">años</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Formando Líderes Globales
                  </h3>
                  <p className="text-primary-200">
                    Dedicados exclusivamente a la educación para la paz
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <FaGlobe className="text-secondary-400" />
                      <div>
                        <div className="font-semibold">Campus Internacional</div>
                        <div className="text-sm text-primary-200">Rodrigo Carazo, Costa Rica</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <FaUniversity className="text-secondary-400" />
                      <div>
                        <div className="font-semibold">Reconocimiento ONU</div>
                        <div className="text-sm text-primary-200">Única universidad de paz del sistema</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Conoce más sobre nuestra alianza
            </h3>
            <p className="text-gray-700 mb-6">
              Descubre cómo la colaboración entre FELADE y UPEACE fortalece 
              nuestros programas de certificación internacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://www.upeace.org" 
                target="_blank"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <FaExternalLinkAlt className="mr-2" />
                Visitar UPEACE
              </Button>
              <Button
                variant="outline"
                href="/sobre-nosotros"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-6 py-3"
              >
                Nuestra Historia
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default UpazPartner