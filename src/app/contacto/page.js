import { Metadata } from 'next'

export const metadata = {
  title: 'Contacto - FELADE',
  description: 'Ponte en contacto con FELADE. Oficinas en Costa Rica y Miami. Información de contacto y formulario',
}

export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Estamos aquí para ayudarte con todas tus consultas educativas
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Costa Rica */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Costa Rica</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">📍</div>
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-gray-600">[Dirección completa Costa Rica]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">📞</div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-gray-600">[Teléfono Costa Rica]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">✉️</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">[Email Costa Rica]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Miami */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Miami, USA</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">📍</div>
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-gray-600">[Dirección completa Miami]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">📞</div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-gray-600">[Teléfono Miami]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">✉️</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">[Email Miami]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Envíanos un Mensaje</h2>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Asunto</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                <textarea rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestras Ubicaciones</h2>
          {/* Mapa interactivo */}
        </div>
      </section>
    </div>
  )
}