import { HeroSection } from '@/components/sections/HeroSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { MatrixBackground } from '@/components/effects/MatrixBackground'

export default function HomePage() {
  return (
    <main className="relative z-10">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}