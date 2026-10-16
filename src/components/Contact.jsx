import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitted(true)
    setForm(initialState)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get In Touch</h2>
          <p className="mt-3 text-slate-300">Let's discuss opportunities, projects, or collaborations</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between rounded-[30px] border border-white/10 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Let's connect!</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                I'm actively seeking software engineering internships, full-stack development roles, and open-source collaborations. Feel free to reach out directly via email, phone, or LinkedIn!
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:shubhamsinghlbps@gmail.com"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-medium truncate">shubhamsinghlbps@gmail.com</span>
                </a>

                <a
                  href="tel:+916263893959"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">+91 - 6263893959</span>
                </a>

                <a
                  href="https://github.com/shubhamkumar2006"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <FaGithub size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">github.com/shubhamkumar2006</span>
                </a>

                <a
                  href="https://linkedin.com/in/shubham-kumar6263/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <FaLinkedinIn size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">linkedin.com/in/shubham-kumar6263</span>
                </a>

                <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm font-medium">LPU (Phagwara, Punjab) / Aurangabad, Bihar</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-white/10 bg-slate-900/70 p-6 sm:p-8 shadow-[0_20px_80px_rgba(15,23,42,0.6)] backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Your Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:bg-slate-950"
                  placeholder="e.g. John Doe"
                />
                {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:bg-slate-950"
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:bg-slate-950"
                placeholder="Software Engineering Opportunity / Project Inquiry"
              />
              {errors.subject && <p className="mt-1.5 text-xs text-rose-400">{errors.subject}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:bg-slate-950 resize-none"
                placeholder="Hi Shubham, I would love to connect with you regarding..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_25px_rgba(34,211,238,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(34,211,238,0.4)]"
              >
                <Send size={15} />
                Send Message
              </button>

              {isSubmitted && (
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>Thank you! Your message is ready to send.</span>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
