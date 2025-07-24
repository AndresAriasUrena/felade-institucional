import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { COUNTRIES_ALLIANCES } from '@/lib/constants'
import { FaUniversity, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'

const CountryAlliances = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Nuestras Alianzas Internacionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Red de instituciones educativas de prestigio en toda Latinoamérica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {COUNTRIES_ALLIANCES.map((country, index) => (
            <Card key={country.country} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Card.Header>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{country.flag}</span>
                    <h3 className="text-xl font-display font-bold text-gray-900">
                      {country.country}
                    </h3>
                  </div>
                </div>
              </Card.Header>

              <Card.Content>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaUniversity className="text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{country.institutions}</div>
                    <div className="text-sm text-gray-500">Instituciones</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaUsers className="text-secondary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{country.students.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Estudiantes</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Alianzas Principales:</h4>
                  <div className="space-y-2">
                    {country.partnerships.slice(0, 3).map((partnership, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-gray-400 text-xs" />
                        <span className="text-sm text-gray-600">{partnership}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Content>

              <Card.Footer>
                <Button variant="outline" className="w-full" href="/paises">
                  Ver Detalles
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-display font-bold mb-6">
            Impacto Regional
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-secondary-400">
                {COUNTRIES_ALLIANCES.reduce((sum, country) => sum + country.institutions, 0)}
              </div>
              <div className="text-primary-100">Instituciones Totales</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-400">
                {COUNTRIES_ALLIANCES.reduce((sum, country) => sum + country.students, 0).toLocaleString()}
              </div>
              <div className="text-primary-100">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-400">
                {COUNTRIES_ALLIANCES.length}
              </div>
              <div className="text-primary-100">Países</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-400">
                {COUNTRIES_ALLIANCES.reduce((sum, country) => sum + country.partnerships.length, 0)}
              </div>
              <div className="text-primary-100">Alianzas Estratégicas</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CountryAlliances