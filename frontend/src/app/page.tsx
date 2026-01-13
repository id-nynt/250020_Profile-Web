import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'
import Competitions from '@/components/Competitions'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Competitions />
      <Experience />
      <Footer />
    </div>
  )
}