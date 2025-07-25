import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const certificationLinks = [
    { name: 'CIPLAD', href: '/certificaciones#ciplad' },
    { name: 'CIMAR', href: '/certificaciones#cimar' },
    { name: 'CIBCA', href: '/certificaciones#cibca' },
    { name: 'Todas las Certificaciones', href: '/certificaciones' },
  ]

  const quickLinks = [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Países y Alianzas', href: '/paises' },
    { name: 'Preguntas Frecuentes', href: '/faq' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-900 font-bold text-lg">F</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">FELADE</h3>
                <p className="text-primary-200 text-sm leading-tight">
                  Fundación para el Estudio del Lavado de Activos y Delitos
                </p>
              </div>
            </div>
            <p className="text-primary-200 text-sm mb-6 leading-relaxed">
              Liderando la educación superior en Latinoamérica con certificaciones 
              internacionales de calidad y programas académicos de excelencia.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Certificaciones</h4>
            <ul className="space-y-3">
              {certificationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              {/* Costa Rica */}
              <div className="text-sm">
                <h5 className="font-semibold text-primary-100 mb-2">Costa Rica</h5>
                <div className="space-y-2 text-primary-200">
                  <div className="flex items-start space-x-2">
                    <FaMapMarkerAlt className="mt-1 text-xs flex-shrink-0" />
                    <span>[Dirección Costa Rica]</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-xs flex-shrink-0" />
                    <span>[Teléfono Costa Rica]</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-xs flex-shrink-0" />
                    <span>[Email Costa Rica]</span>
                  </div>
                </div>
              </div>

              {/* Miami */}
              <div className="text-sm">
                <h5 className="font-semibold text-primary-100 mb-2">Miami, USA</h5>
                <div className="space-y-2 text-primary-200">
                  <div className="flex items-start space-x-2">
                    <FaMapMarkerAlt className="mt-1 text-xs flex-shrink-0" />
                    <span>[Dirección Miami]</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-xs flex-shrink-0" />
                    <span>[Teléfono Miami]</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-xs flex-shrink-0" />
                    <span>[Email Miami]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-300 text-sm">
              © {currentYear} FELADE. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-primary-300 hover:text-white transition-colors text-sm"
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