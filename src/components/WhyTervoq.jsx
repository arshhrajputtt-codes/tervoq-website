import { motion } from 'framer-motion'
import { Cpu, Lightbulb, Puzzle, Handshake } from 'lucide-react'

const POINTS = [
  { icon: Cpu, title: 'Modern Engineering', description: 'Building reliable and scalable technology.' },
  { icon: Lightbulb, title: 'Business Understanding', description: 'Solving problems, not just writing code.' },
  { icon: Puzzle, title: 'Custom Solutions', description: 'Creating technology around your needs.' },
  { icon: Handshake, title: 'Long-Term Partnership', description: 'Supporting growth beyond delivery.' },
]

export default function WhyTervoq() {
  return (
    <section className="section">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-5">Why Choose Us</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose TERVOQ?</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {POINTS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-5 rounded-2xl glass p-7"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-violet/20 text-blue-soft">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
