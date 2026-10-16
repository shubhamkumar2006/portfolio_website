import { motion } from 'framer-motion'
import { extracurricularActivities } from '../data/achievements'

export default function Achievements() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Extracurricular Activities</p>
        </div>

        <div className="space-y-4 border-t border-white/60 pt-4">
          {extracurricularActivities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col gap-2 border-b border-white/20 pb-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-3 text-base text-slate-200 md:text-lg">
                <span className="mt-2 text-cyan-300">•</span>
                <div>
                  <span className="font-medium text-white">{item.title}</span>
                  <span className="text-slate-300"> | {item.org}</span>
                  {item.link !== '#' ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 text-cyan-300 underline decoration-cyan-400/70 underline-offset-4 transition hover:text-cyan-200"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="ml-2 text-cyan-300">{item.label}</span>
                  )}
                </div>
              </div>

              <div className="text-sm font-medium text-slate-300 md:pl-6">{item.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
