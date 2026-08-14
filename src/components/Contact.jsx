import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Website Development',
  'Mobile App Development',
  'Custom Software Development',
  'AI & Automation Solutions',
  'Dashboards & Analytics',
  'Digital Transformation',
  'Customer Support Solutions',
  'Not sure yet',
]

// Get a free access key at https://web3forms.com (no signup wall — just
// enter the email you want submissions sent to) and paste it below.
const WEB3FORMS_ACCESS_KEY = '83713abf-c0cb-4369-8f21-a250afd58a8d'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New project inquiry — TERVOQ website')
    formData.append('from_name', 'TERVOQ Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong sending your message. Please try again or email hello@tervoq.tech directly.')
      }
    } catch {
      setError('Something went wrong sending your message. Please try again or email hello@tervoq.tech directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="grid gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-5">Get In Touch</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Have A Project In Mind?
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-mist">
            Let&apos;s build something meaningful together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl glass p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 size={32} className="text-emerald" />
              <p className="mt-4 font-display text-lg font-bold">Message sent.</p>
              <p className="mt-1 text-sm text-mist">We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Company" name="company" type="text" />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                  Service Required
                </label>
                <select
                  name="service"
                  className="w-full rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-blue-soft"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s} className="bg-panel">{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                  Project Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Tell us what you're building..."
                  className="w-full resize-none rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-mist/60 focus:border-blue-soft"
                />
              </div>
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? 'Sending...' : 'Start A Project'}
                {!submitting && <ArrowUpRight size={16} strokeWidth={2.5} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-blue-soft"
      />
    </div>
  )
}
