import { Metadata } from 'next'

export const metadata = {
  title: 'Política de Privacidad - FELADE',
  description: 'Política de privacidad y protección de datos de FELADE',
}

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Cómo recopilamos, usamos y protegemos su información personal
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: [Fecha]
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-6">
              Recopilamos información personal cuando se registra en nuestros servicios, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Información de contacto</li>
              <li>Información académica y profesional</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Cómo Usamos su Información</h2>
            <p className="text-gray-700 mb-6">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Proporcionar servicios de certificación</li>
              <li>Comunicarnos con usted sobre su progreso</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con requisitos legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Compartir Información</h2>
            <p className="text-gray-700 mb-6">
              No vendemos, comercializamos o transferimos su información personal a terceros...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Seguridad de los Datos</h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de seguridad apropiadas para proteger su información...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Sus Derechos</h2>
            <p className="text-gray-700 mb-6">
              Usted tiene derecho a acceder, corregir o eliminar su información personal...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contacto</h2>
            <p className="text-gray-700 mb-6">
              Si tiene preguntas sobre esta política de privacidad, contacte:
            </p>
            <p className="text-gray-700">
              Email: privacy@felade.com<br />
              Teléfono: [Número de teléfono]
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}