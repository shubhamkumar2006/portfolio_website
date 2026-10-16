import { useEffect, useState } from 'react'
import { Menu, X, Download, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-3' : 'pt-4'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? 'border-white/10 bg-slate-950/80 shadow-[0_10px_35px_rgba(2,8,23,0.8)]'
              : 'border-white/10 bg-slate-950/40'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 text-white group">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 font-extrabold text-xs text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-105 transition">
              SK
            </span>
            <span className="text-base font-bold tracking-wide group-hover:text-cyan-300 transition">
              Shubham Kumar
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Resume */}
          <div className="hidden items-center gap-2.5 md:flex">
            <a
              href="https://github.com/shubhamkumar2006"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/shubham-kumar6263/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="/Shubham_Kumar_CV.pdf"
              download="Shubham_Kumar_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition hover:-translate-y-0.5"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.nav>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2.5 rounded-2xl border border-white/10 bg-slate-950/95 p-4 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3.5 py-2 text-sm font-medium ${
                    activeSection === item.href.replace('#', '')
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-400/20'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/shubhamkumar2006"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/shubham-kumar6263/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
              <a
                href="/Shubham_Kumar_CV.pdf"
                download="Shubham_Kumar_CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-xs font-bold text-slate-950"
              >
                <Download size={13} /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
