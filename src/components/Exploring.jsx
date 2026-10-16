import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Cpu, Database, Rocket, Sparkles, Workflow, Layers, ShieldCheck, Server } from 'lucide-react'

const items = [
  { title: 'Distributed Systems & Redis Caching', icon: Server, desc: 'High-concurrency locking, distributed caching, and job queues' },
  { title: 'Advanced PostgreSQL Optimization', icon: Database, desc: 'Indexing strategies, query optimization, and transaction safety' },
  { title: 'Next.js 15 & Full-Stack React', icon: Sparkles, desc: 'Server components, server actions, and modern SSR architectures' },
  { title: 'Docker & Containerization', icon: Cloud, desc: 'Containerizing full-stack microservices for reliable deployments' },
  { title: 'Data Structures & Dynamic Programming', icon: Rocket, desc: 'Advanced algorithmic mastery, graph algorithms, and space-time optimization' },
  { title: 'Cryptographic Systems & Blockchain', icon: ShieldCheck, desc: 'Consensus mechanisms, hashing integrity, and decentralized protocols' },
]

export default function Exploring() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Continuous Growth</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Currently Exploring</h2>
          <p className="mt-3 text-slate-300">Areas of deep technical interest and continuous learning</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-[26px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
