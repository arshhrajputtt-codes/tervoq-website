import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Discover', description: 'Understand goals and challenges.' },
  { n: '02', title: 'Plan', description: 'Create the right technology strategy.' },
  { n: '03', title: 'Design', description: 'Create intuitive experiences.' },
  { n: '04', title: 'Build', description: 'Develop reliable solutions.' },
  { n: '05', title: 'Launch', description: 'Deploy and improve.' },
]

export default function Process() {
  return (
    <section className="section">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-5">Our Process</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">From Idea To Reality</h2>
      </div>

      <div className="relative grid gap-10 md:grid-cols-5 md:gap-6">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
        {STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full glass font-mono text-sm text-blue-soft">
              {step.n}
            </div>
            <h3 className="font-display text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
