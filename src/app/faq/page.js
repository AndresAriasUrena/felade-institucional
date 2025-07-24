import { Metadata } from 'next'

export const metadata = {
  title: 'Preguntas Frecuentes - FELADE',
  description: 'Encuentra respuestas a las preguntas más comunes sobre los servicios y certificaciones de FELADE',
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Encuentra respuestas a las dudas más comunes sobre FELADE
          </p>
        </div>
      </section>

      {/* Buscador */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Buscar pregunta..."
              className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Categorías de preguntas */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Certificaciones</h3>
              {/* Preguntas sobre certificaciones */}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Inscripciones</h3>
              {/* Preguntas sobre inscripciones */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pagos</h3>
              {/* Preguntas sobre pagos */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Accordion de preguntas frecuentes */}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿No encuentras tu respuesta?</h2>
          <p className="text-lg text-gray-600 mb-8">Contáctanos directamente y te ayudaremos</p>
          {/* Botón de contacto */}
        </div>
      </section>
    </div>
  )
}