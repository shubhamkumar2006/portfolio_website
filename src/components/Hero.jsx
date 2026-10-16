import { motion } from 'framer-motion'
import { ArrowRight, Mail, Code2, Database, Cpu, Sparkles, Briefcase, Award, Terminal } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import portrait from '../assets/shubham-portrait.png'

export default function Hero() {
  const techs = ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'C++']

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28">
      {/* Background glowing gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.12),transparent_45%)]" />
      
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <Briefcase size={13} className="text-cyan-300" />
            Open to Software Engineering & Full-Stack Opportunities
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Shubham Kumar
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold tracking-tight text-slate-200 sm:text-2xl">
            Full Stack Developer &amp; Software Engineer
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            B.Tech Computer Science student at Lovely Professional University (CGPA 7.77). Passionate about architecting scalable full-stack applications, optimizing concurrent workflows with Redis and PostgreSQL, and solving complex algorithmic challenges in C++.
          </p>

          {/* Quick tech chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_25px_rgba(34,211,238,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(34,211,238,0.4)]"
            >
              View My Projects
              <ArrowRight size={17} />
            </a>
            <a
              href="/Shubham_Kumar_CV.pdf"
              download="Shubham_Kumar_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-white/10"
            >
              Download Resume (CV)
            </a>
          </div>

          <p className="mt-6 text-sm font-medium italic text-cyan-300/90">
            &quot;Turning complex algorithmic challenges into high-impact digital solutions.&quot;
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/shubhamkumar2006"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/shubham-kumar6263/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="mailto:shubhamsinghlbps@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right column: Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-[420px] rounded-[32px] border border-white/10 bg-slate-900/80 p-4 shadow-[0_20px_80px_rgba(2,8,23,0.9)] backdrop-blur-xl">
            {/* Window control bar */}
            <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                LPU CSE '28
              </span>
            </div>

            {/* Photo frame */}
            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-slate-950 p-2 shadow-inner">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-slate-900">
                <img
                  src={portrait}
                  alt="Shubham Kumar"
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-slate-950/80 p-2.5 backdrop-blur-md">
                  <p className="text-xs font-semibold text-white">Shubham Kumar</p>
                  <p className="text-[11px] text-cyan-300">B.Tech CSE • Lovely Professional University</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge 1: 4-Star HackerRank */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-4 py-3 shadow-[0_10px_30px_rgba(34,211,238,0.25)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold text-cyan-200">
              <Award size={18} className="text-cyan-400" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Competitive Coding</p>
                <p className="font-bold text-white">4★ C++ HackerRank &bull; 100 Days LeetCode</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge 2: Full Stack */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 -right-3 hidden rounded-2xl border border-violet-400/40 bg-slate-950/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(168,85,247,0.25)] backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-violet-200">
              <Sparkles size={15} className="text-violet-400" />
              <span>Full-Stack &amp; Redis Architect</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
