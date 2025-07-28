'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const certificationLinks = [
    { name: 'CIPLAD', href: 'https://ciplad.felade.com' },
    { name: 'CIMAR', href: 'https://cimar.felade.com' },
    { name: 'CIBCA', href: 'https://cibca.felade.com' },
    { name: 'Todas las Certificaciones', href: '/certificaciones' },
  ]

  const supportLinks = [
    { name: 'Foro WCF', href: 'https://worldcomplianceforum.com' },
    { name: 'Ayuda & FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Talleres', href: '/certificaciones' },
    { name: 'Certificaciones', href: '/certificaciones' },
  ]

  const quickLinks = [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Países y Alianzas', href: '/paises' },
    { name: 'Preguntas Frecuentes', href: '/faq' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const legalLinks = [
    { name: 'Términos y condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/feladeorg' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://x.com/feladeorg' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/felade/' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/feladeorg/' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/@felade9152' }
  ]

  // Países con presencia regional
  const countries = [
    { code: 'US', flag: '🇺🇸', name: 'Estados Unidos' },
    { code: 'MX', flag: '🇲🇽', name: 'México' },
    { code: 'DO', flag: '🇩🇴', name: 'República Dominicana' },
    { code: 'GT', flag: '🇬🇹', name: 'Guatemala' },
    { code: 'AR', flag: '🇦🇷', name: 'Argentina' },
    { code: 'HN', flag: '🇭🇳', name: 'Honduras' },
    { code: 'PA', flag: '🇵🇦', name: 'Panamá' },
    { code: 'CR', flag: '🇨🇷', name: 'Costa Rica' },
    { code: 'CO', flag: '🇨🇴', name: 'Colombia' },
    { code: 'CH', flag: '🇨🇱', name: 'Chile' },
    { code: 'BR', flag: '🇧🇷', name: 'Brasil' },
    { code: 'UY', flag: '🇺🇾', name: 'Uruguay' },
  ]

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        color: '#e2e8f0'
      }}
    >
      {/* Patrón SVG de fondo */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='5' cy='5' r='4'/%3E%3Ccircle cx='55' cy='5' r='4'/%3E%3Ccircle cx='5' cy='55' r='4'/%3E%3Ccircle cx='55' cy='55' r='4'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Información de la empresa - Columna más ancha */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              {/* Logo FELADE en blanco - Tamaño grande */}
              <div className="mb-8">
                <div className="max-w-[330px] relative mx-auto">
                  <Image
                    src="/images/icons/FELADE-blanco.png"
                    alt="FELADE Logo"
                    width={220}
                    height={100}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>

              {/* Descripción */}
              {/* <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-md">
                Somos una organización internacional con presencia en más de 10 países...
              </p> */}

              {/* Botón Leer más */}
              {/* <Link 
                href="/sobre-nosotros"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group"
              >
                Leer más 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link> */}
            </div>

            {/* Logo UPAZ - Tamaño grande */}
            <div className="pt-6 border-t border-gray-600">
              <div className="w-full max-w-xs relative mx-auto">
                <Image
                  src="/images/icons/UPAZ-blanco.png"
                  alt="Universidad para la Paz"
                  width={240}
                  height={80}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Soporte</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contáctanos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contáctanos</h4>
            
            {/* Dirección Miami */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 text-sm flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">1401 Brickell Ave Suite 330</p>
                  <p className="text-gray-300">Miami, Florida 33131</p>
                  <p className="text-gray-300">Estados Unidos</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-400 text-xs flex-shrink-0" />
                  <span className="text-gray-300">+1 (407) 670-4022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 text-xs flex-shrink-0" />
                  <a href="mailto:info@felade.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    info@felade.com
                  </a>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Suscríbete a nuestro boletín informativo</h4>
            
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Suscribirse
              </button>
            </form>

            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              Recibe las últimas noticias sobre certificaciones y programas de capacitación.
            </p>
          </div>
        </div>
      </div>

      {/* Presencia Regional */}
      <div className="relative z-10 border-t border-gray-600">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Presencia Regional</h3>
            <p className="text-gray-400 text-sm">Países donde FELADE tiene presencia activa</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {countries.map((country) => (
              <div
                key={country.code}
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {country.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © {currentYear} <span className="text-blue-400">Aurigital</span>, All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer