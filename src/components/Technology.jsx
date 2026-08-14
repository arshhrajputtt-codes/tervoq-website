import { motion } from 'framer-motion'

const STACK = [
  { group: 'Frontend', items: ['React', 'Next.js'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'Node.js'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL'] },
  { group: 'Infrastructure', items: ['Cloud', 'APIs', 'Automation'] },
  { group: 'AI', items: ['AI Integration', 'Intelligent Systems'] },
]

export default function Technology() {
  return (
    <section className="section">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-5">Stack</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Built With Modern Technology</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {STACK.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl glass p-6"
          >
            <p className="eyebrow mb-4">{s.group}</p>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm font-medium text-ivory">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
