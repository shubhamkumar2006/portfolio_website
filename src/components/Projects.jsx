import { motion } from 'framer-motion'
import { ExternalLink, Calendar, TrendingUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-slate-300">Scalable full-stack platforms and system software engineered by Shubham</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.6)] backdrop-blur-md transition hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
            >
              <div>
                <div className={`relative h-44 bg-gradient-to-br ${project.accent} p-6`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_30%)]" />
                  <div className="relative flex h-full items-start justify-between">
                    <div className="rounded-2xl border border-white/15 bg-slate-950/40 p-3.5 text-3xl backdrop-blur-md shadow-lg">
                      {project.icon}
                    </div>
                    {project.date && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-md">
                        <Calendar size={12} className="text-cyan-400" />
                        {project.date}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>

                  {/* Impact metrics chips */}
                  {project.metrics && (
                    <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-2.5">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="font-mono text-xs font-bold text-cyan-300">{m.value}</p>
                          <p className="text-[10px] text-slate-400 truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="mt-4 flex gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-4 py-2.5 text-xs font-bold text-cyan-100 transition hover:bg-cyan-500/25"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : null}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
                  >
                    <FaGithub size={15} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
