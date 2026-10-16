import { motion } from 'framer-motion'
import { AppWindow, DatabaseZap, Globe, Layers3, Rocket, Zap, ShieldCheck, Cpu } from 'lucide-react'

const services = [
  {
    title: 'Full Stack Web Applications',
    description: 'Engineering responsive, modern web platforms from interactive React/Next.js interfaces to robust backend architectures.',
    icon: AppWindow,
  },
  {
    title: 'High-Performance REST APIs',
    description: 'Designing modular, well-documented RESTful APIs with clean routing, request validation, and fast throughput.',
    icon: Layers3,
  },
  {
    title: 'Concurrent Systems & Redis',
    description: 'Implementing distributed locking, transactional integrity, and background worker queues to handle heavy traffic.',
    icon: Zap,
  },
  {
    title: 'Database Architecture & Modeling',
    description: 'Designing normalized schemas, complex queries, and ACID transactions across PostgreSQL and MongoDB.',
    icon: DatabaseZap,
  },
  {
    title: 'Secure Authentication & RBAC',
    description: 'Configuring enterprise-grade role-based access control (RBAC), JWT token management, and data protection.',
    icon: ShieldCheck,
  },
  {
    title: 'C++ Systems & Algorithmic Design',
    description: 'Building performance-critical software, custom data structures, and cryptographic consensus mechanisms in C++.',
    icon: Cpu,
  },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Capabilities</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">What I Can Build</h2>
          <p className="mt-3 text-slate-300">Engineering end-to-end digital solutions with modern tools and clean code</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
