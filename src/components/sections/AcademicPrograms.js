import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ACADEMIC_PROGRAMS } from '@/lib/constants'
import { FaClock, FaDesktop, FaGraduationCap } from 'react-icons/fa'

const AcademicPrograms = () => {
  const getModalityIcon = (modality) => {
    switch(modality.toLowerCase()) {
      case 'virtual': return <FaDesktop className="text-blue-500" />
      case 'presencial': return <FaGraduationCap className="text-green-500" />
      case 'híbrida': return <FaClock className="text-purple-500" />
      default: return <FaGraduationCap className="text-gray-500" />
    }
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Programas Académicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación integral desde diplomados hasta maestrías con enfoque internacional
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {ACADEMIC_PROGRAMS.map((program, index) => (
            <Card key={program.name} className="hover:shadow-xl transition-all duration-300">
              <Card.Header>
                <div className="flex items-center justify-between mb-4">
                  {getModalityIcon(program.modality)}
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {program.modality}
                  </span>
                </div>
                <Card.Title>{program.name}</Card.Title>
              </Card.Header>
              
              <Card.Content>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="mr-2" />
                  <span>Duración: {program.duration}</span>
                </div>
              </Card.Content>

              <Card.Footer>
                <Button variant="outline" className="w-full">
                  Más Información
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/servicios" size="lg">
            Ver Todos los Programas
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default AcademicPrograms