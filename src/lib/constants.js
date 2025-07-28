// src/lib/constants.js

// Certificaciones principales para el slider
export const CERTIFICATIONS = [
  {
    id: 'ciplad',
    badge: 'Certificación Internacional',
    title: 'Certificación en Prevención del Lavado de Activos y Delitos (CIPLAD)',
    description: 'Prepárese para enfrentar los riesgos del crimen financiero con herramientas actualizadas y una visión internacional. Esta certificación lo capacita para implementar programas de cumplimiento, detectar operaciones sospechosas y cumplir con los estándares internacionales AML/FT.',
    modality: 'En línea (1 vez a la semana de 5:30 pm a 8:30 pm, hora de Costa Rica según cronograma)',
    duration: '4 meses',
    credits: '6 créditos',
    requirements: 'No',
    priceUSD: 1225,
    installments: '3 cuotas de USD 475.00',
    enrollLink: 'https://ciplad.felade.com/inscripciones',
    infoLink: 'https://ciplad.felade.com',
    icon: '🛡️'
  },
  {
    id: 'cimar',
    badge: 'Certificación Internacional',
    title: 'Certificación Internacional en Matrices de Riesgo (CIMAR)',
    description: 'Conviértase en un referente en la implementación de matrices de riesgo efectivas para fortalecer su programa de cumplimiento. Aprenda a identificar, medir y mitigar riesgos estratégicos, operativos y regulatorios bajo estándares internacionales.',
    modality: 'En línea (1 vez a la semana de 5:30 pm a 8:30 pm, hora de Costa Rica según cronograma)',
    duration: '4 meses',
    credits: '6 créditos',
    requirements: 'No',
    priceUSD: 1225,
    installments: '3 cuotas de USD 475.00',
    enrollLink: 'https://cimar.felade.com/inscripciones',
    infoLink: 'https://cimar.felade.com',
    icon: '📊'
  },
  {
    id: 'cibca',
    badge: 'Certificación Blockchain',
    title: 'Certificación Internacional Blockchain, Compliance y Activos Digitales (CIBCA)',
    description: 'Domine los fundamentos del ecosistema blockchain y su impacto en los programas de cumplimiento. Esta certificación abarca criptoactivos, contratos inteligentes, tokenización y los marcos regulatorios emergentes más relevantes.',
    modality: 'En línea (1 vez a la semana de 5:30 pm a 8:30 pm, hora de Costa Rica según cronograma)',
    duration: '4 meses',
    credits: '6 créditos',
    requirements: 'No',
    priceUSD: 1225,
    installments: '3 cuotas de USD 475.00',
    enrollLink: 'https://cibca.felade.com/inscripciones',
    infoLink: 'https://cibca.felade.com',
    icon: '₿'
  },
  {
    id: 'wcf',
    badge: 'Congreso Internacional',
    title: 'World Compliance Forum - Costa Rica 2025',
    description: 'Una ocasión única para conocer las últimas novedades legislativas y las herramientas más innovadoras que le permitan proteger a su organización de amenazas como los delitos financieros, el blanqueo de capitales, la financiación del terrorismo, la corrupción, el fraude y la ciberdelincuencia.',
    modality: 'Presencial en Costa Rica',
    duration: '3 y 4 de noviembre',
    credits: 'Certificado de participación',
    requirements: 'No',
    priceUSD: null,
    installments: null,
    enrollLink: 'https://worldcomplianceforum.com',
    infoLink: 'https://worldcomplianceforum.com',
    icon: '🌎'
  }
];

// Servicios de FELADE
export const SERVICES = [
  {
    id: 'consultancy',
    title: 'Consultorías AML/FT',
    description: 'Nuestros consultores, con más de 20 años de experiencia individual en diversas áreas especializadas, están altamente capacitados para ofrecer soluciones precisas y efectivas a nuestros clientes.',
    icon: '🏢'
  },
  {
    id: 'programs',
    title: 'Programas de Estudio AML/FT',
    description: 'Certificación para Profesionales en Cumplimiento y una Especialización, ambos en colaboración con la Universidad para la Paz, reconocida por la ONU.',
    icon: '📚'
  },
  {
    id: 'advisory',
    title: 'Asesorías Especializadas',
    description: 'Nos dedicamos a desarrollar soluciones prácticas y efectivas que no solo ayuden a nuestros clientes a cumplir con las exigencias regulatorias locales e internacionales, sino que también les permitan sobresalir en un entorno cada vez más complejo y competitivo.',
    icon: '⚖️'
  },
  {
    id: 'conferences',
    title: 'Congresos Internacionales',
    description: 'En distintos países y en colaboración con el World Compliance Forum.',
    icon: '🎤'
  },
  {
    id: 'training',
    title: 'Capacitación y Entrenamiento',
    description: 'Ofrecemos una amplia gama de opciones de capacitación diseñadas para adaptarse a las necesidades específicas de nuestros clientes. A través de diversos formatos como foros, seminarios, certificaciones, charlas virtuales y presenciales, así como entrenamiento personalizado.',
    icon: '🎓'
  }
];

// Estadísticas institucionales
export const INSTITUTIONAL_STATS = [
  {
    number: '10+',
    label: 'Países con presencia institucional'
  },
  {
    number: '20+',
    label: 'Años de experiencia internacional desde 2005'
  },
  {
    number: '99%',
    label: 'Tasa de recomendación y asistencia a nuestros programas'
  },
  {
    number: '1.324+',
    label: 'Empresas y organizaciones que han confiado en nosotros'
  },
  {
    number: '17.774+',
    label: 'Profesionales capacitados por FELADE'
  }
];

// Alianzas por países
export const COUNTRY_ALLIANCES = [
  {
    country: 'Global',
    partners: [
      {
        name: 'Universidad para la Paz (UPEACE)',
        logo: '/images/partners/upaz-logo.png',
        url: 'https://www.upeace.org'
      }
    ]
  },
  {
    country: 'Costa Rica',
    partners: [
      {
        name: 'Colegio de Contadores Públicos de Costa Rica',
        logo: '/images/partners/costa-rica-logo.png',
        url: 'https://www.ccpa.or.cr'
      }
    ]
  },
  {
    country: 'México',
    partners: [
      {
        name: 'CNBV - Comisión Nacional de Valores',
        logo: '/images/partners/mexico-logo.png',
        url: 'https://www.gob.mx'
      }
    ]
  },
  {
    country: 'Perú',
    partners: [
      {
        name: 'Instituto de Auditores Internos del Perú',
        logo: '/images/partners/peru-logo.png',
        url: 'https://www.iaiperu.org'
      }
    ]
  },
  {
    country: 'Panamá',
    partners: [
      {
        name: 'Superintendencia de Sujetos No Financieros',
        logo: '/images/partners/panama-logo.png',
        url: 'https://www.ssnf.gob.pa'
      }
    ]
  },
  {
    country: 'República Dominicana',
    partners: [
      {
        name: 'Unidad de Análisis Financiero',
        logo: '/images/partners/dominicana-logo.png',
        url: 'https://www.uaf.gob.do'
      }
    ]
  }
];

// Información de contacto
export const CONTACT_INFO = {
  costaRica: {
    title: 'Casa Matriz',
    country: 'Costa Rica',
    address: 'San José, Costa Rica',
    phone: '+506 1234-5678',
    email: 'costarica@felade.com'
  },
  miami: {
    title: 'Hub Internacional',
    country: 'Estados Unidos',
    address: '1401 Brickell Ave Suite 330, Miami, Florida 33131',
    phone: '+1 (407) 670-4022',
    email: 'info@felade.com'
  }
};

// Redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/felade',
  twitter: 'https://twitter.com/felade',
  youtube: 'https://youtube.com/felade',
  instagram: 'https://instagram.com/felade'
};

// Enlaces del footer
export const FOOTER_LINKS = {
  support: [
    { name: 'Foro WCF', url: 'https://worldcomplianceforum.com' },
    { name: 'Ayuda & FAQ', url: '/faq' },
    { name: 'Contacto', url: '/contacto' },
    { name: 'Talleres', url: '/certificaciones' },
    { name: 'Certificaciones', url: '/certificaciones' }
  ]
};

// Información de la empresa
export const COMPANY_INFO = {
  name: 'FELADE',
  fullName: 'Fundación para el Estudio del Lavado de Activos y Delitos',
  founded: '2005',
  description: 'FELADE es una organización especializada en capacitación anti lavado de activos y financiamiento del terrorismo, con más de 20 años de experiencia brindando soluciones integrales a nivel internacional',
  mission: 'Brindar capacitación especializada de alta calidad en temas de cumplimiento, anti lavado de activos y financiamiento del terrorismo, contribuyendo al fortalecimiento del sistema financiero internacional',
  vision: 'Ser la organización líder en Latinoamérica en capacitación especializada en prevención de lavado de activos y financiamiento del terrorismo'
};

// Programas académicos
export const ACADEMIC_PROGRAMS = [
  {
    name: 'Certificación CIPLAD',
    duration: '4 meses',
    modality: 'Virtual',
    description: 'Certificación en Prevención del Lavado de Activos y Delitos con enfoque internacional'
  },
  {
    name: 'Certificación CIMAR',
    duration: '4 meses', 
    modality: 'Virtual',
    description: 'Certificación Internacional en Matrices de Riesgo para profesionales en cumplimiento'
  },
  {
    name: 'Certificación CIBCA',
    duration: '4 meses',
    modality: 'Virtual',
    description: 'Certificación Internacional Blockchain, Compliance y Activos Digitales'
  }
];

// Alianzas por países - compatibilidad con componentes existentes
export const COUNTRIES_ALLIANCES = [
  {
    country: 'Costa Rica',
    flag: '🇨🇷',
    institutions: 5,
    students: 2500,
    partnerships: [
      'Colegio de Contadores Públicos de Costa Rica',
      'Superintendencia General de Entidades Financieras',
      'Universidad para la Paz'
    ]
  },
  {
    country: 'México',
    flag: '🇲🇽',
    institutions: 3,
    students: 1800,
    partnerships: [
      'CNBV - Comisión Nacional de Valores',
      'Asociación de Bancos de México',
      'CONDUSEF'
    ]
  },
  {
    country: 'Perú',
    flag: '🇵🇪',
    institutions: 4,
    students: 1200,
    partnerships: [
      'Instituto de Auditores Internos del Perú',
      'Superintendencia de Banca y Seguros',
      'UIF Perú'
    ]
  },
  {
    country: 'Panamá',
    flag: '🇵🇦',
    institutions: 2,
    students: 900,
    partnerships: [
      'Superintendencia de Sujetos No Financieros',
      'Superintendencia de Bancos de Panamá'
    ]
  },
  {
    country: 'República Dominicana',
    flag: '🇩🇴',
    institutions: 2,
    students: 750,
    partnerships: [
      'Unidad de Análisis Financiero',
      'Superintendencia de Bancos'
    ]
  },
  {
    country: 'Estados Unidos',
    flag: '🇺🇸',
    institutions: 1,
    students: 600,
    partnerships: [
      'Hub Internacional Miami'
    ]
  }
];

// Estadísticas institucionales para otros componentes
export const INSTITUTIONAL_STATS_DETAILED = {
  yearsOfExperience: 20,
  graduatedStudents: 17774,
  partnerInstitutions: 1324,
  countriesPresence: 10,
  activeCertifications: 3,
  successRate: 99
};

// Información de la alianza UPAZ
export const UPAZ_PARTNERSHIP = {
  name: 'Universidad para la Paz (UPAZ)',
  description: 'Alianza estratégica con la Universidad para la Paz de las Naciones Unidas para programas de certificación y especialización',
  benefits: [
    'Reconocimiento internacional',
    'Programas conjuntos',
    'Intercambio académico',
    'Investigación colaborativa'
  ],
  established: '2018'
};