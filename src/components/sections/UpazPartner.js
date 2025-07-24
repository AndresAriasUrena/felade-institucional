// src/components/sections/UpazPartner.js
'use client';

import Image from 'next/image';
import { 
  FaUsers, 
  FaGlobe, 
  FaHandshake, 
  FaCheckCircle, 
  FaExchangeAlt,
  FaUniversity // Cambio FaResearch por FaUniversity
} from 'react-icons/fa';
import Container from '../ui/Container';
import Card from '../ui/Card';

const UpazPartner = () => {
  const upazFeatures = [
    {
      icon: <FaUniversity className="w-8 h-8" />, // Cambio aquí
      title: 'Institución de la ONU',
      description: 'Creada en 1980 por la Asamblea General de las Naciones Unidas'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: '+6,000 egresados',
      description: 'Más de 6,000 graduados de más de 120 países'
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: 'Alcance Global',
      description: 'Presencia internacional en educación para la paz'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Partner Académico',
      description: 'Colaboración estratégica con FELADE'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">UN</span>
            </div>
            <div className="h-12 w-px bg-primary-300"></div>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
                Universidad para la Paz
              </h2>
              <p className="text-secondary-600 font-semibold">
                Partner Académico Global
              </p>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            La Universidad para la Paz (UPEACE) es una institución académica internacional 
            creada en 1980 por la Asamblea General de las Naciones Unidas. Su mandato 
            exclusivo es la educación para la paz, siendo la única universidad en el sistema 
            de la ONU dedicada a este propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {upazFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-primary-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Programas de Maestría y Doctorado
              </h3>
              <p className="text-gray-600 mb-6">
                UPEACE ofrece programas de maestría y doctorado en áreas como resolución 
                de conflictos, derechos humanos, derecho internacional, medio ambiente y 
                desarrollo sostenible. Su enfoque interdisciplinario combina formación 
                académica rigurosa con aprendizaje práctico.
              </p>
              
              <div className="space-y-3">
                {[
                  'Educación para la paz y derechos humanos',
                  'Resolución de conflictos internacionales',
                  'Desarrollo sostenible y medio ambiente',
                  'Cooperación internacional'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-2">Desde</div>
                <div className="text-6xl font-bold text-secondary-400 mb-2">1980</div>
                <div className="text-lg">Formando líderes globales</div>
                
                <div className="mt-6 pt-6 border-t border-primary-400">
                  <div className="text-sm opacity-90">
                    Campus Rodrigo Carazo - Costa Rica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.upeace.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 font-semibold transition-colors"
          >
            <span>Conocer más sobre UPEACE</span>
            <FaExchangeAlt className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default UpazPartner;