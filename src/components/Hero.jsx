import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Code2, Workflow, Building2 } from 'lucide-react'

const nodes = [
  { label: 'AI', icon: Cpu, style: 'top-0 left-1/2 -translate-x-1/2' },
  { label: 'Software', icon: Code2, style: 'top-1/2 left-0 -translate-y-1/2' },
  { label: 'Automation', icon: Workflow, style: 'top-1/2 right-0 -translate-y-1/2' },
  { label: 'Business', icon: Building2, style: 'bottom-0 left-1/2 -translate-x-1/2' },
]

export default function Hero({ ready }) {
  const show = ready ? { opacity: 1, y: 0 } : {}
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="section grid items-center gap-16 !py-0 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={show}
            transition={{ duration: 0.5, delay: 0 }}
            className="eyebrow mb-6"
          >
            Technology Solutions Company
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={show}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
          >
            Build. Automate. <span className="text-blue-soft">Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={show}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-mist"
          >
            TERVOQ designs and develops websites, applications, software systems, automation solutions, and customer experience systems that help businesses grow and operate smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={show}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Start a Project
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-white/5"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* ecosystem diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full border border-line" />
          <div className="absolute inset-[15%] rounded-full border border-line" />

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl glass shadow-[0_0_60px_rgba(47,107,255,0.15)]">
            <span className="font-display text-sm font-bold tracking-tight">TERVOQ</span>
          </div>

          {nodes.map(({ label, icon: Icon, style }) => (
            <div key={label} className={`absolute ${style} flex flex-col items-center gap-2`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl glass">
                <Icon size={20} className="text-blue-soft" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-mist">{label}</span>
            </div>
          ))}

          {/* connecting data particles */}
          <motion.span
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-emerald"
            animate={{
              left: ['50%', '50%', '0%', '50%'],
              top: ['50%', '0%', '50%', '50%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
