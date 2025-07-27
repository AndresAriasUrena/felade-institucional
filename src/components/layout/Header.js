'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const navigationItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { 
      name: 'Servicios', 
      href: '/servicios',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Todos los Servicios', href: '/servicios' },
        { name: 'Certificaciones', href: '/certificaciones' },
        { name: 'CIPLAD', href: '/certificaciones#ciplad' },
        { name: 'CIMAR', href: '/certificaciones#cimar' },
        { name: 'CIBCA', href: '/certificaciones#cibca' },
      ]
    },
    { name: 'Países', href: '/paises' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header 
      className="felade-header shadow-xl sticky top-0 z-50" 
      style={{
        background: 'linear-gradient(135deg, #01174D 0%, #1e3a8a 100%)',
        opacity: 1,
        zIndex: 9999 // Z-index más alto que el hero
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-12 w-auto relative">
              <Image
                src="/images/icons/FELADE-blanco.png"
                alt="FELADE - Fundación para el Estudio del Lavado de Activos y Delitos"
                width={180}
                height={48}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-200 hover:text-secondary-400 transition-colors font-medium"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <FaChevronDown className="text-xs" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      style={{ zIndex: 10000 }} // Z-index aún más alto para dropdown
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-secondary-400 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/certificaciones"
              className="bg-secondary-500 text-white px-5 py-2 rounded-lg hover:bg-secondary-600 transition-colors font-bold"
            >
              Certificarse Ahora
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-200 hover:text-secondary-400 transition-colors"
            style={{ zIndex: 10001 }} // Z-index alto para mobile button
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-primary-700 pt-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-200 hover:bg-primary-800 rounded-lg transition-colors"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown className={`text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`ml-4 mt-2 space-y-1 transition-all duration-200 ${
                      isServicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-gray-300 hover:bg-primary-800 hover:text-secondary-400 rounded-lg transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-200 hover:bg-primary-800 hover:text-secondary-400 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="/certificaciones"
              onClick={closeMenu}
              className="block mx-4 mt-4 bg-secondary-500 text-white text-center px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-bold"
            >
              Certificarse Ahora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header