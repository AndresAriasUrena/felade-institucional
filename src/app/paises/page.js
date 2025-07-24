import { Metadata } from 'next'

export const metadata = {
  title: 'Países y Alianzas - FELADE',
  description: 'Descubre la presencia internacional de FELADE y nuestras alianzas estratégicas en Latinoamérica',
}

export default function Paises() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Países y Alianzas</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Nuestra red internacional de instituciones educativas y alianzas estratégicas
          </p>
        </div>
      </section>

      {/* Mapa Interactivo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Presencia Internacional</h2>
          {/* Mapa de países */}
        </div>
      </section>

      {/* Alianzas por País */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Alianzas Estratégicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards de países con sus alianzas */}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">En Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Estadísticas de presencia internacional */}
          </div>
        </div>
      </section>

      {/* Cómo ser Aliado */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Quieres ser nuestro aliado?</h2>
          {/* Formulario o información de contacto */}
        </div>
      </section>
    </div>
  )
}