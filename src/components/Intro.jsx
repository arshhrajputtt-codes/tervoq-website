import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="eyebrow mb-5">Why TERVOQ</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Technology That Solves Real Problems
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-mist">
          Every business has unique challenges. TERVOQ combines engineering, automation, design, and business understanding to create solutions that deliver real value.
        </p>
      </motion.div>
    </section>
  )
}
