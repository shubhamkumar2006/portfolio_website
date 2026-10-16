import { motion } from 'framer-motion'
import { GraduationCap, University, Code2, Cpu, Award, Zap } from 'lucide-react'

const infoCards = [
  { icon: GraduationCap, title: 'Degree', text: 'B.Tech CSE (CGPA: 7.77)' },
  { icon: University, title: 'University', text: 'Lovely Professional University' },
  { icon: Code2, title: 'Specialization', text: 'Full Stack & Redis Architecture' },
  { icon: Award, title: 'Coding Badges', text: '4★ HackerRank & 100-Day LeetCode' },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-8 text-slate-300">
              I am <span className="font-semibold text-white">Shubham Kumar</span>, a Computer Science and Engineering undergraduate at Lovely Professional University. I specialize in building robust, performant full-stack web applications using modern technologies including React.js, Next.js, Node.js, Express, PostgreSQL, Redis, and MongoDB.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              With a deep foundation in Data Structures, Algorithms, and Object-Oriented Programming in C++, I focus on crafting scalable architectures, implementing role-based security (RBAC), and optimizing concurrent systems using Redis distributed locking and background workers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infoCards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/80"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-cyan-500/10 p-2.5 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{title}</p>
                  <p className="mt-1.5 text-sm font-medium text-white">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.8)] backdrop-blur-md"
          >
            <div className="rounded-[24px] border border-white/10 bg-[#020817] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-300">
                  shubham.config.ts
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                <div className="flex gap-2">
                  <span className="text-cyan-300">const</span>
                  <span className="text-violet-300">developer</span>
                  <span className="text-slate-200">=</span>
                  <span className="text-emerald-300">&#123;</span>
                </div>
                <div className="pl-5 space-y-1.5">
                  <div><span className="text-cyan-300">name:</span> <span className="text-amber-200">'Shubham Kumar'</span>,</div>
                  <div><span className="text-cyan-300">role:</span> <span className="text-amber-200">'Full Stack Developer & Software Engineer'</span>,</div>
                  <div><span className="text-cyan-300">university:</span> <span className="text-amber-200">'Lovely Professional University'</span>,</div>
                  <div><span className="text-cyan-300">cgpa:</span> <span className="text-emerald-300">7.77</span>,</div>
                  <div><span className="text-cyan-300">coreTech:</span> [<span className="text-sky-300">'C++'</span>, <span className="text-sky-300">'React'</span>, <span className="text-sky-300">'Node'</span>, <span className="text-sky-300">'Postgres'</span>, <span className="text-sky-300">'Redis'</span>],</div>
                  <div><span className="text-cyan-300">strengths:</span> [<span className="text-emerald-200">'DSA'</span>, <span className="text-emerald-200">'Concurrency'</span>, <span className="text-emerald-200">'System Design'</span>],</div>
                </div>
                <div className="text-emerald-300">&#125;</div>
                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-500/5 p-3 text-cyan-200">
                  <span className="text-cyan-400">developer</span>.<span className="text-violet-300">solveProblems</span>(<span className="text-emerald-300">&#123; scalable: true, secure: true &#125;</span>)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
