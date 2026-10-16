import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Wrench, Sparkles, Layers, Award } from 'lucide-react'
import { skillFilterTabs, skillGroups } from '../data/skills'

const categoryIcons = {
  languages: Code2,
  frontend: Sparkles,
  backend: Cpu,
  database: Database,
  tools: Wrench,
  'core-cs': Layers,
  'soft-skills': Award,
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredGroups = useMemo(() => {
    if (activeFilter === 'all') return skillGroups
    return skillGroups.filter((group) => group.id === activeFilter)
  }, [activeFilter])

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-3 text-slate-300">Core technologies, frameworks, databases, and problem-solving tools</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {skillFilterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition ${
                activeFilter === tab.id
                  ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredGroups.map((group, groupIndex) => {
            const Icon = categoryIcons[group.id] || Code2

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
