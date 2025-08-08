// src/components/sections/CountryAlliances.js - Versión centrada en logos
'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { FaGlobe, FaHandshake, FaCertificate, FaArrowRight } from 'react-icons/fa'

const CountryAlliances = () => {
  const [failedImages, setFailedImages] = useState(new Set())

  // Función para manejar errores de carga de imágenes
  const handleImageError = (logoPath, institutionName, region) => {
    if (!failedImages.has(logoPath)) {
      setFailedImages(prev => new Set([...prev, logoPath]))
    }
  }

  // Placeholder para logos que no existan
  const getLogoPlaceholder = (institutionName, region) => {
    return `data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='40%25' font-size='12' fill='%236b7280' text-anchor='middle' font-family='Arial, sans-serif'%3E${encodeURIComponent(institutionName)}%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='10' fill='%239ca3af' text-anchor='middle' font-family='Arial, sans-serif'%3E${encodeURIComponent(region)}%3C/text%3E%3C/svg%3E`
  }

  // Alianzas organizadas por región con información completa de logos
  const alliances = [
    {
      region: 'Global',
      country: 'Internacional',
      flagCode: null,
      institutions: [
        {
          name: 'Universidad para la Paz',
          subtitle: 'Mandato de las Naciones Unidas',
          logo: '/images/icons/UPAZ-logo.png',
          description: 'Institución académica internacional creada por la Asamblea General de la ONU',
          website: 'https://www.upeace.org',
          partnership: 'Programas académicos conjuntos'
        }
      ]
    },
    {
      region: 'Costa Rica',
      country: 'Costa Rica', 
      flagCode: 'cr',
      institutions: [
        {
          name: 'Colegio de Contadores Públicos',
          subtitle: 'Organismo Colegiado Nacional',
          logo: '/images/icons/CCPCR-logo.png',
          description: 'Institución que regula la profesión contable en Costa Rica',
          website: 'https://www.ccpa.or.cr',
          partnership: 'Certificaciones profesionales'
        }
      ]
    },
    {
      region: 'México',
      country: 'México',
      flagCode: 'mx', 
      institutions: [
        {
          name: 'Comisión Nacional Bancaria y de Valores',
          subtitle: 'CNBV',
          logo: '/images/icons/cnbv-logo.png',
          description: 'Órgano desconcentrado de la SHCP que supervisa el sistema financiero mexicano',
          website: 'https://www.gob.mx/cnbv',
          partnership: 'Programas de capacitación regulatoria'
        }
      ]
    },
    {
      region: 'Perú',
      country: 'Perú',
      flagCode: 'pe',
      institutions: [
        {
          name: 'Instituto de Auditores Internos',
          subtitle: 'del Perú - IAIP',
          logo: '/images/icons/IAIP-logo.png',
          description: 'Organización profesional de auditores internos en Perú',
          website: 'https://www.iaiperu.org',
          partnership: 'Certificaciones en auditoría'
        }
      ]
    },
    {
      region: 'Panamá',
      country: 'Panamá',
      flagCode: 'pa',
      institutions: [
        {
          name: 'Superintendencia de Sujetos No Financieros',
          subtitle: 'SSNF',
          logo: '/images/icons/SSNF-logo.jpg',
          description: 'Entidad supervisora de actividades no financieras en Panamá',
          website: 'https://www.ssnf.gob.pa',
          partnership: 'Capacitación en cumplimiento'
        }
      ]
    },
    {
      region: 'República Dominicana',
      country: 'República Dominicana',
      flagCode: 'do',
      institutions: [
        {
          name: 'Unidad de Análisis Financiero',
          subtitle: 'UAF - República Dominicana',
          logo: '/images/icons/UAF_RD-logo.png',
          description: 'Unidad de inteligencia financiera de República Dominicana',
          website: 'https://www.uaf.gob.do',
          partnership: 'Programas AML/FT especializados'
        }
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='10' cy='10' r='0.5'/%3E%3Ccircle cx='50' cy='10' r='0.5'/%3E%3Ccircle cx='10' cy='50' r='0.5'/%3E%3Ccircle cx='50' cy='50' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-6">
              <FaHandshake className="text-blue-600 mr-2" />
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
                Alianzas de Cooperación
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras Alianzas
              <span className="block text-blue-800">Internacionales</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Red de instituciones educativas y regulatorias de prestigio en toda Latinoamérica
            </p>
          </div>

          {/* Alianzas Grid - Centrado en logos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {alliances.map((alliance, index) => (
              <div 
                key={alliance.region}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Header con flag y región */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white relative overflow-hidden">
                  {alliance.flagCode && (
                    <div className="absolute top-2 right-2 w-12 h-8 opacity-30 pointer-events-none">
                      <img
                        src={`https://flagcdn.com/48x36/${alliance.flagCode}.png`}
                        alt={`Bandera de ${alliance.country}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold">{alliance.region}</h3>
                    </div>
                  </div>
                </div>

                {/* Contenido - Logo prominente */}
                <div className="p-8">
                  {alliance.institutions.map((institution, idx) => (
                    <div key={idx} className="text-center">
                      {/* Logo container - PROTAGONISTA */}
                      <div className="mb-6 flex justify-center">
                        <div className="w-48 h-32 rounded-xl flex items-center justify-center">
                          <img
                            src={failedImages.has(institution.logo) ? getLogoPlaceholder(institution.name, alliance.region) : institution.logo}
                            alt={`Logo de ${institution.name}`}
                            className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                            onError={() => handleImageError(institution.logo, institution.name, alliance.region)}
                          />
                        </div>
                      </div>
                      
                      {/* Información de la institución */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                            {institution.name}
                          </h4>
                          <p className="text-sm font-medium text-blue-600 mb-3">
                            {institution.subtitle}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {institution.description}
                        </p>
                        
                        {/* Partnership type */}
                        {/* <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-center space-x-2">
                            <FaCertificate className="text-blue-500 text-sm" />
                            <span className="text-sm font-medium text-gray-700">
                              {institution.partnership}
                            </span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer con enlace */}
                {/* <div className="px-8 pb-8">
                  <Button 
                    variant="outline"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 font-semibold group-hover:scale-105 transition-all duration-300"
                    href="/alianzas"
                  >
                    <FaGlobe className="mr-2" />
                    Ver Detalles
                  </Button>
                </div> */}
              </div>
            ))}
          </div>

          {/* Resumen estadístico mejorado */}
          {/* <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='10'/%3E%3Ccircle cx='75' cy='25' r='8'/%3E%3Ccircle cx='25' cy='75' r='8'/%3E%3Ccircle cx='75' cy='75' r='10'/%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-8">
                Impacto Regional de Nuestras Alianzas
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-600 mb-2">
                    {alliances.reduce((sum, alliance) => sum + alliance.institutions.length, 0)}
                  </div>
                  <div className="text-blue-100 font-medium">Instituciones Aliadas</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-500 mb-2">
                    {alliances.length}
                  </div>
                  <div className="text-blue-100 font-medium">Países/Regiones</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-500 mb-2">
                    6+
                  </div>
                  <div className="text-blue-100 font-medium">Tipos de Alianza</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-500 mb-2">
                    2005
                  </div>
                  <div className="text-blue-100 font-medium">Desde</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-500">
                <Button 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  href="/alianzas"
                >
                  <FaArrowRight className="mr-2" />
                  Explorar Todas las Alianzas
                </Button>
              </div>
            </div>
          </div> */}

          {/* Call to Action para nuevas alianzas */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Interesado en una Alianza Estratégica?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Únete a nuestra red de instituciones educativas y regulatorias líderes en Latinoamérica
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contacto" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 shadow-lg"
                >
                  <FaHandshake className="mr-2" />
                  Contactar para Alianza
                </Button>
                <Button
                  variant="outline"
                  href="/sobre-nosotros"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3"
                >
                  Conoce FELADE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CountryAlliances