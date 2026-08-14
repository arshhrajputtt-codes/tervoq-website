import { motion } from 'framer-motion'
import { ArrowUpRight, Search, GitCompare, ShieldAlert, FileText } from 'lucide-react'

const FEATURES = [
  { icon: Search, label: 'Supplier analysis' },
  { icon: GitCompare, label: 'Smart comparison' },
  { icon: ShieldAlert, label: 'Risk detection' },
  { icon: FileText, label: 'Automated reports' },
]

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-5">Our Products</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Technology created by TERVOQ.</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink p-10 md:p-14"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet/10 blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">Featured Product</p>
            <h3 className="font-display text-3xl font-extrabold tracking-tight">TERVOQ Procura</h3>
            <p className="mt-2 text-sm font-medium text-blue-soft">Procurement Intelligence Platform</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
              A smarter way to analyze supplier quotations, identify risks, compare options, and make confident business decisions.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Explore Product
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-xl glass p-5">
                <Icon size={18} className="text-emerald" />
                <p className="mt-3 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
