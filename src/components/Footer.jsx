export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="text-left sm:text-center lg:text-left">
          <p className="text-xl font-bold text-white">Shubham Kumar</p>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Full Stack Developer &amp; Software Engineer &bull; B.Tech CSE, Lovely Professional University
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-slate-300">
          <a href="#home" className="transition hover:text-cyan-300">Home</a>
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#certifications" className="transition hover:text-cyan-300">Certifications</a>
          <a href="#education" className="transition hover:text-cyan-300">Education</a>
          <a href="https://github.com/shubhamkumar2006" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
          <a href="https://linkedin.com/in/shubham-kumar6263/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
          <a href="mailto:shubhamsinghlbps@gmail.com" className="transition hover:text-cyan-300">Email</a>
        </div>

        <div className="text-xs text-slate-400">
          &copy; 2026 Shubham Kumar. All rights reserved.
        </div>
      </div>

      <div className="border-t border-white/5 py-3 text-center text-[11px] text-slate-400">
        Engineered with React, Vite &amp; Tailwind CSS
      </div>
    </footer>
  )
}
