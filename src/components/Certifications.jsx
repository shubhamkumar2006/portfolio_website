import { motion } from 'framer-motion'
import { Award, CheckCircle2, ExternalLink, BookOpen, Star, Flame } from 'lucide-react'
import { certifications, trainings } from '../data/certifications'
import { achievements } from '../data/achievements'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Credentials &amp; Milestones</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications, Achievements &amp; Training
          </h2>
          <p className="mt-3 text-slate-300">
            Professional certifications, competitive coding badges, and industry training
          </p>
        </div>

        {/* 1. Achievements / Coding Badges */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <Award className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-white">Coding Badges &amp; Problem Solving</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-3xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                        {item.title}
                      </h4>
                      <span className="rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3 py-0.5 text-xs font-semibold text-cyan-300">
                        {item.platform}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-slate-400">{item.date}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Certifications */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400" size={20} />
            <h3 className="text-xl font-bold text-white">Industry Certifications</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-slate-900/90"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{cert.date}</span>
                  </div>
                  <h4 className="mt-3 text-base font-semibold text-white leading-snug">{cert.title}</h4>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                    <CheckCircle2 size={13} />
                    {cert.status}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Credential <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Intensive Training */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="text-violet-400" size={20} />
            <h3 className="text-xl font-bold text-white">Professional Training &amp; Apprenticeship</h3>
          </div>

          <div className="space-y-6">
            {trainings.map((train, index) => (
              <motion.div
                key={train.organization}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white">{train.role}</h4>
                    <p className="text-base font-semibold text-cyan-300">{train.organization}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-violet-300">
                    {train.period}
                  </span>
                </div>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {train.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
