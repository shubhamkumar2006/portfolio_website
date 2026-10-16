import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Exploring from './components/Exploring'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sectionIds = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-10% 0px -30% 0px' },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_25%)]" />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Exploring />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
