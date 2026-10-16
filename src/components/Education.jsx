import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      institution: 'Lovely Professional University',
      qualification: 'Bachelor of Technology – Computer Science and Engineering',
      location: 'Phagwara, Punjab',
      period: 'Aug 2024 – Present',
      score: 'CGPA: 7.77',
      isCurrent: true,
    },
    {
      institution: 'S. Sinha College',
      qualification: 'Intermediate (12th Grade)',
      location: 'Aurangabad, Bihar',
      period: 'Apr 2022 – May 2023',
      score: 'Percentage: 78.6%',
      isCurrent: false,
    },
    {
      institution: 'Lord Buddha Public School',
      qualification: 'Matriculation (10th Grade)',
      location: 'Aurangabad, Bihar',
      period: 'Apr 2020 – May 2021',
      score: 'Percentage: 78.8%',
      isCurrent: false,
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Education</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Academic Journey</h2>
          <p className="mt-2 text-sm text-slate-400">Educational background and qualifications</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-[30px] border border-white/10 bg-slate-900/70 p-6 sm:p-10 shadow-[0_20px_80px_rgba(15,23,42,0.6)] backdrop-blur-md"
        >
          <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent sm:left-9" />

          <div className="relative space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative ml-8 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.07] sm:ml-10 sm:p-6"
              >
                <div className="absolute -left-[2.55rem] top-6 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] sm:-left-[3.05rem]">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                      {item.isCurrent && (
                        <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-slate-300">{item.qualification}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      <Award size={13} className="text-cyan-400" />
                      <span>{item.score}</span>
                    </div>
                  </div>

                  <div className="shrink-0 text-sm text-slate-400 sm:text-right">
                    <p className="text-slate-300">{item.location}</p>
                    <p className="mt-1 font-mono text-xs text-slate-400">{item.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
