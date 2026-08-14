import { motion } from 'framer-motion'
import { Layers, Workflow, Boxes, Users, TrendingUp } from 'lucide-react'

const SOLUTIONS = [
  { icon: Layers, title: 'Digital Presence', description: 'Helping businesses build strong online experiences.' },
  { icon: Workflow, title: 'Automation', description: 'Reducing repetitive work through intelligent workflows.' },
  { icon: Boxes, title: 'Custom Systems', description: 'Building software designed around business needs.' },
  { icon: Users, title: 'Customer Experience', description: 'Helping businesses create stronger customer relationships.' },
  { icon: TrendingUp, title: 'Scalable Technology', description: 'Creating solutions that grow with the business.' },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-5">Solutions</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Technology Built Around Your Goals.
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
        {SOLUTIONS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group bg-ink p-7 transition-colors hover:bg-panel"
          >
            <Icon size={20} className="text-blue-soft" />
            <h3 className="mt-5 font-display text-base font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
