import { Metadata } from 'next'

export const metadata = {
  title: 'Servicios - FELADE',
  description: 'Descubre todos los servicios educativos que FELADE ofrece para instituciones y estudiantes en Latinoamérica',
}

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Soluciones educativas integrales para el desarrollo académico y profesional
          </p>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Servicios Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjetas de servicios */}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Certificaciones Disponibles</h2>
          {/* Grid de certificaciones */}
        </div>
      </section>

      {/* Proceso de Certificación */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Proceso de Certificación</h2>
          {/* Timeline del proceso */}
        </div>
      </section>
    </div>
  )
}