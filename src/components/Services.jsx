import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, Smartphone, Cpu, Workflow, BarChart3, RefreshCw, Headset, ChevronDown,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Development',
    headline: 'Build A Digital Presence That Creates Impact.',
    description:
      'We create modern websites and digital experiences that help businesses build trust, connect with customers, and grow online.',
    includes: ['Business websites', 'Landing pages', 'E-commerce platforms', 'Web applications'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    headline: 'Applications Designed For Modern Users.',
    description:
      'We build mobile experiences that help businesses engage customers and improve operations.',
    includes: ['Android applications', 'iOS applications', 'Cross-platform apps', 'Business applications'],
  },
  {
    icon: Cpu,
    title: 'Custom Software Development',
    headline: 'Software Built Around Your Business.',
    description:
      'We create custom platforms and systems designed around your specific workflow and requirements.',
    includes: ['Business management systems', 'Internal tools', 'Custom platforms', 'APIs'],
  },
  {
    icon: Workflow,
    title: 'AI & Automation Solutions',
    headline: 'Make Your Business Smarter.',
    description:
      'We help businesses reduce manual work and improve efficiency using intelligent systems and automation.',
    includes: ['AI integrations', 'Workflow automation', 'AI assistants', 'Smart business systems'],
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Analytics',
    headline: 'Turn Data Into Decisions.',
    description:
      'We transform business data into simple, actionable insights through powerful dashboards and analytics systems.',
    includes: ['Analytics dashboards', 'Reporting systems', 'Data visualization', 'Business intelligence'],
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    headline: 'Move Your Business Forward With Technology.',
    description:
      'We help businesses modernize operations through technology adoption, automation, and better digital processes.',
    includes: ['Process improvement', 'System integration', 'Technology planning'],
  },
  {
    icon: Headset,
    title: 'Customer Support Solutions',
    headline: 'Deliver Better Customer Experiences.',
    description:
      'TERVOQ helps businesses build reliable customer support operations that improve response time, customer satisfaction, and long-term relationships.',
    includes: [
      'Support management — email, chat, ticket handling',
      'Technical support — troubleshooting & guidance',
      'Support automation — chatbots & knowledge bases',
      'CX improvement — feedback & process optimization',
    ],
  },
]

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl glass p-7 transition-colors hover:bg-white/[0.05]"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-violet/20 text-blue-soft transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{service.title}</h3>
      <p className="mt-2 text-sm font-medium text-blue-soft">{service.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mist transition-colors hover:text-ivory"
      >
        {open ? 'Hide details' : 'What it includes'}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 overflow-hidden border-t border-line pt-4"
          >
            {service.includes.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-mist">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald" />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-5">Capabilities</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Build</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
