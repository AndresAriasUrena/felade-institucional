import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'
import { FaArrowRight } from 'react-icons/fa'

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones educativas integrales para el desarrollo profesional y empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <Card key={service.name} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{service.icon}</div>
              <Card.Title>{service.name}</Card.Title>
              <Card.Content>{service.description}</Card.Content>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/servicios" size="lg">
            Ver Todos los Servicios
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection