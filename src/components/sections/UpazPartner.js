'use client'

import { useState } from 'react'
import { 
  FaUsers, 
  FaGlobe, 
  FaHandshake, 
  FaCheckCircle, 
  FaExternalLinkAlt,
  FaUniversity,
  FaGraduationCap,
  FaAward,
  FaChevronDown,
  FaChevronUp,
  FaPeace
} from 'react-icons/fa'

const UpazPartner = () => {
  const [activeAccordion, setActiveAccordion] = useState('programs')

  const accordionItems = [
    {
      id: 'programs',
      title: 'Programas de maestría y doctorado',
      icon: <FaGraduationCap className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            UPEACE ofrece programas de maestría y doctorado con enfoque interdisciplinario 
            que combina formación académica rigurosa con aprendizaje práctico en 
            resolución de conflictos, derechos humanos y desarrollo sostenible.
          </p>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Educación para la paz',
      icon: <FaPeace className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            El campus principal, conocido como Campus Rodrigo Carazo, se encuentra en una 
            reserva natural de 303 hectáreas, proporcionando un entorno propicio para la 
            reflexión y el aprendizaje en armonía con la naturaleza.
          </p>
        </div>
      )
    },
    {
      id: 'graduates',
      title: '+6,000 egresados de más de 120 países',
      icon: <FaUsers className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            Con una comunidad estudiantil diversa, UPEACE ha formado a más de 6,000 
            egresados de más de 120 países, quienes contribuyen activamente a la 
            construcción de un mundo más pacífico y justo.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg mt-3">
            <div className="text-2xl font-bold text-blue-600 mb-1">44 años</div>
            <p className="text-xs text-gray-600">Formando líderes globales dedicados exclusivamente a la educación para la paz</p>
          </div>
        </div>
      )
    }
  ]

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header con layout horizontal */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Columna izquierda - Contenido */}
          <div className="order-2 lg:order-1">
            {/* Logo y título */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src="/images/icons/UPAZ-logo.png" 
                alt="Universidad para la Paz - UPEACE Logo" 
                className="h-16 w-auto object-contain"
              />
              
              {/* <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Universidad para la Paz (UPEACE)
                </h2>
                <div className="flex items-center gap-2">
                  <FaAward className="text-yellow-500 text-xs" />
                  <span className="text-yellow-600 font-semibold text-xs">
                    Partner Académico Global
                  </span>
                </div>
              </div> */}
            </div>
            
            {/* Descripción */}
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              La <strong>Universidad para la Paz (UPEACE)</strong> es una institución académica internacional 
              creada en 1980 por la Asamblea General de las Naciones Unidas. Su mandato 
              exclusivo es la educación para la paz, siendo la <strong>única universidad en el sistema 
              de la ONU</strong> dedicada a este propósito.
            </p>

            {/* Acordeones */}
            <div className="space-y-2 mb-6">
              {accordionItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full px-4 py-3 flex items-center justify-between transition-colors duration-200 ${
                      activeAccordion === item.id ? 'bg-gray-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${activeAccordion === item.id ? 'text-blue-600' : 'text-gray-400'} text-sm`}>
                        {item.icon}
                      </div>
                      <h3 className={`font-medium text-sm text-left ${
                        activeAccordion === item.id ? 'text-blue-600' : 'text-gray-700'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={`text-xs transition-transform duration-200 ${
                      activeAccordion === item.id ? 'text-blue-600 rotate-180' : 'text-gray-400'
                    }`}>
                      <FaChevronDown />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ${
                    activeAccordion === item.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-4 pb-3">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Imagen con overlay de stats */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/backgrounds/upaz-bg.jpg"
                alt="Estudiantes graduados UPEACE - FELADE"
                className="w-full h-[600px] object-cover object-center"
              />
              
              {/* Gradiente overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badge de graduación */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <div className="text-2xl">🎓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid con CTA - 6 columnas */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <FaUniversity className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">Desde 1980</div>
            <div className="text-xs text-gray-600">Institución de la ONU</div>
            <div className="text-[10px] text-gray-500 mt-1">Creada por la Asamblea General</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <FaUsers className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">+6,000</div>
            <div className="text-xs text-gray-600">Egresados</div>
            <div className="text-[10px] text-gray-500 mt-1">Graduados de más de 120 países</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <FaGlobe className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">120+</div>
            <div className="text-xs text-gray-600">Países</div>
            <div className="text-[10px] text-gray-500 mt-1">Alcance mundial</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <FaHandshake className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">2018</div>
            <div className="text-xs text-gray-600">Alianza FELADE</div>
            <div className="text-[10px] text-gray-500 mt-1">Partnership estratégico</div>
          </div>

          {/* CTA como columnas 5-6 (2 columnas) */}
          <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white flex flex-col justify-center">
            <h3 className="text-sm font-bold mb-2">
              Conoce más sobre nuestra alianza
            </h3>
            <p className="text-xs text-blue-100 mb-3">
              Descubre cómo fortalecemos la certificación internacional.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.upeace.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-3 py-1.5 rounded text-xs font-semibold hover:bg-blue-50 transition-colors duration-200 flex-1"
              >
                <FaExternalLinkAlt className="mr-1 text-[10px]" />
                Visitar UPEACE
              </a>
              <a
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center border border-white text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex-1"
              >
                Nuestra Historia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpazPartner