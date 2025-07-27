import HeroSlider from '@/components/sections/HeroSlider'
import ServicesOverview from '@/components/sections/ServicesOverview'
import InstitutionalMission from '@/components/sections/InstitutionalMission'
import CertificationCards from '@/components/sections/CertificationCards'
import ServicesSection from '@/components/sections/ServicesSection'
import AcademicPrograms from '@/components/sections/AcademicPrograms'
import InstitutionalStats from '@/components/sections/InstitutionalStats'
import UpazPartner from '@/components/sections/UpazPartner'
import CountryAlliances from '@/components/sections/CountryAlliances'
import AboutUsExcerpt from '@/components/sections/AboutUsExcerpt'
import MainCertifications from '@/components/sections/MainCertifications'
import SuccessIndicators from '@/components/sections/SucessIndicators'

export default function Home() {
  return (
    <>
      {/* Hero Section with Certification Slider */}
      <HeroSlider />
      
      {/* Service Overview Slider */}
      <ServicesOverview />

      <MainCertifications/>
      <SuccessIndicators/>
      {/* Academic Programs */}
      {/* <AcademicPrograms /> */}
            
      {/* Featured Certifications */}
      {/* <CertificationCards /> */}
      
      {/* Institutional Mission, Vision & Values */}
      <InstitutionalMission />
      
      {/* Services Overview */}
      <ServicesSection />
      
      
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
