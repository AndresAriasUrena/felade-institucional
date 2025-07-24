import HeroSlider from '@/components/sections/HeroSlider'
import InstitutionalMission from '@/components/sections/InstitutionalMission'
import CertificationCards from '@/components/sections/CertificationCards'
import ServicesSection from '@/components/sections/ServicesSection'
import AcademicPrograms from '@/components/sections/AcademicPrograms'
import InstitutionalStats from '@/components/sections/InstitutionalStats'
import UpazPartner from '@/components/sections/UpazPartner'
import CountryAlliances from '@/components/sections/CountryAlliances'
import AboutUsExcerpt from '@/components/sections/AboutUsExcerpt'

export default function Home() {
  return (
    <>
      {/* Hero Section with Certification Slider */}
      <HeroSlider />
      
      {/* Institutional Mission, Vision & Values */}
      <InstitutionalMission />
      
      {/* Featured Certifications */}
      <CertificationCards />
      
      {/* Services Overview */}
      <ServicesSection />
      
      {/* Academic Programs */}
      <AcademicPrograms />
      
      {/* Institutional Statistics */}
      <InstitutionalStats />
      
      {/* UPAZ Partnership */}
      <UpazPartner />
      
      {/* Country Alliances */}
      <CountryAlliances />
      
      {/* About Us Excerpt */}
      <AboutUsExcerpt />
    </>
  )
}
