import { Metadata } from 'next'

export const metadata = {
  title: 'Términos y Condiciones - FELADE',
  description: 'Términos y condiciones de uso de los servicios de FELADE',
}

export default function Terminos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Términos y Condiciones</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Términos de uso de los servicios de FELADE
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

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 mb-6">
              Al acceder y utilizar los servicios de FELADE, usted acepta estar sujeto a estos términos y condiciones.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-gray-700 mb-6">
              FELADE ofrece servicios de certificación y educación continua...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Registro y Cuenta de Usuario</h2>
            <p className="text-gray-700 mb-6">
              Para acceder a ciertos servicios, deberá crear una cuenta...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Pagos y Reembolsos</h2>
            <p className="text-gray-700 mb-6">
              Los pagos por certificaciones y servicios se rigen por...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-6">
              Todo el contenido educativo y materiales son propiedad de FELADE...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-6">
              FELADE no será responsable por daños indirectos o consecuenciales...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Modificaciones</h2>
            <p className="text-gray-700 mb-6">
              FELADE se reserva el derecho de modificar estos términos...
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contacto</h2>
            <p className="text-gray-700 mb-6">
              Si tiene preguntas sobre estos términos, puede contactarnos en...
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}