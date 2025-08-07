import { Metadata } from 'next'

export const metadata = {
  title: 'Certificaciones - FELADE',
  description: 'Conoce las certificaciones CIPLAD, CIMAR y CIBCA que ofrece FELADE para el desarrollo profesional',
}

export default function Certificaciones() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificaciones</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Programas de certificación profesional reconocidos internacionalmente
          </p>
        </div>
      </section>

      {/* CIPLAD Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">CIPLAD</h2>
            <p className="text-lg text-gray-600">Certificación Internacional en Prevención del Lavado de Activos y Delitos</p>
          </div>
          {/* Detalles de CIPLAD */}
        </div>
      </section>

      {/* CIMAR Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">CIMAR</h2>
            <p className="text-lg text-gray-600">Certificación Internacional en Matrices de Riesgo</p>
          </div>
          {/* Detalles de CIMAR */}
        </div>
      </section>

      {/* CIBCA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">CIBCA</h2>
            <p className="text-lg text-gray-600">Certificación Internacional en Blockchain, Compliance y Activos Digitales</p>
          </div>
          {/* Detalles de CIBCA */}
        </div>
      </section>

      {/* Comparación de Certificaciones */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Compara Nuestras Certificaciones</h2>
          {/* Tabla comparativa */}
        </div>
      </section>
    </div>
  )
}