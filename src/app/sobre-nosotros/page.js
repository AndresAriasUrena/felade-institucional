import { Metadata } from 'next'

export const metadata = {
  title: 'Sobre Nosotros - FELADE',
  description: 'Conoce la historia, misión y visión de FELADE - Fundación para el Estudio del Lavado de Activos y Delitos',
}

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Conoce la historia y propósito de FELADE en la educación superior latinoamericana
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestra Historia</h2>
          {/* Contenido de historia */}
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Misión</h2>
              {/* Contenido de misión */}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visión</h2>
              {/* Contenido de visión */}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestros Valores</h2>
          {/* Grid de valores */}
        </div>
      </section>
    </div>
  )
}