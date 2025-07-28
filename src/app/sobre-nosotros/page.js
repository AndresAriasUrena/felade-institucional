import VideoSection from '@/components/sections/VideoSection'
import AboutUsExcerpt from '@/components/sections/AboutUsExcerpt'
import InstitutionalMission from '@/components/sections/InstitutionalMission'

export const metadata = {
  title: 'Sobre Nosotros - FELADE',
  description: 'Conoce la historia, misión y valores de FELADE. 29 años formando profesionales en prevención de lavado de activos y financiamiento del terrorismo.',
}

export default function SobreNosotros() {
  return (
    <>
      {/* Video Timeline Section */}
      <VideoSection />
      
      {/* About Us Overview */}
      <AboutUsExcerpt />
      
      {/* Mission, Vision & Values */}
      <InstitutionalMission />
    </>
  )
}